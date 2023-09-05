"use server";

import { getServerClient } from "~/server";
import { revalidateTag } from "next/cache";

export async function updateTitle(id: string, title: string) {
  const serverClient = getServerClient();
  await serverClient.todos.updateTitle({ id, title });
  revalidateTag("todos");
}
