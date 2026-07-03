import { SITE } from "@/config/site";
import Reveal from "./Reveal";
import { PillarIcon } from "./BrandMark";

export default function Pillars() {
  return (
    <section id="pilares" className="relative bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-green-dark">
            <span className="brand-rule" />
            Por qué existimos
            <span className="brand-rule" />
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-navy">
            Tres encuentros que lo cambian todo
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-body">
            {SITE.mission}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {SITE.pillars.map((p, i) => (
            <Reveal key={p.key} delay={i * 120} as="article">
              <div className="group h-full rounded-2xl border border-navy/10 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-navy/10">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-navy text-green-light transition-colors group-hover:bg-green group-hover:text-white">
                  <PillarIcon name={p.icon} />
                </div>
                <h3 className="font-display text-xl font-bold text-navy">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-body">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Discipleship path */}
        <Reveal className="mt-16">
          <div className="rounded-2xl border border-navy/10 bg-white/60 px-6 py-8 sm:px-10">
            <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.28em] text-green-dark">
              Nuestra ruta de discipulado
            </p>
            <ol className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-start sm:gap-2">
              {SITE.ministryPath.map((s, i) => (
                <li key={s.step} className="flex flex-1 items-start gap-3 sm:flex-col sm:items-center sm:text-center">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy font-display text-sm font-bold text-green-light">
                    {i + 1}
                  </span>
                  <div className="sm:mt-3">
                    <p className="font-display font-bold text-navy">{s.step}</p>
                    <p className="mt-1 text-sm leading-snug text-body">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
