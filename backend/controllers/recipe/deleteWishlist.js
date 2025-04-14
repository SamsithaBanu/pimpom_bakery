const wishlistModel = require("../../models/wishlist");

const deleteWishlistController = async(req,res)=>{
    try{
        const currentUserId = req.userId 
        const wishlistRecipeId = req?.body?._id

        const deleteRecipe = await wishlistModel.deleteOne({ _id : wishlistRecipeId})

        res.json({
            message : "Recipe deleted from wishlist successfully",
            data : deleteRecipe,
            error : false,
            success : true
        })

    }catch(err){
        res.json({
            message : err?.message || err,
            error : true,
            success : false
        })
    }
}

module.exports = deleteWishlistController