"use client";

import { createClient } from "@/lib/supabase/client";

import { useEffect, useState } from "react";

import { useParams } from "next/navigation";
import { toast } from "sonner";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/ui/page-header";

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

  const [questionHistory,
    setQuestionHistory] =
    useState<string[]>([]);

  const [answerHistory,
    setAnswerHistory] =
    useState<string[]>([]);

  const [feedbackHistory,
    setFeedbackHistory] =
    useState<
      {
        score: number;
        feedback: string;
        improvedAnswer: string;
      }[]
    >([]);

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

  const [finishingInterview,
    setFinishingInterview] =
    useState(false);

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
        setQuestionHistory((prev) => {
          if (prev.includes(data.question)) {
            return prev;
          }

          return [...prev, data.question];
        });
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

      setAnswerHistory((prev) => [
        ...prev,
        answer,
      ]);

      setFeedbackHistory((prev) => [
        ...prev,
        data,
      ]);

      setScores((prev) => [
        ...prev,
        data.score,
      ]);
    } catch (error) {
      console.error(error);
      setError("Evaluation failed.");
      toast.error("Evaluation failed.")
    } finally {
      setSubmitting(false);
    }
  }

  async function handleNextQuestion() {
    setEvaluation(null);



    setAnswer("");

    setError("");

    const nextIndex =
      currentQuestionIndex + 1;

    setCurrentQuestionIndex(
      nextIndex
    );

    if (nextIndex >= 3) {
      setFinishingInterview(true);
      const averageScore =
        scores.length > 0
          ? Math.round(
            scores.reduce(
              (a, b) => a + b,
              0
            ) / scores.length
          )
          : 0;



      await saveInterview(
        averageScore
      );

      setFinishingInterview(false);

      setInterviewComplete(true);
      toast.success("Interview Completed :)")
      return;
    }

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
          index: nextIndex,
        }),
      }
    );

    const data = await response.json();

    setQuestion(data.question);

    setQuestionHistory((prev) => {
      if (prev.includes(data.question)) {
        return prev;
      }

      return [...prev, data.question];
    });

    setLoading(false);
  }



  if (interviewComplete || finishingInterview) {
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
          {finishingInterview ? (
            <Skeleton className="h-10 w-72" />
          ) : (
            // <h1 className="text-4xl font-bold">
            <PageHeader title="Interview Complete" />
            // </h1>
          )}

          {finishingInterview ? (
            <Skeleton className="mt-4 h-5 w-80" />
          ) : (
            <p className="mt-4 text-neutral-400">
              Great job completing the
              interview session.
            </p>
          )}

          <div className="mt-8 rounded-2xl border border-neutral-800 bg-black p-8 text-center">
            {finishingInterview ? (
              <>
                <Skeleton className="mx-auto h-4 w-32" />

                <Skeleton className="mx-auto mt-6 h-16 w-40" />
              </>
            ) : (
              <>
                <p className="text-sm text-neutral-500">
                  Overall Score
                </p>

                <h2 className="mt-4 text-6xl font-bold">
                  {averageScore}/10
                </h2>
              </>
            )}
          </div>

          <div className="mt-8 space-y-4">
            <div className="rounded-xl border border-neutral-800 bg-black p-4">
              {finishingInterview ? (
                <>
                  <Skeleton className="h-6 w-32" />

                  <Skeleton className="mt-4 h-5 w-full" />

                  <Skeleton className="mt-2 h-5 w-4/5" />
                </>
              ) : (
                <>
                  <h3 className="font-semibold">
                    Strengths
                  </h3>

                  <p className="mt-2 text-neutral-400">
                    Strong conceptual
                    understanding and good
                    communication.
                  </p>
                </>
              )}
            </div>

            <div className="rounded-xl border border-neutral-800 bg-black p-4">
              {finishingInterview ? (
                <>
                  <Skeleton className="h-6 w-40" />

                  <Skeleton className="mt-4 h-5 w-full" />

                  <Skeleton className="mt-2 h-5 w-3/4" />
                </>
              ) : (
                <>
                  <h3 className="font-semibold">
                    Areas To Improve
                  </h3>

                  <p className="mt-2 text-neutral-400">
                    Add more real-world
                    examples and improve
                    answer structure.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  async function saveInterview(
    finalScore: number
  ) {
    try {
      const supabase = createClient();

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return;

      await supabase
        .from("interviews")
        .insert({
          user_id: user.id,
          topic,
          score: finalScore,
          questions:
            questionHistory.slice(
              0,
              answerHistory.length
            ),
          answers: answerHistory,
          feedback: feedbackHistory,
        });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-black p-8 text-white">
      <div className="mx-auto w-full max-w-4xl">
        <div className="rounded-2xl border border-neutral-900 bg-neutral-950 p-8">
          <div className="rounded-xl border border-neutral-800 bg-black p-6">
            <p className="text-sm text-neutral-500">
              AI Interviewer
            </p>

            {loading ? (
              <div className="mt-4 space-y-3">
                <Skeleton className="h-8 w-full" />

                <Skeleton className="h-8 w-3/4" />
              </div>
            ) : (
              <h2 className="mt-4 text-2xl font-semibold">
                {finishingInterview
                  ? "Generating Report Card..."
                  : error || question}
              </h2>
            )}
          </div>

          {loading ? (
            <div className="mt-6 space-y-4">
              <Skeleton className="h-50 w-full rounded-2xl" />

              <div className="flex justify-end">
                <Skeleton className="h-12 w-40 rounded-xl" />
              </div>
            </div>
          ) : (
            <>
              <textarea
                placeholder="Type your answer..."
                value={answer}
                onChange={(e) =>
                  setAnswer(e.target.value)
                }
                disabled={!!evaluation}
                className="mt-6 min-h-50 w-full rounded-2xl border border-neutral-800 bg-black p-4 outline-none disabled:cursor-not-allowed disabled:opacity-60"
              />

              {!evaluation ? (
                <div className="mt-6 flex justify-end">
                  <Button
                    onClick={handleSubmit}
                    disabled={!answer}
                    loading={submitting}
                  // className="rounded-xl bg-white px-6 py-3 font-medium text-black transition hover:scale-[1.02] hover:bg-neutral-200 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
                  >
                    Submit Answer
                  </Button>
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
                    <Button
                      onClick={
                        handleNextQuestion
                      }
                      className="rounded-xl bg-white px-6 py-3 font-medium text-black transition hover:scale-[1.02] hover:bg-neutral-200 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
                      loading={finishingInterview}
                    >
                      {currentQuestionIndex >= 2
                        ? "Finish Interview"
                        : "Next Question"}
                    </Button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}