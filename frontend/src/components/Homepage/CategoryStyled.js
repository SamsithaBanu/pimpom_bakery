import styled from "styled-components";

export const CategoryStyled = styled.div`
  .categoryWrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 30px;
    padding: 0 10%;
    position: absolute;
    bottom: 0; /* Position it at the bottom of the container */
    width: 100%; /* Ensure it stretches the full width */
    top: 550px;
  }

  .categoryItem {
    width: 140px;
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 4px;
    padding: 8px 0px;
  }

  .categoryImage img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  .categoryName {
    font-size: 15px;
    font-weight: 600;
    margin-top: 8px;
  }
  // .categoryWrapper {
  //   display: flex;
  //   flex-direction: row;
  //   justify-content: center;
  //   align-items: center;
  //   gap: 30px;
  //   padding: 0 10%;
  //   position: absolute;
  //   // top: 550px;

  //   .categoryItem {
  //     width: 140px;
  //     height: 120px;
  //     display: flex;
  //     flex-direction: column;
  //     justify-content: center;
  //     align-items: center;
  //     background: white;
  //     border-radius: 4px;
  //     padding: 8px 0px;

  //     .categoryImage {
  //       img {
  //         width: 80px;
  //         height: 80px;
  //         border-radius: 50%;
  //       }
  //     }
  //     .categoryName {
  //       font-size: 15px;
  //       font-weight: 600;
  //       margin-top: 8px;
  //     }
  //   }
  // }
  .categoryListWrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 30px;
    padding-top: 40px;

    .category {
      width: 100px;
      height: 100px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .categoryImg {
        img {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          border: 3px solid #9f2b68;
        }
      }
      .categoryname {
        font-size: 17px;
        font-weight: 400;
      }
    }
  }
`;