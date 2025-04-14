import styled from "styled-components";

export const SummaryStyled = styled.div`
  .summayWrapper {
    display: flex;
    flex-direction: column;
    .summayList {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin: 15px 10px;
      .heading {
        font-size: 20px;
        font-weight: 400;
      }
      .value {
        font-size: 20px;
        font-weight: 600;
      }
    }
    .order {
      background: #f5f7f8;
      border-radius: 3px;
      .total {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: end;
      }
    }
    .uploadProductBtn {
      margin-top: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
    }

    .uploadProductBtn {
      background-color: #9f2b68;
      color: #fff;
      border: none;
      border-radius: 5px;
      padding: 10px 15px;
      cursor: pointer;
      font-size: 20px;
      margin-right: 10px;
      justify-content: center;

      &:hover {
        background-color: #facbea;
        color: black;
      }
    }
    .availablePaymentsWrapper {
      .header {
        font-size: 20px;
        font-weight: 600;
        margin-top: 15px;
      }
      .payments {
        margin-top: 10px;
        display: flex;
        flex-direction: row;
        gap: 20px;
      }
    }
  }
`;
