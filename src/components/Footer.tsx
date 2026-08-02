import Link from "next/link";
import { SITE, mapsUrl } from "@/config/site";
import BrandMark from "./BrandMark";
import PrivacyPolicyLink from "./PrivacyPolicyLink";

const footerNav = [
  { href: "/#historia", label: "Nuestra historia" },
  { href: "/#visitanos", label: "Visítanos" },
  { href: "/connect", label: "Visitante o membresía" },
  { href: "/#recursos", label: "Recursos" },
  { href: "/contact-us", label: "Contacto" },
  { href: "/home/espanol", label: "Español" },
];

const external = [
  { href: SITE.links.donate, label: "Donar" },
  { href: SITE.links.spiritualGifts, label: "Test de Dones" },
  { href: SITE.links.parentingClass, label: "Clase para Padres" },
  { href: SITE.links.prospectus, label: "Prospecto" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 pt-16 text-white/70">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 pb-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <BrandMark className="h-10 w-10" />
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg font-extrabold tracking-[0.14em] text-white">ENCUENTRO</span>
                <span className="mt-0.5 font-display text-[10px] font-semibold tracking-[0.42em] text-green-light">CHURCH</span>
              </span>
            </div>
            <p className="mt-4 font-script text-2xl text-green-light/90">{SITE.script}</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/55">
              {SITE.tagline}
            </p>
          </div>

          {/* Explore */}
          <nav aria-label="Navegación del pie">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-white/40">Explora</h3>
            <ul className="space-y-2.5 text-sm">
              {footerNav.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition hover:text-green-light">{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Resources */}
          <nav aria-label="Recursos externos">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-white/40">Recursos</h3>
            <ul className="space-y-2.5 text-sm">
              {external.map((l) => (
                <li key={l.label}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer" className="transition hover:text-green-light">{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-white/40">Visítanos</h3>
            <ul className="space-y-2.5 text-sm">
              <li className="font-semibold text-white">{SITE.service.day} · {SITE.service.time}</li>
              <li>
                <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="transition hover:text-green-light">
                  {SITE.serviceLocation.street}<br />{SITE.serviceLocation.city}
                </a>
              </li>
              <li><a href={`tel:${SITE.phoneTel}`} className="transition hover:text-green-light">{SITE.phone}</a></li>
              <li><a href={`mailto:${SITE.email}`} className="break-all transition hover:text-green-light">{SITE.email}</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-xs text-white/40 sm:flex-row">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:justify-start">
            <p>© {new Date().getFullYear()} {SITE.name}. Todos los derechos reservados.</p>
            <PrivacyPolicyLink />
          </div>
          <p>
            Hecho con fe por{" "}
            <a href="https://www.elijahdesent.com" target="_blank" rel="noopener noreferrer" className="transition hover:text-green-light">
              elijahdesent.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
