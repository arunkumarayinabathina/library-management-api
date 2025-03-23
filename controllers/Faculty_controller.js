const Faculty = require("../models/Faculty_model")

const getFacultyByName = async(req,res)=>{
    try {
        const faculty = await Faculty.find();
        if(!faculty) return res.status(404).json({message:"Faculty not found"});
        res.json(faculty)
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

const addFaculty = async(req,res)=>{
    try {
        const {name,department} = req.body;
        const newFaculty = new Faculty({name,department});
        await newFaculty.save()
        res.json({message:"Faculty added successfully.",faculty:newFaculty});
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

module.exports = {
    getFacultyByName,
    addFaculty
}
