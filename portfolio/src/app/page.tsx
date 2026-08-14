import Hero from "@/components/Hero";
import BentoCard from "@/components/BentoCard";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ContributionGraph from "@/components/ContributionGraph";
import Projects from "@/components/Projects";
import UIMockups from "@/components/UIMockups";
import Socials from "@/components/Socials";
import PageViewCounter from "@/components/PageViewCounter";
import PageTransition from "@/components/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      {/* Page View Counter */}
      <div className="fixed top-6 right-6 z-40">
        <PageViewCounter />
      </div>

      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* Bento Grid: Experience + Activity + Projects */}
      <section id="work" className="max-w-4xl mx-auto px-6 pb-20 flex flex-col gap-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <BentoCard hover className="lg:col-span-3" delay={0.1}>
            <ExperienceTimeline />
          </BentoCard>
          <BentoCard hover className="lg:col-span-2" delay={0.2}>
            <ContributionGraph />
          </BentoCard>
        </div>
        
        <BentoCard hover delay={0.3}>
          <Projects />
        </BentoCard>

        <BentoCard hover delay={0.4}>
          <UIMockups />
        </BentoCard>
      </section>

      {/* Socials */}
      <section id="contact" className="max-w-4xl mx-auto px-6 pb-32">
        <BentoCard hover delay={0.3}>
          <Socials />
        </BentoCard>
      </section>
    </PageTransition>
  );
}
