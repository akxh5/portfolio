export type WritingEntry = {
  id: string;
  index: string;
  title: string;
  description: string;
  platform: string;
  link: string;
  cta: string;
};

export const writings: WritingEntry[] = [
  {
    id: "solana-mobile",
    index: "01",
    title: "THE SOLANA MOBILE REVOLUTION: FROM PROMISE TO REALITY",
    description:
      "Exploring Solana’s mobile push, ecosystem direction, and the gap between infrastructure ambition and real-world adoption.",
    platform: "Notion · Research Essay",
    link: "https://www.notion.so/THE-SOLANA-MOBILE-REVOLUTION-FROM-PROMISE-TO-REALITY-22e0a783cf0780899a02cefc8b8efc5d",
    cta: "Read Essay →",
  },
  {
    id: "virality-nexus",
    index: "02",
    title: "The Dual-Platform Virality Nexus: AI’s Transformative Societal Impact on X and Medium",
    description:
      "Observations on AI-driven virality, platform behavior, and how algorithmic systems reshape online discourse.",
    platform: "Medium · Long-form Essay",
    link: "https://medium.com/@aksh11ansh/the-dual-platform-virality-nexus-ais-transformative-societal-impact-on-x-and-medium-c95fda8e0e8d",
    cta: "Read Essay →",
  },
  {
    id: "solana-ecosystem",
    index: "03",
    title: "Inside the Solana Ecosystem: Why It’s More Than Just a Fast Chain",
    description:
      "A broader look into Solana’s ecosystem architecture, applications, and infrastructure beyond transaction throughput.",
    platform: "Medium · Ecosystem Analysis",
    link: "https://medium.com/@aksh11ansh/inside-the-solana-ecosystem-why-its-more-than-just-a-fast-chain-afcd41a38418",
    cta: "Read Essay →",
  },
  {
    id: "monad-evm",
    index: "04",
    title: "How Monad Rebuilt the EVM for Speed",
    description:
      "Breaking down Monad’s parallel execution architecture and the engineering decisions behind high-performance EVM compatibility.",
    platform: "Substack · Protocol Breakdown",
    link: "https://open.substack.com/pub/elysiumre/p/how-monad-rebuilt-the-evm-for-speed",
    cta: "Read Essay →",
  },
];
