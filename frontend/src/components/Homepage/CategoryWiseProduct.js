import React, { useState, useEffect } from "react";
import { HomepageStyled } from "./HomepageStyled";
import fetchCategoryWiseProduct from "../../helpers/fetchCategoryWiseProducts";
import displayINRCurrency from "../../helpers/displayCurrency";
import { Link } from "react-router-dom";

const CategoryWiseProduct = ({ heading, subHeading, align }) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const CategoryWiseProduct = await fetchCategoryWiseProduct(heading);
      setData(CategoryWiseProduct?.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const getSpliing = (prod) => {
    if (prod?.length > 22) {
      return "...";
    } else return null;
  };

  return (
    <HomepageStyled>
      <div className="categoryWiseProductWrapper">
        {align === "left" ? (
          <>
            <div className="leftWrapper">
              <i>
                <div className="header">{heading}</div>
              </i>
              <div className="subheader">{subHeading}</div>
              <div className="cta">
                <Link className="" to={"/product-category?category=" + heading}>Show more</Link>
              </div>
              <div className="image">
                <img src={data[4]?.productImage} alt="cakeImage" />
              </div>
            </div>
            <div className="rightWrapper">
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                data?.slice(0, 4).map((item, index) => (
                  <Link key={index} className="cardWrapper"
                    to={"/product/" + item?._id} >
                    <div className="cardImage">
                      <img src={item?.productImage} alt="product Image" />
                    </div>
                    <div className="cardDetails">
                      <i>
                        <div className="name">
                          {item?.productName.substring(0, 20)}
                          {getSpliing(item?.productName)}
                        </div>
                      </i>
                      <div className="priceWrapper">
                        <div className="price">
                          {displayINRCurrency(item?.sellingPrice)}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))
              )}
            </div>
          </>
        ) : (
          <>
            <div className="rightWrapper">
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                data?.slice(0, 4).map((item, index) => (
                  <Link key={index} className="cardWrapper" to={"/product/" + item?._id}>
                    <div className="cardImage">
                      <img src={item?.productImage} alt="product Image" />
                    </div>
                    <div className="cardDetails">
                      <i>
                        <div className="name">
                          {item?.productName.substring(0, 20)}
                          {getSpliing(item?.productName)}
                        </div>
                      </i>
                      <div className="priceWrapper">
                        <div className="price">
                          {displayINRCurrency(item?.sellingPrice)}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))
              )}
            </div>
            <div className="leftWrapper">
              <i>
                <div className="header">{heading}</div>
              </i>
              <div className="subheader">{subHeading}</div>
              <div className="cta">
                <Link className="" to={"/product-category?category=" + heading}>Show more</Link>
              </div>
              <div className="image">
                <img src={data[4]?.productImage} alt="cakeImage" />
              </div>
            </div>
          </>
        )}
      </div>
    </HomepageStyled>
  );
};

export default CategoryWiseProduct;
