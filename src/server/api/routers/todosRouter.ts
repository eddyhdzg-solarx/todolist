import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const todosRouter = createTRPCRouter({
  getTodos: publicProcedure.query(({ ctx }) => ctx.prisma.todos.findMany()),
  toggleCompleted: publicProcedure
    .input(
      z.object({
        id: z.string(),
        completed: z.boolean(),
      }),
    )
    .mutation(({ ctx, input }) => {
      const { id, completed } = input;
      return ctx.prisma.todos.update({
        where: {
          id,
        },
        data: {
          completed,
        },
      });
    }),
});
