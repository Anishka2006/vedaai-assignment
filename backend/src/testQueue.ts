import { generationQueue } from "./queues/generation.queue";

async function test() {
  await generationQueue.add(
    "generate",
    {
      instructions:
        "Create a Science paper with 5 MCQs and 2 long answer questions."
    }
  );

  console.log("Generation Job Added");
}

test();