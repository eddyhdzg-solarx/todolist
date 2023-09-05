import { ClientCreateTodo, ClientTodos } from "~/client";
import { TodosCard } from "~/neutral";

export default function ClientPage() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
        <TodosCard
          title="Client"
          description="Todos using client components"
          className="border-blue-500"
        >
          <ClientCreateTodo />
          <ClientTodos />
        </TodosCard>
      </div>
    </main>
  );
}
