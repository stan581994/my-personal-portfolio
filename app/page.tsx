import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-start px-8 max-w-7xl mx-auto">
        <Badge className="mb-4 bg-wolf-accent/10 text-wolf-accent border-wolf-accent/20">
          Welcome to my portfolio
        </Badge>
        <h1 className="text-6xl font-bold text-wolf-accent mb-4">
          Lone Wolf Engineer
        </h1>
        <p className="mt-4 text-2xl text-wolf-text max-w-2xl">
          Java Developer ➜ Future AI Engineer
        </p>
        <p className="mt-2 text-lg text-wolf-text/80 max-w-2xl">
          Building intelligent systems with modern tools and technologies.
        </p>
        
        <div className="flex gap-4 mt-8">
          <a href="#projects">
            <Button className="bg-wolf-accent text-black hover:bg-wolf-hover">
              View Projects
            </Button>
          </a>
          <Link href="/blog">
            <Button variant="outline" className="border-wolf-accent text-wolf-accent hover:bg-wolf-accent/10">
              Read Blog
            </Button>
          </Link>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen py-20 px-8 bg-wolf-card/30 flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-4xl font-bold text-wolf-accent mb-12">Skills & Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-wolf-card border-wolf-card hover:border-wolf-accent transition-colors">
              <CardHeader>
                <CardTitle className="text-wolf-accent">Backend Development</CardTitle>
              </CardHeader>
              <CardContent className="text-wolf-text">
                <ul className="space-y-2">
                  <li>• Java & Spring Boot</li>
                  <li>• RESTful APIs</li>
                  <li>• Database Design</li>
                  <li>• Microservices</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-wolf-card border-wolf-card hover:border-wolf-accent transition-colors">
              <CardHeader>
                <CardTitle className="text-wolf-accent">Frontend Development</CardTitle>
              </CardHeader>
              <CardContent className="text-wolf-text">
                <ul className="space-y-2">
                  <li>• React & Next.js</li>
                  <li>• TypeScript</li>
                  <li>• Tailwind CSS</li>
                  <li>• Modern UI/UX</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-wolf-card border-wolf-card hover:border-wolf-accent transition-colors">
              <CardHeader>
                <CardTitle className="text-wolf-accent">AI & Machine Learning</CardTitle>
              </CardHeader>
              <CardContent className="text-wolf-text">
                <ul className="space-y-2">
                  <li>• Learning AI Engineering</li>
                  <li>• LLM Integration</li>
                  <li>• Python</li>
                  <li>• Data Processing</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20 px-8 flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-4xl font-bold text-wolf-accent mb-4">Projects</h2>
          <p className="text-xl text-wolf-text mb-12">
            A showcase of my work, from backend systems to AI-powered applications.
          </p>

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
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen py-20 px-8 bg-wolf-card/30 flex items-center">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-4xl font-bold text-wolf-accent mb-4">About Me</h2>
          <p className="text-xl text-wolf-text mb-12">
            Java Developer transitioning into AI Engineering
          </p>

          <div className="space-y-8">
            <Card className="bg-wolf-card border-wolf-card">
              <CardHeader>
                <CardTitle className="text-2xl text-wolf-accent">My Journey</CardTitle>
              </CardHeader>
              <CardContent className="text-wolf-text space-y-4">
                <p>
                  I'm a passionate software developer with a strong foundation in Java and backend development. 
                  Currently, I'm on an exciting journey to expand my expertise into AI engineering and machine learning.
                </p>
                <p>
                  The "Lone Wolf" moniker represents my independent work style and determination to master new 
                  technologies through self-directed learning and hands-on projects.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-wolf-card border-wolf-card">
              <CardHeader>
                <CardTitle className="text-2xl text-wolf-accent">Experience</CardTitle>
              </CardHeader>
              <CardContent className="text-wolf-text space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-wolf-accent mb-2">Backend Development</h3>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <Badge className="bg-wolf-accent/10 text-wolf-accent border-wolf-accent/20">Java</Badge>
                    <Badge className="bg-wolf-accent/10 text-wolf-accent border-wolf-accent/20">Spring Boot</Badge>
                    <Badge className="bg-wolf-accent/10 text-wolf-accent border-wolf-accent/20">REST APIs</Badge>
                    <Badge className="bg-wolf-accent/10 text-wolf-accent border-wolf-accent/20">SQL</Badge>
                  </div>
                </div>

                <Separator className="bg-wolf-accent/20" />

                <div>
                  <h3 className="text-xl font-semibold text-wolf-accent mb-2">Frontend Development</h3>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <Badge className="bg-wolf-accent/10 text-wolf-accent border-wolf-accent/20">React</Badge>
                    <Badge className="bg-wolf-accent/10 text-wolf-accent border-wolf-accent/20">Next.js</Badge>
                    <Badge className="bg-wolf-accent/10 text-wolf-accent border-wolf-accent/20">TypeScript</Badge>
                    <Badge className="bg-wolf-accent/10 text-wolf-accent border-wolf-accent/20">Tailwind CSS</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-20 px-8 flex items-center">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-4xl font-bold text-wolf-accent mb-4 text-center">Get In Touch</h2>
          <p className="text-xl text-wolf-text mb-12 text-center">
            Let's collaborate on your next project or just have a chat about technology.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-wolf-card border-wolf-card">
              <CardHeader>
                <CardTitle className="text-2xl text-wolf-accent">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-wolf-text mb-2">Name</label>
                    <Input
                      id="name"
                      type="text"
                      className="bg-wolf-bg border-wolf-accent/30 text-wolf-text"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-wolf-text mb-2">Email</label>
                    <Input
                      id="email"
                      type="email"
                      className="bg-wolf-bg border-wolf-accent/30 text-wolf-text"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-wolf-text mb-2">Message</label>
                    <Textarea
                      id="message"
                      className="bg-wolf-bg border-wolf-accent/30 text-wolf-text min-h-[120px]"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <Button className="w-full bg-wolf-accent text-black hover:bg-wolf-hover">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="bg-wolf-card border-wolf-card">
                <CardHeader>
                  <CardTitle className="text-2xl text-wolf-accent">Connect With Me</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-wolf-text mb-2">Email</h3>
                    <a href="mailto:your.email@example.com" className="text-wolf-accent hover:text-wolf-hover">
                      your.email@example.com
                    </a>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-wolf-text mb-2">Social Media</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-wolf-accent/10 text-wolf-accent border-wolf-accent/20">GitHub</Badge>
                      <Badge className="bg-wolf-accent/10 text-wolf-accent border-wolf-accent/20">LinkedIn</Badge>
                      <Badge className="bg-wolf-accent/10 text-wolf-accent border-wolf-accent/20">Twitter</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
