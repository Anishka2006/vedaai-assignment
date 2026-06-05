"use client";

import { useState } from "react";
import QuestionTypeRow from "./QuestionTypeRow";

export default function AssignmentForm() {
  const [rows, setRows] = useState([1]);

  const addQuestionType = () => {
    setRows([...rows, rows.length + 1]);
  };

  return (
    <div className="bg-white rounded-xl p-6 border">
      <div className="space-y-6">

        {/* Due Date */}

        <div>
          <label className="block mb-2 font-medium">
            Due Date
          </label>

          <input
            type="date"
            className="border rounded-lg p-3 w-full"
          />
        </div>

        {/* Upload */}

        <div>
          <label className="block mb-2 font-medium">
            Upload File (Optional)
          </label>

          <input
            type="file"
            accept=".pdf,.txt"
            className="border rounded-lg p-3 w-full"
          />
        </div>

        {/* Question Types */}

        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold text-lg">
              Question Types
            </h2>

            <button
              onClick={addQuestionType}
              className="bg-black text-white px-4 py-2 rounded-lg"
            >
              Add
            </button>
          </div>

          {rows.map((row) => (
            <QuestionTypeRow
              key={row}
              index={row}
            />
          ))}
        </div>

        {/* Instructions */}

        <div>
          <label className="block mb-2 font-medium">
            Instructions
          </label>

          <textarea
            rows={5}
            className="border rounded-lg p-3 w-full"
            placeholder="Additional instructions..."
          />
        </div>

        {/* Generate */}

        <button
          className="bg-black text-white px-6 py-3 rounded-lg"
        >
          Generate Assessment
        </button>

      </div>
    </div>
  );
}