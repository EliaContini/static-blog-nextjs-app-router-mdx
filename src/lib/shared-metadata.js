// custom
import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from "./constants.mjs";

export const defaultOpenGraph = {
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_TITLE}`,
  },
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  siteName: SITE_TITLE,
  images: [
    {
      url: "https://placehold.co/2048x1024?text=Open+Graph",
      width: 2048,
      height: 1024,
    },
  ],
  type: "website",
};

export const defaultTwitter = {
  card: "summary_large_image",
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_TITLE}`,
  },
  description: SITE_DESCRIPTION,
  siteId: "1467726470533754880",
  creator: "@myXAccount",
  creatorId: "1467726470533754880",
  images: ["https://placehold.co/2048x1024?text=X"],
};

export const defaultMetadata = {
  description: SITE_DESCRIPTION,
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_TITLE}`,
  },

  openGraph: { ...defaultOpenGraph },
  twitter: { ...defaultTwitter },
};
