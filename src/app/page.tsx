import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { ResearchList } from "@/components/ResearchList";
import { ProjectList } from "@/components/ProjectList";
import { ExperienceList } from "@/components/ExperienceList";
import { awards, intro, site } from "@/data/content";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-4 focus:z-50 focus:rounded focus:bg-surface focus:px-3 focus:py-2 focus:text-sm"
      >
        Skip to content
      </a>

      <Header />

      <main id="main" className="mx-auto w-full max-w-3xl flex-1 px-6">
        <Hero />

        <Section id="about" label="About">
          <div className="max-w-xl space-y-4 leading-relaxed">
            {intro.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </Section>

        <Section id="research" label="Research">
          <ResearchList />
        </Section>

        <Section id="experience" label="Experience">
          <ExperienceList />
        </Section>

        <Section id="projects" label="Projects">
          <ProjectList />
        </Section>

        <Section id="awards" label="Awards">
          <ul className="space-y-2.5">
            {awards.map((award) => (
              <li
                key={award.name}
                className="flex flex-wrap items-baseline gap-x-3"
              >
                <span className="font-medium">{award.name}</span>
                <span className="font-mono text-xs text-muted">
                  {award.detail}
                </span>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="contact" label="Contact">
          <p className="max-w-xl leading-relaxed">
            Some of my work is proprietary and lives in private repos — happy to
            talk about it. The fastest way to reach me is email.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href={`mailto:${site.email}`}
              className="underline decoration-rule underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
            >
              {site.email}
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted underline decoration-rule underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
            >
              GitHub
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted underline decoration-rule underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
            >
              LinkedIn
            </a>
          </div>
        </Section>
      </main>

      <footer className="mx-auto w-full max-w-3xl px-6 pb-12">
        <p className="border-t border-rule pt-6 font-mono text-xs text-muted">
          Built with Next.js and Tailwind. Set in Inter and JetBrains Mono.
        </p>
      </footer>
    </>
  );
}
