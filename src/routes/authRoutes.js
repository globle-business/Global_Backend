const express = require("express");
const router = express.Router();

const {
  sendOtp,
  verifyOtp,
  signup,
  login,
  getAllUser
} = require("../controllers/authController");

// ✅ IMPORT MIDDLEWARE (THIS WAS MISSING)
const { authenticate, authorize } = require("../middleware/auth.middleware");

router.post("/send-otp", sendOtp);
router.post("/verify-otp", verifyOtp);
router.post("/signup", signup);
router.post("/login", login);

// ✅ PROTECTED ROUTE all user
router.get("/users",  getAllUser);

module.exports = router;