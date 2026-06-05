require("dotenv").config();

const { GoogleGenerativeAI: LocalGoogleGenerativeAI } = require("@google/generative-ai");

async function test() {
  const genAI = new LocalGoogleGenerativeAI(
    process.env.GEMINI_API_KEY
  );

  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash"
  });

  const result = await model.generateContent(
    "Say hello in one sentence."
  );

  console.log(result.response.text());
}

test().catch(console.error);