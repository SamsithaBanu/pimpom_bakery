import React from "react";
import { HomepageStyled } from "./HomepageStyled";
import cake from "../../assests/slogans/cake (1).png";
import cupcake from "../../assests/slogans/cupcake (1).png";
import pancake1 from "../../assests/slogans/pancake (1).png";
import cookie from "../../assests/slogans/cookie.png";
import slo1 from "../../assests/slogans/slo1 (1).png";
import slo2 from "../../assests/slogans/slo2.png";
import slo3 from "../../assests/slogans/slo3.png";
import slo4 from "../../assests/slogans/slo4.png";

const Slogans = ({ isFromRecipe = false }) => {
  return (
    <HomepageStyled>
      {isFromRecipe ? (
        <div className="sloganContainer">
          <div className="headerWrapper">
            <i>
              <div className="header" style={{ color: "#D95F59", marginBottom:'-10px' }}>
                Our Awesome Services
              </div>
            </i>
            <div className="subheader"></div>
          </div>
          <div className="mainWrapper">
            <div className="sloganItem">
              <div className="image">
                <img src={slo1} />
              </div>
              <div className="text">Quality Food</div>
              <div className="subText" style={{textAlign: 'center'}}>
                Savor the difference with every bite
              </div>
            </div>
            <div className="sloganItem">
              <div className="image">
                <img src={slo2} />
              </div>
              <div className="text">Cook like a Chef</div>
              <div className="subText" style={{textAlign: 'center'}}>
                Unleash your inner chef with every dish!
              </div>
            </div>
            <div className="sloganItem">
              <div className="image">
                <img src={slo3} />
              </div>
              <div className="text">Ingredients</div>
              <div className="subText" style={{textAlign: 'center'}}>
                Fresh, pure, and handpicked with care!
              </div>
            </div>
            <div className="sloganItem">
              <div className="image">
                <img src={slo4} />
              </div>
              <div className="text">Easy Recipes</div>
              <div className="subText" style={{textAlign: 'center'}}>
                Simple steps, spectacular results!
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="sloganContainer">
          <div className="headerWrapper">
            <i>
              <div className="header">
                Layers of Love, Crafted to Perfection, One Bite at a Time
              </div>
            </i>
            <div className="subheader"></div>
          </div>
          <div className="mainWrapper">
            <div className="sloganItem">
              <div className="image">
                <img src={cake} />
              </div>
              <div className="text">Delicious Treats</div>
              <div className="subText">
                Indulge in a Variety of Sweet Delights
              </div>
            </div>
            <div className="sloganItem">
              <div className="image">
                <img src={cupcake} />
              </div>
              <div className="text">Custom Orders</div>
              <div className="subText">
                Personalized Treats Tailored to Your Taste
              </div>
            </div>
            <div className="sloganItem">
              <div className="image">
                <img src={pancake1} />
              </div>
              <div className="text">Gourmet Cakes</div>
              <div className="subText">
                Elegantly Designed for Every Occasion.
              </div>
            </div>
            <div className="sloganItem">
              <div className="image">
                <img src={cookie} />
              </div>
              <div className="text">Savor the Sweetness</div>
              <div className="subText">
                Crafted with love, enjoyed with smiles.
              </div>
            </div>
          </div>
        </div>
      )}
    </HomepageStyled>
  );
};

export default Slogans;
