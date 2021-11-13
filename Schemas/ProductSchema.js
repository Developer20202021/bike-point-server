const mongoose = require('mongoose');



const ProductSchema = new mongoose.Schema({
    // id:{
    //     type:Number,
        
    // },
    productName:{
        type:String,
        required:true
    },
    productPrice:{
        type:Number,
        required:true
    },
    productQuality:{
        type:String
    },
    productDescription:{
        type:String
    },
    rating:{
        type:Number,
        required:true
    },
    productImage:{
        type:String,
        required:true
    },
    productImageDeleteUrl:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
}) 

module.exports = ProductSchema;