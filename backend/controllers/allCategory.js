import productModel from "../models/productModel";

const allCategory = async (req, res) => {
  try {
    const CategoryProducts = await productModel.distinct("category");
    const productsFromCategory = [];

    for (const category of CategoryProducts) {
      const product = await productModel.findOne({ category });

      if (product) {
        productsFromCategory.push(product);
      }
    }
    res.json({
      message: "category product",
      data: productsFromCategory,
      success: true,
      error: false,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || "",
      data: [],
      success: false,
      error: true,
    });
  }
};

module.exports = allCategory