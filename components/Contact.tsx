"use client";

import { useState } from "react";
import { profile } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { ArrowUpRight, Copy, GitHub, LinkedIn, Mail } from "./Icons";
import { Heading, Reveal } from "./Sections";

const handle = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

export default function Contact() {
  const { t } = useLang();
  const c = t.contact;
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    const q = new URLSearchParams();
    if (subject) q.set("subject", subject);
    if (body) q.set("body", body);
    const qs = q.toString().replace(/\+/g, "%20");
    window.location.href = `mailto:${profile.email}${qs ? `?${qs}` : ""}`;
  };

  const links = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}`, Icon: Mail, external: false },
    { label: "GitHub", value: handle(profile.github), href: profile.github, Icon: GitHub, external: true },
    { label: "LinkedIn", value: handle(profile.linkedin), href: profile.linkedin, Icon: LinkedIn, external: true },
  ];

  const field = "w-full bg-transparent text-fg placeholder:text-muted/70 focus:outline-none";

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative overflow-hidden py-24 sm:py-32">
      {/* Đường cong mảnh phía sau, giống hero */}
      <svg
        className="pointer-events-none absolute -right-60 -bottom-60 h-[760px] w-[760px] text-line"
        viewBox="0 0 760 760"
        fill="none"
        aria-hidden="true"
      >
        <path d="M720 80C420 120 160 340 100 700" stroke="currentColor" strokeWidth="48" strokeLinecap="round" opacity=".45" />
      </svg>

      <div className="relative mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)] gap-14 px-5 sm:px-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
        {/* ---------- Trái ---------- */}
        <div>
          <Heading index="05" kicker={c.kicker} title={c.title} id="contact-title" />
          <Reveal delay={100}>
            <p className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-muted">{c.lead}</p>

            <p className="mt-12 font-mono text-xs tracking-wider text-muted uppercase">{c.linksLabel}</p>
            <ul className="mt-3 border-t border-line">
              {links.map(({ label, value, href, Icon, external }) => (
                <li key={label} className="border-b border-line">
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex items-center gap-4 py-4"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border-2 border-fg transition-colors group-hover:bg-cobalt group-hover:text-white">
                      <Icon className="h-[18px] w-[18px]" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm text-muted">{label}</span>
                      <span className="block truncate font-medium transition-colors group-hover:text-cobalt">
                        {value}
                      </span>
                    </span>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-muted transition-[translate,color] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cobalt" />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* ---------- Phải: cửa sổ soạn thư ---------- */}
        <Reveal delay={150} className="lg:pt-4">
          <form
            onSubmit={send}
            className="overflow-hidden rounded-3xl border-2 border-fg bg-bg shadow-[10px_10px_0_var(--cobalt)]"
          >
            <div className="flex items-center justify-between border-b-2 border-fg px-5 py-3.5">
              <div className="flex gap-1.5" aria-hidden="true">
                {[0, 1, 2].map((i) => (
                  <span key={i} className="h-3 w-3 rounded-full border-2 border-fg" />
                ))}
              </div>
              <span className="text-sm font-semibold">{c.newMsg}</span>
              <span className="w-[46px]" aria-hidden="true" />
            </div>

            {/* Đến */}
            <div className="flex items-center gap-3 border-b border-line px-5 py-3.5 text-sm">
              <span className="w-16 shrink-0 text-muted">{c.to}</span>
              <span className="inline-flex min-w-0 items-center gap-2 rounded-full bg-chip py-1 pr-3 pl-1 font-medium text-chip-fg">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-cobalt text-[10px] font-bold text-white">
                  GK
                </span>
                <span className="truncate">{profile.email}</span>
              </span>
              <button
                type="button"
                onClick={copy}
                className="ml-auto inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium text-muted transition-colors hover:bg-surface hover:text-fg"
              >
                <Copy className="h-3.5 w-3.5" />
                <span aria-live="polite" className="hidden sm:inline">
                  {copied ? c.copied : c.copy}
                </span>
              </button>
            </div>

            {/* Tiêu đề */}
            <label className="flex items-center gap-3 border-b border-line px-5 py-3.5 text-sm">
              <span className="w-16 shrink-0 text-muted">{c.subject}</span>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder={c.subjectPh}
                className={`${field} font-medium`}
              />
            </label>

            {/* Chủ đề gợi ý */}
            <div className="flex flex-wrap gap-2 px-5 pt-4">
              {c.presets.map((p) => {
                const on = subject === p;
                return (
                  <button
                    key={p}
                    type="button"
                    aria-pressed={on}
                    onClick={() => setSubject(on ? "" : p)}
                    className={`rounded-full border-2 px-3.5 py-1.5 text-sm font-medium transition-colors ${
                      on
                        ? "border-cobalt bg-cobalt text-white"
                        : "border-line text-muted hover:border-fg hover:text-fg"
                    }`}
                  >
                    {p}
                  </button>
                );
              })}
            </div>

            {/* Nội dung */}
            <label className="block px-5 pt-4">
              <span className="sr-only">Message</span>
              <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder={c.bodyPh}
                rows={6}
                className={`${field} resize-none text-[0.95rem] leading-relaxed`}
              />
            </label>

            {/* Thanh gửi */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line bg-surface px-5 py-4">
              <span className="font-mono text-xs text-muted">{c.sendHint}</span>
              <button
                type="submit"
                className="group ml-auto inline-flex h-11 items-center gap-2 rounded-full bg-cobalt px-6 font-semibold text-white shadow-[0_8px_20px_-8px_var(--cobalt)] transition-transform hover:-translate-y-0.5"
              >
                {c.send}
                <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 12 20 4l-5 16-3-7z" />
                  <path d="m12 13 8-9" />
                </svg>
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
