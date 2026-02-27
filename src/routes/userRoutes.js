const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  createUser,
  getSingleUser,
  updateUser,
  deleteUser,
  changePassword
} = require("../controllers/userController");

const { authenticate } = require("../middleware/auth.middleware");


// 🔐 Protected Routes

router.get("/", authenticate, getAllUsers);

router.post("/create", authenticate, createUser);

router.get("/singleuser/:id", authenticate, getSingleUser);

router.put("/update/:id", authenticate, updateUser);

router.delete("/delete/:id", authenticate, deleteUser);

router.patch("/change-password/:id/change-password", authenticate, changePassword);


module.exports = router;