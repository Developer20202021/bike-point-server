const mongoose = require('mongoose');



const ReviewsSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    reviewerDescription:{
        type:String
    },
    rating:{
        type:Number,
        required:true
    },
    reviewerImage:{
        type:String,
        required:true
    },
    reviewerImageDeleteUrl:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
}) 

module.exports = ReviewsSchema;