const mongoose = require('mongoose')

const ingredientSchema = mongoose.Schema({
  name: String,
  quantity: Number,
  unit: String,
});

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

const recipeSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    servings: { type: Number, required: true, default: 4 },
    prepTime: Number,
    cookTime: Number,
    category: { type: String, required: true },
    dietary: { type: String, required: true },
    difficulty: {
      type: String,
      enum: ["easy", "medium", "hard"],
      required: true,
    },
    ingredients: [ingredientSchema],
    instructions: [String],
    images: [String],
    equipments: [String],
    reviews: [reviewSchema],
  },
  {
    timestamps: true,
  }
);

const recipeModel = mongoose.model("Recipe", recipeSchema);

module.exports = recipeModel;
