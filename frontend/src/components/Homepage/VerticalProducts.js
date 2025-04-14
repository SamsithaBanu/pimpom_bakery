import React, { useEffect, useState, useRef } from "react";
import fetchCategoryWiseProduct from '../../helpers/fetchCategoryWiseProducts';
import { VerticalProductStyled } from './VerticalProductsStyled';
import displayINRCurrency from '../../helpers/displayCurrency';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

const VerticalProducts = ({category, headings }) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const scrollElement = useRef();

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

  const getSpliing =(prod)=>{
    if(prod?.length > 22){
      return '...'
    }else return null;
  }

  return (
   <VerticalProductStyled>
    <div className="containermax">
      <div className="header">{headings}</div>
      <div className="container">
        <div className="arrowWrapper">
          <button onClick={scrollLeft} className="arrowBTN arrowLeft">
            <FaAngleLeft />
          </button>
          <button onClick={scrollRight} className="arrowBTN arrowRight">
            <FaAngleRight />
          </button>
        </div>
        <div className="cardContainer" ref={scrollElement}>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            data?.map((item, index) => (
              <div key={index} className="cardWrapper">
                <div className="cardImage">
                  <img src={item?.productImage} alt="product Image" />
                </div>
                <div className="cardDetails">
                  <div className="name">{item?.productName.substring(0, 20)}{getSpliing(item?.productName)}</div>
                  <div className="category">{item?.category}</div>
                  <div className="priceWrapper">
                    <div className="price">
                      {displayINRCurrency(item?.sellingPrice)}
                    </div>
                    <div className="wholePrice">
                      {displayINRCurrency(item?.price)}
                    </div>
                  </div>
                  <div className="addTocartCTA addToCart">
                    <button className="">Add to cart</button>
                    <MdOutlineShoppingCart style={{width:'20px', height:"20px"}}/>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      </div>
   </VerticalProductStyled>
  )
}

export default VerticalProducts