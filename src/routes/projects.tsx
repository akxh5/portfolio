import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { projects } from "@/lib/projects";
import { ScrollLine } from "@/components/ScrollLine";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Github, ArrowUpRight } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

// Robust dynamic import for GitHubCalendar
const GitHubCalendarComponent = ({ username, theme, colorScheme }: { username: string; theme: any; colorScheme: 'light' | 'dark' }) => {
  const [Calendar, setCalendar] = useState<any>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Version 5+ uses a named export { GitHubCalendar }
    import("react-github-calendar")
      .then((mod) => {
        setCalendar(() => mod.GitHubCalendar);
      })
      .catch((err) => {
        console.error("Failed to load GitHub calendar:", err);
        setError(true);
      });
  }, []);

  if (error) return null;
  if (!Calendar) return <div className="h-[150px] w-full animate-pulse bg-surface/50 rounded-sm" />;

  return (
    <div className="w-full min-h-[150px]">
      <Calendar 
        username={username} 
        theme={theme}
        colorScheme={colorScheme}
        fontSize={12}
        blockSize={12}
        blockMargin={4}
        hideTotalCount
        hideColorLegend
      />
    </div>
  );
};

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — syn8x, Oper8a, TerraLedger, Arch1v | Akshansh Sharma" },
      {
        name: "description",
        content:
          "Projects built by Akshansh Sharma (akxh5): syn8x, Oper8a, TerraLedger, Arch1v — spanning systems, web interfaces, and blockchain infrastructure.",
      },
      {
        property: "og:title",
        content: "Projects — syn8x, Oper8a, TerraLedger, Arch1v | Akshansh Sharma",
      },
      {
        property: "og:description",
        content:
          "syn8x · Oper8a · TerraLedger · Arch1v — built by Akshansh Sharma (akxh5).",
      },
      { property: "og:url", content: "https://akxh5.me/projects" },
      {
        name: "twitter:title",
        content: "Projects — syn8x, Oper8a, TerraLedger, Arch1v | Akshansh Sharma",
      },
      {
        name: "twitter:description",
        content:
          "syn8x · Oper8a · TerraLedger · Arch1v — built by Akshansh Sharma (akxh5).",
      },
    ],
    links: [{ rel: "canonical", href: "https://akxh5.me/projects" }],
  }),
  component: ProjectsPage,
});

