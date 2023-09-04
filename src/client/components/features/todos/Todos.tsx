"use client";

import { trpc, Todo } from "~/client";

export function Todos() {
  const { data } = trpc.todos.getTodos.useQuery();

  return (
    <ul>
      {data?.map((todo) => (
        <li key={todo.id}>
          <Todo {...todo} />
        </li>
      ))}
    </ul>
  );
}
