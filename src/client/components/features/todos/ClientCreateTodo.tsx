"use client";

import { useState, type FormEvent } from "react";
import { PlusIcon } from "lucide-react";
import { Input } from "~/@/components/ui/input";
import { Button } from "~/@/components/ui/button";
import { useCreateTodo } from "~/client";

export function ClientCreateTodo() {
  const [title, setTitle] = useState("");
  const handleCreateTodo = useCreateTodo();

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTitle("");
    await handleCreateTodo(title);
  }

  return (
    <form onSubmit={onSubmit} className="mb-5 flex items-center space-x-2">
      <Input
        className="flex-1 border-0"
        placeholder="Add Todo"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <Button
        variant="blue"
        size="icon"
        className="h-10 w-8 text-blue-500"
        type="submit"
      >
        <PlusIcon className="h-4 w-4" />
      </Button>
    </form>
  );
}
