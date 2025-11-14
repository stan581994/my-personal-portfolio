import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const projects = [
  {
    title: "AI Text Summarizer",
    description: "A project built using Next.js + LLMs to automatically summarize long-form content.",
    technologies: ["Next.js", "OpenAI API", "TypeScript", "Tailwind CSS"],
    status: "In Progress",
    github: "#",
    demo: "#",
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with Spring Boot backend and React frontend.",
    technologies: ["Spring Boot", "React", "PostgreSQL", "Docker"],
    status: "Completed",
    github: "#",
    demo: "#",
  },
  {
    title: "Task Management System",
    description: "Collaborative task management tool with real-time updates and team features.",
    technologies: ["Java", "WebSocket", "MySQL", "Bootstrap"],
    status: "Completed",
    github: "#",
    demo: "#",
  },
  {
    title: "Portfolio Website",
    description: "This portfolio website built with Next.js, shadcn/ui, and MDX for blogging.",
    technologies: ["Next.js", "MDX", "shadcn/ui", "Tailwind CSS"],
    status: "Completed",
    github: "#",
    demo: "#",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12">
          <h1 className="text-5xl font-bold text-wolf-accent mb-4">Projects</h1>
          <p className="text-xl text-wolf-text">
            A showcase of my work, from backend systems to AI-powered applications.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="bg-wolf-card border-wolf-card hover:border-wolf-accent transition-all">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-2xl text-wolf-accent">{project.title}</CardTitle>
                  <Badge 
                    variant={project.status === "Completed" ? "default" : "secondary"}
                    className={project.status === "Completed" 
                      ? "bg-wolf-accent/20 text-wolf-accent border-wolf-accent/30" 
                      : "bg-wolf-hover/20 text-wolf-hover border-wolf-hover/30"
                    }
                  >
                    {project.status}
                  </Badge>
                </div>
                <CardDescription className="text-wolf-text/80 mt-2">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline"
                      className="bg-wolf-bg border-wolf-accent/30 text-wolf-text"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex gap-3">
                <Link href={project.github} className="flex-1">
                  <Button 
                    variant="outline" 
                    className="w-full border-wolf-accent text-wolf-accent hover:bg-wolf-accent/10"
                  >
                    View Code
                  </Button>
                </Link>
                <Link href={project.demo} className="flex-1">
                  <Button className="w-full bg-wolf-accent text-black hover:bg-wolf-hover">
                    Live Demo
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-wolf-text/70 mb-4">More projects coming soon!</p>
          <Link href="/contact">
            <Button className="bg-wolf-accent text-black hover:bg-wolf-hover">
              Let's Collaborate
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
