import React, { useState, useEffect, useContext } from "react";
import { MyCartStyled } from "../MyCart/MyCartStyled";
import SummaryApi from "../../common";
import { dateFormatStandard } from "../../helpers/common-utils";
import displayINRCurrency from "../../helpers/displayCurrency";
import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { CheckoutStyled } from "./CheckoutStyled";
import Context from "../../context";
import { MdPayment } from "react-icons/md";
import { TbCash } from "react-icons/tb";

const Checkout = () => {
  const user = useSelector((state) => state?.user?.user);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dateFormat, setDateFormat] = useState();
  const [addressArray, setAddressArray] = useState();
  const context = useContext(Context);
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    setDateFormat(dateFormatStandard());
  }, []);

  useEffect(() => {
    if (user) {
      setAddressArray(user?.addresses?.[0]);
    }
  }, [user, addressArray]);

  const totalQty = data.reduce(
    (previousValue, currentValue) => previousValue + currentValue.quantity,
    0
  );

  const fetchData = async () => {
    console.log("hii");
    const response = await fetch(SummaryApi.addToCartViewProduct.url, {
      method: SummaryApi.addToCartViewProduct.method,
      credentials: "include",
      headers: {
        "content-type": "application/json"
      }
    });

    const responseData = await response.json();

    if (responseData.success) {
      setData(responseData.data);
    }
  };

  const handleLoading = async () => {
    await fetchData();
  };

  useEffect(() => {
    setLoading(true);
    handleLoading();
    setLoading(false);
  }, []);
  console.log("debit", data);

  const navigationToPayment = async () => {
    const stripePromise = await loadStripe(
      "pk_test_51Q5mZqP0sV8P5QHSrpaBh8ZVGhgo9R8ufvQd9pfQXns8kU5gK99upsUJBImVoI972ejTICV7a36UuvzHL7lE2Q4r00LHpDya3a"
    );
    if (selectedOption === "Pay with Debit Card") {
      console.log("skldjflsk");
      const response = await fetch(SummaryApi?.paymentCreate?.url, {
        method: SummaryApi?.paymentCreate?.method,
        credentials: "include",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({
          cartItems: data,
          usersId: user?._id,
          selectedOption: "Pay with Debit Card",
          totalPrice: totalPrice
        }) // Ensure data is correctly passed
      });
      const responseData = await response.json();
      console.log("respo", responseData);

      if (responseData?.id) {
        stripePromise?.redirectToCheckout({ sessionId: responseData?.id });
      }
    } else if (selectedOption === "Cash on Delivery") {
      // alert("You choosed cash on delivery!!");
      const response = await fetch(SummaryApi?.paymentCreate?.url, {
        method: SummaryApi?.paymentCreate?.method,
        credentials: "include",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({
          cartItems: data,
          usersId: user?._id,
          selectedOption: "Cash on Delivery",
          totalPrice: totalPrice
        }) // Ensure data is correctly passed
      });
      const responseData = await response.json();
      console.log("respo", responseData);
      if (responseData) {
        navigate(`/success?session_id=${responseData?.sessionId}&payment=cod`);
      }
    } else {
      alert("can you please choose any one of the payment option");
    }
  };
  console.log("ca", selectedOption);

  const increaseQty = async (id, qty) => {
    const response = await fetch(SummaryApi.addToCartUpdateProduct.url, {
      method: SummaryApi.addToCartUpdateProduct.method,
      credentials: "include",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        _id: id,
        quantity: qty + 1
      })
    });

    const responseData = await response.json();

    if (responseData.success) {
      fetchData();
    }
  };

  const decraseQty = async (id, qty) => {
    if (qty >= 2) {
      const response = await fetch(SummaryApi.addToCartUpdateProduct.url, {
        method: SummaryApi.addToCartUpdateProduct.method,
        credentials: "include",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({
          _id: id,
          quantity: qty - 1
        })
      });

      const responseData = await response.json();

      if (responseData.success) {
        fetchData();
      }
    }
  };

  const deleteCartProduct = async (id) => {
    const response = await fetch(SummaryApi.deleteAddToCartProduct.url, {
      method: SummaryApi.deleteAddToCartProduct.method,
      credentials: "include",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        _id: id
      })
    });

    const responseData = await response.json();

    if (responseData.success) {
      fetchData();
      context.fetchUserAddToCart();
    }
  };

  const totalPrice = data.reduce(
    (preve, curr) => preve + curr.quantity * curr?.productId?.sellingPrice,
    0
  );
  const totalWholePrice = data.reduce(
    (preve, curr) => preve + curr.quantity * curr?.productId?.price,
    0
  );
  const difference = totalWholePrice - totalPrice;
  const servicePrice = 10;

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <CheckoutStyled>
      <div className="mycartWrapper">
        <div className="leftWrapper">
          <div className="total">Delivery Address</div>
          <div className="addresswrap">
            <div className="left">
              <div className="name">{user?.name}</div>
              <div className="addrss">
                {addressArray?.doorNo}, {addressArray?.landmark},{" "}
                {addressArray?.address}
              </div>
            </div>
            <div className="right">
              <Link
                to={`/general-user/edit-address/${user?._id}`}
                state={{ address: addressArray, fromCheckout: true }} // Pass state as a separate prop
                className="edit"
              >
                <MdModeEdit size={22} />
              </Link>
            </div>
          </div>
          <div className="totalItemsWrapper">
            <div className="total">
              Total:<b> {totalQty}</b> Item(s)
            </div>
            <div className="addtoCartWrapper">
              <div className="topwrapper">
                <div className="left">
                  <div className="standard">Standard</div>
                  <div className="delivery">delivery on {dateFormat}</div>
                </div>
                <div className="right">
                  <b>{totalQty}</b> item(s)
                </div>
              </div>
              <div className="bottomWrapper">
                {data?.map((product) => {
                  return (
                    <div
                      className="cartWrapper"
                      key={product?._id + "Add To Cart Loading"}
                    >
                      {console.log("pr", product?.productId?.sellingPrice)}
                      <div className="top">
                        <div className="image">
                          <img src={product?.productId?.productImage[0]} />
                        </div>
                        <div className="details">
                          <div className="productname">
                            {product?.productId?.productName}
                          </div>
                          <div className="category">
                            {product?.productId?.category}
                          </div>
                          <div className="priceWrapper">
                            <div className="actualPrice">
                              {displayINRCurrency(
                                product?.productId?.sellingPrice
                              )}
                            </div>
                            <div className="saves">
                              {displayINRCurrency(product?.productId?.price)}
                            </div>
                          </div>
                        </div>
                        <div className="addedCTA">
                          <button
                            className="minus"
                            onClick={() =>
                              decraseQty(product?._id, product?.quantity)
                            }
                          >
                            -
                          </button>
                          <div className="count">{product?.quantity}</div>
                          <button
                            className="add"
                            onClick={() =>
                              increaseQty(product?._id, product?.quantity)
                            }
                          >
                            +
                          </button>
                        </div>
                        <div
                          className="removeCTA"
                          onClick={() => deleteCartProduct(product?._id)}
                        >
                          <MdDelete size={25} />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="rightWrapper">
          <div className="paymentOptions">
            <div className="header">Payment Options</div>
            <div className="paymentMethod">
              <div className="item">
                <label>
                  <TbCash size={25} style={{ color: "" }} /> Cash on Delivery{" "}
                </label>
                <input
                  type="radio"
                  value="Cash on Delivery"
                  checked={selectedOption === "Cash on Delivery"}
                  onChange={handleOptionChange}
                />
              </div>
              <hr />
              <div className="item">
                <label>
                  <MdPayment size={25} style={{ color: "" }} /> Pay with Debit
                  Card{" "}
                </label>
                <input
                  type="radio"
                  value="Pay with Debit Card"
                  checked={selectedOption === "Pay with Debit Card"}
                  onChange={handleOptionChange}
                />
              </div>
            </div>
          </div>
          <div className="orderSummary">
            <div className="header">Order Summary</div>
            <div className="summayWrapper">
              <div className="summayList">
                <div className="heading">Actual Value</div>
                <div className="value">
                  {displayINRCurrency(totalWholePrice)}
                </div>
              </div>
              <div className="summayList">
                <div className="heading">Saved Amount</div>
                <div className="value">{displayINRCurrency(difference)}</div>
              </div>
              <div className="summayList">
                <div className="heading">Order Value</div>
                <div className="value">{displayINRCurrency(totalPrice)}</div>
              </div>
              <div className="summayList">
                <div className="heading">Service Fee</div>
                <div className="value">{displayINRCurrency(10)}</div>
              </div>
              <div className="summayList order">
                <div className="heading">Order Total</div>
                <div className="total">
                  <div className="value">
                    {displayINRCurrency(totalPrice + 10)}
                  </div>
                  <div className="vat">(All prices inclue VAT)</div>
                </div>
              </div>

              <Link
                className="px-3 py-2 uploadProductBtn"
                to={"/checkout"}
                onClick={() => navigationToPayment()}
              >
                Proceed to Buy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </CheckoutStyled>
  );
};

export default Checkout;
