import { useState, useRef } from "react";
import { Link } from "@tanstack/react-router";
import profilePic from "@/assets/Profile.webp";
import { ThemeToggle } from "./theme-toggle";
import { useTheme } from "./theme-provider";
import { Menu, X } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrambleText } from "./ScrambleText";

const links = [
  { to: "/projects", label: "Projects" },
  { to: "/writing", label: "Writing" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

function NavLink({ to, label, isFirst }: { to: string; label: string; isFirst: boolean }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="flex items-center">
      {!isFirst && <div className="h-4 w-px bg-foreground/15 mx-6" />}
      <Link
        to={to}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="font-mono text-[11px] tracking-[0.18em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 min-w-[70px] text-center"
        activeProps={{ className: "text-foreground" }}
      >
        <ScrambleText text={label} isHovered={isHovered} />
      </Link>
    </div>
  );
}

export function SiteNav() {
  const headerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(headerRef.current, {
      y: -20,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.2
    });
  }, { scope: headerRef });

  return (
    <header ref={headerRef} className="fixed top-0 inset-x-0 z-50">
      <div className="absolute inset-0 bg-background/30 backdrop-blur-xl border-b border-foreground/[0.04] -z-10" />
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-5 flex items-center justify-between relative z-[70]">
        <div className="flex items-center gap-6">
          <Link to="/" aria-label="Akshansh Sharma — Home" className="group inline-flex items-center relative">
            <span className="relative block size-8 rounded-full overflow-hidden border border-border-strong/60 ring-1 ring-foreground/[0.04] shadow-[0_2px_10px_-4px_rgba(0,0,0,0.6)]">
              <img src={profilePic} alt="" aria-hidden className="h-full w-full object-cover transition-opacity duration-700" />
            </span>
          </Link>
          <ThemeToggle />
        </div>
        <nav className="hidden md:flex items-center">
          {links.map((l, index) => (
            <NavLink key={l.to} to={l.to} label={l.label} isFirst={index === 0} />
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex size-full rounded-full bg-emerald-400/60 animate-ping" />
            <span className="relative inline-flex size-1.5 rounded-full bg-emerald-400/80" />
          </span>
          Available · 2026
        </div>
      </div>
    </header>
  );
}
