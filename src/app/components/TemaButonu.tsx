"use client";

import { useTema } from "./TemaSaglayici";

export default function TemaButonu() {
  const { tema, degistir } = useTema();
  return (
    <button
      type="button"
      onClick={degistir}
      className="rounded-lg border border-slate-300 px-3 py-1 text-sm font-medium transition hover:bg-slate-100 dark:border-slate-600 dark:hover:bg-slate-800"
    >
      {tema === "acik" ? "🌙 Koyu" : "☀️ Açık"}
    </button>
  );
}
