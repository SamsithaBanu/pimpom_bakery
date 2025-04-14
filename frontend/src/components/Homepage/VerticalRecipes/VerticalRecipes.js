import React, { useState, useEffect } from "react";
import { VerticalRecipesStyled } from "./VerticalRecipesStyled";
import SummaryApi from "../../../common";
import VerticalRecipeCard from "../VerticalRecipeCard/VerticalRecipeCard";
import { Link } from "react-router-dom";

const VerticalRecipes = () => {
  const [openUploadProduct, setOpenUploadProduct] = useState(false);
  const [allRecipe, setAllRecipe] = useState([]);

  const fetchAllProduct = async () => {
    const response = await fetch(SummaryApi.allRecipe.url);
    const dataResponse = await response.json();

    setAllRecipe(dataResponse?.data || []);
  };

  useEffect(() => {
    fetchAllProduct();
  }, []);
  return (
    <VerticalRecipesStyled>
      <div className="containermax" id="category">
        <div className="header-wrapper">
          <div className="heading-main">
            <i>
              <div className="header">Our Recipes</div>
            </i>
          </div>
          {/* <Link className="seeAll" to={'/product-listing'}>See all</Link> */}
          <Link className='seeAll' to={'/recipe-listing'}>See all</Link>
        </div>
        <div className="container">
          <div className="cardContainer">
            {allRecipe?.map((recipe, index) => {
              return (
                <VerticalRecipeCard recipe={recipe} key={index + "allRecipe"} />
              );
            })}
          </div>
        </div>
      </div>
    </VerticalRecipesStyled>
  );
};

export default VerticalRecipes;
