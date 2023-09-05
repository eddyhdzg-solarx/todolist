"use client";

import type { Todos } from "@prisma/client";
import { Checkbox } from "~/@/components/ui/checkbox";
import { Input } from "~/@/components/ui/input";
import { Button } from "~/@/components/ui/button";
import { useDeleteTodo, useSetTitle } from "~/client";
import { TrashIcon } from "lucide-react";
import { useToggleCompleted } from "~/client";

export function ClientTodo(todo: Todos) {
  const handleToggleComplete = useToggleCompleted();
  const handleSetTitle = useSetTitle();
  const handleDeleteTodo = useDeleteTodo();

  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id={todo.id}
        checked={todo.completed}
        onClick={async () => {
          await handleToggleComplete({
            id: todo.id,
            completed: !todo.completed,
          });
        }}
      />
      <Input
        className="border-0"
        placeholder="Todo"
        defaultValue={todo.title ?? ""}
        onBlur={async (e) => {
          const newTitle = e.target.value;

          if (todo.title !== newTitle) {
            await handleSetTitle({
              id: todo.id,
              title: e.target.value,
            });
          }
        }}
      />
      <Button
        variant="ghost"
        size="icon"
        className="text-zinc-100/70"
        onClick={() => handleDeleteTodo(todo.id)}
      >
        <TrashIcon className="h-4 w-4" />
      </Button>
    </div>
  );
}
