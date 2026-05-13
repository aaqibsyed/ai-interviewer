const cards = [
  {
    title: "Total Interviews",
    value: "24",
  },
  {
    title: "Average Score",
    value: "8.2",
  },
  {
    title: "Hours Practiced",
    value: "18h",
  },
];

export default function DashboardPage() {
  return (
    <div className="p-8">
      <div>
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="mt-2 text-neutral-400">
          Track your interview preparation progress.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.title}
            className="rounded-2xl border border-neutral-900 bg-neutral-950 p-6"
          >
            <p className="text-sm text-neutral-400">
              {card.title}
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              {card.value}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}