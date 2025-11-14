"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-wolf-card/95 backdrop-blur-sm border-b border-wolf-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {isHomePage ? (
            <button
              onClick={() => scrollToSection("home")}
              className="text-wolf-accent font-bold text-xl hover:text-wolf-hover transition-colors"
            >
              Steven Wolf
            </button>
          ) : (
            <Link
              href="/"
              className="text-wolf-accent font-bold text-xl hover:text-wolf-hover transition-colors"
            >
              Steven Wolf
            </Link>
          )}

          <ul className="flex gap-6">
            {isHomePage ? (
              <>
                <li>
                  <button
                    onClick={() => scrollToSection("home")}
                    className="text-wolf-text hover:text-wolf-accent transition-colors"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("skills")}
                    className="text-wolf-text hover:text-wolf-accent transition-colors"
                  >
                    Skills
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("projects")}
                    className="text-wolf-text hover:text-wolf-accent transition-colors"
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="text-wolf-text hover:text-wolf-accent transition-colors"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-wolf-text hover:text-wolf-accent transition-colors"
                  >
                    Contact
                  </button>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-wolf-text hover:text-wolf-accent transition-colors"
                  >
                    Blog
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    href="/"
                    className="text-wolf-text hover:text-wolf-accent transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className={`text-wolf-text hover:text-wolf-accent transition-colors ${
                      pathname.startsWith("/blog") ? "text-wolf-accent font-semibold" : ""
                    }`}
                  >
                    Blog
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
