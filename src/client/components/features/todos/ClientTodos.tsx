"use client";

import { trpc, ClientTodo } from "~/client";

export function ClientTodos() {
  const { data } = trpc.todos.getTodos.useQuery();

  return (
    <>
      <ul className="space-y-3">
        {data?.map((todo) => (
          <li key={todo.id}>
            <ClientTodo {...todo} />
          </li>
        ))}
      </ul>
    </>
  );
}
