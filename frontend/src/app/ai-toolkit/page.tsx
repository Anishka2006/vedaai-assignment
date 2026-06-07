export default function AIToolkitPage() {
    const tools = [
      "Question Paper Generator",
      "Worksheet Generator",
      "Lesson Planner",
      "Quiz Generator",
      "Rubric Generator",
    ];
  
    return (
      <div className="p-8">
  
        <h1 className="text-3xl font-bold mb-8">
          AI Teacher Toolkit
        </h1>
  
        <div className="grid grid-cols-2 gap-6">
  
          {tools.map((tool) => (
            <div
              key={tool}
              className="bg-white border rounded-xl p-6"
            >
              {tool}
            </div>
          ))}
  
        </div>
  
      </div>
    );
  }