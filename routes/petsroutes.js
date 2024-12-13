const express = require("express");
const router = express.Router();
router.use(express.json());
const { Pets } = require("../models");
const petsController = require("../controllers/petsController");    


//routes===============================================================
//Get /Index (list) pets
router.get("/",petsController.indexPets);

//POST/Create a pet
router.post("/",petsController.createPet);

//Update a pet
router.put("/:petId",petsController.updatePet);

//Delete a pet
router.delete("/:petId", petsController.deletePet);







module.exports = router;
