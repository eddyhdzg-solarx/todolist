import { Input } from "~/@/components/ui/input";
import { Button } from "~/@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { createTodo } from "~/server";

export function ServerCreateTodo() {
  return (
    <form className="mb-5 flex items-center space-x-2" action={createTodo}>
      <Button
        variant="ghost"
        size="icon"
        className="text-blue-500"
        type="submit"
      >
        <PlusIcon className="h-4 w-4" />
      </Button>
      <Input name="title" className="border-0" placeholder="Add Todo" />
    </form>
  );
}
