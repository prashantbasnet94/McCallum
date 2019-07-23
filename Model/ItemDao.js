var mongoose = require("mongoose");


var Item= mongoose.Schema({
    Name: String,
    Label:String,
    Image: String,
    Category: String,
    Model: String,
    ShortDescription: String,
    Description:String,
    Stock: Boolean,
    Date: String,
    Attributes: String,
    ProductReview: String
})

module.exports = mongoose.model("Item", Item);


