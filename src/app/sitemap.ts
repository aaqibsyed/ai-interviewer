import type {
  MetadataRoute,
} from "next";

export default function sitemap():
  MetadataRoute.Sitemap {
  return [
    {
      url:
        "https://ai-interviewer-aj.vercel.app/",
      priority: 1,
    },
  ];
}