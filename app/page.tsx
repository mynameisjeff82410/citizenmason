import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Tracks } from "@/components/sections/Tracks";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Range } from "@/components/sections/Range";
import { Founder } from "@/components/sections/Founder";
import { Start } from "@/components/sections/Start";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <Problem />
        <Tracks />
        <HowItWorks />
        <Range />
        <Founder />
        <Start />
      </main>
      <Footer />
    </>
  );
}
