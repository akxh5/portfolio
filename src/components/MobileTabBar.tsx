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
    <nav className="md:hidden fixed bottom-0 inset-x-0 bg-background border-t border-border">
      <div className="flex items-center justify-around py-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <Link key={tab.to} to={tab.to} className="flex flex-col items-center">
              <Icon className="size-5" />
              <span className="text-[10px]">{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
