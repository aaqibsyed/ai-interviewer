import { NextResponse } from "next/server";

import { questions } from "@/data/questions";

export async function POST(
  request: Request
) {
  try {
    const body = await request.json();

    const { topic, index } = body;

    const topicQuestions =
      questions[
        topic as keyof typeof questions
      ] || [];

    const question =
      topicQuestions[index];

    await new Promise((resolve) =>
      setTimeout(resolve, 1000)
    );

    return NextResponse.json({
      question,
      totalQuestions:
        topicQuestions.length,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Failed to load question",
      },
      {
        status: 500,
      }
    );
  }
}