import React from "react";
import { ContactStyled } from "./ContactStyled";
import pastry from "../assests/pastry.png";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

const Contact = () => {
  return (
    <ContactStyled>
      <div className="contactWrapper" id='contact'>
        <div className="leftWrapper">
          <div className="top">
            <img src={pastry} height={180} width={180} />
          </div>

          <div className="content">
            <div className="address">
              {/* <b className='head'>Address: </b> */}
              {/* <div className='value'>87, pallivasal street, Near Raven School, Annanji, Theni-625531</div> */}
            </div>
          </div>
          <div className="icons">
            <FaFacebook size={25} color={"#9f2b68"} />
            <FaTwitter size={25} color={"#9f2b68"} />
            <FaWhatsapp size={25} color={"#9f2b68"} />
            <MdOutlineMailOutline size={25} color={"#9f2b68"} />
          </div>
        </div>
        <div className="centerWrapper">
          <div className="header">Services</div>
          <div className="items">
            <div className="item">Category</div>
            <div className="item">Pastries</div>
            <div className="item">About</div>
            <div className="item">Pancakes</div>
          </div>
        </div>
        <div className="rightWrapper">
          <div className="header">Opening Time</div>
          <div className="opening">
            <div className="openItems">
              <div className="head">Mon to Fri</div>
              <div className="value">9am to 10pm</div>
            </div>
            <div className="openItems">
              <div className="head">Sat to Sun</div>
              <div className="value">10am to 9pm</div>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <div className="header">Address</div>
          <div className="address">
            87, pallivasal street, Near Raven School, Annanji, Theni-625531
          </div>
        </div>
      </div>
    </ContactStyled>
  );
};

export default Contact;
