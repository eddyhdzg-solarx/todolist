"use client";

import type { Todos } from "@prisma/client";
import { Input } from "~/@/components/ui/input";
import { Button } from "~/@/components/ui/button";
import { useDeleteTodo, useUpdateTitle, useUpdateCompleted } from "~/client";
import { CheckIcon, CircleIcon, TrashIcon } from "lucide-react";

export function ClientTodo(todo: Todos) {
  const handleUpdateCompleted = useUpdateCompleted();
  const handleUpdateTitle = useUpdateTitle();
  const handleDeleteTodo = useDeleteTodo();

  return (
    <div className="flex items-center space-x-2">
      <Input
        className="border-0"
        placeholder="Todo"
        defaultValue={todo.title ?? ""}
        onBlur={async (e) => {
          const newTitle = e.target.value;

          if (todo.title !== newTitle) {
            await handleUpdateTitle({
              id: todo.id,
              title: e.target.value,
            });
          }
        }}
      />
      <Button
        variant={todo.completed ? "blue" : "zinc"}
        size="icon"
        onClick={async () => {
          await handleUpdateCompleted({
            id: todo.id,
            completed: !todo.completed,
          });
        }}
      >
        {todo.completed ? (
          <CheckIcon className="h-4 w-4" />
        ) : (
          <CircleIcon className="h-4 w-4" />
        )}
      </Button>
      <Button
        variant="destructive"
        size="icon"
        onClick={() => handleDeleteTodo(todo.id)}
      >
        <TrashIcon className="h-4 w-4" />
      </Button>
    </div>
  );
}
