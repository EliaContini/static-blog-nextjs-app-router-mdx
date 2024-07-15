// custom
import Api from "@/api";
import Posts from "@/components/Posts";
import {
  defaultMetadata,
  defaultOpenGraph,
  defaultTwitter,
} from "@/shared-metadata";

const api = Api();

const description = "The blog about everything";
const title = "Blog";

export const metadata = {
  ...defaultMetadata,
  description: description,
  title: title,

  openGraph: {
    ...defaultOpenGraph,
    description: description,
    images: [
      {
        url: "https://placehold.co/2048x1024?text=Blog+Open+Graph",
        width: 2048,
        height: 1024,
      },
    ],
    title: title,
  },
  twitter: {
    ...defaultTwitter,
    description: description,
    images: ["https://placehold.co/2048x1024?text=Blog+X"],
    title: title,
  },
};

const Blog = async () => {
  const posts = await api.posts.get();

  return <Posts posts={posts} />;
};

export default Blog;
