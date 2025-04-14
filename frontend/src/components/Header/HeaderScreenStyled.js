import styled from "styled-components";

export const HeaderScreenStyled = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Roboto:wght@400;500&display=swap");

  body {
    margin: 0;
    padding: 0;
    font-family: "Poppins", sans-serif;
    background-color: #f5f7f8; /* Grey background */
  }

  .header {
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #9f2b68; /* Violet */
    padding: 15px 8%; /* Increased padding */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 1000;
  }

  .logo {
    display: flex;
    align-items: center;
  }

  .logo img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }

  .logo h1 {
    font-size: 24px;
    color: #ffffff; /* White text */
  }

  .nav ul {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .nav li {
    margin: 0 15px;
  }

  .nav a {
    text-decoration: none;
    color: #ffffff; /* White text */
    font-size: 18px;
    transition: color 0.3s;
  }

  .nav a:hover {
    color: #f5f7f8; /* Grey */
  }

  .header-right {
    display: flex;
    align-items: center;
  }

  .search-bar {
    display: flex;
    align-items: center;
    background-color: #ffffff; /* White background */
    border-radius: 8px;
    padding: 5px 10px; /* Reduced padding */
    margin-right: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .search-bar input {
    border: none;
    outline: none;
    padding: 5px 10px; /* Reduced padding */
    width: 200px; /* Width remains the same */
    border-radius: 20px;
    font-family: "Roboto", sans-serif;
    height: 30px; /* Set a fixed height */
  }

  .search-bar button {
    padding: 0px 15px; /* Reduced padding */
    border: none;
    border-radius: 8px;
    background-color: #9f2b68; /* Violet */
    color: #ffffff; /* White text */
    cursor: pointer;
    margin-left: 10px; /* Increased margin */
    transition: background-color 0.3s, color 0.3s;
    height: 30px; /* Set a fixed height */
  }

  .search-bar button:hover {
    background-color: #f5f7f8; /* Grey */
    color: #9f2b68; /* Violet */
  }

  .cart {
    display: flex;
    align-items: center;
    position: relative;
    margin-right: 20px;
  }

  .cart svg {
    width: 35px; /* Width remains the same */
    height: 35px; /* Height remains the same */
  }

  .cart-count {
    background-color: #ffffff; /* White background */
    color: #9f2b68; /* Violet */
    border-radius: 50%;
    padding: 0px 5px;
    font-size: 14px;
    position: absolute;
    top: -5px;
    right: -10px;
  }

  .login-button {
    padding: 10px 20px; /* Increased padding */
    border: none;
    border-radius: 20px;
    background-color: #9f2b68; /* Violet */
    color: #ffffff; /* White text */
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  }

  .login-button:hover {
    background-color: #f5f7f8; /* Grey */
    color: #9f2b68; /* Violet */
  }

  .main-content {
    padding-top: 100px; /* Add padding to avoid content being hidden behind the fixed header */
  }

  .admin-panel {
    position: absolute;
    top: 70px;
    right: 200px;
    background-color: #ffffff;
    // border: 1px solid #ccc;
    border-radius: 8px;
    padding: 5px;
    z-index: 1001;
    height: 40px;
  }

  .admin-panel nav {
    display: flex;
    flex-direction: column;
  }

  .admin-panel nav a {
    //padding: 5px 10px;
    text-decoration: none;
    color: #9f2b68;
    font-size: 16px;
  }

  .admin-panel nav a:hover {
    background-color: #f5f7f8;
  }
  .general-user {
    position: absolute;
    top: 70px;
    right: 304px;
    background-color: #ffffff;
    // border: 1px solid #ccc;
    border-radius: 8px;
    padding: 7px 15px 10px 15px;
    z-index: 1001;
    height: 40px;
  }
  .general-user nav {
    display: flex;
    flex-direction: column;
  }

  .general-user nav a {
    //padding: 5px 10px;
    text-decoration: none;
    color: #9f2b68;
    font-size: 16px;
  }

  .general-user nav a:hover {
    background-color: #f5f7f8;
  }
  @media print {
    .header {
      display: none;
    }
  }
`;
