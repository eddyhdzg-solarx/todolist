import type { Metadata } from "next";
import { headers } from "next/headers";
import { ClientProviders } from "~/client";
import { ServerProviders } from "~/server";
import "./globals.css";
import { Toaster } from "~/@/components/ui/toaster";

export const metadata: Metadata = {
  title: {
    template: "%s / Todolist",
    default: "Todolist",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ServerProviders>
      <ClientProviders headers={headers()}>
        {children}
        <Toaster />
      </ClientProviders>
    </ServerProviders>
  );
}
