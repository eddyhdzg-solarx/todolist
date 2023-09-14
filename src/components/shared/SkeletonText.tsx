import type { HTMLAttributes } from "react";
import { cn } from "~/utils";

interface SkeletonTextProps {
  className?: HTMLAttributes<HTMLDivElement>["className"];
  tag?: "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p";
}

export function SkeletonText({ className, tag = "div" }: SkeletonTextProps) {
  const Tag = tag;

  return (
    <Tag
      className={cn(
        "w-full animate-pulse select-none rounded bg-muted text-transparent",
        className,
      )}
    >
      -
    </Tag>
  );
}
