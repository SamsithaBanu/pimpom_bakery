import styled from "styled-components";

export const UploadRecipeStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Dark overlay */
  backdrop-filter: blur(5px); /* Blur effect */
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden; /* Prevent scrolling of the background */
  z-index: 1; /* Ensure it is on top */
  margin-top: 50px;

  .deleteIcon {
    padding: 5px;
    color: white;
    background: red;
    border-radius: 35px;
    cursor: pointer;
  }

  .array {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .addButton {
    background: #9f2b68;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 5px 10px;
    cursor: pointer;
    font-size: 14px;
    margin-right: 30px;
  }

  .uploadRecipeWrapper {
    width: 750px;
    max-height: 100%; /* Allow space for scrolling */
    padding: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px 320px;
    border: 2px solid #9f2b68;
    box-shadow: 0 2px 4px #facbea;
    background: white;
    border-radius: 8px;
    overflow-y: auto; /* Allow scrolling within the wrapper */

    .recipeWrapper {
      background: white;
      padding: 15px;
      border-radius: 15px;
      width: 100%;
      max-width: 700px;
      max-height: 100%; /* Full height within the parent */
      overflow-y: auto; /* Allow scrolling within the recipeWrapper */

      /* Hide scrollbar */
      &::-webkit-scrollbar {
        width: 0;
        height: 0;
      }
      & {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
      }

      .headerWrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;

        .heading {
          font-weight: 600;
          font-size: 20px;
        }
        .closeIcon {
          width: 25px;
          cursor: pointer;
          height: 25px;
          border-radius: 30%;
        }
        .closeIcon:hover {
          color: #9f2b68;
        }
      }

      .formWrapper {
        display: grid;
        padding: 10px;
        gap: 2px;
        overflow-y: auto; /* Allow scrolling within the formWrapper */
        max-height: calc(
          100vh - 180px
        ); /* Adjust height to fit within viewport */
        padding-bottom: 10px;

        /* Hide scrollbar */
        &::-webkit-scrollbar {
          width: 0;
          height: 0;
        }
        & {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }

        .boxWrapper {
          padding: 10px;
          border-radius: 15px;
          border: 1px solid #facbea;
          background: #f7e7dc;
          margin-top: 3px;
        }
        .imageUploadWrapper {
          padding: 10px;
          border-radius: 8px;
          height: 100px;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          border: 1px solid #facbea;
          background: #f7e7dc;
          margin-top: 3px;

          .imgWrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 2px;

            .cloudImage {
              font-size: 16px;
              height: 20px;
              width: 20px;
            }
            .uploadText {
              font-size: 15px;
            }
          }
        }
        .imagesShowWrapper {
          display: flex;
          align-items: center;
          gap: 2px;
          margin-top: 5px;

          .imageShow {
            position: relative;

            .imageProduct {
              background: white;
              border-radius: 15px;
              cursor: pointer;
            }
            .deleteIcon {
              position: absolute;
              bottom: 0;
              right: 0;
              padding: 5px;
              color: white;
              background: red;
              border-radius: 35px;
              cursor: pointer;
            }
          }
        }
        .textArea {
          height: 100px;
          border-radius: 8px;
          padding: 5px;
          border: 1px solid #facbea;
          background: #f7e7dc;
          width: 100%;
        }
        .uploadRecipeBtn {
          background: #9f2b68;
          color: white;
          margin-bottom: 10px;
          border-radius: 8px;
          margin-top: 20px;
        }
        .uploadRecipeBtn:hover {
          background: #facbea;
          color: black;
        }

        .ingredientGroup,
        .instructionGroup,
        .equipmentGroup {
          display: flex;
          align-items: center;
          gap: 5px;
          margin-top: 5px;

          .ingredientField,
          .equipmentField {
            flex: 1;
          }
          .removeButton {
            background: red;
            color: white;
            border: none;
            border-radius: 8px;
            padding: 5px 10px;
            cursor: pointer;
            font-size: 14px;
          }
          .addButton {
            background: #9f2b68;
            color: white;
            border: none;
            border-radius: 8px;
            padding: 5px 10px;
            cursor: pointer;
            font-size: 14px;
          }
        }
      }
    }
  }
`;
