"use client";

import { profile } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import HeroArt from "./HeroArt";
import { ArrowUpRight, GitHub } from "./Icons";
import ThemePill from "./ThemePill";

export default function Hero() {
  const { t } = useLang();

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pb-24">
      {/* Đường cong mảnh phía sau */}
      <svg
        className="pointer-events-none absolute -top-40 -left-40 h-[900px] w-[900px] text-line"
        viewBox="0 0 900 900"
        fill="none"
        aria-hidden="true"
      >
        <path d="M60 740C120 420 360 160 700 120" stroke="currentColor" strokeWidth="56" strokeLinecap="round" opacity=".45" />
        <path d="M250 860C300 640 470 470 860 430" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_1fr] lg:gap-10">
        <div>
          <p className="font-mono text-sm tracking-wider text-cobalt uppercase">{t.hero.hello}</p>

          <div className="mt-4 text-[clamp(2.3rem,9vw,4.4rem)] leading-[0.95] font-extrabold tracking-[-0.035em] whitespace-nowrap uppercase lg:text-[clamp(3rem,4.7vw,4.4rem)]">
            <div className="flex items-center gap-[0.18em]">
              <h1>{t.hero.first}</h1>
              <ThemePill className="translate-y-[0.02em]" />
            </div>
            <p className="mt-[0.08em] flex flex-wrap items-start gap-x-3 gap-y-2">
              <span>
                <span className="text-cobalt">{t.hero.roleAccent}</span> {t.hero.roleRest}
              </span>
              <span className="mt-[0.05em] rotate-[6deg] rounded-md border-2 border-fg bg-sky px-2 py-1 font-mono text-[11px] leading-none font-medium tracking-normal text-[#0b1530] normal-case sm:text-xs">
                {t.hero.rolePrefix}
              </span>
            </p>
          </div>

          <p className="mt-7 max-w-[34rem] text-[1.05rem] leading-relaxed text-muted sm:text-lg">
            {t.hero.intro}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex h-12 items-center gap-2 rounded-full bg-cobalt px-6 font-medium text-white shadow-[0_8px_24px_-8px_var(--cobalt)] transition-transform hover:-translate-y-0.5"
            >
              {t.hero.ctaPrimary}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-full border-2 border-fg px-6 font-medium transition-colors hover:bg-fg hover:text-bg"
            >
              <GitHub className="h-4.5 w-4.5" />
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>

        <HeroArt />
      </div>
    </section>
  );
}
