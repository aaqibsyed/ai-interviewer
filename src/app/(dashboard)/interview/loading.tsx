import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="space-y-8 p-8">
      <Skeleton className="h-10 w-64" />

      <div className="rounded-2xl border border-neutral-900 bg-neutral-950 p-8">
        <Skeleton className="h-8 w-72" />
        <Skeleton className="mt-4 h-5 w-full" />
        <Skeleton className="mt-2 h-5 w-4/5" />

        <div className="mt-8 space-y-3">
          <Skeleton className="h-5 w-60" />
          <Skeleton className="h-5 w-72" />
          <Skeleton className="h-5 w-56" />
        </div>
      </div>
    </div>
  );
}