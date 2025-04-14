import React, { useState, useEffect } from "react";
import VerticalRecipeCard from "../Homepage/VerticalRecipeCard/VerticalRecipeCard";
import { FilterRecipeStyled } from "./FilterRecipeStyled";

const FilterRecipe = ({ allRecipe }) => {
  return (
    <FilterRecipeStyled>
      <div className="filterRecipe">
        <i>
          <div className="header"> {allRecipe?.length} Items Available</div>
        </i>
        <div className="recipeListing">
          {allRecipe?.map((product, index) => {
            return (
              <VerticalRecipeCard recipe={product} key={index + "allRecipe"} />
            );
          })}
        </div>
      </div>
    </FilterRecipeStyled>
  );
};

export default FilterRecipe;
