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


router.post("/send-otp", sendOtp);
router.post("/verify-otp", verifyOtp);
router.post("/signup", signup);
router.post("/login", login);



module.exports = router;