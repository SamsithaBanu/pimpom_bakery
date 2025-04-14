import React, { useState, useEffect } from "react";
import { AdminPanelStyled } from "./AdminPanelStyled";
import UploadProductDup from "../../components/UploadProduct/UploadProductDup";
import SummaryApi from "../../common";
import AdminProductCard from "../../components/AdminProductCard";

const AllProductDup = () => {
  const [openUploadProduct, setOpenUploadProduct] = useState(false);
  const [allProduct, setAllProduct] = useState([]);

  const fetchAllProduct = async () => {
    const response = await fetch(SummaryApi.allProduct.url);
    const dataResponse = await response.json();

    setAllProduct(dataResponse?.data || []);
  };

  useEffect(() => {
    fetchAllProduct();
  }, []);

  return (
    <AdminPanelStyled>
      <div className="allProductsWrapper">
        <div className="productHeader">All Products</div>
        <button
          className="uploadProductCTA"
          onClick={() => setOpenUploadProduct(true)}
        >
          Upload Product
        </button>
      </div>
      {/**all product */}
      <div className="productsWrapper">
        {allProduct?.map((product, index) => {
          return (
            <AdminProductCard
              data={product}
              key={index + "allProduct"}
              fetchdata={fetchAllProduct}
            />
          );
        })}
      </div>
      {openUploadProduct && (
        <UploadProductDup
          onClose={() => setOpenUploadProduct(false)}
          fetchData={fetchAllProduct}
        />
      )}
    </AdminPanelStyled>
  );
};

export default AllProductDup;
