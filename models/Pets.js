// <------------------------------------------------------------------>

const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
  name: { type: [String], required: true },
  breed: { type: [String], required: true },
  color: { type: [String], required: true }, 
  images: { type: [String], required: true },

});

const Pets = mongoose.model('Pets', PetSchema);

module.exports = Pets;

