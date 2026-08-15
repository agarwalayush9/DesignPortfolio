import PageTransition from '@/components/PageTransition';
import TextReveal from '@/components/TextReveal';
import Marquee from '@/components/Marquee';
import AnimatedCounter from '@/components/AnimatedCounter';
import BentoCard from '@/components/BentoCard';

const tools = [
  'VS Code', 'Figma', 'GitHub', 'Vercel', 'Docker', 'Postman',
  'Linear', 'Notion', 'Arc Browser', 'Warp Terminal', 'Raycast', 'Cursor',
];

const techStack = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL',
  'MongoDB', 'Redis', 'Tailwind CSS', 'Framer Motion', 'Three.js', 'GraphQL',
  'Docker', 'AWS', 'Prisma', 'tRPC',
];

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto px-6 pt-24 pb-20">
        {/* Header */}
        <div className="mb-20">
          <h2 className="section-label mb-4">ABOUT</h2>
          <h1 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] font-black leading-[0.95] tracking-tight mb-10">
            <span className="text-gradient">A bit about</span>
            <br />
            <span className="text-gradient" style={{ opacity: 0.6 }}>me</span>
          </h1>

          <TextReveal
            text="I'm a developer who believes that great software is a blend of engineering excellence and thoughtful design. I spend my days writing clean, performant code and my nights exploring new technologies. When I'm not coding, you'll find me reading about design systems, contributing to open source, or experimenting with creative coding."
            className="text-xl text-[#707070] leading-[1.9] tracking-wide max-w-2xl"
          />
        </div>

        {/* Stats Row */}
        <div className="mb-20">
          <BentoCard hover delay={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-4">
              <AnimatedCounter target={3} suffix="+" label="Years Experience" />
              <AnimatedCounter target={25} suffix="+" label="Projects Built" />
              <AnimatedCounter target={12} suffix="K" label="Lines of Code" />
              <AnimatedCounter target={500} suffix="+" label="Contributions" />
            </div>
          </BentoCard>
        </div>

        {/* Tech Stack Marquee */}
        <div className="mb-20">
          <h2 className="section-label mb-6">TECH STACK</h2>
          <div className="space-y-4">
            <Marquee items={techStack.slice(0, 8)} speed={35} />
            <Marquee items={techStack.slice(8)} speed={35} reverse />
          </div>
        </div>

        {/* Tools Marquee */}
        <div className="mb-20">
          <h2 className="section-label mb-6">TOOLS I USE</h2>
          <Marquee items={tools} speed={40} />
        </div>

        {/* Philosophy */}
        <div>
          <h2 className="section-label mb-6">PHILOSOPHY</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <BentoCard hover delay={0.1}>
              <div className="text-center py-4">
                <div className="text-2xl mb-3">⚡</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Performance First</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Every millisecond matters. I obsess over Core Web Vitals and user-perceived performance.
                </p>
              </div>
            </BentoCard>
            <BentoCard hover delay={0.2}>
              <div className="text-center py-4">
                <div className="text-2xl mb-3">🎨</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Design Driven</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Beautiful interfaces aren't optional. I believe good design is invisible and intuitive.
                </p>
              </div>
            </BentoCard>
            <BentoCard hover delay={0.3}>
              <div className="text-center py-4">
                <div className="text-2xl mb-3">🧩</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Clean Architecture</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Maintainable code is a gift to your future self. I write code that reads like prose.
                </p>
              </div>
            </BentoCard>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
