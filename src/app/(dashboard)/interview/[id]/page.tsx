"use client";

import { useEffect, useState } from "react";

import { useParams } from "next/navigation";

interface Evaluation {
  score: number;

  feedback: string;

  improvedAnswer: string;
}

export default function InterviewPage() {


  const [interviewComplete,
    setInterviewComplete] =
    useState(false);

  const [scores, setScores] =
    useState<number[]>([]);

  const [currentQuestionIndex,
    setCurrentQuestionIndex] =
    useState(0);

  const params = useParams();

  const topic = params.id as string;

  const [question, setQuestion] =
    useState("");

  const [answer, setAnswer] =
    useState("");

  const [evaluation, setEvaluation] =
    useState<Evaluation | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [submitting, setSubmitting] =
    useState(false);

  const [error, setError] =
    useState("");

  useEffect(() => {
    async function generateQuestion() {
      try {
        setLoading(true);

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
              index: currentQuestionIndex,
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
          "Failed to generate question."
        );
      } finally {
        setLoading(false);
      }
    }

    if (topic) {
      generateQuestion();
    }
  }, [topic]);

  async function handleSubmit() {
    try {
      setSubmitting(true);

      const response = await fetch(
        "/api/evaluate",
        {
          method: "POST",
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error ||
          "Evaluation failed"
        );
      }

      setEvaluation(data);
      setScores((prev) => [
        ...prev,
        data.score,
      ]);
    } catch (error) {
      console.error(error);

      setError("Evaluation failed.");
    } finally {
      setSubmitting(false);
    }
  }

  async function handleNextQuestion() {
    setEvaluation(null);

    setAnswer("");

    setError("");

    setLoading(true);

    const nextIndex =
      currentQuestionIndex + 1;

    setCurrentQuestionIndex(
      nextIndex
    );

    if (nextIndex >= 3) {
      setInterviewComplete(true);
      return;
    }

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
          index: nextIndex,
        }),
      }
    );

    const data = await response.json();

    setQuestion(data.question);

    setLoading(false);
  }

  if (interviewComplete) {
    const averageScore =
      scores.length > 0
        ? Math.round(
          scores.reduce(
            (a, b) => a + b,
            0
          ) / scores.length
        )
        : 0;

    return (
      <div className="flex min-h-screen items-center justify-center bg-black p-8 text-white">
        <div className="w-full max-w-2xl rounded-2xl border border-neutral-900 bg-neutral-950 p-10">
          <h1 className="text-4xl font-bold">
            Interview Complete
          </h1>

          <p className="mt-4 text-neutral-400">
            Great job completing the
            interview session.
          </p>

          <div className="mt-8 rounded-2xl border border-neutral-800 bg-black p-8 text-center">
            <p className="text-sm text-neutral-500">
              Overall Score
            </p>

            <h2 className="mt-4 text-6xl font-bold">
              {averageScore}/10
            </h2>
          </div>

          <div className="mt-8 space-y-4">
            <div className="rounded-xl border border-neutral-800 bg-black p-4">
              <h3 className="font-semibold">
                Strengths
              </h3>

              <p className="mt-2 text-neutral-400">
                Strong conceptual
                understanding and good
                communication.
              </p>
            </div>

            <div className="rounded-xl border border-neutral-800 bg-black p-4">
              <h3 className="font-semibold">
                Areas To Improve
              </h3>

              <p className="mt-2 text-neutral-400">
                Add more real-world
                examples and improve
                answer structure.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-black p-8 text-white">
      <div className="mx-auto w-full max-w-4xl">
        <div className="rounded-2xl border border-neutral-900 bg-neutral-950 p-8">
          <div className="rounded-xl border border-neutral-800 bg-black p-6">
            <p className="text-sm text-neutral-500">
              AI Interviewer
            </p>

            <h2 className="mt-4 text-2xl font-semibold">
              {loading
                ? "Generating question..."
                : error || question}
            </h2>
          </div>

          <textarea
            disabled={!!evaluation}
            placeholder="Type your answer..."
            value={answer}
            onChange={(e) =>
              setAnswer(e.target.value)
            }
            className="mt-6 min-h-50 w-full rounded-2xl border border-neutral-800 bg-black p-4 outline-none disabled:cursor-not-allowed disabled:opacity-60"
          />

          {!evaluation ? (
            <div className="mt-6 flex justify-end">
              <button
                onClick={handleSubmit}
                disabled={
                  submitting || !answer
                }
                className="rounded-xl bg-white px-6 py-3 font-medium text-black transition hover:scale-[1.02] hover:bg-neutral-200 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
              >
                {submitting
                  ? "Evaluating..."
                  : "Submit Answer"}
              </button>
            </div>
          ) : (
            <div className="mt-8 rounded-2xl border border-neutral-800 bg-black p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">
                  Feedback
                </h3>

                <div className="rounded-full bg-white px-4 py-2 text-sm font-bold text-black">
                  Score:{" "}
                  {evaluation.score}/10
                </div>
              </div>

              <p className="mt-4 text-neutral-300">
                {evaluation.feedback}
              </p>

              <div className="mt-6 rounded-xl border border-neutral-800 bg-neutral-950 p-4">
                <p className="text-sm text-neutral-500">
                  Improved Answer
                </p>

                <p className="mt-2 text-neutral-300">
                  {
                    evaluation.improvedAnswer
                  }
                </p>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={
                    handleNextQuestion
                  }
                  className="rounded-xl bg-white px-6 py-3 font-medium text-black transition hover:scale-[1.02] hover:bg-neutral-200 active:scale-[0.98]"
                >
                  {currentQuestionIndex >= 2
                    ? "Finish Interview"
                    : "Next Question"}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}