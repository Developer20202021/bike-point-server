const mongoose = require('mongoose');
const SubscriberSchema = require('../Schemas/SubscriberSchema');

const SubscriberModel = mongoose.model('subscriber',SubscriberSchema);

module.exports = SubscriberModel;