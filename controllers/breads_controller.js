const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

// Index
breads.get("/", (req,res)=>{
    // res.send(Bread)
    res.render("index",{
        breads: Bread
    })
})

// Show: Read one?
// Class 4: activity bread part 2; chnage send to render
breads.get("/:arrayIndex", (req,res)=>{
    const arrayIndex = req.params.arrayIndex
    if (Bread[arrayIndex]) {
        res.render("Show", {
            bread: Bread[arrayIndex]
        })
    } else {
        res.send("404")
    }
    
})

// Exports
module.exports = breads


