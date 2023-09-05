import { TopNavigation } from "~/client";
import { Container, TopSpacing } from "~/neutral";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TopNavigation />
      <TopSpacing />
      <Container className="max-w-lg">{children}</Container>
    </>
  );
}
