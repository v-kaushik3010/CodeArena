const express = require("express");

const {
  getUserProfile,
} = require("../controllers/userController");

const {
  protect,
} = require("../middleware/authMiddleware");

const router = express.Router();

// 👤 Get Logged-in User Profile
router.get("/profile", protect, getUserProfile);

module.exports = router;