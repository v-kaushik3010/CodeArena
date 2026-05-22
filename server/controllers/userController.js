const User = require("../models/User");

// 👤 Get Logged-in User Profile
exports.getUserProfile = async (req, res) => {
  try {

    const user = await User.findById(req.user._id)
      .select("-password")
      .populate("solvedProblems", "title difficulty");

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json(user);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
// 🏆 Get Leaderboard
exports.getLeaderboard = async (req, res) => {
  try {

    const users = await User.find()
      .select("name score solvedProblems")
      .sort({ score: -1 });

    const leaderboard = users.map((user, index) => ({
      rank: index + 1,
      name: user.name,
      score: user.score,
      solvedCount: user.solvedProblems.length,
    }));

    res.status(200).json(leaderboard);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};