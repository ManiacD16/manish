export const siteConfig = {
  name: "Manish Singh",
  title: "Full Stack Blockchain Developer",
  description:
    "Full Stack Blockchain Developer building regulated digital assets, cross-chain infrastructure, secure smart contracts, and production-ready Web3 experiences.",
  location: "Noida, Uttar Pradesh, India",
  email: "msd161918@gmail.com",
  phone: "+91 89549 87907",
  linkedin: "https://www.linkedin.com/in/manishhsingh",
  resume: "/resume/Manish-Singh-Resume.pdf",
  availability: "Available for selected Web3 opportunities",
  keywords: [
    "Manish Singh",
    "Full Stack Blockchain Developer",
    "Solidity Developer",
    "Web3 Developer",
    "ERC-3643",
    "ERC-1404",
    "RWA Tokenization",
    "Next.js Developer",
    "Smart Contract Developer",
    "Ethereum",
    "Avalanche"
  ]
} as const;

export const navigation = [
  { href: "/", label: "Front Page", index: "01" },
  { href: "/work", label: "Selected Work", index: "02" },
  { href: "/about", label: "Profile", index: "03" },
  { href: "/resume", label: "Career Ledger", index: "04" },
  { href: "/contact", label: "Contact", index: "05" }
] as const;

export const capabilityGroups = [
  {
    number: "I",
    title: "Smart Contracts",
    description:
      "Standards-aware contract engineering for regulated assets, token workflows, and cross-chain systems.",
    skills: [
      "Solidity",
      "ERC-3643",
      "ERC-1404",
      "RWA Tokenization",
      "Bridge Contracts",
      "Hardhat",
      "Foundry",
      "Truffle"
    ]
  },
  {
    number: "II",
    title: "Networks & Web3",
    description:
      "Wallet-first integrations across Ethereum and EVM-compatible ecosystems.",
    skills: [
      "Ethereum",
      "Avalanche",
      "BSC",
      "Polygon",
      "Ethers.js",
      "Web3.js",
      "MetaMask",
      "WalletConnect",
      "Reown AppKit"
    ]
  },
  {
    number: "III",
    title: "Product Engineering",
    description:
      "Complete application delivery from responsive interfaces to APIs and persistent data.",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Three.js",
      "Node.js",
      "Express.js",
      "REST APIs",
      "MongoDB"
    ]
  }
] as const;

export const principles = [
  {
    title: "Security before spectacle",
    body: "Irreversible actions deserve precise language, explicit states, and interfaces that help people understand what they are signing."
  },
  {
    title: "Standards before shortcuts",
    body: "Established token, identity, and interoperability standards create stronger foundations than isolated one-off implementations."
  },
  {
    title: "Full-stack context",
    body: "A smart contract is one part of a product. APIs, wallet state, data consistency, and interface feedback determine whether the system feels reliable."
  },
  {
    title: "Test the failure paths",
    body: "Rejected signatures, changed networks, contract reverts, stale data, and interrupted transactions are core product states—not edge decorations."
  }
] as const;
