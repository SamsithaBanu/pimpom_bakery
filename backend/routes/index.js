const express = require("express");
const bodyParser = require("body-parser");

const userSignUpController = require("../controllers/userSignUp");
const userSignInController = require("../controllers/userSignIn");
const userDetailsController = require("../controllers/userDetails");
const authToken = require("../middleware/authToken");
const userLogoutController = require("../controllers/userLogout");
const allUsers = require("../controllers/allUsers");
const updateUser = require("../controllers/updateUser");
const uploadProductController = require("../controllers/uploadProduct");
const getProductController = require("../controllers/getProduct");
const updateProductController = require("../controllers/updateProduct");
const allCategory = require("../controllers/allCategory");
const CategoryWiseProducts = require("../controllers/CategoryWiseProduct");
const productDetailsController = require("../controllers/productDetails");
const addToCartController = require("../controllers/addToCartController");
const countAddToCartProduct = require("../controllers/countAddToCartProduct");
const addToCartViewProduct = require("../controllers/addToCartViewProduct");
const updateAddToCartProduct = require("../controllers/updateAddToCartProduct");
const deleteAddToCartProduct = require("../controllers/deleteAddToCartProduct");
const SearchProductController = require("../controllers/SearchProductController");
const filterProductController = require("../controllers/filterProduct");
const uploadRecipeController = require("../controllers/recipe/uploadRecipe");
const getRecipeController = require("../controllers/recipe/getRecipe");
const updateRecipeController = require("../controllers/recipe/updateRecipe");
const WishlistController = require("../controllers/recipe/wishListController");
const countWishlist = require("../controllers/recipe/countWishlist");
const wishlistViewRecipe = require("../controllers/recipe/wishlistViewRecipe");
const deleteWishlistController = require("../controllers/recipe/deleteWishlist");
const RecipeDetailsController = require("../controllers/recipe/recipeDetails");
const CategoryWishRecipe = require("../controllers/recipe/CategoryWishRecipe");
const uploadReviews = require("../controllers/recipe/uploadReviews");
const getReviews = require("../controllers/recipe/getReviews");
const uploadProductReview = require("../controllers/product/uploadProductReview");
const getProductsReview = require("../controllers/product/getProductsReview");
const addAddressController = require("../controllers/address/addAddressController");
const editAddressController = require("../controllers/address/editAddressController");
const deleteAddressController = require("../controllers/address/deleteAddressController");
const changePasswordController = require("../controllers/changePasswordController");
const paymentController = require("../controllers/paymentOrders/paymentController");
const checkoutSession = require("../controllers/paymentOrders/checkoutSession");
const webhooks = require("../controllers/paymentOrders/webhook");
const allOrdersController = require("../controllers/paymentOrders/allOrdersController");

const router = express.Router();

router.post("/signup", userSignUpController);
router.post("/signin", userSignInController);
router.get("/user-details", authToken, userDetailsController);
router.get("/userLogout", userLogoutController);
router.get("/all-user", authToken, allUsers);
router.post("/update-user", authToken, updateUser);
router.post("/upload-product", authToken, uploadProductController);
router.get("/get-product", getProductController);
router.post("/update-product", authToken, updateProductController);
router.get("/all-categories", allCategory);
router.post("/category-wise-product", CategoryWiseProducts);
router.post("/product-details", productDetailsController);
router.post("/addtocart", authToken, addToCartController);
router.get("/countAddToCartProduct", authToken, countAddToCartProduct);
router.get("/view-card-product", authToken, addToCartViewProduct);
router.post("/update-cart-product", authToken, updateAddToCartProduct);
router.post("/delete-cart-product", authToken, deleteAddToCartProduct);
router.get("/search-product", SearchProductController);
router.post("/filter-product", filterProductController);
router.post("/upload-recipe", authToken, uploadRecipeController);
router.get("/get-recipe", getRecipeController);
router.post("/update-recipe", authToken, updateRecipeController);
router.post("/wishlist", authToken, WishlistController);
router.get("/countwislist", authToken, countWishlist);
router.get("/view-wishlist-recipe", authToken, wishlistViewRecipe);
router.post("/delete-wishlist-recipe", authToken, deleteWishlistController);
router.post("/recipe-details", RecipeDetailsController);
router.post("/category-wise-recipes", CategoryWishRecipe);
router.post("/recipes/:recipeId/reviews", authToken, uploadReviews);
router.get("/recipes/:recipeId/reviews", getReviews);
router.post("/products/:productId/reviews", authToken, uploadProductReview);
router.get("/products/:productId/reviews", getProductsReview);
router.post("/add-address/:userId", authToken, addAddressController);
router.put(
  "/edit-address/:userId/:addressId",
  authToken,
  editAddressController
);
router.delete(
  "/delete-address/:userId/:addressId",
  authToken,
  deleteAddressController
);
router.post("/change-password", changePasswordController);
// router.get("/check-login", authToken, (req, res) => {
//   res.status(200).json({ message: "User is logged in", success: true });
// });

router.post("/create-payment", paymentController);
router.get("/payment-details", checkoutSession);
router.get("/orders", allOrdersController);
router.post("/webhook", express.raw({ type: "application/json" }), webhooks);

module.exports = router;
