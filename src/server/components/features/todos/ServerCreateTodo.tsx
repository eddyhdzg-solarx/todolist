import { Input } from "~/@/components/ui/input";
import { Button } from "~/@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { createTodo } from "~/server";

export function ServerCreateTodo() {
  return (
    <form className="mb-5 flex items-center space-x-2" action={createTodo}>
      <Input name="title" className="flex-1 border-0" placeholder="Add Todo" />
      <Button
        variant="yellow"
        size="icon"
        className="h-10 w-10 text-yellow-400"
        type="submit"
      >
        <PlusIcon className="h-4 w-4" />
      </Button>
    </form>
  );
}
