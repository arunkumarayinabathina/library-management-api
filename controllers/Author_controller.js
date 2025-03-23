const Author = require('../models/Author_model')
const Book = require("../models/Book_model")

const getAuthorByName = async(req,res)=>{
    try {
        const author =  await Author.findOne({name:req.params.name});
        if(!author) return res.status(404).json({message:"Author not found"});
        const books = await Book.find({author:author._id}).select("name");
        res.json({author,books})
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

module.exports = {
    getAuthorByName
}
