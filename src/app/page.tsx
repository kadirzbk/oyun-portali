import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center gap-6 px-6 py-16 text-center md:py-24">
      <h1 className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl lg:text-5xl dark:text-white">
        Oyun Portalı&apos;na Hoş Geldin
      </h1>
      <p className="max-w-xl text-base text-slate-600 md:text-lg dark:text-slate-300">
        Aksiyondan bulmacaya, platformdan stratejiye en sevdiğin oyunları keşfet.
      </p>
      <Link
        href="/oyunlar"
        className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white shadow-md transition hover:bg-blue-700"
      >
        Oyunlara Göz At
      </Link>
    </main>
  );
}
