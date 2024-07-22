const mongoose = require("mongoose");

const carsSchema = new mongoose.Schema({
  name: String,
  description: String ,
  price: Number,
});

const Cars = mongoose.model("Cars", carsSchema);

module.exports = Cars;
