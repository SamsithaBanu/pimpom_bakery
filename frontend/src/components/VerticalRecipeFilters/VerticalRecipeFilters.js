// VerticalRecipeFilters.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import productCatogery from "../../helpers/allCatogeries";
import { VerticalRecipeFiltersStyled } from "./VerticalRecipeFiltersStyled";

const VerticalRecipeFilters = ({ data, updateProductList, clearFilters, isFromAllProducts }) => {
  const [activeFilter, setActiveFilter] = useState({
    sortBy: "",
    alphabeticalOrder: "",
    newArrivals: "",
  });
  const navigate = useNavigate();

  const [selectCategory, setSelectCategory] = useState({});
  const [filterCategoryList, setFilterCategoryList] = useState([]);
  const [filteredData, setFilteredData] = useState([...data]);

  const handleSelectCategory = (e) => {
    const { value, checked } = e.target;
    setSelectCategory((prev) => ({
      ...prev,
      [value]: checked,
    }));
  };

  const [difficulty, setDifficulty] = useState(""); // For difficulty level radio buttons
  const [preparationTime, setPreparationTime] = useState(""); // For preparation time radio buttons
  const [ingredients, setIngredients] = useState([]); // For ingredients checkboxes

  // Handler for radio buttons
  const handleDifficultyChange = (e) => {
    setDifficulty(e.target.value);
  };

  const handlePreparationTimeChange = (e) => {
    setPreparationTime(e.target.value);
  };

  // Handler for checkboxes
  const handleIngredientChange = (e) => {
    const { value } = e.target;
    setIngredients((prev) =>
      prev.includes(value)
        ? prev.filter((ingredient) => ingredient !== value) // Remove if already selected
        : [...prev, value] // Add if not selected
    );
  };

//   const clearFilters = () => {
//     setActiveFilter({
//       sortBy: "",
//       alphabeticalOrder: "",
//       newArrivals: "",
//     });
//     setSelectCategory({});
//     setFilterCategoryList([]);
//     setFilteredData([...clearData]);
//     updateProductList(clearData); // Reset to the original data to show all products
//   };

useEffect(() => {
    const selectedCategories = Object.keys(selectCategory).filter(
      (key) => selectCategory[key]
    );

    setFilterCategoryList(selectedCategories);

    const urlParams = selectedCategories
      .map((category) => `category=${category}`)
      .join("&");
      if(isFromAllProducts){
        navigate("/recipe-listing?" + urlParams);
      }
  }, [selectCategory]);
  
    const handleClearClick = () => {
      setDifficulty('');
      setIngredients('');
      setPreparationTime('');
      setSelectCategory({});
      setFilterCategoryList([]);
      clearFilters(); // Call the clearFilters prop method
    };

  useEffect(() => {
    let filtered = [...data];
  
    // Filter by categories
    if (filterCategoryList.length > 0) {
      filtered = filtered.filter(item => filterCategoryList.includes(item.category));
    }
  
    // Filter by difficulty
    if (difficulty) {
      filtered = filtered.filter(item => item.difficulty === difficulty);
    }
  
    // Filter by preparation time
    if (preparationTime) {
        if (preparationTime === '30_60') {
            filtered = filtered.filter(
                item => item?.prepTime + item?.cookTime >= 30 && item?.prepTime + item?.cookTime < 60
            );
        } else if (preparationTime === 'under_30') {
            filtered = filtered.filter(
                item => item?.prepTime + item?.cookTime < 30
            );
        } else if (preparationTime === 'over_60') {
            filtered = filtered.filter(
                item => item?.prepTime + item?.cookTime > 60
            );
        }
    }
      // Apply your logic based on the preparation time
    
  
    // Filter by ingredients
    if (ingredients.length > 0) {
        filtered = filtered.filter(item =>
            ingredients.every(ing =>
                item.ingredients.some(i => i.name.toLowerCase() === ing.toLowerCase())
            )
        );
    }    
  
    setFilteredData(filtered);
    updateProductList(filtered);
  
  }, [filterCategoryList, difficulty, preparationTime, ingredients]);

  return (
    <VerticalRecipeFiltersStyled>
      <div className="verticalFilterWrapper">
        <div className="sortByWrapper">
          <div className="header">SORT BY</div>

          <form className="sortBy">
            <div className="head">Difficulty Level</div>
            <div className="itemWrapper">
              <input
                type="radio"
                value="easy"
                checked={difficulty === "easy"}
                onChange={handleDifficultyChange}
              />
              <label className="label">Easy</label>
            </div>
            <div className="itemWrapper">
              <input
                type="radio"
                value="medium"
                checked={difficulty === "medium"}
                onChange={handleDifficultyChange}
              />
              <label className="label">Medium</label>
            </div>
            <div className="itemWrapper">
              <input
                type="radio"
                value="hard"
                checked={difficulty === "hard"}
                onChange={handleDifficultyChange}
              />
              <label className="label">High</label>
            </div>
          </form>

          <form className="sortBy2">
            <div className="head">Preparation Time</div>
            <div className="itemWrapper">
              <input
                type="radio"
                value="under_30"
                checked={preparationTime === "under_30"}
                onChange={handlePreparationTimeChange}
              />
              <label className="label">Under 30 minutes</label>
            </div>
            <div className="itemWrapper">
              <input
                type="radio"
                value="30_60"
                checked={preparationTime === "30_60"}
                onChange={handlePreparationTimeChange}
              />
              <label className="label">30-60 minutes</label>
            </div>
            <div className="itemWrapper">
              <input
                type="radio"
                value="over_60"
                checked={preparationTime === "over_60"}
                onChange={handlePreparationTimeChange}
              />
              <label className="label">Over 60 minutes</label>
            </div>
          </form>

          <form className="sortBy3">
            <div className="head">Ingredients</div>
            <div className="itemWrapper">
              <input
                type="checkbox"
                value="chocolate"
                checked={ingredients.includes("chocolate")}
                onChange={handleIngredientChange}
              />
              <label className="label">Chocolate</label>
            </div>
            <div className="itemWrapper">
              <input
                type="checkbox"
                value="flour"
                checked={ingredients.includes("flour")}
                onChange={handleIngredientChange}
              />
              <label className="label">Flour</label>
            </div>
            <div className="itemWrapper">
              <input
                type="checkbox"
                value="egg"
                checked={ingredients.includes("egg")}
                onChange={handleIngredientChange}
              />
              <label className="label">Egg</label>
            </div>
            <div className="itemWrapper">
              <input
                type="checkbox"
                value="brown sugar"
                checked={ingredients.includes("brown sugar")}
                onChange={handleIngredientChange}
              />
              <label className="label">Brown Sugar</label>
            </div>
            <div className="itemWrapper">
              <input
                type="checkbox"
                value="sugar"
                checked={ingredients.includes("sugar")}
                onChange={handleIngredientChange}
              />
              <label className="label">Sugar</label>
            </div>
            <div className="itemWrapper">
              <input
                type="checkbox"
                value="butter"
                checked={ingredients.includes("butter")}
                onChange={handleIngredientChange}
              />
              <label className="label">Butter</label>
            </div>
            <div className="itemWrapper">
              <input
                type="checkbox"
                value="berries"
                checked={ingredients.includes("berries")}
                onChange={handleIngredientChange}
              />
              <label className="label">Berries</label>
            </div>
            <div className="itemWrapper">
              <input
                type="checkbox"
                value="nuts"
                checked={ingredients.includes("nuts")}
                onChange={handleIngredientChange}
              />
              <label className="label">Nuts</label>
            </div>
            <div className="itemWrapper">
              <input
                type="checkbox"
                value="spices"
                checked={ingredients.includes("spices")}
                onChange={handleIngredientChange}
              />
              <label className="label">Spices (e.g., Cinnamon, Nutmeg)</label>
            </div>
          </form>

          {isFromAllProducts && (
            <div className="sortByWrapper">
              <div className="header">Category</div>
              <form className="sortBy3">
                {productCatogery.map((categoryName, index) => (
                  <div className="itemWrapper" key={index}>
                    <input
                      type="checkbox"
                      name="category"
                      checked={selectCategory[categoryName?.value]}
                      value={categoryName?.value}
                      id={categoryName?.value}
                      onChange={handleSelectCategory}
                    />
                    <label htmlFor={categoryName?.value} className="label">
                      {categoryName?.label}
                    </label>
                  </div>
                ))}
              </form>
            </div>
          )}
          <button onClick={handleClearClick} className="clear">
            Clear Filters
          </button>
        </div>
      </div>
    </VerticalRecipeFiltersStyled>
  );
};

export default VerticalRecipeFilters;
