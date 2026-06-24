import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.pulskitchen.dk";
  const routes = [
    { url: "/",            priority: 1.0,  changeFrequency: "weekly"  },
    { url: "/menu",        priority: 0.9,  changeFrequency: "monthly" },
    { url: "/koncertmenu", priority: 0.9,  changeFrequency: "monthly" },
    { url: "/brunch",      priority: 0.8,  changeFrequency: "monthly" },
    { url: "/selskaber",   priority: 0.8,  changeFrequency: "monthly" },
    { url: "/gavekort",    priority: 0.7,  changeFrequency: "monthly" },
    { url: "/om",          priority: 0.6,  changeFrequency: "yearly"  },
    { url: "/kontakt",     priority: 0.7,  changeFrequency: "yearly"  },
  ] as const;

  return routes.map(({ url, priority, changeFrequency }) => ({
    url: `${base}${url}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
