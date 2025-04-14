import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import App from "../App";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import ForgorPassword from "../pages/Login/ForgotPassword";
import AdminPanel from "../pages/AdminPanel/AdminPanel";
import AllUserDuplicate from "../pages/AdminPanel/AllUserDuplicate";
import AllProductDup from "../pages/AdminPanel/AllProductDup";
import ProductCategories from "../pages/Products/ProductCategories";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import MyCart from "../pages/MyCart/MyCart";
import SearchProduct from "../pages/SearchProduct";
import ProductListing from "../pages/ProductListing/ProductListing";
import AllRecipes from "../pages/AdminPanel/AllRecipes";
import RecipeListing from "../pages/RecipeListing/RecipeListing";
import MyWishlist from "../pages/MyWishlist/MyWishlist";
import RecipeDetails from "../pages/RecipeDetails/RecipeDetails";
import GeneralUser from "../pages/GeneralUser/GeneralUser";
import MyProfile from "../pages/GeneralUser/MyProfile";
// import MyOrders from "../pages/GeneralUser/MyOrders";
import UserCart from "../pages/GeneralUser/UserCart";
import UserWishlist from "../pages/GeneralUser/UserWishlist";
import AboutApp from "../pages/GeneralUser/AboutApp";
import Help from "../pages/GeneralUser/Help";
import ManageAddress from "../pages/GeneralUser/ManageAddress";
import Settings from "../pages/GeneralUser/Settings";
import AddAddress from "../pages/GeneralUser/AddAddress";
import EditAddress from "../pages/GeneralUser/EditAddress";
import PaymentOptions from "../pages/OrdersPage/PaymentOptions";
import Error from "../pages/OrdersPage/Error";
import Success from "../pages/OrdersPage/Success";
import Order from "../pages/OrdersPage/Order";
import SingleOrder from "../pages/OrdersPage/SingleOrder";
import Checkout from "../pages/OrdersPage/Checkout";
import MyOrders from "../pages/GeneralUser/MyOrders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "forgotPassword",
        element: <ForgorPassword />
      },
      {
        path: "product-category",
        element: <ProductCategories />
      },
      {
        path: "product/:id",
        element: <ProductDetails />
      },
      {
        path: "product-listing",
        element: <ProductListing />
      },
      {
        path: "cart",
        element: <MyCart />
      },
      {
        path: "search",
        element: <SearchProduct />
      },
      {
        path: "recipe-listing",
        element: <RecipeListing />
      },
      {
        path: "wishlist",
        element: <MyWishlist />
      },
      {
        path: "recipe/:id",
        element: <RecipeDetails />
      },
      {
        path: "paymentPage",
        element: <PaymentOptions />
      },
      {
        path: "success",
        element: <Success />
      },
      {
        path: "failure",
        element: <Error />
      },
      {
        path: "orders",
        element: <MyOrders />
      },
      {
        path: "single-orders",
        element: <SingleOrder />
      },
      {
        path: "checkout",
        element: <Checkout />
      },
      {
        path: "general-user",
        element: <GeneralUser />,
        children: [
          {
            path: "my-profile",
            element: <MyProfile />
          },
          {
            path: "manage-address",
            element: <ManageAddress />
          },
          {
            path: "add-address",
            element: <AddAddress />
          },
          {
            path: "edit-address/:id",
            element: <EditAddress />
          },
          {
            path: "settings",
            element: <Settings />
          },
          {
            path: "my-orders",
            element: <MyOrders />
          },
          {
            path: "my-cart",
            element: <UserCart />
          },
          {
            path: "my-wishlist",
            element: <UserWishlist />
          },
          {
            path: "about-us",
            element: <AboutApp />
          },
          {
            path: "help",
            element: <Help />
          }
        ]
      },
      {
        path: "admin-panel",
        element: <AdminPanel />,
        children: [
          {
            path: "all-users",
            element: <AllUserDuplicate />
          },
          {
            path: "all-products",
            element: <AllProductDup />
          },
          {
            path: "all-recipes",
            element: <AllRecipes />
          }
        ]
      }
    ]
  }
]);

export default router;
