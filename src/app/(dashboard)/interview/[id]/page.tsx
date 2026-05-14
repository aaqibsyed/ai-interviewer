"use client";

import { useEffect, useState } from "react";

import { useParams } from "next/navigation";

export default function InterviewPage() {
  const params = useParams();

  const topic = params.id as string;

  const [question, setQuestion] =
    useState("");

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(() => {
    async function generateQuestion() {
      try {
        const response = await fetch(
          "/api/interview",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify({
              topic,
            }),
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.error ||
            "Failed to generate question"
          );
        }

        setQuestion(data.question);
      } catch (error) {
        console.error(error);

        setError(
          "AI service is temporarily busy. Please try again after 60 seconds."
        );
      } finally {
        setLoading(false);
      }
    }

    if (topic) {
      generateQuestion();
    }
  }, [topic]);

  return (
    <div className="flex min-h-screen flex-col bg-black p-8 text-white">
      <div className="mx-auto w-full max-w-4xl">
        <div className="rounded-2xl border border-neutral-900 bg-neutral-950 p-8">
          <div className="rounded-xl border border-neutral-800 bg-black p-6">
            <p className="text-sm text-neutral-500">
              AI Interviewer
            </p>

            <h2 className="mt-4 text-2xl font-semibold">
              {loading ? (
                "Generating question..."
              ) : error ? (
                <span className="text-red-400">
                  {error}
                </span>
              ) : (
                question
              )}
            </h2>
          </div>

          <textarea
            placeholder="Type your answer..."
            className="mt-6 min-h-50 w-full rounded-2xl border border-neutral-800 bg-black p-4 outline-none"
          />

          <div className="mt-6 flex justify-end">
            <button className="rounded-xl bg-white px-6 py-3 font-medium text-black">
              Submit Answer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}