# design.md — Portofolio I Nyoman Wahyu (Redesign 2026)

Panduan visual untuk seluruh halaman. Semua keputusan di sini mengikat: kalau ada yang belum diatur, ikuti semangatnya (neo-brutalist, tegas, hangat, mudah dibaca), jangan improvisasi gaya baru.

- **Jenis website:** Portofolio + landing page, satu halaman (SPA) dengan anchor section.
- **Target pengguna:** HRD/recruiter, klien freelance, konsultan.
- **Tujuan:** (1) dapat pekerjaan, (2) dapat project website. Setiap section harus mendorong salah satu dari dua aksi: **Download CV** atau **Diskusi Project**.
- **Stack:** React 19 + Vite + Tailwind CSS v4 (JavaScript, bukan TypeScript), shadcn/ui, lucide-react, remixicon.
- **Fitur wajib:** pilihan bahasa (Indonesia / English) dan pilihan tampilan (Light / Dark / System).

---

## 1. Arah Visual

Gabungan dua referensi:

| Referensi                                  | Yang diambil                                                                                                                                                                                                                                 |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Neo-Brutalism app (kartu "My Collections") | Outline hitam tebal, bayangan keras tanpa blur, warna solid cerah (kuning, pink, ungu, hijau), kartu bergaya folder dengan tab warna, ikon dalam kotak berwarna, badge pill kecil ("NEW"), bentuk dekoratif besar (lingkaran, baji) di latar |
| Studio X (tattoo app, mode gelap)          | Latar hitam pekat, kartu krem dan biru-hijau pucat dengan sudut besar, tipografi display kondensed huruf besar, tombol oranye bergaya sapuan kuas, chip pill beroutline, ilustrasi flat hitam-putih                                          |

Hasilnya:

- **Light mode** mengikuti nuansa Neo-Brutalism: latar krem, aksen kuning/pink/ungu, outline dan bayangan hitam.
- **Dark mode** mengikuti nuansa Studio X: latar hitam, kartu krem/teal, aksen oranye.
- Keduanya memakai **bentuk komponen yang sama** (border tebal, sudut membulat, tab folder). Hanya warna token yang berganti.

Kepribadian: percaya diri, playful tapi profesional. Terlihat seperti studio kecil yang serius bekerja, bukan template.

---

## 2. Warna

Semua warna diakses lewat CSS variable (token). **Dilarang menulis hex langsung di komponen**; pakai token atau utility Tailwind turunannya.

### 2.1 Palet dasar

| Token    | Hex       | Catatan                            |
| -------- | --------- | ---------------------------------- |
| `ink`    | `#111111` | Teks, border, bayangan (light)     |
| `cream`  | `#FBF6EA` | Latar halaman (light)              |
| `paper`  | `#FFFFFF` | Kartu (light)                      |
| `yellow` | `#FFCB1F` | Aksen utama light, band hero       |
| `pink`   | `#FF4F81` | Aksen, badge                       |
| `purple` | `#8E7CFF` | Aksen, band section                |
| `green`  | `#3CC63C` | Status "Live/Online", sukses       |
| `lime`   | `#A8E02A` | Aksen sekunder                     |
| `orange` | `#F4511E` | CTA utama (terutama dark mode)     |
| `teal`   | `#BFDDD9` | Kartu sekunder (dark mode)         |
| `night`  | `#0B0B0B` | Latar halaman (dark)               |
| `bone`   | `#F2EBD3` | Kartu & teks di latar gelap (dark) |

### 2.2 Token semantik (yang dipakai komponen)

