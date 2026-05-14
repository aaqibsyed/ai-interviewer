export type InterviewTopic =
  | "react"
  | "javascript"
  | "nextjs"
  | "hr";

export interface InterviewQuestion {
  id: string;
  question: string;
}

export interface InterviewMessage {
  role: "assistant" | "user";

  content: string;
}

export interface InterviewFeedback {
  score: number;

  feedback: string;

  improvedAnswer: string;
}