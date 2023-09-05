import { trpc } from "~/client";
import { useToast } from "~/@/components/ui/use-toast";

export function useUpdateTitle() {
  const { toast } = useToast();
  const utils = trpc.useContext();

  const mutation = trpc.todos.updateTitle.useMutation({
    onMutate: async ({ id, title }) => {
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
              title,
            },
      );

      utils.todos.getTodos.setData(undefined, newTodos);

      // Return a context with the previous and new value
      return { prevTodos, newTodos };
    },
    onSuccess: ({ title }) => {
      toast({
        title: `${title}'s title updated 🔥`,
      });
    },
    onSettled: async () => {
      await utils.todos.getTodos.invalidate();
    },
  });

  return async ({ id, title }: { id: string; title: string }) => {
    await mutation.mutateAsync({
      id,
      title,
    });
  };
}
