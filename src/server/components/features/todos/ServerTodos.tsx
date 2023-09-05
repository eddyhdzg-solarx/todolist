import { ServerTodo, getServerClient } from "~/server";

export async function ServerTodos() {
  const serverClient = getServerClient();
  const todos = await serverClient.todos.getTodos();
  // await new Promise((resolve) => setTimeout(resolve, 5000));

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
