"use client";

/**
 * Bộ component dùng chung — mọi khung, nút, nhãn trên trang đều đi qua đây
 * để giữ cùng một kích thước, bo góc và độ bóng.
 */

import { useEffect, useRef } from "react";
import { sectionOrder, type SectionId } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { ArrowUpRight } from "./Icons";

/* ---------- Bố cục ---------- */

export const container = "mx-auto max-w-6xl px-5 sm:px-8";

/** Một section có tiêu đề: id, nền xen kẽ, khoảng cách dọc thống nhất */
export function Section({
  id,
  tone = "plain",
  className = "",
  children,
}: {
  id: SectionId;
  tone?: "plain" | "surface";
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`relative py-24 sm:py-32 ${tone === "surface" ? "bg-surface" : ""} ${className}`}
    >
      <div className={`relative ${container}`}>{children}</div>
    </section>
  );
}

/** Tiêu đề section — số thứ tự tự sinh theo `sectionOrder` */
export function SectionHeading({ id }: { id: SectionId }) {
  const { t } = useLang();
  const index = String(sectionOrder.indexOf(id) + 1).padStart(2, "0");
  const { kicker, title } = t[id];
  return (
    <Reveal>
      <p className="flex items-center gap-3 font-mono text-sm text-cobalt">
        <span>{index}</span>
        <span className="h-px w-8 bg-cobalt" aria-hidden="true" />
        <span className="uppercase">{kicker}</span>
      </p>
      <h2
        id={`${id}-title`}
        className="mt-4 max-w-2xl text-[clamp(2rem,4.6vw,3.25rem)] leading-[1.08] font-bold tracking-[-0.03em] text-balance"
      >
        {title}
      </h2>
    </Reveal>
  );
}

/** Hiện dần khi cuộn tới */
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

/* ---------- Khung "cửa sổ" ---------- */

/**
 * Khung viền đậm + bóng cobalt — họa tiết chính của trang.
 * `title` → thêm thanh tiêu đề (3 chấm + nhãn mono); `right` → nội dung bên phải thanh.
 */
export function Frame({
  title,
  right,
  as: Tag = "div",
  className = "",
  children,
}: {
  title?: string;
  right?: React.ReactNode;
  as?: "div" | "article";
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Tag className={`relative overflow-hidden rounded-3xl border-2 border-fg bg-bg shadow-[8px_8px_0_var(--cobalt)] ${className}`}>
      {title && (
        <div className="flex items-center gap-3 border-b-2 border-fg px-5 py-3">
          <span className="flex gap-1.5" aria-hidden="true">
            {[0, 1, 2].map((i) => (
              <span key={i} className="h-3 w-3 rounded-full border-2 border-fg" />
            ))}
          </span>
          <span className="font-mono text-xs text-muted">{title}</span>
          {right && <span className="ml-auto flex items-center">{right}</span>}
        </div>
      )}
      {children}
    </Tag>
  );
}

/* ---------- Nút ---------- */

type ButtonBase = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "md" | "sm";
  /** Icon đứng trước chữ */
  icon?: React.ReactNode;
  /** Icon đứng sau chữ; mặc định là mũi tên ↗ với link */
  trailing?: React.ReactNode;
  className?: string;
};

type ButtonProps = ButtonBase &
  (
    | { href: string; external?: boolean; type?: never; onClick?: never }
    | { href?: never; external?: never; type?: "button" | "submit"; onClick?: () => void }
  );

const arrow = (
  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
);

export function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  trailing,
  className = "",
  ...rest
}: ButtonProps) {
  const cls = [
    "group inline-flex shrink-0 items-center justify-center gap-2 rounded-full font-semibold transition-[translate,background-color,color,border-color] duration-200",
    size === "md" ? "h-12 px-6" : "h-10 px-4 text-sm",
    variant === "primary"
      ? "bg-fg text-bg shadow-[0_8px_20px_-12px_rgb(11_21_48/0.7)] hover:-translate-y-0.5"
      : "border-2 border-fg text-fg hover:bg-fg hover:text-bg",
    className,
  ].join(" ");

  if (rest.href !== undefined) {
    const ext = rest.external ? { target: "_blank", rel: "noopener noreferrer" } : {};
    return (
      <a href={rest.href} className={cls} {...ext}>
        {icon}
        {children}
        {trailing === undefined ? arrow : trailing}
      </a>
    );
  }
  return (
    <button type={rest.type ?? "button"} onClick={rest.onClick} className={cls}>
      {icon}
      {children}
      {trailing}
    </button>
  );
}

/* ---------- Nhãn & ô icon ---------- */

/** Nhãn chữ mono nhỏ, viết hoa */
export function Label({
  children,
  as: Tag = "p",
  className = "",
}: {
  children: React.ReactNode;
  as?: "p" | "span";
  className?: string;
}) {
  return <Tag className={`font-mono text-xs tracking-wider text-muted uppercase ${className}`}>{children}</Tag>;
}

/** Ô vuông viền đậm chứa icon */
export function IconBox({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl border-2 border-fg ${className}`}>
      {children}
    </span>
  );
}
