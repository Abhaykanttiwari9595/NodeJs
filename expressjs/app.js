// var express = require ("express");
// const app = express();
// app.get("/",(req, res) =>{
// res.send("Hello from server side");
// });

// app.get("/about",(req, res) =>{
//     res.send("Hello from about side");
//     });

// app.listen(8000, ()=>{
//     console.log("listining the port number 8000");
// });
const express = require("express");
const app = express();
app.get("/", (req,res)=>{
res.send("welcome to the home page");
});

app.get("/about", (req,res)=>{
    res.send("welcome to the about page");
    });

    app.get("/data", (req,res)=>{
        res.send("welcome to the home page");
        });
        app.listen(5000,()=>{
            console.log("you listen  port number 8000");
        });
        