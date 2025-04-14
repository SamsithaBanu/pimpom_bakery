import styled from "styled-components";

export const RecipeListingStyled = styled.div`
  .RecipeListingWrapper {
    display: flex;
    flex-direction: row;
    padding: 20px 7%;
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