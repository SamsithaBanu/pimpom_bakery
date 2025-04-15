import React from "react";
// import { ContactStyled } from "./ContactStyled";
import pastry from "../assests/pastry.png";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

const Contact = () => {
  return (
    <>
      <div
        className="contactWrapper"
        id="contact"
        style={{
          backgroundColor: "#f5f7f8",
          padding: "10px 13%",
          display: "flex",
          flexDirection: "row",
          gap: "20px"
        }}
      >
        <div
          className="leftWrapper"
          style={{
            width: "30%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <div
            className="top"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <img src={pastry} height={180} width={180} />
          </div>

          <div className="content">
            <div
              className="address"
              style={{
                display: "flex",
                flexDirection: "row",
                fontSize: "15px",
                paddingTop: "10px"
              }}
            >
              {/* <b className='head'>Address: </b> */}
              {/* <div className='value'>87, pallivasal street, Near Raven School, Annanji, Theni-625531</div> */}
            </div>
          </div>
          <div
            className="icons"
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: "20px",
              gap: "25px"
            }}
          >
            <FaFacebook size={25} color={"#9f2b68"} />
            <FaTwitter size={25} color={"#9f2b68"} />
            <FaWhatsapp size={25} color={"#9f2b68"} />
            <MdOutlineMailOutline size={25} color={"#9f2b68"} />
          </div>
        </div>
        <div
          className="centerWrapper"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            marginTop: "20px",
            width: "23%"
          }}
        >
          <div
            className="header"
            style={{
              fontSize: "22px",
              fontWeight: "500",
              textAlign: "left",
              color: "#9f2b68"
            }}
          >
            Services
          </div>
          <div
            className="items"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              marginTop: "15px"
            }}
          >
            <div
              className="item"
              style={{
                fontSize: "15px"
              }}
            >
              Category
            </div>
            <div
              className="item"
              style={{
                fontSize: "15px"
              }}
            >
              Pastries
            </div>
            <div
              className="item"
              style={{
                fontSize: "15px"
              }}
            >
              About
            </div>
            <div
              className="item"
              style={{
                fontSize: "15px"
              }}
            >
              Pancakes
            </div>
          </div>
        </div>
        <div
          className="rightWrapper"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            marginTop: "20px",
            width: "23%"
          }}
        >
          <div
            className="header"
            style={{
              fontSize: "22px",
              fontWeight: "500",
              textAlign: "left",
              color: "#9f2b68"
            }}
          >
            Opening Time
          </div>
          <div
            className="opening"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              marginTop: "15px"
            }}
          >
            <div className="openItems" style={{ fontSize: "15px" }}>
              <div
                className="head"
                style={{
                  fontWeight: "500",
                  color: "#9f2b68"
                }}
              >
                Mon to Fri
              </div>
              <div className="value">9am to 10pm</div>
            </div>
            <div className="openItems" style={{ fontSize: "15px" }}>
              <div
                className="head"
                style={{
                  fontWeight: "500",
                  color: "#9f2b68"
                }}
              >
                Sat to Sun
              </div>
              <div className="value">10am to 9pm</div>
            </div>
          </div>
        </div>
        <div
          className="wrapper"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            marginTop: "20px",
            width: "25%"
          }}
        >
          <div
            className="header"
            style={{
              fontSize: "22px",
              fontWeight: "500",
              textAlign: "left",
              color: "#9f2b68"
            }}
          >
            Address
          </div>
          <div
            className="address"
            style={{
              marginTop: "15px",
              fontSize: "15px",
              lineHeight: "28px",
              width: "200px"
            }}
          >
            87, pallivasal street, Near Raven School, Annanji, Theni-625531
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
