import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
}

export default function BlogIndex() {
  const postsDirectory = path.join(process.cwd(), "content/posts");
  const filenames = fs.readdirSync(postsDirectory);

  const posts: BlogPost[] = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);

    return {
      slug: filename.replace(/\.mdx$/, ""),
      title: data.title || "Untitled",
      date: data.date || "",
      description: data.description || "",
    };
  });

  // Sort posts by date (newest first)
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <header className="mb-12">
        <h1 className="text-5xl font-bold text-wolf-accent mb-4">Blog</h1>
        <p className="text-xl text-wolf-text">
          Thoughts, tutorials, and insights on AI engineering and web development.
        </p>
      </header>

      <div className="grid gap-6">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <Card className="bg-wolf-card border-wolf-card hover:border-wolf-accent transition-colors cursor-pointer">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-2xl text-wolf-accent hover:text-wolf-hover transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-wolf-text/70 mt-2">
                      {post.date}
                    </CardDescription>
                  </div>
                  <Badge variant="secondary" className="bg-wolf-accent/10 text-wolf-accent border-wolf-accent/20">
                    New
                  </Badge>
                </div>
              </CardHeader>
              {post.description && (
                <CardContent>
                  <p className="text-wolf-text">{post.description}</p>
                </CardContent>
              )}
            </Card>
          </Link>
        ))}
      </div>

      {posts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-wolf-text/70 text-lg">No blog posts yet. Check back soon!</p>
        </div>
      )}
    </div>
  );
}
