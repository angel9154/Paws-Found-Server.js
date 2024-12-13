const mongoose = require('mongoose');

const ReportSchema = new mongoose.Schema({
  name: { type: [String], required: true },
  breed: { type: [String], required: true },
  color: { type: [String], required: true },

});

const Report = mongoose.model('Report',  ReportSchema) 
module.exports = Report;