"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Tema = "acik" | "koyu";

const TemaContext = createContext<{ tema: Tema; degistir: () => void } | null>(
  null,
);

export default function TemaSaglayici({
  children,
}: {
  children: React.ReactNode;
}) {
  const [tema, setTema] = useState<Tema>("acik");

  // Tema degistikce <html> elemanina dark sinifini ekle / cikar
  useEffect(() => {
    const kok = document.documentElement;
    if (tema === "koyu") kok.classList.add("dark");
    else kok.classList.remove("dark");
  }, [tema]);

  const degistir = () => setTema(tema === "acik" ? "koyu" : "acik");

  return (
    <TemaContext.Provider value={{ tema, degistir }}>
      {children}
    </TemaContext.Provider>
  );
}

// Butonun kolayca kullanabilmesi icin yardimci hook
export function useTema() {
  const ctx = useContext(TemaContext);
  if (!ctx) throw new Error("useTema, TemaSaglayici icinde kullanilmali");
  return ctx;
}
