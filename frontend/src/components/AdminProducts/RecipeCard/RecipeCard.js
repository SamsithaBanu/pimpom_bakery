import React, { useState } from "react";
import { RecipeCardStyled } from "./RecipeCardStyled";
import { MdModeEditOutline } from "react-icons/md";
import AdminEditProduct from "../../AdminEditProduct";
import AdminEditRecipe from "../AdminEditRecipe/AdminEditRecipe";

const RecipeCard = ({ data, fetchData }) => {
  const [editProduct, setEditProduct] = useState(false);

  console.log("dataREce", data?.images);

  return (
    <RecipeCardStyled>
      <div className="cardWrapper">
        <div className="imageWrapper">
          <img src={data?.images[0]} alt={data?.name} />
        </div>
        <div className="detailsWrapper">
          <div className="name">{data?.name}</div>
          <div className="category">{data?.category}</div>
          <div className="details">
            <div className="items">
            <b className="key">prep Time</b>
            <div className="value">{data?.prepTime}</div>
            </div>
            <div className="items">
            <b className="key">cook Time</b>
            <div className="value">{data?.cookTime}</div>
            </div>
            <div className="items">
            <b className="key">servings</b>
            <div className="value">{data?.servings}</div>
            </div>
          </div>
          <div className="editProduct" onClick={() => setEditProduct(true)}>
            <button className="px-3 py-2 uploadProductBtn">
              Update Recipe
            </button>
            <MdModeEditOutline />
          </div>
        </div>
        {editProduct && (
          <AdminEditRecipe
            recipeData={data}
            onClose={() => setEditProduct(false)}
            fetchData={fetchData}
          />
        )}
      </div>
    </RecipeCardStyled>
  );
};

export default RecipeCard;
