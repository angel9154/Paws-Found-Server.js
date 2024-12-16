//This model represents "users" in our application.
// The schema defines what information about a user will be stored in the database.
//Purpose: To store user information in the database.ie. name and password

//import mongoose
const mongoose = require('mongoose');

//defining the User1 Schema
const User1Schema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

//Defining the User1 model
const User1 = mongoose.model('User1', User1Schema);

//Export the User1 model
module.exports = User1;