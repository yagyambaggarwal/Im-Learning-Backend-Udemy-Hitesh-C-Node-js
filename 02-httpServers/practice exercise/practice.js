const http = require("http");

const fs = require("fs"); 

const server = http.createServer(function(req, res){
    

    const route = req.method;
    const url = req.url;

    var IncomingRequest = `Incoming Request for Route ${route} and URL ${url} at ${Date.now()}. \n`; 
    console.log(IncomingRequest);
    fs.appendFileSync("./log.txt", IncomingRequest, "utf-8");

    if(route == "GET"){
        if(url == "/"){
            return res.writeHead(200).end("Hello from the Server.");
        }else if(url == "/contact-us"){
            return res.writeHead(200).end("Email: vishuamail.com Contact Number: 8000");
        }else if(url == "/tweet"){
            return res.writeHead(200).end("Tweet-1\nTweet-2");
        }else{
            return res.writeHead(404).end("You'r Lost!");
        }
    }else if(route == "POST"){
        if(url == "/tweet"){
            return res.writeHead(201).end("Your tweet is saved and published.");
        }else{
            return res.writeHead(404).end("You'r lost.")
        }
    }else {
        res.writeHead(404).end("You'r Lost!");
    }
});

server.listen(8000, ()=>{
    console.log("Server is up and running.");
})
