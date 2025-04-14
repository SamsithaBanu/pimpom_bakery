import styled from "styled-components";

export const ProductListingStyled = styled.div`
  .productListingWrapper {
    display: flex;
    flex-direction: row;
    padding: 20px 12%;
    gap: 30px;
    background: #f5f7f8;
    .verticalWrapper {
      width: 17%;
    }
    .filterWrapper {
      width: 83%;
      margin-top:10px;
    }
  }
`;
