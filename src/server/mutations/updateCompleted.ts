"use server";

import { serverTrpc } from "~/server";
import { revalidateTag } from "next/cache";

export async function updateCompleted(id: string, completed: boolean) {
  const serverClient = serverTrpc();
  await serverClient.todos.updateCompleted({ id, completed });
  revalidateTag("todos");
}
