const express = require('express');
const router = express.Router();
router.use(express.json());
const { User1 } = require('../models');
const userController = require('../controllers/userController');

// routes===============================================================
//Get /Index (list) user
router.get("/", userController.indexUser);

//POST/Create a User
router.post("/",userController.createUser);

//Update a User
router.put("/:UserId",userController.updateUser);

//Delete a User
router.delete("/:UserId", userController.deleteUser);




module.exports = router;