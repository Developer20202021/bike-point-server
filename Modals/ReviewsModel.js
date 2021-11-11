const mongoose = require('mongoose');
const ReviewsSchema = require('../Schemas/ReviewsSchema');



const ReviewsModal = mongoose.model('reviewer',ReviewsSchema);

module.exports = ReviewsModal;