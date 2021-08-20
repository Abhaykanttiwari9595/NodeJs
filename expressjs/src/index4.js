const express = require('express');
const app = express();
const path = require("path");
const hbs = require("hbs");

//built in middleware
// console.log(path.join(__dirname,"../views"));
const staticPath = path.join(__dirname,"../public");

//path of templete
const templetePath = path.join(__dirname,"../templete/views");

//path of partialPath
const partialPathpath = path.join(__dirname,"../templete/partials");

//to set the view engine
app.set("view engine","hbs");

//change the name of default value "views"
app.set("views",templetePath)
//use partial
hbs.registerPartials( partialPathpath);
//templete engine route

app.get("/",(req,res)=>{
    res.render("index");
    });
    
//if we sent dynamic content
// app.get("/",(req,res)=>{
// res.render("index",{        
//     channelname:"Abhay"
// });
// });

//templete engine code of about page
app.get("/about",(req,res)=>{
    res.render("about");
})


 app.use(express.static(staticPath));
app.get('/',(req,res)=>{
    res.send("hello for the expresfs server");
});

//add 404 pages
app.listen(1000, ()=>{
    console.log('listining to the port 8000');
});