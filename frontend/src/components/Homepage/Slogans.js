import React from "react";
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
    <>
      {isFromRecipe ? (
        <div
          className="sloganContainer"
          style={{
            margin: "30px 0px 40px 0px",
            padding: "0px 12%"
          }}
        >
          <div className="headerWrapper">
            <i>
              <div
                className="header"
                style={{ color: "#D95F59", marginBottom: "-10px" }}
              >
                Our Awesome Services
              </div>
            </i>
            <div className="subheader"></div>
          </div>
          <div
            className="mainWrapper"
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "60px",
              marginTop: "40px"
            }}
          >
            <div
              className="sloganItem"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <div className="image">
                <img
                  src={slo1}
                  alt="slogoan"
                  style={{
                    height: "50px",
                    width: "50px"
                  }}
                />
              </div>
              <div
                className="text"
                style={{
                  fontSize: "18px",
                  fontWeight: "500",
                  marginTop: "3px"
                }}
              >
                Quality Food
              </div>
              <div
                className="subText"
                style={{
                  textAlign: "center",
                  fontSize: "14px",
                  fontWeight: "400",
                  marginTop: "3px"
                }}
              >
                Savor the difference with every bite
              </div>
            </div>
            <div
              className="sloganItem"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <div className="image">
                <img
                  src={slo2}
                  alt="slogoan"
                  style={{
                    height: "50px",
                    width: "50px"
                  }}
                />
              </div>
              <div
                className="text"
                style={{
                  fontSize: "18px",
                  fontWeight: "500",
                  marginTop: "3px"
                }}
              >
                Cook like a Chef
              </div>
              <div
                className="subText"
                style={{
                  textAlign: "center",
                  fontSize: "14px",
                  fontWeight: "400",
                  marginTop: "3px"
                }}
              >
                Unleash your inner chef with every dish!
              </div>
            </div>
            <div
              className="sloganItem"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <div className="image">
                <img
                  src={slo3}
                  alt="slogoan"
                  style={{
                    height: "50px",
                    width: "50px"
                  }}
                />
              </div>
              <div
                className="text"
                style={{
                  fontSize: "18px",
                  fontWeight: "500",
                  marginTop: "3px"
                }}
              >
                Ingredients
              </div>
              <div
                className="subText"
                style={{
                  textAlign: "center",
                  fontSize: "14px",
                  fontWeight: "400",
                  marginTop: "3px"
                }}
              >
                Fresh, pure, and handpicked with care!
              </div>
            </div>
            <div
              className="sloganItem"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <div className="image">
                <img
                  src={slo4}
                  alt="slogoan"
                  style={{
                    height: "50px",
                    width: "50px"
                  }}
                />
              </div>
              <div
                className="text"
                style={{
                  fontSize: "18px",
                  fontWeight: "500",
                  marginTop: "3px"
                }}
              >
                Easy Recipes
              </div>
              <div
                className="subText"
                style={{
                  textAlign: "center",
                  fontSize: "14px",
                  fontWeight: "400",
                  marginTop: "3px"
                }}
              >
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
            <div
              className="sloganItem"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <div className="image">
                <img
                  src={cake}
                  alt="slogoan"
                  style={{
                    height: "50px",
                    width: "50px"
                  }}
                />
              </div>
              <div
                className="text"
                style={{
                  fontSize: "18px",
                  fontWeight: "500",
                  marginTop: "3px"
                }}
              >
                Delicious Treats
              </div>
              <div
                className="subText"
                style={{
                  textAlign: "center",
                  fontSize: "14px",
                  fontWeight: "400",
                  marginTop: "3px"
                }}
              >
                Indulge in a Variety of Sweet Delights
              </div>
            </div>
            <div
              className="sloganItem"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <div className="image">
                <img
                  src={cupcake}
                  alt="slogoan"
                  style={{
                    height: "50px",
                    width: "50px"
                  }}
                />
              </div>
              <div
                className="text"
                style={{
                  fontSize: "18px",
                  fontWeight: "500",
                  marginTop: "3px"
                }}
              >
                Custom Orders
              </div>
              <div
                className="subText"
                style={{
                  textAlign: "center",
                  fontSize: "14px",
                  fontWeight: "400",
                  marginTop: "3px"
                }}
              >
                Personalized Treats Tailored to Your Taste
              </div>
            </div>
            <div
              className="sloganItem"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <div className="image">
                <img
                  src={pancake1}
                  alt="slogoan"
                  style={{
                    height: "50px",
                    width: "50px"
                  }}
                />
              </div>
              <div
                className="text"
                style={{
                  fontSize: "18px",
                  fontWeight: "500",
                  marginTop: "3px"
                }}
              >
                Gourmet Cakes
              </div>
              <div
                className="subText"
                style={{
                  textAlign: "center",
                  fontSize: "14px",
                  fontWeight: "400",
                  marginTop: "3px"
                }}
              >
                Elegantly Designed for Every Occasion.
              </div>
            </div>
            <div
              className="sloganItem"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <div className="image">
                <img
                  src={cookie}
                  alt="slogoan"
                  style={{
                    height: "50px",
                    width: "50px"
                  }}
                />
              </div>
              <div
                className="text"
                style={{
                  fontSize: "18px",
                  fontWeight: "500",
                  marginTop: "3px"
                }}
              >
                Savor the Sweetness
              </div>
              <div
                className="subText"
                style={{
                  textAlign: "center",
                  fontSize: "14px",
                  fontWeight: "400",
                  marginTop: "3px"
                }}
              >
                Crafted with love, enjoyed with smiles.
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Slogans;
