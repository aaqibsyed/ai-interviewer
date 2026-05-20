import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

export default function Loading() {
  return (
    <div className="space-y-8 p-6">
      <div>
        <Skeleton className="h-10 w-48" />
        <Skeleton className="mt-3 h-5 w-full max-w-md" />
      </div>

      <Card>
        <CardContent>
          <Skeleton className="h-7 w-24" />

          <div className="mt-6 space-y-3">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-5 w-64" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Skeleton className="h-7 w-52" />

          <div className="mt-6 space-y-4">
            <Skeleton className="h-5 w-full max-w-sm" />
            <Skeleton className="h-5 w-full max-w-sm" />
            <Skeleton className="h-5 w-full max-w-sm" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Skeleton className="h-7 w-28" />

          <div className="mt-6 space-y-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}