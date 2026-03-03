const express = require("express");
const router = express.Router();

const {
  createEnquiry,
  getAllEnquiries,
  getSingleEnquiry,
  deleteEnquiry
} = require("../controllers/enquiryController");

// 🔹 USER
router.post("/", createEnquiry);         // create enquiry
router.get("/", getAllEnquiries);        // get all

// 🔹 ADMIN / DETAILS
router.get("/:id", getSingleEnquiry);    // get single by ID
router.delete("/:id", deleteEnquiry);    // soft delete

module.exports = router;