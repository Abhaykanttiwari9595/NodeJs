const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/youtubeRegistration",{
     useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true})
     .then( () =>{
         console.log("connection sucessful");
     }).catch((err) =>{
         console.log(err) //yaha pe khud ka error v pass kar skte hai
     })