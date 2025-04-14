import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { GeneralUserStyled } from "./GeneralUserStyled";
import { Link } from "react-router-dom";
import order from "../../assests/profile/shopping-bag.png";
import displayINRCurrency from "../../helpers/displayCurrency";
import moment from "moment";
// http://localhost:3000/single-orders?session_id=cs_test_b106WoHeyhMgkW6jhjdoL6wXbxD10FZdZE6gHsn0HOXcXJFMWEEtP7Njqi

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const user = useSelector((state) => state?.user?.user);
  console.log("user", user);
  const base_url =
    import.meta.env.MODE === "development" ? "http://localhost:8080" : "";

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(
          `${base_url}/api/orders?userId=${user?._id}`
        );
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    if (user?._id) {
      fetchOrders();
    }
  }, [user]);

  console.log("order", orders);
  return (
    <GeneralUserStyled>
      <div className="orderWrapper">
        <div className="header">
          <div className="head">My Orders</div>
          <div className="editProduct">Total Orders: {orders?.length}</div>
        </div>
        {orders?.length > 0 ? (
          <div className="orderallWrapper">
            {orders?.map((item) => {
              return (
                <div className="singleOrder" key={item?._id}>
                  <div className="top">
                    <div className="left">
                      <div className="name">{user?.name}</div>
                      <div className="order">
                        <b>Order id: </b>
                        {item?.orderId}
                      </div>
                    </div>
                    <div className="right">
                      {displayINRCurrency(item?.amount)}
                    </div>
                  </div>
                  <div className="bottom">
                    <div className="status">Delivered</div>
                    <table className="tablewrap">
                      {item?.cartItems?.map((cart) => {
                        return (
                          <tbody>
                            <tr key={cart?._id} className="row">
                              <td>
                                <img
                                  src={cart?.images}
                                  width={100}
                                  height={100}
                                  alt="cartimage"
                                />
                              </td>
                              <td>{cart?.name}</td>
                              <td>{cart?.quantity}</td>
                              <td>
                                {displayINRCurrency(
                                  cart?.productId?.sellingPrice
                                )}
                              </td>
                            </tr>
                          </tbody>
                        );
                      })}
                    </table>
                    <div className="deliveryWrapper">
                      <div className="deliveryAddress">
                        {" "}
                        <div className="addressWrapper">
                          {console.log("items", item)}
                          <div className="name">
                            Delivered on{" "}
                            {item?.paymentMethod === "cod"
                              ? moment(item?.createdAt)
                                  .add(4, "days")
                                  .format("D MMM YYYY")
                              : moment(item?.createdAt)
                                  .add(4, "days")
                                  .format("D MMM YYYY")}
                          </div>
                          <div className="addrss">
                            {user?.addresses[0]?.doorNo},{" "}
                            {user?.addresses[0]?.landmark},{" "}
                            {user?.addresses[0]?.address}
                          </div>
                        </div>
                      </div>
                      <Link
                        className="uploadProductBtn"
                        to={
                          item?.paymentMethod === "cod"
                            ? `/single-orders?session_id=${item?.sessionId}&payment=cod`
                            : `/single-orders?session_id=${item?.sessionId}`
                        }
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="body">
            <div className="image">
              <img src={order} />
            </div>
            <div className="title">Ohh No! Not yet order any Products!</div>
            <div className="subtitle">
              you can click on add new product and order some new items!
            </div>
            <Link className="px-3 py-2 uploadProductBtn" to={"/cart"}>
              Add New Product
            </Link>
          </div>
        )}
      </div>
    </GeneralUserStyled>
  );
};

export default MyOrders;
