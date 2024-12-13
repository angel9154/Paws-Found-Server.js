const express = require("express");
const router = express.Router();
router.use(express.json());
const { Report } = require("../models");
const reportController = require("../controllers/reportController");


//ROUTES===============================================================
//
router.get("/", reportController.indexReport);
//POST/Create a report
router.post("/", reportController.createReport);
router.put("/:ReportId", reportController.updateReport);  // Changed from petId to ReportId
//Delete a report
router.delete("/:ReportId", reportController.deleteReport); 


// this cannot be used in here because we are using the report model 
// router.delete("/:petId",reportController.deletePet); and this is using a dinamic pet model as you can see :petId
// router.put("/:petId",reportController.updatePet); this neither 


module.exports = router;
