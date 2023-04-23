const express = require('express')

// Configuration
require('dotenv').config()
const PORT = process.env.PORT
console.log(PORT)

const app = express()

// Middleware
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// Routes
app.get("/", (req,res)=>{
    res.send("Welcome to app about Breads!!")
})

// Bread Routes
const breadsController = require("./controllers/breads_controller.js")
app.use("/breads", breadsController)

/*
Express:
    localhost:3003/ -> "Welcome to app Breads!!"
    localhost:3003/breads {/} -> breadsController ? -> "This is index at /breads" 
*/

// Listen
app.listen(PORT, ()=>{
    console.log("Listening on port", PORT)
})