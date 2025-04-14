import React, { useState, useEffect, useContext, useRef } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link, useParams } from "react-router-dom";
import SummaryApi from "../../common";
import { RecipeDetailsStyled } from "./RecipeDetailsStyled";
import logo from "../../assests/logo.png";
import { IoPrintOutline } from "react-icons/io5";
import { MdOutlineBookmarkAdd, MdOutlineMailOutline } from "react-icons/md";
import halal from "../../assests/details/halal.png";
import healthy from "../../assests/details/heart.png";
import alco from "../../assests/details/no-alcohol.png";
import bread from "../../assests/details/bread.png";
import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";
import Context from "../../context";
import wishList from "../../helpers/wishlist";
import VerticalRecipeCard from "../../components/Homepage/VerticalRecipeCard/VerticalRecipeCard";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Reviews from "./Reviews";
import AllReviews from "./AllReviews";
import { StarRating } from "../../helpers/stars";

const RecipeDetails = () => {
  const [data, setData] = useState();
  const [relatedData, setRelatedData] = useState([]);
  const currentUrl = window.location.href;
  const params = useParams();
  const [equiments, setEquipments] = useState([]);
  const [imageData, setImageData] = useState();
  const [servings, setServings] = useState(4); // default to 4 servings or original
  const [customIngredients, setCustomIngredients] = useState();
  const { fetchUserWishlist } = useContext(Context);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const [reviewAdded, setReviewAdded] = useState(false);
  const [averageReview, setAverageReview] = useState(0);
  const scrollElement = useRef();

  const handleWishlist = async (e, id) => {
    await wishList(e, id);
    fetchUserWishlist();
  };

  console.log("raci", averageReview);

  const handleOnChange = (e) => {
    setServings(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const multiplier = servings / 4;

    const updatedIngredients = data?.ingredients?.map((ing) => ({
      ...ing,
      quantity: (ing.quantity * multiplier).toFixed(1), // Adjust quantity and round to 2 decimal places
    }));

    setCustomIngredients(updatedIngredients);
  };

  const fetchData = async (recipeId) => {
    const response = await fetch(SummaryApi.recipeDetails.url, {
      method: SummaryApi.recipeDetails.method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        recipeId: recipeId,
      }),
    });
    const dataResponse = await response?.json();
    setData(dataResponse?.data);
    setCustomIngredients(dataResponse?.data?.ingredients);
    setEquipments(dataResponse?.data?.equipments);
    // setCategory(dataResponse?.data?.category);
    // setLoading(false);
  };

  const fetchAllProduct = async (id) => {
    const response = await fetch(SummaryApi.allRecipe.url);
    const dataResponse = await response.json();
    const relatedDatas = dataResponse?.data?.filter(
      (recipe) => id !== recipe?._id
    );

    setRelatedData(relatedDatas || []);
    if (relatedDatas.length > 0) {
      setShowRightArrow(true);
    }
  };

  console.log("routn", averageReview);

  useEffect(() => {
    fetchData(params?.id);
    fetchAllProduct(params?.id);
  }, [params?.id]);

  const handleShare = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        currentUrl
      )}&text=${encodeURIComponent("")}`,
      "_blank",
      "width=600,height=400"
    );
  };
  const handleFacebookShare = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        currentUrl
      )}`,
      "_blank",
      "width=600,height=400"
    );
  };

  const handleWhatsAppShare = () => {
    const text = `Check out this page and find the delicious bakery products: ${currentUrl}`;
    window.open(
      `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`,
      "_blank",
      "width=600,height=400"
    );
  };

  const handleEmailShare = () => {
    const subject =
      "Check out this page and find the delicious bakery products";
    const body = `Hi there,\n\nI found this interesting page and thought you might like it.\n\nHere is different types of cookies, cakes, muffins, coffee, wedding cakes and pancakes: ${currentUrl}\n\nBest regards,\nSamsi`;
    window.location.href = `mailto:?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
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

  const handlePrint = () => {
    window.print();
  };

  return (
    <RecipeDetailsStyled>
      <div className="leftSideWrapper">
        <div className="top">
          <div className="imageContent">
            <div className="img">
              <img src={imageData || data?.images[0]} alt="recipe" />
            </div>
            <div className="imageWrapper">
              {data?.images?.map((img) => {
                return (
                  <img
                    className="images"
                    src={img}
                    alt="other images"
                    onClick={() => setImageData(img)}
                  />
                );
              })}
            </div>
          </div>
          <div className="details">
            <div className="firstPart">
              <Link to="/" className="bakery">
                <img
                  src={logo}
                  alt="Bakery Logo"
                  width={120}
                  height={120}
                  style={{ borderRadius: "8px" }}
                />
                <div className="topic">
                  <div className="name">
                    <i>{data?.name}</i>
                  </div>
                  <div className="category">{data?.category}</div>
                </div>
                <div className="star">
                  <StarRating rating={averageReview !== undefined && averageReview !== null && averageReview !== 'NaN'? averageReview : 5} />
                </div>
              </Link>
              <div className="desc">{data?.description}</div>
              <div className="btn">
                <div
                  className="button"
                  onClick={(e) => handleWishlist(e, data?._id)}
                >
                  <MdOutlineBookmarkAdd
                    style={{ width: "20px", height: "20px" }}
                  />
                  <button className="">Save Recipe</button>
                </div>
                <div className="print">
                  <IoPrintOutline
                    style={{
                      width: "25px",
                      height: "25px",
                      color: "#D95F59",
                      cursor: "pointer",
                    }}
                    onClick={handlePrint}
                  />
                </div>
              </div>
            </div>
            <div className="secondPart">
              <div className="slogan">
                <div className="image">
                  <img src={halal} />
                </div>
                <div className="text">Halal</div>
              </div>
              <div className="slogan">
                <div className="image">
                  <img src={healthy} />
                </div>
                <div className="text">Healthy</div>
              </div>
              <div className="slogan">
                <div className="image">
                  <img src={alco} />
                </div>
                <div className="text">No Alcohol</div>
              </div>
              <div className="slogan">
                <div className="image">
                  <img src={bread} />
                </div>
                <div className="text">Fresh food</div>
              </div>
            </div>
            <div className="thirdPart">
              <div className="difficulty">
                <div className="">
                  <span className="span">Difficulty: </span> {data?.difficulty}
                </div>
                <div className="">
                  <span className="span">Dietary: </span> {data?.dietary}
                </div>
              </div>
              <div className="preparation">
                <div className="prep">
                  <span className="span">Prep Time: </span> {data?.prepTime}{" "}
                  mins
                </div>
                <div className="cook">
                  <span className="span">Cook Time: </span> {data?.cookTime}{" "}
                  mins
                </div>
              </div>
              <div className="steps">
                <div className="stepss">{data?.instructions?.length} steps</div>
                <div className="ingredient">
                  {data?.ingredients?.length} ingredients
                </div>
              </div>
            </div>
            <div className="forthPart">
              <div className="share">Share this Recipe</div>
              <FaFacebook
                size={25}
                color={"#D95F59"}
                onClick={handleFacebookShare}
              />
              <FaTwitter size={25} color={"#D95F59"} onClick={handleShare} />
              <FaWhatsapp
                size={25}
                color={"#D95F59"}
                onClick={handleWhatsAppShare}
              />
              <MdOutlineMailOutline
                size={25}
                color={"#D95F59"}
                onClick={handleEmailShare}
              />
            </div>
          </div>
        </div>
        <div className="middle">
          <i>
            <div className="header">Instructions</div>
          </i>
          <ul className="instructionWrapper">
            {data?.instructions?.map((instr) => {
              return <li className="ins">{instr}</li>;
            })}
          </ul>
        </div>
        <div className="bottom">
          <i>
            <div className="header">Related Recipes</div>
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
              {relatedData?.slice(0, 10)?.map((recipe, index) => {
                return (
                  <VerticalRecipeCard
                    recipe={recipe}
                    key={index + "allRecipe"}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <AllReviews
          recipeId={params?.id}
          reviewAdded={reviewAdded}
          onGetReview={(val) => setAverageReview(val)}
        />
        <Reviews
          recipeId={params?.id}
          onChangeRecipe={() => setReviewAdded(true)}
        />
      </div>
      <div
        className="m-sticky-container -sticky c-transition"
        style={{ position: "fixed", top: "145px" }}
      >
        <div className="rightSideWrapper" style={{ width: "341px" }}>
          <div className="ingredientsWrapper">
            <i className="wrap">
              <div className="header">Ingredients</div>
              <div className="serve">{data?.servings} servings</div>
            </i>
            <form className="formWrapper" onSubmit={handleSubmit}>
              <label className="header">
                Enter Servings and get the Ingredients
              </label>
              <div className="wrapper">
                <input
                  type="number"
                  id="serving"
                  name="serving"
                  placeholder="enter servings"
                  value={servings}
                  onChange={handleOnChange}
                  className="serve"
                  min="1"
                />
                <button className="px-3 py-2 enterBTn">Enter</button>
              </div>
            </form>
            <div className="ingredientWrapper">
              {customIngredients?.map((ing) => (
                <div className="ingre" key={ing?.id}>
                  <span className="span">{ing?.quantity}</span> {ing?.unit} of{" "}
                  {ing?.name}
                </div>
              ))}
            </div>
          </div>
          <div className="equipmentWrapper">
            <i>
              <div className="header">Equipements</div>
            </i>
            <div className="equip">
              {data?.equipments?.map((equi, index) => {
                return (
                  <div className="equi" key={index}>
                    {equi}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </RecipeDetailsStyled>
  );
};

export default RecipeDetails;
