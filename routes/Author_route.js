const express = require("express")

const {getAuthorByName} = require("../controllers/Author_controller")

const router = express.Router()

router.get("/",getAuthorByName);
module.exports = router
