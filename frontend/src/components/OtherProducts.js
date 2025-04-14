import React, { useState, useEffect, useRef, useContext } from "react";
import { OtherProductStyled } from "./OtherProductStyled";
import SummaryApi from "../common";
import displayINRCurrency from "../helpers/displayCurrency";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { IoAddSharp } from "react-icons/io5";
import Context from "../context";
import addToCart from "../helpers/addToCart";

const OtherProducts = ({ addToCartProducts, fetchData }) => {
  const [allProduct, setAllProduct] = useState([]);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const scrollElement = useRef();
  const { fetchUserAddToCart } = useContext(Context)

  const fetchAllProduct = async () => {
    const response = await fetch(SummaryApi.allProduct.url);
    const dataResponse = await response.json();

    // Filtering products that are not in the cart
    const filteredProducts = dataResponse?.data.filter(
      (product) =>
        !addToCartProducts.some(
          (cartItem) => cartItem.productId._id === product._id
        )
    );

    setAllProduct(filteredProducts || []);

    // Determine if right arrow should be shown based on product count
    if (filteredProducts.length > 0) {
      setShowRightArrow(true);
    }
  };

  useEffect(() => {
    fetchAllProduct();
  }, [addToCartProducts]);

  const getSpliing = (prod) => {
    if (prod?.length > 21) {
      return "...";
    } else return null;
  };

  const handleScroll = () => {
    if (scrollElement.current) {
      // Show or hide left arrow based on scroll position
      setShowLeftArrow(scrollElement.current.scrollLeft > 0);
      // Show or hide right arrow based on scroll position and scroll width
      setShowRightArrow(
        scrollElement.current.scrollLeft + scrollElement.current.clientWidth <
          scrollElement.current.scrollWidth
      );
    }
  };

  const scrollRight = () => {
    if (scrollElement.current) {
      scrollElement.current.scrollLeft += 200;
      handleScroll(); // Update arrow visibility after scrolling
    }
  };

  const scrollLeft = () => {
    if (scrollElement.current) {
      scrollElement.current.scrollLeft -= 200;
      handleScroll(); // Update arrow visibility after scrolling
    }
  };

  const handleAddToCart = async(e,id)=>{
     await addToCart(e,id)
     fetchUserAddToCart();
     fetchData();
  }

  return (
    <OtherProductStyled>
      <div className="header">You may also have</div>
      <div className="container">
        <div className="arrowWrapper">
          {showLeftArrow && (
            <button onClick={scrollLeft} className="arrowBTN arrowLeft">
              <FaAngleLeft />
            </button>
          )}
          {showRightArrow && (
            <button onClick={scrollRight} className="arrowBTN arrowRight">
              <FaAngleRight />
            </button>
          )}
        </div>
        <div
          className="productsList"
          ref={scrollElement}
          onScroll={handleScroll}
        >
          {allProduct?.slice(10, 30)?.map((product) => (
            <div className="productWrapper" key={product?._id}>
              <div className="image">
                <img src={product.productImage[0]} alt={product.productName} />
                <button className="cta" onClick={(e)=>handleAddToCart(e,product?._id)}>
                <IoAddSharp size={18} color={'#9f2b68'}/>
                </button>
              </div>
              <div className="name">
                {product?.productName?.substring(0, 17)}
                {getSpliing(product?.productName)}
              </div>
              <div className="price">
                {displayINRCurrency(product?.sellingPrice)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </OtherProductStyled>
  );
};

export default OtherProducts;
