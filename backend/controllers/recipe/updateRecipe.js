import uploadProductPermission from '../../helpers/permission';
import recipeModel from '../../models/recipeModel';

async function updateRecipeController(req, res) {
    try {
        // Check user permissions
        const hasPermission = await uploadProductPermission(req.userId);
        if (!hasPermission) {
            return res.status(403).json({
                message: "Permission denied",
                error: true,
                success: false
            });
        }

        // Destructure the request body
        const { _id, ...resBody } = req.body;

        // Ensure _id is provided
        if (!_id) {
            return res.status(400).json({
                message: "Recipe ID is required",
                error: true,
                success: false
            });
        }

        // Update the recipe by ID and return the updated document
        const updatedRecipe = await recipeModel.findByIdAndUpdate(_id, resBody, { new: true });

        if (!updatedRecipe) {
            return res.status(404).json({
                message: "Recipe not found",
                error: true,
                success: false
            });
        }

        // Respond with success
        res.json({
            message: "Recipe updated successfully",
            data: updatedRecipe,
            success: true,
            error: false
        });

    } catch (err) {
        // Log the error for debugging
        console.error("Error updating recipe:", err);

        // Handle errors
        res.status(400).json({
            message: err.message || "An error occurred",
            error: true,
            success: false
        });
    }
}

module.exports = updateRecipeController;
