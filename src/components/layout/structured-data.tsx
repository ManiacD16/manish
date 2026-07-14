import { siteConfig } from "@/data/site";
import { absoluteUrl } from "@/lib/utils";

export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.title,
    url: absoluteUrl(),
    email: `mailto:${siteConfig.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Noida",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN"
    },
    sameAs: [siteConfig.linkedin],
    knowsAbout: [
      "Solidity",
      "Smart Contracts",
      "RWA Tokenization",
      "ERC-3643",
      "ERC-1404",
      "Ethereum",
      "Avalanche",
      "React",
      "Next.js",
      "Node.js"
    ]
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
