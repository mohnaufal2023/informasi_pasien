
"use client";

import { useEffect, useState } from "react";

const meals = [
  {
    name: "Sarapan",
    time: "07.00 – 08.00",
    icon: "☀️",
    description: "Jadwal makan pagi",
    color: "bg-amber-50",
    status: "Sesuai jadwal",
  },
  {
    name: "Makan siang",
    time: "12.00 – 13.00",
    icon: "🍽️",
    description: "Jadwal makan siang",
    color: "bg-emerald-50",
    status: "Sesuai jadwal",
  },
  {
    name: "Makan malam",
    time: "18.00 – 19.00",
    icon: "🌙",
    description: "Jadwal makan malam",
    color: "bg-sky-50",
    status: "Sesuai jadwal",
  },
];

export default function DashboardPage() {
  const [now, setNow] = useState<Date | null>(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const updateClock = () => setNow(new Date());
    updateClock();

    const timer = window.setInterval(updateClock, 1000);
    return () => window.clearInterval(timer);
  }, []);

  const dateText = now
    ? new Intl.DateTimeFormat("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }).format(now)
    : "Memuat tanggal...";

  const timeText = now
    ? new Intl.DateTimeFormat("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(now)
    : "--:--:--";

  return (
    <main className="min-h-screen bg-[#f2f8f7] text-slate-800">
      {/* Header */}
      <header className="bg-gradient-to-r from-teal-800 to-teal-600 text-white">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-5 px-5 py-6 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-3xl text-teal-700 shadow-sm">
              ✚
            </div>
            <div>
              <p className="text-xl font-extrabold tracking-wide sm:text-2xl">
                RS AWAL BROS
              </p>
              <p className="mt-1 text-sm text-teal-50 sm:text-base">
                Informasi Pelayanan Pasien
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between gap-5 rounded-2xl border border-white/20 bg-white/10 px-5 py-3 sm:justify-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-teal-100">
                Lokasi tablet
              </p>
              <p className="mt-1 text-lg font-bold">
                Kamar 506 · Bed 1
              </p>
            </div>
            <span className="rounded-full bg-emerald-300/20 px-3 py-1 text-xs font-bold text-emerald-100">
              ● Aktif
            </span>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-[1600px] gap-6 px-5 py-6 sm:px-8 sm:py-8 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-8 lg:px-10">
        {/* Navigasi */}
        <aside className="space-y-4">
          <p className="px-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
            Menu utama
          </p>

          <nav className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-1">
            <a
              href="#beranda"
              className="flex min-h-14 items-center gap-3 rounded-2xl bg-teal-700 px-4 py-3 font-bold text-white shadow-md transition hover:bg-teal-800"
            >
              <span className="text-xl">⌂</span>
              <span>Beranda</span>
            </a>

            <a
              href="#jadwal-makan"
              className="flex min-h-14 items-center gap-3 rounded-2xl bg-white px-4 py-3 font-semibold text-slate-700 shadow-sm transition hover:bg-teal-50"
            >
              <span className="text-xl">🍽️</span>
              <span>Jadwal makan</span>
            </a>

            <a
              href="#bantuan"
              className="flex min-h-14 items-center gap-3 rounded-2xl bg-white px-4 py-3 font-semibold text-slate-700 shadow-sm transition hover:bg-teal-50"
            >
              <span className="text-xl">♡</span>
              <span>Bantuan perawat</span>
            </a>

            <a
              href="#informasi"
              className="flex min-h-14 items-center gap-3 rounded-2xl bg-white px-4 py-3 font-semibold text-slate-700 shadow-sm transition hover:bg-teal-50"
            >
              <span className="text-xl">✚</span>
              <span>Informasi</span>
            </a>
          </nav>

          <div className="hidden rounded-2xl border border-teal-100 bg-white p-5 lg:block">
            <div className="mb-3 text-2xl text-teal-700">♡</div>
            <h2 className="font-bold">Kami siap membantu</h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Gunakan menu bantuan perawat untuk melihat informasi layanan.
            </p>
          </div>
        </aside>

        {/* Konten utama */}
        <div className="min-w-0 space-y-6">
          {/* Sambutan dan jam */}
          <section
            id="beranda"
            className="overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8 lg:p-9"
          >
            <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-teal-700">
                  Selamat datang
                </p>
                <h1 className="mt-3 text-2xl font-extrabold leading-tight text-slate-800 sm:text-3xl lg:text-4xl">
                  Informasi Perawatan Anda
                </h1>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                  Temukan jadwal makan dan informasi pelayanan selama Anda
                  menjalani perawatan di rumah sakit.
                </p>
              </div>

              <div className="min-w-0 rounded-2xl bg-teal-50 p-5 sm:min-w-64">
                <p className="text-sm font-medium text-teal-800">
                  Waktu saat ini
                </p>
                <p className="mt-2 text-3xl font-extrabold tabular-nums text-teal-900 sm:text-4xl">
                  {timeText}
                </p>
                <p className="mt-2 text-sm text-slate-500">{dateText}</p>
              </div>
            </div>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-[#effaf7] p-5 sm:p-6">
                <p className="text-sm font-medium text-teal-700">
                  📍 Lokasi perawatan
                </p>
                <p className="mt-2 text-xl font-extrabold">Kamar 506</p>
                <p className="mt-1 text-sm text-slate-500">Tempat tidur 1</p>
              </div>

              <div className="rounded-2xl bg-sky-50 p-5 sm:p-6">
                <p className="text-sm font-medium text-sky-700">
                  🍽️ Informasi hari ini
                </p>
                <p className="mt-2 text-xl font-extrabold">Jadwal makan</p>
                <p className="mt-1 text-sm text-slate-500">
                  Lihat waktu makan Anda di bawah.
                </p>
              </div>
            </div>
          </section>

          {/* Jadwal makan */}
          <section
            id="jadwal-makan"
            className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8 lg:p-9"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-teal-700">
                  Kebutuhan harian
                </p>
                <h2 className="mt-2 text-2xl font-extrabold">
                  Jadwal Makan
                </h2>
                <p className="mt-2 text-sm text-slate-500 sm:text-base">
                  Jadwal makan harian pasien.
                </p>
              </div>
              <span className="w-fit rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-600">
                {dateText}
              </span>
            </div>

            <div className="mt-6 space-y-4">
              {meals.map((meal) => (
                <article
                  key={meal.name}
                  className={`flex flex-col gap-4 rounded-2xl ${meal.color} p-4 sm:flex-row sm:items-center sm:gap-5 sm:p-5`}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm sm:h-16 sm:w-16 sm:text-3xl">
                      {meal.icon}
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg font-extrabold sm:text-xl">
                        {meal.name}
                      </h3>
                      <p className="mt-1 text-sm text-slate-600 sm:text-base">
                        Pukul {meal.time}
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        {meal.description}
                      </p>
                    </div>
                  </div>

                  <span className="w-fit rounded-full bg-white/80 px-4 py-2 text-xs font-bold text-slate-600 sm:ml-auto sm:text-sm">
                    {meal.status}
                  </span>
                </article>
              ))}
            </div>

            <p className="mt-5 rounded-xl bg-amber-50 p-4 text-sm leading-6 text-amber-900">
              <strong>Catatan:</strong> Jadwal di atas merupakan data contoh,
              bukan jadwal resmi pasien. Jadwal sebenarnya harus mengikuti
              data rumah sakit dan instruksi tenaga medis.
            </p>
          </section>

          
          {/* Informasi obat pasien */}
          <section
            id="informasi-obat"
            className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8 lg:p-9"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-teal-700">
                  Informasi perawatan
                </p>

                <h2 className="mt-2 text-2xl font-extrabold text-slate-800">
                  Informasi Obat
                </h2>

                <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
                  Lihat informasi jadwal obat yang tercatat untuk pasien
                  berdasarkan instruksi resmi tenaga medis.
                </p>
              </div>

              <span className="w-fit rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-bold text-amber-800">
                MODE DEMO
              </span>
            </div>

            {/* Peringatan data demo */}
            <div
              role="note"
              className="mt-6 flex gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4"
            >
              <span className="text-xl" aria-hidden="true">
                ⚠️
              </span>

              <div>
                <p className="font-bold text-amber-900">
                  Data obat belum terhubung
                </p>

                <p className="mt-1 text-sm leading-6 text-amber-800">
                  Ini hanya tampilan demonstrasi. Jadwal, dosis, dan
                  status pemberian obat pasien yang sebenarnya belum
                  tersedia. Jangan gunakan tampilan ini sebagai
                  instruksi pengobatan.
                </p>
              </div>
            </div>

            {/* Ringkasan */}
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-purple-50 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-2xl shadow-sm">
                    💊
                  </div>

                  <div>
                    <p className="text-sm font-medium text-purple-700">
                      Jadwal obat
                    </p>

                    <p className="mt-1 font-bold text-purple-950">
                      Belum tersedia
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-sky-50 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-2xl shadow-sm">
                    📋
                  </div>

                  <div>
                    <p className="text-sm font-medium text-sky-700">
                      Sumber informasi
                    </p>

                    <p className="mt-1 font-bold text-sky-950">
                      Menunggu integrasi
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Daftar jadwal */}
            <div className="mt-7">
              <h3 className="text-lg font-extrabold text-slate-800">
                Jadwal pemberian obat
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Data akan ditampilkan setelah sumber resmi tersedia.
              </p>

              <div className="mt-4 rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-5 py-8 text-center sm:px-8 sm:py-10">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-3xl shadow-sm">
                  💊
                </div>

                <h4 className="mt-4 text-lg font-bold text-slate-800">
                  Belum ada data obat
                </h4>

                <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                  Informasi obat akan muncul setelah aplikasi terhubung
                  dengan data resmi rumah sakit dan instruksi pemberian
                  yang berlaku untuk pasien.
                </p>

                <span className="mt-4 inline-flex rounded-full bg-slate-200 px-4 py-2 text-xs font-bold text-slate-600">
                  Menunggu data resmi
                </span>
              </div>
            </div>

            {/* Informasi keselamatan */}
            <div className="mt-5 rounded-2xl border border-teal-100 bg-teal-50 p-4">
              <p className="font-bold text-teal-900">
                Informasi keselamatan pasien
              </p>

              <p className="mt-2 text-sm leading-6 text-teal-800">
                Pemberian obat tetap dilakukan dan dikonfirmasi oleh
                tenaga medis yang berwenang. Informasi pada tablet
                bukan pengganti instruksi dokter atau perawat.
              </p>
            </div>
          </section>


          {/* Layanan pasien */}
          <section id="bantuan" className="space-y-4">
            <h2 className="text-xl font-extrabold sm:text-2xl">
              Layanan Pasien
            </h2>

            <div className="grid gap-4 xl:grid-cols-2">
              <button
                type="button"
                onClick={() =>
                  setMessage(
                    "Fitur permintaan bantuan belum terhubung ke sistem perawat. Silakan gunakan bel perawat yang tersedia di kamar."
                  )
                }
                className="min-h-44 rounded-3xl bg-teal-700 p-6 text-left text-white shadow-sm transition hover:bg-teal-800 focus:outline-none focus:ring-4 focus:ring-teal-200 sm:p-8"
              >
                <span className="text-3xl">♡</span>
                <span className="mt-4 block text-xl font-extrabold">
                  Bantuan Perawat
                </span>
                <span className="mt-2 block text-sm leading-6 text-teal-50">
                  Informasi untuk meminta bantuan petugas.
                </span>
              </button>

              <div
                id="informasi"
                className="min-h-44 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8"
              >
                <span className="text-3xl text-sky-700">✚</span>
                <h3 className="mt-4 text-xl font-extrabold">
                  Informasi Dokter
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Informasi dokter akan ditampilkan setelah sumber data dan
                  jadwal resmi tersedia.
                </p>
              </div>
            </div>

            {message && (
              <div
                role="status"
                className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900"
              >
                <p>{message}</p>
                <button
                  type="button"
                  onClick={() => setMessage("")}
                  className="mt-3 font-bold underline"
                >
                  Tutup pesan
                </button>
              </div>
            )}
          </section>

          <footer className="py-4 text-center text-sm text-slate-400">
            RS AWAL BROS · Sistem Informasi Pelayanan Pasien
          </footer>
        </div>
      </div>
    </main>
  );
}
