import React, { useState, useEffect } from "react";
import { FilterProductStyled } from "./FilterProductStyled";
import SummaryApi from "../../common";
import AdminProductCard from "../AdminProductCard";
import ListingCard from "../listingCard/ListingCard";

const FilterProduct = ({allProduct}) => {

  return (
    <FilterProductStyled>
      <div className="filterProduct">
        <i><div className="header"> {allProduct?.length} Items Available</div></i>
        <div className="productListing">
          {allProduct?.map((product, index) => {
            return <ListingCard item={product} key={index + "allProduct"} />;
          })}
        </div>
      </div>
    </FilterProductStyled>
  );
};

export default FilterProduct;
