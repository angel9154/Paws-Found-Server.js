const mongoose = require('mongoose');

const User1Schema = new mongoose.Schema({
  name: { type: [String], required: true },
  password: { type: [String], required: true }, 
  

});

const User1 = mongoose.model('User1', User1Schema);

module.exports = User1;