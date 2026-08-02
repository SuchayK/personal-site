/**
 * Section wrapper.
 *
 * The label sits in a narrow left gutter on desktop and above the content on
 * mobile — a two-column pattern that gives every section a consistent
 * "here's what this is" anchor without needing a heavy heading rule.
 */
export function Section({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="border-t border-rule py-14 sm:py-20"
    >
      <div className="grid gap-8 md:grid-cols-[10rem_1fr] md:gap-12">
        <h2
          id={`${id}-heading`}
          className="font-mono text-xs uppercase tracking-[0.18em] text-muted md:pt-1"
        >
          {label}
        </h2>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}
