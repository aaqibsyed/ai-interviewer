import { createClient }
    from "@/lib/supabase/server";

import { notFound }
    from "next/navigation";

import Link from "next/link";

import { ArrowLeft }
    from "lucide-react";

export default async function ReportPage({
    params,
}: {
    params: Promise<{
        id: string;
    }>;
}) {
    const { id } = await params;

    const supabase =
        await createClient();

    const { data: interview } =
        await supabase
            .from("interviews")
            .select("*")
            .eq("id", id)
            .single();

    if (!interview) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-black p-8 text-white">
            <div className="mx-auto max-w-5xl">
                <Link
                    href="/history"
                    className="mb-6 inline-flex items-center gap-2 text-neutral-400 transition hover:text-white"
                >
                    <ArrowLeft className="h-4 w-4" />

                    Back to History
                </Link>
                <div className="rounded-2xl border border-neutral-900 bg-neutral-950 p-8">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-4xl font-bold capitalize">
                                {interview.topic} Report
                            </h1>

                            <p className="mt-3 text-neutral-400">
                                Detailed interview
                                evaluation and feedback.
                            </p>
                        </div>
                        <p className="mt-2 text-sm text-neutral-500">
                            Completed on{" "}
                            {new Date(
                                interview.created_at
                            ).toLocaleDateString()}
                        </p>

                        <div className="rounded-full bg-white px-6 py-3 text-xl font-bold text-black">
                            {interview.score}/10
                        </div>
                    </div>
                </div>

                <div className="mt-8 space-y-6">
                    {interview.questions?.length ? (
                        interview.questions.map(
                            (
                                question: string,
                                index: number
                            ) => {
                                const answer =
                                    interview.answers[
                                    index
                                    ];

                                const feedback =
                                    interview.feedback[
                                    index
                                    ];

                                return (
                                    <div
                                        key={index}
                                        className="rounded-2xl border border-neutral-900 bg-neutral-950 p-8"
                                    >
                                        <div>
                                            <p className="text-sm text-neutral-500">
                                                Question{" "}
                                                {index + 1}
                                            </p>

                                            <h2 className="mt-2 text-2xl font-semibold">
                                                {question}
                                            </h2>
                                        </div>

                                        <div className="mt-8">
                                            <p className="text-sm text-neutral-500">
                                                Your Answer
                                            </p>

                                            <div className="mt-3 rounded-xl border border-neutral-800 bg-black p-5 text-neutral-300">
                                                {answer}
                                            </div>
                                        </div>

                                        <div className="mt-8">
                                            <div className="flex items-center justify-between">
                                                <p className="text-sm text-neutral-500">
                                                    AI Feedback
                                                </p>

                                                <div className="rounded-full bg-white px-4 py-2 text-sm font-bold text-black">
                                                    {
                                                        feedback.score
                                                    }
                                                    /10
                                                </div>
                                            </div>

                                            <div className="mt-3 rounded-xl border border-neutral-800 bg-black p-5 text-neutral-300">
                                                {
                                                    feedback.feedback
                                                }
                                            </div>
                                        </div>

                                        <div className="mt-8">
                                            <p className="text-sm text-neutral-500">
                                                Improved Answer
                                            </p>

                                            <div className="mt-3 rounded-xl border border-neutral-800 bg-black p-5 text-neutral-300">
                                                {
                                                    feedback.improvedAnswer
                                                }
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                        )) : (
                        <div className="rounded-2xl border border-dashed border-neutral-800 bg-neutral-950 p-12 text-center">
                            <h2 className="text-2xl font-semibold">
                                No Report Data
                            </h2>

                            <p className="mt-4 text-neutral-400">
                                This interview does not contain
                                detailed report information.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}