import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/config/site";
import HeroHeadline from "./HeroHeadline";

export default function Hero() {
  return (
    <header
      id="inicio"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-navy-950"
    >
      {/* Cinematic background — kept subtle so the welcome is the focus */}
      <Image
        src="/images/hero-prayer.jpg"
        alt="Adoración en Encuentro Church"
        fill
        preload
        sizes="100vw"
        className="object-cover object-center opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-deep/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/50" />
      <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-green/20 blur-[130px]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 px-6 pt-32 pb-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:pb-28">
        {/* Left — message */}
        <div>
          <p className="animate-fade-up delay-100 mb-5 flex items-center gap-3 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.28em] text-green-light">
            <span className="brand-rule" />
            Iglesia Hispana Bilingüe · Houston, TX
          </p>

          <h1 className="animate-fade-up delay-200 font-display text-4xl sm:text-6xl lg:text-[4.2rem] font-extrabold leading-[1.03] tracking-tight text-white">
            Un lugar para encontrar a{" "}
            <span className="text-green-light">Dios</span> y comunidad
          </h1>

          <p className="animate-fade-up delay-300 mt-3 font-script text-3xl sm:text-4xl text-green-light/90">
            {SITE.script}
          </p>

          <p className="animate-fade-up delay-500 mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-white/80">
            Ven tal como eres. En Encuentro no encontrarás extraños, sino una
            familia de fe donde perteneces — en español y en inglés.
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
              href="/connect"
              className="inline-flex items-center justify-center rounded-full bg-green px-8 py-4 text-sm font-semibold tracking-wide text-white shadow-lg shadow-green/25 transition-all hover:-translate-y-0.5 hover:bg-green-dark"
            >
              Visitante o membresía
            </Link>
            <Link
              href="/#visitanos"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/40 px-8 py-4 text-sm font-semibold tracking-wide text-white transition-all hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
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

        {/* Right — welcome from the pastors */}
        <div className="animate-fade-up delay-500">
          <div className="relative mx-auto max-w-md">
            <span className="absolute -left-3 -top-3 z-20 rounded-full bg-green px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white shadow-lg">
              ¡Bienvenido!
            </span>
            <div className="overflow-hidden rounded-3xl border border-white/15 bg-white/[0.04] shadow-2xl shadow-navy-950/60 backdrop-blur-sm">
              <div className="relative aspect-[5/4]">
                <Image
                  src="/images/pastor-rick-maribel.jpg"
                  alt="Pastor Rick y Maribel Vasquez"
                  fill
                  sizes="(max-width: 1024px) 90vw, 440px"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="font-script text-2xl text-green-light">Te esperamos con los brazos abiertos</p>
                  <p className="mt-1 font-display text-lg font-bold text-white">Pastor Rick y Maribel</p>
                  <p className="text-sm text-white/70">Pastores · Encuentro Church</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2">
        <Link href="/#pilares" aria-label="Desliza hacia abajo" className="flex flex-col items-center gap-2 text-white/45">
          <span className="text-[10px] uppercase tracking-[0.3em]">Desliza</span>
          <span className="h-4 w-4 rotate-45 border-b-2 border-r-2 border-white/40 animate-scroll" />
        </Link>
      </div>
    </header>
  );
}
