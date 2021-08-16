const http = require("http");
const fs = require("fs");
const server = http.createServer((req,res)=>{
    // console.log(req.url);

    if (req.url =="/"){
        res.end("Hello fron the home sides");
    }else if(req.url == "/about"){
        res.end("hello from the About sides");
    }else if(req.url == "/userapi"){
        fs.readFile(`${__dirname}/userapi/userapi.json`,"utf-8",(err,data)=>{
            console.log(data);
            // res.end(data);
            const objectData = JSON.parse(data)
            res.end(objectData[2].color);
        }); 
    }else if(req.url == "/usera"){
        res.end("hello from the userapi  sides");
    }else{
        res.writeHead(404,{"Content-type":"text/html"});
        res.end("<h1>04 e4rror page does not exit</h1>");
    }
    // res.end("Hello from other side");
});
server.listen(8000,"127.0.0.1",() =>{
    console.log("listining to the port number");
});