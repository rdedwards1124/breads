const express = require('express')
const { truncate } = require('fs')
const breads = express.Router()
const Bread = require('../models/bread.js')
const Baker = require('../models/baker.js')

// Index
breads.get("/", (req,res)=>{
    Bread.find().then(foundBreads => { // Class 7
        console.log("Breads found:")
        console.log(foundBreads)
        res.render("index",{
            breads: foundBreads, // Class 7
        })
    // res.send(Bread)
    // res.render("index",{
    //     breads: Bread,
    //     title: "Index Page"
    // })
    })
})

// Class 4: breads part 4 (needed to be written before breads.get("/:arrayIndex"))
breads.get('/new', (req,res) => {
    Baker.find().then((foundBakers)=>{
        res.render('new', {bakers: foundBakers})
    })
})


// EDIT
breads.get('/:id/edit', (req,res)=>{
    const id = req.params.id
    Baker.find().then(foundBakers=>{
        Bread.findById(id).then(foundBread => {
            res.render('edit', {
                bread: foundBread,
                bakers: foundBakers,
            })
        })
    })
    
})


// SHOW: Read one?
// Class 4: activity bread part 3; change send to render
breads.get("/:id", (req,res)=>{
    const id = req.params.id
    Bread.findById(id)
    .populate("baker")
    .then((foundBread) => {
        if (foundBread === null) {
            res.send("404 - Bread Not Found")
        } else {
            res.render("show", {
                bread: foundBread,
            })
        }
    }).catch((err) => {
        res.send("500 - Server Error")
    })

    // const arrayIndex = req.params.arrayIndex
    // if (Bread[arrayIndex]) {
    //     res.render("Show", {
    //         bread: Bread[arrayIndex],
    //         index: arrayIndex, // adding index
    //     })
    // } else {
    //     res.send("404")
    // }
    
})

// Class 4: breads part 4, CREATE
breads.post("/", (req,res)=>{
    let newBread = { ...req.body }
    // default bread image (if no link was provided in form)
    if (newBread.image === ""){
        newBread.image = undefined // Class 7
    }
    // process hasGluten checkbox
    if (newBread.hasGluten === "on"){
        newBread.hasGluten = true
    } else if(newBread.hasGluten === "off"){
        newBread.hasGluten = false
    } else {
        console.error("Error: has Gluten value is:", newBread.hasGluten)
    }
    Bread.create(newBread) // Class 7
    res.redirect('/breads')
})

// UPDATE
breads.put("/:id", (req,res)=>{
    const id = req.params.id
    let updateBread = { ...req.body }
    // Default image
    if (updateBread.image === "") {
        updateBread.image = "https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    }
    // Process hasGluten checkbox
    if (updateBread.hasGluten === "on") {
        updateBread.hasGluten = true
    } else {
        updateBread.hasGluten = false
    }
    Bread.findByIdAndUpdate(id, updateBread, {new: true}).then(updatedBread => {
        console.log(updatedBread)
        res.redirect(`/breads/${id}`)
    })
    
})


// DELETE
breads.delete("/:id", (req,res)=>{
    const id = req.params.id
    Bread.findByIdAndDelete(id).then(deleteBread => {
        res.status(303).redirect('/breads')
    })
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