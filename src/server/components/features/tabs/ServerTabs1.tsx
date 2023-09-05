import type { Todos } from "@prisma/client";
import { getServerClient } from "~/server";

interface ServerTabsProps {
  completedTodos: Todos[];
  uncompletedTodos: Todos[];
}

export function ServerTabs({ completedTodos }: ServerTabsProps) {
  return (
    <ul>
      {completedTodos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}

export async function ServerTabs1() {
  const serverClient = getServerClient();
  const completedTodos = await serverClient.todos.getTodosWithFilter({
    completed: true,
  });
  const uncompletedTodos = await serverClient.todos.getTodosWithFilter({
    completed: false,
  });

  return (
    <ServerTabs
      completedTodos={completedTodos}
      uncompletedTodos={uncompletedTodos}
    />
  );
}
