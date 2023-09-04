import { TopNavigation } from "~/client";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TopNavigation />
      {children}
    </>
  );
}
