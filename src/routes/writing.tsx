import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { writings } from "@/lib/writings";
import { ScrollLine } from "@/components/ScrollLine";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const Route = createFileRoute("/writing")({
  head: () => ({
    meta: [
      { title: "Writing — Akshansh Sharma" },
      {
        name: "description",
        content: "Research notes, protocol breakdowns, and long-form observations across systems and infrastructure.",
      },
      { property: "og:title", content: "Writing — Akshansh Sharma" },
      {
        property: "og:description",
        content: "An archival log of research and technical writing.",
      },
    ],
  }),
  component: WritingPage,
});

function WritingEntryItem({ entry }: { entry: typeof writings[0] }) {
  const entryRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(entryRef.current, {
      scrollTrigger: {
        trigger: entryRef.current,
        start: "top 92%",
      },
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    });
  }, { scope: entryRef });

  return (
    <div ref={entryRef} className="group border-b border-border/30 last:border-0">
      <a 
        href={entry.link}
        target="_blank"
        rel="noopener noreferrer"
        className="grid grid-cols-12 gap-6 py-12 md:py-16 px-6 md:px-10 hover:bg-foreground/[0.015] transition-colors duration-700 block"
      >
        {/* Index */}
        <div className="col-span-12 md:col-span-1 pt-1">
          <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-muted-foreground/50">
            {entry.index}
          </span>
        </div>

        {/* Content */}
        <div className="col-span-12 md:col-span-7">
          <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent-soft/70 mb-4">
            {entry.platform}
          </div>
          <h2 className="font-serif text-2xl md:text-4xl tracking-tight text-foreground/90 group-hover:text-foreground transition-colors leading-[1.15]">
            {entry.title}
          </h2>
          <p className="mt-6 text-[16px] leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-foreground/80 max-w-2xl text-balance">
            {entry.description}
          </p>
        </div>

        {/* CTA column */}
        <div className="hidden md:flex col-span-12 md:col-span-4 flex-col justify-end items-end text-right pt-1">
          <div className="opacity-40 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-1">
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground/80">
              {entry.cta}
            </span>
          </div>
        </div>
      </a>
    </div>
  );
}

function WritingPage() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".writing-header > *", {
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

      <header className="writing-header mx-auto max-w-[1400px] pt-44 pb-20 px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-2 lg:col-span-1 font-mono text-[11px] tracking-[0.3em] uppercase text-muted-foreground/60 pt-1">
            Archive
          </div>
          <div className="col-span-12 md:col-span-10 lg:col-span-8">
            <h1 className="font-serif text-5xl md:text-8xl tracking-tight leading-[0.95] mb-10">
              Writing.
            </h1>
            <p className="max-w-xl text-[18px] leading-relaxed text-muted-foreground">
              Research notes, protocol breakdowns, and long-form observations 
              across systems, infrastructure, and emerging technologies.
            </p>
          </div>
        </div>
      </header>

      <ScrollLine className="mx-auto max-w-[1400px]" />

      <section className="mx-auto max-w-[1400px]">
        {writings.map((w) => (
          <WritingEntryItem key={w.id} entry={w} />
        ))}
      </section>

      <div className="mt-8">
        <ScrollLine className="mx-auto max-w-[1400px]" />
        <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-8 md:py-12 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-2 lg:col-span-1 font-mono text-[11px] tracking-[0.3em] uppercase text-muted-foreground/40">
            End
          </div>
          <div className="col-span-12 md:col-span-10 lg:col-span-8">
            <p className="font-serif text-2xl md:text-3xl text-muted-foreground/80 leading-relaxed italic">
              “Documenting systems is the only way to truly understand their failure modes.”
            </p>
          </div>
        </section>
      </div>

      <SiteFooter />
    </main>
  );
}
