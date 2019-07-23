//importing express library
var express = require('express');

//library to deal with files and folders
var path        =         require('path'),
    mongoose    =         require("mongoose"),
    Item        =         require("./Model/ItemDao"),
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


  res.send("prashant");
});

app.get("/addProduct",function (req,res) {
    res.render("form.ejs");
})
app.post("/addProductJson",function (req,res) {

    var data=req.body;
    Item.create({
    Name: data.Name,
    Price:data.Price,
    Description:data.Description
  },function (err,save) {
    if(err){
      console.log(err);
    }else{
      console.log("success");
    }

  })

    res.send("Data inserted into backend")
})

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
