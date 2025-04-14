const productModel = require("../models/productModel");

async function productDetailsController(req, res) {
  try {
    const { productId  } = req.body;

    const productDetail = await productModel.findById(productId);

    res.json({
      message: "get product details successfully",
      data: productDetail,
      error: false,
      success: true,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}

module.exports = productDetailsController;
