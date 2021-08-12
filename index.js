const fs = require("fs")
fs.writeFileSync("read.txt","welcome to my channel");
fs.writeFileSync("read.txt","Abhay kant tiwari ");
fs.appendFileSync("read.txt","how are you");
 const data=fs.readFileSync("read.txt","utf8");
 console.log(data);