import { ClientCreateTodo, ClientTodos } from "~/client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/@/components/ui/card";

export function ClientTodosCard() {
  return (
    <Card className="max-w-sm border-0 border-l-4 border-blue-500">
      <CardHeader>
        <CardTitle>Client</CardTitle>
        <CardDescription className="text-zinc-100/70">
          Todos using client components
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ClientCreateTodo />
        <ClientTodos />
      </CardContent>
    </Card>
  );
}
