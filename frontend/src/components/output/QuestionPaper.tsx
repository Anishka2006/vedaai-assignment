interface Question {
    text: string;
    difficulty: string;
    marks: number;
  }
  
  interface Section {
    title: string;
    instruction: string;
    questions: Question[];
  }
  
  interface QuestionPaperProps {
    sections: Section[];
  }
  
  export default function QuestionPaper({
    sections,
  }: QuestionPaperProps) {
    return (
      <div className="bg-white rounded-xl border p-8">
  
        {/* Student Info */}
        <button
            className="mb-6 bg-black text-white px-4 py-2 rounded-lg">
            Download PDF
            </button>
  
        <div className="mb-10">
          <h1 className="text-3xl font-bold mb-8">
            Question Paper
          </h1>
  
          <div className="grid md:grid-cols-3 gap-6">
  
            <div>
              <label className="block mb-2 font-medium">
                Student Name
              </label>
  
              <input
                className="border rounded-lg p-3 w-full"
              />
            </div>
  
            <div>
              <label className="block mb-2 font-medium">
                Roll Number
              </label>
  
              <input
                className="border rounded-lg p-3 w-full"
              />
            </div>
  
            <div>
              <label className="block mb-2 font-medium">
                Section
              </label>
  
              <input
                className="border rounded-lg p-3 w-full"
              />
            </div>
  
          </div>
        </div>
  
        {/* Sections */}
  
        {sections.map((section) => (
          <div
            key={section.title}
            className="mb-10"
          >
            <h2 className="text-2xl font-bold mb-2">
              {section.title}
            </h2>
  
            <p className="text-gray-600 mb-6">
              {section.instruction}
            </p>
  
            <div className="space-y-4">
              {section.questions.map(
                (question, index) => (
                  <div
                    key={index}
                    className="border rounded-lg p-4"
                  >
                    <div className="flex justify-between">
                      <p className="font-medium">
                        Q{index + 1}.{" "}
                        {question.text}
                      </p>
  
                      <span>
                        {question.marks} Marks
                      </span>
                    </div>
  
                    <div className="mt-3">
                      <DifficultyBadge
                        difficulty={
                          question.difficulty
                        }
                      />
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  function DifficultyBadge({
    difficulty,
  }: {
    difficulty: string;
  }) {
    const styles = {
      Easy: "bg-green-100 text-green-700",
      Medium:
        "bg-yellow-100 text-yellow-700",
      Hard: "bg-red-100 text-red-700",
    };
  
    return (
      <span
        className={`px-3 py-1 rounded-full text-sm ${
          styles[
            difficulty as keyof typeof styles
          ]
        }`}
      >
        {difficulty}
      </span>
    );
  }