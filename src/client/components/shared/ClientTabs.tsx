import type { Dispatch, SetStateAction } from "react";
import { cn } from "~/utils";

const tabs = [
  { name: "Completed", index: 0 },
  { name: "Uncompleted", index: 1 },
];

interface ClientTabsProps {
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
}

export function ClientTabs({ index, setIndex }: ClientTabsProps) {
  return (
    <div className="mb-10">
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          {tabs.map((tab, idx) => (
            <button
              key={tab.name}
              onClick={() => setIndex(idx)}
              className={cn(
                index === idx
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                "flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-center text-sm font-medium",
              )}
              aria-current={index === idx ? "page" : undefined}
            >
              {tab.name}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
