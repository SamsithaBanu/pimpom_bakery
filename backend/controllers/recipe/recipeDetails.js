import recipeModel from '../../models/recipeModel';

async function RecipeDetailsController(req, res) {
  try {
    const { recipeId  } = req.body;

    const recipeDetails = await recipeModel.findById(recipeId);

    res.json({
      message: "get recipe details successfully",
      data: recipeDetails,
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

module.exports = RecipeDetailsController;
