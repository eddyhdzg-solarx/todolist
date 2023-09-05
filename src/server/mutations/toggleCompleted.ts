"use server";

import { getServerClient } from "~/server";
import { revalidateTag } from "next/cache";

export async function toggleCompleted(id: string, completed: boolean) {
  const serverClient = getServerClient();
  await serverClient.todos.toggleCompleted({ id, completed });
  revalidateTag("todos");
}
