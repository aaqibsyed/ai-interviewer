import { createClient }
    from "@/lib/supabase/server";
import Link from "next/link";

export default async function HistoryPage() {
    const supabase =
        await createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    const { data: interviews } =
        await supabase
            .from("interviews")
            .select("*")
            .eq("user_id", user?.id)
            .order("created_at", {
                ascending: false,
            });

    return (
        <div className="p-8 text-white">
            <h1 className="text-3xl font-bold">
                Interview History
            </h1>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-neutral-900 bg-neutral-950 p-6">
                    <p className="text-sm text-neutral-500">
                        Total Interviews
                    </p>

                    <h2 className="mt-4 text-4xl font-bold">
                        {interviews?.length || 0}
                    </h2>
                </div>

                <div className="rounded-2xl border border-neutral-900 bg-neutral-950 p-6">
                    <p className="text-sm text-neutral-500">
                        Average Score
                    </p>

                    <h2 className="mt-4 text-4xl font-bold">
                        {interviews?.length
                            ? Math.round(
                                interviews.reduce(
                                    (acc, item) =>
                                        acc + item.score,
                                    0
                                ) / interviews.length
                            )
                            : 0}
                        /10
                    </h2>
                </div>

                <div className="rounded-2xl border border-neutral-900 bg-neutral-950 p-6">
                    <p className="text-sm text-neutral-500">
                        Latest Topic
                    </p>

                    <h2 className="mt-4 text-2xl font-bold capitalize">
                        {interviews?.[0]?.topic ||
                            "-"}
                    </h2>
                </div>
            </div>

            {interviews?.length === 0 && (
                <div className="mt-8 rounded-2xl border border-dashed border-neutral-800 bg-neutral-950 p-12 text-center">
                    <h2 className="text-2xl font-semibold">
                        No Interviews Yet
                    </h2>

                    <p className="mt-4 text-neutral-400">
                        Complete your first interview to
                        start tracking progress.
                    </p>
                </div>
            )}

            {interviews &&
                interviews.length > 0 && (
                    <div className="mt-8 grid gap-4">
                        {interviews?.map(
                            (interview) => (
                                <Link
                                    href={`/history/${interview.id}`}
                                    key={interview.id}
                                    className="rounded-2xl border border-neutral-900 bg-neutral-950 p-6 transition hover:border-neutral-700 hover:bg-neutral-900 hover:scale-[1.01]"
                                >
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h2 className="text-xl font-semibold capitalize">
                                                {
                                                    interview.topic
                                                }{" "}
                                                Interview
                                            </h2>

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
                    </div>)}
        </div>
    );
}