import styled from "styled-components";

export const MyCartStyled = styled.div`
  .body {
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: flex-start;
    align-items: center;
    margin-top: 25px;
    margin: 30px 12%;
    padding: 30px;
    background: rgba(211, 211, 211, 0.2);
    border-radius: 15px;
    backdrop-filter: blur(10px); /* Frosted glass effect */
    -webkit-backdrop-filter: blur(10px); /* Frosted glass effect for Safari */
    border: 1px solid rgba(255, 255, 255, 0.2); /* Light transparent white border */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Soft shadow for depth */
    .title {
      font-size: 23px;
      font-weight: 600;
    }
    .uploadProductBtn {
      background-color: #9f2b68;
      color: #fff;
      border: none;
      border-radius: 5px;
      padding: 10px 15px;
      cursor: pointer;
      font-size: 16px;
      margin-right: 10px;
      justify-content: center;
      margin-top: 10px;

      &:hover {
        background-color: #facbea;
        color: black;
      }
    }
  }
  .mycartWrapper {
    padding: 30px 12%;
    display: flex;
    flex-direction: row;
    gap: 25px;
    .leftWrapper {
      width: 60%;
      border: 2px solid #9f2b68;
      border-radius: 8px;
      .banner {
        margin: 20px;
        img {
          height: 100%;
          width: 100%;
          border-radius: 8px;
        }
      }
      .otherProductsWrapper {
        margin: 15px 20px;
        border: 2px solid #9f2b68;
        border-radius: 8px;
      }
      .totalItemsWrapper {
        display: flex;
        flex-direction: column;
        .total {
          font-size: 18px;
          font-weight: 500;
          margin: 5px 20px;
          color: #9f2b68;
        }
        .addtoCartWrapper {
          margin: 15px 20px;
          border: 2px solid #9f2b68;
          border-radius: 8px;
          display: flex;
          flex-direction: column;

          .topwrapper {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding: 10px 15px;
            .left {
              .standard {
                font-size: 18px;
                font-weight: 500;
              }
              .delivery {
                color: grey;
                font-weight: 400;
                font-size: 16px;
              }
            }
            .right {
              font-size: 18px;
              font-weight: 400;
            }
          }
          .bottomWrapper {
            display: flex;
            flex-direction: column;
            .cartWrapper {
              // border: 1px solid #9f2b68;
              border-radius: 8px;
              margin: 15px;
              padding: 15px;
              background: #f5f7f5;
              .top {
                display: flex;
                flex-direction: row;
                gap: 25px;
                align-items: center;

                .image {
                  height: 100px;
                  width: 100px;
                  img {
                    height: 100px;
                    width: 100px;
                    border-radius: 8px;
                  }
                }
                .details {
                  width: 200px;
                  height: 100%;
                  .productname {
                    font-size: 18px;
                    font-weight: 500;
                  }
                  .priceWrapper {
                    font-size: 16px;
                    font-weight: 400;
                    display: flex;
                    flex-direction: row;
                    gap: 20px;
                    .actualPrice {
                      color: green;
                    }
                    .saves {
                      text-decoration: line-through;
                    }
                  }
                }
                .addedCTA {
                  width: 120px;
                  padding: 5px;
                  display: flex;
                  flex-direction: row;
                  border: 2px solid green;
                  border-radius: 8px;
                  font-size: 22px;
                  justify-content: space-around;
                  align-items: center;

                  .minus,
                  .add {
                    background: #f5f7f8;
                    height: 30px;
                    width: 30px;
                    border-radius: 10px;
                    text-align: center;
                    padding-bottom: 10px;
                    cursor: pointer;
                  }
                }
                .removeCTA {
                  color: red;
                  margin-left: 10px;
                  cursor: pointer;
                }
              }
            }
          }
        }
      }
    }
    .rightWrapper {
      width: 40%;
      border: 2px solid #9f2b68;
      border-radius: 8px;
      height: 100%;
      padding: 20px;
    }
  }
`;
