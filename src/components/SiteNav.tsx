import { useState, useRef, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import profilePic from "@/assets/Profile.png";
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
      {!isFirst && (
        <div className="h-4 w-px bg-foreground/15 mx-6" />
      )}
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
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  
  const isDarkMode = theme === "dark" || (theme === "system" && typeof window !== 'undefined' && window.matchMedia("(prefers-color-scheme: dark)").matches);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

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
      {/* Liquid Glass Background for Main Nav */}
      <div className="absolute inset-0 bg-background/30 backdrop-blur-xl border-b border-foreground/[0.04] -z-10" />
      
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-5 flex items-center justify-between relative z-[70]">
        <div className="flex items-center gap-6">
          <Link
            to="/"
            aria-label="Akshansh Sharma — Home"
            className="group inline-flex items-center relative"
            onClick={() => setIsOpen(false)}
          >
            <span className="relative block size-8 rounded-full overflow-hidden border border-border-strong/60 ring-1 ring-foreground/[0.04] shadow-[0_2px_10px_-4px_rgba(0,0,0,0.6)]">
              <img
                src={profilePic}
                alt=""
                aria-hidden
                className="h-full w-full object-cover transition-opacity duration-700"
              />
            </span>
          </Link>
          <ThemeToggle />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          {links.map((l, index) => (
            <NavLink 
              key={l.to} 
              to={l.to} 
              label={l.label} 
              isFirst={index === 0} 
            />
          ))}
        </nav>

        {/* Status / Mobile Toggle */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full rounded-full bg-emerald-400/60 animate-ping" />
              <span className="relative inline-flex size-1.5 rounded-full bg-emerald-400/80" />
            </span>
            Available · 2026
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative p-2 -mr-2 text-muted-foreground hover:text-foreground transition-colors z-[70]"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay - Liquid Glass / Frosted Background */}
      <div 
        className={`fixed inset-0 h-[100vh] w-screen bg-background/80 backdrop-blur-2xl z-[60] md:hidden transition-all duration-500 ease-in-out origin-top ${
          isOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-4"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background/80 pointer-events-none" />
        
        <nav className="relative h-full flex flex-col justify-center px-8 md:px-12 space-y-10 z-[65]">
          <div className="font-mono text-[10px] tracking-[0.28em] uppercase text-muted-foreground/50 border-b border-border/20 pb-4 max-w-[200px]">
            Index // Archive
          </div>
          
          <div className="flex flex-col space-y-6">
            {links.map((l, i) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setIsOpen(false)}
                className={`font-serif text-5xl tracking-tight text-foreground transition-all duration-700 ease-out ${
                  isOpen ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                }`}
                style={{ transitionDelay: isOpen ? `${150 + i * 100}ms` : '0ms' }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="pt-12 flex flex-col gap-8">
            <div className={`flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground transition-all duration-700 delay-500 ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full rounded-full bg-emerald-400/60 animate-ping" />
                <span className="relative inline-flex size-1.5 rounded-full bg-emerald-400/80" />
              </span>
              Status: Available · 2026
            </div>
            <div className={`font-mono text-[9px] tracking-[0.18em] uppercase text-muted-foreground/40 transition-all duration-700 delay-600 ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              © 2026 Akshansh Sharma — IN
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

