import * as React from "react";

import { cn } from "@/lib/utils";

type CardProps =
    React.HTMLAttributes<HTMLDivElement>;

export function Card({
    className,
    ...props
}: CardProps) {
    return (
        <div
            className={cn(
                "rounded-2xl border border-neutral-900 bg-neutral-950",
                className
            )}
            {...props}
        />
    );
}

type CardContentProps =
    React.HTMLAttributes<HTMLDivElement>

export function CardContent({
    className,
    ...props
}: CardContentProps) {
    return (
        <div
            className={cn(
                "p-6",
                className
            )}
            {...props}
        />
    );
}