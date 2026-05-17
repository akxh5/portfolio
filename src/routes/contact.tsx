import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Mail, Github, Twitter, Linkedin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Akshansh Sharma" },
      {
        name: "description",
        content: "Get in touch with Akshansh Sharma — email, GitHub, X, LinkedIn.",
      },
      { property: "og:title", content: "Contact — Akshansh Sharma" },
      {
        property: "og:description",
        content: "Open to interesting conversations around systems, products, and emerging technologies.",
      },
    ],
  }),
  component: ContactPage,
});

const channels = [
  { label: "Email", value: "aksh11ansh@gmail.com", href: "mailto:aksh11ansh@gmail.com", icon: Mail },
  { label: "GitHub", value: "github.com/akxh5", href: "https://github.com/akxh5", icon: Github },
  { label: "X / Twitter", value: "@akxh_5", href: "https://x.com/akxh_5", icon: Twitter },
  { label: "LinkedIn", value: "in/akxh5", href: "https://linkedin.com/in/akxh5", icon: Linkedin },
];

function ContactPage() {
  return (
    <main className="relative bg-background text-foreground min-h-screen">
      <SiteNav />

      <section className="mx-auto max-w-[1400px] pt-44 pb-16 px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-2 lg:col-span-1 font-mono text-[11px] tracking-[0.3em] uppercase text-muted-foreground/60 pt-1">
            Connect
          </div>
          <div className="col-span-12 md:col-span-10 lg:col-span-8">
            <h1 className="font-serif text-5xl md:text-7xl tracking-[-0.02em] leading-[1.02] text-balance">
              Say <span className="italic">hello</span>.
            </h1>
            <p className="mt-8 max-w-xl text-[17px] leading-relaxed text-muted-foreground">
              Always open to interesting conversations around systems, products, infrastructure, AI, and emerging technologies.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-12 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-2 lg:col-span-1 font-mono text-[11px] tracking-[0.3em] uppercase text-muted-foreground/60 pt-1">
          Channels
        </div>
        <ul className="col-span-12 md:col-span-10 lg:col-span-8 border-t border-border/40">
          {channels.map((c) => (
            <li key={c.label} className="border-b border-border/30">
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid grid-cols-12 gap-4 py-8 items-baseline transition-colors duration-500 hover:bg-foreground/[0.015] px-2 -mx-2"
              >
                <span className="col-span-4 md:col-span-3 font-mono text-[11px] tracking-[0.16em] uppercase text-muted-foreground/60 flex items-center gap-3">
                  <c.icon className="size-3.5 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                  {c.label}
                </span>
                <span className="col-span-7 md:col-span-8 font-serif text-2xl md:text-4xl tracking-tight text-foreground/90 group-hover:text-foreground transition-colors">
                  {c.value}
                </span>
                <span className="col-span-1 text-right font-mono text-[11px] tracking-[0.16em] uppercase text-muted-foreground/40 group-hover:text-accent-soft transition-colors group-hover:translate-x-1 duration-500">
                  →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <SiteFooter />
    </main>
  );
}
