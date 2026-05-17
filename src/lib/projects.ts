import superteamLogo from "@/assets/Superteamin.jpg";
import turbineLogo from "@/assets/Turbine.jpg";
import wormholeBlack from "@/assets/wormhole-black.png";

export type Involvement = {
  id: string;
  index: string;
  period: string;
  title: string;
  role: string;
  description: string;
  tags: string[];
  logo: string;
  logoDark?: string;
  link?: string;
};

export type Project = {
  id: string;
  index: string;
  title: string;
  status: string;
  description: string;
  tags: string[];
  github: string;
  live?: {
    url: string;
    label: string;
  };
  featured?: boolean;
};

export const involvements: Involvement[] = [
  {
    id: "superteam",
    index: "01",
    period: "Mar 2025 — Present",
    title: "Member — Superteam India",
    role: "Ecosystem Growth",
    description:
      "Contributing across hackathons, ecosystem initiatives, and community-driven collaboration within the Solana ecosystem.",
    tags: ["Community", "Solana", "Hackathons", "Ecosystem"],
    logo: superteamLogo,
  },
  {
    id: "wormhole",
    index: "02",
    period: "Oct 2025 — Present",
    title: "Fellow — Wormhole Foundation",
    role: "Protocol Research",
    description:
      "Exploring interoperability systems, cross-chain infrastructure, and protocol ecosystems through collaborative research and experimentation.",
    tags: ["Infrastructure", "Cross-chain", "Research", "Protocols"],
    logo: wormholeBlack,
  },
  {
    id: "turbine",
    index: "03",
    period: "Oct 2025 — Dec 2025",
    title: "Research — Solana Turbine",
    role: "System Engineering",
    description:
      "Studied Solana’s infrastructure architecture, validator communication systems, and SIMDs as part of Cohort 3.",
    tags: ["Research", "SIMDs", "Solana", "Infrastructure"],
    logo: turbineLogo,
  },
];

export const projects: Project[] = [
  {
    id: "syn8x",
    index: "01",
    title: "syn8x",
    status: "Active Build",
    description:
      "A systems-focused collective exploring decentralized infrastructure, developer tooling, and AI-native coordination across emerging protocol ecosystems.",
    tags: ["Web3", "Infrastructure", "Protocols", "AI Systems"],
    github: "https://github.com/akxh5/syn8x-terminal-web",
    live: {
      url: "https://syn8x.tech",
      label: "Live System",
    },
    featured: true,
  },
  {
    id: "oper8a",
    index: "02",
    title: "Oper8a",
    status: "Finished · v0",
    description:
      "A duplicate-awareness and monitoring system designed to reduce redundant downloads and optimize storage workflows through proactive detection, browser interception, and SHA256-based file analysis.",
    tags: ["Monitoring", "SHA256", "Infrastructure", "Systems"],
    github: "https://github.com/akxh5/oper8a",
    live: {
      url: "https://oper8a.vercel.app",
      label: "Live Preview",
    },
  },
  {
    id: "terraledger",
    index: "03",
    title: "TerraLedger",
    status: "Currently Building",
    description:
      "A validator-backed ownership protocol on Solana designed to create portable and auditable land ownership records through IPFS anchoring, validator attestations, and dispute-aware governance systems.",
    tags: ["Solana", "IPFS", "Governance", "Infrastructure"],
    github: "https://github.com/akxh5/terraledger.solana",
    live: {
      url: "https://terraledger-waitlist.vercel.app/",
      label: "Waitlist",
    },
  },
  {
    id: "arch1v",
    index: "04",
    title: "Arch1v",
    status: "Finished",
    description:
      "A lightweight archival and file-organization system designed to automatically structure, archive, and detect duplicate files across local environments.",
    tags: ["Archive", "File Systems", "Deduplication", "Cross-platform"],
    github: "https://github.com/akxh5/Arch1v",
    live: {
      url: "https://github.com/akxh5/Arch1v/releases/tag/v1.0",
      label: "Release v1.0",
    },
  },
];
