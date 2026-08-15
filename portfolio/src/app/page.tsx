import Hero from "@/components/Hero";
import BentoCard from "@/components/BentoCard";
import ExperienceTimeline from "@/components/ExperienceTimeline";


import PageTransition from "@/components/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* Bento Grid: Experience + Activity */}
      <section id="work" className="max-w-4xl mx-auto px-6 pb-20 flex flex-col gap-6">
        <BentoCard hover delay={0.1}>
          <ExperienceTimeline />
        </BentoCard>
      </section>
    </PageTransition>
  );
}
