const Problem = require("../models/Problem");

// ➕ Create New Problem (Admin Only)
exports.createProblem = async (req, res) => {
  try {
    const {
      title,
      description,
      difficulty,
      constraints,
      sampleInput,
      sampleOutput,
      timeLimit,
      memoryLimit,
      tags,
    } = req.body;

    const problem = await Problem.create({
      title,
      description,
      difficulty,
      constraints,
      sampleInput,
      sampleOutput,
      timeLimit,
      memoryLimit,
      tags,
      createdBy: req.user._id,
    });

    res.status(201).json(problem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 📋 Get All Problems (Public)
exports.getProblems = async (req, res) => {
  try {
    const problems = await Problem.find().select("title difficulty tags");
    res.json(problems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🔍 Get Single Problem By ID
exports.getProblemById = async (req, res) => {
  try {
    const problem = await Problem.findById(req.params.id).populate(
      "createdBy",
      "name email"
    );

    if (!problem) {
      return res.status(404).json({ message: "Problem not found" });
    }

    res.json(problem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
