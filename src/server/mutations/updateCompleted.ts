"use server";

import { getServerClient } from "~/server";
import { revalidateTag } from "next/cache";

export async function updateCompleted(id: string, completed: boolean) {
  const serverClient = getServerClient();
  await serverClient.todos.updateCompleted({ id, completed });
  revalidateTag("todos");
}
