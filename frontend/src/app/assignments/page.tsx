"use client";

import { useState } from "react";

import {
  createAssignment,
  getAssignment,
} from "@/services/api";

export default function Dashboard() {
  const [title, setTitle] =
    useState("");

  const [
    instructions,
    setInstructions,
  ] = useState("");

  const [loading, setLoading] =
    useState(false);

  const [paper, setPaper] =
    useState<any>(null);
  
  const [status, setStatus] =
  useState("idle");

  const handleGenerate =
  async () => {
    setLoading(true);
    setStatus("pending");

      const assignment =
        await createAssignment(
          title,
          instructions
        );

      const id =
        assignment._id;

      const interval =
        setInterval(
          async () => {
            const result =
              await getAssignment(
                id
              );

            if (
              result.status ===
              "completed"
            ) {
              setStatus("completed");
              clearInterval(
                interval
              );

              setPaper(
                result.generatedPaper
              );

              setLoading(
                false
              );
            }
          },
          3000
        );
    };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">
        Question Paper Generator
      </h1>

      <input
        className="border p-2 w-full mb-4"
        placeholder="Title"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
      />

      <textarea
        className="border p-2 w-full h-40 mb-4"
        placeholder="Instructions"
        value={instructions}
        onChange={(e) =>
          setInstructions(
            e.target.value
          )
        }
      />

      <button
        onClick={handleGenerate}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Generate Paper
      </button>

      <div className="mt-4">
        Status: {status}
      </div>

      {loading && (
        <div className="mt-4">
          ⏳ Generating Question Paper...
        </div>
      )}

      {paper && (
        <div className="mt-8 bg-white shadow-lg rounded-lg p-6 border">
          <h2 className="text-3xl font-bold text-center mb-6">
            Generated Question Paper
          </h2>

          <div
            className="
              whitespace-pre-wrap
              leading-8
              text-gray-800
            "
          >
            {paper.rawResponse}
          </div>
          <button
      onClick={() => {
        setPaper(null);
        setTitle("");
        setInstructions("");
        setStatus("idle");
      }}
      className="ml-4 bg-gray-500 text-white px-4 py-2 rounded"
    >
      Reset
    </button>
        </div>
      )}
    </div>
  );
}