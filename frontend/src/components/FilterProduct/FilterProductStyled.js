import styled from "styled-components";

export const FilterProductStyled = styled.div`
  .filterProduct {
    display: flex;
    flex-direction: column;

    .header {
      font-size: 22px;
      font-weight: 500;
      margin-bottom: 15px;
      color: #9f2b68;
    }
    .productListing {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 5px;
      overflow-y: hidden;
    }
  }
`;
