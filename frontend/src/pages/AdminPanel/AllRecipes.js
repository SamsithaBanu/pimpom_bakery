import React, { useState, useEffect } from "react";
import { AdminPanelStyled } from "./AdminPanelStyled";
import UploadProductDup from "../../components/UploadProduct/UploadProductDup";
import SummaryApi from "../../common";
import AdminProductCard from "../../components/AdminProductCard";
import UploadRecipe from "../../components/UploadRecipes/UploadRecipe";
import RecipeCard from "../../components/AdminProducts/RecipeCard/RecipeCard";

const AllRecipes = () => {
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
    <AdminPanelStyled>
      <div className="allProductsWrapper">
        <div className="productHeader">All Recipes</div>
        <button
          className="uploadProductCTA"
          onClick={() => setOpenUploadProduct(true)}
        >
          Upload Recipe
        </button>
      </div>
      {/**all product */}
      <div className="productsWrapper">
        {allRecipe?.map((recipe, index) => {
          return (
            <RecipeCard
            data={recipe}
            key={index+ "allRecipe"}
            fetchData= {fetchAllProduct} />
          );
        })}
      </div>
      {openUploadProduct && (
        <UploadRecipe
          onClose={() => setOpenUploadProduct(false)}
          fetchData={fetchAllProduct}
        />
      )}
    </AdminPanelStyled>
  );
};

export default AllRecipes;
