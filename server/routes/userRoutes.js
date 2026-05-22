const express = require("express");

const {
  getUserProfile,
  getLeaderboard,
} = require("../controllers/userController"); 

const {
  protect,
} = require("../middleware/authMiddleware");

const router = express.Router();

// 👤 Get Logged-in User Profile
router.get("/profile", protect, getUserProfile);

// 🏆 Public Leaderboard
router.get("/leaderboard", getLeaderboard);

module.exports = router;