const recipeModel = require("../../models/recipeModel");

const CategoryWishRecipe = async (req, res) => {
  try {
    const { category } = req?.body || req?.query;
    const categoryRecipes = await recipeModel.find({ category });

    res.json({
      message: "category wise recipe",
      data: categoryRecipes,
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

module.exports = CategoryWishRecipe;
