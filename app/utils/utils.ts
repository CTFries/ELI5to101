import fs from "fs";
import path from "path";

type Metadata = {
  modifiedAt: string;
  tags: Array<string>;
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
};

function parseFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  let match = frontmatterRegex.exec(fileContent);
  let frontMatterBlock = match![1];
  let content = fileContent.replace(frontmatterRegex, "").trim();
  let frontMatterLines = frontMatterBlock.trim().split("\n");
  let metadata: { [key: string]: string | string[] } = {};

  let currentKey: keyof Metadata | null = null;
  let multiLineValue = "";

  frontMatterLines.forEach((line) => {
    if (line.trim().startsWith("-")) {
      if (currentKey) {
        metadata[currentKey] = multiLineValue.trim();
        multiLineValue = "";
      }
      let tag = line.trim().substring(1).trim();
      if (!metadata.tags) {
        metadata.tags = [];
      }
      // @ts-ignore
      metadata.tags.push(tag);
    } else {
      let [key, ...valueArr] = line.split(": ");
      let value = valueArr.join(": ").trim();
      value = value.replace(/^['"](.*)['"]$/, "$1");
      if (key.trim() === "tags") {
        metadata[key.trim() as keyof Metadata] = value
          .split(",")
          .map((tag) => tag.trim());
      } else {
        metadata[key.trim() as keyof Metadata] = value;
      }
    }
  });

  return { metadata: metadata as Metadata, content };
}

function getMDXFiles(dir) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath) {
  let rawContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

function getMDXData(dir) {
  let mdxFiles = getMDXFiles(dir);
  const dateOrdered = mdxFiles.sort((a, b) => {
    let aDate = readMDXFile(path.join(dir, a)).metadata.publishedAt;
    let bDate = readMDXFile(path.join(dir, b)).metadata.publishedAt;
    return new Date(bDate).getTime() - new Date(aDate).getTime();
  });
  return dateOrdered.map((file) => {
    let { metadata, content } = readMDXFile(path.join(dir, file));
    let slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}

export function getPosts() {
  return getMDXData(path.join(process.cwd(), "app", "posts"));
}

export function formatDate(date: string, includeRelative = false) {
  let currentDate = new Date();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  let targetDate = new Date(date);

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  let daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = "";

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = "Today";
  }

  let fullDate = targetDate.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;
}
