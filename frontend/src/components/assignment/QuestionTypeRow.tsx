interface QuestionTypeRowProps {
    index: number;
  }
  
  export default function QuestionTypeRow({
    index,
  }: QuestionTypeRowProps) {
    return (
      <div className="grid grid-cols-3 gap-4 mb-4">
        <select
          className="border rounded-lg p-3"
          defaultValue=""
        >
          <option value="" disabled>
            Select Type
          </option>
  
          <option>MCQ</option>
          <option>Short Answer</option>
          <option>Long Answer</option>
          <option>True/False</option>
        </select>
  
        <input
          type="number"
          placeholder="Questions"
          className="border rounded-lg p-3"
        />
  
        <input
          type="number"
          placeholder="Marks"
          className="border rounded-lg p-3"
        />
      </div>
    );
  }