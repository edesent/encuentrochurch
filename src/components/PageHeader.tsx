export default function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <header className="relative overflow-hidden bg-navy-deep pb-14 pt-32 sm:pt-36">
      <div className="pointer-events-none absolute -right-20 -top-10 h-72 w-72 rounded-full bg-green/15 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6">
        <p className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-green-light">
          <span className="brand-rule" />
          {eyebrow}
        </p>
        <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
          {title}
        </h1>
        {subtitle && <p className="mt-4 max-w-xl text-white/70">{subtitle}</p>}
      </div>
    </header>
  );
}
