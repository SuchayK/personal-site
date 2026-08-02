import { projects } from "@/data/content";
import { TagRow } from "./Tag";

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className="h-3 w-3 shrink-0 translate-y-px text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 11.5 11.5 4.5M6 4.5h5.5V10" />
    </svg>
  );
}

export function ProjectList() {
  return (
    <ul className="space-y-3">
      {projects.map((project) => (
        <li key={project.name}>
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group -mx-4 block rounded-lg px-4 py-4 transition-colors hover:bg-surface"
          >
            <h3 className="flex items-center gap-1.5 font-medium transition-colors group-hover:text-accent">
              {project.name}
              <ArrowIcon />
            </h3>

            {project.context && (
              <p className="mt-1 font-mono text-[11px] text-muted">
                {project.context}
              </p>
            )}

            <p className="mt-1.5 max-w-xl leading-relaxed text-muted">
              {project.blurb}
            </p>

            {/* Team projects state the contribution explicitly — the repo's
                commit history doesn't always carry it. */}
            {project.role && (
              <p className="mt-2 max-w-xl border-l-2 border-rule pl-3 text-sm leading-relaxed text-muted">
                {project.role}
              </p>
            )}

            <TagRow tags={project.tags} />
          </a>
        </li>
      ))}
    </ul>
  );
}
