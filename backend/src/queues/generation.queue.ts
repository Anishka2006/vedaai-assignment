import { Queue } from "bullmq";
import { redisConnection } from "../config/redis";

export const generationQueue = new Queue("question-generation", {
  connection: redisConnection,
});