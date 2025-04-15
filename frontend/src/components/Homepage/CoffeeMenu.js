import React, { useState, useEffect } from "react";
// import { HomepageStyled } from "./HomepageStyled";
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
    <>
      <div
        className="coffeeMenuWrapper"
        style={{
          backgroundColor: "#fff",
          padding: "20px 14%"
        }}
      >
        <div
          className="headerWrapper"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <i>
            <div
              className="header"
              style={{
                fontSize: "28px",
                fontWeight: "500",
                marginTop: "15px",
                color: "#9f2b68"
              }}
            >
              Coffee Menu List
            </div>
          </i>
          <div
            className="subheader"
            style={{
              fontSize: "15px",
              textAlign: "center",
              width: "600px",
              fontWeight: "400",
              marginTop: "10px"
            }}
          >
            Our coffee is crafted from the finest beans, roasted to perfection
            to deliver a rich, aromatic experience. Whether you prefer a bold
            espresso or a smooth latte, each cup promises to invigorate and
            delight.
          </div>
        </div>
        <div
          className="bodyWrapper"
          style={{
            padding: "25px 0px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between"
          }}
        >
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            data?.slice(0, 6)?.map((item, index) => (
              <Link
                to={"/product/" + item?._id}
                key={index}
                className="cardWrapper"
                style={{
                  width: "calc(50% - 10px)",
                  display: "flex",
                  gap: "10px",
                  rowGap: "10px",
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: "20px",
                  borderRadius: "30px 0 0 30px",
                  boxShadow: " 0 2px 4px #B692C2",
                  backgroundColor: "#fff"
                }}
              >
                <div
                  className="image"
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%"
                  }}
                >
                  <img
                    src={item?.productImage[0]}
                    alt="productImage"
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%"
                    }}
                  />
                </div>
                <div className="details" style={{ marginLeft: "20px" }}>
                  <i>
                    <div
                      className="name"
                      style={{
                        fontWeight: "500",
                        fontSize: "17px",
                        textAlign: "left",
                        color: "#9f2b68"
                      }}
                    >
                      {item?.productName}
                    </div>
                  </i>
                  <div
                    className="description"
                    style={{
                      marginTop: "5px",
                      fontSize: "17px",
                      fontWeight: "400",
                      fontFamily: "Open Sans"
                    }}
                  >
                    {item.description.substring(0, 40)}
                    {getSpliing(item?.description)}
                  </div>
                </div>
                <div
                  className="price"
                  style={{
                    fontWeight: "600",
                    fontSize: "18px",
                    textAlign: "center",
                    marginTop: "10px",
                    color: "#9f2b68",
                    marginLeft: "10px"
                  }}
                >
                  {displayINRCurrency(item?.sellingPrice)}
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default CoffeeMenu;
