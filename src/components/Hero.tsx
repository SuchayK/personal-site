import { site } from "@/data/content";

export function Hero() {
  return (
    <div id="top" className="pt-16 pb-14 sm:pt-24 sm:pb-20">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
        {site.location}
      </p>

      <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
        {site.name}
      </h1>

      <p className="mt-4 text-lg text-muted sm:text-xl">{site.tagline}</p>

      <p className="mt-8 max-w-xl text-balance leading-relaxed">
        I build systems that have to work without me watching — computer vision
        models for medical imaging, and robots that navigate on their own.
      </p>

      <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
        <a
          href={`mailto:${site.email}`}
          className="text-sm underline decoration-rule underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
        >
          {site.email}
        </a>
        <a
          href={site.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted underline decoration-rule underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
        >
          GitHub
        </a>
        <a
          href={site.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted underline decoration-rule underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}
