// Connect NodeJs Expressjs to MongoDB using Mongoose

const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/ttchanell",{ useNewUrlParser: true, useUnifiedTopology: true})
.then( () => console.log("connection sucessfull"))
.catch((err) => console.log(err))