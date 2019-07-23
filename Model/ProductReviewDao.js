var mongoose = require("mongoose");

var Review= mongoose.Schema({
    UserId: String,
    Comment:String,
    Stars: Number
})

module.exports = mongoose.model("ProductReviewDao", Review);