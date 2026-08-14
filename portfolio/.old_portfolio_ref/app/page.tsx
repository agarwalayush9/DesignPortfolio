import Hero from "./components/Hero";
import Blog from "./components/Blog";
import CaseStudies from "./components/CaseStudies";
import SkillsExperience from "./components/SkillsExperience";
import AppSpotlight from "./components/AppSpotlight";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <div className="h-16" /> {/* Navbar height spacer */}
      <section id="hero">
        <Hero />
      </section>
      <section id="projects">
        <CaseStudies />
      </section>
      <section id="blog">
        <Blog />
      </section>
      <section id="skills">
        <SkillsExperience />
      </section>
      <section id="spotlight">
        <AppSpotlight />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}
