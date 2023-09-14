import { Suspense } from "react";
import { TodosSkeletons } from "~/neutral";
import { ServerTodo, serverTrpc } from "~/server";

interface ServerListProps {
  completed: boolean;
}

async function ServerTabs({ completed }: ServerListProps) {
  const serverClient = serverTrpc();
  const todos = await serverClient.todos.getTodosWithFilter({ completed });

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

export function ServerTabs2(props: {
  searchParams: {
    completed: "true" | "false" | undefined;
  };
}) {
  const tab = props.searchParams?.tab ?? "completed";
  const completed = tab === "completed";

  return (
    <Suspense fallback={<TodosSkeletons />}>
      <ServerTabs completed={completed} />
    </Suspense>
  );
}
