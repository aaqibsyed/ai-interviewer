export default function InterviewPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black p-8 text-white">
      <div className="mx-auto w-full max-w-4xl">
        <div className="rounded-2xl border border-neutral-900 bg-neutral-950 p-8">
          <div className="rounded-xl border border-neutral-800 bg-black p-6">
            <p className="text-sm text-neutral-500">
              AI Interviewer
            </p>

            <h2 className="mt-4 text-2xl font-semibold">
              Explain the difference between CSR and SSR in Next.js.
            </h2>
          </div>

          <textarea
            placeholder="Type your answer..."
            className="mt-6 min-h-[200px] w-full rounded-2xl border border-neutral-800 bg-black p-4 outline-none"
          />

          <div className="mt-6 flex justify-end">
            <button className="rounded-xl bg-white px-6 py-3 font-medium text-black">
              Submit Answer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}