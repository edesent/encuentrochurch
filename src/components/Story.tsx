import Image from "next/image";
import { SITE } from "@/config/site";
import Reveal from "./Reveal";

export default function Story() {
  return (
    <section id="historia" className="relative overflow-hidden bg-navy py-20 sm:py-28 text-white">
      {/* faint brand watermark */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-green/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        {/* Photo */}
        <Reveal className="order-2 lg:order-1">
          <div className="relative mx-auto max-w-md">
            <div className="absolute -bottom-4 -left-4 h-28 w-28 rounded-tr-3xl border-b-4 border-l-4 border-green/60" />
            <div className="absolute -right-4 -top-4 h-28 w-28 rounded-bl-3xl border-r-4 border-t-4 border-green/60" />
            <Image
              src="/images/pastor-rick-maribel.jpg"
              alt="Pastor Rick y Maribel Vasquez"
              width={960}
              height={859}
              sizes="(max-width: 1024px) 90vw, 460px"
              className="relative rounded-2xl object-cover shadow-2xl shadow-navy-950/50"
            />
            <p className="mt-4 text-center text-sm text-white/60">{SITE.pastors}</p>
          </div>
        </Reveal>

        {/* Text */}
        <Reveal delay={120} className="order-1 lg:order-2">
          <p className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-green-light">
            <span className="brand-rule" />
            Nuestra historia
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight">
            Un nuevo comienzo, un mismo llamado
          </h2>
          <div className="mt-6 space-y-4 leading-relaxed text-white/80">
            {SITE.story.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <p className="mt-6 border-l-2 border-green/60 pl-4 text-sm leading-relaxed text-white/65">
            {SITE.rickBio}
          </p>
          <a
            href={SITE.links.inviteFlyer}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-green px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-green-dark"
          >
            Descargar flyer de invitación
            <span aria-hidden>↓</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
