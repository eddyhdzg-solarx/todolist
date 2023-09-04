import type { Metadata } from "next";
import { headers } from "next/headers";
import { ClientProviders } from "~/client";
import { ServerProviders } from "~/server";
import "./globals.css";

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
      <ClientProviders headers={headers()}>{children}</ClientProviders>
    </ServerProviders>
  );
}
