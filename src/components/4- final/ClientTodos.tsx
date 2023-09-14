"use client";

import { trpc } from "~/client";
import { ClientTodo } from "./ClientTodo";
import { SkeletonsTodos } from "~/components";

export function ClientTodos() {
  const { data, isLoading } = trpc.todos.getTodos.useQuery();

  if (isLoading) {
    return <SkeletonsTodos />;
  }

  return (
    <ul className="space-y-3">
      {data?.map((todo) => (
        <li key={todo.id}>
          <ClientTodo {...todo} />
        </li>
      ))}
    </ul>
  );
}
