"use client";

import { useEffect, useRef, useState } from "react";
import { useLang } from "@/lib/i18n";
import { Search } from "./Icons";

/** Gõ câu hỏi từng ký tự rồi hiện câu trả lời, lặp lại. */
function useTypingLoop(text: string) {
  const [typed, setTyped] = useState("");
  const [answered, setAnswered] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setTyped(text);
      setAnswered(true);
      return;
    }
    let i = 0;
    let timer: ReturnType<typeof setTimeout>;
    setTyped("");
    setAnswered(false);

    const step = () => {
      if (i <= text.length) {
        setTyped(text.slice(0, i));
        i += 1;
        timer = setTimeout(step, 45 + Math.random() * 40);
      } else {
        timer = setTimeout(() => {
          setAnswered(true);
          timer = setTimeout(() => {
            i = 0;
            setAnswered(false);
            step();
          }, 4200);
        }, 650);
      }
    };
    timer = setTimeout(step, 900);
    return () => clearTimeout(timer);
  }, [text]);

  return { typed, answered, done: typed.length === text.length };
}

export default function HeroArt() {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const { typed, answered, done } = useTypingLoop(t.hero.chatQ);

  // Các sticker lệch nhẹ theo vị trí chuột
  useEffect(() => {
    const el = ref.current;
    if (!el || !window.matchMedia("(pointer: fine)").matches) return;
    const onMove = (e: PointerEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      el.style.setProperty("--mx", x.toFixed(3));
      el.style.setProperty("--my", y.toFixed(3));
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      className="@container relative mx-auto aspect-[10/9] w-full max-w-[580px] select-none"
    >
      {/* Lưới ô vuông */}
      <div
        className="parallax bg-grid absolute right-0 bottom-0 h-[50%] w-[44%] [mask-image:radial-gradient(circle_at_70%_70%,#000_45%,transparent_80%)]"
        style={{ "--depth": 4 } as React.CSSProperties}
        aria-hidden="true"
      />

      {/* Vòng tròn phía sau */}
      <div
        className="parallax absolute top-[4%] left-[1%] aspect-square w-[26%] rounded-full border-[3.2cqw] border-sky/70"
        style={{ "--depth": 14 } as React.CSSProperties}
        aria-hidden="true"
      />

      {/* Cửa sổ trình duyệt */}
      <div className="absolute top-[17%] left-[9%] z-10 h-[60%] w-[76%] rounded-[3.4cqw] border-2 border-fg bg-bg">
        <div className="flex h-[13%] items-center justify-between px-[4%]" aria-hidden="true">
          <div className="flex gap-[1.4cqw]">
            {[0, 1, 2].map((i) => (
              <span key={i} className="h-[1.9cqw] w-[1.9cqw] rounded-full border-2 border-fg" />
            ))}
          </div>
          <div className="flex items-center gap-[1.6cqw]">
            <span className="h-[1.9cqw] w-[1.9cqw] rounded-full border-2 border-fg" />
            <span className="font-mono text-[2.6cqw] leading-none font-medium">+</span>
            <span className="grid grid-cols-2 gap-[0.4cqw]">
              {[0, 1, 2, 3].map((i) => (
                <span key={i} className="h-[0.9cqw] w-[0.9cqw] rounded-[1px] border border-fg" />
              ))}
            </span>
          </div>
        </div>

        {/* Khối cobalt — lấn ra ngoài khung một chút */}
        <div className="absolute top-[17%] right-[-7%] bottom-[-9%] left-[4%] rounded-[2.6cqw] bg-cobalt">
          <div className="absolute top-1/2 left-[5%] aspect-square w-[44%] -translate-y-1/2 overflow-hidden rounded-full ring-[1.1cqw] ring-white">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/avatar.png"
              alt={t.hero.photoAlt}
              className="h-full w-full scale-[1.07] object-cover"
              width={800}
              height={800}
              fetchPriority="high"
            />
          </div>

          <div className="absolute top-[12%] right-[7%] left-[55%]" aria-hidden="true">
            <div className="flex h-[4.6cqw] items-center justify-between rounded-full bg-white px-[1.8cqw] text-navy">
              <span className="h-[0.9cqw] w-[45%] rounded-full bg-navy/15" />
              <Search className="h-[2.6cqw] w-[2.6cqw]" strokeWidth={2.4} />
            </div>
            <div className="mt-[3.2cqw] space-y-[1.8cqw]">
              <span className="block h-[1.1cqw] w-full rounded-full bg-white/85" />
              <span className="block h-[1.1cqw] w-[80%] rounded-full bg-white/60" />
              <span className="block h-[1.1cqw] w-[62%] rounded-full bg-white/60" />
            </div>
          </div>
        </div>
      </div>

      {/* Thẻ chat RAG */}
      <div
        className="parallax absolute right-[2%] bottom-[5%] z-20 w-[54%]"
        style={{ "--depth": 18 } as React.CSSProperties}
      >
        <div className="rounded-[2.6cqw] border-2 border-fg bg-bg p-[2.4cqw] shadow-[5px_5px_0_var(--fg)]">
          <div className="flex justify-end">
            <p className="min-h-[1.5em] max-w-[92%] rounded-[2cqw] rounded-br-[0.6cqw] bg-cobalt px-[2.2cqw] py-[1.3cqw] text-[2.5cqw] leading-snug font-medium text-white">
              {typed}
              {!done && <span className="ml-px inline-block w-[0.5ch] animate-blink">|</span>}
            </p>
          </div>
          <div className="mt-[1.8cqw] flex items-center gap-[1.4cqw]" aria-live="off">
            <span className="grid h-[4.4cqw] w-[4.4cqw] shrink-0 place-items-center rounded-full bg-fg font-mono text-[1.9cqw] font-medium text-bg">
              AI
            </span>
            {answered ? (
              <span className="font-mono text-[2.2cqw] text-muted">{t.hero.chatA}</span>
            ) : (
              <span className="flex gap-[0.8cqw]" aria-hidden="true">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="h-[1.2cqw] w-[1.2cqw] animate-pulse rounded-full bg-muted/60"
                    style={{ animationDelay: `${i * 150}ms` }}
                  />
                ))}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Sticker: bong bóng RAG */}
      <div
        className="parallax absolute top-[3%] left-[40%] z-20"
        style={{ "--depth": 22 } as React.CSSProperties}
        aria-hidden="true"
      >
        <div className="animate-float">
          <div className="relative rounded-[2cqw] border-2 border-fg bg-sky px-[3cqw] py-[1.6cqw] font-mono text-[4.2cqw] leading-none font-medium text-navy">
            RAG
            <span className="absolute -bottom-[1.9cqw] left-[24%] h-[3cqw] w-[3cqw] rotate-45 border-r-2 border-b-2 border-fg bg-sky" />
          </div>
        </div>
      </div>

      {/* Sticker: Python */}
      <div
        className="parallax absolute top-[4%] right-[1%] z-20"
        style={{ "--depth": 12 } as React.CSSProperties}
        aria-hidden="true"
      >
        <div className="animate-float [animation-delay:-2s]">
          <div className="relative rounded-[1.4cqw] border-2 border-fg bg-bg px-[2.4cqw] py-[1.3cqw] font-mono text-[3.3cqw] leading-none font-medium">
            Python
            <span className="absolute -bottom-[1.6cqw] left-[30%] h-[2.6cqw] w-[2.6cqw] rotate-45 border-r-2 border-b-2 border-fg bg-bg" />
          </div>
        </div>
      </div>

      {/* Sticker: FastAPI */}
      <div
        className="parallax absolute bottom-[9%] left-[2%] z-20"
        style={{ "--depth": 16 } as React.CSSProperties}
        aria-hidden="true"
      >
        <div className="animate-float [animation-delay:-4s]">
          <div className="rotate-[-6deg] rounded-[1.4cqw] border-2 border-fg bg-fg px-[2.4cqw] py-[1.3cqw] font-mono text-[3.1cqw] leading-none font-medium text-bg">
            FastAPI
          </div>
        </div>
      </div>

      {/* Con trỏ chuột */}
      <svg
        viewBox="0 0 24 24"
        className="parallax absolute top-[9%] left-[27%] z-20 w-[5.5%] text-fg"
        style={{ "--depth": 8 } as React.CSSProperties}
        aria-hidden="true"
      >
        <path d="M4 3l15 7.2-6.4 1.6L9.6 18z" fill="currentColor" stroke="var(--bg)" strokeWidth="1.2" strokeLinejoin="round" />
      </svg>

      {/* Hình sao nhiều cánh */}
      <svg
        viewBox="0 0 100 100"
        className="parallax absolute top-[40%] right-[-3%] z-20 w-[14%]"
        style={{ "--depth": 10 } as React.CSSProperties}
        aria-hidden="true"
      >
        <g className="origin-center animate-spin-slow [transform-box:fill-box]">
          <path
            d="M50 2l7.6 22.4L78 12l-4.6 23.2L98 40 77.8 52 92 72l-23.6-1.4L66 95 50 78 34 95l-2.4-24.4L8 72l14.2-20L2 40l24.6-4.8L22 12l20.4 12.4z"
            fill="var(--sky)"
            stroke="var(--fg)"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </g>
      </svg>

      {/* Tia lấp lánh */}
      <svg
        viewBox="0 0 40 40"
        className="parallax absolute top-[54%] left-[-2%] z-0 w-[9%] text-cobalt"
        style={{ "--depth": 20 } as React.CSSProperties}
        aria-hidden="true"
      >
        <path
          d="M20 3v34M3 20h34M8 8l24 24M32 8 8 32"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
