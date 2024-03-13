import fs from "fs";
import matter from "gray-matter";

interface PostMetadata {
  title: string;
  date: string;
  subtitle: string;
  slug: string;
}

const getPostsMetadata = (): PostMetadata[] => {
  const folder = "public/posts";
  const files = fs.readdirSync(folder);
  const markdownFiles = files.filter((file) => file.endsWith(".md"));
  const posts = markdownFiles.map((file) => {
    const fileContent = fs.readFileSync(`${folder}/${file}`, "utf8");
    const matterResult = matter(fileContent);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: file.replace(".md", ""),
    };
  });

  return posts;
};

export type { PostMetadata };
export { getPostsMetadata };
