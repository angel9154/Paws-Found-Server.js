const Report = require('../models/reportModel');

//ROUTES

//Get all Report
const indexReport  = async (req, res) => {
    const foundReport  = await Report  .find();
    res.json(foundReport);
  }

  //create a Report
  const createReport = async (req, res) => {
    const createdReport = await Repor.create(req.body);
    res.json(createdReport);
  }

  //Update a Report
  const updateReport = async (req, res) => {
    try {
      const updatedReport = await Report .findByIdAndUpdate(
        req.params.ReportId,
        req.body,
        { new: true }
      );
        if (!updatedReport) {
            return res.status(404).json({ message: 'Report not found' });
        }
      res.json(updatedReport);
    } catch (error) {
      console.log(error);
        res.status(500).json({ message: 'Server Error' });

    }
  }

  //Delete a Report
  const deleteReport = async (req, res) => {

   try{ // Add a message to test the route
    const deletedReport = await Repor.findByIdAndDelete(req.params.ReportId);
    if(!deletedReport){
      return res.status(404).json({message: 'Report not found'});
    }
    res.status(200).json(deletedReport);
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
}

  module.exports = {  indexReport, createReport, updateReport, deleteReport }  //exporting all the functions