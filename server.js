// Dependencies
const express = require('express')
// Class 5: part 5
const methodOverride = require("method-override")
// Class 7: Mongoose
const mongoose = require('mongoose')



// Configuration
require('dotenv').config()
const PORT = process.env.PORT
console.log(PORT)

const app = express()

// Class 7: Mongoose
mongoose.set("strictQuery", true)
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true},
        ()=>{console.log('connected to mongo: ', process.env.MONGO_URI)}
    )

// Middleware
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
// Class 4: breads part 3
app.use(express.static('public'))

// Class 4: breads part 4
app.use(express.urlencoded({extended: true}))
// Class 5: breads part 5
app.use(methodOverride("_method"))
//

// Routes
app.get("/", (req,res)=>{
    res.send("Welcome to app about Breads!!")
})

// Bread Routes
const breadsController = require("./controllers/breads_controller.js")
app.use("/breads", breadsController)

// Baker Routes
const bakersController = require("./controllers/bakers_controller.js")
app.use("/bakers", bakersController)

// 404 page: must be on bottom to not over others
app.get("*", (req,res)=>{
    res.send("404")
})


/*
Express:
    localhost:3003/ -> "Welcome to app Breads!!"
    localhost:3003/breads {/} -> breadsController ? -> "This is index at /breads" 
*/

// Listen
app.listen(PORT, ()=>{
    console.log("Listening on port", PORT)
})

// export app
