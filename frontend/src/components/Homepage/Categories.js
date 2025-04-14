import React, { useState, useEffect } from "react";
import { HomepageStyled } from "./HomepageStyled";
import SummaryApi from "../../common";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const categoryLoading = new Array(13).fill(null);

  const fetchCategories = async () => {
    setLoading(true);
    const categoriesList = await fetch(SummaryApi?.getCategories.url);
    const dataResponse = await categoriesList.json();
    setLoading(false);
    setCategories(dataResponse?.data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <HomepageStyled>
      <div className="categoryWrapper">
        {loading
          ? categoryLoading.map((el, index) => {
              return (
                <div
                  className="h-16 w-16 md:w-20 md:h-20 rounded-full overflow-hidden bg-slate-200 animate-pulse"
                  key={"categoryLoading" + index}
                ></div>
              );
            })
          : categories?.map((category, id) => {
              return (
                <Link
                  to={"/product-category?category=" + category?.category}
                  className="categoryItem"
                  key={category?.category}
                >
                  <div className="categoryImage">
                    <img src={category?.productImage?.[0]} alt="category" />
                  </div>
                  <div className="categoryName">{category?.category}</div>
                </Link>
              );
            })}
      </div>
    </HomepageStyled>
  );
};

export default Categories;
