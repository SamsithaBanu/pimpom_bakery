import styled from "styled-components";

export const VerticalProductStyled = styled.div`
.containermax{
  // background: linear-gradient(to bottom, #F4C2C2 5%, #FFF0F5);
  .header {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 10px;
    margin-left: 122px;
    padding-top:10px;
  }

  .container {
    margin: 0px auto 20px auto;
    padding: 0 20px;
    position: relative;
    
    .arrowWrapper {
      position: absolute;
      z-index: 10;
      top: 50%;
      transform: translateY(-50%);
      width: 100%;
      display: flex;
      justify-content: space-between; /* Ensures the arrows are at the edges */
      padding: 0 37px 0px 0px; /* Adds padding to prevent arrows from touching edges */

      .arrowBTN {
        border: none;
        background-color: rgba(255, 255, 255, 0.8);
        color: #555;
        font-size: 1.5rem;
        padding: 5px;
        border-radius: 50%;
        cursor: pointer;
        transition: background-color 0.3s ease;

        &:hover {
          background-color: rgba(255, 255, 255, 0.5);
        }
      }

      .arrowLeft {
        order: 1;
      }

      .arrowRight {
        order: 3;
      }
    }

    .cardContainer {
      display: flex;
      flex-wrap: nowrap;
      overflow-x: hidden;
      padding-bottom: 10px;

      .cardWrapper {
        flex: 0 0 auto;
        width: 350px;
        margin-right: 20px;
        border: 1px solid #ddd;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        background-color: rgba(255, 255, 255, 0.5);
        display: flex;
        flex-direction: row;

        .cardImage {
          width: 200px;
          height: 200px;
          overflow: hidden;
          border-top-left-radius: 8px;
          border-bottom-left-radius: 8px;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

        .cardDetails {
          padding: 10px;
          margin-top: 12px;

          .name {
            font-weight: 550;
            font-size: 1rem;
            margin-bottom: 5px;
            height: 55px;
          }

          .category {
            font-size: 0.9rem;
            color: #666;
            margin-bottom: 5px;
          }

          .priceWrapper {
            display: flex;
            align-items: center;
            margin-bottom: 5px;
            justify-content: space-between;

            .price {
              font-weight: 550;
              font-size: 1rem;
            }

            .wholePrice {
              font-size: 0.9rem;
              color: #666;
              text-decoration: line-through;
              margin-left: 10px;
              margin-top: 2px;
            }
          }

          .addTocartCTA {
            margin-top: 10px;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .addToCart {
            background-color: #72147E;
            color: #fff;
            border: none;
            border-radius: 5px;
            padding: 8px 15px;
            cursor: pointer;
            font-size: 1rem;
            margin-right: 10px;
            width: 140px;

            &:hover {
              background-color: #facbea;
              color: black;
            }
          }
        }
      }
    }
  }
}
`;