const express = require("express");
const router = express.Router();

const {
  createEnquiry,
  getAllEnquiries,
  getSingleEnquiry,
  deleteEnquiry
} = require("../controllers/enquiryController");

// create enquiry
router.post("/create", createEnquiry);

// get all enquiries
router.get("/", getAllEnquiries);

// get single enquiry by enquiryId
router.get("/:enquiryId", getSingleEnquiry);

// delete enquiry
router.delete("/:enquiryId", deleteEnquiry);

module.exports = router;