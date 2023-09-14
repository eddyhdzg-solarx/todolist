"use client";

import { trpc } from "~/client";
import { SkeletonTodos } from "./SkeletonTodos";

export function ClientTodos2() {
  const { data, isLoading } = trpc.simpleTodos.getTodos.useQuery();

  if (isLoading) {
    return <SkeletonTodos />;
  }

  return (
    <div>
      <h1 className="mb-2 text-lg font-bold">Client Todos</h1>
      <ul className="space-y-3">
        {data?.map((todo) => (
          <li key={todo.id} className="text-base">
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