| Token        | Light     | Dark      | Fungsi                                            |
| ------------ | --------- | --------- | ------------------------------------------------- |
| `--bg`       | `cream`   | `night`   | Latar halaman                                     |
| `--fg`       | `ink`     | `bone`    | Teks di atas latar halaman                        |
| `--muted`    | `#5B5B5B` | `#B9B29B` | Teks sekunder di atas latar halaman               |
| `--card`     | `paper`   | `bone`    | Latar kartu                                       |
| `--on-card`  | `ink`     | `ink`     | **Teks di dalam kartu selalu ink**, di kedua tema |
| `--card-alt` | `yellow`  | `teal`    | Kartu sekunder / highlight                        |
| `--border`   | `ink`     | `ink`     | Border kartu & tombol                             |
| `--line`     | `ink`     | `bone`    | Garis pemisah langsung di latar halaman           |
| `--shadow`   | `ink`     | `orange`  | Warna bayangan keras                              |
| `--accent`   | `purple`  | `orange`  | Aksen utama (link aktif, fokus)                   |
| `--cta`      | `orange`  | `orange`  | Tombol utama                                      |

### 2.3 Aturan pemakaian

1. **Proporsi:** ±60% netral (bg/kartu), ±30% satu warna band per section, ±10% aksen kecil (chip, ikon, badge).
2. **Satu band jenuh per layar.** Dua section bersebelahan tidak boleh berwarna band sama.
3. **Teks di atas warna aksen selalu `ink`**, bukan putih. Putih di atas oranye/ungu/pink gagal kontras untuk teks kecil.
4. Kontras `ink` di atas aksen sudah diukur: kuning 12.4:1, lime 12.0:1, hijau 8.4:1, pink 6.0:1, ungu 5.8:1, oranye 5.4:1 (semua lolos 4.5:1). Sebaliknya, putih di atas oranye hanya 3.5:1 dan di atas ungu 3.2:1, jadi **dilarang**.
5. Warna tidak boleh menjadi satu-satunya penanda status. Selalu sertakan teks atau ikon ("Live", "Dalam Pengembangan").
6. **Warna per project** (seperti folder koleksi di referensi): tiap project diberi satu warna aksen dari palet (yellow, pink, purple, green, lime, orange) secara berurutan dan konsisten di kartu, tab, dan modal.
7. Gradien tidak dipakai. Semua warna solid.

### 2.4 Kode token (letakkan di `src/index.css`)

```css
@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:where(.dark, .dark *));

:root {
  --bg: #fbf6ea;
  --fg: #111111;
  --muted: #5b5b5b;
  --card: #ffffff;
  --on-card: #111111;
  --card-alt: #ffcb1f;
  --border: #111111;
  --line: #111111;
  --shadow: #111111;
  --accent: #8e7cff;
  --cta: #f4511e;
  --yellow: #ffcb1f;
  --pink: #ff4f81;
  --purple: #8e7cff;
  --green: #3cc63c;
  --lime: #a8e02a;
  --orange: #f4511e;
  --teal: #bfddd9;
}
.dark {
  --bg: #0b0b0b;
  --fg: #f2ebd3;
  --muted: #b9b29b;
  --card: #f2ebd3;
  --on-card: #111111;
  --card-alt: #bfddd9;
  --border: #111111;
  --line: #f2ebd3;
  --shadow: #f4511e;
  --accent: #f4511e;
  --cta: #f4511e;
}

@theme inline {
  --color-bg: var(--bg);
  --color-fg: var(--fg);
  --color-muted: var(--muted);
  --color-card: var(--card);
  --color-on-card: var(--on-card);
  --color-card-alt: var(--card-alt);
  --color-line: var(--line);
  --color-accent: var(--accent);
  --color-cta: var(--cta);
  --color-yellow: var(--yellow);
  --color-pink: var(--pink);
  --color-purple: var(--purple);
  --color-green: var(--green);
  --color-lime: var(--lime);
  --color-orange: var(--orange);
  --color-teal: var(--teal);
  --font-display: "Anton", "Impact", sans-serif;
  --font-sans: "Space Grotesk", system-ui, sans-serif;
  --radius-sm: 10px;
  --radius-md: 16px;
  --radius-lg: 24px;
}
```

Catatan dark mode: pada latar hitam, bayangan hitam tidak terlihat. Karena itu `--shadow` dark memakai oranye, dan **hanya diterapkan pada tombol, chip aktif, dan kartu saat hover/fokus**. Kartu statis di dark mode tanpa bayangan.

---

## 3. Tipografi

Dua font saja (Google Fonts, `display=swap`, preconnect di `index.html`):

