import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

export default function Loading() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 text-white">
      <Skeleton className="h-10 w-64" />

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {[1, 2, 3].map((item) => (
          <Card key={item}>
            <CardContent>
              <Skeleton className="h-4 w-32" />

              <Skeleton className="mt-4 h-10 w-24" />
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-8">
        <CardContent>
          <Skeleton className="h-64 w-full rounded-xl" />
        </CardContent>
      </Card>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <Skeleton className="h-10 w-full sm:w-40" />

        <Skeleton className="h-10 w-full sm:w-40" />
      </div>

      <div className="mt-8 grid gap-4">
        {[1, 2, 3, 4].map((item) => (
          <Card key={item}>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <Skeleton className="h-6 w-48" />

                  <Skeleton className="mt-3 h-4 w-28" />
                </div>

                <Skeleton className="h-10 w-16 rounded-full" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}