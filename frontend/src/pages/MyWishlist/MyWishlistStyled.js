import styled from "styled-components";

export const MyWishlistStyled = styled.div`
  .wishlistContainer {
    padding: 30px 15%;
    .top {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      .header {
        font-size: 26px;
        color: #d95f59;
        font-weight: 600;
      }
      .total {
        font-size: 20px;
        color: #000;
        font-weight: 600;
      }
    }
      .noRecipes{
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 100px 50px;
        align-items: center;
        border: 1px solid #eeedeb;
        border-radius: 8px;
        margin-top: 20px;
      .name{
        font-size: 26px;
        font-weight: 600;
        text-align-center;
      }
    .cta {
      background: #d95f59;
      padding: 10px;
      text-align: center;
      margin-top: 10px;
      border-radius: 8px;
      cursor: pointer;
      width: 200px;
      color: black;
    }
 }
   .sortby {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  //margin-bottom: 20px;
  //margin-top:20px;
}

.sortByLabel {
  font-size: 14px;
  font-weight: bold;
  margin-right: 5px;
  color: #333;
}

.sortby select {
  padding: 8px;
  font-size: 14px;
  color: #333;
  outline: none;
}

    .wishlistRecipes {
      margin-top: 20px;
      padding: 0px 40px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      justify-content: center;
      .recipeContainer {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 30px;
        border: 1px solid #eeedeb;
        background: #fff;
        border-radius: 8px;
        .image {
          width: 130px;
          height: 130px;
          border-radius: 8px 0px 0px 8px;
          img {
            width: 100%;
            height: 100%;
            border-radius: 8px 0px 0px 8px;
          }
        }
        .detailsName {
          width: 250px;
          height: 100%;
          .name {
            font-size: 18px;
            font-weight: 500;
          }
          .category {
            font-size: 16px;
            font-weight: 500;
            color: #d95f59;
          }
        }
        .timeDetails {
          display: flex;
          flex-direction: row;
          gap: 10px;
          align-items: center;
          .time {
            font-size: 16px;
          }
        }
        .dietwrapper {
          display: flex;
          flex-direction: column;
          width: 230px;
          margin-left: 35px;
        }
        .removeCTA {
          color: #d95f59;
          cursor: pointer;
        }
      }
    }
      .relatedWrap{
      padding:20px 40px;
       .header {
        font-size: 20px;
        color: #d95f59;
        font-weight: 600;
      }
      
          .container {
      position: relative;
      .arrowWrapper {
        position: absolute;
        top: 50%;
        width: 100%; /* Make sure the wrapper spans the full width */
        transform: translateY(-50%);
        display: flex;
        z-index: 1;
        justify-content: space-between; /* Position arrows at the left and right edges */
        width: calc(
          100% + 30px
        ); /* Make sure the arrows go beyond the container if needed */
        margin-left: -15px; /* Adjust to position the arrows outside */

        .arrowBTN {
          position: absolute; /* Position buttons absolutely within the arrowWrapper */
          top: 50%; /* Vertically center the arrows */
          transform: translateY(-50%); /* Adjust for vertical centering */
          border: none;
          background-color: #d95f59;
          color: white;
          font-size: 1rem;
          padding: 5px;
          border-radius: 50%;
          cursor: pointer;
          transition: background-color 0.3s ease;

          &:hover {
            background-color: rgba(255, 255, 255, 0.5);
            color: black;
          }
        }

        .arrowLeft {
          left: 0; /* Fix the left arrow on the left side */
        }

        .arrowRight {
          right: 0; /* Fix the right arrow on the right side */
        }
      }

      .relatedWrapper {
        display: flex;
        flex-direction: row;
        gap: 15px;
        margin-top: 15px;
        flex-wrap: nowrap;
        overflow-x: hidden;
        scroll-behavior: smooth;
        .cardWrapper {
          .detailsWrapper {
            .top {
              box-shadow: none;
              background: white;
            }
          }
        }
      }
    }
      }
  }
`;
