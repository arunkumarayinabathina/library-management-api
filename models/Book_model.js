const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    name:String,
    author:{type:mongoose.Schema.Types.ObjectId,ref:"Author"},
    publishedYear:Number,
    rent:String,
});

module.exports = mongoose.model("Book",bookSchema)
