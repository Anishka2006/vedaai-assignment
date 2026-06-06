"use client";

import { useState } from "react";
import QuestionTypeRow from "./QuestionTypeRow";
import { createAssignment } from "@/services/api";

export default function AssignmentForm() {
  const [rows, setRows] = useState([1]);

  const [instructions, setInstructions] =
  useState("");

const [loading, setLoading] =
  useState(false);

  const addQuestionType = () => {
    setRows([...rows, rows.length + 1]);
  };

  const handleGenerate = async () => {
    try {
      setLoading(true);
  
      const assignment =
        await createAssignment(
          "Science Test",
          instructions
        );
  
      console.log(
        "Assignment Created:",
        assignment
      );
  
      alert(
        "Assignment Created Successfully!"
      );
  
    } catch (error) {
      console.error(error);
  
      alert(
        "Failed to create assignment"
      );
    } finally {
      setLoading(false);
    }
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
            value={instructions}
            onChange={(e) =>
              setInstructions(
                e.target.value
              )
            }
            className="border rounded-lg p-3 w-full"
            placeholder="Additional instructions..."
          />
        </div>

        {/* Generate */}

        <button
          onClick={handleGenerate}
          disabled={loading}
          className="bg-black text-white px-6 py-3 rounded-lg"
        >
          {loading
            ? "Generating..."
            : "Generate Assessment"}
        </button>

      </div>
    </div>
  );
}