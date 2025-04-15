import React, { useContext } from "react";
// import { VerticalRecipesCardStyled } from "./VerticalRecipeCardStyled";
import { TbDeviceMobileHeart } from "react-icons/tb";
import Context from "../../../context";
import wishList from "../../../helpers/wishlist";
import { Link } from "react-router-dom";
import { MdOutlineBookmarkAdd } from "react-icons/md";

const VerticalRecipeCard = ({ recipe, isFromWishlist, fetchData }) => {
  const { fetchUserWishlist } = useContext(Context);

  console.log("wishlist", recipe);

  const handleWishlist = async (e, id) => {
    await wishList(e, id);
    fetchUserWishlist();
    if (isFromWishlist) {
      fetchData();
    }
  };

  const getSpliing = (prod) => {
    if (prod?.length > 21) {
      return "...";
    } else return null;
  };
  console.log("recipess", recipe);
  return (
    <>
      <Link
        to={"/recipe/" + recipe?._id}
        key={recipe?._id}
        className="cardWrapper"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          width: "330px",
          height: "150px",
          padding: "6px 10px 6px 0px",
          borderRadius: "50px 10px 10px 10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#fff",
          border: "1px solid #f5f7f8"
        }}
      >
        <div
          className="imageWrapper"
          style={{
            display: "flex",
            width: "150px",
            height: "140px",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "40px 10px 10px 10px"
          }}
        >
          <img
            src={recipe?.images[0]}
            alt="image"
            style={{
              borderRadius: "40px 10px 10px 10px",
              width: "150px",
              height: "140px"
            }}
          />
        </div>
        <div
          className="detailsWrapper"
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "20px",
            marginLeft: "10px"
          }}
        >
          <div
            className="top"
            style={{
              display: "flex",
              flexDirection: "row"
            }}
          >
            <div
              className="category"
              style={{
                fontSize: "15px",
                color: "grey"
              }}
            >
              {recipe?.category}
            </div>
          </div>
          <i>
            <div
              className="name"
              style={{
                fontSize: "17px",
                fontWeight: "500",
                textAlign: "left",
                width: "150px"
              }}
            >
              {recipe?.name?.substring(0, 20)}
              {getSpliing(recipe?.name)}
            </div>
          </i>
          {/* <div className="dietary">{recipe?.dietary}</div> */}
          {/* <div className="details">
              <div className="items">
                <b className="key">prep Time</b>
                <div className="value">{recipe?.prepTime}</div>
              </div>
              <div className="items">
                <b className="key">cook Time</b>
                <div className="value">{recipe?.cookTime}</div>
              </div>
              <div className="items">
                <b className="key">servings</b>
                <div className="value">{recipe?.servings}</div>
              </div>
            </div> */}
          <div
            className="viewRecipe"
            style={{
              color: "#D95F59",
              marginTop: "10px",
              fontSize: "15px",
              display: "flex",
              flexDirection: "row",
              gap: "20px",
              alignItems: "center"
            }}
          >
            <button className="">View Recipe</button>
            <MdOutlineBookmarkAdd
              onClick={(e) => handleWishlist(e, recipe?._id)}
              width={30}
              height={30}
              className="wish"
              style={{
                width: "25px",
                height: "25px"
              }}
            />
          </div>
        </div>
      </Link>
    </>
  );
};

export default VerticalRecipeCard;
