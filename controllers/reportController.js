//require the Report model
const Report = require("../models/Report.js");

//------------------------------------------------------------------------------------------------------------------------------------------
//CRUD Flowchart for Report Model
// 1. Create: User submits report ➡️ POST request ➡️ Add report to database ➡️ Confirmation.
// 2. Read: User views report(s) ➡️ GET request ➡️ Fetch report(s) from database ➡️ Display report(s).
// 3. Update: User edits report ➡️ PUT/PATCH request ➡️ Update database entry ➡️ Confirmation.
// 4. Delete: User deletes report ➡️ DELETE request ➡️ Remove report from database ➡️ Confirmation.
//------------------------------------------------------------------------------------------------------------------------------------------

//ROUTE FUNCTIONS

//GET: Fetch data (e.g., get all reports ).
const indexReport = async (req, res) => {
  const foundReport = await Report.find();
  res.json(foundReport);
};

//POST: Send data to create a new resource (e.g., add a new report).
const createReport = async (req, res) => {
  const createdReport = await Report.create(req.body); // here you had repor instead of Report
  res.json(createdReport);
};
//PUT: Send data to update an existing resource (e.g., edit a report).
const updateReport = async (req, res) => {
  try {
    const updatedReport = await Report.findByIdAndUpdate(
      req.params.ReportId,
      req.body,
      { new: true }
    );
    if (!updatedReport) {
      return res.status(404).json({ message: "Report not found" });
    }
    res.json(updatedReport);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

//DELETE: Remove a resource (e.g., delete a report).
const deleteReport = async (req, res) => {
  try {
    // Add a message to test the route
    const deletedReport = await Report.findByIdAndDelete(req.params.ReportId);
    if (!deletedReport) {
      return res.status(404).json({ message: "Report not found" });
    }
    res.status(200).json(deletedReport);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// exporting all the functions
module.exports = { indexReport, createReport, updateReport, deleteReport };
