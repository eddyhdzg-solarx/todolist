import { Suspense } from "react";
import { ClientCreateTodo, ClientTodos } from "~/client";
import { TodosCard, TodosSkeletons } from "~/neutral";
import { ServerCreateTodo, ServerTodos } from "~/server";

export default function BothPage() {
  return (
    <main>
      <div className="flex justify-center gap-8">
        <TodosCard
          title="Client"
          description="Todos using client components"
          className="border-blue-500"
        >
          <ClientCreateTodo />
          <ClientTodos />
        </TodosCard>
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
