import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Standard søgemaskiner — tillad alt undtagen interne/juridiske sider
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/privatlivspolitik",
          "/handelsbetingelser",
        ],
      },
      {
        // Blokér aggressive AI-scrapere der høster indhold uden tilladelse
        userAgent: ["GPTBot", "ChatGPT-User", "CCBot", "anthropic-ai", "Claude-Web"],
        disallow: "/",
      },
    ],
    sitemap: "https://www.pulskitchen.dk/sitemap.xml",
  };
}
