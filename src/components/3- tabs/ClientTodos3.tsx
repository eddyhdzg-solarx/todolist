"use client";

import { useState } from "react";
import { trpc } from "~/client";
import { SkeletonTodos2 } from "~/components";
import { ClientTabs } from "./ClientTabs";
import { cn } from "~/utils";

export function ClientTodos3() {
  const [completed, setCompleted] = useState<boolean | undefined>(undefined);

  const { data, isLoading } = trpc.todos.getTodosWithFilter.useQuery({
    completed,
  });

  if (isLoading) {
    return (
      <div>
        <ClientTabs completed={completed} setCompleted={setCompleted} />
        <SkeletonTodos2 />
      </div>
    );
  }

  return (
    <div>
      <ClientTabs completed={completed} setCompleted={setCompleted} />
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
