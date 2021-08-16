const express = require('express');
const app = express();
const path = require("path");

//built in middleware
//console.log(path.join(__dirname,"../public"));
const staticPath = path.join(__dirname,"../public");

app.use(express.static(staticPath));
app.get('/',(req,res)=>{
    res.send("hello for the expresfs server");
});
app.listen(8000, ()=>{
    console.log('listining to the port 8000');
});