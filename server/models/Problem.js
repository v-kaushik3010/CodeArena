const mongoose = require("mongoose");

const problemSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      unique: true,
    },

    description: {
      type: String,
      required: [true, "Description is required"],
    },

    difficulty: {
      type: String,
      enum: ["Easy", "Medium", "Hard"],
      required: true,
    },

    constraints: {
      type: String,
      required: true,
    },

    sampleInput: {
      type: String,
      required: true,
    },

    sampleOutput: {
      type: String,
      required: true,
    },

    timeLimit: {
      type: Number,
      default: 1, // seconds
    },

    memoryLimit: {
      type: Number,
      default: 256, // MB
    },

    tags: {
      type: [String],
      default: [],
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Problem", problemSchema);
