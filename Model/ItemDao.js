var mongoose = require("mongoose");

var Item= mongoose.Schema({
    Name: String,
    Price:String,
    Description:String
})

module.exports = mongoose.model("Item", Item);


