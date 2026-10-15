"use client";

import { useState } from "react";

function HospitalIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-7 w-7"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 21h18M5 21V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v14M9 21v-5h6v5M12 7v5M9 10h6"
      />
    </svg>
  );
}

function EyeIcon({ open }: { open: boolean }) {
  if (open) {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"
        />
        <circle cx="12" cy="12" r="2.5" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m3 3 18 18M10.6 6.2A10.7 10.7 0 0 1 12 6c6 0 9.5 6 9.5 6a17.7 17.7 0 0 1-3.1 3.8M6.2 6.2C3.9 7.8 2.5 12 2.5 12s3.5 6 9.5 6c1.3 0 2.5-.3 3.6-.8"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3 19 6v5c0 4.6-2.9 8.2-7 10-4.1-1.8-7-5.4-7-10V6l7-3Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m9.5 12 1.7 1.7 3.5-3.7"
      />
    </svg>
  );
}

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="min-h-screen bg-[#0092b6] p-4 sm:p-6 lg:p-8">
      <div className="mx-auto flex min-h-[calc(100vh-2rem)] max-w-6xl items-center sm:min-h-[calc(100vh-3rem)] lg:min-h-[calc(100vh-4rem)]">
        
        <div className="grid w-full overflow-hidden rounded-[28px] bg-white shadow-[0_25px_70px_-25px_rgba(15,23,42,0.3)] lg:grid-cols-[0.95fr_1.05fr]">

          {/* LEFT */}
          <section className="relative hidden min-h-[620px] overflow-hidden bg-gradient-to-br from-teal-700 via-teal-600 to-cyan-600 p-10 text-white lg:flex lg:flex-col lg:justify-between xl:p-12">

            {/* Background decoration */}
            <div className="absolute -right-28 -top-28 h-72 w-72 rounded-full bg-white/10" />
            <div className="absolute -bottom-40 -left-28 h-96 w-96 rounded-full bg-cyan-300/10" />
            <div className="absolute right-20 top-1/2 h-32 w-32 rounded-full bg-white/5" />

            <div className="relative z-10">

              {/* Brand */}
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-teal-700 shadow-lg">
                  <HospitalIcon />
                </div>

                <div>
                  <p className="text-sm font-bold tracking-wide">
                    RS AWAL BROS
                  </p>

                  <p className="text-[11px] text-teal-100">
                    Hospital Information System
                  </p>
                </div>
              </div>

              {/* Main text */}
              <div className="mt-24 max-w-md">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-teal-100">
                  Hospital Management System
                </p>

                <h1 className="text-4xl font-bold leading-[1.12] xl:text-[46px]">
                  Pelayanan rumah sakit yang lebih terintegrasi.
                </h1>

                <p className="mt-5 max-w-sm text-sm leading-6 text-teal-50">
                  Satu sistem untuk membantu mengelola informasi pasien,
                  kamar, tenaga medis, dan pelayanan rumah sakit.
                </p>
              </div>
            </div>

            {/* Security */}
            <div className="relative z-10 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/15 text-white">
                  <ShieldIcon />
                </div>

                <div>
                  <p className="text-sm font-semibold">
                    Sistem Terproteksi
                  </p>

                  <p className="mt-0.5 text-xs text-teal-100">
                    Akses hanya untuk pengguna terdaftar
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* RIGHT */}
          <section className="flex min-h-[620px] items-center justify-center px-7 py-10 sm:px-12 lg:px-14 xl:px-20">

            <div className="w-full max-w-md">

              {/* Mobile brand */}
              <div className="mb-8 flex items-center gap-3 lg:hidden">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-600 text-white">
                  <HospitalIcon />
                </div>

                <div>
                  <p className="text-sm font-bold text-slate-800">
                    RS AWAL BROS
                  </p>

                  <p className="text-[11px] text-slate-500">
                    Hospital Information System
                  </p>
                </div>
              </div>

              {/* Heading */}
              <div className="mb-7">
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-teal-600">
                  Welcome Back
                </p>

                <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                  Selamat Datang
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Masuk ke akun Anda untuk mengakses sistem rumah sakit.
                </p>
              </div>

              <form className="space-y-5">

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Email
                  </label>

                  <div className="relative">
                    <input
                      id="email"
                      type="email"
                      placeholder="nama@rumahsakit.com"
                      className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="text-sm font-semibold text-slate-700"
                    >
                      Password
                    </label>

                    <button
                      type="button"
                      className="text-xs font-semibold text-teal-600 transition hover:text-teal-700"
                    >
                      Lupa password?
                    </button>
                  </div>

                  <div className="relative">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Masukkan password"
                      className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 pr-12 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center justify-center rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
                      aria-label={
                        showPassword
                          ? "Sembunyikan password"
                          : "Tampilkan password"
                      }
                    >
                      <EyeIcon open={showPassword} />
                    </button>
                  </div>
                </div>

                {/* Remember */}
                <div className="flex items-center justify-between pt-1">
                  <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-600">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500"
                    />

                    Ingat saya
                  </label>
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="h-12 w-full rounded-xl bg-teal-600 text-sm font-bold text-white shadow-lg shadow-teal-600/20 transition hover:bg-teal-700 hover:shadow-xl active:scale-[0.99]"
                >
                  Masuk ke Sistem
                </button>

              </form>

              {/* Footer */}
              <div className="mt-8 border-t border-slate-100 pt-5 text-center">
                <p className="text-[11px] text-slate-400">
                  © 2026 Hospital Management System
                </p>

                <p className="mt-1 text-[11px] text-slate-400">
                  Sistem informasi internal rumah sakit
                </p>
              </div>

            </div>
          </section>

        </div>
      </div>
    </main>
  );
}