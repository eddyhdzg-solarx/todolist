import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const todosRouter = createTRPCRouter({
  getTodos: publicProcedure.query(({ ctx }) =>
    ctx.prisma.todos.findMany({
      orderBy: {
        createdAt: "desc",
      },
    }),
  ),
  getTodosWithFilter: publicProcedure
    .input(
      z.object({
        completed: z.boolean(),
      }),
    )
    .query(({ ctx, input }) =>
      ctx.prisma.todos.findMany({
        where: {
          completed: input.completed,
        },
        orderBy: {
          createdAt: "desc",
        },
      }),
    ),
  createTodo: publicProcedure
    .input(
      z.object({
        title: z.string(),
      }),
    )
    .mutation(({ ctx, input }) => {
      const { title } = input;
      return ctx.prisma.todos.create({
        data: {
          title,
          completed: false,
        },
      });
    }),
  deleteTodo: publicProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .mutation(({ ctx, input }) => {
      const { id } = input;
      return ctx.prisma.todos.delete({
        where: {
          id,
        },
      });
    }),
  updateCompleted: publicProcedure
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
  updateTitle: publicProcedure
    .input(
      z.object({
        id: z.string(),
        title: z.string(),
      }),
    )
    .mutation(({ ctx, input }) => {
      const { id, title } = input;
      return ctx.prisma.todos.update({
        where: {
          id,
        },
        data: {
          title,
        },
      });
    }),
});
