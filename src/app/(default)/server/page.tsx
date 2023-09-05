import { Suspense } from "react";
import { TodosCard, TodosSkeletons } from "~/neutral";
import { ServerCreateTodo, ServerTodos } from "~/server";

export default function ServerPage() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
        <TodosCard
          title="Server"
          description="Todos using server components"
          className="border-yellow-500"
        >
          <ServerCreateTodo />
          <Suspense fallback={<TodosSkeletons />}>
            <ServerTodos />
          </Suspense>
        </TodosCard>
      </div>
    </main>
  );
}
