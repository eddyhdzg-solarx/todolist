import { TopNavigation, Container, TopSpacing } from "~/components";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TopNavigation />
      <TopSpacing />
      <Container>{children}</Container>
    </>
  );
}
