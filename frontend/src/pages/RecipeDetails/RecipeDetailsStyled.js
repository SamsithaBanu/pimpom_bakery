import styled from "styled-components";

export const RecipeDetailsStyled = styled.div`
  padding: 25px 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .leftSideWrapper {
    width: 65%;
    .top {
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Soft shadow for depth */
      background-color: #fff; /* White background */
      border: 1px solid #fff; /* Light gray border */
      border-radius: 8px;
      .imageContent {
        display: flex;
        flex-direction: row;
        .img {
          width: 80%;
          height: 430px;
          img {
            width: 100%;
            height: 430px;
            border-radius: 8px;
            object-fit: fill;
          }
        }

        .imageWrapper {
          display: flex;
          flex-direction: column;
          gap: 30px;
          padding: 20px;

          .images {
            width: 110px;
            height: 110px;
            border-radius: 15px;
            img {
              width: 110px;
              height: 110px;
              border-radius: 15px;
            }
          }
        }
      }

      .details {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 20px;

        .firstPart {
          border-bottom: 1px solid #eeedeb;
          padding-bottom: 30px;
          .bakery {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            margin-bottom: -20px;
            .topic {
              font-size: 24px;
              color: #d95f59;
              font-weight: 500;
              padding-bottom: 10px;
              align-items: flex-start;

              .name {
                font-size: 27px;
                color: #000;
                font-weight: 500;
                text-align: left;
              }
              .category {
                font-size: 17px;
                color: #d95f59;
                text-align: left;
              }
            }
              .star{
              margin: 0 10px 30px 20px;
              display: flex;
              justify-content: center;
              }
          }
          .desc {
            font-size: 14px;
            color: grey;
            text-align: left;
            padding: 0px 15px 15px 15px;
          }
          .btn {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            gap: 15px;
            align-items: center;
            .button {
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              gap: 15px;
              align-items: center;
              width: 150px;
              color: white;
              background: #d95f59;
              padding: 10px 15px;
              border-radius: 15px;
              margin-left: 15px;
            }
            .print {
              border-radius: 50%;
              border: 2px solid #d95f59;
              padding: 10px;
            }
          }
        }
        .secondPart {
          display: flex;
          flex-direction: row;
          gap: 50px;
          padding: 15px;
          border-bottom: 1px solid #eeedeb;
          padding-bottom: 20px;
          width: 100%;
          .slogan {
            display: flex;
            flex-direction: row;
            gap: 10px;
            align-items: center;

            .image {
              width: 32px;
              height: 32px;
              img {
                width: 32px;
                height: 32px;
              }
            }
            .text {
              font-size: 16px;
              color: #000;
            }
          }
        }
        .thirdPart {
          display: flex;
          flex-direction: row;
          gap: 60px;
          width: 100%;
          justify-content: flex-start;
          align-items: center;
          padding: 20px;
          border-bottom: 1px solid #eeedeb;
          .difficulty {
            border-right: 1px solid #eeedeb;
            padding-right: 25px;
            height: 50px;
            align-items: center;
            display: flex;
            flex-direction: column;
          }
          .preparation {
            border-right: 1px solid #eeedeb;
            padding-right: 25px;
          }
          .span {
            color: #d95f59;
          }
        }
        .forthPart {
          display: flex;
          flex-direction: row;
          gap: 20px;
          padding: 20px 0px 0px 0px;
          cursor: pointer;
          align-items: center;
          justify-content: flex-start;
        }
      }
    }
    .middle {
      padding: 20px;
      .header {
        font-size: 24px;
        color: #d95f59;
        font-weight: 600;
      }
      .instructionWrapper {
        margin-top: 20px;
        padding-left: 20px; /* Indentation for the list */
        //   list-style-type: disc; /* Use disc bullets */

        .ins {
          font-size: 16px; /* Adjust the font size */
          color: #333; /* Text color */
          margin-bottom: 10px; /* Space between list items */
          line-height: 1.5; /* Line height for readability */

          &:before {
            content: "•"; /* Custom bullet */
            color: #d95f59; /* Bullet color */
            font-weight: bold; /* Bold bullet */
            display: inline-block;
            width: 1em; /* Space for bullet */
            margin-left: -1em; /* Align bullet with text */
          }
        }
      }
    }
    .bottom {
      .header {
        font-size: 24px;
        color: #d95f59;
        font-weight: 600;
      }
      .container {
        position: relative;
        .arrowWrapper {
          position: absolute;
          top: 50%;
          width: 100%; /* Make sure the wrapper spans the full width */
          transform: translateY(-50%);
          display: flex;
          z-index: 1;
          justify-content: space-between; /* Position arrows at the left and right edges */
          width: calc(
            100% + -10px
          ); /* Make sure the arrows go beyond the container if needed */
          margin-left: -15px; /* Adjust to position the arrows outside */

          .arrowBTN {
            position: absolute; /* Position buttons absolutely within the arrowWrapper */
            top: 50%; /* Vertically center the arrows */
            transform: translateY(-50%); /* Adjust for vertical centering */
            border: none;
            background-color: #d95f59;
            color: white;
            font-size: 1rem;
            padding: 5px;
            border-radius: 50%;
            cursor: pointer;
            transition: background-color 0.3s ease;

            &:hover {
              background-color: rgba(255, 255, 255, 0.5);
              color: black;
            }
          }

          .arrowLeft {
            left: 0; /* Fix the left arrow on the left side */
          }

          .arrowRight {
            right: 0; /* Fix the right arrow on the right side */
          }
        }

        .relatedWrapper {
          display: flex;
          flex-direction: row;
          gap: 15px;
          margin-top: 15px;
          flex-wrap: nowrap;
          overflow-x: hidden;
          width: 755px;
          scroll-behavior: smooth;
          .cardWrapper {
            .detailsWrapper {
              .top {
                box-shadow: none;
                background: white;
              }
            }
          }
        }
      }
    }
  }
  .c-transition {
    transition: all 0.3s ease-in-out;
  }

  .m-sticky-container {
    position: fixed;
    top: 145px;
    right: 250px;
    height: 100%;
    ._sticky {
      .rightSideWrapper {
        transition: margin-top 50ms cubic-bezier(0.155, 0.11, 0.15, 0.155);
      }
    }
    .rightSideWrapper {
      width: 35%;
      padding-left: 30px;
      transition: margin-top 50ms cubic-bezier(0.155, 0.11, 0.15, 0.155);
      max-height: 70vh;
      overflow-y: auto;

      .ingredientsWrapper {
        .wrap {
          display: flex;
          flex-direction: row;
          align-items: center;
          // justify-content: space-between;
          .header {
            font-size: 24px;
            color: #d95f59;
            font-weight: 600;
          }
          .serve {
            font-size: 19px;
            font-weight: 400;
            margin-left: 50px;
            margin-top: 5px;
          }
        }
        .formWrapper {
          // box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Soft shadow for depth */
          // background-color: #fff; /* White background */
          // border: 1px solid #fff; /* Light gray border */
          border-radius: 8px;
          margin: 15px 10px 15px 0px;
          padding: 10px;
          .header {
            font-size: 13px;
            color: black;
            margin-bottom: 5px;
          }
          .wrapper {
            display: flex;
            flex-direction: row;
            gap: 10px;
            align-items: center;
            margin-top: 10px;
            input {
              border: none; /* Remove all borders */
              border-bottom: 2px solid #d95f59; /* Add a bottom border with a specific color and thickness */
              outline: none; /* Remove the outline on focus (optional) */
              padding: 5px; /* Add some padding (optional) */
              transition: border-color 0.3s; /* Add transition for a smooth effect */
            }

            input:focus {
              border-bottom: 2px solid #ff6b6b; /* Change border color on focus (optional) */
            }
            .enterBTn {
              background: #d95f59;
              color: white;
              padding: 8px 12px;
              //margin-bottom: 10px;
              border-radius: 15px;
              //margin-top: 20px;
              font-size: 13px;
            }
          }
        }

        .ingredientWrapper {
          .ingre {
            padding: 10px;
            border-bottom: 1px solid #eeedeb;
          }
        }
      }

      .equipmentWrapper {
        margin-top: 20px;

        .header {
          font-size: 24px;
          color: #d95f59;
          font-weight: 600;
          padding: 10px;
          border-bottom: 1px solid #eeedeb;
        }

        .equip {
          .equi {
            padding: 10px;
            border-bottom: 1px solid #eeedeb;
          }
        }
      }
    }
  }
  @media print {
    display: flex;
    flex-direction: column;

    .header {
      display: none;
    }

    .rightSideWrapper {
      display: none;
    }

    .leftSideWrapper {
      width: 100%;
    }

  }
`;
