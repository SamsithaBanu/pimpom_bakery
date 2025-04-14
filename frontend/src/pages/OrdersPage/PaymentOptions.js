import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom";
import SummaryApi from "../../common";

const stripePromise = loadStripe(
  "pk_test_51Q4zsrKffrppqE6XogTrB9Oqc6W7l15IYh22Z0x0LdgkWZdg0or4aLYZQgJ5jdQTpMHA3Z8vgDReUVw4m08hGj4400lqctSBSq"
);

const PaymentForm = ({ totalAmount, shippingAddress, user }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [paymentProcessing, setPaymentProcessing] = useState(false);

  const handleSubmit = async (e) => {
    console.log("user, user", user);
    e.preventDefault();
    setPaymentProcessing(true);

    try {
      const res = await fetch(SummaryApi?.paymentCreate?.url, {
        method: SummaryApi?.paymentCreate?.method,
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: totalAmount,
          currency: "usd",
          shippingAddress,
        }),
      });
      console.log("res", res);

      // Check if the response is OK and if the content-type is JSON
      if (!res.ok) {
        throw new Error("Failed to create payment intent");
      }

      const contentType = res.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Response is not JSON");
      }

      const { clientSecret } = await res.json();

      const cardElement = elements.getElement(CardElement);
      const paymentResult = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            name: user.name,
            email: user.email,
          },
        },
      });

      if (paymentResult.error) {
        setError(paymentResult.error.message);
        setPaymentProcessing(false);
      } else {
        if (paymentResult.paymentIntent.status === "succeeded") {
          alert("Payment successful!");
        }
        setPaymentProcessing(false);
      }
    } catch (err) {
      console.error("Error:", err);
      setError("There was an error processing the payment. Please try again.");
      setPaymentProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe || paymentProcessing}>
        {paymentProcessing ? "Processing..." : "Pay Now"}
      </button>
      {error && <div>{error}</div>}
    </form>
  );
};

const CODPayment = ({ shippingAddress }) => {
  const handleCODOrder = () => {
    // You can replace this with a real order creation process
    alert(
      `Order placed! Payment will be collected upon delivery at ${shippingAddress.line1}, ${shippingAddress.city}.`
    );
  };

  return (
    <div>
      <h3>Cash on Delivery (COD)</h3>
      <button onClick={handleCODOrder}>Place Order (COD)</button>
    </div>
  );
};

const PaymentOptions = () => {
  const [selectedMethod, setSelectedMethod] = useState("debitCard");
  const location = useLocation();
  const { addressArray, totalPrice, user } = location.state || {};

  return (
    <div>
      <h3>Select Payment Method</h3>
      <div>
        <input
          type="radio"
          id="debitCard"
          name="paymentMethod"
          value="debitCard"
          checked={selectedMethod === "debitCard"}
          onChange={() => setSelectedMethod("debitCard")}
        />
        <label htmlFor="debitCard">Debit/Credit Card</label>

        <input
          type="radio"
          id="cod"
          name="paymentMethod"
          value="cod"
          checked={selectedMethod === "cod"}
          onChange={() => setSelectedMethod("cod")}
        />
        <label htmlFor="cod">Cash on Delivery (COD)</label>
      </div>

      {selectedMethod === "debitCard" && (
        <Elements stripe={stripePromise}>
          <PaymentForm
            totalAmount={totalPrice}
            shippingAddress={addressArray}
            user={user}
          />
        </Elements>
      )}

      {selectedMethod === "cod" && (
        <CODPayment shippingAddress={addressArray} />
      )}
    </div>
  );
};

export default PaymentOptions;
