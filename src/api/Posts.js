// nodejs
import fs from "fs";
import path from "path";

const POSTS_FOLDER = path.join(process.cwd(), "src", "app", "blog");

const Posts = () => {
  return {
    get: async () => {
      const files = fs.readdirSync(POSTS_FOLDER);

      const slugs = files.filter((file) => {
        return fs.lstatSync(path.join(POSTS_FOLDER, file)).isDirectory();
      });

      const posts = [];
      for (const slug of slugs) {
        //
        // IMPORTANT
        //
        // import() does NOT work using path.join() output
        //
        const { metadata } = await import(`./../app/blog/${slug}/page.mdx`);

        const post = {
          metadata,
          slug,
        };

        posts.push(post);
      }

      // sort posts by descending publish date
      posts.sort((postA, postB) => {
        const dateA = postA.metadata.datePublish;
        const dateB = postB.metadata.datePublish;

        if (dateA > dateB) {
          return -1;
        }
        if (dateA < dateB) {
          return 1;
        }

        return 0;
      });

      return posts;
    },
  };
};

export default Posts;
