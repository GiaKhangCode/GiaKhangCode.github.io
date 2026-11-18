"use client";

import { useEffect, useRef, useState } from "react";
import {
  siDocker,
  siFastapi,
  siGit,
  siNumpy,
  siPandas,
  siPython,
  siScikitlearn,
  siTensorflow,
} from "simple-icons";
import { skills } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { Frame, Label, Reveal, Section, SectionHeading } from "./ui";

/* ---------- Icon cho từng phím ---------- */

const brand: Record<string, { path: string }> = {
  Python: siPython,
  TensorFlow: siTensorflow,
  "scikit-learn": siScikitlearn,
  NumPy: siNumpy,
  Pandas: siPandas,
  FastAPI: siFastapi,
  Git: siGit,
  Docker: siDocker,
};

const line = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const custom: Record<string, React.ReactNode> = {
  "Prompt Engineering": (
    <g {...line}>
      <path d="M4 5.5h16v10H9.5L5.5 19v-3.5H4z" />
      <path d="m8 9 2 1.5L8 12M12 12h4" />
    </g>
  ),
  RAG: (
    <g {...line}>
      <path d="M6 3.5h7l4 4V12M6 3.5v17h6" />
      <circle cx="16.5" cy="16.5" r="3" />
      <path d="m18.7 18.7 2 2" />
    </g>
  ),
  "Multi-Agent": (
    <g {...line}>
      <circle cx="12" cy="5" r="2.2" />
      <circle cx="5" cy="18" r="2.2" />
      <circle cx="19" cy="18" r="2.2" />
      <path d="M10.9 7 6.1 16M13.1 7l4.8 9M7.2 18h9.6" />
    </g>
  ),
  db: (
    <g {...line}>
      <ellipse cx="12" cy="5.5" rx="7" ry="2.6" />
      <path d="M5 5.5v13c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6v-13M5 12c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6" />
    </g>
  ),
};

function KeyIcon({ name }: { name: string }) {
  const b = brand[name];
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden="true">
      {b ? <path d={b.path} fill="currentColor" /> : (custom[name] ?? custom.db)}
    </svg>
  );
}

/* ---------- Phím ---------- */

function Key({
  name,
  sub,
  accent = false,
  wide = false,
  onPress,
}: {
  name: string;
  sub?: string;
  accent?: boolean;
  wide?: boolean;
  onPress: () => void;
}) {
  const [down, setDown] = useState(false);

  const press = () => {
    setDown(true);
    onPress();
    setTimeout(() => setDown(false), 140);
  };

  return (
    <button
      type="button"
      onClick={press}
      className={`group relative inline-flex h-14 items-center gap-2.5 rounded-xl border-2 border-fg px-4 text-[0.95rem] font-semibold tracking-tight transition-[translate,box-shadow] duration-100 ease-out select-none ${
        down
          ? "translate-y-[5px] shadow-[0_0_0_var(--fg)]"
          : "shadow-[0_5px_0_var(--fg)] hover:translate-y-[2px] hover:shadow-[0_3px_0_var(--fg)]"
      } ${accent ? "bg-cobalt text-white" : "bg-bg text-fg"} ${
        wide ? "min-w-[min(100%,22rem)] flex-1 justify-between sm:flex-none" : ""
      }`}
    >
      <span className="flex items-center gap-2.5">
        <KeyIcon name={name} />
        {name}
      </span>
      {sub && (
        <span className={`font-mono text-[11px] font-normal ${accent ? "text-white/70" : "text-muted"}`}>
          {sub}
        </span>
      )}
      {/* vệt sáng mặt phím */}
      <span
        className="pointer-events-none absolute inset-x-2 top-1 h-px rounded-full bg-white/40"
        aria-hidden="true"
      />
    </button>
  );
}

/* ---------- Màn hình nhỏ phía trên ---------- */

