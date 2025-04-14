import styled from "styled-components";

export const RecipeCardStyled = styled.div`
  .cardWrapper {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 520px;
    height: 240px;
    // border: 2px solid #9f2b68;
    padding: 6px 10px;
    // border-radius: 8px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Soft shadow for depth */

    /* Background and colors */
    background-color: #ffffff; /* White background */
    border: 1px solid #e0e0e0; /* Light gray border */
    .imageWrapper {
      display: flex;
      width: 220px;
      height: 220px;
      justify-content: center;
      align-items: center;
      border-radius: 8px;

      img {
        border-radius: 8px;
        width: 220px;
        height: 220px;
      }
    }
    .detailsWrapper {
      display: flex;
      flex-direction: column;
      margin-top: 8px;
      margin-left: 20px;

      .name {
        font-size: 20px;
        font-weight: 500;
        text-align: left;
        //height: 50px;
      }
      .category {
        font-size: 17px;
        color: grey;
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
      .editProduct {
        display: flex;
        flex-direction: row;
        height: 45px;
        font-size: 18px;
        padding: 5px;
        width: 180px;
        justify-content: space-between;
        background: #9f2b68;
        color: white;
        margin-bottom: 10px;
        border-radius: 8px;
        margin-top: 20px;
        align-items: center;
      }
    }
  }
`;
