interface InterviewCardProps {
  title: string;

  description: string;
}

export function InterviewCard({
  title,
  description,
}: InterviewCardProps) {
  return (
    <div className="rounded-2xl border border-neutral-900 bg-neutral-950 p-6">
      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-2 text-neutral-400">
        {description}
      </p>

      <button className="mt-6 rounded-xl bg-white px-4 py-2 text-sm font-medium text-black">
        Start Interview
      </button>
    </div>
  );
}