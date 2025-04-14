import React, { useState } from "react";
import { UploadRecipeStyled } from "./UploadRecipeStyled"; // Import the styled component
import { CgClose } from "react-icons/cg";
import { FaCloudUploadAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import productCatogery from "../../helpers/allCatogeries";
import SummaryApi from "../../common";
import { toast } from "react-toastify";
import dietaties from "../../helpers/allDiateries";
import uploadImage from "../../helpers/uploadImage";

const UploadRecipe = ({ onClose, fetchData }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    servings: 4,
    prepTime: "",
    cookTime: "",
    category: "",
    dietary: "",
    difficulty: "",
    ingredients: [{ name: "", quantity: "", unit: "" }],
    instructions: [""],
    images: [],
    equipments: [""],
  });

  console.log('diert',dietaties);
  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleIngredientChange = (index, e) => {
    const newIngredients = formData.ingredients.map((ingredient, i) => {
      if (i === index) {
        return { ...ingredient, [e.target.name]: e.target.value };
      }
      return ingredient;
    });
    setFormData({ ...formData, ingredients: newIngredients });
  };

  const handleAddIngredient = () => {
    setFormData({
      ...formData,
      ingredients: [
        ...formData.ingredients,
        { name: "", quantity: "", unit: "" },
      ],
    });
  };

  const handleRemoveIngredient = (index) => {
    const newIngredients = formData.ingredients.filter((_, i) => i !== index);
    setFormData({ ...formData, ingredients: newIngredients });
  };

  const handleInstructionChange = (index, e) => {
    const newInstructions = formData.instructions.map((instruction, i) => {
      if (i === index) {
        return e.target.value;
      }
      return instruction;
    });
    setFormData({ ...formData, instructions: newInstructions });
  };

  const handleAddInstruction = () => {
    setFormData({
      ...formData,
      instructions: [...formData.instructions, ""],
    });
  };

  const handleRemoveInstruction = (index) => {
    const newInstructions = formData.instructions.filter((_, i) => i !== index);
    setFormData({ ...formData, instructions: newInstructions });
  };

  // const handleImageUpload = (e) => {
  //   const files = Array.from(e.target.files);
  //   const imageUrls = files.map((file) => URL.createObjectURL(file));
  //   setFormData({
  //     ...formData,
  //     images: [...formData.images, ...imageUrls],
  //   });
  // };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const uploadImageCloudinary = await uploadImage(file);

    setFormData((preve) => {
      return {
        ...preve,
        images: [...preve.images, uploadImageCloudinary.url],
      };
    });
  };

  const handleRemoveImage = (index) => {
    const newImages = formData.images.filter((_, i) => i !== index);
    setFormData({ ...formData, images: newImages });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('form',formData);

    const response = await fetch(SummaryApi.uploadRecipe.url, {
      method: SummaryApi.uploadRecipe.method,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const responseData = await response.json();

    console.log('res',responseData)

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
    <UploadRecipeStyled>
      <div className="uploadRecipeWrapper">
        <div className="recipeWrapper">
          <div className="headerWrapper">
            <h2 className="heading">Upload Recipe</h2>
            <div className="closeIcon" onClick={onClose}>
              <CgClose />
            </div>
          </div>

          <form className="formWrapper" onSubmit={handleSubmit}>
            <label htmlFor="name">Recipe Name :</label>
            <input
              type="text"
              id="name"
              placeholder="Enter recipe name"
              name="name"
              value={formData.name}
              onChange={handleOnChange}
              className="p-2 boxWrapper"
              required
            />

            <label htmlFor="description" className="mt-3">
              Description :
            </label>
            <textarea
              className="h-28 textArea"
              placeholder="Enter recipe description"
              rows={3}
              name="description"
              value={formData.description}
              onChange={handleOnChange}
              required
            ></textarea>

            <label htmlFor="servings" className="mt-3">
              Servings :
            </label>
            <input
              type="number"
              id="servings"
              name="servings"
              value={formData.servings}
              onChange={handleOnChange}
              className="p-2 boxWrapper"
              required
            />

            <label htmlFor="prepTime" className="mt-3">
              Prep Time (minutes) :
            </label>
            <input
              type="number"
              id="prepTime"
              name="prepTime"
              value={formData.prepTime}
              onChange={handleOnChange}
              className="p-2 boxWrapper"
            />

            <label htmlFor="cookTime" className="mt-3">
              Cook Time (minutes) :
            </label>
            <input
              type="number"
              id="cookTime"
              name="cookTime"
              value={formData.cookTime}
              onChange={handleOnChange}
              className="p-2 boxWrapper"
            />
            <label htmlFor="category" className="mt-3">
              Dietary preference :
            </label>
            <select
              required
              type="text"
              id="dietary"
              value={formData.dietary}
              name="dietary"
              onChange={handleOnChange}
              className="p-2 boxWrapper"
            >
              <option value={""}>Select Dietary</option>
              {dietaties.map((el, index) => {
                return (
                  <option value={el.value} key={el.value + index}>
                    {el.label}
                  </option>
                );
              })}
            </select>
            <label htmlFor="category" className="mt-3">
              Category :
            </label>
            <select
              required
              type="text"
              id="category"
              value={formData.category}
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

            <label htmlFor="difficulty" className="mt-3">
              Difficulty :
            </label>
            <select
              id="difficulty"
              name="difficulty"
              value={formData.difficulty}
              onChange={handleOnChange}
              className="p-2 boxWrapper"
              required
            >
              <option value="">Select Difficulty</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
            <div className="array">
              <label htmlFor="ingredients" className="mt-3">
                Ingredients :
              </label>
              <button
                type="button"
                onClick={handleAddIngredient}
                className="mt-2 addButton"
              >
                Add
              </button>
            </div>

            {formData.ingredients.map((ingredient, index) => (
              <div key={index} className="ingredientGroup">
                <input
                  type="text"
                  name="name"
                  placeholder="Ingredient Name"
                  value={ingredient.name}
                  onChange={(e) => handleIngredientChange(index, e)}
                  className="p-2 boxWrapper ingredientField"
                  required
                />
                <input
                  type="number"
                  name="quantity"
                  placeholder="Quantity"
                  value={ingredient.quantity}
                  onChange={(e) => handleIngredientChange(index, e)}
                  className="p-2 boxWrapper ingredientField"
                  required
                />
                <input
                  type="text"
                  name="unit"
                  placeholder="Unit (e.g., grams, cups)"
                  value={ingredient.unit}
                  onChange={(e) => handleIngredientChange(index, e)}
                  className="p-2 boxWrapper ingredientField"
                  required
                />
                <button
                  type="button"
                  onClick={() => handleRemoveIngredient(index)}
                  className="deleteIcon"
                >
                  <MdDelete />
                </button>
              </div>
            ))}

            <div className="array">
              <label htmlFor="instructions" className="mt-3">
                Instructions :
              </label>
              <button
                type="button"
                onClick={handleAddInstruction}
                className="mt-2 addButton"
              >
                Add
              </button>
            </div>

            {formData.instructions.map((instruction, index) => (
              <div key={index} className="instructionGroup">
                <textarea
                  name="instruction"
                  placeholder={`Step ${index + 1}`}
                  value={instruction}
                  onChange={(e) => handleInstructionChange(index, e)}
                  className="textArea"
                  required
                />
                <button
                  type="button"
                  onClick={() => handleRemoveInstruction(index)}
                  className="deleteIcon"
                >
                  <MdDelete />
                </button>
              </div>
            ))}

            <label htmlFor="images" className="mt-3">
              Images :
            </label>
            <label htmlFor="uploadImageInput">
              <div className="p-2 imageUploadWrapper">
                <div className="imgWrapper">
                  <span className="cloudImage">
                    <FaCloudUploadAlt />
                  </span>
                  <p className="uploadText">Upload Recipe Images</p>
                  <input
                    type="file"
                    id="uploadImageInput"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                </div>
              </div>
            </label>
            {formData.images.length > 0 && (
              <div className="imagesShowWrapper">
                {formData.images.map((image, index) => (
                  <div key={index} className="imageShow">
                    <img
                      src={image}
                      alt={`Recipe Image ${index + 1}`}
                      width={80}
                      height={80}
                      className="imageProduct"
                    />
                    <div
                      className="deleteIcon"
                      onClick={() => handleRemoveImage(index)}
                    >
                      <MdDelete />
                    </div>
                  </div>
                ))}
              </div>
            )}
            <div className="array">
              <label htmlFor="equipments" className="mt-3">
                Equipments :
              </label>
              <button
                type="button"
                onClick={() =>
                  setFormData({
                    ...formData,
                    equipments: [...formData.equipments, ""],
                  })
                }
                className="mt-2 addButton"
              >
                Add
              </button>
            </div>
            {formData.equipments.map((equipment, index) => (
              <div key={index} className="equipmentGroup">
                <input
                  type="text"
                  name="equipments"
                  placeholder="e.g., Oven, Mixer"
                  value={equipment}
                  onChange={(e) => {
                    const newEquipments = formData.equipments.map((eq, i) =>
                      i === index ? e.target.value : eq
                    );
                    setFormData({ ...formData, equipments: newEquipments });
                  }}
                  className="p-2 boxWrapper equipmentField"
                />
                <button
                  type="button"
                  onClick={() => {
                    const newEquipments = formData.equipments.filter(
                      (_, i) => i !== index
                    );
                    setFormData({ ...formData, equipments: newEquipments });
                  }}
                  className="deleteIcon"
                >
                  <MdDelete />
                </button>
              </div>
            ))}
            <button type="submit" className="px-3 py-2 uploadRecipeBtn">
              Upload Recipe
            </button>
          </form>
        </div>
      </div>
    </UploadRecipeStyled>
  );
};

export default UploadRecipe;
