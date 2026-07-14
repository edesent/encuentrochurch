"use client";

import { useEffect, useState } from "react";

type Language = "en" | "es";

function getCurrentLanguage(): Language {
  const saved = window.localStorage.getItem("encuentro-language");
  if (saved === "en" || saved === "es") return saved;

  const translationCookie = document.cookie
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith("googtrans="));

  return translationCookie?.endsWith("/en") ? "en" : "es";
}

export default function HeroHeadline() {
  const [language, setLanguage] = useState<Language>("es");

  useEffect(() => {
    setLanguage(getCurrentLanguage());
  }, []);

  return (
    <h1
      className="notranslate animate-fade-up delay-200 font-display text-4xl sm:text-6xl lg:text-[4.2rem] font-extrabold leading-[1.03] tracking-tight text-white"
      translate="no"
    >
      {language === "en" ? (
        <>
          A place to Encounter <span className="text-green-light">God</span> and community
        </>
      ) : (
        <>
          Un lugar para encontrar a <span className="text-green-light">Dios</span> y comunidad
        </>
      )}
    </h1>
  );
}
