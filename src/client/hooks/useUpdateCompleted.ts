"use client";

import { trpc } from "~/client";
import { useToast } from "~/@/components/ui/use-toast";

export function useUpdateCompleted() {
  const { toast } = useToast();
  const utils = trpc.useContext();

  const mutation = trpc.todos.updateCompleted.useMutation({
    onMutate: async ({ id, completed }) => {
      // Cancel any outgoing refetches
      // (so they don't overwrite our optimistic update)
      await utils.todos.getTodos.cancel();

      // Snapshot the previous value
      const prevTodos = utils.todos.getTodos.getData() ?? [];

      const newTodos = prevTodos.map((todo) =>
        todo.id !== id
          ? todo
          : {
              ...todo,
              completed,
            },
      );

      utils.todos.getTodos.setData(undefined, newTodos);

      // Return a context with the previous and new value
      return { prevTodos, newTodos };
    },
    onSuccess: ({ completed, title }) => {
      toast({
        title: completed
          ? `${title} Completed 🔥`
          : `${title} NOT completed 👎🏻`,
      });
    },
    onSettled: async () => {
      await utils.todos.getTodos.invalidate();
    },
  });

  return async ({ id, completed }: { id: string; completed: boolean }) => {
    await mutation.mutateAsync({
      id,
      completed,
    });
  };
}
