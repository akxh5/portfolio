import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function InteractiveText({ children }: { children: string }) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const wordsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const [isDesktop, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(window.matchMedia("(pointer: fine)").matches);
  }, []);

  const words = children.split(" ");

  useGSAP(() => {
    if (!isDesktop || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      wordsRef.current.forEach((word) => {
        if (!word) return;

        const rect = word.getBoundingClientRect();
        const wordX = rect.left + rect.width / 2;
        const wordY = rect.top + rect.height / 2;

        const distance = Math.sqrt(
          Math.pow(clientX - wordX, 2) + Math.pow(clientY - wordY, 2)
        );

        // Subtle illumination radius
        const radius = 150;
        const proximity = Math.max(0, 1 - distance / radius);

        gsap.to(word, {
          color: proximity > 0 ? "var(--foreground)" : "var(--muted-foreground)",
          opacity: 0.4 + proximity * 0.6,
          duration: 0.6,
          ease: "power2.out",
          overwrite: "auto",
        });
      });
    };

    const handleMouseLeave = () => {
      wordsRef.current.forEach((word) => {
        if (!word) return;
        gsap.to(word, {
          color: "var(--muted-foreground)",
          opacity: 0.4,
          duration: 1,
          ease: "power2.out",
        });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    containerRef.current?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      containerRef.current?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isDesktop]);

  return (
    <p 
      ref={containerRef} 
      className="text-[17px] leading-relaxed select-none"
    >
      {words.map((word, i) => (
        <span
          key={i}
          ref={(el) => (wordsRef.current[i] = el)}
          className="inline-block mr-[0.25em] transition-colors duration-300"
          style={{ 
            color: "var(--muted-foreground)",
            opacity: isDesktop ? 0.4 : 1 
          }}
        >
          {word}
        </span>
      ))}
    </p>
  );
}
