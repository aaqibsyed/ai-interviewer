import { Skeleton }
from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen bg-black p-8 text-white">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-2xl border border-neutral-900 bg-neutral-950 p-8">
          <div className="flex items-center justify-between">
            <div>
              <Skeleton className="h-10 w-72" />

              <Skeleton className="mt-4 h-5 w-80" />
            </div>

            <Skeleton className="h-14 w-24 rounded-full" />
          </div>
        </div>

        <div className="mt-8 space-y-6">
          {Array.from({
            length: 3,
          }).map((_, index) => (
            <div
              key={index}
              className="rounded-2xl border border-neutral-900 bg-neutral-950 p-8"
            >
              <div>
                <Skeleton className="h-4 w-24" />

                <Skeleton className="mt-3 h-8 w-full" />
              </div>

              <div className="mt-8">
                <Skeleton className="h-4 w-32" />

                <div className="mt-3 rounded-xl border border-neutral-800 bg-black p-5">
                  <Skeleton className="h-5 w-full" />

                  <Skeleton className="mt-3 h-5 w-4/5" />

                  <Skeleton className="mt-3 h-5 w-3/4" />
                </div>
              </div>

              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <Skeleton className="h-4 w-28" />

                  <Skeleton className="h-10 w-16 rounded-full" />
                </div>

                <div className="mt-3 rounded-xl border border-neutral-800 bg-black p-5">
                  <Skeleton className="h-5 w-full" />

                  <Skeleton className="mt-3 h-5 w-5/6" />
                </div>
              </div>

              <div className="mt-8">
                <Skeleton className="h-4 w-36" />

                <div className="mt-3 rounded-xl border border-neutral-800 bg-black p-5">
                  <Skeleton className="h-5 w-full" />

                  <Skeleton className="mt-3 h-5 w-4/5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}