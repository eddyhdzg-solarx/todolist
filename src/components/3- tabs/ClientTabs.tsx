import type { Dispatch, SetStateAction } from "react";
import { cn } from "~/utils";

const tabs = [
  { name: "Uncompleted", completed: false },
  { name: "Completed", completed: true },
];

interface ClientTabsProps {
  completed: boolean | undefined;
  setCompleted: Dispatch<SetStateAction<boolean | undefined>>;
}

export function ClientTabs({ completed, setCompleted }: ClientTabsProps) {
  const handleCompleted = (newValue: boolean) => {
    if (completed === newValue) {
      setCompleted(undefined);
    }
    if (completed !== newValue) {
      setCompleted(newValue);
    }
  };

  return (
    <div className="mb-10">
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => handleCompleted(tab.completed)}
              className={cn(
                completed === tab.completed
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                "flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-center text-sm font-medium",
              )}
              aria-current={completed === tab.completed ? "page" : undefined}
            >
              {tab.name}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
