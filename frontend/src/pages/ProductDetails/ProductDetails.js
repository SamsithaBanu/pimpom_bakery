import React, { useContext, useEffect, useState } from "react";
import SummaryApi from "../../common";
import { useParams, Link } from "react-router-dom";
import { ProductDetailsStyled } from "./ProductDetailsStyled";
import displayINRCurrency from "../../helpers/displayCurrency";
import { MdOutlineShoppingCart, MdOutlineMailOutline } from "react-icons/md";
import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";
import fetchCategoryWiseProduct from "../../helpers/fetchCategoryWiseProducts";
import Contact from "../../components/Contact";
import Newsletter from "../../components/Homepage/Newsletter";
import addToCart from "../../helpers/addToCart";
import Context from "../../context";
import AllReviews from "./AllReviews";
import Reviews from "./Reviews";
import { StarRating } from "../../helpers/stars";

const ProductDetails = () => {
  const [data, setData] = useState({
    productName: "",
    brandName: "",
    category: "",
    productImage: [],
    description: "",
    price: "",
    sellingPrice: "",
    isThereProduct: false,
  });
  const [isLoading, setLoading] = useState(false);
  const [category, setCategory] = useState("");
  const [relatedData, setRelatedData] = useState([]);
  const currentUrl = window.location.href;
  const [imageData, setImageData] = useState();
  const [reviewAdded, setReviewAdded] = useState(false);
  const [averageReview, setAverageReview] = useState(0);

  const params = useParams();

  const { fetchUserAddToCart } = useContext(Context);

  const handleAddToCart = async (e, id) => {
    await addToCart(e, id);
    fetchUserAddToCart();
  };

  const fetchData = async (productId) => {
    setLoading(true);
    const response = await fetch(SummaryApi.productDetails.url, {
      method: SummaryApi.productDetails.method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        productId: productId,
      }),
    });
    const dataResponse = await response?.json();
    console.log("product98372309", dataResponse);
    setData(dataResponse?.data);
    setCategory(dataResponse?.data?.category);
    setLoading(false);
  };

  const fetchRelatedProducts = async (productCategory, id) => {
    try {
      const CategoryWiseProduct = await fetchCategoryWiseProduct(
        productCategory
      );
      const relatedDatas = CategoryWiseProduct?.data?.filter(
        (product) => id !== product?._id
      );
      setRelatedData(relatedDatas);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(params?.id);
  }, [params?.id]);

  useEffect(() => {
    if (category) {
      fetchRelatedProducts(category, params?.id);
    }
  }, [category]);

  console.log("real", relatedData);

  const getSpliing = (prod) => {
    if (prod?.length > 22) {
      return "...";
    } else return null;
  };

  const handleShare = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        currentUrl
      )}&text=${encodeURIComponent("")}`,
      "_blank",
      "width=600,height=400"
    );
  };
  const handleFacebookShare = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        currentUrl
      )}`,
      "_blank",
      "width=600,height=400"
    );
  };

  const handleWhatsAppShare = () => {
    const text = `Check out this page and find the delicious bakery products: ${currentUrl}`;
    window.open(
      `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`,
      "_blank",
      "width=600,height=400"
    );
  };

  const handleEmailShare = () => {
    const subject =
      "Check out this page and find the delicious bakery products";
    const body = `Hi there,\n\nI found this interesting page and thought you might like it.\n\nHere is different types of cookies, cakes, muffins, coffee, wedding cakes and pancakes: ${currentUrl}\n\nBest regards,\nSamsi`;
    window.location.href = `mailto:?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <ProductDetailsStyled>
      <div className="productDetailsWrapper">
        <div className="imgWrapper">
          <div className="productImage">
            <img
              src={imageData || data?.productImage[0]}
              alt="productDetailImage"
            />
          </div>
          <div className="imageWrapper">
            {data?.productImage?.map((img) => {
              return (
                <img
                  className="images"
                  src={img}
                  alt="other images"
                  onClick={() => setImageData(img)}
                />
              );
            })}
          </div>
        </div>
        <div className="productDescription">
          <div className="category">{data?.category}</div>
          <div className="name">{data?.productName}</div>
          <div className="priceWrapper">
            <div className="price">{displayINRCurrency(data.sellingPrice)}</div>
            <div className="saves">
              saves upto {displayINRCurrency(data.price - data.sellingPrice)}
            </div>
          </div>
          <div className="star">
            <StarRating
              rating={
                averageReview !== undefined &&
                averageReview !== null &&
                averageReview !== "NaN"
                  ? averageReview
                  : 5
              }
            />
          </div>
          <div className="description">{data?.description}</div>
          <div className="addToCart">
            <button className="" onClick={(e) => handleAddToCart(e, data?._id)}>
              Add to cart
            </button>
            <MdOutlineShoppingCart style={{ width: "22px", height: "22px" }} />
          </div>
          <div className="shareWrapper">
            <div className="title">Share this product</div>
            <tr className="share">
              <td className="shares">
                <FaFacebook
                  size={25}
                  color={"#9f2b68"}
                  onClick={handleFacebookShare}
                />
              </td>
              <td className="shares">
                <FaTwitter size={25} color={"#9f2b68"} onClick={handleShare} />
              </td>
              <td className="shares">
                <FaWhatsapp
                  size={25}
                  color={"#9f2b68"}
                  onClick={handleWhatsAppShare}
                />
              </td>
              <td className="shares">
                <MdOutlineMailOutline
                  size={25}
                  color={"#9f2b68"}
                  onClick={handleEmailShare}
                />
              </td>
            </tr>
          </div>
        </div>
      </div>
      <div className="relativeProducts">
        <div className="heading">
          <i>
            <div className="header">Related Pastries</div>
          </i>
          <div className="seeAll">See all</div>
        </div>
        <div className="productList">
          {relatedData?.slice(0, 6).map((item, index) => (
            <Link
              key={index}
              className="cardWrapper"
              to={"/product/" + item?._id}
              onClick={() => {
                fetchData(item?._id);
                fetchRelatedProducts(item?.category, item?._id);
              }}
            >
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
          ))}
        </div>
      </div>
      <div className="reviewWrapper">
        <AllReviews
          productId={params?.id}
          reviewAdded={reviewAdded}
          onGetReview={(val) => setAverageReview(val)}
        />
        <Reviews
          productId={params?.id}
          onChangeRecipe={() => setReviewAdded(true)}
        />
      </div>
      <Newsletter />
      <Contact />
    </ProductDetailsStyled>
  );
};

export default ProductDetails;
