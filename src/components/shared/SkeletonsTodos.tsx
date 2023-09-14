import { Skeleton } from "~/@/components/ui/skeleton";

export function SkeletonsTodos() {
  return (
    <ul className="space-y-3">
      <li className="flex h-10 w-full items-center space-x-2">
        <Skeleton className="h-full flex-1 rounded-sm" />
        <Skeleton className="h-10 w-8 rounded-sm" />
        <Skeleton className="h-10 w-8 rounded-sm" />
      </li>
      <li className="flex h-10 w-full items-center space-x-2">
        <Skeleton className="h-full flex-1 rounded-sm" />
        <Skeleton className="h-10 w-8 rounded-sm" />
        <Skeleton className="h-10 w-8 rounded-sm" />
      </li>
      <li className="flex h-10 w-full items-center space-x-2">
        <Skeleton className="h-full flex-1 rounded-sm" />
        <Skeleton className="h-10 w-8 rounded-sm" />
        <Skeleton className="h-10 w-8 rounded-sm" />
      </li>
    </ul>
  );
}
