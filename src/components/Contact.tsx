"use client";

import { useState } from "react";
import { SITE } from "@/config/site";

function Field({
  label,
  name,
  type = "text",
  required = false,
  textarea = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
}) {
  const base =
    "w-full rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3 text-white placeholder-white/40 outline-none transition focus:border-green-light focus:bg-white/[0.09] focus:ring-2 focus:ring-green/30";
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-white/80">
        {label}
        {required && <span className="text-green-light"> *</span>}
      </span>
      {textarea ? (
        <textarea name={name} required={required} rows={4} className={base} />
      ) : (
        <input name={name} type={type} required={required} className={base} />
      )}
    </label>
  );
}

export default function Contact({ id = "contacto" }: { id?: string }) {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") || "");
    const tel = String(f.get("tel") || "");
    const email = String(f.get("email") || "");
    const message = String(f.get("message") || "");
    const subject = `Mensaje del sitio web — ${name || "Encuentro Church"}`;
    const body = `Nombre: ${name}\nTeléfono: ${tel}\nEmail: ${email}\n\n${message}`;
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section id={id} className="relative overflow-hidden bg-navy-deep py-20 sm:py-28 text-white">
      <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-green/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        {/* Left: invitation + direct contact */}
        <div>
          <p className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-green-light">
            <span className="brand-rule" />
            Conéctate
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight">
            Nos encantaría conocerte
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-white/75">
            ¿Tienes una pregunta o quieres que oremos por ti? Escríbenos — el
            pastor Rick te responderá personalmente.
          </p>

          <div className="mt-8 space-y-3">
            <a
              href={`tel:${SITE.phoneTel}`}
              className="flex items-center gap-4 rounded-xl border border-white/12 bg-white/[0.05] px-5 py-4 transition hover:border-green-light hover:bg-white/[0.09]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-green/20 text-green-light">✆</span>
              <span>
                <span className="block text-xs uppercase tracking-widest text-white/50">Llámanos</span>
                <span className="font-semibold">{SITE.phone}</span>
              </span>
            </a>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl border border-white/12 bg-white/[0.05] px-5 py-4 transition hover:border-green-light hover:bg-white/[0.09]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-green/20 text-green-light">✻</span>
              <span>
                <span className="block text-xs uppercase tracking-widest text-white/50">WhatsApp</span>
                <span className="font-semibold">Escríbenos por WhatsApp</span>
              </span>
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="flex items-center gap-4 rounded-xl border border-white/12 bg-white/[0.05] px-5 py-4 transition hover:border-green-light hover:bg-white/[0.09]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-green/20 text-green-light">✉</span>
              <span>
                <span className="block text-xs uppercase tracking-widest text-white/50">Correo</span>
                <span className="font-semibold break-all">{SITE.email}</span>
              </span>
            </a>
          </div>
        </div>

        {/* Right: form */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 sm:p-8">
          {sent ? (
            <div className="flex h-full flex-col items-center justify-center py-10 text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green text-2xl text-white">✓</div>
              <h3 className="font-display text-xl font-bold text-white">¡Gracias!</h3>
              <p className="mt-2 max-w-xs text-sm text-white/70">
                Se abrió tu aplicación de correo para enviar el mensaje. Si no se
                abrió, escríbenos a{" "}
                <a href={`mailto:${SITE.email}`} className="text-green-light underline">
                  {SITE.email}
                </a>
                .
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <Field label="Nombre" name="name" required />
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Teléfono" name="tel" type="tel" />
                <Field label="Email" name="email" type="email" />
              </div>
              <Field label="Mensaje" name="message" textarea required />
              <button
                type="submit"
                className="w-full rounded-full bg-green px-8 py-4 text-sm font-semibold tracking-wide text-white transition-all hover:-translate-y-0.5 hover:bg-green-light hover:text-navy"
              >
                Enviar mensaje
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
