"use client";

import { trpc } from "~/client";
import { SkeletonTodos2 } from "~/components";
import { cn } from "~/utils";

export function ClientTodos2() {
  const { data, isLoading } = trpc.simpleTodos.getTodos.useQuery();

  if (isLoading) {
    return <SkeletonTodos2 />;
  }

  return (
    <div>
      <h1 className="mb-2 text-lg font-bold">Client Todos</h1>
      <ul className="space-y-3">
        {data?.map((todo) => (
          <li
            key={todo.id}
            className={cn("text-base", {
              "line-through": todo.completed,
            })}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
