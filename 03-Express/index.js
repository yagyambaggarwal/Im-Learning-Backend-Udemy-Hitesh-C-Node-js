const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req, res)=>{
    res.writeHead(200).end("Hello, From the server.");
})

app.get("/contact-us", (req, res)=>{
    res.writeHead(200).end("email : vishuaggarwal219@gmail.com, Contact Number: +91 9667331151")
})

app.get("/tweet", (req, res)=>{
    res.status(200).end("Tweet-1\nTweet-2")
})

app.post("/tweet", (req, res)=>{
    res.writeHead(201).end("Tweet Created Sucessfully!")
})

app.listen(port, ()=>{
    console.log("Server is live!")
})