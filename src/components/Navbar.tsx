"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { SITE } from "@/config/site";
import BrandMark from "./BrandMark";

const navLinks = [
  { href: "/#inicio", label: "Inicio" },
  { href: "/#historia", label: "Historia" },
  { href: "/#visitanos", label: "Visítanos" },
  { href: "/#recursos", label: "Recursos" },
  { href: "/contact-us", label: "Contacto" },
  { href: "/home/espanol", label: "Español" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isSubPage = pathname !== "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || isSubPage;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid
          ? "bg-navy-deep/95 py-3 shadow-lg shadow-navy-950/20 backdrop-blur-md"
          : "py-5 bg-gradient-to-b from-navy-950/60 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 flex items-center justify-between gap-4">
        {/* Brand lockup */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="Encuentro Church — Inicio">
          <BrandMark className="w-9 h-9 shrink-0 drop-shadow-sm" />
          <span className="flex flex-col leading-none">
            <span className="font-display font-extrabold tracking-[0.14em] text-white text-lg sm:text-xl">
              ENCUENTRO
            </span>
            <span className="font-display font-semibold tracking-[0.42em] text-green-light text-[10px] sm:text-[11px] mt-0.5">
              CHURCH
            </span>
          </span>
        </Link>

        {/* Desktop menu */}
        <ul className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-white/85 text-[13px] font-medium tracking-wide px-3 py-2 rounded-md hover:text-white hover:bg-white/10 transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="ml-2">
            <a
              href={SITE.links.donate}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green text-white text-[13px] font-semibold tracking-wide px-6 py-2.5 rounded-full hover:bg-green-dark hover:-translate-y-0.5 transition-all shadow-sm"
            >
              Donar
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2 -mr-2"
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
        >
          <span className={`w-6 h-0.5 bg-white rounded transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-0.5 bg-white rounded transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 bg-white rounded transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed lg:hidden top-0 right-0 w-72 max-w-[82vw] h-screen bg-navy-deep pt-24 px-7 shadow-2xl transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-white/85 text-base font-medium px-4 py-3 rounded-lg hover:text-white hover:bg-white/10 transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="mt-4">
            <a
              href={SITE.links.donate}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-green text-white font-semibold px-6 py-3 rounded-full hover:bg-green-dark transition-all"
            >
              Donar
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile backdrop */}
      {menuOpen && (
        <button
          aria-label="Cerrar menú"
          onClick={() => setMenuOpen(false)}
          className="fixed lg:hidden inset-0 -z-10 bg-navy-950/50 backdrop-blur-sm"
        />
      )}
    </nav>
  );
}
