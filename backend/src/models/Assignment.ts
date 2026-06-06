import mongoose from "mongoose";

const AssignmentSchema = new mongoose.Schema(
  {
    title: String,
    instructions: String,
    status: {
      type: String,
      default: "pending",
    },
    generatedPaper: Object,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Assignment",
  AssignmentSchema
);