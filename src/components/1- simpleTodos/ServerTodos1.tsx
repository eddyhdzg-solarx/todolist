import { serverTrpc } from "~/server";

export async function ServerTodos1() {
  const todos = await serverTrpc().simpleTodos.getTodos();

  return (
    <div>
      <h1 className="mb-2 text-lg font-bold">Server Todos</h1>
      <ul className="space-y-3">
        {todos.map((todo) => (
          <li key={todo.id} className="text-base">
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
