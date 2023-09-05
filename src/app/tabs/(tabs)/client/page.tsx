"use client";

import { useState } from "react";
import { ClientList, ClientTabs } from "~/client";
import { TodosCard } from "~/neutral";

export default function ClientTabsPage() {
  const [index, setIndex] = useState(0);
  const completed = index === 0;
  return (
    <main>
      <div className="flex w-full flex-col items-center justify-center">
        <ClientTabs index={index} setIndex={setIndex} />
        <TodosCard
          title="Client"
          description="Todos using client components"
          className="border-blue-500"
        >
          <ClientList completed={completed} />
        </TodosCard>
      </div>
    </main>
  );
}
