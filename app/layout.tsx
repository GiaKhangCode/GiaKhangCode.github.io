import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { LangProvider } from "@/lib/i18n";
import "./globals.css";

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-be-vietnam",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://giakhangcode.github.io"),
  title: "Trần Huỳnh Gia Khang — AI Engineer",
  description:
    "Portfolio của Trần Huỳnh Gia Khang — sinh viên Hệ thống thông tin tại UIT, định hướng AI Engineer (LLM, RAG, Multi-Agent).",
  authors: [{ name: "Trần Huỳnh Gia Khang" }],
  openGraph: {
    type: "website",
    title: "Trần Huỳnh Gia Khang — AI Engineer",
    description: "Sinh viên Hệ thống thông tin tại UIT, định hướng AI Engineer.",
    images: ["/avatar.png"],
  },
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1530" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={`${beVietnam.variable} ${jetbrains.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <LangProvider>{children}</LangProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
