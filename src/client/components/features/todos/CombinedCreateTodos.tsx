"use client";

import { experimental_useOptimistic as useOptimistic } from "react";
import { PlusIcon } from "lucide-react";
import { Input } from "~/@/components/ui/input";
import { Button } from "~/@/components/ui/button";
import { createTodo } from "~/server/mutations/createTodo";
import type { Todos } from "@prisma/client";
import { ClientTodo } from "~/client";

interface CombinedCreateTodoProps {
  todos: Todos[];
}

export function CombinedCreateTodos({ todos }: CombinedCreateTodoProps) {
  const [optimisticTodos, addOptimisticTodo] = useOptimistic(
    todos,
    (state, newTodo: Todos) => {
      return [newTodo, ...state];
    },
  );

  return (
    <>
      <form
        action={async (formData) => {
          const title = formData.get("title") as string;
          addOptimisticTodo({
            id: String(Math.random()),
            title,
            completed: false,
            createdAt: new Date(),
          });

          await createTodo(formData);
        }}
        className="mb-5 flex items-center space-x-2"
      >
        <Input
          name="title"
          className="flex-1 border-0"
          placeholder="Add Todo"
        />
        <Button
          variant="purple"
          size="icon"
          className="h-10 w-8 text-purple-500"
          type="submit"
        >
          <PlusIcon className="h-4 w-4" />
        </Button>
      </form>
      <ul className="space-y-3">
        {optimisticTodos?.map((todo) => (
          <li key={todo.id}>
            <ClientTodo {...todo} />
          </li>
        ))}
      </ul>
    </>
  );
}
