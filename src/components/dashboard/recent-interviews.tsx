import { Card, CardContent } from "@/components/ui/card";

interface Interview {
  topic: string;
  score: number;
  created_at: string;
}

interface RecentInterviewsProps {
  interviews: Interview[];
}

export function RecentInterviews({
  interviews,
}: RecentInterviewsProps) {
  if (interviews.length === 0) {
    return (
      <Card>
        <CardContent>
          <h2 className="text-xl font-semibold">
            Recent Interviews
          </h2>

          <p className="mt-4 text-neutral-400">
            No interviews completed yet.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent>
        <h2 className="text-xl font-semibold">
          Recent Interviews
        </h2>

        <div className="mt-6 space-y-4">
          {interviews
            .slice(0, 5)
            .map((interview, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b border-neutral-800 pb-3"
              >
                <div>
                  <p className="font-medium capitalize">
                    {interview.topic}
                  </p>

                  <p className="text-sm text-neutral-400">
                    {new Date(
                      interview.created_at
                    ).toLocaleDateString()}
                  </p>
                </div>

                <div className="rounded-full bg-white px-3 py-1 text-sm font-bold text-black">
                  {interview.score}/10
                </div>
              </div>
            ))}
        </div>
      </CardContent>
    </Card>
  );
}