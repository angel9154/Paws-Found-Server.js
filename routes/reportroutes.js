const express = require('express');
const router = express.Router();
router.use(express.json());

const { Report } = require('../models');


router.get('/', async (req, res) => {
	// Add a message to test the route
	const foundReport = await Report.find();
    res.json(foundReport);
});
router.post('/', async (req, res) => {
      const createdReport = await Report.create(req.body);
      res.json(createdReport)
    });

    router.put('/:reportId', async (req, res) => {

        try {
          const updatedPet = await Report.findByIdAndUpdate(
            req.params.petId, 
            req.body,
            {new: true})
            res.json(updatedPet)
        } catch (error) {
          console.log(error)
        }
       
        });


        router.delete('/:reportId', async (req, res) => {
            // Add a message to test the route
            const deletedReport = await Report.findByIdAndDelete(req.params.petId);
            res.json(deletedReport);
        });
        



module.exports = router;