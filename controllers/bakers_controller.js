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


// export
module.exports = bakers
