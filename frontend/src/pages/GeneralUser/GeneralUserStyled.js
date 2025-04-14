import styled from "styled-components";

export const GeneralUserStyled = styled.div`
  .item {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    .itemName {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 10px;
      font-size: 16px;
      font-weight: 500;
    }
    &:hover {
      background: #fff;
    }
  }
  .item.active {
    background-color: #fff; /* Example background color for active item */
    font-weight: bold;
  }

  .editProfileOverlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5); /* Darken background */
    backdrop-filter: blur(8px); /* Blur effect */
    z-index: 10; /* Ensure it's above other content */
  }
  .profileWrapper {
    margin: 0 24px;
    position: relative;
    z-index: 1;
    transition: all 0.3s ease;
    .header {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      .head {
        font-size: 22px;
        font-weight: 400;
        height: 60px;
        background: white;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Soft shadow for depth */
        border-radius: 8px;
        width: 45%;
        padding: 8px 15px;
      }
      .editProduct {
        font-size: 16px;
        border: 2px solid #9f2b68;
        border-radius: 35px;
        display: flex;
        flex-direction: row;
        gap: 6px;
        align-items: center;
        justify-content: space-between;
        padding: 2px 10px;
        &:hover {
          background: #bf2ef0;
          color: white;
        }
      }
    }
    .body {
      display: flex;
      flex-direction: row;
      gap: 30px;
      .profileSection {
        width: 45%;
        margin-top: 20px;
        background: rgba(
          211,
          211,
          211,
          0.2
        ); /* Very light grey with transparency */
        border-radius: 15px;
        backdrop-filter: blur(10px); /* Frosted glass effect */
        -webkit-backdrop-filter: blur(
          10px
        ); /* Frosted glass effect for Safari */
        border: 1px solid rgba(255, 255, 255, 0.2); /* Light transparent white border */
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Soft shadow for depth */
        padding: 20px;
        color: black;
        .top {
          display: flex;
          flex-direction: column;
          border-bottom: 1px solid grey;
          padding-bottom: 10px;
          .image-upload {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            background: #bf2ef0;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 180px;
            color: white;
          }
          .role {
            font-size: 15px;
            font-weight: 500;
            text-align: left;
            padding-top: 5px;
          }
        }
        .bottom {
          margin-top: 10px;
          padding-left: 5px;
          display: flex;
          flex-direction: row;
          .left {
            margin-top: 10px;
            padding-left: 5px;
            .content {
              display: flex;
              flex-direction: row;
              height: 50px;
              align-items: center;
              margin-bottom: 10px;
              label {
                font-size: 18px;
                font-weight: 500;
                width: 150px;
              }
              input {
                height: 50px;
                font-size: 18px;
                border-radius: 10px;
                padding: 0 10px;
              }
              select {
                height: 50px;
                font-size: 18px;
                border-radius: 10px;
                padding: 0 10px;
              }
            }
            .saveDetails {
              font-size: 16px;
              border: 2px solid #9f2b68;
              border-radius: 15px;
              text-align: center;
              display: flex;
              flex-direction: row;
              gap: 6px;
              align-items: center;
              padding: 2px 10px;
              background: #9f2b68;
              color: white;
              width: 230px;
              justify-content: center;
              &:hover {
                background: #fff;
                color: black;
              }
            }
          }
        }
      }
      .editprofileSection {
        position: relative;
        z-index: 11; /* Ensure it's above the overlay */
        background-color: white;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); /* Optional for highlighting */
        transition: all 0.3s ease;
        .top {
          display: flex;
          flex-direction: row;
          border-bottom: 1px solid grey;
          padding-bottom: 10px;
          justify-content: space-between;
          .imageWrap {
          }
          .role {
            font-size: 15px;
            font-weight: 500;
            text-align: left;
            padding-top: 5px;
          }
        }
        .bottom {
          margin-top: 10px;
          padding-left: 5px;
          display: flex;
          flex-direction: row;
          .left {
            margin-top: 10px;
            padding-left: 5px;
            .content {
              display: flex;
              flex-direction: row;
              height: 50px;
              align-items: center;
              margin-bottom: 10px;
              label {
                font-size: 18px;
                font-weight: 500;
                width: 150px;
              }
              input {
                height: 50px;
                font-size: 18px;
                border-radius: 10px;
                padding: 0 10px;
              }
              select {
                height: 50px;
                font-size: 18px;
                border-radius: 10px;
                padding: 0 10px;
              }
            }
            .saveDetails {
              font-size: 16px;
              border: 2px solid #9f2b68;
              border-radius: 15px;
              text-align: center;
              display: flex;
              flex-direction: row;
              gap: 6px;
              align-items: center;
              padding: 2px 10px;
              background: #9f2b68;
              color: white;
              width: 230px;
              justify-content: center;
              &:hover {
                background: #fff;
                color: black;
              }
            }
          }
        }
      }
    }
  }
  .addresswrapper {
    margin: 0 24px;
    padding-right: 15%;
    .header {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      height: 60px;
      background: white;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Soft shadow for depth */
      border-radius: 8px;
      padding: 8px 15px;
      .head {
        font-size: 22px;
        font-weight: 500;
      }
      .editProduct {
        font-size: 16px;
        border-radius: 35px;
        display: flex;
        flex-direction: row;
        gap: 6px;
        align-items: center;
        justify-content: space-between;
        color: #9f2b68;
        &:hover {
          border-radius: 8px;
          background: #9f2b68;
          color: white;
        }
      }
    }
    .addressWrapper {
      margin-top: 25px;
      .addresswrap {
        border-radius: 8px;
        width: 100%;
        margin-bottom: 20px;
        background: rgba(211, 211, 211, 0.2);
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 20px;
        gap: 50px;
        .left {
          display: flex;
          flex-direction: column;
          gap: 10px;
          .name {
            font-size: 16px;
            color: #9f2b68;
            font-weight: 500;
          }
          .addres {
            font-size: 15px;
            color: #000;
            font-weight: 400;
          }
        }
        .right {
          display: flex;
          flex-direction: row;
          gap: 30px;
          .edit {
            color: green;
          }
          .delete {
            color: red;
            cursor: pointer;
          }
        }
      }
    }
    .body {
      display: flex;
      flex-direction: column;
      gap: 10px;
      justify-content: flex-start;
      align-items: center;
      margin-top: 25px;
      padding: 30px;
      background: rgba(211, 211, 211, 0.2);
      border-radius: 15px;
      backdrop-filter: blur(10px); /* Frosted glass effect */
      -webkit-backdrop-filter: blur(10px); /* Frosted glass effect for Safari */
      border: 1px solid rgba(255, 255, 255, 0.2); /* Light transparent white border */
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Soft shadow for depth */
      .title {
        font-size: 23px;
        font-weight: 600;
      }
    }
  }
  .addAddressWrapper {
    margin-left: 30px;
    .header {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      height: 60px;
      background: white;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Soft shadow for depth */
      border-radius: 8px;
      padding: 8px 15px;
      width: 53%;
      .head {
        font-size: 22px;
        font-weight: 500;
      }
    }
    .mapContainer {
      display: flex;
      flex-direction: row;
      margin-top: 20px;

      .formWrapper {
        width: 40%;
        margin-left: 20px;
        margin-top: 20px;
        background: fff;
        padding: 15px;
        border-radius: 15px;
        backdrop-filter: blur(10px); /* Frosted glass effect */
        -webkit-backdrop-filter: blur(
          10px
        ); /* Frosted glass effect for Safari */
        border: 1px solid rgba(255, 255, 255, 0.2); /* Light transparent white border */
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Soft shadow for depth */
        .address {
          display: flex;
          flex-direction: column;
          margin-top: 20px;
          font-size: 15px;
          line-height: 18px;

          label {
            font-size: 16px;
            font-weight: 500;
          }

          .addressInput {
            // height: 40px;
            border-radius: 8px;
            margin-top: 10px;
            padding: 10px;
            border: 2px solid #9f2b68;
          }
        }
        .editProduct {
          font-size: 16px;
          border: 2px solid #9f2b68;
          border-radius: 8px;
          background: #9f2b68;
          display: flex;
          gap: 6px;
          align-items: center;
          justify-content: center;
          padding: 2px 10px;
          color: white;
          margin-top: 25px;
          width: 200px;

          // &:hover {
          //   background: #bf2ef0;
          //   color: white;
          // }
        }
      }
    }
  }
  .wishlistContainer {
    padding: 20px 120px 20px 30px;
    .wishlistRecipes {
      padding: 0px;
    }
    .relatedWrap {
      padding: 20px 0px;
    }
  }
  .mycartWrapper {
    padding: 10px 100px 10px 20px;
    .leftWrapper {
      width: 55%;
    }
  }
  .contactWrapper {
    margin: 0 24px;
    position: relative;
    z-index: 1;
    transition: all 0.3s ease;

    .header {
      display: flex;
      justify-content: space-between;
      .head {
        font-size: 22px;
        font-weight: 400;
        height: 60px;
        background: white;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Soft shadow for depth */
        border-radius: 8px;
        width: 65%;
        padding: 8px 15px;
      }
    }

    .body {
      display: flex;
      flex-direction: row;
      gap: 30px;
      margin-top: 20px;

      .contactSection {
        width: 65%;
        background: rgba(211, 211, 211, 0.2); /* Frosted glass effect */
        border-radius: 15px;
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        padding: 20px;
        color: black;

        .contantName {
          font-size: 16px;
          padding: 10px 0px 25px 0px;
          font-weight: 400;
          margin-bottom: 25px;
          border-bottom: 1px solid black;
        }

        form {
          display: flex;
          flex-direction: column;
          gap: 15px;
          margin-top: 15px;

          .content {
            display: flex;
            flex-direction: row;
            margin-bottom: 15px;

            label {
              font-size: 16px;
              font-weight: 500;
              margin-bottom: 8px;
              width: 110px;
            }

            input,
            textarea {
              height: 50px;
              font-size: 18px;
              border-radius: 10px;
              padding: 10px;
              width: 100%;
              border: 1px solid white;

              &:focus {
                border: 2px solid #9f2b68;
              }
            }

            textarea {
              height: 150px;
              resize: none;
            }
          }

          .submitBtn {
            display: flex;
            justify-content: center;
            button {
              font-size: 16px;
              border: 2px solid #9f2b68;
              border-radius: 15px;
              padding: 10px 20px;
              background: #9f2b68;
              color: white;
              cursor: pointer;
              width: 60%;

              &:hover {
                background: #fff;
                color: black;
              }

              &:disabled {
                cursor: not-allowed;
                background: lightgray;
              }
            }
          }
        }
      }
    }
  }
  .settingsWrapper {
    margin: 20px 100px 20px 25px;
    .header {
      display: flex;
      justify-content: space-between;
      .head {
        font-size: 22px;
        font-weight: 400;
        height: 60px;
        background: white;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Soft shadow for depth */
        border-radius: 8px;
        width: 65%;
        padding: 8px 15px;
      }
    }
    .container {
      width: 65%;
      background: rgba(211, 211, 211, 0.2); /* Frosted glass effect */
      border-radius: 15px;
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      padding: 20px;
      color: black;
      margin-top: 25px;

      .heading {
        font-size: 17px;
        padding-bottom: 15px;
        border-bottom: 1px solid black;
        margin-top: 20px;
        text-align: left;
        margin-bottom: 25px;
      }
      .email {
        display: flex;
        flex-direction: row;
        margin-top: 10px;
        font-size: 15px;
        line-height: 18px;
        align-items: center;
        padding: 10px 0px;
        label {
          font-weight: 500;
          width: 35%;
        }

        .inputemail {
          height: 40px;
          border-radius: 8px;
          margin-top: 5px;
          padding: 10px;
          width: 100%;
        }
      }
      .password {
        display: flex;
        flex-direction: row;
        margin-top: 10px;
        font-size: 15px;
        line-height: 18px;
        align-items: center;
        padding: 10px 0px;
        label {
          font-weight: 500;
        }
        .passwordHead {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          width: 35%;
          .forgor {
            color: blue;
          }
        }

        .passwordInput {
          display: flex;
          align-items: center; /* Align items vertically */
          width: 100%;
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
        width: 60%;
        color: white;
      }

      .signInCta:hover {
        background-color: #d988b9;
        color: black;
      }
    }
  }
  .orderWrapper {
    margin: 0 24px;
    padding-right: 15%;
    .header {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      height: 60px;
      background: white;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Soft shadow for depth */
      border-radius: 8px;
      padding: 8px 15px;
      .head {
        font-size: 22px;
        font-weight: 500;
      }
      .editProduct {
        font-size: 17px;
        font-weight: 500;
        border-radius: 35px;
        display: flex;
        flex-direction: row;
        gap: 6px;
        align-items: center;
        justify-content: space-between;
        color: #9f2b68;
      }
    }
    .orderallWrapper {
      display: flex;
      flex-direction: column;
      gap: 10px;
      justify-content: flex-start;
      margin-top: 25px;
      padding: 30px;
      .singleOrder {
        padding: 20px;
        border-radius: 15px;
        background: #fff;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Soft shadow for depth */
        .top {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 10px;
          border-bottom: 1px solid #eddfe0;
          .left {
            .name {
              font-size: 18px;
            }
            .order {
              font-size: 19px;
              //font-weight: 500;
            }
          }
          .right {
            font-size: 22px;
            font-weight: 600;
          }
        }
        .bottom {
          .status {
            border: 1px solid orange;
            border-radius: 8px;
            padding: 3px 5px;
            color: orange;
            background: white;
            width: 100px;
            margin-top: 15px;
          }
          .tablewrap {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
            font-size: 16px;
            text-align: left;
            margin-bottom: 10px;
            padding-bottom: 15px;
            border-bottom: 1px solid #eddfe0;
            .row {
              margin-bottom: 10px;
            }
          }

          .tablewrap tr {
            background-color: #fff;
            border-radius: 8px;
            margin-bottom: 10px;
          }

          .tablewrap th,
          .tablewrap td {
            padding: 10px;
          }

          .tablewrap tbody tr {
            transition: background-color 0.3s ease;
          }
          .tablewrap tbody {
            margin-bottom: 10px;
          }
          .tablewrap td {
            //text-align: center;
            font-size: 19px;
            img {
              width: 70px;
              height: 70px;
              border-radius: 8px;
            }
          }

          .tablewrap th {
            text-align: center;
          }
          .deliveryWrapper {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            .deliveryAddress {
              .subheader {
                font-size: 23px;
                font-weight: 500;
                margin: 10px 0px;
                color: #9f2b68;
              }
              .addressWrapper {
                //border: 2px solid #9f2b68;
                // box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                // background: #fff;
                padding: 15px 20px;
                border-radius: 8px;
                width: 700px;
                .name {
                  font-size: 18px;
                  color: #9f2b68;
                  margin-bottom: 8px;
                  font-weight: 500;
                }
              }
            }
            .uploadProductBtn {
              background-color: #9f2b68;
              color: #fff;
              border: none;
              margin-top: 25px;
              // width: 200px;
              height: 40px;
              border-radius: 5px;
              padding: 10px 15px;
              cursor: pointer;
              font-size: 16px;
              margin-right: 10px;
              justify-content: center;

              &:hover {
                background-color: #facbea;
                color: black;
              }
            }
          }
        }
      }
    }
    .body {
      display: flex;
      flex-direction: column;
      gap: 10px;
      justify-content: flex-start;
      align-items: center;
      margin-top: 25px;
      padding: 30px;
      background: rgba(211, 211, 211, 0.2);
      border-radius: 15px;
      backdrop-filter: blur(10px); /* Frosted glass effect */
      -webkit-backdrop-filter: blur(10px); /* Frosted glass effect for Safari */
      border: 1px solid rgba(255, 255, 255, 0.2); /* Light transparent white border */
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Soft shadow for depth */
      .title {
        font-size: 23px;
        font-weight: 600;
      }
      .uploadProductBtn {
        background-color: #9f2b68;
        color: #fff;
        border: none;
        margin-top: 15px;
        // width: 200px;
        height: 40px;
        border-radius: 5px;
        padding: 10px 15px;
        cursor: pointer;
        font-size: 16px;
        margin-right: 10px;
        justify-content: center;

        &:hover {
          background-color: #facbea;
          color: black;
        }
      }
    }
  }
`;
