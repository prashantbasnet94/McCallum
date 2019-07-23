//importing express library
var express = require('express');

//library to deal with files and folders
var path        =         require('path'),
    mongoose    =         require("mongoose"),
    Item        =         require("./Model/ItemDao"),
    Product        =         require("./Model/ProductReviewDao"),
    Attribute        =         require("./Model/AttributeDao"),

    bodyParser = require('body-parser');

//using express that we have imported
var app = express();


//setting the directory where we can find views
app.set('views', path.join(__dirname, 'views'));

//ejs is used as engine template for rendering view instead of html
app.set('view engine', 'ejs');


//to use in json format
app.use(bodyParser.json());

// app.use(bodyParser.urlencoded({
//     extended: true
// }));

//for making data binding in easier form
app.use(express.urlencoded({ extended: false }));

//this is used as root directory for static files
app.use(express.static(path.join(__dirname, 'public')));


mongoose.connect("mongodb+srv://prashantbasnet:prashant.basnet@cluster0-lhfyg.mongodb.net/test?retryWrites=true&w=majority");
//module.exports = app;


//get request for "/" is handled here
app.get("/",function (req,res) {

// P.create({
//
// });
// A.create({
//
// });
  res.send("prashant");
});

app.get("/addProduct",function (req,res) {
    res.render("form.ejs");
})
app.post("/addProductJson",function (req,res) {

    var data=req.body;

   Attribute.create({
        Color: data.Name,
        Dimension:data.Name,
        Weight: data.Name
    },function (err,attribute) {
       if (err) {
           console.log(err);
       }

    Product.create({
        UserId: data.Name,
        Comment:data.Name,
        Stars: 5
    },function (err,product) {
        if(err){
            console.log(err);
        }

    Item.create({
        Name: data.Name,
        Label:data.Name,
        Image: data.Name,
        Category: data.Name,
        Model: data.Name,
        ShortDescription: data.Description,
        Description:data.Description,
        Stock: true,
        Date: data.Name,
        Attributes: attribute._id,
        ProductReview: product._id
  },function (err,save) {
    if(err){
      console.log(err);
    }else{
      console.log("success");
    }

  })
   });
   });

Attribute.findById("5d3680d4f149bd2c40befe39", function(err, value){
    console.log(value);
});
    res.send("Data inserted into backend")
});

app.get("/getAllProduct",function (req,res) {
    Item.find({},function (err,value) {
        if(err){
            console.log(err);
        }
        res.send(value);
    })

})

//listening in port number 4000;
app.listen("5000");
