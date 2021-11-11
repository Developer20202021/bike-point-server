const mongoose = require('mongoose');
const ProductSchema = require('../Schemas/ProductSchema');


const ProductModal = mongoose.model('product', ProductSchema);

module.exports = ProductModal;