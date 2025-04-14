import React, { useState, useEffect } from "react";
import { RecipeListingStyled } from "./RecipeListingStyled";
import SummaryApi from "../../common";
import FilterRecipe from "../../components/FilterRecipe/FilterRecipe";
import VerticalRecipeFilters from "../../components/VerticalRecipeFilters/VerticalRecipeFilters";

const RecipeListing = () => {
  const [allRecipe, setAllRecipe] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [data, setData] = useState([]);

  const fetchAllRecipe = async () => {
    try {
      const response = await fetch(SummaryApi.allRecipe.url);
      const dataResponse = await response.json();
      console.log("Fetched Recipes:", dataResponse); // Debugging
      setAllRecipe(dataResponse?.data || []);
      setFilteredProduct(dataResponse?.data || []);
      setData(dataResponse?.data || []);
    } catch (error) {
      console.error("Failed to fetch recipes", error);
    }
  };

  const updateProductList = (sortedData) => {
    console.log("Updated Product List:", sortedData); // Debugging
    setFilteredProduct(sortedData);
  };

  const handleClearFilters = () => {
    console.log("Clear Filters Triggered"); // Debugging
    setFilteredProduct(allRecipe); // Reset to all recipes
  };

  useEffect(() => {
    fetchAllRecipe();
  }, []);

  return (
    <RecipeListingStyled>
      <div className="RecipeListingWrapper">
        <div className="verticalWrapper">
          <VerticalRecipeFilters
            data={allRecipe}
            updateProductList={updateProductList}
            clearFilters={handleClearFilters} // Passing clear filter handler
            isFromAllProducts
          />
        </div>
        <div className="filterWrapper">
          <FilterRecipe allRecipe={filteredProduct} />
        </div>
      </div>
    </RecipeListingStyled>
  );
};

export default RecipeListing;
