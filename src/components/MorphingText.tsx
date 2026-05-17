import { useEffect, useState } from "react";

interface MorphingTextProps {
  phrases: string[];
  interval?: number;
  className?: string;
}

export function MorphingText({
  phrases,
  interval = 4200,
  className = "",
}: MorphingTextProps) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (phrases.length <= 1) return;
    let mounted = true;

    const tick = () => {
      if (!mounted) return;
      setVisible(false);
      // brief crossfade window — soft, not snappy
      window.setTimeout(() => {
        if (!mounted) return;
        setIndex((i) => (i + 1) % phrases.length);
        setVisible(true);
      }, 1100);
    };

    const id = window.setInterval(tick, interval);
    return () => {
      mounted = false;
      window.clearInterval(id);
    };
  }, [phrases, interval]);

  return (
    <span
      className={`inline-block transition-[opacity,filter,transform] duration-[1100ms] ease-[cubic-bezier(.4,.0,.2,1)] will-change-[opacity,filter] ${
        visible
          ? "opacity-100 blur-0 translate-y-0"
          : "opacity-0 blur-[1.5px] -translate-y-[2px]"
      } ${className}`}
      aria-live="polite"
    >
      {phrases[index]}
    </span>
  );
}
