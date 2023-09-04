import type { DetailedHTMLProps, HTMLAttributes } from "react";
import { cn } from "~/utils";

type ContainerProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export function Container({ className, ...rest }: ContainerProps) {
  return (
    <div
      className={cn("container mx-auto px-4 md:px-6 lg:px-8", className)}
      {...rest}
    />
  );
}
