import React, { useState, useEffect } from "react";
import banner from "../../assests/banners/banner.png";
import banner2 from "../../assests/banners/banner2.png";
import banner3 from "../../assests/banners/banner3.png";
import offer from "../../assests/banners/offer.png";
import { HomepageStyled } from "./HomepageStyled";

import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";

const BannerList = () => {
  const desktopImages = [banner2, banner3, banner, offer];
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    if (desktopImages.length - 1 > currentImage) {
      setCurrentImage((preve) => preve + 1);
    }
  };

  const preveImage = () => {
    if (currentImage !== 0) {
      setCurrentImage((preve) => preve - 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (desktopImages.length - 1 > currentImage) {
        nextImage();
      } else {
        setCurrentImage(0);
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [currentImage, desktopImages.length]);

  return (
    <HomepageStyled>
      <div className="container">
        <div className="containerInner">
          <div className="hidden arrowWrapper">
            <div className="arrows">
              <button onClick={preveImage} className="arrowBTN">
                <FaAngleLeft />
              </button>
              <button onClick={nextImage} className="arrowBTN">
                <FaAngleRight />
              </button>
            </div>
          </div>

          {/**desktop and tablet version */}
          <div className="bannerContainer">
            {desktopImages.map((imageURl, index) => {
              return (
                <div
                  className="bannerImage"
                  key={imageURl}
                  style={{ transform: `translateX(-${currentImage * 100}%)` }}
                >
                  <img
                    src={imageURl}
                    className="w-full h-full"
                    alt={"banner"}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </HomepageStyled>
  );
};

export default BannerList;
