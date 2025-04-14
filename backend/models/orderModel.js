const mongoose = require('mongoose')

const cartItemSchema = new mongoose.Schema({
  productId: {
    ref: "product",
    type: String
  },
  amount: Number,
  images: String,
  name: String,
  quantity: {
    type: Number,
    required: true,
    min: 1
  }
});

const orderSchema = new mongoose.Schema({
  userId: String,
  orderId: String,
  sessionId: {
    type: String,
    required: true
  },
  cartItems: [cartItemSchema], // Array of cart items
  amount: {
    type: Number,
    required: true,
    min: 0 // Ensure amount cannot be negative
  },
  subTotal: {
    type: Number,
    required: true,
    min: 0 // Ensure amount cannot be negative
  },
  shipping: {
    type: Number,
    required: true,
    min: 0 // Ensure amount cannot be negative
  },
  paymentStatus: {
    type: String,
    enum: ["pending", "completed", "failed"], // Possible payment statuses
    default: "pending" // Default status
  },
  paymentPaidStatus: {
    type: String,
    enum: ["paid", "unpaid"], // Possible payment statuses
    default: "unpaid" // Default status
  },
  paymentPaidStatus: {
    type: String,
    enum: ["delivered", "confirmed", "cancelled"], // Possible payment statuses
    default: "unpaid" // Default status
  },
  paymentMethod: String,
  createdAt: {
    type: Date,
    default: Date.now // Timestamp when the order is created
  }
});

// Create and export the Order model
const OrderModel = mongoose.model("Order", orderSchema);
module.exports = OrderModel;
