 const express = require('express');
 const app = express();
 const port = process.env.PORT || 3000;
 const path = require("path");
 require("./db/conn"); // we connect database conn.js to app.js

 const static_path = path.join(__dirname,"../public");
 app.use(express.static(static_path));
 
 app.get("/",(req,res)=>{
    res.send("hello from the abhaytechnical")
 });

 app.listen(port ,()=>{       //yaha pe port number ke place per port yesliye likhe hai 
                                //kuki yesko hume kewal local me nai globlly post karna hai
     console.log(`server is running to the port no ${port}`)
 });