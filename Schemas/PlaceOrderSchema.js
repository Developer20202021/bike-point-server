const mongoose = require('mongoose');


const PlaceOrderSchema = new mongoose.Schema({
    id:{
        type:Number,
    },
    month:{
        type:String
    },

    address:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
       
    },
    phoneNumber:{
        type:Number,
        required:true
    },

    fullname:{
        type:String,
        required:true
    },
    productCount:{
        type:Number
    },
    productPrice:{
        type:Number
    },
    productImage:{
        type:String
    },
    productName:{
        type:String
    },
    status:{
        type:String,
        default:'Pending'
    },
    date:{
        type:Date,
        default:Date.now
    }



})


module.exports = PlaceOrderSchema;