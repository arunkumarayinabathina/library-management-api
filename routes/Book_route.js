const express = require("express")

const {getBook,addBook} = require('../controllers/Book_controller')

const router = express.Router();
router.get("/",getBook);
router.post("/",addBook);

module.exports = router
