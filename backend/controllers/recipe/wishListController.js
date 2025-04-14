const wishlistModel = require("../../models/wishlist");

const WishlistController = async (req, res) => {
  try {
    const { recipeId } = req?.body;
    const currentUser = req.userId;

    const isRecipeAvailable = await wishlistModel.findOne({
      recipeId,
      userId: currentUser,
    });

    console.log("isProductAvailabl   ", isRecipeAvailable);

    if (isRecipeAvailable) {
      return res.json({
        message: "Already exists in Wishlist",
        success: false,
        error: true,
      });
    }

    const payload = {
      recipeId: recipeId,
      isWish: true,
      userId: currentUser,
    };

    const newWishlist = new wishlistModel(payload);
    const saveRecipe = await newWishlist.save();

    return res.json({
      data: saveRecipe,
      message: "Recipe Added in Wishlist",
      success: true,
      error: false,
    });
  } catch (err) {
    res.json({
      message: err?.message || err,
      error: true,
      success: false,
    });
  }
};

module.exports = WishlistController;
