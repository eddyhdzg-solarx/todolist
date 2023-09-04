import { trpc } from "~/client";
import { useToast } from "~/@/components/ui/use-toast";

export function useDeleteTodo() {
  const { toast } = useToast();
  const utils = trpc.useContext();

  const mutation = trpc.todos.deleteTodo.useMutation({
    onMutate: async ({ id }) => {
      // Cancel any outgoing refetches
      // (so they don't overwrite our optimistic update)
      await utils.todos.getTodos.cancel();

      // Snapshot the previous value
      const prevTodos = utils.todos.getTodos.getData() ?? [];

      const newTodos = prevTodos.filter((todo) => todo.id !== id);

      utils.todos.getTodos.setData(undefined, newTodos);

      // Return a context with the previous and new value
      return { prevTodos, newTodos };
    },
    onSuccess: ({ title }) => {
      toast({
        title: `${title} deleted 🔥`,
      });
    },
    onSettled: async () => {
      await utils.todos.getTodos.invalidate();
    },
  });

  return async (id: string) => {
    await mutation.mutateAsync({
      id,
    });
  };
}
