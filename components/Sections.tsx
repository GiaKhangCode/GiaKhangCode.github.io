"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { GitHub } from "./Icons";
import { Button, Frame, Label, Reveal, Section, SectionHeading, container } from "./ui";

/* ---------- Thống kê ---------- */

export function Stats() {
  const { t } = useLang();
  return (
    <section aria-label="Highlights" className="border-y border-line bg-surface">
      <ul className={`${container} grid divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0`}>
        {t.stats.map((s, i) => (
          <li key={i} className="flex items-center gap-5 py-7 sm:px-8 sm:first:pl-0 sm:last:pr-0">
            <span className="text-[2.75rem] leading-none font-extrabold tracking-[-0.04em] text-cobalt">
              {s.value}
              {s.suffix && <span className="ml-0.5 text-xl font-bold tracking-tight text-cobalt/60">{s.suffix}</span>}
            </span>
            <span className="max-w-[16rem] text-sm leading-snug text-muted">{s.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ---------- Giới thiệu ---------- */

/** Đổi **từ khóa** thành chữ được tô nổi bật */
function Highlight({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
        part.startsWith("**") ? (
          <strong
            key={i}
            className="bg-[linear-gradient(transparent_60%,color-mix(in_srgb,var(--sky)_45%,transparent)_60%)] font-semibold text-fg"
          >
            {part.slice(2, -2)}
          </strong>
        ) : (
          part
        )
      )}
    </>
  );
}

/** Thẻ thông tin dạng JSON */
function ProfileCard() {
  const { t } = useLang();
  const p = t.about.profile;
  const str = (v: string) => <span className="text-fg">&quot;{v}&quot;</span>;
  const rows: [string, React.ReactNode][] = [
    ["location", str(p.location)],
    ["school", str(p.school)],
    ["major", str(p.major)],
    ["year", <span className="text-chip-fg">3</span>],
    [
      "focus",
      <span>
        [{str("LLM")}, {str("RAG")}, {str("Multi-Agent")}]
      </span>,
    ],
  ];

  return (
    <Frame title="whoami.json">
      <pre className="px-5 py-5 font-mono text-[13px] leading-[1.9] whitespace-normal text-muted sm:text-sm">
        <code>
          {"{"}
          {rows.map(([key, val]) => (
            <span key={key} className="block pl-5">
              <span className="text-cobalt">&quot;{key}&quot;</span>: {val},
            </span>
          ))}
          <span className="block pl-5">
            <span className="text-cobalt">&quot;status&quot;</span>:{" "}
            <span className="inline-flex items-center gap-2 rounded-full bg-chip px-2.5 py-0.5 font-sans text-xs font-semibold text-chip-fg">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-cobalt opacity-60" />
                <span className="relative h-2 w-2 rounded-full bg-cobalt" />
              </span>
              {p.status}
            </span>
          </span>
          {"}"}
        </code>
      </pre>
    </Frame>
  );
}

export function About() {
  const { t } = useLang();
  return (
    <Section id="about">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div className="space-y-10">
          <SectionHeading id="about" />
          <Reveal delay={100}>
            <ProfileCard />
          </Reveal>
        </div>

        <div className="lg:pt-10">
          <Reveal delay={150} className="space-y-5 text-[1.05rem] leading-[1.8] text-muted">
            <p>
              <Highlight text={t.about.p1} />
            </p>
            <p>
              <Highlight text={t.about.p2} />
            </p>
          </Reveal>

          <Reveal delay={200} className="mt-9">
            <div className="flex items-center gap-5 rounded-3xl bg-surface p-5 sm:p-6">
              <span className="grid h-16 w-16 shrink-0 -rotate-12 place-items-center rounded-2xl bg-cobalt text-white shadow-[4px_4px_0_var(--sky)]">
                {/* Quả cầu lông */}
                <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-9 w-9" aria-hidden="true">
                  <path d="M11.5 20 6.5 4.5Q16 2 25.5 4.5L20.5 20" />
                  <path d="M13.8 20 11.2 3.6M18.2 20l2.6-16.4M16 20V3.3" />
                  <path d="M8.6 11h14.8" />
                  <path d="M11 20.5h10v.8a5 5 0 0 1-10 0z" fill="currentColor" />
                </svg>
              </span>
              <div>
                <Label>{t.about.hobbyLabel}</Label>
                <p className="mt-1 text-lg font-bold tracking-tight">{t.about.hobbyTitle}</p>
                <p className="text-sm leading-relaxed text-muted">{t.about.hobby}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

/* ---------- Dự án ---------- */

export function Projects() {
  const { t } = useLang();
  return (
    <Section id="projects" tone="surface">
      <SectionHeading id="projects" />

      {/*
        Khi có dự án: thêm mảng `projects` vào lib/content.ts rồi render danh sách ở đây
        thay cho khung "đang xây dựng" bên dưới.
      */}
      <Reveal className="mt-14">
        <Frame title="~/projects">
          <div className="bg-grid px-6 py-14 sm:px-10 sm:py-20">
            <p className="font-mono text-sm text-muted">
              <span className="text-cobalt">$</span> ls ./projects
            </p>
            <p className="mt-4 max-w-xl text-xl leading-snug font-semibold sm:text-2xl">
              {t.projects.empty}
              <span className="ml-1 inline-block h-[1.1em] w-[0.5em] translate-y-[0.18em] animate-blink bg-cobalt" />
            </p>
            <Button
              href={profile.github}
              external
              variant="secondary"
              icon={<GitHub className="h-4.5 w-4.5" />}
              className="mt-8"
            >
              {t.projects.cta}
            </Button>
          </div>
        </Frame>
      </Reveal>
    </Section>
  );
}

/* ---------- Footer ---------- */

export function Footer() {
  const { t } = useLang();
  const [time, setTime] = useState("");

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Asia/Ho_Chi_Minh",
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className={`${container} flex flex-col gap-3 border-t border-line py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between`}>
      <p>© 2026 {profile.name}</p>
      <p className="font-mono text-xs">
        {t.footer.place} · <span className="tabular-nums">{time || "--:--"}</span> GMT+7
      </p>
      <a href="#top" className="transition-colors hover:text-fg">
        {t.footer.top} ↑
      </a>
    </footer>
  );
}
