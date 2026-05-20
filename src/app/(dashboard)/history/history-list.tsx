"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

interface Interview {
    id: string;
    topic: string;
    score: number;
    created_at: string;
}

interface HistoryListProps {
    interviews: Interview[];
}

export function HistoryList({
    interviews,
}: HistoryListProps) {
    const [selectedTopic, setSelectedTopic] =
        useState("all");

    const [sortBy, setSortBy] =
        useState("newest");

    const filteredInterviews =
        useMemo(() => {
            let data = [...interviews];

            if (selectedTopic !== "all") {
                data = data.filter(
                    (interview) =>
                        interview.topic === selectedTopic
                );
            }

            switch (sortBy) {
                case "oldest":
                    data.sort(
                        (a, b) =>
                            new Date(
                                a.created_at
                            ).getTime() -
                            new Date(
                                b.created_at
                            ).getTime()
                    );
                    break;

                case "highest":
                    data.sort(
                        (a, b) =>
                            b.score - a.score
                    );
                    break;

                case "lowest":
                    data.sort(
                        (a, b) =>
                            a.score - b.score
                    );
                    break;

                default:
                    data.sort(
                        (a, b) =>
                            new Date(
                                b.created_at
                            ).getTime() -
                            new Date(
                                a.created_at
                            ).getTime()
                    );
            }

            return data;
        }, [
            interviews,
            selectedTopic,
            sortBy,
        ]);

    return (
        <>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <select
                    value={selectedTopic}
                    onChange={(e) =>
                        setSelectedTopic(
                            e.target.value
                        )
                    }
                    className="rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-2"
                >
                    <option value="all">
                        All Topics
                    </option>

                    <option value="react">
                        React
                    </option>

                    <option value="javascript">
                        JavaScript
                    </option>

                    <option value="nextjs">
                        Next.js
                    </option>

                    <option value="hr">
                        HR
                    </option>
                </select>

                <select
                    value={sortBy}
                    onChange={(e) =>
                        setSortBy(
                            e.target.value
                        )
                    }
                    className="rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-2"
                >
                    <option value="newest">
                        Newest First
                    </option>

                    <option value="oldest">
                        Oldest First
                    </option>

                    <option value="highest">
                        Highest Score
                    </option>

                    <option value="lowest">
                        Lowest Score
                    </option>
                </select>
            </div>

            {filteredInterviews.length === 0 ? (
                <div className="mt-8 rounded-2xl border border-dashed border-neutral-800 bg-neutral-950 p-12 text-center">
                    <h2 className="text-2xl font-semibold">
                        No Interviews Found
                    </h2>

                    <p className="mt-4 text-neutral-400">
                        Try changing your filters.
                    </p>
                </div>
            ) : (
                <div className="mt-8 max-h-[400px] overflow-y-auto pr-2 md:max-h-[600px] scrollbar-thumb-gray-500">
                    <div className="grid gap-4">
                        {filteredInterviews.map(
                            (interview) => (
                                <Link
                                    key={interview.id}
                                    href={`/history/${interview.id}`}
                                    className="rounded-2xl border border-neutral-900 bg-neutral-950 p-6 transition hover:border-neutral-700 hover:bg-neutral-900 hover:scale-[1.01]"
                                >
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                                                <h2 className="text-lg font-semibold capitalize sm:text-xl">
                                                    {interview.topic} Interview
                                                </h2>

                                                <span className="w-fit rounded-full bg-neutral-800 px-3 py-1 text-xs">
                                                    {interview.topic}
                                                </span>
                                            </div>


                                            <p className="mt-2 text-sm text-neutral-400">
                                                {new Date(
                                                    interview.created_at
                                                ).toLocaleDateString()}
                                            </p>
                                        </div>

                                        <div className="rounded-full bg-white px-4 py-2 text-sm font-bold text-black">
                                            {
                                                interview.score
                                            }
                                            /10
                                        </div>
                                    </div>
                                </Link>
                            )
                        )}
                    </div>
                </div>
            )}
        </>
    );
}