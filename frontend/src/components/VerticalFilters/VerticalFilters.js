import React, { useState, useEffect } from "react";
import { VerticalFiltersStyled } from "./VerticalFiltersStyled";
import { useNavigate } from "react-router-dom";
import SummaryApi from "../../common";
import productCatogery from "../../helpers/allCatogeries";

const VerticalFilters = ({ data, updateProductList, clearData, isFromAllProducts }) => {
  const [activeFilter, setActiveFilter] = useState({
    sortBy: "",
    alphabeticalOrder: "",
    newArrivals: "",
  });
  const navigate = useNavigate();

  const [selectCategory, setSelectCategory] = useState({});
  const [filterCategoryList, setFilterCategoryList] = useState([]);
  const [filteredData, setFilteredData] = useState([...data]);

  const handleSelectCategory = (e) => {
    const { value, checked } = e.target;

    setSelectCategory((prev) => ({
      ...prev,
      [value]: checked,
    }));
  };

  useEffect(() => {
    const selectedCategories = Object.keys(selectCategory).filter(
      (key) => selectCategory[key]
    );

    setFilterCategoryList(selectedCategories);

    const urlParams = selectedCategories
      .map((category) => `category=${category}`)
      .join("&");
      if(isFromAllProducts){
        navigate("/product-listing?" + urlParams);
      }
  }, [selectCategory]);

  const applyFilter = () => {
    let filteredData = [...data];
  
    // Category filtering
    if (filterCategoryList.length > 0) {
      filteredData = filteredData.filter((item) =>
        filterCategoryList.includes(item.category)
      );
    }
  
    // Sorting
    if (activeFilter.sortBy) {
      filteredData = filteredData.sort((a, b) =>
        activeFilter.sortBy === "asc"
          ? a.sellingPrice - b.sellingPrice
          : b.sellingPrice - a.sellingPrice
      );
    }
  
    if (activeFilter.alphabeticalOrder) {
      filteredData = filteredData.sort((a, b) =>
        activeFilter.alphabeticalOrder === "atoz"
          ? a.productName.localeCompare(b.productName)
          : b.productName.localeCompare(a.productName)
      );
    }
  
    if (activeFilter.newArrivals) {
      filteredData = filteredData.sort((a, b) =>
        activeFilter.newArrivals === "new"
          ? new Date(b.createdAt) - new Date(a.createdAt)
          : new Date(a.createdAt) - new Date(b.createdAt)
      );
    }
  
    updateProductList(filteredData);
  };
  

  const handleFilterChange = (type, value) => {
    setActiveFilter(() => ({
      [type]: value,
    }));
  };

  const clearFilters = () => {
    setActiveFilter({
      sortBy: "",
      alphabeticalOrder: "",
      newArrivals: "",
    });
    setSelectCategory({});
    setFilterCategoryList([]);
    setFilteredData([...clearData]);
    updateProductList(clearData); // Reset to the original data to show all products
  };

  useEffect(() => {
    applyFilter();
  }, [activeFilter, filterCategoryList]);

  return (
    <VerticalFiltersStyled>
      <div className="verticalFilterWrapper">
        <div className="sortByWrapper">
          <div className="header">SORT BY</div>
          <form className="sortBy">
            <div className="itemWrapper">
              <input
                type="radio"
                name="sortBy"
                checked={activeFilter.sortBy === "asc"}
                onChange={() => handleFilterChange("sortBy", "asc")}
                value="asc"
              />
              <label className="label">Price - Low to High</label>
            </div>

            <div className="itemWrapper">
              <input
                type="radio"
                name="sortBy"
                checked={activeFilter.sortBy === "dsc"}
                onChange={() => handleFilterChange("sortBy", "dsc")}
                value="dsc"
              />
              <label className="label">Price - High to Low</label>
            </div>
          </form>

          <form className="sortBy2">
            <div className="itemWrapper">
              <input
                type="radio"
                name="alphabeticalOrder"
                checked={activeFilter.alphabeticalOrder === "atoz"}
                onChange={() => handleFilterChange("alphabeticalOrder", "atoz")}
                value="atoz"
              />
              <label className="label">Alphabetical A to Z</label>
            </div>

            <div className="itemWrapper">
              <input
                type="radio"
                name="alphabeticalOrder"
                checked={activeFilter.alphabeticalOrder === "ztoa"}
                onChange={() => handleFilterChange("alphabeticalOrder", "ztoa")}
                value="ztoa"
              />
              <label className="label">Alphabetical Z to A</label>
            </div>
          </form>

          <form className="sortBy3">
            <div className="itemWrapper">
              <input
                type="radio"
                name="newArrivals"
                checked={activeFilter.newArrivals === "new"}
                onChange={() => handleFilterChange("newArrivals", "new")}
                value="new"
              />
              <label className="label">Newest Arrivals</label>
            </div>

            <div className="itemWrapper">
              <input
                type="radio"
                name="newArrivals"
                checked={activeFilter.newArrivals === "old"}
                onChange={() => handleFilterChange("newArrivals", "old")}
                value="old"
              />
              <label className="label">Most Viewed</label>
            </div>
          </form>
{isFromAllProducts && 
          <div className="sortByWrapper">
            <div className="header">
              Category
            </div>

            <form className="sortBy3">
              {productCatogery.map((categoryName, index) => (
                <div className="itemWrapper" key={index}>
                  <input
                    type="checkbox"
                    name="category"
                    checked={selectCategory[categoryName?.value]}
                    value={categoryName?.value}
                    id={categoryName?.value}
                    onChange={handleSelectCategory}
                  />
                  <label htmlFor={categoryName?.value} className="label">
                    {categoryName?.label}
                  </label>
                </div>
              ))}
            </form>
          </div>
}
          <button onClick={clearFilters} className="clear">Clear Filters</button>
        </div>
      </div>
    </VerticalFiltersStyled>
  );
};

export default VerticalFilters;
