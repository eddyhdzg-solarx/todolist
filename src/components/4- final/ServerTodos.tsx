import { serverTrpc } from "~/server";
import { ServerTodo } from "./ServerTodo";
import { Suspense } from "react";
import { SkeletonsTodos } from "../shared";

export function ServerTodos() {
  return (
    <Suspense
      fallback={
        <div>
          <SkeletonsTodos />
        </div>
      }
    >
      <LoadedTodos />
    </Suspense>
  );
}

async function LoadedTodos() {
  const serverClient = serverTrpc();
  const todos = await serverClient.todos.getTodos();

  return (
    <ul className="space-y-3">
      {todos.map((todo) => (
        <li key={todo.id}>
          <ServerTodo {...todo} />
        </li>
      ))}
    </ul>
  );
}
