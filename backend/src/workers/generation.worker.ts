const { Worker: BullWorker } = require("bullmq");

const {
  redisConnection,
} = require("../config/redis");

const Assignment =
  require("../models/Assignment");

import {
  generateQuestionPaper,
} from "../services/ai.service";

const worker = new BullWorker(
  "question-generation",

  async (job: {
    data: {
      assignmentId: string;
      instructions: string;
    };
  }) => {
    try {
      console.log("Generating Paper...");

      const result =
        await generateQuestionPaper(
          job.data.instructions
        );

      console.log("RAW GEMINI RESPONSE:");
      console.log(result);

      const parsedResult = {
        rawResponse: result,
      };

      console.log("Job Data:");
      console.log(job.data);
      await Assignment.findByIdAndUpdate(
        job.data.assignmentId,
        {
          status: "completed",
          generatedPaper:
            parsedResult,
        }
      );

      console.log(
        "Updated Assignment ID:",
        job.data.assignmentId
      );

      return parsedResult;

    } catch (error) {
      console.error(
        "Worker Error:"
      );

      console.error(error);

      throw error;
    }
  },

  {
    connection: redisConnection,
  }
);

console.log("Worker Started");