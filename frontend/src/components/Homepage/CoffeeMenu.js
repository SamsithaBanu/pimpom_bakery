import React, { useState, useEffect } from "react";
import { HomepageStyled } from "./HomepageStyled";
import fetchCategoryWiseProduct from "../../helpers/fetchCategoryWiseProducts";
import { Link } from "react-router-dom";
import displayINRCurrency from "../../helpers/displayCurrency";

const CoffeeMenu = ({ category }) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const CategoryWiseProduct = await fetchCategoryWiseProduct(category);
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
    if (prod?.length > 41) {
      return "...";
    } else return null;
  };

  return (
    <HomepageStyled>
      <div className="coffeeMenuWrapper">
        <div className="headerWrapper">
          <i>
            <div className="header">Coffee Menu List</div>
          </i>
          <div className="subheader">
            Our coffee is crafted from the finest beans, roasted to perfection
            to deliver a rich, aromatic experience. Whether you prefer a bold
            espresso or a smooth latte, each cup promises to invigorate and
            delight.
          </div>
        </div>
        <div className="bodyWrapper">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            data?.slice(0, 6)?.map((item, index) => (
              <Link
                to={"/product/" + item?._id}
                key={index}
                className="cardWrapper"
              >
                <div className="image">
                  <img src={item?.productImage[0]} alt="product Image" />
                </div>
                <div className="details">
                  <i>
                    <div className="name">{item?.productName}</div>
                  </i>
                  <div className="description">
                    {item.description.substring(0, 40)}
                    {getSpliing(item?.description)}
                  </div>
                </div>
                <div className="price">
                  {displayINRCurrency(item?.sellingPrice)}
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </HomepageStyled>
  );
};

export default CoffeeMenu;
