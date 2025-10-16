const express = require("express");
const app = express();
const fs = require("fs");

// In memory database
const books = [
  { id: 1, title: 'Book One', author: 'Author One' },
  { id: 2, title: 'Book Two', author: 'Author Two' },
];


// To log the incoming requests, method, time, route
// For that making a custom middleware
app.use(function(req, res, next){
    var log = `\n "Route" : ${req.url}, "Method" : ${req.method}, "time" : ${Date.now()}`;
    console.log(log);
    fs.appendFileSync("logs.txt", log);
    next();
})

app.get("/", (req, res)=>{
    res.status(200).send("Hello");
})

app.get("/books", (req, res)=>{
    res.status(200).json(books);
})

app.get("/books/:id", (req, res)=>{
    var id = req.params.id;
    var book = books.find(o => o.id == id)
    if(!book){
        return res.status(404).send(`Book with id ${id} does not exist.`)
    }else {
        return res.status(200).json(book);
    }
})

// Using a middleware to send the JSON data to the server from the client.
// As express has no idea of anything and will show 'undefined' if any data is sent.
app.use(express.json());
app.post("/books", (req, res)=>{
    console.log(req.body);
    var newBook = req.body;
    books.push(newBook);
    res.status(201).end("New Book created.");
})

// To delete a book throgh ID
app.delete("/books/:id", (req, res)=>{
    var id = req.params.id;
    if(id < 1 || id > books.length){
        res.status(404).end("Book not found.")
    }else{
        books.splice(id - 1, 1);
        res.status(201).end("Book is deleted.")
    }
})

app.listen(8000, ()=>{
    console.log("Server is live.");
})