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