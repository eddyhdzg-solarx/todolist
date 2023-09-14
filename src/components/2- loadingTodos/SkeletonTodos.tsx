import { SkeletonText } from "../SkeletonText";

export function SkeletonTodos() {
  return (
    <div>
      <SkeletonText className="mb-2 w-48 text-lg" />
      <ul className="space-y-3">
        <li>
          <SkeletonText className="w-full text-base" />
        </li>
        <li>
          <SkeletonText className="w-full text-base" />
        </li>
      </ul>
    </div>
  );
}
