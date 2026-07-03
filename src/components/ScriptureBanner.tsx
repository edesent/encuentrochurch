import Image from "next/image";
import { SITE } from "@/config/site";
import Reveal from "./Reveal";

export default function ScriptureBanner() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-24 sm:py-32">
      <Image
        src="/images/congregation.jpg"
        alt="Congregación de Encuentro Church en adoración"
        fill
        sizes="100vw"
        className="object-cover object-center opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-950/70 to-navy-950/90" />

      <Reveal className="relative mx-auto max-w-3xl px-6 text-center">
        <p className="mb-6 text-6xl font-script leading-none text-green-light/80" aria-hidden>
          &ldquo;
        </p>
        <blockquote className="font-display text-2xl sm:text-3xl lg:text-[2.4rem] font-semibold leading-snug tracking-tight text-white">
          {SITE.scripture.text}
        </blockquote>
        <cite className="mt-8 block text-sm font-semibold uppercase not-italic tracking-[0.28em] text-green-light">
          {SITE.scripture.ref}
        </cite>
      </Reveal>
    </section>
  );
}
