const express = require("express");

const {
  createSubmission,
  getMySubmissions,
  getProblemSubmissions,
} = require("../controllers/submissionController");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// 🚀 Create Submission
router.post("/", protect, createSubmission);

// 📜 Get Logged-in User Submissions
router.get("/my", protect, getMySubmissions);

// 📌 Get Submissions For a Problem
router.get("/problem/:problemId", protect, getProblemSubmissions);

module.exports = router;