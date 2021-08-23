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
            mobile:55648798,
            mid:"kant"
        })
        const result = await reactPlaylist.save();
        console.log(result);
    }catch(err){
        console.log(err);
    }
    
}
createDocument();