const mongoose = require('mongoose');
const PlaceOrderSchema = require('../Schemas/PlaceOrderSchema');


const PlaceOrderModel = mongoose.model('Orders',PlaceOrderSchema);


module.exports = PlaceOrderModel;