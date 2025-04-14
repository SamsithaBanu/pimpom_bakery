import React, { useContext } from "react";
import { VerticalRecipesCardStyled } from "./VerticalRecipeCardStyled";
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
    if(isFromWishlist){
      fetchData();
    }
  };

  const getSpliing = (prod) => {
    if (prod?.length > 21) {
      return "...";
    } else return null;
  };
  console.log('recipess', recipe);
  return (
    <VerticalRecipesCardStyled>
      <Link
        to={"/recipe/" + recipe?._id}
        key={recipe?._id}
        className="cardWrapper"
      >
        <div className="imageWrapper">
          <img src={recipe?.images[0]} alt="image" />
        </div>
        <div className="detailsWrapper">
          <div className="top">
            <div className="category">{recipe?.category}</div>
          </div>
          <i>
            <div className="name">
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
          <div className="viewRecipe">
            <button className="">View Recipe</button>
            <MdOutlineBookmarkAdd
              onClick={(e) => handleWishlist(e, recipe?._id)} width={30} height={30} className="wish"
            />
          </div>
        </div>
      </Link>
    </VerticalRecipesCardStyled>
  );
};

export default VerticalRecipeCard;
