import { trpc } from "~/client";
import { useToast } from "~/@/components/ui/use-toast";

export function useCreateTodo() {
  const { toast } = useToast();
  const utils = trpc.useContext();

  const mutation = trpc.todos.createTodo.useMutation({
    onMutate: async ({ title }) => {
      // Cancel any outgoing refetches
      // (so they don't overwrite our optimistic update)
      await utils.todos.getTodos.cancel();

      // Snapshot the previous value
      const prevTodos = utils.todos.getTodos.getData() ?? [];

      const newTodos = [
        {
          id: String(Math.random()),
          title,
          completed: false,
          createdAt: new Date(),
        },
        ...prevTodos,
      ];

      utils.todos.getTodos.setData(undefined, newTodos);

      // Return a context with the previous and new value
      return { prevTodos, newTodos };
    },
    onSuccess: ({ title }) => {
      toast({
        title: `${title} created 🔥`,
      });
    },
    onSettled: async () => {
      await utils.todos.getTodos.invalidate();
      await utils.todos.getTodosWithFilter.invalidate();
    },
  });

  return async (title: string) => {
    await mutation.mutateAsync({
      title,
    });
  };
}
