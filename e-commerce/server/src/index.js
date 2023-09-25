const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")

require("dotenv").config()
const routes = require("./routes/index") 


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
}), console.log("connected to database")



app.use(cors())
app.use(express.json())
app.use(routes)



app.listen(3000, () => console.log("Server running"))
