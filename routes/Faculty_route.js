const express = require("express")
const {getFacultyByName,addFaculty} = require('../controllers/Faculty_controller')

const router = express.Router()

router.get('/',getFacultyByName)
router.post('/',addFaculty)

module.exports = router
