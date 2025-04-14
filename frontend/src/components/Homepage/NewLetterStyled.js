import styled from "styled-components";

export const NewsLetterStyled = styled.div`
  .newLetterWrapper {
    display: flex;
    flex-direction: row;
    background-color: white;
    padding: 30px 13%;
    padding-bottom:15px;
    .leftWrapper {
     height: 300px;
        width: 470px;
        border-radius: 8px;
      img {
        height: 280px;
        min-width: 470px;
        border-radius: 8px;
      }
    }
    .rightWrapper {
      display: flex;
      flex-direction: column;
      padding-left: 20px;
      align-items: flex-start;

      .header {
        padding: 15px 15px 0px 15px;
        font-size: 27px;
        font-weight: 500;
        text-align: left;
        color: #9f2b68;
      }
      .subheader {
        padding: 5px 15px 25px 15px;
        font-size: 17px;
        text-align: left;
        line-height:28px;
        width:550px;
        font-weight: 400;
        font-family: "Open Sans";
      }
      .search-bar {
        display: flex;
        align-items: center;
        background-color: #9f2b68; /* White background */
        border-radius: 0px;
        // padding: 5px 10px; /* Reduced padding */
        margin-left: 15px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        color: #fff;
        height:45px;
      }

      .search-bar input {
        border: none;
        outline: none;
        width: 200px; /* Width remains the same */
        border-radius: 20px;
        font-family: "Roboto", sans-serif;
        height: 45px; /* Set a fixed height */
        background:#9f2b68;
        color: #fff;
        padding: 10px;
        margin right: 10px;
      }

      .search-bar input::placeholder {
        color: #fff; /* White placeholder text */
        }

      .search-bar button {
        padding: 0px 15px; /* Reduced padding */
        border: 1px solid #9f2b68;
        color: #9f2b68;
        border-radius: 0;
        background-color: #ffffff; /* Violet */
        cursor: pointer;
        margin-left: 10px; /* Increased margin */
        transition: background-color 0.3s, color 0.3s;
        height: 45px; /* Set a fixed height */
      }

      .search-bar button:hover {
        background-color: #f5f7f8; /* Grey */
        color: #9f2b68; /* Violet */
      }
    }
  }
`;
