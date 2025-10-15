const http = require("node:http");
const server = http.createServer((req, res)=>{
    console.log(`Incoming Request ${Date.now()}`)
    console.log(req.headers);
    console.log(req.method);
    console.log(req.url);


    if(req.url == "/"){
        res.writeHead(200);    
        res.end("This is the HomePage");
    }else if(req.url == "/contact-us"){
        res.writeHead(200);
        res.end("You can connect me at vishuAggarwal219@gmail.com");
    }
    else if(req.url == "/language-section"){
        res.writeHead(200);
        res.end(`You can accept the language ${req.headers["accept-language"]}`);
    } 

    else {
        res.writeHead(404);
        res.end("You are at the wrong page")
    }
})

server.listen(8000, ()=>{
    console.log("Hello! server is live!")
})


