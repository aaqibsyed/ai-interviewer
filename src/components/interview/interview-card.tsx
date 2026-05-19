"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

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
    // <div className="rounded-2xl border border-neutral-900 bg-neutral-950 p-6">
    <Card>
      <CardContent>
      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-2 text-neutral-400">
        {description}
      </p>

      <Button
        onClick={handleStart}
        className="mt-6 rounded-xl bg-white px-4 py-2 text-sm font-medium text-black transition hover:scale-[1.02] hover:bg-neutral-200 active:scale-[0.98]"
      >
        Start Interview
      </Button>
    {/* </div> */}
    </CardContent>
    </Card>
  );
}