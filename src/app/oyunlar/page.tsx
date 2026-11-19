import OyunKarti from "../components/OyunKarti";

// Veri simdilik kod icinde bir dizi
const oyunlar = [
  { id: 1, baslik: "Uzay Avcısı", tur: "Aksiyon", aciklama: "Asteroit kuşağında düşman gemilerini avla." },
  { id: 2, baslik: "Bulmaca Krallığı", tur: "Bulmaca", aciklama: "Taşları eşleştir, krallığın kapılarını aç." },
  { id: 3, baslik: "Orman Koşusu", tur: "Platform", aciklama: "Engellerin üstünden atla, ormanın sonuna ulaş." },
  { id: 4, baslik: "Kale Savunması", tur: "Strateji", aciklama: "Kuleleri yerleştir, dalgalara karşı dayan." },
  { id: 5, baslik: "Neon Yarış", tur: "Yarış", aciklama: "Gece şehrinde rakiplerini geride bırak." },
  { id: 6, baslik: "Kelime Avı", tur: "Kelime", aciklama: "Altı denemede gizli kelimeyi bul." },
];

export default function OyunlarSayfasi() {
  return (
    <main className="mx-auto w-full max-w-6xl p-6">
      <h1 className="mb-4 text-2xl font-bold text-slate-800 dark:text-white">
        Oyunlar
      </h1>
      {/* Mobilde 1, tablette 2, masaustunde 3 sutun */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {oyunlar.map((oyun) => (
          <OyunKarti
            key={oyun.id}
            baslik={oyun.baslik}
            tur={oyun.tur}
            aciklama={oyun.aciklama}
          />
        ))}
      </div>
    </main>
  );
}
