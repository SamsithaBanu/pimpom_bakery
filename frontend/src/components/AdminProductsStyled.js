import styled from "styled-components";

export const AdminProductsStyled = styled.div`
.adminProductWrapper{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 250px;
    height: 420px;
    // border: 2px solid #9f2b68;
    padding: 6px 10px;
    // border-radius: 8px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Soft shadow for depth */

    /* Background and colors */
    background-color: #ffffff; /* White background */
    border: 1px solid #e0e0e0; /* Light gray border */

    .imageWrapper{
        display: flex;
        width: 230px;
        height: 220px;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        
        img{
            border-radius: 8px;  
            width: 230px;
            height: 220px;
        }
    }
    .productDetails{
        display: flex;
        flex-direction: column;
        margin-top: 5px;

        .productName{
            font-size: 20px;
            font-weight: 500;
            text-align: left;
        }
        .PriceWrapper{
            display: flex;
            justify-content: space-between;
            margin-top: 15px;
            .price{
                font-size: 20px;
                font-weight: 500;
            }
           
        }
        .sellingPrice{
            font-size: 19px;
            color: green;
        }
        .updateCTA{
            display: flex;
            flex-direction: row;
            height: 45px;
            font-size: 18px;
            padding: 5px;
            justify-content: space-between;
            background: #9f2b68;
                    color: white;
                    margin-bottom: 10px;
                    border-radius: 8px;
                    margin-top: 20px;
                    align-items: center;
        }
    }
}
`;