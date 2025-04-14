import styled from "styled-components";

export const HorizondalProductsStyled = styled.div`
  .containermax {
    width: 100%;
    padding: 20px 12%;
    background-color: white;
    margin-top: 70px;

    .header-wrapper {
      padding-top: 20px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .heading-main {
        display: flex;
        padding-left: 300px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .header {
          font-size: 24px;
          font-weight: 500;
          // margin-bottom: 20px;
          // margin-left: 122px;
          text-align: center;
        }
        .subheading {
          font-size: 14px;
          font-weight: 400;
          color: grey;
        }
      }
      .seeAll {
        font-size: 18px;
        color: #9f2b68;
        margin: 30px 50px 0px 30px;
      }
    }

    .container {
      margin: 20px auto;
      padding: 0 20px;
      position: relative;

      .arrowWrapper {
        position: absolute;
        z-index: 10;
        top: 50%;
        transform: translateY(-50%);
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 0 37px 0px 0px;

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
        flex-wrap: wrap;
        gap: 30px;
        justify-content: flex-start;
        align-items: center;
        // padding: 0 40px;

        .cardWrapper {
          flex: 0 0 auto;
          width: 180px;
          height: 230px;
          margin-right: 15px;
          margin-bottom: 15px;
          border-radius: 1px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          background-color: #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border-radius: 30px 4px 10px 4px;
          padding-bottom: 10px;
        }
      }
    }
  }
`;
