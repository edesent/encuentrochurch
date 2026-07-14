"use client";

import { useEffect, useRef, useState } from "react";

type Language = "en" | "es";

type GoogleTranslateElement = new (
  options: {
    pageLanguage: string;
    includedLanguages: string;
    autoDisplay: boolean;
  },
  elementId: string,
) => unknown;

declare global {
  interface Window {
    google?: {
      translate?: {
        TranslateElement?: GoogleTranslateElement;
      };
    };
    googleTranslateElementInit?: () => void;
  }
}

const languages: Array<{
  code: Language;
  label: string;
  detail: string;
  flag: string;
}> = [
  { code: "en", label: "English", detail: "American English", flag: "🇺🇸" },
  { code: "es", label: "Español", detail: "México", flag: "🇲🇽" },
];

function getSavedLanguage(): Language {
  if (typeof window === "undefined") return "es";

  const saved = window.localStorage.getItem("encuentro-language");
  if (saved === "en" || saved === "es") return saved;

  const cookie = document.cookie
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith("googtrans="));

  return cookie?.endsWith("/en") ? "en" : "es";
}

function initializeGoogleTranslate() {
  let container = document.getElementById("google_translate_element");

  if (!container) {
    container = document.createElement("div");
    container.id = "google_translate_element";
    container.setAttribute("aria-hidden", "true");
    container.style.display = "none";
    document.body.appendChild(container);
  }

  const TranslateElement = window.google?.translate?.TranslateElement;
  if (TranslateElement && !container.hasChildNodes()) {
    new TranslateElement(
      {
        pageLanguage: "es",
        includedLanguages: "en,es",
        autoDisplay: false,
      },
      "google_translate_element",
    );
  }
}

export default function LanguageSwitcher({ mobile = false }: { mobile?: boolean }) {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState<Language>("es");
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setLanguage(getSavedLanguage());

    window.googleTranslateElementInit = initializeGoogleTranslate;

    const existingScript = document.getElementById("google-translate-script");
    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    } else {
      initializeGoogleTranslate();
    }
  }, []);

  useEffect(() => {
    const closeOnOutsideClick = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("mousedown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  const chooseLanguage = (nextLanguage: Language) => {
    const translationCookie = nextLanguage === "en" ? "/es/en" : "/es/es";

    document.cookie = `googtrans=${translationCookie};path=/;max-age=31536000;SameSite=Lax`;
    window.localStorage.setItem("encuentro-language", nextLanguage);
    document.documentElement.lang = nextLanguage === "en" ? "en-US" : "es-MX";
    setLanguage(nextLanguage);
    setOpen(false);

    window.location.reload();
  };

  const selected = languages.find((item) => item.code === language) ?? languages[1];

  return (
    <div
      ref={wrapperRef}
      className={`notranslate relative ${mobile ? "w-full" : ""}`}
      translate="no"
    >
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label="Choose website language"
        className={`flex items-center justify-center gap-2 rounded-full bg-orange-500 font-bold tracking-[0.08em] text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-deep ${
          mobile
            ? "w-full px-5 py-3 text-sm"
            : "px-4 py-2.5 text-[11px] xl:px-5 xl:text-xs"
        }`}
      >
        <span className="text-base leading-none" aria-hidden>
          {selected.flag}
        </span>
        <span>TRANSLATION</span>
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.168l3.71-3.938a.75.75 0 1 1 1.08 1.04l-4.25 4.51a.75.75 0 0 1-1.08 0l-4.25-4.51a.75.75 0 0 1 .02-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {open && (
        <div
          role="menu"
          className={`absolute z-[70] mt-2 overflow-hidden rounded-2xl border border-navy/10 bg-white p-1.5 shadow-2xl ${
            mobile ? "left-0 right-0" : "right-0 w-64"
          }`}
        >
          {languages.map((item) => {
            const active = language === item.code;
            return (
              <button
                key={item.code}
                type="button"
                role="menuitemradio"
                aria-checked={active}
                onClick={() => chooseLanguage(item.code)}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition-colors ${
                  active ? "bg-orange-50 text-navy" : "text-body hover:bg-cream"
                }`}
              >
                <span className="text-2xl leading-none" aria-hidden>
                  {item.flag}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-bold text-navy">{item.label}</span>
                  <span className="block text-xs text-body/75">{item.detail}</span>
                </span>
                {active && (
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-orange-500" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 5.292a1 1 0 0 1 .004 1.414l-8.25 8.3a1 1 0 0 1-1.42 0l-3.75-3.775a1 1 0 1 1 1.42-1.41l3.04 3.06 7.54-7.585a1 1 0 0 1 1.416-.004Z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
