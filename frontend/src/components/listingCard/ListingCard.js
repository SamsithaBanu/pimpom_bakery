import React, { useContext } from "react";
import { ListingCardStyled } from "./ListingCardStyled";
import displayINRCurrency from "../../helpers/displayCurrency";
import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import Context from "../../context";
import addToCart from "../../helpers/addToCart";

const ListingCard = ({ item }) => {
  const {fetchUserAddToCart} = useContext(Context)
  const getSpliing = (prod) => {
    if (prod?.length > 22) {
      return "...";
    } else return null;
  };

  const handleAddToCart = async(e,id)=>{
    await addToCart(e,id)
    fetchUserAddToCart()
 }

  return (
    <ListingCardStyled>
      <Link className="cardWrapper" to={"/product/" + item?._id}>
        <div className="cardImage">
          <img src={item?.productImage[0]} alt="product Image" />
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
            <div className="addTocartCTA addToCart" onClick={(e)=>handleAddToCart(e,item?._id)}>
              <MdOutlineShoppingCart
                style={{
                  width: "20px",
                  height: "20px",
                  color: "#fff",
                  marginTop: "5px",
                }}
              />
            </div>
          </div>
        </div>
      </Link>
    </ListingCardStyled>
  );
};

export default ListingCard;
