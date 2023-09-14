import { Suspense } from "react";
import { getTimeout, serverTrpc } from "~/server";
import { SkeletonTodos2 } from "~/components";
import { cn } from "~/utils";

export function ServerTodos2() {
  return (
    <Suspense fallback={<SkeletonTodos2 />}>
      <LoadedTodos />
    </Suspense>
  );
}

async function LoadedTodos() {
  const todos = await serverTrpc().simpleTodos.getTodos();
  await getTimeout(1000); // util so it waits at least 1 sec

  return (
    <div>
      <h1 className="mb-2 text-lg font-bold">Server Todos</h1>
      <ul className="space-y-3">
        {todos.map((todo) => (
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
