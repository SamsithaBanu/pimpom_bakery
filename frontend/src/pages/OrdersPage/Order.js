import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Order = () => {
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
    <div>
      <h2>Your Orders</h2>
      <ul>
        {orders.map((order) => (
          <li key={order._id}>
            <h3>Order ID: {order.sessionId}</h3>
            <p>Amount: {order.amount / 100} INR</p>
            <p>Status: {order.paymentStatus}</p>
            <ul>
              {order.cartItems.map((item) => (
                <li key={item.productId._id}>
                  {item.productId.productName} (Quantity: {item.quantity})
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Order;
