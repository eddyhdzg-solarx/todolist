import type { Todos } from "@prisma/client";
import { Input } from "~/@/components/ui/input";
import { Button } from "~/@/components/ui/button";
import { TrashIcon, CircleIcon, CheckIcon } from "lucide-react";
import { deleteTodo, updateTitle, updateCompleted } from "~/server";

export function ServerTodo(todo: Todos) {
  return (
    <div className="flex w-full items-center space-x-2">
      <form
        className="w-full"
        action={async (e) => {
          "use server";
          const title = e.get("title") as unknown as string;
          if (title !== todo.title) {
            await updateTitle(todo.id, title);
          }
        }}
      >
        <Input
          className="border-0"
          placeholder="Todo"
          name="title"
          type="text"
          defaultValue={todo.title ?? ""}
        />
      </form>
      <form>
        <Button
          variant={todo.completed ? "yellow" : "zinc"}
          size="icon"
          className="w-8"
          formAction={async () => {
            "use server";
            await updateCompleted(todo.id, !todo.completed);
          }}
        >
          {todo.completed ? (
            <CheckIcon className="h-4 w-4" />
          ) : (
            <CircleIcon className="h-4 w-4" />
          )}
        </Button>
      </form>
      <form>
        <Button
          variant="destructive"
          size="icon"
          className="w-8"
          formAction={async () => {
            "use server";
            await deleteTodo(todo.id);
          }}
        >
          <TrashIcon className="h-4 w-4" />
        </Button>
      </form>
    </div>
  );
}
