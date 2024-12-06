const express = require("express");
const bodyParser = require("body-parser");
const loginRoutes = require("./loginRouter");
const chartRoutes = require("./chartRouter");
const authenticateToken = require("../../middleware/authMiddleware");
const cors = require("cors");
const PORT = process.env.PORT;

const app = express();
app.use(
  cors({
    origin: "http://localhost",
  })
);

app.use(bodyParser.json());

// Set up routes
app.use("/api/auth", loginRoutes);
app.use("/api", chartRoutes);

app.get("/api/protected", authenticateToken, (req, res) => {
  res.status(200).json({ message: "Access to protected route granted" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
