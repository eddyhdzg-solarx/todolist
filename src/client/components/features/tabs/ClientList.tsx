"use client";

import { ClientTodo, trpc } from "~/client";
import { TodosSkeletons } from "~/neutral";

interface ClientListProps {
  completed: boolean;
}

export function ClientList(props: ClientListProps) {
  const { data, isLoading } = trpc.todos.getTodosWithFilter.useQuery(props);

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
