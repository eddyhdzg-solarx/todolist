"use client";

import { trpc } from "~/client";
import { cn } from "~/utils";

export function ClientTodos1() {
  const { data, isLoading } = trpc.simpleTodos.getTodos.useQuery();

  if (isLoading) {
    return <div>Loading ...</div>;
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
