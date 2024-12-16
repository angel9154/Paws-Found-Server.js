const mongoose = require('mongoose');

const ReportSchema = new mongoose.Schema({
  name: { type: [String], required: true },
  breed: { type: [String], required: true },
  color: { type: [String], required: true },
  image: { type: [String], required: true},
  lastLocation: { type: [String], required: true},
  lastDateSeen:{ type: [String], required: true}

});

const Report = mongoose.model('User',  ReportSchema)
module.exports = Report;