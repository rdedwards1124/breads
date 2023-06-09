// import mongoose
const mongoose = require('mongoose')
// create shorthand for schema instructor
const { Schema } = mongoose

// create bread schema
const breadSchema = new Schema({
  name: {type: String, required: true},
  hasGluten: {type: Boolean},
  image: {type: String, default: 'https://img.freepik.com/free-vector/isolated-bread-loaf-cartoon-style_1308-85000.jpg'},
  baker: {
    type: Schema.Types.ObjectId,
    ref: "Baker",
  },
})

// helper methods
breadSchema.methods.getBakedBy = function () {
  let bakedByMessage = `${this.name} bread was baked with ♥️ by `;
  if (this.baker && this.baker.name && this.baker.startDate) {
      bakedByMessage +=
          `${this.baker.name}, ` +
          `who has been with us since ${this.baker.startDate.getFullYear()}.`;
  } else {
      bakedByMessage += "an unknown baker";
  }
  return bakedByMessage;
};

// create bread model
const Bread = mongoose.model("Bread", breadSchema)

// export bread model
module.exports = Bread

// Everything above was added in Class 7!!






// module.exports = [
//     {
//       name: 'Rye',
//       hasGluten: true,
//       image: 'https://images.unsplash.com/photo-1595535873420-a599195b3f4a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
//     },
//     {
//       name: 'French',
//       hasGluten: true,
//        image: 'https://images.unsplash.com/photo-1534620808146-d33bb39128b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
//     },
//     {
//       name: 'Gluten-Free',
//       hasGluten: false,
//       image: 'https://images.unsplash.com/photo-1546538490-0fe0a8eba4e6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
//     },
//     {
//       name: 'Pumpernickel',
//       hasGluten: true,
//       image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
//     }
//   ]

