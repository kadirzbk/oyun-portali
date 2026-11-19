import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import TemaSaglayici from "./components/TemaSaglayici";
import TemaButonu from "./components/TemaButonu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oyun Portalı",
  description: "Oyun tanıtım sitesi",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-slate-50 font-sans text-slate-900 dark:bg-slate-900 dark:text-white">
        <TemaSaglayici>
          {/* Logo solda, baglantilar sagda */}
          <nav className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
            <Link href="/" className="text-lg font-bold">
              🎮 Oyun Portalı
            </Link>
            <div className="flex items-center gap-4 text-sm sm:gap-6 sm:text-base">
              <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">
                Ana Sayfa
              </Link>
              <Link href="/oyunlar" className="hover:text-blue-600 dark:hover:text-blue-400">
                Oyunlar
              </Link>
              <Link href="/hakkinda" className="hover:text-blue-600 dark:hover:text-blue-400">
                Hakkında
              </Link>
              <TemaButonu />
            </div>
          </nav>
          {children}
        </TemaSaglayici>
      </body>
    </html>
  );
}
