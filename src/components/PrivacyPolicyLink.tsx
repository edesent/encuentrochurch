"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import PrivacyPolicyContent from "./PrivacyPolicyContent";

export default function PrivacyPolicyLink() {
  const [open, setOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleEscape);
      triggerRef.current?.focus();
    };
  }, [open]);

  return (
    <>
      <Link
        ref={triggerRef}
        href="/privacy-policy"
        onClick={(event) => {
          event.preventDefault();
          setOpen(true);
        }}
        className="transition hover:text-green-light"
      >
        Política de Privacidad
      </Link>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-950/80 p-4 backdrop-blur-sm sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setOpen(false);
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="privacy-policy-title"
            className="flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-3xl bg-cream text-body shadow-2xl"
          >
            <div className="flex items-start justify-between gap-4 border-b border-navy/10 bg-white px-5 py-4 sm:px-7">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-green-dark">
                  Encuentro Church
                </p>
                <h2
                  id="privacy-policy-title"
                  className="mt-1 font-display text-2xl font-extrabold text-navy"
                >
                  Política de Privacidad
                </h2>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Cerrar política de privacidad"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy text-2xl leading-none text-white transition hover:bg-green-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green"
              >
                ×
              </button>
            </div>

            <div className="overflow-y-auto px-5 py-6 sm:px-8">
              <PrivacyPolicyContent />
            </div>

            <div className="flex flex-col gap-3 border-t border-navy/10 bg-white px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-7">
              <Link
                href="/privacy-policy"
                onClick={() => setOpen(false)}
                className="text-sm font-semibold text-navy underline decoration-green decoration-2 underline-offset-4"
              >
                Abrir como página completa
              </Link>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full bg-green px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-green-dark"
              >
                Cerrar
              </button>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
