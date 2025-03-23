const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const connectDB = require("./config/db")

dotenv.config()
connectDB()
const app = express();
app.use(express.json())
app.use(cors())

app.use("/api/books",require("./routes/Book_route"))
app.use("/api/authors",require("./routes/Author_route"))
app.use("/api/faculty",require("./routes/Faculty_route"))

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>console.log(`Server running on port ${PORT}`))
