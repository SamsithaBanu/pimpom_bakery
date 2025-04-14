import styled from "styled-components";

export const CheckoutStyled = styled.div`
  .mycartWrapper {
    padding: 30px 12%;
    display: flex;
    flex-direction: row;
    gap: 25px;
    .leftWrapper {
      width: 60%;
      .total {
        font-size: 18px;
        font-weight: 500;
        margin: 5px 20px;
        color: #9f2b68;
      }
      .addresswrap {
        border-radius: 8px;
        margin: 20px;
        background: #eddfe0;
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
      .totalItemsWrapper {
        display: flex;
        flex-direction: column;
        .total {
          font-size: 18px;
          font-weight: 500;
          margin: 5px 20px;
          color: #9f2b68;
        }
        .addtoCartWrapper {
          margin: 15px 20px;
          border: 2px solid #9f2b68;
          border-radius: 8px;
          display: flex;
          flex-direction: column;

          .topwrapper {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding: 10px 15px;
            .left {
              .standard {
                font-size: 18px;
                font-weight: 500;
              }
              .delivery {
                color: grey;
                font-weight: 400;
                font-size: 16px;
              }
            }
            .right {
              font-size: 18px;
              font-weight: 400;
            }
          }
          .bottomWrapper {
            display: flex;
            flex-direction: column;
            .cartWrapper {
              // border: 1px solid #9f2b68;
              border-radius: 8px;
              margin: 15px;
              padding: 15px;
              background: #eddfe0;
              .top {
                display: flex;
                flex-direction: row;
                gap: 25px;
                align-items: center;

                .image {
                  height: 100px;
                  width: 100px;
                  img {
                    height: 100px;
                    width: 100px;
                    border-radius: 8px;
                  }
                }
                .details {
                  width: 200px;
                  height: 100%;
                  .productname {
                    font-size: 18px;
                    font-weight: 500;
                  }
                  .priceWrapper {
                    font-size: 16px;
                    font-weight: 400;
                    display: flex;
                    flex-direction: row;
                    gap: 20px;
                    .actualPrice {
                      color: green;
                    }
                    .saves {
                      text-decoration: line-through;
                    }
                  }
                }
                .addedCTA {
                  width: 120px;
                  padding: 5px;
                  display: flex;
                  flex-direction: row;
                  border: 2px solid green;
                  border-radius: 8px;
                  font-size: 22px;
                  justify-content: space-around;
                  align-items: center;

                  .minus,
                  .add {
                    background: #f5f7f8;
                    height: 30px;
                    width: 30px;
                    border-radius: 10px;
                    text-align: center;
                    padding-bottom: 10px;
                    cursor: pointer;
                  }
                }
                .removeCTA {
                  color: red;
                  margin-left: 10px;
                  cursor: pointer;
                }
              }
            }
          }
        }
      }
    }
    .rightWrapper {
      width: 40%;
      border-radius: 8px;
      height: 100%;
      padding: 0px 20px 20px 20px;
      .paymentOptions {
        .header {
          font-size: 19px;
          font-weight: 500;
          margin: 10px 0px;
          color: #9f2b68;
        }
        .paymentMethod {
          display: flex;
          border: 2px solid #9f2b68;
          border-radius: 8px;
          flex-direction: column;
          padding: 10px;
          .item {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            gap: 10px;
            //background: #EDDFE0;
            //    border: 2px solid #9f2b68;
            //     border-radius: 8px;
            margin: 10px 0px;
            border-radius: 3px;
            padding: 7px 10px;
            label {
              font-size: 17px;
              font-weight: 400;
              display: flex;
              flex-direction: row;
              gap: 10px;
            }
            input {
              height: 20px;
              width: 20px;
            }
          }
          hr {
            border: 1px solid #9f2b68;
          }
        }
      }
      .orderSummary {
        .header {
          font-size: 19px;
          font-weight: 500;
          margin: 10px 0px;
          color: #9f2b68;
        }
        .summayWrapper {
          display: flex;
          border: 2px solid #9f2b68;
          border-radius: 8px;
          flex-direction: column;
          padding: 10px;

          .summayList {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            margin: 15px 10px;
            .heading {
              font-size: 17px;
              font-weight: 400;
            }
            .value {
              font-size: 17px;
              font-weight: 600;
            }
          }
          .order {
            background: #eddfe0;
            border-radius: 3px;
            padding: 0px 10px;
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
            font-size: 17px;
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
      }
    }
  }
  .singleOrderWrapper {
    padding: 20px 15%;
    background: #f8ede3;
    .tablewrap {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
      font-size: 16px;
      text-align: left;
      background-color: #fff;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Soft shadow for depth */
      //box-shadow: -2px 0 5px rgba(0, 0, 0, 0.3);
      //transition: right 0.3s ease;
      border-radius: 8px;
    }

    .tablewrap thead {
      font-weight: bold;
      margin: 0px 10px;
      border-bottom: 1px solid #9f2b68;
    }

    .tablewrap th,
    .tablewrap td {
      padding: 15px;
    }

    .tablewrap tbody tr {
      transition: background-color 0.3s ease;
      //border-bottom: 1px solid #9f2b68;
    }

    .tablewrap td {
      text-align: center;
      font-size: 17px;
    }

    .tablewrap th {
      text-align: center;
    }

    .header {
      font-size: 23px;
      font-weight: 500;
      margin: 10px 0px;
      color: #9f2b68;
    }
    .d-flex {
      display: flex;
      flex-direction: row;
      margin-top: 20px;
      gap: 60px;
      .leftWrapper {
        display: flex;
        flex-direction: column;
        .productWrapper {
          .subheader {
            font-size: 23px;
            font-weight: 500;
            margin: 10px 0px;
            color: #9f2b68;
          }
        }
        .customerWrapper {
          .subheader {
            font-size: 23px;
            font-weight: 500;
            margin: 10px 0px;
            color: #9f2b68;
          }
          .customer-wrap {
            margin-top: 15px;
            display: flex;
            flex-direction: column;
            gap: 20px;
            //border: 2px solid #9f2b68;
            border-radius: 8px;
            padding: 15px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Soft shadow for depth */
            background: white;
            .row {
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              font-size: 17px;
              .label {
                font-size: 17px;
                color: #000;
                font-weight: 500;
                // width: 300px;
              }
            }
            .horizondal {
              border-color: #9f2b68;
            }
          }
        }
      }
      .rightWrapper {
        display: flex;
        flex-direction: column;
        .orderWrapper {
          .subheader {
            font-size: 23px;
            font-weight: 500;
            margin: 10px 0px;
            color: #9f2b68;
          }
          .orders {
            margin-top: 15px;
            display: flex;
            flex-direction: column;
            gap: 20px;
            //border: 2px solid #9f2b68;
            border-radius: 8px;
            padding: 15px;
            width: 500px;
            background: white;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Soft shadow for depth */
            .row {
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              .label {
                font-size: 17px;
                color: #000;
                font-weight: 500;
                width: 200px;
              }
            }
            .horizondal {
              border-color: #9f2b68;
            }
          }
        }
        .totalWrapper {
          //border: 2px solid #9f2b68;
          border-radius: 8px;
          padding: 15px;
          width: 500px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          margin: 15px 0px 0px 0px;
          background: white;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Soft shadow for depth */
          .header {
            font-size: 22px;
            font-weight: 500;
            color: #000;
          }
          .value {
            font-size: 18px;
            font-weight: 500;
          }
        }
        .deliveryAddress {
          margin-top: 20px;
          .subheader {
            font-size: 23px;
            font-weight: 500;
            margin: 10px 0px;
            color: #9f2b68;
          }
          .addressWrapper {
            //border: 2px solid #9f2b68;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            background: #fff;
            padding: 15px 20px;
            margin-top: 10px;
            border-radius: 8px;
            width: 500px;
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
          width: 200px;
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
`;
