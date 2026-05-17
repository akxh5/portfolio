import { createContext, useContext, useState, useRef, useEffect } from "react";
import { PLAYLIST, Track } from "@/lib/music";

type MusicContextType = {
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
  currentTrackIndex: number;
  setCurrentTrackIndex: (index: number) => void;
  currentTrack: Track;
  handleNextTrack: () => void;
};

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export function MusicProvider({ children }: { children: React.ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const currentTrack = PLAYLIST[currentTrackIndex];

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (isPlaying) {
      audioRef.current?.play().catch((err) => {
        console.error("Playback error:", err);
        setIsPlaying(false);
      });
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying, currentTrackIndex]);

  const handleNextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % PLAYLIST.length);
    setIsPlaying(true);
  };

  return (
    <MusicContext.Provider
      value={{
        isPlaying,
        setIsPlaying,
        currentTrackIndex,
        setCurrentTrackIndex,
        currentTrack,
        handleNextTrack,
      }}
    >
      <audio 
        key={currentTrack.audio}
        ref={audioRef}
        src={currentTrack.audio}
        onEnded={handleNextTrack}
      />
      {children}
    </MusicContext.Provider>
  );
}

export const useMusic = () => {
  const context = useContext(MusicContext);
  if (context === undefined) {
    throw new Error("useMusic must be used within a MusicProvider");
  }
  return context;
};
