import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ScrollLine } from "@/components/ScrollLine";
import { InteractiveText } from "@/components/InteractiveText";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Akshansh Sharma" },
      {
        name: "description",
        content:
          "Developer and product thinker building technically thoughtful products. Currently exploring AI systems and interface architecture.",
      },
      { property: "og:title", content: "About — Akshansh Sharma" },
      {
        property: "og:description",
        content: "Developer and product thinker interested in systems, infrastructure, and technical craft.",
      },
    ],
  }),
  component: AboutPage,
});

const exploring = [
  "AI-assisted workflows",
  "Developer infrastructure",
  "Protocol and coordination systems",
  "Interface architecture",
  "System design",
  "Local-first and tooling-heavy products",
];

const stackGroups = [
  {
    category: "Languages",
    items: [
      { name: "TypeScript", icon: "typescript" },
      { name: "Python", icon: "python" },
      { name: "Rust", icon: "rust" },
      { name: "Solidity", icon: "solidity" },
      { name: "Java", icon: "openjdk" },
    ],
  },
  {
    category: "Frameworks",
    items: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextdotjs" },
      { name: "Tailwind", icon: "tailwindcss" },
    ],
  },
  {
    category: "Systems & Data",
    items: [
      { name: "Node.js", icon: "nodedotjs" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "Supabase", icon: "supabase" },
      { name: "Firebase", icon: "firebase" },
    ],
  },
  {
    category: "Infrastructure",
    items: [
      { name: "Solana", icon: "solana" },
      { name: "Docker", icon: "docker" },
      { name: "Vercel", icon: "vercel" },
      { name: "Netlify", icon: "netlify" },
      { name: "Git", icon: "git" },
    ],
  },
];

function AboutPage() {
  return (
    <main className="relative bg-background text-foreground min-h-screen">
      <SiteNav />

      {/* Intro Section */}
      <section className="mx-auto max-w-[1400px] pt-44 pb-16 px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-2 lg:col-span-1 font-mono text-[11px] tracking-[0.3em] uppercase text-muted-foreground/60 pt-1">
            About
          </div>
          <div className="col-span-12 md:col-span-10 lg:col-span-8">
            <h1 className="font-serif text-4xl md:text-6xl tracking-tight leading-[1.05] text-balance mb-12">
              I’m Akshansh Sharma — a developer interested in building systems, developer tools, and products that feel 
              <span className="italic"> technically thoughtful</span> without becoming unnecessarily complicated.
            </h1>
            
            <div className="space-y-10 max-w-2xl">
              <InteractiveText>
                My work usually sits somewhere between engineering, product thinking, and experimentation. Lately, I’ve been spending a lot of time around AI systems, protocol ecosystems, interface architecture, and tooling that helps people work more clearly.
              </InteractiveText>
              <InteractiveText>
                Outside of building, I spend a lot of time around hackathons, technical communities, public speaking, and long-form writing. I enjoy teaching, exploring new ideas, and understanding how technical systems evolve from concepts into usable products.
              </InteractiveText>
            </div>
          </div>
        </div>
      </section>

      <ScrollLine className="mx-auto max-w-[1400px]" />

      {/* Currently Exploring */}
      <section className="mx-auto max-w-[1400px] py-20 px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-2 lg:col-span-1 font-mono text-[11px] tracking-[0.3em] uppercase text-muted-foreground/60 pt-1">
            Focus
          </div>
          <div className="col-span-12 md:col-span-10 lg:col-span-8">
            <h2 className="font-mono text-[10px] tracking-[0.28em] uppercase text-muted-foreground/40 mb-10">
              § Currently Exploring
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
              {exploring.map((item) => (
                <li key={item} className="flex items-center gap-4">
                  <div className="size-1 rounded-full bg-accent-soft/40" />
                  <span className="text-[16px] text-foreground/80 font-mono tracking-tight">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ScrollLine className="mx-auto max-w-[1400px]" />

      {/* Stack Section */}
      <section className="mx-auto max-w-[1400px] py-20 px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-2 lg:col-span-1 font-mono text-[11px] tracking-[0.3em] uppercase text-muted-foreground/60 pt-1">
            Tools
          </div>
          <div className="col-span-12 md:col-span-10 lg:col-span-8">
            <h2 className="font-mono text-[10px] tracking-[0.28em] uppercase text-muted-foreground/40 mb-12">
              § Stack
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
              {stackGroups.map((group) => (
                <div key={group.category} className="space-y-8">
                  <h3 className="font-mono text-[9px] tracking-[0.2em] uppercase text-muted-foreground/50 border-b border-border/30 pb-3">
                    {group.category}
                  </h3>
                  <ul className="space-y-5">
                    {group.items.map((item) => (
                      <li key={item.name} className="group flex items-center gap-3">
                        <div className="relative size-5 md:opacity-40 md:grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0">
                          <img 
                            src={`https://cdn.simpleicons.org/${item.icon}`} 
                            alt=""
                            className="size-full object-contain"
                          />
                        </div>
                        <span className="font-mono text-[13px] tracking-tight text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                          {item.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
