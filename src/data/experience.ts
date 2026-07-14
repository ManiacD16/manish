export type Experience = {
  company: string;
  role: string;
  location: string;
  period: string;
  current?: boolean;
  summary: string;
  highlights: string[];
  stack: string[];
};

export const experiences: Experience[] = [
  {
    company: "GFutureTech PVT. LTD",
    role: "Full Stack Blockchain Developer",
    location: "Ahmedabad, Gujarat",
    period: "Nov 2025 — Present",
    current: true,
    summary:
      "Developing regulated token workflows and enterprise-connected blockchain products across Ethereum, Avalanche, and other EVM networks.",
    highlights: [
      "Working with ERC-3643 and ERC-1404 standards for RWA-focused token systems.",
      "Building and testing smart contracts, integration modules, and secure decentralized interfaces."
    ],
    stack: ["Solidity", "ERC-3643", "ERC-1404", "Hardhat", "Foundry", "React"]
  },
  {
    company: "Self-Employed / Freelancer",
    role: "Full Stack Blockchain Developer",
    location: "Remote",
    period: "Apr 2025 — Present",
    current: true,
    summary:
      "Independent Web3 product development spanning contract logic, wallet connectivity, and responsive application interfaces.",
    highlights: [
      "Built and deployed IINGO Network with on-chain community and token interaction workflows.",
      "Integrated MetaMask and WalletConnect experiences with Reown AppKit, Ethers.js, and Web3.js."
    ],
    stack: ["React", "TypeScript", "Solidity", "Ethers.js", "WalletConnect", "Reown"]
  },
  {
    company: "NUFI Emerging Technologies FZCO",
    role: "Full Stack Blockchain Developer",
    location: "Dubai, UAE",
    period: "Mar 2025 — Oct 2025",
    summary:
      "Created smart contracts and full-stack modules for multi-network blockchain products and enterprise integrations.",
    highlights: [
      "Built a bridge contract supporting wallet-level cross-chain swap workflows.",
      "Developed responsive React and Next.js modules and tested contracts with Truffle and Ganache."
    ],
    stack: ["Solidity", "Ethereum", "Polygon", "Next.js", "TypeScript", "Truffle"]
  },
  {
    company: "Stack Meridian",
    role: "Full Stack Blockchain Developer",
    location: "Nagpur, Maharashtra",
    period: "Mar 2024 — Feb 2025",
    summary:
      "Delivered smart-contract integrations, frontend applications, and backend services across several EVM-compatible chains.",
    highlights: [
      "Developed contract-connected applications across Ethereum, BSC, and other EVM networks.",
      "Built Node.js and Express APIs with MongoDB and responsive interfaces using React, Next.js, and Three.js."
    ],
    stack: ["React", "Next.js", "Node.js", "Express", "MongoDB", "Three.js"]
  },
  {
    company: "Magic EdTech",
    role: "DM Trainee",
    location: "Noida, Uttar Pradesh",
    period: "Oct 2022 — Mar 2023",
    summary:
      "Built responsive digital publishing layouts and developed a strong foundation in multi-device quality assurance.",
    highlights: [
      "Created responsive eBook layouts using HTML and CSS.",
      "Performed delivery-focused quality checks with cross-functional teams."
    ],
    stack: ["HTML", "CSS", "Responsive Design", "Quality Assurance"]
  }
];

export const education = [
  {
    institution: "Amity University",
    program: "MCA, Specialization in Blockchain",
    period: "2024 — 2026",
    detail:
      "Advanced study in software engineering, databases, blockchain systems, Web3 applications, and scalable product development."
  },
  {
    institution: "Surajmal Agarwal Degree College",
    program: "Bachelor in Computer Applications",
    period: "2019 — 2022",
    detail: "Completed with 73.80%."
  }
] as const;
