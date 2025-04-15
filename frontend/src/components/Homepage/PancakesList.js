import React, { useState, useEffect } from "react";
// import { PancakesListStyled } from "./PancakesListStyled";
import fetchCategoryWiseProduct from "../../helpers/fetchCategoryWiseProducts";
import { Link } from "react-router-dom";
import pancake_center from "../../assests/pancake_center.png";

const PancakesList = ({ category, headings }) => {
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
    if (prod?.length > 22) {
      return "...";
    } else return null;
  };

  return (
    <>
      <Link
        className="pancakesWrapper"
        style={{
          backgroundColor: "#f5f7f8",
          padding: "30px 16%",
          display: "flex",
          flexDirection: "column"
        }}
        id="menu"
        to={"/product-category?category=Pancakes"}
      >
        <div
          className="topWrapper"
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
                fontSize: "25px",
                fontWeight: "500",
                textAlign: "center"
              }}
            >
              {headings}
            </div>
          </i>
          <div
            className="subHeader"
            style={{
              padding: "5px 15px 0px 15px",
              fontSize: "14px",
              textAlign: "center",
              width: "800px",
              lineHeight: "22px"
            }}
          >
            Pancakes are a beloved breakfast staple enjoyed by people all over
            the world. These delightful, fluffy treats are made from a simple
            batter of flour, eggs, milk, and a touch of baking powder.
          </div>
        </div>
        <div
          className="bottomWrapper"
          style={{
            display: "flex",
            flexDirection: "row",
            paddingTop: "20px",
            gap: "20px"
          }}
        >
          <div
            className="leftWrapper"
            style={{
              width: "25%",
              display: "flex",
              flexDirection: "column",
              gap: "25px"
            }}
          >
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              data?.slice(0, 2).map((item, index) => (
                <Link
                  key={index}
                  className="cardWrapper"
                  style={{
                    flex: "0 0 auto",
                    marginRight: "30px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    borderRadius: "30px 4px 10px 4px",
                    padding: "10px 15px",
                    background: "#eeedeb",
                    boxShadow: "0 2px 4px #eeedeb"
                  }}
                  to={"/product/" + item?._id}
                >
                  <div
                    className="cardImage"
                    style={{
                      width: "130px",
                      height: "130px",
                      overflow: "hidden",
                      borderRadius: "50%"
                    }}
                  >
                    <img
                      src={item?.productImage}
                      alt="productImage"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                      }}
                    />
                  </div>
                  <div
                    className="cardDetails"
                    style={{
                      marginTop: "15px"
                    }}
                  >
                    <div
                      className="name"
                      style={{
                        fontWeight: "500",
                        fontSize: "18px",
                        textAlign: "right"
                      }}
                    >
                      {item?.productName.substring(0, 20)}
                      {getSpliing(item?.productName)}
                    </div>
                    <div
                      className="category"
                      style={{
                        fontWeight: "400",
                        fontSize: "15px",
                        textAlign: "right"
                      }}
                    >
                      {item?.category}
                    </div>
                    <div
                      className="cta"
                      style={{
                        fontWeight: "400",
                        fontSize: "16px",
                        textAlign: "right",
                        color: "#9f2b68"
                      }}
                    >
                      <Link className="" to={"/product/" + item?._id}>
                        Show more
                      </Link>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>
          <div
            className="centerWrapper"
            style={{
              width: "50%",
              padding: "25px",
              height: "500px"
            }}
          >
            <img
              src={pancake_center}
              alt="puffs"
              style={{
                height: "100%",
                width: "100%"
              }}
            />
          </div>
          <div
            className="rightWrapper"
            style={{
              width: "25%",
              display: "flex",
              flexDirection: "column",
              gap: "10px"
            }}
          >
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              data?.slice(2, 4).map((item, index) => (
                <Link
                  key={index}
                  className="cardWrapper"
                  to={"/product/" + item?._id}
                  style={{
                    flex: "0 0 auto",
                    marginRight: "30px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    borderRadius: "30px 4px 10px 4px",
                    padding: "10px 15px",
                    background: "#eeedeb",
                    boxShadow: "0 2px 4px #eeedeb"
                  }}
                >
                  <div
                    className="cardImage"
                    style={{
                      width: "130px",
                      height: "130px",
                      overflow: "hidden",
                      borderRadius: "50%"
                    }}
                  >
                    <img
                      src={item?.productImage}
                      alt="productImage"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                      }}
                    />
                  </div>
                  <div className="cardDetails" style={{ marginTop: "15px" }}>
                    <div
                      className="name"
                      style={{
                        fontWeight: "500",
                        fontSize: "18px",
                        textAlign: "right"
                      }}
                    >
                      {item?.productName.substring(0, 20)}
                      {getSpliing(item?.productName)}
                    </div>
                    <div
                      className="category"
                      style={{
                        fontWeight: "400",
                        fontSize: "15px",
                        textAlign: "right"
                      }}
                    >
                      {item?.category}
                    </div>
                    <div
                      className="cta"
                      style={{
                        fontWeight: "400",
                        fontSize: "16px",
                        textAlign: "right",
                        color: "#9f2b68"
                      }}
                    >
                      <Link className="" to={"/product/" + item?._id}>
                        Show more
                      </Link>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </Link>
    </>
  );
};

export default PancakesList;
