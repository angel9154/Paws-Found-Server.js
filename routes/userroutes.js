const express = require('express');
const User = require('../models/User');
const router = express.Router();
router.use(express.json());
//ROUTES
router.get('/pets', (req, res) => {
    res.send ("hello");
});



module.exports = router;