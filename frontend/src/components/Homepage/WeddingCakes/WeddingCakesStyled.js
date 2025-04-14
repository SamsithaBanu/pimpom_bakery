import styled from "styled-components";

export const WeddingCakesStyled = styled.div`
  background: #f5f7f8;
  margin-top: 0px;
  padding: 0px 12%;

  .weddingCakeWrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    .image1 {
      width: 30.5%;
      height: 430px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 30px 0px 0px 30px;
      }
    }
    .weddingCakeDetails {
      width: 40%;
      padding: 0 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      .title {
        font-size: 24px; /* Set the font size here */
        color: #9f2b68; /* Text color */
        font-weight: 500;
      }
      .description {
        font-size: 15px;
        margin-top: 0px;
        color: #201e43;
      }
      .addToCart {
        background-color: #9f2b68;
        color: #fff;
        border: none;
        padding: 8px 15px;
        border-radius: 15px;
        cursor: pointer;
        font-size: 15px;
        margin-right: 20px;
        margin-top: 10px;
        height: 45px;
        display: flex;
        justify-content: space-between;
        gap: 15px;

        &:hover {
          background-color: #9f2b68;
          color: black;
        }
      }
    }
    .image2 {
      width: 30.5%;
      height: 430px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 0px 30px 30px 0px;
      }
    }
  }

  // .weddingWrapper {
  //   display: flex;
  //   flex-direction: row;
  //   gap: 5px;
  //   margin-left: 50px;

  //   .imageWrapper {
  //     width: 35%;
  //     img {
  //       background: linear-gradient(to bottom, #f4c2c2 5%, #fff0f5);
  //       width: 600px;
  //       height: 500px;
  //       border-radius: 8px;
  //     }
  //   }
  //   .descWrapper {
  //     margin-top: 100px;
  //     margin-left: 20px;
  //     .title {
  //       font-size: 40px; /* Set the font size here */
  //       color: #72147e; /* Text color */
  //       text-shadow: 1px 1px 2px #72147e;
  //     }
  //     .description {
  //       font-size: 23px;
  //       width: 650px;
  //       margin-top: 10px;
  //       color: #201e43;
  //     }
  //     .addToCart {
  //       background-color: #72147e;
  //       color: #fff;
  //       border: none;
  //       border-radius: 5px;
  //       padding: 8px 15px;
  //       cursor: pointer;
  //       font-size: 20px;
  //       margin-right: 20px;
  //       margin-top: 20px;
  //       width: 310px;
  //       height: 45px;
  //       display: flex;
  //       justify-content: space-between;

  //       &:hover {
  //         background-color: #9f2b68;
  //         color: black;
  //       }
  //     }
  //   }
  // }
`;
