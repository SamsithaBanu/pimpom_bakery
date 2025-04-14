import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Assuming you're using react-router
import { OrderPageStyled } from "./OrderPageStyled";
import success from "../../assests/success.png";

const Success = () => {
  const location = useLocation();
  const [sessionData, setSessionData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Extract session_id from URL
  const query = new URLSearchParams(location.search);
  const sessionId = query.get("session_id");
  const paymentType = query.get("payment");
  const base_url =
    import.meta.env.MODE === "development" ? "http://localhost:8080" : "";

  console.log("payment", paymentType);

  useEffect(() => {
    if (sessionId) {
      fetch(`${base_url}/api/payment-details?session_id=${sessionId}`)
        .then((response) => response.json())
        .then((data) => {
          setSessionData(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching payment details:", error);
          setLoading(false);
        });
    }
  }, [sessionId, paymentType]);

  console.log("session", sessionData);

  if (loading) {
    return <div>Loading payment details...</div>;
  }

  if (!sessionData) {
    return <div>No payment details found.</div>;
  }

  return (
    // <div>
    //   <h2>Payment Successful!</h2>
    //   <p>Payment Details:</p>
    //   <pre>{JSON.stringify(sessionData, null, 2)}</pre>
    //   {/* Render product details */}
    //   <p>Products:</p>
    //   {sessionData.line_items.data.map((item, index) => (
    //     <div key={index}>
    //       <p>Product: {item.description}</p>
    //       <p>Quantity: {item.quantity}</p>
    //     </div>
    //   ))}
    // </div>
    <OrderPageStyled>
      <div className="successWrapper">
        <img className="image" src={success} alt="Success" />
        <div className="text">Payment Completed Successfully!!</div>
        <div className="subText">
          Thank you for your purchase. Your payment has been successfully
          processed.
        </div>
        <Link
          className="orderCTA"
          to={
            paymentType === "cod"
              ? `/single-orders?session_id=${sessionId}&payment=${paymentType}`
              : `/single-orders?session_id=${sessionId}`
          }
        >
          See Order
        </Link>
      </div>
    </OrderPageStyled>
  );
};

export default Success;
