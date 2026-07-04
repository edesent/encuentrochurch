import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { SITE } from "@/config/site";

export const metadata: Metadata = {
  title: "En Español",
  description:
    "Bienvenido a Encuentro Church — una nueva iglesia hispana bilingüe en el suroeste de Houston. Conoce nuestra visión, misión y el prospecto de plantación de iglesia.",
  alternates: { canonical: "/home/espanol" },
};

export default function EspanolPage() {
  const [cover, ...rest] = SITE.prospectus_pages;

  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="En Español"
          title="Bienvenido a El Encuentro"
          subtitle="Una nueva iglesia hispana bilingüe en el suroeste de Houston. Ven a tener un encuentro con Dios y con la comunidad."
        />

        {/* Intro + mission */}
        <section className="bg-cream py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <Reveal>
              <p className="font-script text-4xl text-green-dark">{SITE.script}</p>
              <p className="mt-6 text-lg leading-relaxed text-body">{SITE.mission}</p>
              <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 rounded-full border border-navy/15 bg-white px-6 py-3 text-sm text-navy shadow-sm">
                <span className="font-semibold">{SITE.service.day} · {SITE.service.time}</span>
                <span className="h-1 w-1 rounded-full bg-green" />
                <span className="text-body">{SITE.serviceLocation.venue}</span>
              </div>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link href="/#visitanos" className="rounded-full bg-green px-8 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-green-dark">
                  Planea tu visita
                </Link>
                <a href={SITE.links.donate} target="_blank" rel="noopener noreferrer" className="rounded-full border-2 border-navy/25 px-8 py-3.5 text-sm font-semibold text-navy transition-all hover:-translate-y-0.5 hover:border-navy">
                  Donar
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Prospectus deck */}
        <section className="bg-cream-dark py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal className="mx-auto mb-12 max-w-2xl text-center">
              <p className="mb-3 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-green-dark">
                <span className="brand-rule" />
                Prospecto de Plantación de Iglesia
                <span className="brand-rule" />
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-navy">
                Nuestra visión, página por página
              </h2>
            </Reveal>

            {/* Cover — full width */}
            <Reveal>
              <a href={cover.src} target="_blank" rel="noopener noreferrer" className="group block overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-md transition-shadow hover:shadow-xl">
                <Image
                  src={cover.src}
                  alt={cover.title}
                  width={1426}
                  height={1103}
                  sizes="(max-width: 1152px) 100vw, 1100px"
                  className="w-full transition-transform duration-500 group-hover:scale-[1.01]"
                />
              </a>
            </Reveal>

            {/* Rest — 2-up grid */}
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {rest.map((p, i) => (
                <Reveal key={p.src} delay={i * 80} as="article">
                  <a href={p.src} target="_blank" rel="noopener noreferrer" className="group block overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm transition-shadow hover:shadow-xl">
                    <Image
                      src={p.src}
                      alt={p.title}
                      width={1426}
                      height={1103}
                      sizes="(max-width: 640px) 100vw, 540px"
                      className="w-full transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                    <p className="border-t border-navy/10 px-5 py-3 text-sm font-semibold text-navy">
                      {p.title}
                    </p>
                  </a>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-12 text-center">
              <a href={SITE.links.prospectus} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-navy px-8 py-4 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-navy-deep">
                Descargar el prospecto completo (PDF English)
                <span aria-hidden>↓</span>
              </a>
            </Reveal>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="bg-navy py-16 text-center text-white">
          <div className="mx-auto max-w-2xl px-6">
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight">
              ¿Listo para dar el siguiente paso?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-white/75">
              Escríbenos o llámanos al {SITE.phone}. Con gusto oramos por ti y te
              ayudamos a conectar con la familia de la iglesia.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact-us" className="rounded-full bg-green px-8 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-green-dark">
                Contáctanos
              </Link>
              <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="rounded-full border-2 border-white/40 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-white hover:bg-white/10">
                WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
