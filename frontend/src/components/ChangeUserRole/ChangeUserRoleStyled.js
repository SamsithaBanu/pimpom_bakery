import styled from "styled-components";

export const ChangeUserRoleStyled = styled.div`
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
  z-index: 9999; /* Ensure it is on top */

  .changeUserWrapper {
    box-shadow: 0 2px 4px #facbea;
    background: white;
    border-radius: 8px;
    width: 350px;
    overflow: auto; /* Scroll content if it overflows */

    .headerWrapper {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 20px;
      border-bottom: 1px solid #9f2b68;

      .head {
        font-size: 20px;
        font-weight: 600;
      }
      .closebutton {
        .closeIcon {
          height: 20px;
          width: 20px;
        }
      }
    }
    .bodyContent {
      padding: 20px;
      .nameWrapper {
        display: flex;
        flex-direction: row;
        gap: 10px;
        margin-bottom: 10px;
        font-size: 18px;
        .nameLable {
          font-weight: 600;
        }
      }
      .emailWrapper {
        display: flex;
        flex-direction: row;
        gap: 10px;
        margin-bottom: 15px;
        font-size: 18px;
        .emailLabel {
          font-weight: 600;
        }
      }
      .roleWrapper {
        display: flex;
        flex-direction: row;
        gap: 20px;
        margin-bottom: 15px;
        font-size: 18px;

        .role {
          font-weight: 600;
        }
      }
      .changeRole {
        background: #9f2b68;
        padding: 8px 15px;
        border-radius: 8px;
        width: 100%;
      }
      .changeRole:hover {
        background: #facbea;
      }
    }
  }
`;
