import uploadProductPermission from "../helpers/permission";
import productModel from "../models/productModel";

async function uploadProductController(req, res){
    try{
        const sessionUserId = req.userId;

        if(!uploadProductPermission(sessionUserId)){
            throw new Error("Permission denied");
        }
        const uploadProduct = new productModels(req.body);
        const saveProduct = await uploadProduct.save();

        res.status(201).json({
            message:'Product upload successfully',
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
module.exports = uploadProductController;
