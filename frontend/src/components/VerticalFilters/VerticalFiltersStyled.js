import styled from "styled-components";

export const VerticalFiltersStyled = styled.div`
  .verticalFilterWrapper {
    border: 2px solid #f5f7f8;
    box-shadow: 0 2px 4px #fff;
    border-radius: 8px;
    // padding: 10px;
    background: #fff;
    .sortByWrapper {
      .header {
        font-size: 18px;
        font-weight: 600;
        border-bottom: 2px solid #f5f7f8;
        padding: 10px 10px;
        color: #9f2b68;
      }
        
      .sortBy {
        padding: 5px 0px;
        border-bottom: 2px solid #f5f7f8;
        .itemWrapper {
          padding: 10px;
          font-size: 16px;
          font-weight: 400;
          .label{
          margin-left: 5px;
          }
        }
      }
      .sortBy2 {
        padding: 5px 0px;
        border-bottom: 2px solid #f5f7f8;
        .itemWrapper {
          padding: 10px;
          font-size: 16px;
          font-weight: 400;
          .label{
          margin-left: 5px;
          }
        }
          
      }
      .sortBy3 {
        padding: 5px 0px;
        border-bottom: 2px solid #f5f7f8;
        .itemWrapper {
          padding: 10px;
          font-size: 16px;
          font-weight: 400;
          .label{
          margin-left: 5px;
          }
        }
      }
        .clear{
        font-size: 17px; 
        font-weight:400;
        margin: 15px;
        padding: 8px 5px;
        color: white;
        border-radius: 8px;
        background: #9f2b68;
        width: 160px;
        }
    }
  }
`;
