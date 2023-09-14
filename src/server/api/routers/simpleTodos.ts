// import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const simpleTodosRouter = createTRPCRouter({
  getTodos: publicProcedure.query(({ ctx }) => ctx.prisma.todos.findMany()),
});
