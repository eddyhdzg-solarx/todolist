"use client";

import { useState } from "react";
import { Input } from "~/@/components/ui/input";
import { Button } from "~/@/components/ui/button";
import { trpc } from "~/client";
import { PlusIcon } from "lucide-react";

export function ClientCreateTodo() {
  const [title, setTitle] = useState("");
  const mutation = trpc.todos.createTodo.useMutation();

  const handleCreateTodo = async () => {
    if (title !== "") {
      await mutation.mutateAsync({ title }).then(() => {
        setTitle("");
      });
    }
  };

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        await handleCreateTodo();
      }}
      className="mb-5 flex items-center space-x-2"
    >
      <Button
        variant="ghost"
        size="icon"
        className="text-blue-500"
        type="submit"
      >
        <PlusIcon className="h-4 w-4" />
      </Button>
      <Input
        className="border-0"
        placeholder="Add Todo"
        defaultValue={title}
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
    </form>
  );
}
