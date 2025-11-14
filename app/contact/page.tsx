"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log("Form submitted:", formData);
    alert("Thank you for your message! (Form submission not yet implemented)");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen py-20 px-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-wolf-accent mb-4">Get In Touch</h1>
          <p className="text-xl text-wolf-text">
            Let's collaborate on your next project or just have a chat about technology.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="bg-wolf-card border-wolf-card">
            <CardHeader>
              <CardTitle className="text-2xl text-wolf-accent">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-wolf-text mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-wolf-bg border-wolf-accent/30 text-wolf-text focus:border-wolf-accent"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-wolf-text mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-wolf-bg border-wolf-accent/30 text-wolf-text focus:border-wolf-accent"
                    placeholder="stan581994@gmail.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-wolf-text mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-wolf-bg border-wolf-accent/30 text-wolf-text focus:border-wolf-accent min-h-[150px]"
                    placeholder="Tell me about your project or idea..."
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-wolf-accent text-black hover:bg-wolf-hover"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="bg-wolf-card border-wolf-card">
              <CardHeader>
                <CardTitle className="text-2xl text-wolf-accent">Connect With Me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-wolf-text mb-2">Email</h3>
                  <a 
                    href="mailto:your.email@example.com" 
                    className="text-wolf-accent hover:text-wolf-hover transition-colors"
                  >
                    your.email@example.com
                  </a>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-wolf-text mb-2">Social Media</h3>
                  <div className="flex flex-wrap gap-2">
                    <a href="https://github.com/stan581994" target="_blank" rel="noopener noreferrer">
                      <Badge className="bg-wolf-accent/10 text-wolf-accent border-wolf-accent/20 hover:bg-wolf-accent/20 cursor-pointer">
                        GitHub
                      </Badge>
                    </a>
                    <a href="https://www.linkedin.com/in/steven-tan-219212160/  " target="_blank" rel="noopener noreferrer">
                      <Badge className="bg-wolf-accent/10 text-wolf-accent border-wolf-accent/20 hover:bg-wolf-accent/20 cursor-pointer">
                        LinkedIn
                      </Badge>
                    </a>
                    <a href="https://dev.to/lone_lykos8" target="_blank" rel="noopener noreferrer">
                      <Badge className="bg-wolf-accent/10 text-wolf-accent border-wolf-accent/20 hover:bg-wolf-accent/20 cursor-pointer">
                        Dev Community
                      </Badge>
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-wolf-text mb-2">Location</h3>
                  <p className="text-wolf-text/80">Available for remote work worldwide</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-wolf-card border-wolf-card">
              <CardHeader>
                <CardTitle className="text-2xl text-wolf-accent">What I'm Looking For</CardTitle>
              </CardHeader>
              <CardContent className="text-wolf-text">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-wolf-accent mr-2">▸</span>
                    <span>Freelance development projects</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-wolf-accent mr-2">▸</span>
                    <span>AI/ML collaboration opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-wolf-accent mr-2">▸</span>
                    <span>Open source contributions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-wolf-accent mr-2">▸</span>
                    <span>Technical discussions and mentorship</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
