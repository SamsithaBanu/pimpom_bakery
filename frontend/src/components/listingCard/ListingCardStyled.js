import styled from "styled-components";

export const ListingCardStyled = styled.div`
  .cardWrapper {
    flex: 0 0 auto;
    width: 180px;
    height: 230px;
    margin-right: 35px;
    margin-bottom:30px;
    border-radius: 1px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 30px 4px 10px 4px;
    padding-bottom: 15px;

    .cardImage {
      width: 100%;
      height: 150px;
      overflow: hidden;
      border-radius: 40px 4px 10px 4px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .cardDetails {
      //padding: 10px;
      margin-top: 15px;

      .name {
        font-weight: 500;
        font-size: 16px;
        text-align: center;
      }

      .priceWrapper {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 150px;
      gap:20px;

      .addTocartCTA {
              margin-top: 10px;
              display: flex;
              align-items: center;
              justify-content: space-between;
              background-color: #9f2b68;
              border-radius: 30%;
              padding: 5px 8px;
              cursor: pointer;
              font-size: 1rem;
            }
        .price {
          font-weight: 400;
          font-size: 16px;
          text-align: center;
          margin-top: 10px;
        }
      }
    }
  }
`;
