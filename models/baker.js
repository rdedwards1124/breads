// dependencies
const mongoose = require('mongoose')
const { Schema } = mongoose
const Bread = require("./bread.js")

// schema
const bakerSchema = new Schema({
    name: {type: String, required: true, enum: ["Rachel","Monica","Joey","Chandler","Ross","Phoebe"]},
    startDate: {type: Date, required: true},
    bio: {type: String},
}, {toJSON: {virtuals: true}})

// VIRTUALS
bakerSchema.virtual('breads', {
    ref: "Bread",
    localField: "_id",
    foreignField: "baker"
})

// HOOKS: Use regular function syntax, no arrow function!
bakerSchema.post("findOneAndDelete", (deletedBaker) => {
    console.log(deletedBaker);
    Bread.deleteMany({ baker: deletedBaker._id }).then((deleteStatus) => {
        console.log(deleteStatus);
    });
});          



// model and export
const Baker = mongoose.model('Baker', bakerSchema)
module.exports = Baker
