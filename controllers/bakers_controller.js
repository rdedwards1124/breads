// dependencies
const express = require('express')
const Baker = require('../models/baker.js')
const bakerSeedData = require('../models/baker_seed.js')
const bakers = express.Router()

/* baker was changed to bakers... */

bakers.get('/data/seed', (req, res) => {
    // uncomment to insert seed bakers
    // Baker.insertMany(bakerSeedData).then(res.redirect('/breads'))
    res.redirect("/breads")
})

// INDEX - read all
bakers.get('/', (req, res) => {
    Baker.find()
        .populate("breads")
        .then(foundBakers => {
            res.send(foundBakers)
        })
})

// SHOW
bakers.get('/:id', (req, res) => {
    const id = req.params.id
    Baker.findById(id)
        .populate({
            path: 'breads',
            options: { limit: 10 }
        })
        .then(foundBaker => {
            res.render('bakerShow', {
                baker: foundBaker
            })
        })
})


// DELETE
bakers.delete('/:id', (req, res) => {
    const id = req.params.id
    Baker.findByIdAndDelete(id) 
      .then((deletedBaker) => { 
        res.status(303).redirect('/breads')
      })
})




// export
module.exports = bakers
