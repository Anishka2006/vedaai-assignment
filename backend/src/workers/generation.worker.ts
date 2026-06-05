import { Worker, Job } from "bullmq";
import { redisConnection } from "../config/redis";

const worker = new Worker(
  "question-generation",
  async (job: Job<{ instructions: string }>) => {
    try {
      console.log("Generating Paper...");

      const result = await generateQuestionPaper(job.data.instructions);

      console.log("Gemini Response:");
      console.log(result);

      return result;

    } catch (error) {
      console.error("Worker Error:");
      console.error(error);

      throw error;
    }
  },
  { connection: redisConnection }
);