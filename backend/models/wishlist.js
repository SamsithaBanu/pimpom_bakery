const mongoose = require('mongoose')

const Wishlist = mongoose.Schema({
   recipeId : {
        ref : 'Recipe',
        type : String,
   },
   isWish : Boolean,
   userId : String,
},{
    timestamps : true
})


const wishlistModel = mongoose.model("wishlist",Wishlist)

module.exports = wishlistModel