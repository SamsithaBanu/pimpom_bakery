import styled from "styled-components";

export const ContactUsStyled = styled.div`
/* Sidebar.css */
.sidebar {
  position: fixed;
  top: 0;
  right: -350px; /* Sidebar is hidden initially */
  width: 350px;
  height: 100%;
  background-color: #ffffff;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.3);
  transition: right 0.3s ease;
  z-index: 1000;
  padding:15px;
  color: black;
}

.sidebar.open {
  right: 0;
}

.header{
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
color: black;
padding-bottom: 15px;
border-bottom: 2px solid #f5f7f8;
.contact{
font-size: 20px;
font-weight: 500;
}
.close-btn {
  background: none;
  border: none;
  font-size: 17px;
  cursor: pointer;
  color: black;
  margin-right: 15px;
}
}
 .email {
      display: flex;
      flex-direction: column;
      margin-top: 20px;
      font-size: 15px;
      line-height: 18px;

      .inputemail {
        height: 40px;
        border-radius: 8px;
        margin-top: 10px;
        padding: 10px;
        border: 1px solid #9f2b68;
      }
        .inputmail{
        height: 90px;
        border-radius: 8px;
        margin-top: 10px;
        padding: 10px;
        border: 1px solid #9f2b68;
        }
}

.buttonCta {
      background: #9f2b68;
      padding: 10px;
      text-align: center;
      margin-top: 25px;
      border-radius: 8px;
      width: 100%;
      cursor: pointer;
      color: #fff;
    }

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 999;
  pointer-events: none;
}

.backdrop.active {
  opacity: 1;
  pointer-events: auto;
}

.open-btn {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1100;
}

`;