function Screen({ value, group, idle }: { value: string; group: string; idle: string }) {
  const [typed, setTyped] = useState("");
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (timer.current) clearInterval(timer.current);
    if (!value) return setTyped("");
    let i = 0;
    timer.current = setInterval(() => {
      i += 1;
      setTyped(value.slice(0, i));
      if (i >= value.length && timer.current) clearInterval(timer.current);
    }, 28);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [value]);

  return (
    <div
      className="flex min-h-14 items-center justify-between gap-4 rounded-xl border-2 border-fg bg-navy px-4 font-mono text-sm sm:px-5"
      aria-live="polite"
    >
      <p className="truncate text-sky">
        <span className="text-white/45">
          <span className="hidden sm:inline">~/skills </span>${" "}
        </span>
        {value ? (
          <span className="text-white">{typed}</span>
        ) : (
          <span className="text-white/45">{idle}</span>
        )}
        <span className="ml-0.5 inline-block h-[1.05em] w-[0.55em] translate-y-[0.18em] animate-blink bg-sky" />
      </p>
      {value && group && (
        <span className="hidden shrink-0 rounded-full border border-white/20 px-2.5 py-0.5 text-[11px] text-white/60 sm:inline">
          {group}
        </span>
      )}
    </div>
  );
}

/* ---------- Section ---------- */

export default function Skills() {
  const { t } = useLang();
  const g = t.skills.groups;
  const [shown, setShown] = useState({ name: "", group: "" });

  const rows: { label: string; items: string[]; accent?: boolean }[] = [
    { label: g.llm, items: skills.llm, accent: true },
    { label: g.ml, items: skills.ml },
    { label: g.backend, items: skills.backend },
    { label: g.db, items: skills.db },
  ];

  const show = (name: string, group: string) => setShown({ name, group });

  return (
    <Section id="skills" tone="surface">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading id="skills" />

        {/* Lời nhắc + mũi tên vẽ tay */}
        <Reveal delay={150} className="hidden items-end gap-2 pb-1 md:flex">
          <span className="mb-3 -rotate-3 font-mono text-sm text-muted">{t.skills.hint}</span>
          <svg viewBox="0 0 60 60" className="h-14 w-14 text-cobalt" fill="none" aria-hidden="true">
            <path d="M6 8c22 0 38 10 40 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="m38 40 8 9 7-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Reveal>
      </div>

      <Reveal className="mt-12">
        <Frame
          title="gk-board"
          right={
            // Đèn báo — sáng khi có phím được nhấn
            <span
              className={`h-2 w-2 rounded-full border border-fg transition-colors ${
                shown.name ? "bg-cobalt shadow-[0_0_8px_var(--cobalt)]" : ""
              }`}
              aria-hidden="true"
            />
          }
        >
          <div className="p-4 sm:p-7">
            <Screen value={shown.name} group={shown.group} idle={t.skills.idle} />

            <div className="mt-7 space-y-6">
              {rows.map((row) => (
                <div key={row.label} className="grid gap-3 lg:grid-cols-[11rem_1fr] lg:items-center lg:gap-6">
                  <Label className="flex items-center gap-2">
                    {row.label}
                    {row.accent && (
                      <span className="rounded-full bg-cobalt px-2 py-0.5 text-[10px] tracking-normal text-white normal-case">
                        {t.skills.focusTag}
                      </span>
                    )}
                  </Label>
                  <div className="flex flex-wrap gap-x-3 gap-y-4 pb-[5px]">
                    {row.items.map((name) => (
                      <Key key={name} name={name} accent={row.accent} onPress={() => show(name, row.label)} />
                    ))}
                  </div>
                </div>
              ))}

              {/* Hàng phím space */}
              <div className="grid gap-3 border-t-2 border-dashed border-line pt-6 lg:grid-cols-[11rem_1fr] lg:items-center lg:gap-6">
                <Label>{g.lang}</Label>
                <div className="flex flex-wrap gap-x-3 gap-y-4 pb-[5px]">
                  <Key name="Python" sub={t.skills.space} wide onPress={() => show("Python", g.lang)} />
                  <Key name="SQL" onPress={() => show("SQL", g.lang)} />
                </div>
              </div>
            </div>
          </div>
        </Frame>
      </Reveal>
    </Section>
  );
}
