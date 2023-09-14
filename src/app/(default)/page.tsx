import { Container } from "~/components";
import { Hello } from "~/components/0- home/Hello";

export default function Home() {
  return (
    <main>
      <Container className="flex max-w-4xl flex-col items-start justify-center gap-8 md:flex-row">
        <Hello />
      </Container>
    </main>
  );
}
