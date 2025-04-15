import React, { useState } from "react";
// import { NewsLetterStyled } from "./NewLetterStyled";
import newsletter from "../../assests/newsl.jpg";

const Newsletter = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div
        className="newLetterWrapper"
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "white",
          padding: "30px 13%",
          paddingBottom: "15px"
        }}
      >
        <div
          className="leftWrapper"
          style={{
            height: "300px",
            width: "470px",
            borderRadius: "8px"
          }}
        >
          <img
            src={newsletter}
            alt="newletterimage"
            style={{
              height: "280px",
              minWidth: "470px",
              borderRadius: "8px"
            }}
          />
        </div>
        <div
          className="rightWrapper"
          style={{
            display: "flex",
            flexDirection: "column",
            paddingLeft: "20px",
            alignItems: "flex-start"
          }}
        >
          <i>
            <div
              className="header"
              style={{
                padding: "15px 15px 0px 15px",
                fontSize: "27px",
                fontWeight: "500",
                textAlign: "left",
                color: "#9f2b68"
              }}
            >
              {" "}
              Subscribe To Our Newsletter!
            </div>
          </i>
          <div
            className="subheader"
            style={{
              padding: "5px 15px 25px 15px",
              fontSize: "17px",
              textAlign: "left",
              lineHeight: "28px",
              width: "550px",
              fontWeight: "400",
              fontFamily: "Open Sans"
            }}
          >
            {" "}
            Subscribe to the newsletter and become part of the Sam Bakery group
            that receives exclusive discount codes, offers and special surprises
            before everyone else. Stay updated.Share simple recipes or baking
            tips with your readers. This helps to engage those who enjoy baking
            at home.
          </div>
          <div
            className="search-bar"
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#9f2b68",
              borderRadius: "0px",
              marginLeft: "15px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              color: "#fff",
              height: "45px"
            }}
          >
            <input
              type="text"
              placeholder="Enter Email address"
              style={{
                border: "none",
                outline: "none",
                width: "200px",
                borderRadius: "20px",
                fontFamily: "Roboto, sans-serif",
                height: "45px",
                background: "#9f2b68",
                color: "#fff",
                padding: "10px",
                marginRight: "10px"
              }}
            />
            <button
              className="button"
              style={{
                padding: "0px 15px",
                border: "1px solid #9f2b68",
                color: isHovered ? "#fff" : "#9f2b68",
                backgroundColor: isHovered ? "#9f2b68" : "#fff",
                borderRadius: "0",
                cursor: "pointer",
                marginLeft: "10px",
                transition: "background-color 0.3s, color 0.3s",
                height: "45px"
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
