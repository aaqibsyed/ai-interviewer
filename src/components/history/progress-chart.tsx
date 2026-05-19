"use client";

import {
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import { Card, CardContent } from "../ui/card";

interface ProgressChartProps {
    data: {
        date: string;
        score: number;
    }[];
}

export function ProgressChart({
    data,
}: ProgressChartProps) {
    return (
        // <div className="rounded-2xl border border-neutral-900 bg-neutral-950 p-6">
        <Card>
            <CardContent>
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-white">
                        Performance Trend
                    </h2>

                    <p className="mt-2 text-sm text-neutral-400">
                        Track interview progress over
                        time.
                    </p>
                </div>

                <div className="h-80">
                    <ResponsiveContainer
                        width="100%"
                        height="100%"
                    >
                        <LineChart data={data}>
                            <XAxis
                                dataKey="label"
                                stroke="#737373"
                            />

                            <YAxis
                                domain={[0, 10]}
                                stroke="#737373"
                            />

                            <Tooltip
                                contentStyle={{
                                    backgroundColor: "#0a0a0a",
                                    border: "1px solid #262626",
                                    borderRadius: "12px",
                                    color: "#ffffff",
                                }}
                                formatter={(value) => [
                                    `${value}/10`,
                                    "Score",
                                ]}

                                labelFormatter={(label, payload) =>
                                    payload?.[0]?.payload?.date ||
                                    label
                                }
                            />

                            <Line
                                type="monotone"
                                dataKey="score"
                                stroke="#ffffff"
                                strokeWidth={3}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
        //  </div>
    );
}