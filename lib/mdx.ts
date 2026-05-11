import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");

export function getContentFiles(type: "work" | "posts") {
  const dir = path.join(contentDir, type);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));
}

export function getContentBySlug(type: "work" | "posts", slug: string) {
  const filePath = path.join(contentDir, type, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { frontmatter: data, content, slug };
}

export function getAllContent(type: "work" | "posts") {
  const files = getContentFiles(type);
  return files
    .map((file) => {
      const slug = file.replace(".mdx", "");
      const item = getContentBySlug(type, slug);
      return item ? { ...item.frontmatter, slug } : null;
    })
    .filter(Boolean)
    .sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
