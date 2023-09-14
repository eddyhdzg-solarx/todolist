import { ClientTodos1 } from "~/components/1- simpleTodos/ClientTodos1";
import { ServerTodos1 } from "~/components/1- simpleTodos/ServerTodos1";

export default function Page() {
  return (
    <main>
      <div className="flex flex-col justify-center gap-8 md:flex-row">
        <ClientTodos1 />
        <ServerTodos1 />
      </div>
    </main>
  );
}
