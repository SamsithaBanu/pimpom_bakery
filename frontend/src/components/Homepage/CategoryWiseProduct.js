import React, { useState, useEffect } from "react";
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
    <>
      <div
        className="categoryWiseProductWrapper"
        style={{
          backgroundColor: "#f5f7f8",
          padding: "30px 13%",
          display: "flex",
          flexDirection: "row"
        }}
      >
        {align === "left" ? (
          <>
            <div
              className="leftWrapper"
              style={{
                width: "25%",
                borderRadius: "1px",
                background: "#eeedeb",
                boxShadow: "0 2px 4px #eeedeb"
              }}
            >
              <i>
                <div
                  className="header"
                  style={{
                    padding: "15px 15px 0px 15px",
                    fontSize: "20px",
                    fontWeight: "500",
                    textAlign: "left"
                  }}
                >
                  {heading}
                </div>
              </i>
              <div
                className="subheader"
                style={{
                  padding: "5px 15px 0px 15px",
                  fontSize: "14px",
                  textAlign: "left"
                }}
              >
                {subHeading}
              </div>
              <div
                className="cta"
                style={{
                  margin: "15px 15px 15px 15px",
                  backgroundColor: "#9f2b68",
                  color: "#fff",
                  border: "none",
                  width: "40%",
                  padding: "8px 15px",
                  cursor: "pointer",
                  fontSize: "1rem",
                  marginRight: "10px"
                }}
              >
                <Link className="" to={"/product-category?category=" + heading}>
                  Show more
                </Link>
              </div>
              <div className="image">
                <img
                  src={data[4]?.productImage}
                  alt="cakeImage"
                  style={{
                    width: "310px",
                    height: "180px",
                    object: "fit"
                  }}
                />
              </div>
            </div>
            <div
              className="rightWrapper"
              style={{
                width: "75%",
                padding: "55px 20px",
                display: "flex",
                flexDirection: "row"
              }}
            >
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                data?.slice(0, 4).map((item, index) => (
                  <Link
                    key={index}
                    className="cardWrapper"
                    to={"/product/" + item?._id}
                    style={{
                      flex: "0 0 auto",
                      width: "180px",
                      height: "230px",
                      marginRight: "30px",
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                      backgroundColor: "#f5f7f8",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "30px 4px 10px 4px",
                      paddingBottom: "15px"
                    }}
                  >
                    <div
                      className="cardImage"
                      style={{
                        width: "100%",
                        height: "150px",
                        overflow: "hidden",
                        borderRadius: "40px 4px 10px 4px"
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
                      <i>
                        <div
                          className="name"
                          style={{
                            fontWeight: "500",
                            fontSize: "16px",
                            textAlign: "center"
                          }}
                        >
                          {item?.productName.substring(0, 20)}
                          {getSpliing(item?.productName)}
                        </div>
                      </i>
                      <div className="priceWrapper">
                        <div
                          className="price"
                          style={{
                            fontWeight: "400",
                            fontSize: "14px",
                            textAlign: "center",
                            marginTop: "10px"
                          }}
                        >
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
            <div
              className="rightWrapper"
              style={{
                width: "75%",
                padding: "55px 20px",
                display: "flex",
                flexDirection: "row"
              }}
            >
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                data?.slice(0, 4).map((item, index) => (
                  <Link
                    key={index}
                    className="cardWrapper"
                    to={"/product/" + item?._id}
                    style={{
                      flex: "0 0 auto",
                      width: "180px",
                      height: "230px",
                      marginRight: "30px",
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                      backgroundColor: "#f5f7f8",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "30px 4px 10px 4px",
                      paddingBottom: "15px"
                    }}
                  >
                    <div
                      className="cardImage"
                      style={{
                        width: "100%",
                        height: "150px",
                        overflow: "hidden",
                        borderRadius: "40px 4px 10px 4px"
                      }}
                    >
                      <img
                        src={item?.productImage}
                        alt="product Image"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover"
                        }}
                      />
                    </div>
                    <div className="cardDetails" style={{ marginTop: "15px" }}>
                      <i>
                        <div
                          className="name"
                          style={{
                            fontWeight: "500",
                            fontSize: "16px",
                            textAlign: "center"
                          }}
                        >
                          {item?.productName.substring(0, 20)}
                          {getSpliing(item?.productName)}
                        </div>
                      </i>
                      <div
                        className="priceWrapper"
                        style={{
                          fontWeight: "400",
                          fontSize: "14px",
                          textAlign: "center",
                          marginTop: "10px"
                        }}
                      >
                        <div
                          className="price"
                          style={{
                            fontWeight: "400",
                            fontSize: "14px",
                            textAlign: "center",
                            marginTop: "10px"
                          }}
                        >
                          {displayINRCurrency(item?.sellingPrice)}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))
              )}
            </div>
            <div
              className="leftWrapper"
              style={{
                width: "25%",
                borderRadius: "1px",
                background: "#eeedeb",
                boxShadow: "0 2px 4px #eeedeb"
              }}
            >
              <i>
                <div
                  className="header"
                  style={{
                    padding: "15px 15px 0px 15px",
                    fontSize: "20px",
                    fontWeight: "500",
                    textAlign: "left"
                  }}
                >
                  {heading}
                </div>
              </i>
              <div
                className="subheader"
                style={{
                  padding: "5px 15px 0px 15px",
                  fontSize: "14px",
                  textAlign: "left"
                }}
              >
                {subHeading}
              </div>
              <div
                className="cta"
                style={{
                  margin: "15px 15px 15px 15px",
                  backgroundColor: "#9f2b68",
                  color: "#fff",
                  border: "none",
                  width: "40%",
                  padding: "8px 15px",
                  cursor: "pointer",
                  fontSize: "1rem",
                  marginRight: "10px"
                }}
              >
                <Link className="" to={"/product-category?category=" + heading}>
                  Show more
                </Link>
              </div>
              <div className="image">
                <img
                  src={data[4]?.productImage}
                  alt="cakeImage"
                  style={{
                    width: "310px",
                    height: "180px",
                    object: "fit"
                  }}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CategoryWiseProduct;
