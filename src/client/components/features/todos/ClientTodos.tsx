"use client";

import { trpc, ClientTodo } from "~/client";
import { TodosSkeletons } from "~/neutral";

export function ClientTodos() {
  const { data, isLoading } = trpc.todos.getTodos.useQuery();

  if (isLoading) {
    return <TodosSkeletons />;
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
