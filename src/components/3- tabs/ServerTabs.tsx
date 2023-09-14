import { cn } from "~/utils";
import Link from "next/link";

const tabs = [
  { text: "completed", value: "true" },
  { text: "uncompleted", value: "false" },
];

export function ServerTabs(props: {
  searchParams: {
    completed: "true" | "false" | undefined;
  };
}) {
  const completed = props.searchParams.completed;

  return (
    <div className="mb-10 w-full">
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          {tabs.map((tab) => {
            const href =
              tab.value !== completed
                ? `/tabs?completed=${tab.value}`
                : "/tabs";

            return (
              <Link
                key={tab.value}
                href={href}
                className={cn(
                  tab.value === completed
                    ? "border-red-500 text-red-600"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                  "flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-center text-sm font-medium capitalize",
                )}
                aria-current={tab.value === completed ? "page" : undefined}
              >
                {tab.text}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
