import uploadProductPermission from "../../helpers/permission";
import recipeModel from "../../models/recipeModel";

async function uploadRecipeController(req, res){
    try{
        const sessionUserId = req.userId;

        if(!uploadProductPermission(sessionUserId)){
            throw new Error("Permission denied");
        }
        const uploadProduct = new recipeModel(req.body);
        const saveProduct = await uploadProduct.save();

        res.status(201).json({
            message:'Recipe upload successfully',
            error: false,
            success: true,
        })
    }catch(err){
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false,
        })
    }
}
module.exports = uploadRecipeController;
