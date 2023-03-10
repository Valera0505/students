const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")
const connectDB = require("./db/connection")
require("dotenv").config()
const routes = require("./routes/routes")
const app = express()
const PORT = process.env.PORT || 3000
connectDB()
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "./views"))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, "./public")))
app.use("/", routes)
app.listen(PORT, () =>{
    console.log("Server started on PORT: ", PORT)
})