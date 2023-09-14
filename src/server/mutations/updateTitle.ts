"use server";

import { serverTrpc } from "~/server";
import { revalidateTag } from "next/cache";

export async function updateTitle(id: string, title: string) {
  const serverClient = serverTrpc();
  await serverClient.todos.updateTitle({ id, title });
  revalidateTag("todos");
}
