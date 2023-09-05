import { cn } from "~/utils";
import Link from "next/link";

const tabs = [{ name: "completed" }, { name: "uncompleted" }];

interface TabsProps {
  value: "completed" | "uncompleted";
}

export function Tabs({ value }: TabsProps) {
  return (
    <div className="mb-10 w-full">
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          {tabs.map((tab) => (
            <Link
              key={tab.name}
              href={`/tabs/server?tab=${tab.name}`}
              className={cn(
                tab.name === value
                  ? "border-red-500 text-red-600"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                "flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-center text-sm font-medium capitalize",
              )}
              aria-current={tab.name === value ? "page" : undefined}
            >
              {tab.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
