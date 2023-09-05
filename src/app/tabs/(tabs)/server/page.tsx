import { Tabs, TodosCard } from "~/neutral";
import { ServerTabs2 } from "~/server";

export default function ServerTabsPage(props: {
  searchParams: {
    tab: "completed" | "uncompleted";
  };
}) {
  const tab = props.searchParams?.tab ?? "completed";

  return (
    <main>
      <div className="flex w-full flex-col items-center justify-center">
        <Tabs value={tab} />
        <TodosCard
          title="Server"
          description="Todos using server components"
          className="border-red-500"
        >
          <ServerTabs2 {...props} />
        </TodosCard>
      </div>
    </main>
  );
}
