import React, { useContext } from "react";
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
    <>
      <Link className="cardWrapper" to={"/product/" + item?._id} style={{
        flex: '0 0 auto',
        width: '180px',
        height: '230px',
        marginRight: '35px',
        marginBottom:'30px',
        borderRadius: '1px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '30px 4px 10px 4px',
        paddingBottom: '15px'
      }}>
        <div className="cardImage" style={{
          width: '100%',
          height: '150px',
          overflow: 'hidden',
          borderRadius: '40px 4px 10px 4px',
        }}>
          <img src={item?.productImage[0]} alt="productImage" style={{
            width:' 100%',
            height:'100%',
            objectFit: 'cover'
          }} />
        </div>
        <div className="cardDetails" style={{marginTop:'15px'}}>
          <i>
            <div className="name" style={{
              fontWeight: '500',
              fontSize: '16px',
              textAlign: 'center'
            }}>
              {item?.productName.substring(0, 20)}
              {getSpliing(item?.productName)}
            </div>
          </i>
          <div className="priceWrapper" style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: '150px',
            gap:'20px',
          }}>
            <div className="price" style={{
              fontWeight: '400',
              fontSize: '16px',
              textAlign: 'center',
              marginTop: '10px'
            }}>
              {displayINRCurrency(item?.sellingPrice)}
            </div>
            <div className="addTocartCTA addToCart" style={{
              marginTop: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#9f2b68',
              borderRadius:'30%',
              padding: '5px 8px',
              cursor: 'pointer',
              fontSize: '1rem'
            }} onClick={(e)=>handleAddToCart(e,item?._id)}>
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
    </>
  );
};

export default ListingCard;
