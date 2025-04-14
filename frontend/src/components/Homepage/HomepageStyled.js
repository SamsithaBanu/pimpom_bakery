import styled from "styled-components";

export const HomepageStyled = styled.div`
  .categoryWrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 30px;
    padding: 0 10%;
    position: absolute;
    bottom: 0; /* Position it at the bottom of the container */
    width: 100%; /* Ensure it stretches the full width */
    top: 550px;
  }

  .categoryItem {
    width: 140px;
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 4px;
    padding: 8px 0px;
  }

  .categoryImage img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  .categoryName {
    font-size: 15px;
    font-weight: 600;
    margin-top: 8px;
  }
  // .categoryWrapper {
  //   display: flex;
  //   flex-direction: row;
  //   justify-content: center;
  //   align-items: center;
  //   gap: 30px;
  //   padding: 0 10%;
  //   position: absolute;
  //   // top: 550px;

  //   .categoryItem {
  //     width: 140px;
  //     height: 120px;
  //     display: flex;
  //     flex-direction: column;
  //     justify-content: center;
  //     align-items: center;
  //     background: white;
  //     border-radius: 4px;
  //     padding: 8px 0px;

  //     .categoryImage {
  //       img {
  //         width: 80px;
  //         height: 80px;
  //         border-radius: 50%;
  //       }
  //     }
  //     .categoryName {
  //       font-size: 15px;
  //       font-weight: 600;
  //       margin-top: 8px;
  //     }
  //   }
  // }
  .categoryListWrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 30px;
    padding-top: 40px;

    .category {
      width: 100px;
      height: 100px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .categoryImg {
        img {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          border: 3px solid #9f2b68;
        }
      }
      .categoryname {
        font-size: 17px;
        font-weight: 400;
      }
    }
  }
  .container {
    margin: 20px auto;
    padding: 0 20px;
    width: 100%;
    .containerInner {
      position: relative;
      .arrowWrapper {
        position: absolute;
        z-index: 10;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between; /* Center the arrows */
        .arrowBTN {
          border-radius: 50%;
          padding: 5px;
          background: white; /* Ensure the arrows are visible */
        }
        .arrowBTN:nth-child(2) {
          margin-left: 1210px;
        }
      }
      .bannerContainer {
        overflow: hidden;
        display: flex; /* Align images horizontally */
        border-radius: 10px;
        .bannerImage {
          min-width: 100%;
          transition: transform 0.5s ease-in-out;
        }
      }
    }
  }
  .sloganContainer {
    margin: 30px 0px 40px 0px;
    padding: 0px 12%;
    .headerWrapper {
      .header {
        font-size: 20px;
        font-weight: 500;
        text-align: center;
      }
    }
    .mainWrapper {
      display: flex;
      flex-direction: row;
      gap: 60px;
      margin-top: 40px;
      .sloganItem {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .image {
          img {
            height: 50px;
            width: 50px;
          }
        }
        .text {
          font-size: 18px;
          font-weight: 500;
          margin-top: 3px;
        }
        .subText {
          font-size: 14px;
          font-weight: 400;
          margin-top: 3px;
        }
      }
    }
  }
  .categoryWiseProductWrapper {
    background-color: #f5f7f8;
    padding: 30px 13%;
    display: flex;
    flex-direction: row;
    .leftWrapper {
      width: 25%;
      // border: 1px solid black;
      border-radius: 1px;
      background: #eeedeb;
      box-shadow: 0 2px 4px #eeedeb;
      .header {
        padding: 15px 15px 0px 15px;
        font-size: 20px;
        font-weight: 500;
        text-align: left;
      }
      .subheader {
        padding: 5px 15px 0px 15px;
        font-size: 14px;
        text-align: left;
      }
      .cta {
        margin: 15px 15px 15px 15px;
        background-color: #9f2b68;
        color: #fff;
        border: none;
        width: 40%;
        font-size: 15px;
        padding: 8px 15px;
        cursor: pointer;
        font-size: 1rem;
        margin-right: 10px;
      }
      .image {
        img {
          width: 310px;
          height: 180px;
          object: fit;
        }
      }
    }
    .rightWrapper {
      width: 75%;
      padding: 55px 20px;
      display: flex;
      flex-direction: row;

      .cardWrapper {
        flex: 0 0 auto;
        width: 180px;
        height: 230px;
        margin-right: 30px;
        border-radius: 1px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        background-color: #f5f7f8;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 30px 4px 10px 4px;
        padding-bottom: 15px;

        .cardImage {
          width: 100%;
          height: 150px;
          overflow: hidden;
          border-radius: 40px 4px 10px 4px;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

        .cardDetails {
          //padding: 10px;
          margin-top: 15px;

          .name {
            font-weight: 500;
            font-size: 16px;
            text-align: center;
          }

          .priceWrapper {
            .price {
              font-weight: 400;
              font-size: 14px;
              text-align: center;
              margin-top: 10px;
            }
          }
        }
      }
    }
  }
  .aboutUsWrapper {
    padding: 50px 10% 20px 20px;
    .header {
      display: flex;
      justify-content: space-between;
      .head {
       font-size: 22px;
        font-weight: 400;
        height: 60px;
        background: white;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Soft shadow for depth */
        border-radius: 8px;
        width: 65%;
        padding: 8px 15px;
      }
    }
    .imageWrapper {
      display: flex;
      flex-direction: row;
      .aboutDetails {
        padding: 25px;
        padding-top: 45px;
        padding-left: 25px;
        .header {
          font-size: 28px;
          font-weight: 500;
          margin-top: 15px;
          color: #9f2b68;
        }
        .description {
          margin-top: 10px;
          font-size: 17px;
          font-weight: 400;
          font-family: "Open Sans";
        }
        .addTocartCTA {
          margin-top: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 173px;
          border: 2px solid #9f2b68;

          .addToCart {
            background-color: #9f2b68;
            color: #fff;
            border: none;
            padding: 8px 15px;
            cursor: pointer;
            font-size: 1rem;
            margin-right: 10px;
            width: 140px;
          }
          .arrow {
            color: #9f2b68;
          }
        }
      }
    }
  }
.coffeeMenuWrapper {
  background-color: #fff;
  padding: 20px 14%;
}

.headerWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.headerWrapper .header {
  font-size: 28px;
  font-weight: 500;
  margin-top: 15px;
  color: #9f2b68;
}

.headerWrapper .subheader {
  font-size: 15px;
  text-align: center;
  width: 600px;
  font-weight: 400;
  margin-top: 10px;
}

.bodyWrapper {
  //padding: 20px 13%;
  padding: 25px 0px;
  display: flex;
  flex-wrap: wrap; /* Ensures wrapping if there are more than two cards */
  justify-content: space-between; /* Ensures space between cards */
}

.cardWrapper {
  width: calc(50% - 10px); /* Ensures two cards per row with some space between */
  display: flex;
  gap: 10px;
  row-gap: 10px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px; /* Space between rows */
      // border: 1px solid black;
      border-radius: 30px 0 0 30px;
      box-shadow: 0 2px 4px #B692C2;
        background-color: #fff;
}

.cardWrapper .image {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}

.cardWrapper .image img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.cardWrapper .details {
  margin-left: 20px; /* Ensure space between image and text */
}

.cardWrapper .details .name {
  font-weight: 500;
  font-size: 17px;
  text-align: left;
  color: #9f2b68;
}

.cardWrapper .details .description {
  margin-top: 5px;
  font-size: 17px;
  font-weight: 400;
  font-family: "Open Sans";
}

.cardWrapper .price {
  font-weight: 600;
  font-size: 18px;
  text-align: center;
  margin-top: 10px;
  color: #9f2b68;
  margin-left: 10px;
}
`;
