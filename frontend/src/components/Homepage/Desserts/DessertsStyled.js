import styled from "styled-components";

export const DessertsStyled = styled.div`
  background: #fff;
  padding: 0px 150px 30px 150px;

  .dessertWrapper {
    .titleWrapper {
      text-align: center;

      .title {
        font-size: 22px;
        margin-top: 10px;
        padding-top: 30px;
        color: #201e43;
      }

      .sub {
        font-size: 40px; /* Set the font size here */
        color: #72147e; /* Text color */
        text-shadow: 1px 1px 2px #72147e;
      }
    }

    .imageWrapper {
      display: flex;
      flex-wrap: wrap; /* Ensure the flex items wrap */
      margin-top: 20px;
      gap: 50px;

      > div {
        position: relative; /* Ensure the child elements are positioned relative to this parent */
        width: 550px; /* Set a fixed width for the container */
        height: 550px; /* Set a fixed height for the container */
      }

      img {
        width: 100%;
        height: 100%;
        border-radius: 8px;
      }

      .content {
        position: absolute; /* Position this content absolutely within its parent */
        top: 20px; /* Adjust as needed */
        left: 20px; /* Adjust as needed */
        padding-left: 20px;

        .name {
          font-size: 45px; /* Set the font size here */
          color: #000; /* Text color */
          text-shadow: 1px 1px 2px #000;
          font-weight: 600;
        }

        .price {
          font-size: 25px;
          color: #543310;
          font-weight: 600;
        }
      }

      .content2 {
        position: absolute; /* Position this content absolutely within its parent */
        bottom: 20px; /* Adjust as needed */
        left: 20px; /* Adjust as needed */

        .click {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          background: #9f2b68;
          display: flex; /* Centering the text inside */
          align-items: center;
          justify-content: center;

          .text {
            text-align: center;
            color: white;
            font-weight: 500;
            font-size: 17px;
            height: 130px;
            width: 130px;
            margin: 10px;
            border: 2px solid white;
            border-radius: 50%;
            display: flex; /* Centering the text inside */
            align-items: center;
            justify-content: center;
          }
        }
      }
    }
  }
`;
