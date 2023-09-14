import { Input } from "~/@/components/ui/input";
import { Button } from "~/@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { createTodo } from "~/server";

export function ServerCreateTodo() {
  return (
    <form action={createTodo} className="mb-5 flex items-center space-x-2">
      <Input name="title" className="flex-1 border-0" placeholder="Add Todo" />
      <Button
        variant="red"
        size="icon"
        className="h-10 w-8 text-red-500"
        type="submit"
      >
        <PlusIcon className="h-4 w-4" />
      </Button>
    </form>
  );
}
