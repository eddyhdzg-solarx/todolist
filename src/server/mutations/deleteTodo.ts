"use server";

import { getServerClient } from "~/server";
import { revalidateTag } from "next/cache";

export async function deleteTodo(id: string) {
  const serverClient = getServerClient();
  await serverClient.todos.deleteTodo({ id });
  revalidateTag("todos");
}
