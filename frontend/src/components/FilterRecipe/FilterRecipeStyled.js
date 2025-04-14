import styled from "styled-components";

export const FilterRecipeStyled = styled.div`
  .filterRecipe {
    display: flex;
    flex-direction: column;

    .header {
      font-size: 22px;
      font-weight: 500;
      margin-bottom: 15px;
      color: #D95F59;
    }
    .recipeListing {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 15px;
      overflow-y: hidden;
    }
  }
`;