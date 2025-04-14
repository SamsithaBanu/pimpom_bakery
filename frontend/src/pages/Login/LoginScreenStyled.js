import styled from "styled-components";

export const LoginScreenStyled = styled.div`
  margin: 60px 460px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 550px;
  background-color: #ffdefa;
  border-radius: 8px;
  box-shadow: 0px 0px 10px #ffdefa;

  .container {
    .userImg {
      text-align: center;
      display: flex;
      justify-content: center;
    }
    .image-upload {
    width:120px;
    height: 120px;
    border-radius: 50%;
    background: #BF2EF0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 180px;
    color: white
    }
    .heading {
      font-size: 25px;
      margin-top: 20px;
      text-align: center;
      margin-bottom: 25px;
    }
    .email {
      display: flex;
      flex-direction: column;
      margin-top: 10px;
      font-size: 15px;
      line-height: 18px;

      .inputemail {
        height: 40px;
        border-radius: 8px;
        margin-top: 5px;
        padding: 10px;
      }
    }
    .password {
      display: flex;
      flex-direction: column;
      margin-top: 10px;
      font-size: 15px;
      line-height: 18px;

      .passwordHead {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .forgor {
          color: blue;
        }
      }

      .passwordInput {
        display: flex;
        align-items: center; /* Align items vertically */
      }

      .input {
        width: 100%; /* Take up remaining space */
        padding: 10px;
        border-radius: 8px;
        margin-top: 5px;
      }

      .iconContainer {
        margin-left: -30px; /* Adjust the margin as needed to align the icon properly */
      }

      .iconContainer span {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #fff;
        border-radius: 0 5px 5px 0; /* Match input's border radius */
        padding: 10px;
        cursor: pointer;
        margin-top: 5px;
        height: 38px;
      }
    }
    .signInCta {
      background: #9f2b68;
      padding: 10px;
      text-align: center;
      margin-top: 10px;
      border-radius: 8px;
      width: 100%;
    }

    .signInCta:hover {
      background-color: #d988b9;
    }

    // .regis {
    //   margin-top: 20px;
    //   font-size: 15px;
    //   line-height: 18px;

    //   .registerCta {
    //     color: blue;
    //   }
    // }
  }
  .regis {
    margin-top: 20px;
    font-size: 15px;
    line-height: 18px;

    .registerCta {
      color: blue;
    }
  }
`;
