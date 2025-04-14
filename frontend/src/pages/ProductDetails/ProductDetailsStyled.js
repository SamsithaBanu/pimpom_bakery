import styled from "styled-components";

export const ProductDetailsStyled = styled.div`
  .productDetailsWrapper {
    display: flex;
    flex-direction: row;
    padding: 30px 10%;
    .imgWrapper {
      .productImage {
        height: 450px;
        width: 450px !important;
        img {
          height: 450px;
          width: 450px;
          border-radius: 8px;
        }
      }
      .imageWrapper {
        display: flex;
        flex-direction: row;
        margin-top: 20px;
        gap: 21px;
        .images {
          width: 134px;
          height: 134px;
          border-radius: 8px;
          cursor: pointer;
          img {
            width: 134px;
            height: 134px;
            border-radius: 8px;
            cursor: pointer;
          }
        }
      }
    }
    .productDescription {
      width: 50%;
      display: flex;
      flex-direction: column;
      padding-left: 25px;
      margin-top: 20px;
      .category {
        font-size: 18px;
        font-weight: 500;
        color: #9f2b68;
      }
      .name {
        font-size: 24px;
        font-weight: 600;
      }
      .priceWrapper {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        margin-top: 5px;
        gap: 15px;
        .price {
          font-size: 18px;
          font-weight: 500;
        }
        .saves {
          font-size: 18px;
          font-weight: 500;
          color: green;
        }
      }
      .star {
        //margin: 0 10px 30px 20px;
        display: flex;
        margin-top: 10px;
        //justify-content: center;
      }
      .description {
        font-size: 17px;
        font-weight: 400;
        color: #939185;
        margin-top: 15px;
        width: 650px;
      }

      .addToCart {
        background-color: #9f2b68;
        color: #fff;
        border: none;
        border-radius: 0px;
        padding: 8px 15px;
        cursor: pointer;
        font-size: 18px;
        margin-right: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 200px;
        height: 50px;
        margin-top: 25px;

        &:hover {
          background-color: #facbea;
          color: black;
        }
      }
      .shareWrapper {
        display: flex;
        flex-direction: column;
        margin-top: 40px;

        .title {
          font-size: 19px;
          font-weight: 500;
        }
        .share {
          display: flex;
          flex-direction: row;
          margin-top: 10px;
          width: 384px;
          border: 1px solid #939185;
          .shares {
            border-right: 1px solid #939185;
            padding: 12px 35px;
            cursor: pointer;
          }
        }
      }
    }
  }
  .relativeProducts {
    padding: 10px 8% 30px 8%;
    .heading {
      padding-top: 20px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .header {
        font-size: 24px;
        font-weight: 500;
        // margin-bottom: 20px;
        // margin-left: 122px;
        text-align: center;
      }

      .seeAll {
        font-size: 18px;
        color: #9f2b68;
      }
    }
    .productList {
      display: flex;
      flex-direction: row;
      margin-top: 20px;
      gap: 10px;

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
  .reviewWrapper {
    display: flex;
    flex-direction: row;
    padding: 10px 8% 30px 8%;
  }
`;
