import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/@/components/ui/card";
import type { PropsWithChildren } from "react";
import { cn } from "~/utils";

interface TodosCardProps extends PropsWithChildren {
  description: string;
  title: string;
  className: string;
}

export function TodosCard({
  children,
  description,
  title,
  className,
}: TodosCardProps) {
  return (
    <Card className={cn("w-full border-0 border-l-4", className)}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="text-zinc-100/70">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
