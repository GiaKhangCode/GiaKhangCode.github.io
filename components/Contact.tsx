"use client";

import { useState } from "react";
import { profile } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { ArrowUpRight, Copy, GitHub, LinkedIn } from "./Icons";
import { Button, Frame, IconBox, Label, Reveal, Section, SectionHeading } from "./ui";

/** Lấy phần cuối của URL, vd. https://github.com/GiaKhangCode → GiaKhangCode */
const username = (url: string) => url.replace(/\/$/, "").split("/").pop() ?? "";

const sendIcon = (
  <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 12 20 4l-5 16-3-7z" />
    <path d="m12 13 8-9" />
  </svg>
);

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

  // Email đã có ở cửa sổ thư bên cạnh → danh sách chỉ còn các kênh khác
  // Hiển thị tên tài khoản thay cho URL dài
  const links = [
    { label: "GitHub", value: `@${username(profile.github)}`, href: profile.github, Icon: GitHub },
    { label: "LinkedIn", value: profile.name, href: profile.linkedin, Icon: LinkedIn },
  ];

  const field = "w-full bg-transparent text-fg placeholder:text-muted/70 focus:outline-none";

  return (
    <Section id="contact" className="overflow-hidden">
      {/* Đường cong mảnh phía sau, giống hero */}
      <svg
        className="pointer-events-none absolute -right-80 -bottom-80 h-[760px] w-[760px] text-line"
        viewBox="0 0 760 760"
        fill="none"
        aria-hidden="true"
      >
        <path d="M720 80C420 120 160 340 100 700" stroke="currentColor" strokeWidth="48" strokeLinecap="round" opacity=".45" />
      </svg>

      <div className="relative grid grid-cols-[minmax(0,1fr)] gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
        {/* ---------- Trái ---------- */}
        <div>
          <SectionHeading id="contact" />
          <Reveal delay={100}>
            <p className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-muted">{c.lead}</p>

            <Label className="mt-12">{c.linksLabel}</Label>
            <ul className="mt-3 border-t border-line">
              {links.map(({ label, value, href, Icon }) => (
                <li key={label} className="border-b border-line">
                  <a href={href} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 py-4">
                    <IconBox className="transition-colors group-hover:bg-cobalt group-hover:text-white">
                      <Icon className="h-[18px] w-[18px]" />
                    </IconBox>
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
          <Frame title={c.newMsg}>
            <form onSubmit={send}>
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
                  aria-label={c.copy}
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
                        on ? "border-fg bg-fg text-bg" :"border-line text-muted hover:border-fg hover:text-fg"
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
                <Button type="submit" trailing={sendIcon} className="ml-auto">
                  {c.send}
                </Button>
              </div>
            </form>
          </Frame>
        </Reveal>
      </div>
    </Section>
  );
}
