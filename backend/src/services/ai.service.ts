const {
  GoogleGenerativeAI,
} = require("@google/generative-ai");

const genAI =
  new GoogleGenerativeAI(
    process.env.GEMINI_API_KEY
  );

async function generateQuestionPaper(
  instructions: string
) {
  const model =
    genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    });

  const prompt = `
Generate an exam paper.

Return ONLY valid JSON.

Format:

{
  "sections":[
    {
      "title":"Section A",
      "instruction":"Attempt all questions",
      "questions":[
        {
          "text":"Question",
          "difficulty":"Easy",
          "marks":2
        }
      ]
    }
  ]
}

Instructions:
${instructions}
`;

  const result =
    await model.generateContent(
      prompt
    );

  return result.response.text();
}

module.exports = {
  generateQuestionPaper,
};