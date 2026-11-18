"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/lib/i18n";
import { Close, Menu } from "./Icons";

const links = ["about", "skills", "certs", "projects", "contact"] as const;

export default function Navbar() {
  const { t, lang, toggle } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Đánh dấu mục đang xem
  useEffect(() => {
    const els = links
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const LangSwitch = (
    <button
      type="button"
      onClick={toggle}
      aria-label={t.langSwitch}
      className="inline-flex h-10 items-center gap-1 rounded-full border border-line px-3.5 font-mono text-xs tracking-wide text-muted transition-colors hover:border-fg hover:text-fg"
    >
      <span className={lang === "vi" ? "text-fg" : ""}>VI</span>
      <span className="opacity-40">/</span>
      <span className={lang === "en" ? "text-fg" : ""}>EN</span>
    </button>
  );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled || open
          ? "border-b border-line bg-bg/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <a
        href="#main"
        className="absolute -top-20 left-4 rounded-full bg-fg px-4 py-2 text-sm text-bg focus:top-3"
      >
        Skip to content
      </a>

      <nav className="mx-auto flex h-18 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="group flex items-center gap-2.5 font-semibold tracking-tight">
          <span className="relative inline-block h-5 w-9 rounded-full border-2 border-cobalt">
            <span className="absolute top-1/2 left-[3px] h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-cobalt transition-[left] duration-300 group-hover:left-[calc(100%-13px)]" />
          </span>
          <span>
            giakhang<span className="text-cobalt">.</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={active === id ? "true" : undefined}
                className={`rounded-full px-4 py-2 text-sm transition-colors hover:text-fg ${
                  active === id ? "font-medium text-fg" : "text-muted"
                }`}
              >
                {t.nav[id]}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          {LangSwitch}
          <a
            href="#contact"
            className="inline-flex h-10 items-center rounded-full bg-fg px-5 text-sm font-medium text-bg transition-colors hover:bg-cobalt hover:text-white"
          >
            {t.nav.cta}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? t.nav.close : t.nav.menu}
          className="-mr-2 grid h-11 w-11 place-items-center rounded-full md:hidden"
        >
          {open ? <Close className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-line px-5 pt-2 pb-6 md:hidden"
      >
        <ul>
          {links.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-line py-4 text-2xl font-semibold tracking-tight"
              >
                {t.nav[id]}
                <span className="font-mono text-xs text-muted">
                  0{links.indexOf(id) + 1}
                </span>
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-5">{LangSwitch}</div>
      </div>
    </header>
  );
}
