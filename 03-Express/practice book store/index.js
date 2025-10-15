const express = require("express");
const app = express();


// In memory database
const books = [
  { id: 1, title: 'Book One', author: 'Author One' },
  { id: 2, title: 'Book Two', author: 'Author Two' },
];

app.get("/", (req, res)=>{
    res.status(200).send("Hello");
})

app.get("/book", (req, res)=>{
    res.status(200).json(books);
})

app.get("/book/:id", (req, res)=>{
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
    res.end("Route under construction.");
})

app.listen(8000, ()=>{
    console.log("Server is live.");
})