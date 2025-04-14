import styled from "styled-components";

export const OrderPageStyled = styled.div`
  .successWrapper {
    display: flex;
    flex-direction: column;
    align-item: center;
    justify-content: center;
    margin: 70px 30%;
    text-align: center;
    border-radius: 8px;
    background: #eddfe0;
    padding: 25px;
    .image {
      width: 64px;
      height: 64px;
      align-items: center;
      text-align: center;
      margin: 10px 0px 10px 250px;
      img {
        width: 64px;
        height: 64px;
      }
    }
    .text {
      font-size: 20px;
      font-weight: 500;
      color: #9f2b68;
    }
    .subText {
      font-size: 15px;
      font-weight: 400;
      margin-top: 10px;
    }
    .orderCTA {
      border-radius: 8px;
      border: 1px solid #9f2b68;
      padding: 10px 12px;
      width: 250px;
      background: #9f2b68;
      margin: 20px 150px 10px 150px;
      color: white;
      cursor: pointer;
    }
  }
`;
