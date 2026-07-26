import { Link, useLocation } from "@tanstack/react-router";
import { Home, FolderGit2, PenTool, User, Mail } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const tabs = [
  { to: "/", label: "Home", icon: Home, exact: true },
  { to: "/projects", label: "Projects", icon: FolderGit2, exact: false },
  { to: "/writing", label: "Writing", icon: PenTool, exact: false },
  { to: "/about", label: "About", icon: User, exact: false },
  { to: "/contact", label: "Contact", icon: Mail, exact: false },
] as const;

export function MobileTabBar() {
  const isMobile = useIsMobile();
  const location = useLocation();

  if (!isMobile) return null;

  const currentPath = location.pathname;

  return (
    <nav className="md:hidden fixed bottom-0 inset-x-0 bg-background/80 backdrop-blur-xl border-t border-foreground/[0.08] px-2 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
      <div className="grid grid-cols-5 items-center max-w-md mx-auto w-full">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = tab.exact ? currentPath === "/" : currentPath.startsWith(tab.to);
          return (
            <Link
              key={tab.to}
              to={tab.to}
              className={`relative flex flex-col items-center justify-center gap-1 py-1.5 px-1 rounded-md min-w-0 ${
                isActive ? "text-foreground font-semibold" : "text-muted-foreground/60 hover:text-muted-foreground"
              }`}
            >
              {isActive && <span className="absolute top-0 w-6 h-[2px] rounded-full bg-foreground" />}
              <Icon className="size-5" />
              <span className="font-mono text-[9px] tracking-[0.12em] uppercase">{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
