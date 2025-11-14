import fs from "fs";
import path from "path";
import { MDXRemote } from 'next-mdx-remote/rsc';
import matter from 'gray-matter';
import { Badge } from "@/components/ui/badge";

// Make Badge available in MDX
const components = {
  Badge,
};

export default async function BlogPost({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "content/posts", `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  
  const { content, data } = matter(fileContent);

  return (
    <div className="max-w-6xl mx-auto py-10 px-8">
      <article className="prose prose-lg prose-invert max-w-none prose-headings:text-wolf-accent prose-a:text-wolf-accent hover:prose-a:text-wolf-hover prose-strong:text-wolf-text prose-code:text-wolf-accent prose-pre:bg-wolf-card prose-pre:border prose-pre:border-wolf-accent/30">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-wolf-accent mb-2">{data.title}</h1>
          <p className="text-wolf-text/70">{data.date}</p>
          {data.description && (
            <p className="text-lg text-wolf-text mt-4">{data.description}</p>
          )}
        </header>
        <div className="text-wolf-text">
          <MDXRemote source={content} components={components} />
        </div>
      </article>
    </div>
  );
}

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "content/posts");
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => ({
    slug: filename.replace(/\.mdx$/, ""),
  }));
}
