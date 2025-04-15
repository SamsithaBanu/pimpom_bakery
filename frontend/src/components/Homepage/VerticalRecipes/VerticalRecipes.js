import React, { useState, useEffect } from "react";
// import { VerticalRecipesStyled } from "./VerticalRecipesStyled";
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
    <>
      <div
        className="containermax"
        id="category"
        style={{
          width: "100%",
          padding: "0px 14% 20px 14%",
          backgroundColor: "#f5f7f8",
          marginTop: "70px"
        }}
      >
        <div
          className="header-wrapper"
          style={{
            paddingTop: "20px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <div
            className="heading-main"
            style={{
              display: "flex",
              paddingLeft: "30px",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <i>
              <div
                className="header"
                style={{
                  fontSize: "26px",
                  fontWeight: "500",
                  textAlign: "center",
                  color: "#d95f59"
                }}
              >
                Our Recipes
              </div>
            </i>
          </div>
          {/* <Link className="seeAll" to={'/product-listing'}>See all</Link> */}
          <Link
            className="seeAll"
            style={{
              fontSize: "18px",
              color: "#d95f59",
              margin: "30px 55px 20px 30px"
            }}
            to={"/recipe-listing"}
          >
            See all
          </Link>
        </div>
        <div
          className="container"
          style={{
            margin: "0px auto",
            padding: "0 20px",
            position: "relative",
            display: "flex",
            flexDirection: "row"
          }}
        >
          <div
            className="cardContainer"
            style={{
              display: "flex",
              gap: "25px",
              justifyContent: "flex-start",
              flexWrap: "wrap"
            }}
          >
            {allRecipe?.map((recipe, index) => {
              return (
                <VerticalRecipeCard recipe={recipe} key={index + "allRecipe"} />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default VerticalRecipes;
