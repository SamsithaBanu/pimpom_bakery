const recipeModel = require("../../models/recipeModel");

const getReviews = async (req, res) => {
  try {
    const recipeId = req.params.recipeId; // Use req.params.recipeId
    const recipe = await recipeModel.findById(recipeId);
    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    res.status(200).json({ reviews: recipe.reviews });
  } catch (error) {
    console.error("Error fetching reviews:", error);
    res.status(500).json({ message: "Error fetching reviews", error });
  }
};

module.exports = getReviews;
