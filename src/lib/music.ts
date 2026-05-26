import timelessCover from "@/assets/Timeless.webp";
import faithCover from "@/assets/Faith.jpg";
import afterHoursCover from "@/assets/After Hours.jpg";
import timelessAudio from "@/assets/The Weeknd, Playboi Carti - Timeless (Official Lyric Video).mp3";
import faithAudio from "@/assets/The Weeknd - Faith (Audio).mp3";
import afterHoursAudio from "@/assets/The Weeknd - After Hours (Audio).mp3";

export type Track = {
  title: string;
  artist: string;
  cover: string;
  audio: string;
};

export const PLAYLIST: Track[] = [
  {
    title: "Timeless",
    artist: "The Weeknd",
    cover: timelessCover,
    audio: timelessAudio,
  },
  {
    title: "Faith",
    artist: "The Weeknd",
    cover: faithCover,
    audio: faithAudio,
  },
  {
    title: "After Hours",
    artist: "The Weeknd",
    cover: afterHoursCover,
    audio: afterHoursAudio,
  },
];
