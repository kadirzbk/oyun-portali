// Kart stili tek yerde: padding, arka plan, kose, golge ve dark mode
interface OyunKartiProps {
  baslik: string;
  tur: string;
  aciklama?: string;
}

export default function OyunKarti({ baslik, tur, aciklama }: OyunKartiProps) {
  return (
    <div className="rounded-lg bg-white p-4 shadow-md transition hover:shadow-lg dark:bg-slate-800">
      <h3 className="text-xl font-bold text-slate-800 dark:text-white">
        {baslik}
      </h3>
      <p className="text-sm text-slate-500 dark:text-slate-400">Tür: {tur}</p>
      {aciklama && (
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
          {aciklama}
        </p>
      )}
    </div>
  );
}
