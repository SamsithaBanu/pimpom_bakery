import React, { useState, useEffect } from "react";
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
    <>
      <div
        className="categoryWrapper"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "30px",
          padding: "0 10%",
          position: "absolute",
          bottom: "0",
          width: " 100%",
          top: "550px"
        }}
      >
        {loading
          ? categoryLoading.map((el, index) => {
              return <div key={"categoryLoading" + index}></div>;
            })
          : categories?.map((category, id) => {
              return (
                <Link
                  to={"/product-category?category=" + category?.category}
                  className="categoryItem"
                  style={{
                    width: "140px",
                    height: "120px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "white",
                    borderRadius: "4px",
                    padding: "8px 0px"
                  }}
                  key={category?.category}
                >
                  <div className="categoryImage">
                    <img
                      src={category?.productImage?.[0]}
                      alt="category"
                      style={{
                        width: "80px",
                        height: "80px",
                        borderRadius: " 50%"
                      }}
                    />
                  </div>
                  <div
                    className="categoryName"
                    style={{
                      fontSize: "15px",
                      fontWeight: "600",
                      marginTop: "8px"
                    }}
                  >
                    {category?.category}
                  </div>
                </Link>
              );
            })}
      </div>
    </>
  );
};

export default Categories;
