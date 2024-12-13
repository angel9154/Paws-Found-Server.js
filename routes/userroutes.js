const express = require('express');
const router = express.Router();
router.use(express.json());
const { User1 } = require('../models');


router.get('/', async (req, res) => {
	// Add a message to test the route
	const foundUser = await User1.find();
    res.json(foundUser);
});
router.post('/', async (req, res) => {
      const createdUser = await User1.create(req.body);
      res.json(createdUser)
    });

    router.put('/:userId', async (req, res) => {

        try {
          const updatedUser = await User1.findByIdAndUpdate(
            req.params.userId, 
            req.body,
            {new: true})
            res.json(updatedUser)
        } catch (error) {
          console.log(error)
        }
       
        });


        router.delete('/:userId', async (req, res) => {
            // Add a message to test the route
            const deletedUser = await User1.findByIdAndDelete(req.params.petId);
            res.json(deletedUser);
        });
        



module.exports = router;