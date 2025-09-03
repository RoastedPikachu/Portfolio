import ThePageWrapper from "@/widgets/ThePageWrapper";
import Contacts from "@/widgets/Contacts";
import About from "@/widgets/About";
import Work from "@/widgets/Work";
import Projects from "@/widgets/Projects";
import Greetings from "@/widgets/Greetings";

export default function Home() {
  return (
    <ThePageWrapper>
      <main className="relative w-full max-w-[1220px] h-auto">
        <Greetings />

        <Work />

        <Projects />

        <About />

        <Contacts />
      </main>
    </ThePageWrapper>
  );
}
