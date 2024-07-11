// custom
import Api from "@/api";
import Posts from "@/components/Posts";

const api = Api();

const Blog = async () => {
  const posts = await api.posts.get();

  return <Posts posts={posts} />;
};

export default Blog;
