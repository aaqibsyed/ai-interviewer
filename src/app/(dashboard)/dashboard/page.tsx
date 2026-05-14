import { InterviewCard } from "@/components/interview/interview-card";

const interviews = [
  {
    title: "React Interview",
    topic: "react",
    description:
      "Practice React fundamentals, hooks, rendering, and performance.",
  },
  {
    title: "JavaScript Interview",
    topic: "javascript",
    description:
      "Prepare for closures, promises, async patterns, and core JS concepts.",
  },
  {
    title: "Next.js Interview",
    topic: "nextjs",
    description:
      "Master App Router, SSR, caching, and modern Next.js architecture.",
  },
  {
    title: "HR Interview",
    topic: "hr",
    description:
      "Practice behavioral and communication interview questions.",
  },
];

export default function DashboardPage() {
  return (
    <div className="p-8">
      <div>
        <h1 className="text-3xl font-bold">
          Interview Dashboard
        </h1>

        <p className="mt-2 text-neutral-400">
          Choose an interview track and start practicing.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {interviews.map((interview) => (
          <InterviewCard
            key={interview.title}
            title={interview.title}
            description={interview.description}
            topic={interview.topic}
          />
        ))}
      </div>
    </div>
  );
}