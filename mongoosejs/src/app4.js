// Connect NodeJs Expressjs to MongoDB using Mongoose

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/CWAdatabase",{ useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("connect sucessful"))
.catch((err) => console.log(err));

// create schema

const playlistSchema = new mongoose.Schema({
    name:String,
    lang:String,
    mobile:String,
    mid:String
})

//collection creation
const Playlist = new mongoose.model("student",playlistSchema);

// create document or insert

// const reactPlaylist = new Playlist({
//     name:"Ankit",
//     lang:"expressjs",
//     mobile:8400424413,
//     mid:"kant"
// })
// reactPlaylist.save();


//comment wala code v chlega but manlijye kabhi galet ho jaye to hume pata nai
//chlega , yesliye hm error wala v condition v likhenge

const createDocument = async () =>{
    try{
        const reactPlaylist = new Playlist({
            name:"aman",
            lang:"expressjs",
            mobile:4644445,
            mid:"kant"
        })

        const jsPlaylist = new Playlist({
            name:"Rohit",
            lang:"MongoDB",
            mobile:4578255,
            mid:"kant"
        })

        const expressPlaylist = new Playlist({
            name:"Surya",
            lang:"React",
            mobile:555578,
            mid:"kant"
        })
        const result = await Playlist.insertMany([reactPlaylist,jsPlaylist,expressPlaylist]);
        console.log(result);
    }catch(err){
        console.log(err);
    }
    
}
//createDocument();
//hum bar bar document save karna nai chyte isliye hm "createDocument" ko,
// comment kar dete hai read ke time

const getDocument = async () =>{
    //const result = await Playlist.find(); 

    // ager data me koi specific data chaiye
    const result = await Playlist.find({lang : "React"}); 
    
    console.log(result);
}

getDocument();