const mongoose = require("mongoose");

const Schema = new mongoose.Schema({

    productName:{
        type:String,
        required:true
    },
    productDecription:{
        type:String
    },

    productPrice:{
        type:Number,
        required:true
    },
    productQuantity:{
        type:Number,
        required:true
    },
    productImage:{
        type:String,
    },
    username:{
        type: mongoose.Schema.types.objectId,
        ref:"User"
    }
})


module.exports = mongoose.model("Product", Schema)