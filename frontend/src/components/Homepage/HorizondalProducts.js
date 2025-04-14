import React, { useEffect, useState, useRef, useContext } from "react";
import fetchCategoryWiseProduct from "../../helpers/fetchCategoryWiseProducts";
import displayINRCurrency from "../../helpers/displayCurrency";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { HorizondalProductsStyled } from "./HorizondalProductsStyled";
import { Link } from "react-router-dom";
import SummaryApi from "../../common";
import addToCart from "../../helpers/addToCart";
import Context from "../../context";
import ListingCard from "../listingCard/ListingCard";

const HorizondalProducts = ({ category, headings }) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const scrollElement = useRef();
  const [openUploadProduct, setOpenUploadProduct] = useState(false);
  const [allProduct, setAllProduct] = useState([]);
  const { fetchUserAddToCart } = useContext(Context);

  const handleAddToCart = async (e, id) => {
    await addToCart(e, id);
    fetchUserAddToCart();
  };

  const fetchAllProduct = async () => {
    const response = await fetch(SummaryApi.allProduct.url);
    const dataResponse = await response.json();

    setAllProduct(dataResponse?.data || []);
  };

  useEffect(() => {
    fetchAllProduct();
  }, []);

  console.log("check", data);

  const fetchData = async () => {
    try {
      setLoading(true);
      const CategoryWiseProduct = await fetchCategoryWiseProduct(category);
      setData(CategoryWiseProduct?.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const scrollRight = () => {
    if (scrollElement.current) {
      scrollElement.current.scrollLeft += 300;
    }
  };

  const scrollLeft = () => {
    if (scrollElement.current) {
      scrollElement.current.scrollLeft -= 300;
    }
  };

  const getSpliing = (prod) => {
    if (prod?.length > 21) {
      return "...";
    } else return null;
  };

  return (
    <HorizondalProductsStyled>
      <div className="containermax" id="category">
        <div className="header-wrapper">
          <div className="heading-main">
            {/* <i> */}
            <div className="header">{headings}</div>
            {/* </i> */}
            <div className="subheading">
              Layers of Love, One Pastry at a Time,Experience the Magic of Flaky
              Goodness.
            </div>
          </div>
          <Link className="seeAll" to={"/product-listing"}>
            See all
          </Link>
        </div>
        <div className="container">
          {/* <div className="arrowWrapper">
            <button onClick={scrollLeft} className="arrowBTN arrowLeft">
              <FaAngleLeft />
            </button>
            <button onClick={scrollRight} className="arrowBTN arrowRight">
              <FaAngleRight />
            </button>
          </div> */}
          <div className="cardContainer" ref={scrollElement}>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              allProduct?.slice(0, 10)?.map((item, index) => (
                <ListingCard item={item} key={index + "allProduct"} />
                // <Link
                //   to={"/product/" + item?._id}
                //   key={index}
                //   className="cardWrapper"
                //  >
                //   <div className="cardImage">
                //     <img src={item?.productImage[0]} alt="product Image" />
                //   </div>
                //   <div className="cardDetails">
                //     <div className="name">
                //       {item.productName.substring(0, 20)}
                //       {getSpliing(item?.productName)}
                //     </div>
                //     {/* <div className="category">{item?.category}</div> */}
                //     <div className="priceWrapper">
                //       <div className="price">
                //         {displayINRCurrency(item?.sellingPrice)}
                //       </div>
                //       <div className="wholePrice">
                //         {displayINRCurrency(item?.price)}
                //       </div>
                //     </div>
                //     <div className="addTocartCTA addToCart">
                //       <button
                //         className=""
                //         onClick={(e)=>handleAddToCart(e,item?._id)}
                //       >
                //         Add to cart
                //       </button>
                //       <MdOutlineShoppingCart
                //         style={{ width: "20px", height: "20px" }}
                //       />
                //     </div>
                //   </div>
                // </Link>
              ))
            )}
          </div>
        </div>
      </div>
    </HorizondalProductsStyled>
  );
};

export default HorizondalProducts;
