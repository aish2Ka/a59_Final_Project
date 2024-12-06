const db = require("../api/config/db");

const ChartData = {
  checkTrailblazerDataExists: (callback) => {
    const query = "SELECT * FROM trailblazer_awards LIMIT 1"; // Customize the query as per your unique identifier
    db.query(query, callback);
  },

  // Check if Enrollment data already exists
  checkEnrollmentDataExists: (callback) => {
    const query = "SELECT * FROM enrollment_growth LIMIT 1"; // Customize query based on unique fields
    db.query(query, callback);
  },

  // Check if Reports data already exists
  checkReportDataExists: (callback) => {
    const query = "SELECT * FROM reports_data LIMIT 1"; // Customize query based on unique fields
    db.query(query, callback);
  },

  getTrailblazerData: (callback) => {
    const query = "SELECT * FROM trailblazer_awards";
    db.query(query, callback);
  },

  getEnrollmentData: (callback) => {
    const query = "SELECT * FROM enrollment_growth";
    db.query(query, callback);
  },

  getReportData: (callback) => {
    const query = "SELECT * FROM chart_data"; // Table for storing chart data
    db.query(query, callback);
  },

  seedTrailblazerData: (data, callback) => {
    const query =
      "INSERT INTO trailblazer_awards (discipline, awards) VALUES ?";
    const values = data.map((item) => [item.discipline, item.awards]);
    db.query(query, [values], callback);
  },

  seedEnrollmentData: (data, callback) => {
    const query = "INSERT INTO enrollment_growth (year, enrollment) VALUES ?";
    const values = data.map((item) => [item.year, item.enrollment]);
    db.query(query, [values], callback);
  },

  seedReportData: (data, callback) => {
    const query = "INSERT INTO chart_data (data) VALUES ?";
    const values = data.map((item) => [JSON.stringify(item)]); // Save as a JSON string
    db.query(query, [values], callback);
  },
};

module.exports = ChartData;
