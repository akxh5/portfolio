import { useState, useRef, useEffect } from "react";
import profilePic from "@/assets/Profile.webp";
import timelessCover from "@/assets/Timeless.webp";
import faithCover from "@/assets/Faith.jpg";
import afterHoursCover from "@/assets/After Hours.jpg";
import timelessAudio from "@/assets/The Weeknd, Playboi Carti - Timeless (Official Lyric Video).mp3";
import faithAudio from "@/assets/The Weeknd - Faith (Audio).mp3";
import afterHoursAudio from "@/assets/The Weeknd - After Hours (Audio).mp3";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Play, Pause, SkipForward } from "lucide-react";
import { useTheme } from "./theme-provider";
import { useMusic } from "./MusicProvider";

export function Hero() {
  const [hover, setHover] = useState(false);
  const [typedText, setTypedText] = useState("");
  const container = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  
  const { 
    isPlaying, 
    setIsPlaying, 
    currentTrack, 
    handleNextTrack 
  } = useMusic();

  const fullText = "Hi, I'm Akshansh Sharma";

  useEffect(() => {
    let index = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setTypedText(fullText.slice(0, index + 1));
        index++;
        if (index >= fullText.length) {
          clearInterval(interval);
        }
      }, 60);
      return () => clearInterval(interval);
    }, 800);
    return () => clearTimeout(timeout);
  }, []);

  const isDarkMode = theme === "dark" || (theme === "system" && typeof window !== 'undefined' && window.matchMedia("(prefers-color-scheme: dark)").matches);

  useGSAP(() => {
    const tl = gsap.timeline({ 
      defaults: { ease: "power3.out", duration: 1 } 
    });

    // Background reveal
    tl.from(".hero-bg", {
      opacity: 0,
      duration: 2,
    }, 0)
    // Unified entrance
    .from(".hero-meta", {
      y: 15,
      opacity: 0,
      stagger: 0.03,
    }, 0.3)
    .fromTo(".hero-portrait-container", 
      { scale: 0.95, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.2, clearProps: "opacity,scale" },
      0.2
    )
    .from(".hero-bottom", {
      opacity: 0,
      y: 10,
    }, 0.4);

  }, { scope: container });

  return (
    <section ref={container} className="relative min-h-[100svh] w-full overflow-hidden grain">
      {/* Ambient atmosphere — tonal layering */}
      <div className="hero-bg absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(77,163,255,0.08),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_90%,rgba(39,24,126,0.35),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/70 to-background" />
        <div className="absolute inset-0 backdrop-blur-[2px]" />
      </div>

      {/* Editorial grid scaffold */}
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 h-full md:h-[100svh] grid grid-cols-12 gap-6 pb-24 md:pb-0">
        {/* Center: name + subline + integrated meta */}
        <div className="col-span-12 md:col-span-9 flex flex-col justify-center pt-32 md:pt-0">
          <h1 className="hero-title font-serif text-foreground text-[clamp(2.5rem,8vw,5.75rem)] leading-[1.02] tracking-[-0.015em] text-balance min-h-[2.1em] md:min-h-[auto]">
            {typedText}
            <span className="inline-block align-baseline ml-2 h-[0.7em] w-[2px] bg-foreground cursor-blink" />
          </h1>

          <p className="hero-meta mt-8 max-w-xl text-[15px] md:text-[16px] leading-relaxed text-muted-foreground text-balance">
            just a guy obsessed with engineering, product thinking, and making ideas work.
          </p>


          <div className="hero-meta mt-12 flex flex-wrap items-center gap-y-4 gap-x-6 font-mono text-[10px] md:text-[11px] tracking-[0.16em] uppercase text-muted-foreground">
            <span className="flex items-center gap-2.5">
              <span className="relative size-3.5 md:size-4 rounded-full overflow-hidden border border-foreground/10 shadow-sm shrink-0">
                <div className="absolute top-0 inset-x-0 h-[33.33%] bg-[#FF9933]" />
                <div className="absolute top-[33.33%] inset-x-0 h-[33.33%] bg-[#FFFFFF] flex items-center justify-center">
                  {/* Ashok Chakra representation */}
                  <div className="size-[5px] md:size-[6px] rounded-full border-[0.5px] border-[#000080] relative flex items-center justify-center">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-[0.5px] h-full bg-[#000080]/30"
                        style={{ transform: `rotate(${i * 45}deg)` }}
                      />
                    ))}
                    <div className="size-[1px] bg-[#000080] rounded-full z-10" />
                  </div>
                </div>
                <div className="absolute bottom-0 inset-x-0 h-[33.33%] bg-[#138808]" />
              </span>
              IN
            </span>
            <span className="h-px w-6 bg-border-strong hidden sm:block" />
            <span>UTC +5:30</span>
            <span className="h-px w-6 bg-border-strong hidden sm:block" />
            <div className="relative p-[1.5px] rounded-sm overflow-hidden group/hire">
              <div 
                className="absolute inset-[-200%] bg-[conic-gradient(from_0deg,transparent_0%,#4DA3FF_10%,#4DA3FF_20%,transparent_30%)] animate-revolve opacity-100" 
              />
              <a 
                href="mailto:aksh11ansh@gmail.com?subject=Project%20Inquiry%20%E2%80%94%20Akshansh%20Sharma&body=Hi%20Akshansh%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20wanted%20to%20reach%20out%20regarding%3A%0A%0A%5B%20%5D%20A%20project%20collaboration%0A%5B%20%5D%20Freelance%20opportunity%0A%5B%20%5D%20Full-time%20role%0A%5B%20%5D%20Consulting%20%2F%20technical%20discussion%0A%5B%20%5D%20Something%20else%0A%0AA%20little%20context%3A%0A%E2%80%94%0A%0ATimeline%20%2F%20expectations%3A%0A%E2%80%94%0A%0ABest%2C%0A%5BName%5D"
                className="relative z-10 block px-3 py-1.5 rounded-[1px] bg-background text-foreground transition-colors duration-300 hover:text-foreground group-hover/hire:bg-background/90"
              >
                Let's Talk
              </a>
            </div>
          </div>
        </div>

        {/* Right: portrait + meta */}
        <div className="col-span-12 md:col-span-3 flex flex-col justify-center items-start md:items-end gap-8 mt-12 md:mt-0">
          <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="hero-portrait-container relative size-40 md:size-44 lg:size-52 rounded-[28%]"
          >
            {/* Premium Glow Layer */}
            <div 
              className={`absolute inset-[-20%] rounded-full blur-[80px] transition-all duration-1000 ease-out -z-20 ${
                hover ? "opacity-70 scale-150" : "opacity-0 scale-90"
              }`}
              style={{
                background: `url(${profilePic})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            
            {/* Secondary Accent Glow */}
            <div 
              className={`absolute inset-[-10%] rounded-full blur-[40px] bg-accent-soft/20 transition-all duration-1000 ease-out -z-10 ${
                hover ? "opacity-40 scale-110" : "opacity-0 scale-90"
              }`}
            />

            <div className="relative size-full rounded-[28%] overflow-hidden border border-border-strong/70 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] z-10">
              <img
                src={profilePic}
                alt="Portrait of Akshansh Sharma"
                width={512}
                height={512}
                loading="eager"
                className={`h-full w-full object-cover transition-transform duration-[1400ms] ease-out ${
                  hover ? "scale-[1.04]" : "scale-100"
                }`}
              />
            </div>
          </div>

          <div className="hero-meta text-left md:text-right font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground space-y-2">
            <div>Currently</div>
            <div className="text-foreground/85">Shipping & Reading<br/>on System Design.</div>
          </div>
        </div>
      </div>

      {/* Bottom rail */}
      <div className="hero-bottom absolute bottom-0 inset-x-0 bg-gradient-to-t from-background via-background/80 to-transparent pt-12">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-6 flex flex-wrap items-center justify-between gap-4 font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground border-t border-border/40">
          <div className="flex items-center gap-3">
            <span className="size-1 rounded-full bg-accent-soft/80" />
            <span className="hidden xs:inline">Scroll for selected work</span>
            <span className="xs:hidden">Scroll</span>
          </div>
          
          <div className="flex items-center gap-4 group cursor-default">
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="relative size-12 rounded-sm overflow-hidden border border-border-strong/40 shadow-sm group/player transition-transform duration-500 hover:scale-105 active:scale-95"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                <img 
                  src={currentTrack.cover} 
                  alt={`${currentTrack.title} Cover`}
                  className={`size-full object-cover transition-opacity duration-500 ${isPlaying ? "opacity-100" : "opacity-40"}`}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-background/20 backdrop-blur-[1px] opacity-0 group-hover/player:opacity-100 transition-opacity">
                  {isPlaying ? (
                    <Pause className="size-5 text-white fill-white" />
                  ) : (
                    <Play className="size-5 text-white fill-white ml-0.5" />
                  )}
                </div>
              </button>
              <div className="flex flex-col">
                <span className="text-foreground/90 tracking-[0.12em] text-[11px]">{currentTrack.title}</span>
                <span className="text-[10px] text-muted-foreground/80 tracking-[0.16em]">{currentTrack.artist}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button 
                onClick={handleNextTrack}
                className="p-1 hover:text-foreground text-muted-foreground transition-colors group/skip"
                aria-label="Next song"
              >
                <SkipForward className="size-4 fill-current transition-transform group-active/skip:scale-90" />
              </button>

              <div className={`flex items-end gap-[2.5px] h-3 w-5 mb-1 transition-opacity duration-500 ${isPlaying ? "opacity-100" : "opacity-0"}`}>
                <div className="music-bar w-[2.5px] bg-accent-soft/80 h-full" />
                <div className="music-bar w-[2.5px] bg-accent-soft/80 h-full" />
                <div className="music-bar w-[2.5px] bg-accent-soft/80 h-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
