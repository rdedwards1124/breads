const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

// Index
breads.get("/", (req,res)=>{
    res.send(Bread)
})

// Show: Read one?
breads.get("/:arrayIndex", (req,res)=>{
    const arrayIndex = req.params.arrayIndex
    res.send(Bread[arrayIndex])
})

// Exports
module.exports = breads


