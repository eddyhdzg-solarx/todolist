import { ServerCreateTodo } from "~/server";

// import { Suspense } from "react";
import { TodosCard } from "../shared";

export function ServerTodos2() {
  return (
    <TodosCard
      title="Server"
      description="Todos using server components"
      className="border-red-500"
    >
      <ServerCreateTodo />
      {/* <Suspense fallback={<TodosSkeletons />}>
        <ServerTodos />
      </Suspense> */}
    </TodosCard>
  );
}
