"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

interface Interview {
  id: string;
  topic: string;
  score: number;
  created_at: string;
}

interface ScoreChartProps {
  interviews: Interview[];
}

export function ScoreChart({
  interviews,
}: ScoreChartProps) {
  if (interviews.length === 0) {
    return (
      <div className="flex h-[300px] items-center justify-center rounded-2xl border border-neutral-900 bg-neutral-950">
        <p className="text-center text-neutral-400">
          No interview data available yet.
          <br />
          Complete your first interview to see performance trends.
        </p>
      </div>
    );
  }

  const chartData = [...interviews]
    .reverse()
    .map((interview, index) => ({
      interview: `#${index + 1}`,
      score: Number(interview.score),
      topic: interview.topic,
    }));

  return (
    <div className="rounded-2xl border border-neutral-900 bg-neutral-950 p-6">
      <h2 className="mb-6 text-xl font-semibold">
        Performance Trend
      </h2>

      <div className="h-[300px] w-full">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <LineChart data={chartData}>
            <CartesianGrid
              strokeDasharray="3 3"
            />

            <XAxis dataKey="interview" />

            <YAxis
              domain={[0, 10]}
              ticks={[
                0,
                2,
                4,
                6,
                8,
                10,
              ]}
            />

            <Tooltip
              contentStyle={{
                backgroundColor:
                  "#0a0a0a",
                border:
                  "1px solid #262626",
                borderRadius:
                  "12px",
              }}
            />

            <Line
              type="monotone"
              dataKey="score"
              strokeWidth={3}
              dot={{ r: 5 }}
              activeDot={{ r: 7 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}