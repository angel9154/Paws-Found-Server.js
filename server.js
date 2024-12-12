
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
app.post('/pets', async (req, res) => {
  const createdPet = await Pets.create(req.body);
  res.json(createdPet)
});

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
