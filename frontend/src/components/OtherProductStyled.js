import styled from "styled-components";

export const OtherProductStyled = styled.div`
  padding: 15px;
  .header {
    font-size: 20px;
    font-weight: 500;
    text-align: left;
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

      .arrowBTN {
        position: absolute; /* Position buttons absolutely within the arrowWrapper */
        top: 50%; /* Vertically center the arrows */
        transform: translateY(-50%); /* Adjust for vertical centering */
        border: none;
        background-color: #9f2b68;
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

    .productsList {
      display: flex;
      flex-direction: row;
      gap: 10px;
      margin-top: 15px;
      flex-wrap: nowrap;
      overflow-x: hidden; /* Make the product list scrollable */
      scroll-behavior: smooth; /* Smooth scrolling */

      .productWrapper {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        .image {
          width: 70px;
          height: 70px;
          position: relative;
          img {
            width: 100%;
            height: 100%;
            border-radius: 8px;
          }
        }
        .cta {
          height: 20px;
          width: 20px;
          border-radius: 8px;
          position: absolute;
          bottom: -5px; /* Position 5px from the bottom */
          right: -5px; /* Position 5px from the right */
          background-color: white; /* Add a background color if needed */
          display: flex;
          align-items: center;
          justify-content: center;
          color: #9f2b68; /* CTA text color */
          cursor: pointer;
        }
        .name {
          font-size: 13px;
          font-weight: 400;
          text-align: center;
          height: 45px;
        }
        .price {
          font-size: 15px;
          font-weight: 500;
          text-align: center;
        }
      }
    }
  }
`;
