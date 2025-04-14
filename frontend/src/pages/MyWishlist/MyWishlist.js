import React, { useState, useEffect, useContext, useRef } from "react";
import SummaryApi from "../../common";
import { MyWishlistStyled } from "./MyWishlistStyled";
import { MdDelete } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import Context from "../../context";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Contact from "../../components/Contact";
import { Link } from "react-router-dom";
import wishlist from "../../assests/wishlistPAGE.png";
import VerticalRecipeCard from "../../components/Homepage/VerticalRecipeCard/VerticalRecipeCard";

const MyWishlist = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const context = useContext(Context);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const [allProduct, setAllProduct] = useState([]);
  const scrollElement = useRef();
  const options = [
    { index: 1, value: "newest", label: "Newest Recipe" },
    { index: 2, value: "oldest", label: "Oldest Recipe" },
  ];

  const fetchData = async () => {
    console.log("hii");
    const response = await fetch(SummaryApi.wishlistViewRecipe.url, {
      method: SummaryApi.wishlistViewRecipe.method,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
    });

    const responseData = await response.json();
    console.log("hello", responseData);

    if (responseData.success) {
      setData(responseData.data);
    }
  };

  const handleLoading = async () => {
    await fetchData();
  };

  const fetchAllProduct = async () => {
    const response = await fetch(SummaryApi.allRecipe.url);
    const dataResponse = await response.json();

    // Filtering products that are not in the wishlist
    const filteredProducts = dataResponse?.data.filter(
      (product) =>
        !data.some((cartItem) => cartItem.recipeId._id === product._id)
    );

    setAllProduct(filteredProducts || []);

    // Determine if right arrow should be shown based on product count
    if (filteredProducts?.length > 2) {
      setShowRightArrow(true);
    } else {
      setShowRightArrow(false); // Hide if less than or equal to 2 products
    }
  };

  useEffect(() => {
    setLoading(true);
    handleLoading();
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchAllProduct();
  }, [data]);

  const deleteCartProduct = async (id) => {
    const response = await fetch(SummaryApi.deleteWishlistRecipe.url, {
      method: SummaryApi.deleteWishlistRecipe.method,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        _id: id,
      }),
    });

    const responseData = await response.json();

    if (responseData.success) {
      fetchData();
      context?.fetchUserWishlist();
    }
  };

  const handleScroll = () => {
    if (scrollElement.current) {
      setShowLeftArrow(scrollElement.current.scrollLeft > 0);
      setShowRightArrow(
        scrollElement.current.scrollLeft + scrollElement.current.clientWidth <
          scrollElement.current.scrollWidth
      );
    }
  };

  // Listen to scroll events
  useEffect(() => {
    scrollElement.current?.addEventListener("scroll", handleScroll);
    return () => {
      scrollElement.current?.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

  const handleSort = (sortType) => {
    let sortedData = [...data];

    if (sortType === "newest") {
      sortedData.sort(
        (a, b) =>
          new Date(b.recipeId.createdAt) - new Date(a.recipeId.createdAt)
      );
    } else if (sortType === "oldest") {
      sortedData.sort(
        (a, b) =>
          new Date(a.recipeId.createdAt) - new Date(b.recipeId.createdAt)
      );
    }
    setData(sortedData);
  };

  return (
    <MyWishlistStyled>
      <div className="wishlistContainer">
        <div className="top">
          <i>
            <div className="header">My Saved Recipes</div>
          </i>
          <div className="total">Total Items: {data?.length}</div>
        </div>
        {data?.length === 0 ? (
          <div className="noRecipes">
            <div className="name">No Recipes saved here</div>
            <Link className="cta" to={"/recipe-listing"}>
              Add Recipes
            </Link>
          </div>
        ) : (
          <div>
            <div className="sortby">
              <label className="sortByLabel">Sort by:</label>
              <select onChange={(e) => handleSort(e.target.value)}>
                {options.map((option, index) => (
                  <option key={index} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div style={{height:'200px', marginLeft:'36px', marginTop:'20px'}}>
          <img
            src={wishlist} style={{height:'200px',marginLeft:'0px', borderRadius:'8px'}} width='1000px' height='200px'
          />
        </div>
            <div className="wishlistRecipes">
              {data?.map((item) => {
                return (
                  <div
                    className="recipeContainer"
                    key={item?._id + "Add To Cart Loading"}
                  >
                    <div className="image">
                      <img
                        src={item?.recipeId?.images[0]}
                        alt="wishlistImage"
                      />
                    </div>
                    <div className="detailsName">
                      <div className="name">{item?.recipeId?.name}</div>
                      <div className="category">{item?.recipeId?.category}</div>
                    </div>
                    <div className="timeDetails">
                      <IoMdTime size={22} color="#d95f59" />
                      <div className="time">
                        {item?.recipeId?.prepTime + item?.recipeId?.cookTime}{" "}
                        mins
                      </div>
                    </div>
                    <div className="dietwrapper">
                      <div className="dieatary">
                        <span style={{ color: "#d95f59" }}>Dietary:</span>{" "}
                        {item?.recipeId?.dietary}
                      </div>
                      <div className="dieatary" style={{ marginTop: "10px" }}>
                        <span style={{ color: "#d95f59" }}>Difficulty:</span>{" "}
                        {item?.recipeId?.difficulty}
                      </div>
                    </div>
                    <div
                      className="removeCTA"
                      onClick={() => deleteCartProduct(item?._id)}
                    >
                      <MdDelete size={25} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        <div className="relatedWrap">
          <i>
            <div className="header">
              {data?.length === 0 ? "All" : "Related"} Recipes
            </div>
          </i>
          <div className="container">
            <div className="arrowWrapper">
              {showLeftArrow && (
                <button className="arrowBTN arrowLeft" onClick={scrollLeft}>
                  <FaAngleLeft />
                </button>
              )}
              {showRightArrow && (
                <button className="arrowBTN arrowRight" onClick={scrollRight}>
                  <FaAngleRight />
                </button>
              )}
            </div>
            <div
              className="relatedWrapper"
              ref={scrollElement}
              onScroll={handleScroll}
            >
              {allProduct?.slice(0, 20)?.map((recipe, index) => {
                return (
                  <VerticalRecipeCard
                    recipe={recipe}
                    key={index + "allRecipe"}
                    isFromWishlist
                    fetchData={fetchData}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </MyWishlistStyled>
  );
};

export default MyWishlist;
