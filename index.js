//import "dotenv/config"
require("dotenv").config()

const express = require("express")
const mongoose = require('mongoose');
const userRoute = require("./routes/userRoutes.js")
const productRoute = require("./routes/productRoutes.js")
const compass_string = process.env.COMPASS_STRING
const atlas_string = process.env.ATLAS_STRING

mongoose.connect(compass_string)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.error("Connection Error: ", err));


const app = express()
const port = 5555


app.use(express.json())

app.get("/", (req, res) => {
    res.send("server is active")
})
app.use("/users", userRoute)
app.use("/products" , productRoute)
app.listen(port, () => {
    console.log(`server is up and running on port : ${port}`)
})
