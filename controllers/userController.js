const { User1 } = require('../models');

//ROUTES

//Get all User
const indexUser  = async (req, res) => {
    const foundUser  = await User1.find();
    res.json(foundUser);
  }

  //create a User
  const createUser = async (req, res) => {
    const createdUser = await User1.create(req.body);
    res.json(createdUser);
  }

//Update a User
const updateUser = async (req, res) => {
    try {
      const updatedUser = await User1.findByIdAndUpdate(
        req.params.UserId,
        req.body,
        { new: true }
      );
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(updatedUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  }

  //Delete a User
  const deleteUser = async (req, res) => {
    try {
    const deletedUser = await User1.findByIdAndDelete(req.params.UserId);
    if (!deletedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
            res.status(200).json(deletedUser);
        } catch (error) {
            res.status(500).json({ message: 'Server error', error: error.message });
        }
    }
  module.exports = {  indexUser, createUser, updateUser, deleteUser }  //exporting all the functions