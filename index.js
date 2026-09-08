const express = require("express")
const mongoose = require('mongoose');
const userRoute = require("./routes/userRoutes.js")
const productRoute = require("./routes/productRoutes.js")
const compass_string = "mongodb://localhost:27017/cohort8_db"
const atlas_string = "mongodb+srv://adinadev5_db_user:adinadev5_db_user@cluster0.k7dgx4z.mongodb.net/cohort8_db?appName=Cluster0"

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
