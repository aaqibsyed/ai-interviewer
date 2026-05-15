import { Skeleton }
from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="p-8 text-white">
      <Skeleton className="h-10 w-72" />

      <Skeleton className="mt-4 h-5 w-96" />

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {Array.from({
          length: 4,
        }).map((_, index) => (
          <div
            key={index}
            className="rounded-2xl border border-neutral-900 bg-neutral-950 p-6"
          >
            <Skeleton className="h-8 w-56" />

            <div className="mt-4 space-y-3">
              <Skeleton className="h-4 w-full" />

              <Skeleton className="h-4 w-5/6" />
            </div>

            <Skeleton className="mt-8 h-12 w-40 rounded-xl" />
          </div>
        ))}
      </div>
    </div>
  );
}