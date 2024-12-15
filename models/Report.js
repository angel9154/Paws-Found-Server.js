//This model represents lost and found animals reports and it's schema.
//Purpoose: To store information about lost and found animals in the database.
//Used for tracking lost/found pets: Helps users or admins submit, view, update, or delete animal reports in the system.



//import mongoose
const mongoose = require('mongoose');

//defining the Report(Lost & Found Animals)
const ReportSchema = new mongoose.Schema({
  name: { type: String, required: true },
  breed: { type: String, required: true },
  color: { type: String, required: true },
  images: { type: [String] },
});

//defining the Report model
const Report = mongoose.model('Report',  ReportSchema)

//
module.exports = Report;