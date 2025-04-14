import React, { useState } from "react";
import { MdModeEditOutline } from "react-icons/md";
import AdminEditProduct from "./AdminEditProduct";
import displayINRCurrency from "../helpers/displayCurrency";
import { AdminProductsStyled } from "./AdminProductsStyled";

const AdminProductCard = ({ data, fetchdata }) => {
  const [editProduct, setEditProduct] = useState(false);

  console.log("dlfks", data?.productImage[0]);

  return (
    <AdminProductsStyled>
      <div className="adminProductWrapper">
        <div className="imageWrapper">
          <img
            src={data?.productImage[0]}
            className="mx-auto object-fill h-full"
          />
        </div>
        <div className="productDetails">
          <div className="productName">
            {data.productName.substring(0, 20)}...
          </div>
          <div className="PriceWrapper">
            <div className="price">{displayINRCurrency(data.sellingPrice)}</div>
          </div>
          <div className="sellingPrice">
            saves upto {displayINRCurrency(data.price - data.sellingPrice)}
          </div>
          <div className="updateCTA" onClick={() => setEditProduct(true)}>
            <button className="px-3 py-2 uploadProductBtn">
              Update Product
            </button>
            <MdModeEditOutline />
          </div>
        </div>
        {editProduct && (
          <AdminEditProduct
            productData={data}
            onClose={() => setEditProduct(false)}
            fetchdata={fetchdata()}
          />
        )}
      </div>
    </AdminProductsStyled>
  );
};

export default AdminProductCard;
