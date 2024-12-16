//Import Dependencies ==========================================
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');

//Initialize Express App  ======================================
const app = express();

//MongoDB Connection  ==========================================
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

//Enable CORS
app.use(cors());

//Middleware  ==================================================
app.use(express.json());
app.use(express.urlencoded({ extended: false }))


//ROUTES ========================================================
const userroutes = require('./routes/userroutes')
const petsroutes = require('./routes/petsroutes')
const reportroutes = require('./routes/reportroutes')
// const {User1, Pets, Report} = require('./models/index')
// const models = require('./models/index')

app.use('/users', userroutes) //
app.use('/report', reportroutes)
app.use('/pets', petsroutes)

//CRUD Flowchart
//1.Create
//User submits input via a form ➡️ Send POST request ➡️ Add data to the database ➡️ Confirmation of success.
//2.Read
//Application sends GET request ➡️ Fetch data from the database ➡️ Display data in a user-friendly interface.
//3.Update
//User selects data to edit ➡️ Display data in an editable form ➡️ Send PUT/PATCH request ➡️ Update the database ➡️ Confirmation of success.
//4.Delete
//User selects data to delete ➡️ Display confirmation prompt ➡️ Send DELETE request ➡️ Remove data from the database ➡️ Confirmation of success.




//Server Connection
app.listen(5501, () => {
  console.log('Listening on port 5501');
});
