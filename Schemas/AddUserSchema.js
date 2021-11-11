const mongoose  = require('mongoose');


const AddUserSchema = new mongoose.Schema({
    id:{
        type:Number
    },
    email:{
        type:String,
        required:true
    },
    fullName:{
        type:String
        
    },
    role:{
        type:String,
        default:"user"
    },
    image:{
        type:String
    },
    phoneNumber:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now

    }

    




})

module.exports = AddUserSchema;