import { research } from "@/data/content";

/**
 * Research entries follow the academic convention — title, then venue and year
 * set apart in mono, then a one-line summary. Entries with a code link get the
 * title as the link; the rest stay plain rather than pointing nowhere.
 */
export function ResearchList() {
  return (
    <ol className="space-y-9">
      {research.map((item) => (
        <li key={item.title}>
          <h3 className="font-medium leading-snug">
            {item.href ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-rule underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
              >
                {item.title}
              </a>
            ) : (
              item.title
            )}
          </h3>

          <p className="mt-1.5 font-mono text-xs text-muted">
            <span className="text-accent">{item.venue}</span>
            <span aria-hidden="true"> · </span>
            {item.year}
          </p>

          <p className="mt-2.5 max-w-xl leading-relaxed text-muted">
            {item.summary}
          </p>
        </li>
      ))}
    </ol>
  );
}
