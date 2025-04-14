import wishlistModel from "../../models/wishlist";

const wishlistViewRecipe = async(req,res)=>{
    try{
        const currentUser = req.userId

        const allRecipe = await wishlistModel.find({
            userId : currentUser
        }).populate("recipeId");

        res.json({
            data : allRecipe,
            success : true,
            error : false
        })

    }catch(err){
        res.json({
            message : err.message || err,
            error : true,
            success : false
        })
    }
}

module.exports =  wishlistViewRecipe