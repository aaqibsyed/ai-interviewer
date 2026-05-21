import { InterviewCard } from "@/components/interview/interview-card";
import { createClient } from "@/lib/supabase/server";
import { StatCard } from "@/components/dashboard/stat-card";

export const metadata = {
  title:
    "Dashboard",
};

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

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: interviewHistory,
  } = await supabase
    .from("interviews")
    .select("score, topic, created_at")
    .order("created_at", {
      ascending: false,
    });

  const totalInterviews =
    interviewHistory?.length ?? 0;

  const averageScore =
    totalInterviews > 0
      ? (
        interviewHistory!.reduce(
          (sum, item) =>
            sum + item.score,
          0
        ) / totalInterviews
      ).toFixed(1)
      : "0.0";

  const bestScore =
    totalInterviews > 0
      ? Math.max(
        ...interviewHistory!.map(
          (item) => item.score
        )
      )
      : 0;
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

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <StatCard
          title="Total Interviews"
          value={totalInterviews}
        />

        <StatCard
          title="Average Score"
          value={averageScore}
        />

        <StatCard
          title="Best Score"
          value={bestScore}
        />
      </div>
{/* 
      <div className="mt-8 ">
      <RecentInterviews
        interviews={interviewHistory ?? []}
      />
      </div> */}

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