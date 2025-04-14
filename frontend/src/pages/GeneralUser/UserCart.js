import React, { useState, useEffect, useContext } from "react";
import Context from "../../context";
import SummaryApi from "../../common";
import { MyCartStyled } from "../MyCart/MyCartStyled";
import OtherProducts from "../../components/OtherProducts";
import displayINRCurrency from "../../helpers/displayCurrency";
import { MdDelete } from "react-icons/md";
import addtoCart from "../../assests/add to cart image.png";
import { Summary } from "../../components/Summary";

const UserCart = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const context = useContext(Context);
  const loadingCart = new Array(4).fill(null);

  const fetchData = async () => {
    console.log("hii");
    const response = await fetch(SummaryApi.addToCartViewProduct.url, {
      method: SummaryApi.addToCartViewProduct.method,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
    });

    const responseData = await response.json();

    if (responseData.success) {
      setData(responseData.data);
    }
  };

  const handleLoading = async () => {
    await fetchData();
  };

  useEffect(() => {
    setLoading(true);
    handleLoading();
    setLoading(false);
  }, []);

  const increaseQty = async (id, qty) => {
    const response = await fetch(SummaryApi.addToCartUpdateProduct.url, {
      method: SummaryApi.addToCartUpdateProduct.method,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        _id: id,
        quantity: qty + 1,
      }),
    });

    const responseData = await response.json();

    if (responseData.success) {
      fetchData();
    }
  };

  const decraseQty = async (id, qty) => {
    if (qty >= 2) {
      const response = await fetch(SummaryApi.addToCartUpdateProduct.url, {
        method: SummaryApi.addToCartUpdateProduct.method,
        credentials: "include",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          _id: id,
          quantity: qty - 1,
        }),
      });

      const responseData = await response.json();

      if (responseData.success) {
        fetchData();
      }
    }
  };

  const deleteCartProduct = async (id) => {
    const response = await fetch(SummaryApi.deleteAddToCartProduct.url, {
      method: SummaryApi.deleteAddToCartProduct.method,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        _id: id,
      }),
    });

    const responseData = await response.json();

    if (responseData.success) {
      fetchData();
      context.fetchUserAddToCart();
    }
  };
  console.log("addtocare", data);

  const totalQty = data.reduce(
    (previousValue, currentValue) => previousValue + currentValue.quantity,
    0
  );
  const totalPrice = data.reduce(
    (preve, curr) => preve + curr.quantity * curr?.productId?.sellingPrice,
    0
  );
  const totalWholePrice = data.reduce(
    (preve, curr) => preve + curr.quantity * curr?.productId?.price,
    0
  );
  const difference = totalWholePrice - totalPrice;
  const servicePrice = 10;

  return (
    <MyCartStyled>
      <div className="mycartWrapper">
        <div className="leftWrapper">
          <div className="banner">
            <img src={addtoCart} alt="addtocart" />
          </div>
          <div className="totalItemsWrapper">
            <div className="total">
              Total:<b> {totalQty}</b> Item(s)
            </div>
            <div className="addtoCartWrapper">
              <div className="topwrapper">
                <div className="left">
                  <div className="standard">Standard</div>
                  <div className="delivery">delivery 12Aug,2024</div>
                </div>
                <div className="right">
                  <b>{totalQty}</b> item(s)
                </div>
              </div>
              <div className="bottomWrapper">
                {data?.map((product) => {
                  return (
                    <div
                      className="cartWrapper"
                      key={product?._id + "Add To Cart Loading"}
                    >
                      {console.log("pr", product?.productId?.sellingPrice)}
                      <div className="top">
                        <div className="image">
                          <img src={product?.productId?.productImage[0]} />
                        </div>
                        <div className="details">
                          <div className="productname">
                            {product?.productId?.productName}
                          </div>
                          <div className="category">
                            {product?.productId?.category}
                          </div>
                          <div className="priceWrapper">
                            <div className="actualPrice">
                              {displayINRCurrency(
                                product?.productId?.sellingPrice
                              )}
                            </div>
                            <div className="saves">
                              {displayINRCurrency(product?.productId?.price)}
                            </div>
                          </div>
                        </div>
                        <div className="addedCTA">
                          <button
                            className="minus"
                            onClick={() =>
                              decraseQty(product?._id, product?.quantity)
                            }
                          >
                            -
                          </button>
                          <div className="count">{product?.quantity}</div>
                          <button
                            className="add"
                            onClick={() =>
                              increaseQty(product?._id, product?.quantity)
                            }
                          >
                            +
                          </button>
                        </div>
                        <div
                          className="removeCTA"
                          onClick={() => deleteCartProduct(product?._id)}
                        >
                          <MdDelete size={25} />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* <div className="otherProductsWrapper">
            <OtherProducts addToCartProducts={data} fetchData={fetchData} />
          </div> */}
        </div>
        <div className="rightWrapper">
          <Summary
            totalPrice={totalPrice}
            totalWholePrice={totalWholePrice}
            difference={difference}
            servicePrice={servicePrice}
          />
        </div>
      </div>
    </MyCartStyled>
  );
};

export default UserCart;
