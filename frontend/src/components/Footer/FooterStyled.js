import styled from "styled-components";

export const FooterStyled = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-size: 13px;
  letter-spacing: 0.7px;
  color: grey;
  font-family: sans-serif;
  font-weight: 400;
  .callWrapper {
    display: flex;
    flex-direction: row;
    gap: 4px;
    justify-content: center;
    align-items: center;
    .call {
      cursor: pointer;
    }
  }
`;
