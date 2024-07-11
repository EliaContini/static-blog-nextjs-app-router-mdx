// nextjs
import Link from "next/link";

// custom
import FormatDate from "./../FormatDate";
import styles from "./posts.module.css";

const Posts = ({ posts }) => {
  return (
    <ol className={styles.Posts}>
      {posts.map((post) => {
        return (
          <li className={styles["Post"]} key={post.slug}>
            <h3 className={styles["Post-title"]}>
              <Link href={`/blog/${post.slug}`}>{post.metadata.title}</Link>
            </h3>
            <p className={styles["Post-description"]}>
              {post.metadata.description}
            </p>
            <p className={styles["Post-tags"]}>
              {post.metadata.keywords.map((keyword) => {
                return (
                  <span
                    key={`${post.slug}-${keyword}`}
                    className={styles["Post-tag"]}
                  >
                    {keyword}
                  </span>
                );
              })}
            </p>
            <div className={styles["Post-publishDate"]}>
              <FormatDate date={post.metadata.datePublish} />
            </div>
          </li>
        );
      })}
    </ol>
  );
};

export default Posts;