function ProjectEntry({ project }: { project: typeof projects[0] }) {
  const entryRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(entryRef.current, {
      scrollTrigger: {
        trigger: entryRef.current,
        start: "top 90%",
      },
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  }, { scope: entryRef });

  return (
    <div ref={entryRef} className={`group border-b border-border/30 last:border-0 ${project.featured ? 'bg-foreground/[0.01]' : ''}`}>
      <div className={`grid grid-cols-12 gap-6 px-6 md:px-10 hover:bg-foreground/[0.015] transition-colors duration-700 ${project.featured ? 'py-20 md:py-32' : 'py-16 md:py-24'}`}>
        {/* Index */}
        <div className="col-span-12 md:col-span-2 lg:col-span-1 flex md:flex-col justify-between md:justify-start gap-4 pt-1">
          <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-muted-foreground/60">
            {project.index}
          </span>
        </div>

        {/* Core Content */}
        <div className="col-span-12 md:col-span-10 lg:col-span-7">
          <div className="flex items-center gap-4 mb-8">
            <h2 className={`${project.featured ? 'text-4xl md:text-6xl' : 'text-3xl md:text-5xl'} font-serif tracking-tight text-foreground/90 group-hover:text-foreground transition-colors`}>
              {project.title}
            </h2>
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent-soft/80 border border-accent-soft/20 px-2 py-0.5 rounded-sm -translate-y-[1px] md:-translate-y-[2px]">
              {project.status}
            </span>
          </div>
          
          <p className={`${project.featured ? 'text-[18px]' : 'text-[17px]'} leading-[1.6] text-muted-foreground transition-colors duration-500 group-hover:text-foreground/80 max-w-2xl text-balance`}>
            {project.description}
          </p>

          <div className="mt-12 flex flex-col space-y-8">
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {project.tags.map((tag) => (
                <span key={tag} className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground/40">
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="flex flex-wrap items-center gap-4">
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-4 py-2 border border-foreground/10 rounded-sm font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground hover:text-foreground hover:border-foreground/30 hover:bg-foreground/[0.02] transition-all duration-300"
              >
                <Github className="size-3.5" />
                Repository
              </a>
              {project.live && (
                <a 
                  href={project.live.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-foreground/10 rounded-sm font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground hover:text-foreground hover:border-foreground/30 hover:bg-foreground/[0.02] transition-all duration-300"
                >
                  {project.live.label}
                  <ArrowUpRight className="size-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Detail column */}
        <div className="hidden md:flex col-span-12 md:col-span-4 flex-col justify-between items-end text-right pt-1">
          <div className="font-mono text-[9px] tracking-[0.25em] uppercase text-muted-foreground/20">
            {project.featured ? 'Flagship System' : 'Archive Entry'}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectsPage() {
  const container = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  
  const isDarkMode = theme === "dark" || (theme === "system" && typeof window !== 'undefined' && window.matchMedia("(prefers-color-scheme: dark)").matches);

  const ghTheme = {
    light: ['#f3f4f6', '#dbeafe', '#93c5fd', '#60a5fa', '#4DA3FF'],
    dark: ['#1a1d23', '#1e293b', '#2563eb', '#3b82f6', '#4DA3FF'],
  };

  useGSAP(() => {
    gsap.from(".projects-header > *", {
      y: 20,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out",
    });
  }, { scope: container });

  return (
    <main ref={container} className="relative bg-background text-foreground min-h-screen">
      <SiteNav />

      <header className="projects-header mx-auto max-w-[1400px] pt-44 pb-20 px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-2 lg:col-span-1 font-mono text-[11px] tracking-[0.3em] uppercase text-muted-foreground/60 pt-1">
            Archive
          </div>
          <div className="col-span-12 md:col-span-10 lg:col-span-8">
            <h1 className="font-serif text-5xl md:text-8xl tracking-tight leading-[0.95] mb-10">
              Built & <br/>
              <span className="italic">Building</span>.
            </h1>
            <p className="max-w-xl text-[18px] leading-relaxed text-muted-foreground">
              Products, systems, and ideas explored through code.
            </p>
          </div>
        </div>
      </header>

      <ScrollLine className="mx-auto max-w-[1400px]" />

      <section className="mx-auto max-w-[1400px]">
        {projects.map((p) => (
          <ProjectEntry key={p.id} project={p} />
        ))}
      </section>

      <div className="mt-8">
        <ScrollLine className="mx-auto max-w-[1400px]" />
        
        <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-8 md:py-12 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-2 lg:col-span-1 font-mono text-[11px] tracking-[0.3em] uppercase text-muted-foreground/40">
            Activity
          </div>
          
          <div className="col-span-12 md:col-span-10 lg:col-span-9 flex flex-col gap-16">
            <div className="max-w-xl">
              <p className="font-serif text-2xl md:text-4xl text-foreground/90 leading-[1.3] text-balance">
                Mostly building things that solve my own problems first. <br/>
                <span className="text-muted-foreground italic">Quietly iterating through systems, tooling, and unfinished thoughts.</span>
              </p>
              <p className="mt-8 font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground/60">
                Most things here started as side notes.
              </p>
            </div>

            <div className="w-full opacity-60 hover:opacity-100 transition-opacity duration-700">
              <div className="font-mono text-[9px] tracking-[0.25em] uppercase text-muted-foreground/40 mb-6 flex items-center gap-4">
                <span>GitHub Contribution Graph // akxh5</span>
                <div className="h-px flex-1 bg-border/30" />
              </div>
              <div className="overflow-hidden">
                <GitHubCalendarComponent 
                  username="akxh5" 
                  theme={ghTheme}
                  colorScheme={isDarkMode ? 'dark' : 'light'}
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <SiteFooter />
    </main>
  );
}
