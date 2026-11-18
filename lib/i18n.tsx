"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { dictionaries, type Dict, type Lang } from "./content";

type Ctx = { lang: Lang; t: Dict; toggle: () => void };

const LangContext = createContext<Ctx | null>(null);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("vi");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("lang");
      if (saved === "en" || saved === "vi") setLang(saved);
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const toggle = () => {
    const next: Lang = lang === "vi" ? "en" : "vi";
    setLang(next);
    try {
      localStorage.setItem("lang", next);
    } catch {}
  };

  return (
    <LangContext.Provider value={{ lang, t: dictionaries[lang], toggle }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside LangProvider");
  return ctx;
}
