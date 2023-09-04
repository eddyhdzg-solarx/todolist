"use client";

import { trpc } from "~/client";

export function Todos() {
  const test = trpc.todos.getTodos.useQuery();

  return <>{test.data?.length}</>;
}
