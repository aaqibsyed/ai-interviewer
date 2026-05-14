import { NextResponse } from "next/server";

const feedbacks = [
  {
    score: 8,
    feedback:
      "Good explanation with solid technical understanding.",

    improvedAnswer:
      "You could improve by giving a more structured real-world example.",
  },

  {
    score: 6,
    feedback:
      "Decent answer but missing depth and clarity.",

    improvedAnswer:
      "Try explaining the concept step-by-step with practical examples.",
  },

  {
    score: 9,
    feedback:
      "Excellent answer with strong conceptual clarity.",

    improvedAnswer:
      "Very strong answer. Adding performance considerations would make it even better.",
  },
];

export async function POST() {
  try {
    const randomFeedback =
      feedbacks[
        Math.floor(
          Math.random() *
            feedbacks.length
        )
      ];

    await new Promise((resolve) =>
      setTimeout(resolve, 1500)
    );

    return NextResponse.json(
      randomFeedback
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Evaluation failed",
      },
      {
        status: 500,
      }
    );
  }
}