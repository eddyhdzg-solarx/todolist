"use server";

import { getServerClient } from "~/server";
import { revalidateTag } from "next/cache";

export async function setTitle(id: string, title: string) {
  const serverClient = getServerClient();
  await serverClient.todos.setTitle({ id, title });
  revalidateTag("todos");
}
