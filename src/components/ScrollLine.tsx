import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function ScrollLine({ className = "" }: { className?: string }) {
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      lineRef.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        ease: "power2.inOut",
        duration: 1.5,
        scrollTrigger: {
          trigger: lineRef.current,
          start: "top 95%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, { scope: lineRef });

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <div 
        ref={lineRef}
        className="h-px w-full bg-border-strong origin-left opacity-40" 
      />
    </div>
  );
}
