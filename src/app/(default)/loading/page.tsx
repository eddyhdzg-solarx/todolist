import { ClientTodos2 } from "~/components/2- loadingTodos/ClientTodos2";
import { ServerTodos2 } from "~/components/2- loadingTodos/ServerTodos2";

export default function Loading() {
  return (
    <main>
      <div className="flex flex-col justify-center gap-8 md:flex-row">
        <ClientTodos2 />
        <ServerTodos2 />
      </div>
    </main>
  );
}
