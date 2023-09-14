import { ClientTodos4 } from "~/components/4- crudTodos/ClientTodos4";

export default function Page() {
  return (
    <main>
      <div className="flex flex-col justify-center gap-8 md:flex-row">
        <ClientTodos4 />
      </div>
    </main>
  );
}
