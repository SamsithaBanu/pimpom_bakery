import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SummaryApi from "./common";
import { useEffect, useState } from "react";
import Context from "./context";
import { useDispatch } from "react-redux";
import { setUserDetails } from "./store/userSlice";

function App() {
  const [cartProductCount, setCartProductCount] = useState(1);
  const [wishlistRecipeCount, setWishlistRecipeCount] = useState(1);

  const dispatch = useDispatch();

  const fetchUserDetails = async()=>{
    const dataResponse = await fetch(SummaryApi.currentUser.url,{
      method: SummaryApi.currentUser.method,
      credentials: 'include'
    });
    const dataApi = await dataResponse.json();

    if(dataApi.success){
      dispatch(setUserDetails(dataApi.data));
    }
  };


  const fetchUserAddToCart = async()=>{
    const dataResponse = await fetch(SummaryApi.addToCartProductCount.url,{
      method : SummaryApi.addToCartProductCount.method,
      credentials : 'include'
    })

    const dataApi = await dataResponse.json()

    setCartProductCount(dataApi?.data?.count)
  }

  const fetchUserWishlist = async () => {
    try {
      const dataResponse = await fetch(SummaryApi.wishlistRecipeCount.url, {
        method: SummaryApi.wishlistRecipeCount.method,
        credentials: 'include',
      });
  
      if (!dataResponse.ok) {
        throw new Error(`Error: ${dataResponse.statusText}`);
      }
  
      const dataApi = await dataResponse.json();
      console.log('lkd', dataApi);
      setWishlistRecipeCount(dataApi?.data?.count);
    } catch (error) {
      console.error("Failed to fetch wishlist count:", error);
    }
  };
  

  useEffect(()=>{
    fetchUserDetails();
    fetchUserAddToCart();
  },[]);

  useEffect(()=>{
    fetchUserWishlist();
  },[]);


  return (
    <>
    <Context.Provider value={{
      fetchUserDetails,
      cartProductCount,
      fetchUserAddToCart,
      wishlistRecipeCount,
      setWishlistRecipeCount,
      fetchUserWishlist,
    }}>
    <ToastContainer />
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
      </Context.Provider>
    </>
  );
}

export default App;

