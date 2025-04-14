import styled from "styled-components";

export const VerticalRecipesCardStyled = styled.div`
  .cardWrapper {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    // align-items: center;
    width: 330px;
    height: 150px;
    // border: 2px solid #9f2b68;
    padding: 6px 10px 6px 0px;
    // border-radius: 8px;
    border-radius: 50px 10px 10px 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Soft shadow for depth */

    /* Background and colors */
    background-color: #fff; /* White background */
    border: 1px solid #f5f7f8; /* Light gray border */
    .imageWrapper {
      display: flex;
      width: 150px;
      height: 140px;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
          border-radius: 40px 10px 10px 10px;


      img {
        border-radius: 40px 10px 10px 10px;
        width: 150px;
        height: 140px;
      }
    }
    .detailsWrapper {
      display: flex;
      flex-direction: column;
      margin-top: 20px;
      margin-left: 10px;
      .top {
        display: flex;
        flex-direction: row;
        .category {
          font-size: 15px;
          color: grey;
        }
      }
      .name {
        font-size: 17px;
        font-weight: 500;
        text-align: left;
        width: 150px;
        //height: 50px;
      }
     .dietary{
     font-size: 18px;
     color: green;
     }
      .details {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 15px;
        margin-top: 20px;
        .items {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          //justify-content: flex-start;
        }
      }
        .viewRecipe{
        color: #D95F59;
        margin-top: 10px;
        font-size: 15px;
        display: flex;
        flex-direction: row;
        gap: 20px;
        align-items: center;

        .wish{
        width: 25px;
        height: 25px;
        }
      }
      .editProduct {
        display: flex;
        flex-direction: row;
        height: 45px;
        font-size: 18px;
        padding: 5px;
        width: 180px;
        justify-content: space-between;
        background: #D95F59;
        color: white;
        margin-bottom: 10px;
        border-radius: 8px;
        margin-top: 20px;
        align-items: center;
      }
    }
  }
`;
