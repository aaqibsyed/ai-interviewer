import * as React from "react";

import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;

  description?: string;

  className?: string;
}

export function PageHeader({
  title,
  description,
  className,
}: PageHeaderProps) {
  return (
    <div className={cn(className)}>
      <h1 className="text-4xl font-bold text-white">
        {title}
      </h1>

      {description && (
        <p className="mt-3 text-neutral-400">
          {description}
        </p>
      )}
    </div>
  );
}