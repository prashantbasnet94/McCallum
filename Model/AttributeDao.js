var mongoose = require("mongoose");

var Attributes= mongoose.Schema({
    Color: String,
    Dimension:String,
    Weight: String
})

module.exports = mongoose.model("AttributeDao", Attributes);