import styled from "styled-components";

export const VerticalRecipesStyled = styled.div`
  .containermax {
    width: 100%;
    padding: 0px 14% 20px 14%;
    background-color: #f5f7f8;
    margin-top: 70px;

    .header-wrapper {
      padding-top: 20px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .heading-main {
        display: flex;
        padding-left: 30px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .header {
          font-size: 26px;
          font-weight: 500;
          // margin-bottom: 20px;
          // margin-left: 122px;
          text-align: center;
          color: #d95f59;
        }
        .subheading {
          font-size: 16px;
          font-weight: 400;
          color: grey;
        }
      }
      .seeAll {
        font-size: 18px;
        color: #d95f59;
        margin: 30px 55px 20px 30px;
      }
    }
    .container {
      margin: 0px auto;
      padding: 0 20px;
      position: relative;
      display: flex;
      flex-direction: row;
      //margin-top: 20px;
      .cardContainer {
        display: flex;
        //margin-top: 20px;
        gap: 25px;
        justify-content: flex-start;
        flex-wrap: wrap;
      }
    }
  }
`;
