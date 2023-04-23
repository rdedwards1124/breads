const express = require('express')
const breads = express.Router()

// Index
breads.get("/", (req,res)=>{
    res.send("This is index at /breads")
})

// Exports
module.exports = breads

