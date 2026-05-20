import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="space-y-8 p-8">
      <Skeleton className="h-10 w-48" />

      <div className="rounded-2xl border border-neutral-900 bg-neutral-950 p-8">
        <Skeleton className="h-8 w-64" />

        <div className="mt-8 space-y-4">
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
        </div>
      </div>
    </div>
  );
}