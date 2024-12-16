const express = require("express");
const router = express.Router();
router.use(express.json());
// const { Pets } = require("../models");
const petsController = require("../controllers/petsController");


//routes===============================================================
//Get /Index (Fetch all pets available for adotption)
router.get("/",petsController.indexPets);

//Get /Show (Fetch a specific pet by ID)
router.get('/pets/:id', petsController.showPet);

//POST/Create a new pet adoption for listing)
router.post("/",petsController.createPet);

//Update a pet adoption listing by id)
router.put("/:petId",petsController.updatePet);

//Delete a pet adoption listing by Id)
router.delete("/:petId", petsController.deletePet);







module.exports = router;
