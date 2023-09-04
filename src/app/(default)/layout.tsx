import { TopNavigation } from "~/client";
import { Container } from "~/neutral";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TopNavigation />
      <Container>{children}</Container>
    </>
  );
}
