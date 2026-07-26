import { Link, useLocation } from "@tanstack/react-router";
import { Home, FolderGit2, PenTool, User, Mail } from "lucide-react";

const tabs = [
  { to: "/", label: "Home", icon: Home },
  { to: "/projects", label: "Projects", icon: FolderGit2 },
  { to: "/writing", label: "Writing", icon: PenTool },
  { to: "/about", label: "About", icon: User },
  { to: "/contact", label: "Contact", icon: Mail },
] as const;

export function MobileTabBar() {
  const location = useLocation();
  return (
    <nav className="md:hidden fixed bottom-0 inset-x-0 bg-background/80 backdrop-blur-xl border-t border-foreground/[0.08] px-2 pt-2">
      <div className="grid grid-cols-5 items-center max-w-md mx-auto w-full">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <Link key={tab.to} to={tab.to} className="flex flex-col items-center justify-center gap-1 py-1">
              <Icon className="size-5" />
              <span className="font-mono text-[9px] tracking-[0.12em] uppercase">{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
