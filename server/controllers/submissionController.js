const Submission = require("../models/Submission");
const Problem = require("../models/Problem");

// 🚀 Create Submission
exports.createSubmission = async (req, res) => {
  try {
    const { problemId, code, language } = req.body;

    // Check if problem exists
    const problem = await Problem.findById(problemId);

    if (!problem) {
      return res.status(404).json({ message: "Problem not found" });
    }

    // Create submission
    const submission = await Submission.create({
      user: req.user._id,
      problem: problemId,
      code,
      language,

      // Temporary random verdict logic
      verdict: Math.random() > 0.5 ? "Accepted" : "Wrong Answer",
    });

    res.status(201).json(submission);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// 📜 Get Logged-in User Submissions
exports.getMySubmissions = async (req, res) => {
  try {
    const submissions = await Submission.find({
      user: req.user._id,
    })
      .populate("problem", "title difficulty")
      .sort({ createdAt: -1 });

    res.status(200).json(submissions);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// 📌 Get Submissions For a Problem
exports.getProblemSubmissions = async (req, res) => {
  try {
    const submissions = await Submission.find({
      problem: req.params.problemId,
    })
      .populate("user", "name")
      .sort({ createdAt: -1 });

    res.status(200).json(submissions);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};