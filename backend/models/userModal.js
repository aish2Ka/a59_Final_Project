const db = require("../api/config/db");

const User = {
  create: (username, password, callback) => {
    const query = "INSERT INTO users (username, password) VALUES (?, ?)";
    db.query(query, [username, password], callback);
  },
  findByUsername: (username, callback) => {
    const query = "SELECT * FROM users WHERE username = ?";
    db.query(query, [username], (err, results) => {
      if (err) return callback(err);
      return callback(null, results[0]);
    });
  },
};

module.exports = User;