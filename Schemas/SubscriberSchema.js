const mongoose = require('mongoose');

const SubscriberSchema = mongoose.Schema({
    SubscriberEmail:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = SubscriberSchema;