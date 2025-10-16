const express = require("express");
const app = express();

app.get("/", (req, res)=>{
    res.status(200).end("Home page");
})

// Making and Using a custom middleware
app.use(function(req, res, next){
    console.log("This is the A middleware");
    next();
})
// Another middleware
app.use((req, res, next)=>{
    console.log("This is mid B");
    // res.end("Wlcm to mid B.");
    next();
})

app.get("/contact", (req, res)=>{
    res.status(200).end("Contact us page.");
})

app.get("/abouts", (req, res)=>{
    res.status(200).end("We are one of the finest companies in the World!")
})

app.listen(8000, ()=>{
    console.log("Server is live.");
})