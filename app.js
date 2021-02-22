const express=require("express");
const bodyParser=require("body-parser");
const ejs=require("ejs");

const app=express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.get("/clothing",function(req,res){
    res.sendFile(__dirname+"/clothing.html");
});

app.get("/mobiles",function(req,res){
    res.sendFile(__dirname+"/mobiles.html");
});

app.get("/electronics",function(req,res){
    res.sendFile(__dirname+"/electronics.html");
});

app.get("/bestSellers",function(req,res){
    res.sendFile(__dirname+"/best.html");
});

app.get("/biba-salwar-suit-set", function(req,res){
    res.sendFile(__dirname+"/biba-salwar-suit-set.html");
});

app.post("/",function(req,res){
  
});

app.listen(3000, function() {
    console.log("Server started");
});
