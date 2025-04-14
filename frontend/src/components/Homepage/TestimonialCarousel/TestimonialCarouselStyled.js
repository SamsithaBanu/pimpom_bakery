import styled from "styled-components";

export const TestimonialCarouselStyled = styled.div`
  .carousel-container {
    position: relative;
    width: 60%;
    height: 300px;
    margin: 70px auto 120px auto;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .rotating-background {
    position: absolute;
    top: -20px;
    left: -27px;
    width: 105%;
    height: 340px;
    background: #9f2b68;
    z-index: -1;
    //transform: rotate(0deg);
    //animation: rotateBackground 10s linear infinite;
    border-radius: 20px; /* Circle shape */
    rotate: -5deg;
  }

  @keyframes rotateBackground {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .testimonial-card {
    padding: 20px;
    text-align: center;
    background-color: #ffffff;
    position: relative;
    z-index: 1; /* Keeps it above the rotating background */
  }

  .testimonial-image {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-bottom: 15px;
  }

  .testimonial-comment {
    font-style: italic;
    margin-bottom: 10px;
  }

  .testimonial-name {
    font-weight: bold;
    color: #333;
  }

  /* Slick Dots Styling */
  .slick-dots{
  bottom:-125px;
  }
  .slick-dots li button:before {
    color: #333; /* Dot color */
  }
`;
