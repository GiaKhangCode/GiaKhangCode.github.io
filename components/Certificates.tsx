"use client";

import { siGoogle } from "simple-icons";
import { certificates } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { ArrowUpRight } from "./Icons";
import { Heading, Reveal } from "./Sections";

const MONTHS_EN = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function formatDate(ym: string, lang: string) {
  const [y, m] = ym.split("-");
  return lang === "vi" ? `${m}/${y}` : `${MONTHS_EN[Number(m) - 1]} ${y}`;
}

/** Mã vạch trang trí, sinh từ mã chứng chỉ (cùng mã → cùng vạch) */
function Barcode({ seed }: { seed: string }) {
  const rects: { x: number; w: number }[] = [];
  let x = 0;
  for (const ch of seed + seed) {
    const w = (ch.charCodeAt(0) % 3) + 1;
    rects.push({ x, w });
    x += w + (rects.length % 2 ? 2 : 1.5);
  }
  // viewBox bằng đúng tổng độ rộng → mọi mã vạch dài bằng nhau
  return (
    <svg viewBox={`0 0 ${x} 28`} preserveAspectRatio="none" className="h-7 w-full text-fg" aria-hidden="true">
      {rects.map((r, i) => (
        <rect key={i} x={r.x} y={0} width={r.w} height={28} fill="currentColor" />
      ))}
    </svg>
  );
}

export default function Certificates() {
  const { t, lang } = useLang();
  const c = t.certs;

  return (
    <section id="certs" aria-labelledby="certs-title" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Heading index="03" kicker={c.kicker} title={c.title} id="certs-title" />

        <ul className="mt-14 space-y-8">
          {certificates.map((cert, i) => (
            <li key={cert.id}>
              <Reveal delay={i * 120}>
                <article className="relative flex flex-col overflow-hidden rounded-3xl border-2 border-fg bg-bg shadow-[8px_8px_0_var(--cobalt)] sm:flex-row">
                  {/* ---------- Phần chính ---------- */}
                  <div className="flex-1 p-6 sm:p-8">
                    <div className="flex items-center gap-3">
                      <span className="grid h-11 w-11 place-items-center rounded-xl border-2 border-fg">
                        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                          <path d={siGoogle.path} fill="currentColor" />
                        </svg>
                      </span>
                      <span className="font-mono text-xs tracking-wider text-muted uppercase">
                        {cert.issuer} · {cert.platform}
                      </span>
                    </div>

                    <h3 className="mt-5 text-xl leading-snug font-bold tracking-tight text-balance sm:text-2xl">
                      {cert.name}
                    </h3>

                    <ul className="mt-4 flex flex-wrap gap-2" aria-label={c.skills}>
                      {cert.skills.map((s) => (
                        <li key={s} className="rounded-full bg-chip px-3 py-1 text-sm font-medium text-chip-fg">
                          {s}
                        </li>
                      ))}
                    </ul>

                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group mt-7 inline-flex h-10 items-center gap-2 rounded-full border-2 border-fg px-4 text-sm font-semibold transition-colors hover:bg-fg hover:text-bg"
                    >
                      {c.view}
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>

                  {/* ---------- Cuống vé ---------- */}
                  <div className="relative flex flex-col justify-between gap-6 border-t-2 border-dashed border-fg/25 bg-ice p-6 sm:w-60 sm:border-t-0 sm:border-l-2 sm:p-8">
                    {/* Hai lỗ khuyết của vé */}
                    <span className="absolute -top-3.5 -left-3.5 h-7 w-7 rounded-full border-2 border-fg bg-bg" aria-hidden="true" />
                    <span
                      className="absolute -top-3.5 -right-3.5 h-7 w-7 rounded-full border-2 border-fg bg-bg sm:top-auto sm:right-auto sm:-bottom-3.5 sm:-left-3.5"
                      aria-hidden="true"
                    />

                    <div>
                      <p className="font-mono text-[11px] tracking-wider text-muted uppercase">{c.issued}</p>
                      <p className="mt-1 text-3xl font-extrabold tracking-[-0.03em] text-cobalt">
                        {formatDate(cert.date, lang)}
                      </p>
                    </div>

                    <div>
                      <p className="font-mono text-[11px] tracking-wider text-muted uppercase">{c.id}</p>
                      <p className="mt-1 font-mono text-sm font-medium break-all">{cert.id}</p>
                      <div className="mt-3 opacity-80">
                        <Barcode seed={cert.id} />
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
