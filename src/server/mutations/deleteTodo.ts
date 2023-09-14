"use server";

import { serverTrpc } from "~/server";
import { revalidateTag } from "next/cache";

export async function deleteTodo(id: string) {
  const serverClient = serverTrpc();
  await serverClient.todos.deleteTodo({ id });
  revalidateTag("todos");
}
