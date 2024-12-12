
// We begin by loading Express
const express = require('express');
const app = express();
 require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const {User1, Pets, Report} = require('./models/index')
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

app.get('/pets', async (req, res) => {
	// Add a message to test the route
	const foundPets = await Pets.find();
    res.json(foundPets);
});

// <------------------------------------------------------------------>

// here is going to be the create route
// <<<<<<< jcw/routes
// =======
// app.post('/pets', async (req, res) => {
//   const createdPet = await Pets.create(req.body);
//   res.json(createdPet)
// });
// >>>>>>> main

app.use('/users', userroutes)
app.use('/pets', petsroutes)
app.use('/report', reportroutes)
// <------------------------------------------------------------------>

app.put('/pets/:petId', async (req, res) => {

  try {
    const updatedPet = await Pets.findByIdAndUpdate(
      req.params.petId, 
      req.body,
      {new: true})
      res.json(updatedPet)
  } catch (error) {
    console.log(error)
  }
 
  
});

// <------------------------------------------------------------------>

app.delete('/pets/:petId', async (req, res) => {
	// Add a message to test the route
	const deletedPet = await Pets.findByIdAndDelete(req.params.petId);
    res.json(deletedPet);
});

// <------------------------------------------------------------------>



















app.listen(5501, () => {
  console.log('Listening on port 5501');
});
