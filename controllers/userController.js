// Require the User model
const User1 = require("../models/User1.js");

//------------------------------------------------------------------------------------------------------------------------------------------
//CRUD Flowchart for User Model
// 1. Create: User submits account details ➡️ POST request ➡️ Add user to database ➡️ Confirmation.
// 2. Read: User views profile(s) ➡️ GET request ➡️ Fetch user data from database ➡️ Display user(s).
// 3. Update: User edits profile ➡️ PUT/PATCH request ➡️ Update database entry ➡️ Confirmation.
// 4. Delete: User deletes account ➡️ DELETE request ➡️ Remove user from database ➡️ Confirmation.
//-------------------------------------------------------------------------------------------------------------------------------------------

//ROUTE FUNCTIONS========================================================================================================================

//GET: Fetch a list of all users.
const indexUser = async (req, res) => {
  const foundUser = await User1.find();
  res.json(foundUser);
};

//POST: Send data to create a new user).
const createUser = async (req, res) => {
  const createdUser = await User1.create(req.body);
  res.json(createdUser);
};
//PUT: Send data by ID to update an existing user  (e.g., edit a report).
const updateUser = async (req, res) => {
  try {
    const updatedUser = await User1.findByIdAndUpdate(
      req.params.UserId,
      req.body,
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

//DELETE: Remove a  user by id.
const deleteUser = async (req, res) => {
  try {
    // Add a message to test the route
    const deletedUser = await User1.findByIdAndDelete(req.params.UserId);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(deletedUser);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

//exporting all the functions
module.exports = { indexUser, createUser, updateUser, deleteUser };
