import { TodosCard } from "~/components";
import { ClientCreateTodo } from "./ClientCreateTodo";
import { ClientTodos } from "./ClientTodos";

export function ClientTodos4() {
  return (
    <TodosCard
      title="Client"
      description="Todos using client components"
      className="border-blue-500"
    >
      <ClientCreateTodo />
      <ClientTodos />
    </TodosCard>
  );
}
