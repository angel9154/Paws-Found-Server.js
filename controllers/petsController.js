const Pets = require('../models/Pets.js');


//Get all pets
const indexPets = async (req, res) => {
  const foundPets = await Pets.find();
  res.json(foundPets);
}

//create a pet
const createPet = async (req, res) => {
  const createdPet = await Pets.create(req.body);
  res.json(createdPet);
}

//Update a pet
const updatePet = async (req, res) => {
  try {
    const updatedPet = await Pets.findByIdAndUpdate(
      req.params.petId,
      req.body,
      { new: true }
    );
    if (!updatedPet) {
      return res.status(404).json({ message: 'Pet not found' });
    }
    res.json(updatedPet);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Update failed' });
  }
}

//Delete a pet
const deletePet = async (req, res) => {
  try {
    const deletedPet = await Pets.findByIdAndDelete(req.params.petId);
    if (!deletedPet) {
      return res.status(404).json({ message: 'Pet not found' });
    }
    res.status(200).json(deletedPet);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
}
module.exports = {  indexPets, createPet, updatePet, deletePet }  //exporting all the functions