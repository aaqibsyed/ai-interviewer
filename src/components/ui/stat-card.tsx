import * as React from "react";

import {
  Card,
  CardContent,
} from "./card";

interface StatCardProps {
  label: string;

  value: string | number;
}

export function StatCard({
  label,
  value,
}: StatCardProps) {
  return (
    <Card>
      <CardContent>
        <p className="text-sm text-neutral-400">
          {label}
        </p>

        <h2 className="mt-4 text-4xl font-bold text-white">
          {value}
        </h2>
      </CardContent>
    </Card>
  );
}