| Peran   | Font                                   | Dipakai untuk                                                                                                               |
| ------- | -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Display | **Anton**                              | Headline hero, judul section, angka statistik, wordmark footer. **Selalu UPPERCASE**, tracking `0.01em`, line-height `0.95` |
| Sans    | **Space Grotesk** (400, 500, 600, 700) | Semua yang lain: body, judul kartu, tombol, chip, form                                                                      |

Poppins lama dihapus.

### Skala (fluid)

| Level                | Ukuran                        | Font / berat                                    | Line-height |
| -------------------- | ----------------------------- | ----------------------------------------------- | ----------- |
| Display XL (hero)    | `clamp(3.25rem, 9vw, 7.5rem)` | Anton                                           | 0.95        |
| Section title        | `clamp(2.5rem, 6vw, 4.5rem)`  | Anton                                           | 1           |
| Card title           | `1.25rem` – `1.5rem`          | Space Grotesk 700                               | 1.2         |
| Lead / subjudul      | `1.125rem` – `1.25rem`        | Space Grotesk 500                               | 1.5         |
| Body                 | `1rem`                        | Space Grotesk 400                               | 1.65        |
| Small                | `0.875rem`                    | Space Grotesk 500                               | 1.5         |
| Label / chip / badge | `0.75rem`                     | Space Grotesk 700, UPPERCASE, tracking `0.08em` | 1           |

Aturan:

- Maksimal satu Display XL per halaman (hero). Section lain memakai Section title.
- Panjang baris body maksimal ±65 karakter (`max-w-prose`).
- Teks Indonesia cenderung 15-20% lebih panjang dari Inggris. Jangan pakai lebar tetap pada tombol/chip; biarkan tumbuh (`px` tetap, `w-auto`).
- Jangan memakai italic atau underline dekoratif. Link memakai underline tebal 2px.

---

## 4. Spacing, Grid, dan Layout

**Basis 4px.** Skala: `4, 8, 12, 16, 24, 32, 48, 64, 96, 128`.

| Konteks                       | Mobile                   | Desktop              |
| ----------------------------- | ------------------------ | -------------------- |
| Padding section vertikal      | `80px` (`py-20`)         | `128px` (`md:py-32`) |
| Container                     | `max-w-[1200px]`, `px-5` | `px-8`               |
| Gap grid kartu                | `16px`                   | `24px` – `32px`      |
| Padding kartu                 | `20px`                   | `24px` – `32px`      |
| Jarak judul section ke konten | `32px`                   | `48px`               |

Grid: 12 kolom di desktop, 4 kolom di mobile. Breakpoint Tailwind default (`sm 640`, `md 768`, `lg 1024`, `xl 1280`). **Mobile-first.** Tes di 360px, 768px, 1280px.

### Ritme layout antar-section

Setiap section punya bentuk berbeda supaya halaman tidak monoton, tetapi tetap satu bahasa visual. Lihat bagian 7 untuk rincian per section.

### Elemen dekoratif

- Lingkaran besar dan baji/diagonal berwarna di belakang hero dan kontak, meniru latar referensi Neo-Brutalism. Pakai SVG atau `div` solid, `pointer-events-none`, `aria-hidden`.
- Maksimal 2 bentuk dekoratif per section. Jangan menutupi teks.
- Ilustrasi: flat, outline hitam, tanpa gradien. Kalau tidak ada aset, cukup bentuk geometris. Jangan memakai stock illustration.

---

## 5. Gaya Komponen

### Properti dasar (berlaku untuk semua)

| Properti       | Nilai                                                                                                           |
| -------------- | --------------------------------------------------------------------------------------------------------------- |
| Border         | `3px solid var(--border)` untuk kartu & tombol; `2px` untuk chip & input                                        |
| Radius         | `sm 10px` (ikon, input), `md 16px` (tombol, chip kecil), `lg 24px` (kartu, modal), `999px` (pill)               |
| Bayangan keras | `sm: 3px 3px 0`, `md: 6px 6px 0`, `lg: 10px 10px 0` dengan warna `var(--shadow)`. **Tanpa blur, tanpa opacity** |
| Transisi       | `transform` dan `box-shadow`, `150ms ease-out`                                                                  |

