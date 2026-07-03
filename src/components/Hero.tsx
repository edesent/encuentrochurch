import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/config/site";

export default function Hero() {
  return (
    <header
      id="inicio"
      className="relative min-h-[100svh] flex items-center overflow-hidden bg-navy-950"
    >
      {/* Cinematic background */}
      <Image
        src="/images/hero-prayer.jpg"
        alt="Persona en oración ante la cruz"
        fill
        preload
        sizes="100vw"
        className="object-cover object-center opacity-70"
      />
      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-deep/80 to-navy-950/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/60" />
      <div className="absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-green/20 blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-32 pb-24">
        <div className="max-w-3xl">
          <p className="animate-fade-up delay-100 mb-5 flex items-center gap-3 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.28em] text-green-light">
            <span className="brand-rule" />
            Iglesia Hispana Bilingüe · Houston, TX
          </p>

          <h1 className="animate-fade-up delay-200 font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.03] tracking-tight text-white">
            Un lugar para encontrar a{" "}
            <span className="text-green-light">Dios</span> y comunidad
          </h1>

          <p className="animate-fade-up delay-300 mt-3 font-script text-3xl sm:text-4xl text-green-light/90">
            {SITE.script}
          </p>

          <p className="animate-fade-up delay-500 mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-white/80">
            {SITE.heroSub}
          </p>

          {/* Service chip */}
          <div className="animate-fade-up delay-500 mt-8 inline-flex flex-wrap items-center gap-x-3 gap-y-1 rounded-full border border-white/15 bg-white/[0.06] px-5 py-2.5 text-sm text-white/90 backdrop-blur-sm">
            <span className="font-semibold text-white">{SITE.service.day} · {SITE.service.time}</span>
            <span className="h-1 w-1 rounded-full bg-green-light" />
            <span className="text-white/70">{SITE.serviceLocation.street}, Houston</span>
          </div>

          {/* CTAs */}
          <div className="animate-fade-up delay-700 mt-9 flex flex-wrap gap-4">
            <Link
              href="/#visitanos"
              className="inline-flex items-center justify-center rounded-full bg-green px-8 py-4 text-sm font-semibold tracking-wide text-white shadow-lg shadow-green/25 transition-all hover:-translate-y-0.5 hover:bg-green-dark"
            >
              Visítanos este domingo
            </Link>
            <Link
              href="/#historia"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/40 px-8 py-4 text-sm font-semibold tracking-wide text-white transition-all hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
            >
              Conoce nuestra historia
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <Link href="/#pilares" aria-label="Desliza hacia abajo" className="flex flex-col items-center gap-2 text-white/45">
          <span className="text-[10px] uppercase tracking-[0.3em]">Desliza</span>
          <span className="h-4 w-4 rotate-45 border-b-2 border-r-2 border-white/40 animate-scroll" />
        </Link>
      </div>
    </header>
  );
}
