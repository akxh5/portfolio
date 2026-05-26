import { useRef } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ProjectsList } from "@/components/ProjectsList";
import { ScrollLine } from "@/components/ScrollLine";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Akshansh Sharma — Engineer & Builder" },
      {
        name: "description",
        content:
          "Akshansh Sharma (akxh5) — product-oriented engineer building systems, interfaces, and emerging-tech products. Creator of syn8x, Oper8a, TerraLedger, Arch1v.",
      },
      { property: "og:title", content: "Akshansh Sharma — Engineer & Builder" },
      {
        property: "og:description",
        content:
          "Product-oriented engineer building systems, interfaces, and emerging-tech products. Creator of syn8x, Oper8a, TerraLedger, and Arch1v.",
      },
      { property: "og:url", content: "https://akxh5.me/" },
      { property: "og:image", content: "https://akxh5.me/og-image.png" },
      { name: "twitter:title", content: "Akshansh Sharma — Engineer & Builder" },
      {
        name: "twitter:description",
        content:
          "Product-oriented engineer building systems, interfaces, and emerging-tech products. Creator of syn8x, Oper8a, TerraLedger, and Arch1v.",
      },
    ],
    links: [{ rel: "canonical", href: "https://akxh5.me/" }],
  }),
  component: Index,
});

function Index() {
  const registryRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(registryRef.current, {
      y: 20,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.6,
    });
  }, { scope: registryRef });

  return (
    <main className="relative bg-background text-foreground">
      <SiteNav />
      <Hero />

      <section ref={registryRef} className="mx-auto max-w-[1400px] pt-32 pb-0">
        <div className="px-6 md:px-10 flex items-end justify-between mb-16">
          <div className="space-y-4">
            <div className="font-mono text-[10px] tracking-[0.28em] uppercase text-muted-foreground/60">
              § Beyond Building
            </div>
            <h2 className="font-serif text-3xl md:text-5xl tracking-tight leading-[1.1]">
              Communities, research, fellowships, <br/>
              &amp; <span className="italic">technical ecosystems</span> I’ve been part of.
            </h2>
          </div>
        </div>

        <ScrollLine className="mx-auto max-w-[1400px]" />
        <ProjectsList />
      </section>

      <section className="mx-auto max-w-[1400px] px-6 md:px-10">
        <ScrollLine className="mb-12" />
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-3 font-mono text-[10px] tracking-[0.28em] uppercase text-muted-foreground/60">
            § Core Thesis
          </div>
          <blockquote className="col-span-12 md:col-span-8 font-serif text-2xl md:text-4xl leading-[1.25] tracking-[-0.01em] text-foreground/90 text-balance">
            “I'm less interested in software that impresses, and more in
            software that <span className="italic">behaves</span> — quietly,
            predictably, and on your terms.”
          </blockquote>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
