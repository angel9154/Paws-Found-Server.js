const express = require("express");
const router = express.Router();
router.use(express.json());
const { Report } = require("../models");
const reportController = require("../controllers/reportController");


//ROUTES===============================================================
//
router.get("/", reportController.indexReports);
//POST/Create a report
router.post("/", reportController.createReport);
//Update a pet
router.put("/:petId",reportController.updatePet);
//Delete a pet
router.delete("/:petId",reportController.deletePet);



module.exports = router;
