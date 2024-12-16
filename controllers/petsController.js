//require the  Pets model
const Pets = require('../models/Pets.js');

//------------------------------------------------------------------------------------------------------------------------------------------
//CRUD Flowchart for Pets Model
// 1.Create: User submits pet details ➡️ POST request ➡️ Add pet to database ➡️ Confirmation.
// 2.Read: User requests pet(s) ➡️ GET request ➡️ Fetch pet(s) from database ➡️ Display pet(s).
// 3.Update: User edits pet details ➡️ PUT/PATCH request ➡️ Update database entry ➡️ Confirmation.
// 4.Delete: User deletes pet ➡️ DELETE request ➡️ Remove pet from database ➡️ Confirmation.
//------------------------------------------------------------------------------------------------------------------------------------------

//ROUTE FUNCTIONS ========================================================================================================================

//GET: Fetch data to get all pets available animals upfor adoption
const indexPets = async (req, res) => {
  const foundPets = await Pets.find();
  res.json(foundPets);
}
//GET: SHOw a specific pet by ID
const showPet = async (req, res) => {
    try {
      const pet = await Pet.findById(req.params.id); // Find a pet by its ID
      if (!pet) {
        return res.status(404).json({ error: 'Pet not found.' });
      }
      res.json(pet);
    } catch (err) {
      res.status(500).json({ error: 'Error fetching pet details.' });
    }
  };


//POST: Send data to create a new animal up for adoption
const createPet = async (req, res) => {
  const createdPet = await Pets.create(req.body);
  res.json(createdPet);
}

//PUT: Send data to update ny ID an existing animal up for adoption (e.g., edit a pet).
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

//DELETE: Remove a pet by ID from the list of animals up for adoption
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

//exporting all the functions
module.exports = {  indexPets, createPet, updatePet, deletePet }