### Tombol

- **Primary:** latar `--cta`, teks `ink`, border 3px, bayangan `md`. Dipakai maksimal satu per area (contoh: "Download CV", "Kirim Pesan").
- **Secondary:** latar `--card`, teks `--on-card`, border 3px, bayangan `md`. Contoh: "Lihat Project".
- **Ghost / icon:** kotak 44px, radius 12px, border 3px, bayangan `sm`.
- **Interaksi:** hover `translate(-2px,-2px)` + bayangan membesar satu level; active `translate(4px,4px)` + bayangan 0; fokus keyboard: ring 3px `--accent` dengan offset 3px.
- **Target sentuh minimal 44×44px.**
- **Varian khas:** satu tombol hero boleh memakai bentuk sapuan kuas (SVG mask) seperti di Studio X. Jangan dipakai di tempat lain.

### Kartu folder (komponen utama)

Meniru kartu koleksi referensi:

- Kartu putih/krem, border 3px, radius 24px, bayangan `md`.
- **Tab folder** di kiri atas: bentuk persegi panjang kecil berwarna aksen (warna project) yang menyembul 12px di atas kartu, dengan border 3px.
- **Ikon dalam kotak berwarna** 48px (radius 12px, border 3px, isi warna aksen) di kiri atas.
- **Meta kecil** di kanan atas (jumlah, tahun, status).
- Judul di kiri bawah, Space Grotesk 700.
- Hover: naik 2px, bayangan `lg`. Kartu yang bisa diklik harus berupa `<button>` atau `<a>` dengan fokus jelas.

Varian: `featured` (lebar 2 kolom, preview gambar besar), `compact` (tanpa gambar).

### Chip dan badge

- **Chip:** pill, border 2px, latar `--card`, label 12px bold. Chip filter aktif berisi warna aksen + bayangan `sm`.
- **Badge status:** pill kecil tanpa bayangan, `Live` (hijau), `Dalam Pengembangan` (kuning), `Offline/Arsip` (abu-abu `#D9D4C3`), `Baru` (pink). Selalu ada teks.

### Input dan form

Tinggi 48px, border 2px, radius 10px, latar `--card`, teks `--on-card`. Fokus: bayangan `sm` berwarna `--accent`. Label selalu terlihat di atas input (bukan placeholder saja). Pesan error dalam teks, bukan hanya warna merah.

### Segmented control (pilihan bahasa dan tema)

Grup tombol menyatu dalam satu kontainer berborder 3px dan radius pill. Opsi aktif berlatar `--card-alt` + border. Gunakan `role="radiogroup"` / `aria-pressed`, dapat dioperasikan dengan keyboard.

### Navbar

Pill melayang di atas konten (`sticky top-4`), border 3px, bayangan `md`, latar `--card`. Isi: logo "Nym", link anchor (Home, About, Project, Layanan, Pengalaman, Contact), pilihan bahasa, pilihan tema, tombol "Hire Me" (primary). Mobile: tombol menu yang membuka panel penuh bergaya kartu. Link aktif ditandai dengan underline tebal 3px `--accent` (scroll-spy).

### Modal (detail project dan detail desain)

Kartu `lg` di tengah, backdrop `ink` 60%, tombol tutup ikon 44px di kanan atas, fokus terkunci di dalam modal, `Esc` menutup. Gambar preview dengan border 3px. Chip teknologi di bawah, tombol "Demo" dan "GitHub" jika ada.

---

## 6. Motion

- Durasi: `150ms` (hover), `250ms` (muncul), `400ms` (transisi section). Easing `ease-out`.
- Reveal saat scroll: fade + `translateY(16px)`, **sekali saja**. Tanpa blur, tanpa scale berlebihan.
- Marquee tools: pelan (±40px/detik), berhenti saat hover.
- **Hormati `prefers-reduced-motion`:** matikan marquee, reveal, dan parallax; tampilkan statis.
- Konsolidasi library animasi: pakai `motion` (sudah terpasang) + CSS. `AOS`, `animate.css`, dan efek pointer-spotlight GSAP di `ChromaGrid` tidak sesuai gaya baru dan dihapus bertahap. **Tanyakan sebelum menghapus dependency.**

