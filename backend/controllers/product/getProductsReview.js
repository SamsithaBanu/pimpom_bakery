import productModel from "../../models/productModel";

const getProductsReview = async (req, res) => {
  try {
    const productId = req.params.productId; // Use req.params.recipeId
    const product = await productModel.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ reviews: product?.reviews });
  } catch (error) {
    console.error("Error fetching reviews:", error);
    res.status(500).json({ message: "Error fetching reviews", error });
  }
};

module.exports = getProductsReview;
