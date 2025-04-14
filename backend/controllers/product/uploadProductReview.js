import productModel from "../../models/productModel";
import userModel from "../../models/userModel";

const uploadProductReview = async (req, res) => {
  try {
    const { rating, content } = req.body;
    const userId = req.userId;

    console.log("userid", userId);
    // Fetch the user's details to get the name
    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const product = await productModel.findById(req.params.productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Create a new review object with the user's name
    const newReview = {
      user: userId,
      userName: user.name, // Include the user's name
      rating,
      content,
    };

    product.reviews.push(newReview);
    await product.save();

    res.status(201).json(product);
  } catch (error) {
    console.error("Error adding review:", error);
    res.status(500).json({ message: "Error adding review", error });
  }
};

module.exports = uploadProductReview;
