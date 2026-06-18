import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { Takeaways } from "@/components/sections/Takeaways";
import { Problem } from "@/components/sections/Problem";
import { Tracks } from "@/components/sections/Tracks";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Range } from "@/components/sections/Range";
import { Founder } from "@/components/sections/Founder";
import { WhyCustom } from "@/components/sections/WhyCustom";
import { Start } from "@/components/sections/Start";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <Takeaways />
        <Problem />
        <Tracks />
        <HowItWorks />
        <Range />
        <Founder />
        <WhyCustom />
        <Start />
      </main>
      <Footer />
    </>
  );
}
