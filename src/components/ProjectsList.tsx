import { useRef } from "react";
import { involvements } from "@/lib/projects";
import { useTheme } from "./theme-provider";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function ProjectsList({ limit }: { limit?: number }) {
  const items = limit ? involvements.slice(0, limit) : involvements;
  const listRef = useRef<HTMLUListElement>(null);
  const { theme } = useTheme();
  
  const isDarkMode = theme === "dark" || (theme === "system" && typeof window !== 'undefined' && window.matchMedia("(prefers-color-scheme: dark)").matches);

  useGSAP(() => {
    const listItems = gsap.utils.toArray(".involvement-item");
    
    listItems.forEach((item: any) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: "top 92%",
          toggleActions: "play none none none",
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });
    });
  }, { scope: listRef });

  return (
    <ul ref={listRef} className="">
      {items.map((item) => (
        <li
          key={item.id}
          className="involvement-item group border-b border-border/40 transition-colors duration-700 hover:bg-foreground/[0.015]"
        >
          <div className="grid grid-cols-12 gap-6 px-6 md:px-10 py-10 md:py-14">
            {/* Index Only */}
            <div className="col-span-12 md:col-span-1 flex justify-between md:justify-start gap-4 pt-1">
              <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-muted-foreground/60">
                {item.index}
              </span>
            </div>

            {/* Title & Description */}
            <div className="col-span-12 md:col-span-6">
              <h3 className="font-serif text-2xl md:text-3xl tracking-tight text-foreground/90 group-hover:text-foreground transition-colors duration-500">
                {item.title}
              </h3>
              <p className="mt-6 text-[16px] leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-foreground/80 max-w-xl text-balance">
                {item.description}
              </p>
            </div>

            {/* Tags & Timeline Metadata */}
            <div className="col-span-12 md:col-span-3 flex flex-col justify-between pt-1">
              <div className="flex flex-wrap gap-x-6 gap-y-3">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="hidden md:block mt-auto pt-8">
                <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground/40">
                  // {item.period}
                </span>
              </div>
            </div>

            {/* Logo instead of arrows */}
            <div className="col-span-12 md:col-span-2 flex md:justify-end items-start pt-1">
              <div className="relative size-12 md:size-14 overflow-hidden rounded-sm border border-border/40 bg-surface grayscale group-hover:grayscale-0 transition-all duration-700">
                <img 
                  src={(isDarkMode && item.logoDark) ? item.logoDark : item.logo} 
                  alt={`${item.title} Logo`}
                  className={`size-full object-cover p-2 ${isDarkMode && !item.logoDark ? 'invert brightness-200' : ''}`}
                />
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
