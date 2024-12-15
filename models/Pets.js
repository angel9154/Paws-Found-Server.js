//thia filw represents the Pet model and it's schema
//Purpose: To store information about pets up for adoption in the database

//import mongoose
const mongoose = require('mongoose');

//defining the Pet
const PetSchema = new mongoose.Schema({
  name: { type: String, required: true },
  breed: { type: String, required: true },
  color: { type: String, required: true },
  images: { type: [String] }
});

//Create the Pet model
const Pets = mongoose.model('Pets', PetSchema);

//Export the Pet model
module.exports = Pets;

