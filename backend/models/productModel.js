import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
  {
    userId: String,
    userName: String,
    rating: { type: Number, required: true, min: 1, max: 5 },
    content: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const productSchema = mongoose.Schema(
  {
    productName: String,
    brandName: String,
    category: String,
    productImage: [],
    description: String,
    price: Number,
    sellingPrice: Number,
    isThereRecipe: Boolean,
    reviews: [reviewSchema],
  },
  {
    timestamps: true,
  }
);
const productModel = mongoose.model("product", productSchema);

module.exports = productModel;
