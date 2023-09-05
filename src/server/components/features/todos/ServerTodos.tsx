import { getServerClient } from "~/server";

export async function ServerTodos() {
  const serverClient = getServerClient();
  const todos = await serverClient.todos.getTodos();

  return (
    <ul className="space-y-3">
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}
