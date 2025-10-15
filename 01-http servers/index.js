// const http = require("http");

// const server = http.createServer((req, res)=>{
//     console.log("Getting an incoming request!");

//     res.writeHead(200)
//     res.end("Welcome to my server :)")
// });

// server.listen(3000, ()=>{
//     console.log("Server is up and running!");
// })

const http = require("http");
const server = http.createServer((req, res)=>{
    console.log("Getting an incoming request!");
    res.writeHead(200);
    res.end("Shi hai na?") 
});
let port = 3000;
server.listen(port, ()=>{
    console.log("Server is up and running");
} )