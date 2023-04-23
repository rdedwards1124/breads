const express = require('express')

// Configuration
require('dotenv').config()
const PORT = process.env.PORT
console.log(PORT)

const app = express()

// Routes
app.get("/", (req,res)=>{
    res.send("Welcome to app about Breads!!")
})

// Listen
app.listen(PORT, ()=>{
    console.log("Listening on port", PORT)
})