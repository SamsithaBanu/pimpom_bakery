import React, { useState, useEffect } from "react";
import FilterProduct from "../../components/FilterProduct/FilterProduct";
import VerticalFilters from "../../components/VerticalFilters/VerticalFilters";
import { ProductListingStyled } from "./ProductListingStyled";
import SummaryApi from "../../common";

const ProductListing = () => {
  const [allProduct, setAllProduct] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [data, setData] = useState([]);

  const fetchAllProduct = async () => {
    const response = await fetch(SummaryApi.allProduct.url);
    const dataResponse = await response.json();

    setAllProduct(dataResponse?.data || []);
    setFilteredProduct(dataResponse?.data || []);
    setData(dataResponse?.data || []);
  };

  const updateProductList = (sortedData) => {
    setFilteredProduct(sortedData);
  };

  useEffect(() => {
    fetchAllProduct();
  }, []);

  return (
    <ProductListingStyled>
      <div className="productListingWrapper">
        <div className="verticalWrapper">
          <VerticalFilters
            data={allProduct}
            updateProductList={updateProductList}
            clearData={data}
            isFromAllProducts
          />
        </div>
        <div className="filterWrapper">
          <FilterProduct allProduct={filteredProduct} />
        </div>
      </div>
    </ProductListingStyled>
  );
};

export default ProductListing;