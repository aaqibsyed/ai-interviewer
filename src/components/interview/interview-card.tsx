"use client";

import { useRouter } from "next/navigation";

interface InterviewCardProps {
  title: string;

  description: string;

  topic: string;
}

export function InterviewCard({
  title,
  description,
  topic,
}: InterviewCardProps) {
  const router = useRouter();

  function handleStart() {
    router.push(`/interview/${topic}`);
  }

  return (
    <div className="rounded-2xl border border-neutral-900 bg-neutral-950 p-6">
      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-2 text-neutral-400">
        {description}
      </p>

      <button
        onClick={handleStart}
        className="mt-6 rounded-xl bg-white px-4 py-2 text-sm font-medium text-black"
      >
        Start Interview
      </button>
    </div>
  );
}