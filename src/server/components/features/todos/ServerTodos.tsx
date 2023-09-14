import { ServerTodo, serverTrpc } from "~/server";

export async function ServerTodos() {
  const serverClient = serverTrpc();
  const todos = await serverClient.todos.getTodos();

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
