// custom
import Api from "@/lib/api";
import Posts from "@/components/Posts";

const api = Api();

export const metadata = {
  description: "The blog about everything",
  title: "Blog",
};

const Blog = async () => {
  const posts = await api.posts.get();

  return <Posts posts={posts} />;
};

export default Blog;
