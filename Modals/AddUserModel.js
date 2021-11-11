const mongoose = require("mongoose");
const AddUserSchema = require("../Schemas/AddUserSchema");

const AddUserModel = mongoose.model("user",AddUserSchema);




module.exports = AddUserModel;