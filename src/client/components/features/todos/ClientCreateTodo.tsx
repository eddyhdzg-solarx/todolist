"use client";

import { useState } from "react";
import { Input } from "~/@/components/ui/input";
import { Button } from "~/@/components/ui/button";
import { useCreateTodo } from "~/client";
import { PlusIcon } from "lucide-react";

export function ClientCreateTodo() {
  const [title, setTitle] = useState("");
  const handleCreateTodo = useCreateTodo();

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setTitle("");
        await handleCreateTodo(title);
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
