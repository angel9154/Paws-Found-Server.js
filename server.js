
// We begin by loading Express
const express = require('express');
const app = express();
 require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
// const {User1, Pets, Report} = require('./models/index')
const userroutes = require('./routes/userroutes')
const petsroutes = require('./routes/petsroutes')
const reportroutes = require('./routes/reportroutes')


mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}))
// this is where i am going to be buidling the routes
// <------------------------------------------------------------------>


// <------------------------------------------------------------------>



app.use('/users', userroutes)
app.use('/pets', petsroutes)
app.use('/report', reportroutes)
// <------------------------------------------------------------------>



// <------------------------------------------------------------------>


// <------------------------------------------------------------------>



















app.listen(5501, () => {
  console.log('Listening on port 5501');
});
