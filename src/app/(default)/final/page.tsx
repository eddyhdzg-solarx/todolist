import { ClientTodos4 } from "~/components/4- final/ClientTodos4";
import { ServerTodos4 } from "~/components/4- final/ServerTodos4";

export default function Page() {
  return (
    <main>
      <div className="container flex max-w-4xl flex-col justify-center gap-8 md:flex-row">
        <div className="flex-1">
          <ClientTodos4 />
        </div>
        <div className="flex-1">
          <ServerTodos4 />
        </div>
      </div>
    </main>
  );
}
