import styled from "styled-components";

export const AdminPanelStyled = styled.div`
  .allProductsWrapper {
    display: flex;
    flex-direction: row;
    padding: 20px 60px;
    justify-content: space-between;

    .productHeader {
      font-weight: 600;
      margin-bottom: 20px;
      font-size: 25px;
    }
    .uploadProductCTA {
      background:white;
      padding: 0px 15px;
      height:45px;
      border: 2px solid #9f2b68;
      border-radius: 25px;
    }
    .uploadProductCTA:hover {
      background: #9f2b68;
      border: 1px solid white;
    }
  }
  .productsWrapper{
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 18px;
    padding: 10px 55px;
    overflow-y: scroll;
  }
`;
