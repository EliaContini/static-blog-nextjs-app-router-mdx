// custom
import Pages from "./Pages";
import Posts from "./Posts";

const Api = () => {
  return {
    pages: Pages(),
    posts: Posts(),
  };
};

export default Api;
