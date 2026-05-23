const Submission = require("../models/Submission");
const Problem = require("../models/Problem");
const User = require("../models/User");
const executeCode = require("../utils/codeExecutor");

// 🚀 Create Submission
exports.createSubmission = async (req, res) => {
  try {
    const { problemId, code, language } = req.body;

    // ✅ Check if problem exists
    const problem = await Problem.findById(problemId);

    if (!problem) {
      return res.status(404).json({
        message: "Problem not found",
      });
    }

    // 🎯 Temporary verdict logic
    let verdict = "Accepted";

    // Run against all testcases
    for (const testCase of problem.testCases) {

      const result = await executeCode(
        language,
        code,
        testCase.input
      );

      // Runtime error
      if (result.error) {
        verdict = "Runtime Error";
        break;
      }

      // Wrong answer
      if (result.output !== testCase.output) {
        verdict = "Wrong Answer";
        break;
      }
    }

    // ✅ Create submission
    const submission = await Submission.create({
      user: req.user._id,
      problem: problemId,
      code,
      language,
      verdict,
    });

    // 🏆 Update user score if accepted
    if (verdict === "Accepted") {

      const user = await User.findById(req.user._id);

      // Prevent duplicate score increase
      if (!user.solvedProblems.includes(problemId)) {
        let points = 0;

        if (problem.difficulty === "Easy") {
          points = 10;
        } else if (problem.difficulty === "Medium") {
          points = 20;
        } else if (problem.difficulty === "Hard") {
          points = 30;
        }
        user.score += points;

        user.solvedProblems.push(problemId);

        await user.save();
      }
    }

    res.status(201).json(submission);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
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
    res.status(500).json({
      message: error.message,
    });
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
    res.status(500).json({
      message: error.message,
    });
  }
};