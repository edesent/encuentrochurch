import { SITE, mapsUrl, mapEmbedUrl } from "@/config/site";
import Reveal from "./Reveal";

function Pin() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}
function Clock() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export default function Visit() {
  return (
    <section id="visitanos" className="bg-cream-dark py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <p className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-green-dark">
            <span className="brand-rule" />
            Planea tu visita
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-navy">
            Te esperamos este domingo
          </h2>
          <p className="mt-4 text-body">
            Ven tal como eres. Tendremos un lugar para ti y para tu familia — en
            español y en inglés.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Info column */}
          <div className="grid gap-5 sm:grid-cols-2">
            <Reveal className="sm:col-span-2">
              <div className="flex items-start gap-4 rounded-2xl bg-navy p-6 text-white shadow-sm">
                <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green text-white">
                  <Clock />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-light">Servicio dominical</p>
                  <p className="mt-1 font-display text-2xl font-bold">{SITE.service.day} · {SITE.service.time}</p>
                  <p className="mt-1 text-sm text-white/70">Clase de Disipulado 5:00 P.M.</p>
                  <p className="mt-1 text-sm text-white/70">Clase para padres a las {SITE.service.parentClass}</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="h-full rounded-2xl border border-navy/10 bg-white p-6 shadow-sm">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cream-dark text-green-dark">
                  <Pin />
                </span>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-green-dark">{SITE.serviceLocation.label}</p>
                <p className="mt-1 font-semibold text-navy">{SITE.serviceLocation.venue}</p>
                <p className="text-sm text-body">{SITE.serviceLocation.street}</p>
                <p className="text-sm text-body">{SITE.serviceLocation.city}</p>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="h-full rounded-2xl border border-navy/10 bg-white p-6 shadow-sm">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cream-dark text-green-dark">
                  <Pin />
                </span>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-green-dark">{SITE.office.label}</p>
                <p className="mt-1 font-semibold text-navy">{SITE.office.street}</p>
                <p className="text-sm text-body">{SITE.office.city}</p>
              </div>
            </Reveal>

            <Reveal delay={240} className="sm:col-span-2">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-green px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-green-dark"
              >
                <Pin /> Cómo llegar
              </a>
            </Reveal>
          </div>

          {/* Map */}
          <Reveal delay={120}>
            <div className="h-full min-h-[340px] overflow-hidden rounded-2xl border border-navy/10 shadow-sm">
              <iframe
                title="Mapa de Encuentro Church"
                src={mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[340px] w-full"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
