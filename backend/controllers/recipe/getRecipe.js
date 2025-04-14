const recipeModel = require("../../models/recipeModel");

const getRecipeController = async(req,res)=>{
    try{
        const allRecipe = await recipeModel.find().sort({ createdAt : -1 })

        res.json({
            message : "All Recipes",
            success : true,
            error : false,
            data : allRecipe
        })

    }catch(err){
        res.status(400).json({
            message : err.message || err,
            error : true,
            success : false
        })
    }

}

module.exports = getRecipeController