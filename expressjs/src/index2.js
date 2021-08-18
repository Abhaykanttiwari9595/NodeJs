 const express = require('express');
 const app = express();
 const path=require("path");
   //app.get("/",(req,res)=>{
      //  res.write("<h1>welcome to the abhay channel</h1>");
      //  res.write("<h2>welcome to the Ankit channel</h2>");
      //  res.end();


  // });
 // console.log(path.join(__dirname,"../public"));
  const staticPath = path.join(__dirname,"../public")
  app.use(express.static(staticPath));
  app.get("/",(req,res)=>{
    res.send("my name is Abhay kant tiwari");
  })

 app.listen(4000,()=>{
     console.log("listen to the port number 4000");
 });