import MainLayout from "@/components/layout/MainLayout";
import QuestionPaper from "@/components/output/QuestionPaper";

const mockPaper = {
  sections: [
    {
      title: "Section A",
      instruction:
        "Attempt all questions",

      questions: [
        {
          text:
            "What is Photosynthesis?",
          difficulty: "Easy",
          marks: 2,
        },

        {
          text:
            "Define Osmosis.",
          difficulty: "Medium",
          marks: 3,
        },
      ],
    },

    {
      title: "Section B",
      instruction:
        "Attempt any two questions",

      questions: [
        {
          text:
            "Explain the Human Digestive System.",
          difficulty: "Hard",
          marks: 10,
        },
      ],
    },
  ],
};

export default function GeneratedPaperPage() {
  return (
    <MainLayout>

      <QuestionPaper
        sections={mockPaper.sections}
      />

    </MainLayout>
  );
}