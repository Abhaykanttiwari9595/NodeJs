// Connect NodeJs Expressjs to MongoDB using Mongoose

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/CWAdatabase",{ useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("connect sucessful"))
.catch((err) => console.log(err));

const playlistSchema = new mongoose.Schema({
    name:String,
    lang:String,
    mobile:String,
    mid:String
})

//collection creation
const Playlist = new mongoose.model("student",playlistSchema);