"use client";

import { trpc } from "~/client";
import { Checkbox } from "~/@/components/ui/checkbox";
import { Input } from "~/@/components/ui/input";
import type { Todos } from "@prisma/client";

export function Todo(todo: Todos) {
  const mutation = trpc.todos.toggleCompleted.useMutation();

  const handleMutation = ({
    id,
    completed,
  }: {
    id: string;
    completed: boolean;
  }) => {
    mutation.mutate({
      id,
      completed,
    });
  };

  return (
    <div className="items-top flex space-x-2">
      <Checkbox
        id="terms1"
        onClick={() => {
          handleMutation({
            id: todo.id,
            completed: !todo.completed,
          });
        }}
      />
      <Input />
    </div>
  );
}
