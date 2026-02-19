const express = require("express");
const {
  createProblem,
  getProblems,
  getProblemById,
  updateProblem,
  deleteProblem,
} = require("../controllers/problemController");


const { protect, admin } = require("../middleware/authMiddleware");

const router = express.Router();

// 👑 Admin Only - Create Problem
router.post("/", protect, admin, createProblem);

// 🌍 Public - Get All Problems
router.get("/", getProblems);

// 🌍 Public - Get Single Problem
router.get("/:id", getProblemById);

// 👑 Admin - Update Problem
router.put("/:id", protect, admin, updateProblem);

// 👑 Admin - Delete Problem
router.delete("/:id", protect, admin, deleteProblem);


module.exports = router;
