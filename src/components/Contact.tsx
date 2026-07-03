"use client";

import { useState } from "react";
import { SITE } from "@/config/site";

const iconProps = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const PhoneIcon = () => (
  <svg {...iconProps}>
    <path d="M4 5c0-.6.4-1 1-1h2.3c.5 0 .9.3 1 .8l.8 3c.1.4 0 .8-.3 1L7.6 10.6a12 12 0 0 0 5.8 5.8l1.8-1.2c.3-.2.7-.3 1-.2l3 .8c.5.1.8.5.8 1V19c0 .6-.4 1-1 1A15 15 0 0 1 4 5Z" />
  </svg>
);
const MailIcon = () => (
  <svg {...iconProps}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3.5 6.5 8.5 6 8.5-6" />
  </svg>
);
const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.9c0 1.76.46 3.45 1.32 4.95L2 22l5.3-1.38a9.9 9.9 0 0 0 4.74 1.2h.01c5.46 0 9.9-4.45 9.9-9.9C21.95 6.45 17.5 2 12.04 2Zm5.8 14.16c-.24.68-1.4 1.3-1.94 1.35-.5.05-1.13.07-1.82-.11-.42-.14-.96-.31-1.65-.61-2.9-1.26-4.8-4.18-4.94-4.37-.15-.19-1.19-1.58-1.19-3.02 0-1.43.75-2.14 1.02-2.43.27-.29.58-.36.78-.36.19 0 .39 0 .56.01.18.01.42-.07.66.5.24.59.83 2.02.9 2.17.07.15.12.32.02.51-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.56.16.27.72 1.18 1.54 1.91 1.06.95 1.95 1.24 2.22 1.38.27.14.43.12.59-.07.16-.19.68-.79.86-1.06.18-.27.36-.22.61-.13.25.09 1.6.75 1.87.89.27.14.45.2.52.31.07.12.07.68-.17 1.35Z" />
  </svg>
);

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
            Escríbenos
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
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-green/20 text-green-light">
                <PhoneIcon />
              </span>
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
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-green/20 text-green-light">
                <WhatsAppIcon />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-widest text-white/50">WhatsApp</span>
                <span className="font-semibold">Escríbenos por WhatsApp</span>
              </span>
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="flex items-center gap-4 rounded-xl border border-white/12 bg-white/[0.05] px-5 py-4 transition hover:border-green-light hover:bg-white/[0.09]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-green/20 text-green-light">
                <MailIcon />
              </span>
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
