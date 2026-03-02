const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

// ✅ FIRST create app
const app = express();

// ✅ Allowed origins (local + deployed frontend)
const allowedOrigins = [
  "http://localhost:5173",
  "https://react-vite-lyart-phi.vercel.app"
];

// ✅ CORS configuration
app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (Postman, mobile apps)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("CORS not allowed for this origin"));
      }
    },
    credentials: true
  })
);

// ✅ Middlewares
app.use(express.json());
app.use(cookieParser());

// ✅ Import routes AFTER app created
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const enquiryRoutes = require("./routes/enquiryRoutes");

// ✅ Use routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/enquiry", enquiryRoutes);

// ✅ Test Route
app.get("/", (req, res) => {
  res.send("Backend running successfully 🚀");
});

// ✅ Export app
module.exports = app;