"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/content";

const NAV = [
  { href: "#about", label: "About" },
  { href: "#research", label: "Research" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  // The header is transparent over the hero and grows a rule once you scroll
  // past it, so it never floats as a detached bar over the name.
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-sm transition-colors ${
        scrolled
          ? "border-b border-rule bg-background/85"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-6 py-4">
        <a
          href="#top"
          className="font-mono text-sm text-foreground transition-colors hover:text-accent"
        >
          {site.name.split(" ")[0].toLowerCase()}
          <span className="text-accent">.</span>
        </a>

        <nav aria-label="Primary">
          <ul className="flex items-center gap-5 sm:gap-7">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