---

## 7. Blueprint Section (urutan halaman)

Urutan disusun untuk dua audiens: HRD melihat bukti dulu, klien melihat layanan dulu.

| #   | Section               | Layout                                                                             | Band (light → dark)   | Konten                                                                                                                                                                                                                                                                                                                                    |
| --- | --------------------- | ---------------------------------------------------------------------------------- | --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | **Hero**              | 2 kolom: teks kiri, foto kanan                                                     | Kuning → Hitam        | Chip status "Tersedia untuk kerja & freelance" (titik hijau), headline Display XL, 1-2 kalimat value, dua tombol (Download CV, Lihat Project), chip stack singkat. Foto profil dalam bingkai miring 2° (border 3px, bayangan `lg`) dengan 2 stiker melayang ("Full Stack Developer", "Makassar, ID"). Lingkaran pink + baji ungu di latar |
| 2   | **About**             | 2 kolom: cerita + statistik kiri, tumpukan kartu peran kanan                       | Krem → Hitam          | Cerita singkat (3 paragraf pendek), 2-3 kartu statistik bergaya stiker (angka Anton), kartu peran bertab folder: Frontend, Full Stack, UI/UX, Graphic Design, Performance, miring bergantian ±1°                                                                                                                                          |
| 3   | **Projects**          | Grid bento: 1 kartu `featured` (2 kolom) + kartu lain 3 kolom; filter chip di atas | Krem → Hitam          | Metafora "koleksi folder". Filter: Semua / Web App / Pemerintahan / Bisnis / Personal. Setiap kartu: warna project, ikon, tahun, status, chip stack. Klik membuka modal                                                                                                                                                                   |
| 4   | **Layanan** (baru)    | 3 kartu berwarna sejajar + strip proses 4 langkah                                  | Ungu → Teal           | Untuk klien freelance dan konsultan: (a) Website company, portofolio, landing page; (b) Sistem informasi (Laravel/PHP + MySQL); (c) UI/UX dan konsultasi. Proses: Brief → Desain → Build → Launch. Tombol "Diskusi Project". Tanpa harga kecuali diminta                                                                                  |
| 5   | **Pengalaman** (baru) | Timeline vertikal dengan kartu bertab; baris chip sertifikasi di bawah             | Krem → Hitam          | Untuk HRD: pengalaman kerja/magang, pendidikan, sertifikasi. Detail pada bagian 8                                                                                                                                                                                                                                                         |
| 6   | **Tools & Stack**     | Marquee stiker 2 baris (arah berlawanan), dikelompokkan Coding / Design            | Pink → Hitam          | Logo dalam ubin putih bergaris 3px, miring bergantian. Mode reduced-motion: grid statis                                                                                                                                                                                                                                                   |
| 7   | **Design**            | Masonry 4 → 2 → 1 kolom                                                            | Krem → Hitam          | Karya poster/UI. Gambar berborder 3px, chip kategori muncul saat hover/fokus, klik membuka modal, tombol "Lihat Lebih Banyak"                                                                                                                                                                                                             |
| 8   | **Contact**           | Band besar dengan headline dan kartu kontak                                        | Oranye → Oranye/Hitam | Headline Display ("Ayo bikin sesuatu bareng"), chip "Respon < 24 jam" dan "Tersedia sekarang", kartu Email / WhatsApp / GitHub / LinkedIn, ikon sosial                                                                                                                                                                        |
| 9   | **Footer**            | Band penuh, wordmark raksasa                                                       | Ink → Bone            | Wordmark "NYOMAN" Anton sangat besar (dipotong di bawah), link anchor, ikon sosial dalam kotak 44px, pilihan bahasa dan tema, tombol "Kembali ke atas", © tahun berjalan                                                                                                                                                                  |

