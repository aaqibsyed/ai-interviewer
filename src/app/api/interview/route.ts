import { NextResponse } from "next/server";

const questions: Record<string, string[]> = {
  react: [
    "Explain the difference between useMemo and useCallback.",
    "What causes unnecessary re-renders in React?",
    "Explain React reconciliation.",
  ],

  javascript: [
    "What is closure in JavaScript?",
    "Explain event bubbling and capturing.",
    "Difference between == and ===?",
  ],

  nextjs: [
    "Explain SSR vs CSR in Next.js.",
    "What is hydration in React?",
    "What is revalidation in Next.js?",
  ],

  hr: [
    "Tell me about yourself.",
    "Describe a challenging situation you faced.",
    "Why should we hire you?",
  ],
};

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { topic } = body;

    const topicQuestions =
      questions[topic] || [
        "Tell me about yourself.",
      ];

    const randomQuestion =
      topicQuestions[
        Math.floor(
          Math.random() *
            topicQuestions.length
        )
      ];

    await new Promise((resolve) =>
      setTimeout(resolve, 1200)
    );

    return NextResponse.json({
      question: randomQuestion,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Failed to generate question",
      },
      {
        status: 500,
      }
    );
  }
}