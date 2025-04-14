import styled from "styled-components";

export const ContactStyled = styled.div`
  .contactWrapper {
    background-color: #f5f7f8;
    padding: 10px 13%;
    display: flex;
    flex-direction: row;
    gap: 20px;
    .leftWrapper {
      width: 30%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .top {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        .header {
          padding: 0px 10px 5px 10px;
          font-size: 24px;
          font-weight: 500;
          text-align: left;
          color: #9f2b68;
        }
      }
      .content {
        .address {
          display: flex;
          flex-direction: row;
          font-size: 15px;
          padding-top: 10px;
          .head {
            color: #9f2b68;
          }
          .value {
          }
        }
      }
      .icons {
        display: flex;
        flex-direction: row;
        margin-top: 20px;
        gap: 25px;
      }
    }
    .centerWrapper {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-top: 20px;
      width: 23%;
      .header {
        font-size: 22px;
        font-weight: 500;
        text-align: left;
        color: #9f2b68;
      }
      .items {
        display: flex;
        flex-direction: column;
        gap: 12px;
        margin-top: 15px;
        .item {
          font-size: 15px;
        }
      }
    }
    .rightWrapper {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-top: 20px;
      width: 23%;
      .header {
        font-size: 22px;
        font-weight: 500;
        text-align: left;
        color: #9f2b68;
      }
      .opening {
        display: flex;
        flex-direction: column;
        gap: 12px;
        margin-top: 15px;
        .openItems {
          font-size: 15px;
          .head {
            font-weight: 500;
            color: #9f2b68;
          }
        }
      }
    }
    .wrapper {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-top: 20px;
      width: 25%;
      .header {
        font-size: 22px;
        font-weight: 500;
        text-align: left;
        color: #9f2b68;
      }
      .address {
        margin-top: 15px;
        font-size: 15px;
        line-height:28px;
        width: 200px;
      }
    }
  }
`;
