import styled from "styled-components";

export const PancakesListStyled = styled.div`
  .pancakesWrapper {
    background-color: #f5f7f8;
    padding: 30px 16%;
    display: flex;
    flex-direction: column;
    .topWrapper {
      display: flex;
      flex-direction: column;
      align-items: center;

      .header {
        font-size: 25px;
        font-weight: 500;
        text-align: center;
      }
      .subHeader {
        padding: 5px 15px 0px 15px;
        font-size: 14px;
        text-align: center;
        width: 800px;
        line-height: 22px;
      }
    }
    .bottomWrapper {
      display: flex;
      flex-direction: row;
      padding-top: 20px;
      gap: 20px;
      .leftWrapper {
        width: 25%;
        display: flex;
        flex-direction: column;
        gap: 25px;
        .cardWrapper {
          flex: 0 0 auto;
        //   width: 180px;
        //   height: 220px;
          margin-right: 30px;
        //   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        //   background-color: #f5f7f8;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          border-radius: 30px 4px 10px 4px;
          padding: 10px 15px;
          background: #eeedeb;
      box-shadow: 0 2px 4px #eeedeb;
          .cardImage {
            width: 130px;
            height: 130px;
            overflow: hidden;
            border-radius: 50%;

            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }

          .cardDetails {
            // padding: 0px 10px 0px 10px;
            margin-top: 15px;

            .name {
              font-weight: 500;
              font-size: 18px;
              text-align: right;
            }
            .category {
              font-weight: 400;
              font-size: 15px;
              text-align: right;
            }
            .cta {
              font-weight: 400;
              font-size: 16px;
              text-align: right;
              color: #9f2b68;
            }
          }
        }
      }
      .centerWrapper {
        width: 50%;
        padding:25px;
        height: 500px;
        img {
          height: 100%;
          width: 100%;
        }
      }
        .rightWrapper {
        width: 25%;
        display: flex;
        flex-direction: column;
        gap: 10px;
         .cardWrapper {
          flex: 0 0 auto;
        //   width: 180px;
        //   height: 220px;
          margin-right: 30px;
        //   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        //   background-color: #f5f7f8;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          border-radius: 30px 4px 10px 4px;
          padding: 10px 15px;
          background: #eeedeb;
      box-shadow: 0 2px 4px #eeedeb;
          .cardImage {
            width: 130px;
            height: 130px;
            overflow: hidden;
            border-radius: 50%;

            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }

          .cardDetails {
            // padding: 0px 10px 0px 10px;
            margin-top: 15px;

            .name {
              font-weight: 500;
              font-size: 18px;
              text-align: right;
            }
            .category {
              font-weight: 400;
              font-size: 15px;
              text-align: right;
            }
            .cta {
              font-weight: 400;
              font-size: 16px;
              text-align: right;
              color: #9f2b68;
            }
          }
        }
      }
      
    }
  }
`;
