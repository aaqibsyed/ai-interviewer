import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

export default function Loading() {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div>
        <Skeleton className="h-10 w-72" />

        <Skeleton className="mt-3 h-5 w-80" />
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {[1, 2, 3].map((item) => (
          <Card key={item}>
            <CardContent>
              <Skeleton className="h-4 w-28" />

              <Skeleton className="mt-4 h-10 w-24" />
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {[1, 2, 3, 4].map((item) => (
          <Card key={item}>
            <CardContent>
              <Skeleton className="h-7 w-40" />

              <Skeleton className="mt-4 h-4 w-full" />

              <Skeleton className="mt-2 h-4 w-4/5" />

              <Skeleton className="mt-6 h-10 w-32" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}