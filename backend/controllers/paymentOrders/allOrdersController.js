const OrderModel = require("../../models/orderModel");
const userModel = require("../../models/userModel");


const allOrdersController = async (req, res) => {
    const userId = req.query.userId; // Get userId from query parameters

    console.log('user', userId);
  
    try {
      const orders = await OrderModel.find({ userId }).populate("cartItems.productId");
      console.log('prsdf', orders);
      res.status(200).json(orders);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

module.exports = allOrdersController;
