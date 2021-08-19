const express = require('express');
const app = express();
const path = require("path");

//built in middleware
//console.log(path.join(__dirname,"../public"));
const staticPath = path.join(__dirname,"../public");

//to set the view engine
app.set("view engine","hbs");
//templete engine route
app.get("/",(req,res)=>{
res.render("index.hbs");
});

// app.use(express.static(staticPath));
app.get('/',(req,res)=>{
    res.send("hello for the expresfs server");
});
app.listen(2500, ()=>{
    console.log('listining to the port 8000');
});