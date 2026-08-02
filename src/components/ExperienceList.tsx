import { experience } from "@/data/content";
import { TagRow } from "./Tag";

export function ExperienceList() {
  return (
    <ol className="space-y-9">
      {experience.map((job) => (
        <li key={`${job.org}-${job.role}`}>
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="font-medium">{job.role}</h3>
            <span className="font-mono text-xs text-muted">{job.period}</span>
          </div>

          <p className="mt-1 text-sm text-accent">{job.org}</p>

          <p className="mt-2.5 max-w-xl leading-relaxed text-muted">
            {job.detail}
          </p>

          <TagRow tags={job.tags} />
        </li>
      ))}
    </ol>
  );
}
