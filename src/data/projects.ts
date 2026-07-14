export type ProjectSection = {
  eyebrow: string;
  title: string;
  body: string[];
  bullets?: string[];
};

export type Project = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  category: string;
  year: string;
  status: "Current" | "Delivered" | "Independent";
  confidential?: boolean;
  summary: string;
  outcome: string;
  role: string;
  networks: string[];
  standards: string[];
  stack: string[];
  image: string;
  accent: string;
  featured: boolean;
  sections: ProjectSection[];
};

export const projects: Project[] = [
  {
    slug: "regulated-rwa-platform",
    number: "01",
    title: "Regulated RWA Platform",
    shortTitle: "RWA Platform",
    category: "Enterprise Blockchain",
    year: "2025—Present",
    status: "Current",
    confidential: true,
    summary:
      "A standards-aware blockchain product for regulated real-world asset workflows across smart contracts, enterprise integrations, and decentralized interfaces.",
    outcome:
      "Implemented contract and application modules that support identity-aware regulated token operations across EVM-compatible networks.",
    role: "Full Stack Blockchain Developer",
    networks: ["Ethereum", "Avalanche", "EVM"],
    standards: ["ERC-3643", "ERC-1404", "RWA"],
    stack: ["Solidity", "Hardhat", "Foundry", "React", "TypeScript", "Node.js"],
    image: "/images/project-rwa.svg",
    accent: "COMPLIANT",
    featured: true,
    sections: [
      {
        eyebrow: "The context",
        title: "Regulated assets require more than a transferable token.",
        body: [
          "The platform needed to support controlled token workflows where identity, permissions, and transfer restrictions are part of the product architecture—not post-launch additions.",
          "My work spans Solidity contracts, application integrations, transaction interfaces, and testing across Ethereum, Avalanche, and other EVM-compatible environments."
        ]
      },
      {
        eyebrow: "Engineering focus",
        title: "Standards-aware logic connected to usable product flows.",
        body: [
          "The implementation focuses on translating regulated token requirements into explicit contract responsibilities and clear application states.",
          "On the interface side, users need understandable feedback for permissions, approvals, pending transactions, confirmations, and rejected operations."
        ],
        bullets: [
          "ERC-3643 and ERC-1404 workflow support",
          "EVM network deployment and integration",
          "Hardhat and Foundry contract testing",
          "Enterprise-connected application modules",
          "Responsive transaction interfaces"
        ]
      },
      {
        eyebrow: "Confidentiality note",
        title: "Technical depth without exposing protected implementation details.",
        body: [
          "The project remains confidential, so public documentation intentionally excludes private architecture, contract addresses, production data, and proprietary workflow rules.",
          "The case study communicates the engineering scope and decision framework without presenting confidential company material."
        ]
      }
    ]
  },
  {
    slug: "iingo-network",
    number: "02",
    title: "IINGO Network",
    shortTitle: "IINGO",
    category: "Web3 Community Platform",
    year: "2025—Present",
    status: "Independent",
    summary:
      "An end-to-end Web3 platform combining on-chain community interactions, token workflows, wallet authentication, and a responsive product interface.",
    outcome:
      "Delivered a deployable product experience connecting Solidity contracts with MetaMask and WalletConnect user journeys.",
    role: "Independent Full Stack Blockchain Developer",
    networks: ["EVM"],
    standards: ["Token Workflows", "Wallet Auth"],
    stack: [
      "React",
      "TypeScript",
      "Solidity",
      "Tailwind CSS",
      "Ethers.js",
      "Web3.js",
      "WalletConnect",
      "Reown AppKit"
    ],
    image: "/images/project-iingo.svg",
    accent: "LIVE WORK",
    featured: true,
    sections: [
      {
        eyebrow: "The product",
        title: "A connected Web3 experience, not a collection of disconnected transactions.",
        body: [
          "IINGO brings smart-contract interactions, wallet connectivity, and community-oriented product flows into a single responsive interface.",
          "The work required ownership across contract logic, wallet state, network interactions, and frontend behaviour."
        ]
      },
      {
        eyebrow: "Wallet experience",
        title: "Connection, authentication, and transaction state designed as one journey.",
        body: [
          "MetaMask and WalletConnect integration was structured around visible connection state, supported networks, account changes, and transaction feedback.",
          "Reown AppKit provides the connection layer while Ethers.js and Web3.js support blockchain interactions throughout the application."
        ],
        bullets: [
          "Responsive React and TypeScript interface",
          "MetaMask and WalletConnect support",
          "Reown AppKit integration",
          "On-chain community interactions",
          "Token interaction workflows"
        ]
      },
      {
        eyebrow: "Full-stack ownership",
        title: "Every layer shaped the final user experience.",
        body: [
          "The project demonstrates the value of working across the whole stack: contract events influence application state, wallet behaviour influences navigation, and network feedback influences trust.",
          "This cross-layer context helps prevent the common gap between technically correct contracts and confusing decentralized interfaces."
        ]
      }
    ]
  },
  {
    slug: "cross-chain-bridge",
    number: "03",
    title: "Cross-Chain Bridge System",
    shortTitle: "Bridge System",
    category: "Blockchain Infrastructure",
    year: "2025",
    status: "Delivered",
    confidential: true,
    summary:
      "A bridge-contract workflow supporting wallet-level cross-chain swaps across Ethereum, Polygon, and other EVM-compatible networks.",
    outcome:
      "Built and integrated contract modules for cross-network wallet operations with frontend and enterprise application touchpoints.",
    role: "Full Stack Blockchain Developer",
    networks: ["Ethereum", "Polygon", "EVM"],
    standards: ["Cross-Chain", "Wallet Swap"],
    stack: ["Solidity", "React", "Next.js", "TypeScript", "Truffle", "Ganache"],
    image: "/images/project-bridge.svg",
    accent: "CROSS-CHAIN",
    featured: true,
    sections: [
      {
        eyebrow: "The challenge",
        title: "A cross-chain action must remain understandable across multiple states.",
        body: [
          "Bridge interactions span wallets, contracts, source networks, destination networks, and asynchronous confirmation states.",
          "The system therefore needed both contract-level logic and application-level feedback that could communicate what was happening before, during, and after a swap."
        ]
      },
      {
        eyebrow: "Contract and integration",
        title: "Bridge responsibilities connected to wallet-level product behaviour.",
        body: [
          "I created and deployed bridge-contract functionality and integrated it into broader enterprise and decentralized application workflows.",
          "Truffle and Ganache were used to validate contract behaviour before integration with responsive React and Next.js modules."
        ],
        bullets: [
          "Wallet-level cross-chain swap workflow",
          "Ethereum and Polygon integration",
          "Contract testing with Truffle and Ganache",
          "Responsive frontend modules",
          "Enterprise application integration"
        ]
      },
      {
        eyebrow: "Reliability",
        title: "Failure states are part of the architecture.",
        body: [
          "A reliable bridge interface must account for rejected signatures, network mismatch, pending confirmations, and unsuccessful contract calls.",
          "The product layer was shaped around those states rather than assuming every transaction completes immediately."
        ]
      }
    ]
  },
  {
    slug: "evm-application-suite",
    number: "04",
    title: "EVM Application Suite",
    shortTitle: "EVM Suite",
    category: "Full-Stack dApp Engineering",
    year: "2024—2025",
    status: "Delivered",
    summary:
      "A collection of contract-connected applications, APIs, and responsive interfaces delivered across Ethereum, BSC, and other EVM-compatible networks.",
    outcome:
      "Built reusable full-stack modules connecting contracts, REST APIs, MongoDB data, and responsive decentralized application flows.",
    role: "Full Stack Blockchain Developer",
    networks: ["Ethereum", "BSC", "EVM"],
    standards: ["dApp Integration", "REST"],
    stack: ["Vite", "React", "Next.js", "Three.js", "Node.js", "Express", "MongoDB"],
    image: "/images/project-suite.svg",
    accent: "ARCHIVE",
    featured: false,
    sections: [
      {
        eyebrow: "The work",
        title: "Reusable application foundations across several EVM products.",
        body: [
          "The work combined smart-contract integration with frontend applications, REST APIs, persistent data, and wallet authentication.",
          "It established the practical full-stack foundation that now supports more specialized regulated-asset and cross-chain work."
        ]
      },
      {
        eyebrow: "Delivery scope",
        title: "From interface systems to backend services.",
        body: [
          "Frontend modules used Vite, React, Next.js, TypeScript, Tailwind CSS, and Three.js. Backend services used Node.js, Express, REST APIs, and MongoDB.",
          "Ethers.js and Web3.js connected the product layer to contracts and wallet authentication workflows."
        ]
      }
    ]
  }
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
