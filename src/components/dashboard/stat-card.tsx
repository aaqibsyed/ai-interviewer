import { Card, CardContent } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: string | number;
}

export function StatCard({
  title,
  value,
}: StatCardProps) {
  return (
    <Card>
      <CardContent>
        <p className="text-sm text-neutral-400">
          {title}
        </p>

        <h3 className="mt-2 text-3xl font-bold">
          {value}
        </h3>
      </CardContent>
    </Card>
  );
}