Catatan band: pada dark mode band jenuh menjadi blok hitam/krem/teal supaya halaman tetap tenang. Warna jenuh dipakai di kartu dan aksen, bukan di seluruh latar, kecuali Contact (oranye).

### Penyesuaian dengan project yang sedang dikembangkan

Pakai data yang sudah ada di `src/data.js`, lalu tambahkan atau sesuaikan:

| Project                                                            | Warna         | Status                         | Catatan                                                                                                   |
| ------------------------------------------------------------------ | ------------- | ------------------------------ | --------------------------------------------------------------------------------------------------------- |
| JENDIG, sistem arsip dan persuratan Balai BPDAS Jeneberang Saddang | Ungu          | Live/sesuai kondisi sebenarnya | Tulis peran sebagai **anggota tim** (dikerjakan bersama tim), bukan solo. Stack: Laravel + MySQL          |
| Sistem Pendaftaran (SMAN 10 Makassar, BSC)                         | Kuning        | Sesuai kondisi                 | PHP, MySQL, Laravel                                                                                       |
| Survei Kepuasan Masyarakat                                         | Hijau         | Sesuai kondisi                 | Pemerintahan; PHP Native/Bootstrap                                                                        |
| Toko Orange Web                                                    | Pink          | Sesuai kondisi                 | Bisnis; katalog, keranjang, pemesanan                                                                     |
| Sistem Manajemen Siswa                                             | Lime          | Sesuai kondisi                 | HTML, CSS, JS                                                                                             |
| Web Portofolio                                                     | Oranye        | Live                           | Project ini sendiri; React + Vite + Tailwind                                                              |
| **Uang Bankst Pro AI** (baru)                                      | Teal / Kuning | **Dalam Pengembangan**         | Aplikasi keuangan pribadi, Google Apps Script + Google Sheets, antarmuka chat AI, pelacak anggaran/dompet |
| **Aplikasi Kasir SS Motor** (baru)                                 | Pink / Oranye | **Konsep / Rancangan (PRD)**   | POS web untuk toko aksesori otomotif, UI bertema racing. Jangan dilabeli "Live" kalau belum jadi          |

Struktur data tiap project (dwibahasa):

```js
{
  id, slug, color: "purple",            // salah satu: yellow|pink|purple|green|lime|orange|teal
  category: "pemerintahan",             // untuk filter
  status: "live",                       // live | dev | concept | archived
  year: 2025, role: { id: "...", en: "..." },
  title: { id: "...", en: "..." },
  desc:  { id: "...", en: "..." },
  stack: ["Laravel", "MySQL"], image, demo, github
}
```

---

## 8. Konten dan Nada Bahasa

- **Nada:** ringkas, aktif, fokus hasil. Hindari klise ("passionate", "berdedikasi tinggi").
- Tiap section: satu judul + satu kalimat pengantar maksimal.
- Tiap project: apa masalahnya → apa yang dibangun → stack → peran. Maksimal 2 kalimat di kartu.
- Dua CTA utama selalu mudah dijangkau: **Download CV** (HRD) dan **Diskusi Project** (klien). Keduanya ada di hero dan navbar ("Hire Me").
- **Jangan mengarang** tanggal, angka, jabatan, nama perusahaan, atau testimoni. Kalau data belum ada, tandai `TODO` di kode dan tanyakan ke pemilik. Khusus bagian Pengalaman: minta tanggal final dari pemilik sebelum menulis.
- Contoh arah headline hero:
  - ID: "Saya bangun website yang rapi, cepat, dan siap dipakai."
  - EN: "I build clean, fast, ready-to-use websites."

---

## 9. Bahasa (i18n): Indonesia dan English

- **Tanpa dependency baru.** Gunakan Context + kamus sederhana.
- Struktur:
  ```
  src/i18n/
    id.js          // export default { nav: {...}, hero: {...}, ... }
    en.js          // kunci identik dengan id.js
    LanguageProvider.jsx   // context: { lang, setLang }, hook useT()
  ```
