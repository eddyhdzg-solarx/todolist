import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const todosRouter = createTRPCRouter({
  getTodos: publicProcedure.query(({ ctx }) => ctx.prisma.todos.findMany()),
});
