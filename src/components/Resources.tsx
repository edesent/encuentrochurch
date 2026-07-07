import { SITE } from "@/config/site";
import Reveal from "./Reveal";

const resources = [
  {
    title: "Test de Dones Espirituales",
    body: "Descubre cómo Dios te ha diseñado para servir. Haz la prueba en minutos.",
    cta: "Hacer la prueba",
    href: SITE.links.spiritualGifts,
    accent: true,
  },
  {
    title: "Clase para Padres",
    body: "Recursos y clases en español para fortalecer a tu familia y tu hogar.",
    cta: "Ver la clase",
    href: SITE.links.parentingClass,
  },
  {
    title: "Prospecto de Plantación",
    body: "Conoce la visión completa de esta nueva plantación de iglesia bilingüe.",
    cta: "Descargar el prospecto completo (PDF English)",
    href: "https://drive.google.com/file/d/1alskibHiGfFIQNoETgrnin2fop5V0a88/view?usp=drivesdk",
  },
  {
    title: "Apoya la Obra",
    body: "Tu ofrenda ayuda a alcanzar a más familias con el evangelio en Houston.",
    cta: "Donar",
    href: SITE.links.donate,
    accent: true,
  },
];

export default function Resources() {
  return (
    <section id="recursos" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <p className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-green-dark">
            <span className="brand-rule" />
            Recursos
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-navy">
            Da tu próximo paso
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {resources.map((r, i) => (
            <Reveal key={r.title} delay={i * 90} as="article">
              <a
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex h-full flex-col rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
                  r.accent
                    ? "border-transparent bg-navy text-white hover:shadow-navy/25"
                    : "border-navy/10 bg-white hover:shadow-navy/10"
                }`}
              >
                <h3 className={`font-display text-lg font-bold ${r.accent ? "text-white" : "text-navy"}`}>
                  {r.title}
                </h3>
                <p className={`mt-3 flex-1 text-sm leading-relaxed ${r.accent ? "text-white/75" : "text-body"}`}>
                  {r.body}
                </p>
                <span className={`mt-5 inline-flex items-center gap-1.5 text-sm font-semibold ${r.accent ? "text-green-light" : "text-green-dark"}`}>
                  {r.cta}
                  <span className="transition-transform group-hover:translate-x-1" aria-hidden>→</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
