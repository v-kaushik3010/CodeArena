const express = require("express");
const {
  createProblem,
  getProblems,
  getProblemById,
} = require("../controllers/problemController");

const { protect, admin } = require("../middleware/authMiddleware");

const router = express.Router();

// 👑 Admin Only - Create Problem
router.post("/", protect, admin, createProblem);

// 🌍 Public - Get All Problems
router.get("/", getProblems);

// 🌍 Public - Get Single Problem
router.get("/:id", getProblemById);

module.exports = router;
