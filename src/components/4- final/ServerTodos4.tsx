import { TodosCard } from "../shared";
import { ServerCreateTodo } from "./ServerCreateTodo";
import { ServerTodos } from "./ServerTodos";

export function ServerTodos4() {
  return (
    <TodosCard
      title="Server"
      description="Todos using server components"
      className="border-red-500"
    >
      <ServerCreateTodo />
      <ServerTodos />
    </TodosCard>
  );
}
