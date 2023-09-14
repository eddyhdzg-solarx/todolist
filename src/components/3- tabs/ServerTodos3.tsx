import { Suspense } from "react";
import { serverTrpc } from "~/server";
import { SkeletonTodos2 } from "~/components";
import { cn } from "~/utils";
import { ServerTabs } from "./ServerTabs";

export function ServerTodos3(props: {
  searchParams: {
    completed: "true" | "false" | undefined;
  };
}) {
  return (
    <Suspense
      fallback={
        <div>
          <ServerTabs {...props} />
          <SkeletonTodos2 />
        </div>
      }
      {...props}
    >
      <LoadedTodos {...props} />
    </Suspense>
  );
}

async function LoadedTodos(props: {
  searchParams: {
    completed: "true" | "false" | undefined;
  };
}) {
  let completed: boolean | undefined;
  if (props.searchParams.completed === "true") {
    completed = true;
  }
  if (props.searchParams.completed === "false") {
    completed = false;
  }

  const todos = await serverTrpc().todos.getTodosWithFilter({
    completed,
  });

  return (
    <div>
      <ServerTabs {...props} />
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
