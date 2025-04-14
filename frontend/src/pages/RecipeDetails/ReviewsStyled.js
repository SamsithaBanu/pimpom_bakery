import styled from "styled-components";

export const ReviewStyled = styled.div`
  padding-top: 20px;
  .header {
    font-size: 22px;
    color: #d95f59;
    font-weight: 600;
  }
  .reviewWrapper {
    display: flex;
    flex-direction: column;
    width: 690px;
    //align-items: center;

    .reviewList {
      background: #eeedeb;
      border-radius: 10px;
      margin: 10px;
      padding: 15px 15px 15px 15px;
      .top {
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: #eeedeb;
        box-shadow: none;
        border: none;
        justify-content: space-between;
        //border-bottom: 0.3px solid black;
        border-radius: 0;
        padding-bottom:10px;

        .left {
          display: flex;
          flex-direction: column;
          gap: 0px;
          .name {
            font-size: 17px;
            font-weight: 600;
}
            .date {
              font-size: 15px;
              color: gray;
            }
          
        }
          .right{
          display: flex;
          flex-direction: row;
          gap:2px;
          }
      }
        .bottom{
        font-size: 13px;
        margin-top: 10px;
        }
    }
  }
  .form {
    background: #eeedeb;
    border-radius: 10px;
    margin: 10px;
    padding: 10px 15px 15px 15px;
    width: 690px;
    .row {
      display: flex;
      flex-direction: column;
      margin-top: 15px;
      .label {
        color: black;
        font-size: 17px;
        margin-bottom: 7px;
        font-weight: 600;
      }
      .textarea {
        margin-top: 10px;
        height: 75px;
        padding: 25px;
        border-radius: 8px;
      }
    }
    .submitCTA {
      background-color: #d95f59;
      color: #fff;
      border: none;
      border-radius: 5px;
      padding: 10px 15px;
      cursor: pointer;
      font-size: 17px;
      margin-top: 20px;
      justify-content: center;
      width: 250px;

      &:hover {
        background-color: #facbea;
        color: black;
      }
    }
  }
`;
