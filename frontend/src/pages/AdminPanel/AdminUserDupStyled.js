import styled from "styled-components";

export const AllUserDupStyled = styled.div`
.tableWrapper{
    padding: 20px 60px;
    // background: white;
    
    .table{
        box-shadow: 0 2px 4px #9f2b68;
        border-radius: 8px;
        width: 100%;
    }

    .heading{
        font-weight: 600;
        margin-bottom: 20px;
        font-size: 25px;
    }

    thead{
        background: #9f2b68;
        font-weight: 600;
        font-size: 20px;
        // justify-content: space-between;
    }
    tbody{
        .edit{
            // background: green;

            .editIcon{
                color: green;
                height: 30px;
                width: 30px;
            }
        }
    }
    td{
        padding: 20px;
        text-align: center;
        font-size: 18px;
        line-height: 21px;
    }
}
`;