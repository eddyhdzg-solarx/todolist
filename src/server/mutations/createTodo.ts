"use server";

import { z } from "zod";
import { getServerClient } from "~/server";
import { revalidateTag } from "next/cache";

const schema = z.object({
  title: z.string(),
});

export async function createTodo(formData: FormData) {
  const { title } = schema.parse({
    title: formData.get("title"),
  });

  const serverClient = getServerClient();
  await serverClient.todos.createTodo({ title });
  revalidateTag("todos");
}
