const express = require("express");
const router = express.Router();
router.use(express.json());
// const { Report } = require("../models");
const reportController = require("../controllers/reportController");


//ROUTES===============================================================
//GET /Index (Fetch a list of all animals that are lost or found)
router.get("/", reportController.indexReport);
//POST/Create a new animal that is lost or found.
router.post("/", reportController.createReport);
//PUT:Edit one of the animals on the list by ID
router.put("/:ReportId", reportController.updateReport);  // Changed from petId to ReportId
//Delete: Remove an animal from the lost or found list by id. 
router.delete("/:ReportId", reportController.deleteReport);


// this cannot be used in here because we are using the report model
// router.delete("/:petId",reportController.deletePet); and this is using a dinamic pet model as you can see :petId
// router.put("/:petId",reportController.updatePet); this neither


module.exports = router;
