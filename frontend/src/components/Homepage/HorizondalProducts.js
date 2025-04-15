import React, { useEffect, useState, useRef, useContext } from "react";
import fetchCategoryWiseProduct from "../../helpers/fetchCategoryWiseProducts";
import displayINRCurrency from "../../helpers/displayCurrency";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import SummaryApi from "../../common";
import addToCart from "../../helpers/addToCart";
import Context from "../../context";
import ListingCard from "../listingCard/ListingCard";

const HorizondalProducts = ({ category, headings }) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const scrollElement = useRef();
  const [openUploadProduct, setOpenUploadProduct] = useState(false);
  const [allProduct, setAllProduct] = useState([]);
  const { fetchUserAddToCart } = useContext(Context);

  const handleAddToCart = async (e, id) => {
    await addToCart(e, id);
    fetchUserAddToCart();
  };

  const fetchAllProduct = async () => {
    const response = await fetch(SummaryApi.allProduct.url);
    const dataResponse = await response.json();

    setAllProduct(dataResponse?.data || []);
  };

  useEffect(() => {
    fetchAllProduct();
  }, []);

  console.log("check", data);

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

  const scrollRight = () => {
    if (scrollElement.current) {
      scrollElement.current.scrollLeft += 300;
    }
  };

  const scrollLeft = () => {
    if (scrollElement.current) {
      scrollElement.current.scrollLeft -= 300;
    }
  };

  const getSpliing = (prod) => {
    if (prod?.length > 21) {
      return "...";
    } else return null;
  };

  return (
    <>
      <div
        className="containermax"
        id="category"
        style={{
          width: "100%",
          padding: "20px 12%",
          backgroundColor: "white",
          marginTop: "70px"
        }}
      >
        <div
          className="header-wrapper"
          style={{
            paddingTop: "20px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <div
            className="heading-main"
            style={{
              display: "flex",
              paddingLeft: "300px",
              flexDirection: "column",
              alignItems: "center",
              justifycontent: "center"
            }}
          >
            {/* <i> */}
            <div
              className="header"
              style={{
                fontSize: "24px",
                fontWeight: "500",
                textAlign: "center"
              }}
            >
              {headings}
            </div>
            {/* </i> */}
            <div
              className="subheading"
              style={{ fontsize: "14px", fontWeight: "400", color: "grey" }}
            >
              Layers of Love, One Pastry at a Time,Experience the Magic of Flaky
              Goodness.
            </div>
          </div>
          <Link
            className="seeAll"
            style={{
              fontSize: "18px",
              color: "#9f2b68",
              margin: "30px 50px 0px 30px"
            }}
            to={"/product-listing"}
          >
            See all
          </Link>
        </div>
        <div
          className="container"
          style={{
            margin: "20px auto",
            padding: "0 20px",
            position: "relative"
          }}
        >
          {/* <div className="arrowWrapper">
            <button onClick={scrollLeft} className="arrowBTN arrowLeft">
              <FaAngleLeft />
            </button>
            <button onClick={scrollRight} className="arrowBTN arrowRight">
              <FaAngleRight />
            </button>
          </div> */}
          <div
            className="cardContainer"
            ref={scrollElement}
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "30px",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              allProduct
                ?.slice(0, 10)
                ?.map((item, index) => (
                  <ListingCard item={item} key={index + "allProduct"} />
                ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HorizondalProducts;
