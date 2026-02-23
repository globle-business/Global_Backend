const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

// Middleware
app.use(cors({
  origin: "http://localhost:5173", // frontend URL
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// Routes
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Backend running successfully 🚀");
});

module.exports = app;