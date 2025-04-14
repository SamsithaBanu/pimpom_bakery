const backendDomain = process.env.REACT_APP_ENV_MODE === "development" ? "http://localhost:8080" : "";
console.log('procew', process.env.REACT_APP_CLOUD_NAME_CLOUDINARY)

console.log('backenddo', backendDomain);

const SummaryApi = {
  singUp: {
    url: `${backendDomain}/api/signup`,
    method: "post"
  },
  singIn: {
    url: `${backendDomain}/api/signin`,
    method: "post"
  },
  currentUser: {
    url: `${backendDomain}/api/user-details`,
    method: "get"
  },
  logoutUser: {
    url: `${backendDomain}/api/userLogout`,
    method: "get"
  },
  allUser: {
    url: `${backendDomain}/api/all-user`,
    method: "get"
  },
  updateUser: {
    url: `${backendDomain}/api/update-user`,
    method: "post"
  },
  uploadProduct: {
    url: `${backendDomain}/api/upload-product`,
    method: "post"
  },
  allProduct: {
    url: `${backendDomain}/api/get-product`,
    method: "get"
  },
  updateProduct: {
    url: `${backendDomain}/api/update-product`,
    method: "post"
  },
  getCategories: {
    url: `${backendDomain}/api/all-categories`,
    method: "get"
  },
  postCategoryProducts: {
    url: `${backendDomain}/api/category-wise-product`,
    method: "post"
  },
  productDetails: {
    url: `${backendDomain}/api/product-details`,
    method: "post"
  },
  addToCartProduct: {
    url: `${backendDomain}/api/addtocart`,
    method: "post"
  },
  addToCartProductCount: {
    url: `${backendDomain}/api/countAddToCartProduct`,
    method: "get"
  },
  addToCartViewProduct: {
    url: `${backendDomain}/api/view-card-product`,
    method: "get"
  },
  addToCartUpdateProduct: {
    url: `${backendDomain}/api/update-cart-product`,
    method: "post"
  },
  deleteAddToCartProduct: {
    url: `${backendDomain}/api/delete-cart-product`,
    method: "post"
  },
  searchProduct: {
    url: `${backendDomain}/api/search-product`,
    method: "get"
  },
  filterProduct: {
    url: `${backendDomain}/api/filter-product`,
    method: "post"
  },
  uploadRecipe: {
    url: `${backendDomain}/api/upload-recipe`,
    method: "post"
  },
  allRecipe: {
    url: `${backendDomain}/api/get-recipe`,
    method: "get"
  },
  updateRecipe: {
    url: `${backendDomain}/api/update-recipe`,
    method: "post"
  },
  wishlist: {
    url: `${backendDomain}/api/wishlist`,
    method: "post"
  },
  wishlistRecipeCount: {
    url: `${backendDomain}/api/countwislist`,
    method: "get"
  },
  wishlistViewRecipe: {
    url: `${backendDomain}/api/view-wishlist-recipe`,
    method: "get"
  },
  deleteWishlistRecipe: {
    url: `${backendDomain}/api/delete-wishlist-recipe`,
    method: "post"
  },
  recipeDetails: {
    url: `${backendDomain}/api/recipe-details`,
    method: "post"
  },
  categoryWishRecipes: {
    url: `${backendDomain}/api/category-wise-recipes`,
    method: "post"
  },
  uploadReviews: {
    url: `${backendDomain}/api/recipes/:recipeId/reviews`,
    method: "POST"
  },
  allReviews: {
    url: `${backendDomain}/api/recipes/:recipeId/reviews`,
    method: "GET"
  },
  uploadProductReviews: {
    url: `${backendDomain}/api/products/:productId/reviews`,
    method: "POST"
  },
  allProductReviews: {
    url: `${backendDomain}/api/products/:productId/reviews`,
    method: "GET"
  },
  addAddress: {
    url: `${backendDomain}/api/add-address/:userId`,
    method: "POST"
  },
  editAddress: {
    url: `${backendDomain}/api/edit-address/:userId/:addressId`,
    method: "PUT"
  },
  deleteAddress: {
    url: `${backendDomain}/api/delete-address/:userId/:addressId`,
    method: "DELETE"
  },
  changePassword: {
    url: `${backendDomain}/api/change-password`,
    method: "POST"
  },
  paymentCreate: {
    url: `${backendDomain}/api/create-payment`,
    method: "POST"
  },
  checkoutSession: {
    url: `${backendDomain}/api/payment-details?session_id=:session_id&payment=:payment`,
    method: "GET"
  }
  // checkLoginStatus: {
  //   url: `${backendDomain}/api/check-login`, // New endpoint for checking login status
  //   method: "GET",
  // },
};

export default SummaryApi;
