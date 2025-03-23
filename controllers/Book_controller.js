const Book = require("../models/Book_model")
const Author = require("../models/Author_model")

const getBook = async(req,res) => {
    try {
        const books = await Book.find().populate("author","name bio");
        res.json(books);
    } catch (error) {
        res.status(500).json({eroor:error.message});
    }
};

const addBook = async(req,res)=>{
    try {
        const {name,authorName,publishedYear,rent} = req.body;
        let author = await Author.findOne({name:authorName});
        if(!author){
            author = new Author({name:authorName,bio:"Bio not provided"})
            await author.save();
        }
        const newBook = new Book({name,author:author._id,publishedYear,rent});
        await newBook.save();

        res.json({
            message:"Book added successfully.",book:newBook
        });
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

module.exports = {
    getBook,
    addBook
}
