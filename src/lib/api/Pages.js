// nodejs
import fs from "fs";
import path from "path";

// custom
import { CONFIG_PAGE_EXTENSIONS } from "./../constants.mjs";

const APP_FOLDER = path.join(process.cwd(), "src", "app");

const Pages = () => {
  const allowedPages = CONFIG_PAGE_EXTENSIONS.map((extension) => {
    return `page.${extension}`;
  });

  const normalizeFolderPath = (folderPath) => {
    const normalized = folderPath.replace(APP_FOLDER, "");

    return normalized;
  };

  const getPages = async (folder, allowedPages, accumulator) => {
    const files = fs.readdirSync(folder);

    files.forEach(async (file) => {
      if (allowedPages.indexOf(file) !== -1) {
        accumulator.push({
          path: normalizeFolderPath(folder),
        });

        return accumulator;
      }

      const child = path.join(folder, file);
      if (fs.lstatSync(child).isDirectory()) {
        return getPages(child, allowedPages, accumulator);
      }
    });

    return accumulator;
  };

  return {
    get: async () => {
      return await getPages(APP_FOLDER, allowedPages, []);
    },
  };
};

export default Pages;
