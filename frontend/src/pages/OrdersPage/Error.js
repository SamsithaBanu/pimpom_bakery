import React from "react";
import { OrderPageStyled } from "./OrderPageStyled";
import failure from "../../assests/cancel.png";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <OrderPageStyled>
      <div className="successWrapper">
        <img className="image" src={failure} />
        <div className="text">Ohh no!!! Payment Failure.</div>
        <div className="subText">
          There is some payment related issues, can you please try again
        </div>
        <Link className="orderCTA" to={"/cart"}>
          Go to Cart
        </Link>
      </div>
    </OrderPageStyled>
  );
};

export default Error;
