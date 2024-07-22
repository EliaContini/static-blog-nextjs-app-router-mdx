// custom
import { SITE_URL } from "@/lib/constants";
import Pages from "@/lib/api/Pages";

const apiPages = Pages();

const sitemap = async () => {
  const pages = await apiPages.get();
  const lastModified = new Date();

  return pages.map((page) => {
    return {
      changeFrequency: "weekly",
      lastModified,
      priority: 0.5,
      url: `${SITE_URL}${page.path}`,
    };
  });
};

export default sitemap;
