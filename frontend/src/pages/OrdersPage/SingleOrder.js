import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { CheckoutStyled } from "./CheckoutStyled";
import { useSelector } from "react-redux";
import moment from "moment";
import displayINRCurrency from "../../helpers/displayCurrency";

const SingleOrder = () => {
  const location = useLocation();
  const user = useSelector((state) => state?.user?.user);
  const [sessionData, setSessionData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState();

  // Extract session_id from URL
  const query = new URLSearchParams(location.search);
  const sessionId = query.get("session_id");
  const paymentType = query.get("payment");
  const base_url =
    import.meta.env.MODE === "development" ? "http://localhost:8080" : "";

  console.log("paymenttype", paymentType);

  useEffect(() => {
    if (sessionId) {
      fetch(
        `${base_url}/api/payment-details?session_id=${sessionId}&payment=${paymentType}`
      ) // API route to fetch payment details
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
  }, [sessionId]);

  console.log("session", sessionData);

  if (loading) {
    return <div>Loading payment details...</div>;
  }

  if (!sessionData) {
    return <div>No payment details found.</div>;
  }
  console.log("sest", user);
  return (
    <CheckoutStyled>
      <div className="singleOrderWrapper">
        <div className="header">
          <i style={{ color: "black" }}>Order Number: </i>
          <span style={{ fontSize: "17px" }}>
            #
            {paymentType === "cod"
              ? sessionData?.order?.order?.orderId
              : sessionData?.session?.payment_intent}
          </span>
        </div>
        <div className="d-flex">
          <div className="leftWrapper">
            <div className="productWrapper">
              <i className="subheader">Product Details</i>
              <table className="tablewrap">
                <thead>
                  <tr>
                    <td>Name</td>
                    <td>Quantity</td>
                    <td>Price</td>
                    <td>Total Price</td>
                  </tr>
                </thead>
                {paymentType === "cod" ? (
                  <tbody>
                    {sessionData?.order?.order?.cartItems.map((item) => (
                      <tr key={item?.id}>
                        <td>{item?.name}</td>
                        <td>{item?.quantity}</td>
                        <td>{item?.amount * item?.quantity}</td>
                        <td>{item?.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                ) : (
                  <tbody>
                    {sessionData?.line_items?.data.map((item) => (
                      <tr key={item?.id}>
                        <td>{item?.description}</td>
                        <td>{item?.quantity}</td>
                        <td>{item?.amount_total / (item?.quantity * 100)}</td>
                        <td>{item?.amount_total / 100}</td>
                      </tr>
                    ))}
                  </tbody>
                )}
              </table>
            </div>
            <div className="customerWrapper">
              {" "}
              <i className="subheader">Customer and Order details</i>
              <div className="customer-wrap">
                <div className="row">
                  <div className="label">Customer Name:</div>
                  <div className="value">
                    {paymentType === "cod"
                      ? user?.name
                      : sessionData?.session?.customer_details?.name}
                  </div>
                </div>
                <hr className="horizondal" />
                <div className="row">
                  <div className="label">Email:</div>
                  <div className="value">
                    {paymentType === "cod"
                      ? user?.email
                      : sessionData?.session?.customer_details?.email}
                  </div>
                </div>
                <hr className="horizondal" />
                <div className="row">
                  <div className="label">Mobile Number:</div>
                  <div className="value">{user?.mobileNumber}</div>
                </div>
                <hr className="horizondal" />
                <div className="row">
                  <div className="label">Payment method:</div>
                  <div className="value">
                    {paymentType === "cod"
                      ? sessionData?.order?.order?.paymentMethod
                      : sessionData?.session?.payment_method_types[0]}
                  </div>
                </div>
                <hr className="horizondal" />
                <div className="row">
                  <div className="label">Payment paid status:</div>
                  <div className="value">
                    {paymentType === "cod"
                      ? sessionData?.order?.order?.paymentPaidStatus
                      : sessionData?.session?.payment_status}
                  </div>
                </div>
                <hr className="horizondal" />
                <div className="row">
                  <div className="label">Payment status:</div>
                  <div className="value">
                    {paymentType === "cod"
                      ? sessionData?.order?.order?.paymentStatus
                      : sessionData?.session?.status}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rightWrapper">
            <div className="orderWrapper">
              {" "}
              <i className="subheader">Order Summary</i>
              <div className="orders">
                <div className="row">
                  <div className="label">Order Created at</div>
                  <div className="value">
                    {paymentType === "cod"
                      ? moment(sessionData?.order?.order?.createdAt).format(
                          "YYYY-MM-DD"
                        )
                      : moment
                          .unix(sessionData?.session?.created)
                          ?.format("YYYY-MM-DD")}
                  </div>
                </div>
                <div className="row">
                  <div className="label">Order Time</div>
                  <div className="value">
                    {paymentType === "cod"
                      ? moment(sessionData?.order?.order?.createdAt).format(
                          "hh:mm:ss A"
                        )
                      : moment
                          .unix(sessionData?.session?.created)
                          ?.format("hh:mm:ss A")}
                  </div>
                </div>
                <div className="row">
                  <div className="label">Subtotal</div>
                  <div className="value">
                    {paymentType === "cod"
                      ? displayINRCurrency(sessionData?.order?.order?.subTotal)
                      : displayINRCurrency(
                          (sessionData?.session?.amount_subtotal / 100).toFixed(
                            2
                          )
                        )}
                  </div>
                </div>
                <div className="row">
                  <div className="label">Shipping Amount</div>
                  <div className="value">
                    {paymentType === "cod"
                      ? displayINRCurrency(sessionData?.order?.order?.shipping)
                      : displayINRCurrency(
                          (
                            sessionData?.session?.shipping_cost
                              ?.amount_subtotal / 100
                          ).toFixed(2)
                        )}
                  </div>
                </div>
                <div className="row">
                  <div className="label">Total Price</div>
                  <div className="value">
                    {paymentType === "cod"
                      ? displayINRCurrency(sessionData?.order?.order?.amount)
                      : displayINRCurrency(
                          (sessionData?.session?.amount_total / 100).toFixed(2)
                        )}
                  </div>
                </div>
              </div>
            </div>
            <div className="totalWrapper">
              <div className="header">Total Price</div>
              <div className="value">
                {paymentType === "cod"
                  ? displayINRCurrency(sessionData?.order?.order?.amount)
                  : displayINRCurrency(
                      (sessionData?.session?.amount_total / 100).toFixed(2)
                    )}
              </div>
            </div>
            <div className="deliveryAddress">
              {" "}
              <i className="subheader">Delivery Address</i>
              <div className="addressWrapper">
                <div className="name">{user?.name}</div>
                <div className="addrss">
                  {user?.addresses[0]?.doorNo}, {user?.addresses[0]?.landmark},{" "}
                  {user?.addresses[0]?.address}
                </div>
              </div>
            </div>
            <Link
              className="px-3 py-2 uploadProductBtn"
              to={"/general-user/my-orders"}
            >
              Go to Orders Page
            </Link>
          </div>
        </div>
      </div>
    </CheckoutStyled>
  );
};

export default SingleOrder;