- Semua teks tampilan berasal dari kamus atau field dwibahasa di `data.js`. **Tidak ada string hard-code di komponen.**
- Default: baca `localStorage("lang")`; jika kosong, ikuti `navigator.language` (awalan `id` → `id`, selain itu `en`).
- Saat ganti bahasa: simpan ke `localStorage`, set `document.documentElement.lang`, update `document.title` dan meta description.
- Kunci `id.js` dan `en.js` harus selalu sama. Tambahkan skrip atau cek sederhana untuk mendeteksi kunci yang hilang.
- Pilihan bahasa berupa segmented control `ID | EN` di navbar dan footer.

---

## 10. Tampilan (Appearance): Light, Dark, System

- Tiga opsi: `light`, `dark`, `system`. Default: `system`.
- Simpan pilihan di `localStorage("theme")`. Terapkan dengan menambah/menghapus class `dark` pada `<html>`. Untuk `system`, ikuti `matchMedia("(prefers-color-scheme: dark)")` dan **dengarkan perubahan** secara live.
- **Cegah flash tema:** tambahkan skrip inline kecil di `<head>` `index.html` yang menerapkan class `dark` sebelum React dimuat.
- Atur `color-scheme` (`light` / `dark`) di `<html>` dan `<meta name="theme-color">` agar sesuai.
- Segmented control tiga opsi dengan ikon lucide `Sun`, `Monitor`, `Moon` (plus teks untuk pembaca layar). Letak: navbar dan footer.
- Gambar/ilustrasi harus tetap terbaca di kedua tema (hindari PNG transparan berwarna gelap tanpa latar).

---

## 11. Aksesibilitas, Performa, SEO

- Kontras teks minimal 4.5:1 (3:1 untuk teks ≥ 24px atau ≥ 18.5px tebal). Ikuti aturan teks `ink` di atas warna aksen (angka terukur ada di bagian 2.3).
- Fokus keyboard selalu terlihat. Urutan tab logis. Ada tautan "Lewati ke konten".
- Semua gambar punya `alt` bermakna (dwibahasa); dekorasi memakai `alt=""` / `aria-hidden`.
- Semantik: satu `<h1>` (hero), `<h2>` per section, `<nav>`, `<main>`, `<footer>`.
- Gambar: tetap `webp`, `loading="lazy"` selain hero, tentukan `width`/`height` untuk mencegah layout shift.
- Target Lighthouse: Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95 pada mobile.
- `index.html`: title, meta description, Open Graph (judul, deskripsi, gambar 1200×630), `lang`, favicon. Karena situs ini SPA, pastikan metadata penting ada langsung di HTML statis, bukan hanya dirender JavaScript.

---

## 12. Daftar Cek Konsistensi (jalankan sebelum commit)

- [ ] Tidak ada hex/warna langsung di komponen; semua lewat token.
- [ ] Semua kartu/tombol memakai border 3px dan bayangan keras (kecuali dark mode statis).
- [ ] Hanya dua font (Anton, Space Grotesk); Poppins sudah hilang.
- [ ] Teks di atas warna aksen berwarna `ink`.
- [ ] Dua section berurutan tidak memakai band warna sama.
- [ ] Light, Dark, dan System bekerja; tidak ada flash saat memuat; perubahan sistem langsung terbaca.
- [ ] ID dan EN lengkap; tidak ada teks yang tertinggal berbahasa lain; layout aman saat teks lebih panjang.
- [ ] Tampilan benar di 360px, 768px, dan 1280px; tidak ada scroll horizontal.
- [ ] `prefers-reduced-motion` dihormati.
- [ ] Semua tombol/ikon ≥ 44px dan bisa dioperasikan dengan keyboard.
- [ ] Status project jujur (Live / Dalam Pengembangan / Konsep).
- [ ] `npm run build` dan `npm run lint` lolos.

## 13. Larangan

- Gradien, glassmorphism, bayangan blur lembut, neon glow.
- Lebih dari dua font, atau Display (Anton) untuk paragraf.
- Teks putih di atas oranye/ungu/pink.
- Animasi yang berulang tanpa henti selain marquee tools.
- Mengarang data (tanggal, angka, testimoni, klien).
- Menambah dependency tanpa izin.
