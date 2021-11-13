const mongoose  = require('mongoose');


const AddUserSchema = new mongoose.Schema({
   
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
    
   
    date:{
        type:Date,
        default:Date.now

    }

    




})

module.exports = AddUserSchema;