import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import productCatogery from "../../helpers/allCatogeries";
import { FaCloudUploadAlt } from "react-icons/fa";
// import uploadImage from "../helpers/uploadImage";
// import DisplayImage from "./DisplayImage";
import { MdDelete } from "react-icons/md";
import SummaryApi from "../../common";
import { toast } from "react-toastify";
import uploadImage from "../../helpers/uploadImage";
import DisplayImage from "../DisplayImage";
import { UploadProductStyled } from "./UploadProductStyled";

const UploadProductDup = ({ onClose, fetchData }) => {
  const [data, setData] = useState({
    productName: "",
    brandName: "",
    category: "",
    productImage: [],
    description: "",
    price: "",
    sellingPrice: "",
    isThereRecipe: false,
  });
  const [openFullScreenImage, setOpenFullScreenImage] = useState(false);
  const [fullScreenImage, setFullScreenImage] = useState("");

  const handleOnChange = (e) => {
    const { name, value, type, checked } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value, // Handle checkbox and other inputs
    }));
  };

  const handleUploadProduct = async (e) => {
    const file = e.target.files[0];
    const uploadImageCloudinary = await uploadImage(file);

    setData((preve) => {
      return {
        ...preve,
        productImage: [...preve.productImage, uploadImageCloudinary.url],
      };
    });
  };

  const handleDeleteProductImage = async (index) => {

    const newProductImage = [...data.productImage];
    newProductImage.splice(index, 1);

    setData((preve) => {
      return {
        ...preve,
        productImage: [...newProductImage],
      };
    });
  };

  {
    /**upload product */
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(SummaryApi.uploadProduct.url, {
      method: SummaryApi.uploadProduct.method,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();

    if (responseData.success) {
      toast.success(responseData?.message);
      onClose();
      fetchData();
    }

    if (responseData.error) {
      toast.error(responseData?.message);
    }
  };

  return (
    <UploadProductStyled>
      <div className="uploadProductWrapper">
        <div className="productWrapper">
          <div className="headerWrapper">
            <h2 className="heading">Upload Product</h2>
            <div className="closeIcon" onClick={onClose}>
              <CgClose />
            </div>
          </div>

          <form className="formWrapper" onSubmit={handleSubmit}>
            <label htmlFor="productName">Product Name :</label>
            <input
              type="text"
              id="productName"
              placeholder="enter product name"
              name="productName"
              value={data.productName}
              onChange={handleOnChange}
              className="p-2 boxWrapper"
              required
            />

            <label htmlFor="brandName" className="mt-3">
              Brand Name :
            </label>
            <input
              type="text"
              id="brandName"
              placeholder="enter brand name"
              value={data.brandName}
              name="brandName"
              onChange={handleOnChange}
              className="p-2 boxWrapper"
              required
            />

            <label htmlFor="category" className="mt-3">
              Category :
            </label>
            <select
              required
              value={data.category}
              name="category"
              onChange={handleOnChange}
              className="p-2 boxWrapper"
            >
              <option value={""}>Select Category</option>
              {productCatogery.map((el, index) => {
                return (
                  <option value={el.value} key={el.value + index}>
                    {el.label}
                  </option>
                );
              })}
            </select>

            <label htmlFor="productImage" className="mt-3">
              Product Image :
            </label>
            <label htmlFor="uploadImageInput">
              <div className="p-2 imageUploadWrapper">
                <div className="imgWrapper">
                  <span className="cloudImage">
                    <FaCloudUploadAlt />
                  </span>
                  <p className="uploadText">Upload Product Image</p>
                  <input
                    type="file"
                    id="uploadImageInput"
                    className="hidden"
                    onChange={handleUploadProduct}
                  />
                </div>
              </div>
            </label>
            <div>
              {data?.productImage[0] ? (
                <div className="imagesShowWrapper">
                  {data.productImage.map((el, index) => {
                    return (
                      <div className="imageShow">
                        <img
                          src={el}
                          alt={el}
                          width={80}
                          height={80}
                          className="imageProduct"
                          onClick={() => {
                            setOpenFullScreenImage(true);
                            setFullScreenImage(el);
                          }}
                        />

                        <div
                          className="deleteIcon"
                          onClick={() => handleDeleteProductImage(index)}
                        >
                          <MdDelete />
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <p className="text-red-600 text-xs">
                  *Please upload product image
                </p>
              )}
            </div>

            <label htmlFor="price" className="mt-3">
              Price :
            </label>
            <input
              type="number"
              id="price"
              placeholder="enter price"
              value={data.price}
              name="price"
              onChange={handleOnChange}
              className="p-2 boxWrapper"
              required
            />

            <label htmlFor="sellingPrice" className="mt-3">
              Selling Price :
            </label>
            <input
              type="number"
              id="sellingPrice"
              placeholder="enter selling price"
              value={data.sellingPrice}
              name="sellingPrice"
              onChange={handleOnChange}
              className="p-2 boxWrapper"
              required
            />
            <label htmlFor="isThereRecipe" className="mt-3">
              Is There a Recipe?
            </label>
            <input
              type="checkbox"
              id="isThereRecipe"
              name="isThereRecipe"
              checked={data.isThereRecipe}
              onChange={handleOnChange}
              className="p-2 bg-slate-100 border rounded"
            />

            <label htmlFor="description" className="mt-3">
              Description :
            </label>
            <textarea
              className="h-28 textArea"
              placeholder="enter product description"
              rows={3}
              onChange={handleOnChange}
              name="description"
              value={data.description}
            ></textarea>

            <button className="px-3 py-2 uploadProductBtn">
              Upload Product
            </button>
          </form>
        </div>

        {/***display image full screen */}
        {openFullScreenImage && (
          <DisplayImage
            onClose={() => setOpenFullScreenImage(false)}
            imgUrl={fullScreenImage}
          />
        )}
      </div>
    </UploadProductStyled>
  );
};

export default UploadProductDup;
