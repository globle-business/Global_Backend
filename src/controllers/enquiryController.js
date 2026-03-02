const Enquiry = require("../models/enquiryModel");

/* ================= CREATE ENQUIRY ================= */
exports.createEnquiry = async (req, res) => {
  try {
    const { name, email, mobile, enquiryId } = req.body;

    // validation
    if (!name || !email || !mobile || !enquiryId) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    // email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return res.status(400).json({
        message: "Invalid email format"
      });
    }

    // mobile validation
    const mobilePattern = /^[6-9]\d{9}$/;
    if (!mobilePattern.test(mobile)) {
      return res.status(400).json({
        message: "Invalid mobile number"
      });
    }

    // check duplicate enquiryId
    const existing = await Enquiry.findOne({ enquiryId });
    if (existing) {
      return res.status(409).json({
        message: "Enquiry ID already exists"
      });
    }

    const enquiry = await Enquiry.create({
      name,
      email,
      mobile,
      enquiryId
    });

    res.status(201).json({
      message: "Enquiry created successfully",
      enquiry
    });

  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message
    });
  }
};

/* ================= GET ALL ENQUIRIES ================= */
exports.getAllEnquiries = async (req, res) => {
  try {
    const enquiries = await Enquiry.find();

    res.status(200).json({
      message: "Enquiries fetched successfully",
      total: enquiries.length,
      enquiries
    });

  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error"
    });
  }
};

/* ================= GET SINGLE ENQUIRY ================= */
exports.getSingleEnquiry = async (req, res) => {
  try {
    const enquiry = await Enquiry.findOne({
      enquiryId: req.params.enquiryId
    });

    if (!enquiry) {
      return res.status(404).json({
        message: "Enquiry not found"
      });
    }

    res.status(200).json({
      message: "Enquiry fetched successfully",
      enquiry
    });

  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error"
    });
  }
};

/* ================= DELETE ENQUIRY ================= */
exports.deleteEnquiry = async (req, res) => {
  try {
    const enquiry = await Enquiry.findOneAndDelete({
      enquiryId: req.params.enquiryId
    });

    if (!enquiry) {
      return res.status(404).json({
        message: "Enquiry not found"
      });
    }

    res.status(200).json({
      message: "Enquiry deleted successfully"
    });

  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error"
    });
  }
};