const recipeModel = require("../../models/recipeModel");
const userModel = require("../../models/userModel");

const uploadReviews = async (req, res) => {
    try {
        const { rating, content } = req.body;
        const userId = req.userId;

        console.log('userid',userId)
        // Fetch the user's details to get the name
        const user = await userModel.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const recipe = await recipeModel.findById(req.params.recipeId);
        if (!recipe) {
            return res.status(404).json({ message: "Recipe not found" });
        }

        // Create a new review object with the user's name
        const newReview = {
            user: userId,
            userName: user.name, // Include the user's name
            rating,
            content,
        };

        recipe.reviews.push(newReview);
        await recipe.save();

        res.status(201).json(recipe);
    } catch (error) {
        console.error("Error adding review:", error);
        res.status(500).json({ message: "Error adding review", error });
    }
};

module.exports = uploadReviews;
