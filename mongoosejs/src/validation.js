// Connect NodeJs Expressjs to MongoDB using Mongoose
const validator = require("validator");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/CWAdatabase",{ useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("connect sucessful"))
.catch((err) => console.log(err));

// create schema

const playlistSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true.valueOf,
        uppercase:true ,     //validation
        trim:true,
        minLength:2,
        maxLength:12
    },
    lang:String,
    email:{
        type:String,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("email is invalid");
            }
        }
    },
    mobile:String,
    mid:String,
    viedos:{
        type:Number,
        validate(value){
            if(value < 0){
                throw new Error("viedos count should not be negative");
            }
        }
    }
})

//collection creation
const Playlist = new mongoose.model("student",playlistSchema);


const createDocument = async () =>{
    try{
        const reactPlaylist = new Playlist({
            name:"aman",
            lang:"expressjs",
            email:"tabhaykant1@gmail.com",
            mobile:4644445,
            mid:"kant",
            viedos:7
        })

        const jsPlaylist = new Playlist({
            name:"Rohit",
            lang:"MongoDB",
            mobile:4578255,
            mid:"kant",
            viedos:4
        })

        const expressPlaylist = new Playlist({
            name:"         priya",
            lang:"React",
            mobile:0,
            mid:"kant",
            viedos:4
        })
        const result = await Playlist.insertMany([reactPlaylist,jsPlaylist,expressPlaylist]);
        console.log(result);
    }catch(err){
        console.log(err);
    }
    
}
createDocument();
