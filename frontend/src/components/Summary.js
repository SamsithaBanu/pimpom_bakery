import React, { useEffect, useState } from "react";
import displayINRCurrency from "../helpers/displayCurrency";
import visa from "../assests/payments/visa (1).png";
import card from "../assests/payments/card (1).png";
import cod from "../assests/payments/cash-on-delivery (1).png";
import gpay from "../assests/payments/google-pay (1).png";
import paytm from "../assests/payments/paytm.png";
import { SummaryStyled } from "./SummaryStyled";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import SummaryApi from "../common";
import { loadStripe } from "@stripe/stripe-js";

export const Summary = ({ totalPrice, totalWholePrice, difference, data }) => {
  const user = useSelector((state) => state?.user?.user);
  const [addressArray, setAddressArray] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setAddressArray(user?.addresses[0]);
    }
  }, [user, addressArray]);

  return (
    <SummaryStyled>
      <div className="summayWrapper">
        <div className="summayList">
          <div className="heading">Actual Value</div>
          <div className="value">{displayINRCurrency(totalWholePrice)}</div>
        </div>
        <div className="summayList">
          <div className="heading">Saved Amount</div>
          <div className="value">{displayINRCurrency(difference)}</div>
        </div>
        <div className="summayList">
          <div className="heading">Order Value</div>
          <div className="value">{displayINRCurrency(totalPrice)}</div>
        </div>
        <div className="summayList">
          <div className="heading">Service Fee</div>
          <div className="value">{displayINRCurrency(10)}</div>
        </div>
        <div className="summayList order">
          <div className="heading">Order Total</div>
          <div className="total">
            <div className="value">{displayINRCurrency(totalPrice + 10)}</div>
            <div className="vat">(All prices inclue VAT)</div>
          </div>
        </div>
        <Link
          className="px-3 py-2 uploadProductBtn"
          to={'/checkout'}
          // onClick={() => navigationToPayment()}
        >
          Checkout
        </Link>
        <div className="availablePaymentsWrapper">
          <div className="header">Available Payment options</div>
          <div className="payments">
            <img src={visa} alt="visa" />
            <img src={card} alt="card" />
            <img src={cod} alt="cash-on-delivery" />
            <img src={gpay} alt="google-pay" />
            <img src={paytm} alt="paytm" />
          </div>
        </div>
      </div>
    </SummaryStyled>
  );
};
