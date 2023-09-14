"use server";

import { z } from "zod";
import { serverTrpc } from "~/server";
import { revalidateTag } from "next/cache";

const schema = z.object({
  title: z.string(),
});

export async function createTodo(formData: FormData) {
  const { title } = schema.parse({
    title: formData.get("title"),
  });

  const serverClient = serverTrpc();
  await serverClient.todos.createTodo({ title });
  revalidateTag("todos");
}
