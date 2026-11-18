"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useLang } from "@/lib/i18n";
import { Moon, Sun } from "./Icons";

/**
 * Công tắc dạng viên thuốc đặt cạnh tên — bấm để đổi sáng/tối.
 * Kích thước tính theo em nên tự co giãn theo cỡ chữ tiêu đề.
 */
export default function ThemePill({ className = "" }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const { t } = useLang();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? t.hero.themeToLight : t.hero.themeToDark}
      title={isDark ? t.hero.themeToLight : t.hero.themeToDark}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`group relative inline-flex h-[0.74em] w-[1.5em] shrink-0 cursor-pointer items-center rounded-full border-[0.075em] border-cobalt align-middle transition-colors duration-300 hover:bg-ice ${className}`}
    >
      <span
        className={`absolute top-1/2 grid aspect-square h-[0.46em] -translate-y-1/2 place-items-center rounded-full bg-cobalt text-white transition-[left] duration-500 ease-[cubic-bezier(.6,-0.3,.3,1.4)] ${
          isDark ? "left-[calc(100%-0.53em)]" : "left-[0.07em]"
        }`}
      >
        {isDark ? (
          <Moon className="h-[0.24em] w-[0.24em]" strokeWidth={2.4} />
        ) : (
          <Sun className="h-[0.24em] w-[0.24em]" strokeWidth={2.4} />
        )}
      </span>
    </button>
  );
}
