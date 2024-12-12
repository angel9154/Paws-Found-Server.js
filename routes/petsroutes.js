const express = require('express');
const router = express.Router();
router.use(express.json());
const {sendMessage} = require('../controllers/pets')




router.post('/', sendMessage);



module.exports = router;