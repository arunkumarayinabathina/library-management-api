const mongoose = require("mongoose")

const facultySchema = new mongoose.Schema({
    name:String,
    department:String
});

module.exports = mongoose.model("Faculty",facultySchema)
