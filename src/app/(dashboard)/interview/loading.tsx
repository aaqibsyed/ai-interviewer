import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

export default function Loading() {
  return (
    <div className="space-y-8 p-6">
      <div>
        <Skeleton className="h-10 w-64" />
        <Skeleton className="mt-3 h-5 w-full max-w-md" />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {[1, 2].map((item) => (
          <Card key={item}>
            <CardContent>
              <Skeleton className="h-7 w-48" />

              <div className="mt-6 space-y-3">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-4/6" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardContent>
          <Skeleton className="h-7 w-40" />

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div key={item}>
                <Skeleton className="h-5 w-40" />
                <Skeleton className="mt-3 h-4 w-full" />
                <Skeleton className="mt-2 h-4 w-5/6" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}