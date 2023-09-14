import { ClientTodos3 } from "~/components/3- tabs/ClientTodos3";
import { ServerTodos3 } from "~/components/3- tabs/ServerTodos3";

export default function Page(props: {
  searchParams: {
    completed: "true" | "false" | undefined;
  };
}) {
  return (
    <main>
      <div className="flex flex-col justify-center gap-8 md:flex-row">
        <ClientTodos3 />
        <ServerTodos3 {...props} />
      </div>
    </main>
  );
}
