// nextjs
import Link from "next/link";

// custom
import { SITE_PUBLISHER, SITE_TITLE } from "@/lib/constants";
import { defaultMetadata } from "@/lib/shared-metadata";
import "./globals.css";

export const metadata = { ...defaultMetadata };

const PageLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>{SITE_TITLE}</h1>

          <nav>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main>{children}</main>

        <footer>
          &copy; {new Date().getFullYear()} {SITE_PUBLISHER}
        </footer>
      </body>
    </html>
  );
};

export default PageLayout;
