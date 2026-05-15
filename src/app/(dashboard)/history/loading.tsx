import { Skeleton }
from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="p-8 text-white">
      <Skeleton className="h-10 w-72" />

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {Array.from({
          length: 3,
        }).map((_, index) => (
          <div
            key={index}
            className="rounded-2xl border border-neutral-900 bg-neutral-950 p-6"
          >
            <Skeleton className="h-4 w-32" />

            <Skeleton className="mt-4 h-10 w-20" />
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-neutral-900 bg-neutral-950 p-6">
        <Skeleton className="h-8 w-56" />

        <Skeleton className="mt-3 h-4 w-72" />

        <div className="mt-8 h-80">
          <Skeleton className="h-full w-full rounded-xl" />
        </div>
      </div>

      <div className="mt-8 space-y-4">
        {Array.from({
          length: 4,
        }).map((_, index) => (
          <div
            key={index}
            className="rounded-2xl border border-neutral-900 bg-neutral-950 p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <Skeleton className="h-6 w-48" />

                <Skeleton className="mt-3 h-4 w-32" />
              </div>

              <Skeleton className="h-10 w-16 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}