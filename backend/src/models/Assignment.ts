const mongoose = require("mongoose");

const AssignmentSchema =
  new mongoose.Schema(
    {
      dueDate: String,

      instructions: String,

      status: {
        type: String,
        default: "pending",
      },

      result: Object,
    },
    {
      timestamps: true,
    }
  );

module.exports = mongoose.model(
  "Assignment",
  AssignmentSchema
);