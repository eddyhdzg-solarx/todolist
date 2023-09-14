import { TodosCard } from "~/components";
import { ClientCreateTodo } from "./ClientCreateTodo";
import { ClientTodos } from "./ClientTodos";

export function ClientTodos4() {
  return (
    <div className="flex flex-col items-start justify-center gap-8 md:flex-row">
      <TodosCard
        title="Client"
        description="Todos using client components"
        className="border-blue-500"
      >
        <ClientCreateTodo />
        <ClientTodos />
      </TodosCard>
    </div>
  );
}
