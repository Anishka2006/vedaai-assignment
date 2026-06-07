export default function GroupsPage() {
    const groups = [
      "Class 9A",
      "Class 10B",
      "Biology Batch",
      "Physics Batch",
    ];
  
    return (
      <div className="p-8">
  
        <h1 className="text-3xl font-bold mb-8">
          My Groups
        </h1>
  
        <div className="space-y-4">
  
          {groups.map((group) => (
            <div
              key={group}
              className="bg-white border rounded-xl p-5"
            >
              {group}
            </div>
          ))}
  
        </div>
  
      </div>
    );
  }