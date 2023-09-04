"use client";

import type { Todos } from "@prisma/client";
import { Checkbox } from "~/@/components/ui/checkbox";
import { Input } from "~/@/components/ui/input";
import { Button } from "~/@/components/ui/button";
import { trpc } from "~/client";
import { TrashIcon } from "lucide-react";

export function ClientTodo(todo: Todos) {
  const toggleCompleted = trpc.todos.toggleCompleted.useMutation();
  const setTitle = trpc.todos.setTitle.useMutation();
  const deleteTodo = trpc.todos.deleteTodo.useMutation();

  const handleToggleComplete = ({
    id,
    completed,
  }: {
    id: string;
    completed: boolean;
  }) => {
    toggleCompleted.mutate({
      id,
      completed,
    });
  };

  const handleSetTitle = ({ id, title }: { id: string; title: string }) => {
    setTitle.mutate({
      id,
      title,
    });
  };

  const handleDeleteTodo = (id: string) => {
    deleteTodo.mutate({ id });
  };

  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id={todo.id}
        checked={todo.completed}
        onClick={() => {
          handleToggleComplete({
            id: todo.id,
            completed: !todo.completed,
          });
        }}
      />
      <Input
        className="border-0"
        placeholder="Todo"
        defaultValue={todo.title}
        onBlur={(e) => {
          handleSetTitle({
            id: todo.id,
            title: e.target.value,
          });
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
