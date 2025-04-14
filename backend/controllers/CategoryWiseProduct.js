const productModel = require("../models/productModel");

const CategoryWiseProducts = async (req, res) => {
  try {
    const {category} = req?.body || req?.query;
    const CategoryProducts = await productModel.find({category})

    res.json({
      message: "category wise product",
      data: CategoryProducts,
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

module.exports = CategoryWiseProducts