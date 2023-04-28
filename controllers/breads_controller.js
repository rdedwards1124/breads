const express = require('express')
const { truncate } = require('fs')
const breads = express.Router()
const Bread = require('../models/bread.js')

// Index
breads.get("/", (req,res)=>{
    // res.send(Bread)
    res.render("index",{
        breads: Bread
    })
})

// Class 4: breads part 4 (needed to be written before breads.get("/:arrayIndex"))
breads.get('/new', (req,res) => {
    res.render('new')
})


// EDIT
breads.get('/:arrayIndex/edit', (req,res)=>{
    const arrayIndex = req.params.arrayIndex
    res.render('edit', {
      bread: Bread[arrayIndex],
      index: arrayIndex
    })
})


// Show: Read one?
// Class 4: activity bread part 3; change send to render
breads.get("/:arrayIndex", (req,res)=>{
    const arrayIndex = req.params.arrayIndex
    if (Bread[arrayIndex]) {
        res.render("Show", {
            bread: Bread[arrayIndex],
            index: arrayIndex, // adding index
        })
    } else {
        res.send("404")
    }
    
})

// Class 4: breads part 4, CREATE
breads.post("/", (req,res)=>{
    let newBread = { ...req.body }
    // default bread image (if no link was provided in form)
    if (newBread.image === ""){
        newBread.image = "https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    }
    // process hasGluten checkbox
    if (newBread.hasGluten === "on"){
        newBread.hasGluten = true
    } else if(newBread.hasGluten === "off"){
        newBread.hasGluten = false
    } else {
        console.error("Error: has Gluten value is:", newBread.hasGluten)
    }
    Bread.push(newBread)
    res.redirect('/breads')
})

// UPDATE
breads.put("/:arrayIndex", (req,res)=>{
    const arrayIndex = req.params.arrayIndex
    let updatedBread = { ...req.body }
    // Default image
    if (updatedBread.image === "") {
        updatedBread.image = "https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    }
    // Process hasGluten checkbox
    if (updatedBread.hasGluten === "on") {
        updatedBread.hasGluten = true
    } else if(updatedBread.hasGluten === "off") {
        updatedBread.hasGluten = false
    } else {
        console.error("ERROR")
    }
    Bread[arrayIndex] = updatedBread
    res.redirect(`/breads/${arrayIndex}`)
})


// DELETE
breads.delete("/:arrayIndex", (req,res)=>{
    const arrayIndex = req.params.arrayIndex
    Bread.splice(arrayIndex, 1)
    res.status(303).redirect("/breads")
})


// Exports
module.exports = breads


/*
// CREATE
breads.post('/', (req, res) => {
  if (!req.body.image) {
    req.body.image = 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
  }
  if(req.body.hasGluten === 'on') {
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread.push(req.body)
  res.redirect('/breads')
})


*/