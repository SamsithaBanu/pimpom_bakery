import React from "react";
import { NewsLetterStyled } from "./NewLetterStyled";
import newsletter from "../../assests/newsl.jpg";

const Newsletter = () => {
  return (
    <NewsLetterStyled>
      <div className="newLetterWrapper">
        <div className="leftWrapper">
          <img src={newsletter} alt="newletter image" />
        </div>
        <div className="rightWrapper">
          <i>
            <div className="header"> Subscribe To Our Newsletter!</div>
          </i>
          <div className="subheader">
            {" "}
            Subscribe to the newsletter and become part of the Sam Bakery group
            that receives exclusive discount codes, offers and special surprises
            before everyone else. Stay updated.Share simple recipes or baking tips with your readers. This helps to engage those who enjoy baking at home.
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Enter Email address" />
            <button className="button">Subscribe</button>
          </div>
        </div>
      </div>
    </NewsLetterStyled>
  );
};

export default Newsletter;
