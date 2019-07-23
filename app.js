//importing express library
var express = require('express');

//library to deal with files and folders
var path        =         require('path'),
    mongoose    =         require("mongoose"),
    Item        =         require("./Model/ItemDao");
//using express that we have imported
var app = express();


//setting the directory where we can find views
app.set('views', path.join(__dirname, 'views'));

//ejs is used as engine template for rendering view instead of html
app.set('view engine', 'ejs');


//to use in json format
app.use(express.json());

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

app.post("/addProduct",function (req,res) {

    Item.create({
    Name: ,
    Price:"String",
    Description:"String"
  },function (err,save) {
    if(err){
      console.log(err);
    }else{
      console.log("success");
    }

  })

})

//listening in port number 4000;
app.listen("4000");
