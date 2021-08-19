const express=require("express");
const bodyParser=require("body-parser");
const today = require(__dirname+"/date.js");

const app=express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set('view engine','ejs');

var items=["Buy food","Cook food","Eat"];

app.get("/",function(req,res){

    day=today.getDay();

    res.render('list',{dayOfWeek : day, newItems:items});

});

app.post("/",function(req,res){
    item=req.body.newItem;
    items.push(item);

    res.redirect("/")
});

app.listen(3000, function(){
    console.log("Server running at port 3000");
});