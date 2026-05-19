import { questions }
from "@/data/questions";

type Difficulty =
  "easy"
  | "medium"
  | "hard";

export function getDifficulty(
  previousScore?: number
): Difficulty {
  if (
    previousScore === undefined
  ) {
    return "medium";
  }

  if (previousScore <= 4) {
    return "easy";
  }

  if (previousScore <= 7) {
    return "medium";
  }

  return "hard";
}

export function getNextQuestion({
  topic,
  previousScore,
  usedQuestions,
}: {
  topic: keyof typeof questions;

  previousScore?: number;

  usedQuestions: string[];
}) {
  const difficulty =
    getDifficulty(
      previousScore
    );

  const pool =
    questions[topic][difficulty];

  const availableQuestions =
    pool.filter(
      (item) =>
        !usedQuestions.includes(
          item.question
        )
    );

  if (
    availableQuestions.length === 0
  ) {
    return null;
  }

  const randomIndex =
    Math.floor(
      Math.random() *
        availableQuestions.length
    );

  return availableQuestions[
    randomIndex
  ];
}