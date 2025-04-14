import React, { useState, useEffect } from "react";
import SummaryApi from "../../common";
import { HomepageStyled } from "./HomepageStyled";
import { Link, NavLink } from "react-router-dom";

const AllCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const categoryLoading = new Array(7).fill(null)


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
      <div className="categoryListWrapper">
      {

loading ? (
    categoryLoading.map((el,index)=>{
            return(
                <div className='h-16 w-16 md:w-20 md:h-20 rounded-full overflow-hidden bg-slate-200 animate-pulse' key={"categoryLoading"+index}>
                </div>
            )
    })  
):
        (categories?.map((category, id) => {
          return (
            <Link to={"/product-category?category="+category?.category} className="category" key={category?.category}>
              <div className="categoryImg">
                <img src={category?.productImage?.[0]} alt="category" />
              </div>
              <div className="categoryname">{category?.category}</div>
            </Link>
          );
        }))
      }
      </div>
    </HomepageStyled>
  );
};

export default AllCategories;
