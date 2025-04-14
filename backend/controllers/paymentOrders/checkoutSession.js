import dotenv from 'dotenv';
dotenv.config();

const stripe = require("stripe")(NODE_ENV.STRIPE_KEY);
import OrderModel from '../../models/orderModel';

const checkoutSession = async (req, res) => {
  const { session_id, payment } = req.query;

  if (!session_id) {
    return res.status(400).json({ error: "Session ID is required" });
  }

  try {
    if (payment === "cod") {
      // COD logic
      const order = await OrderModel.findOne({ sessionId: session_id });

      if (!order) {
        return res.status(404).json({ error: "Order not found" });
      }
      console.log("order", order);

      res.status(200).json({
        message: "COD order received.",
        order: {
          order
        }
      });
    } else {
      const session = await stripe.checkout.sessions.retrieve(session_id);
      const lineItems = await stripe.checkout.sessions.listLineItems(
        session_id,
        { limit: 100 }
      );

      const paymentStatus =
        session.payment_status === "paid" ? "completed" : "failed";
      const paidPayment = session.payment_status === "paid" ? "paid" : "unpaid";

      await OrderModel.findOneAndUpdate(
        { sessionId: session_id },
        {
          paymentStatus,
          paymentPaidStatus: paidPayment,
          paymentMethod: session.payment_method_types[0],
          orderId: session.payment_intent
        },
        { new: true }
      );

      res.status(200).json({
        session,
        paymentStatus,
        paymentPaidStatus: paidPayment,
        paymentMethod: session.payment_method_types[0],
        line_items: lineItems
      });
    }
  } catch (error) {
    console.error("Error handling checkout session:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = checkoutSession;
