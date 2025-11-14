import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function AboutPage() {
  return (
    <main className="min-h-screen py-20 px-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="text-5xl font-bold text-wolf-accent mb-4">About Me</h1>
          <p className="text-xl text-wolf-text">
            Java Developer transitioning into AI Engineering
          </p>
        </header>

        <div className="space-y-8">
          {/* Introduction */}
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
                My approach to development is methodical and detail-oriented, always striving to write clean, 
                maintainable code that solves real-world problems. I believe in continuous learning and staying 
                updated with the latest technologies.
              </p>
              <p>
                The "Lone Wolf" moniker represents my independent work style and determination to master new 
                technologies through self-directed learning and hands-on projects.
              </p>
            </CardContent>
          </Card>

          {/* Experience */}
          <Card className="bg-wolf-card border-wolf-card">
            <CardHeader>
              <CardTitle className="text-2xl text-wolf-accent">Experience</CardTitle>
            </CardHeader>
            <CardContent className="text-wolf-text space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-wolf-accent mb-2">Backend Development</h3>
                <p className="text-wolf-text/80 mb-3">Building robust server-side applications</p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-wolf-accent/10 text-wolf-accent border-wolf-accent/20">Java</Badge>
                  <Badge className="bg-wolf-accent/10 text-wolf-accent border-wolf-accent/20">Spring Boot</Badge>
                  <Badge className="bg-wolf-accent/10 text-wolf-accent border-wolf-accent/20">REST APIs</Badge>
                  <Badge className="bg-wolf-accent/10 text-wolf-accent border-wolf-accent/20">SQL</Badge>
                  <Badge className="bg-wolf-accent/10 text-wolf-accent border-wolf-accent/20">Microservices</Badge>
                </div>
              </div>

              <Separator className="bg-wolf-accent/20" />

              <div>
                <h3 className="text-xl font-semibold text-wolf-accent mb-2">Frontend Development</h3>
                <p className="text-wolf-text/80 mb-3">Creating modern, responsive user interfaces</p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-wolf-accent/10 text-wolf-accent border-wolf-accent/20">React</Badge>
                  <Badge className="bg-wolf-accent/10 text-wolf-accent border-wolf-accent/20">Next.js</Badge>
                  <Badge className="bg-wolf-accent/10 text-wolf-accent border-wolf-accent/20">TypeScript</Badge>
                  <Badge className="bg-wolf-accent/10 text-wolf-accent border-wolf-accent/20">Tailwind CSS</Badge>
                  <Badge className="bg-wolf-accent/10 text-wolf-accent border-wolf-accent/20">shadcn/ui</Badge>
                </div>
              </div>

              <Separator className="bg-wolf-accent/20" />

              <div>
                <h3 className="text-xl font-semibold text-wolf-accent mb-2">AI & Machine Learning (Learning)</h3>
                <p className="text-wolf-text/80 mb-3">Exploring the future of intelligent systems</p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-wolf-hover/10 text-wolf-hover border-wolf-hover/20">Python</Badge>
                  <Badge className="bg-wolf-hover/10 text-wolf-hover border-wolf-hover/20">LLMs</Badge>
                  <Badge className="bg-wolf-hover/10 text-wolf-hover border-wolf-hover/20">AI Engineering</Badge>
                  <Badge className="bg-wolf-hover/10 text-wolf-hover border-wolf-hover/20">Machine Learning</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Interests */}
          <Card className="bg-wolf-card border-wolf-card">
            <CardHeader>
              <CardTitle className="text-2xl text-wolf-accent">Interests & Goals</CardTitle>
            </CardHeader>
            <CardContent className="text-wolf-text">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-wolf-accent mr-2">▸</span>
                  <span>Building AI-powered applications that solve real-world problems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-wolf-accent mr-2">▸</span>
                  <span>Exploring the intersection of traditional software engineering and AI</span>
                </li>
                <li className="flex items-start">
                  <span className="text-wolf-accent mr-2">▸</span>
                  <span>Contributing to open-source projects</span>
                </li>
                <li className="flex items-start">
                  <span className="text-wolf-accent mr-2">▸</span>
                  <span>Sharing knowledge through technical writing and blogging</span>
                </li>
                <li className="flex items-start">
                  <span className="text-wolf-accent mr-2">▸</span>
                  <span>Continuous learning and staying updated with emerging technologies</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
