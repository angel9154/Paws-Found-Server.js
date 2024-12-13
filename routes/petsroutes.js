const express = require('express');
const router = express.Router();
router.use(express.json());
const { Pets } = require('../models');


router.get('/', async (req, res) => {
	// Add a message to test the route
	const foundPets = await Pets.find();
    res.json(foundPets);
});
router.post('/', async (req, res) => {
      const createdPet = await Pets.create(req.body);
      res.json(createdPet)
    });

    router.put('/:petId', async (req, res) => {

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


        router.delete('/:petId', async (req, res) => {
            // Add a message to test the route
            const deletedPet = await Pets.findByIdAndDelete(req.params.petId);
            res.json(deletedPet);
        });
        



module.exports = router;