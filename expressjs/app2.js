const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("welcome to the home page");
});

app.get("/about",(req,res)=>{
    // res.send({
    //     id:1,
    //     name:"Abhay",
    //     mob:"6393216862"
    // }); //sending json data 
    res.send([{       //json data send in form of array of object
        id:1,
        name:"Abhay",
        roll:2525,
    },
    {
        id:1,
        name:"Abhay",//In place of "res.send" we write res.json 
        roll:2525,//Benifite of .json =>the method arew identical wheb ab obect or aray is passed
        //but res.json() will also convert non-object, such as null and undifined which are not valid json
    },
    {
        id:1,
        name:"Abhay",
        roll:2525,
    },

])
});

app.get("/contact",(req,res)=>{
    res.write("<h1>welcome to the contact page<h1>");// when we write two statement the we use write in the "write" in place of "send" 
    res.write("<h1>welcome to the another page<h1>");
    res.send();//for ending the response
});

app.listen(3000,()=>{
console.log("you listen to the port number 3000");
});