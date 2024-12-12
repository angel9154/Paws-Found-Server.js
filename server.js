
// We begin by loading Express
const express = require('express');
const app = express();
 require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');

const {User1, Pets, Report} = require('./models/index')
// const routes = require('./routes/')
// app.use('/api', routes)

app.use(cors());

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use(express.json());

// this is where i am going to be buidling the routes
// <------------------------------------------------------------------>



// <------------------------------------------------------------------>

// here is going to be the create route
app.post('/pets', (req, res) => {
  res.send ("hello baby");
});

// <------------------------------------------------------------------>

// here the update route

// <------------------------------------------------------------------>

// here the delete route

// <------------------------------------------------------------------>



















app.listen(5501, () => {
  console.log('Listening on port 5501');
});
