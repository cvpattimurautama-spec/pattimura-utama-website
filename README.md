# Website Pattimura Utama

Website profil perusahaan, 8 halaman: Beranda, Tentang, Layanan, Portofolio, Dunia
Konstruksi, Pusat Unduh, Kontak, dan Pesan Order.
**Website statis murni** — HTML/CSS/JS biasa, tidak perlu Node.js, tidak perlu `npm install`,
tidak perlu proses "build" apa pun. Tinggal upload filenya, langsung jalan.

## Struktur file
```
index.html              ← Beranda
tentang.html
layanan.html
portofolio.html
dunia-konstruksi.html   ← halaman edukasi "Seputar Dunia Konstruksi" (di menu "Sumber Daya")
unduh.html              ← Pusat Unduh: contoh aplikasi, form/formulir proyek, e-book (di menu "Sumber Daya")
kontak.html
pesan-order.html        ← form permintaan penawaran terstruktur (tombol CTA utama di navigasi)
style.css                ← semua styling (satu file, dipakai bersama semua halaman)
script.js                ← untuk menu mobile (hamburger)
```

Menu navigasi "Sumber Daya" adalah dropdown yang berisi link ke `dunia-konstruksi.html`
dan `unduh.html`. Kalau suatu saat ingin menambah halaman baru ke dropdown ini, cari blok
`<div class="nav-dropdown">...</div>` di tiap file `.html` dan tambahkan baris `<a>` baru
di dalam `<div class="drop-menu">`.

## 1. Yang WAJIB diisi sebelum publikasi

Alamat kantor, telepon/WA, dan email sudah diisi dengan data asli CV. Pattimura Utama
(dari profil perusahaan) di footer semua halaman dan di halaman Kontak. Yang masih perlu
dilengkapi:

- **`kontak.html`**: `[Isi jam operasional, mis. Senin–Sabtu, 08.00–17.00]` — satu-satunya
  data yang belum ada di profil perusahaan, tinggal cari teks berkurung siku itu dan ganti.
- **`portofolio.html`**: ganti tiap `[Nama Proyek]` dan kotak "Foto proyek menyusul"
  dengan foto asli (lihat langkah di bawah).

Cara paling gampang: buka tiap file `.html` pakai text editor apa saja, pakai fitur
**Find & Replace** untuk cari teks itu satu-satu.

## 2. Menambahkan foto proyek asli (Portofolio)

1. Taruh file foto kamu (format `.jpg`/`.png`) di folder yang sama, misal buat folder baru
   bernama `foto/` lalu taruh di situ.
2. Di `portofolio.html`, cari blok seperti ini:
   ```html
   <div class="port-media"><span class="ph-label">Foto proyek menyusul</span></div>
   ```
   Ganti jadi:
   ```html
   <div class="port-media" style="background:none;">
     <img src="foto/nama-file-kamu.jpg" style="width:100%;height:100%;object-fit:cover;" />
   </div>
   ```
3. Ulangi untuk tiap proyek yang mau ditampilkan. Boleh tambah kotak baru (copy-paste
   satu blok `.port-tile` lalu ubah isinya) kalau proyeknya lebih dari 6.

## 3. Legalitas perusahaan — di halaman Tentang, bukan Pusat Unduh

Halaman `tentang.html` menampilkan 4 dokumen resmi perusahaan sebagai kartu ringkas
("Dokumen Resmi Perusahaan"): **Akta Pendirian & Perubahan**, **NIB**, **Sertifikat
Badan Usaha (SBU)** — dengan tabel rincian ke-8 sub-klasifikasi di bawahnya — dan
**PKKPR** (izin kesesuaian pemanfaatan ruang, berfungsi sebagai izin lokasi/domisili
usaha). Semua data diambil dari dokumen Profil Perusahaan CV. Pattimura Utama.

Data ini sengaja ditampilkan sebagai **kartu ringkasan teks/angka** (nomor dokumen,
tanggal terbit, instansi penerbit), bukan hasil scan asli dalam ukuran penuh — sesuai
permintaan agar tampilannya rapi dan minimalis. Ini juga menjaga privasi, karena dokumen
sumbernya turut memuat data pribadi & finansial pengurus (NIK/KTP, NPWP pribadi, nomor
rekening, SPT) yang sengaja **tidak** ditampilkan di kartu-kartu ini maupun di bagian
manapun pada website publik.

Kalau suatu saat ingin menambahkan salinan PDF resmi yang aman untuk publik (misalnya
Akta Pendirian atau sertifikat SBU saja, tanpa lampiran KTP/rekening), taruh filenya di
folder baru `legalitas/` lalu tambahkan link unduh pada kartu terkait di `tentang.html`
(cari blok `<div class="legal-doc-card">`) — misalnya ganti judul `<h4>` menjadi tautan
`<a href="legalitas/nama-file.pdf" target="_blank">`.

Catatan: `unduh.html` ("Pusat Unduh") sekarang isinya kategori lain — contoh aplikasi,
form/formulir proyek, dan e-book seputar dunia sipil & konstruksi (lihat bagian berikut).

## 3b. Mengisi berkas di Pusat Unduh (aplikasi / form / e-book)

Halaman `unduh.html` punya 6 kotak (2 per kategori: Contoh Aplikasi, Form &amp; Formulir
Proyek, E-Book &amp; Panduan) dalam status "Segera Tersedia" (tombol belum bisa diklik).
Setelah berkasnya siap:

1. Buat folder baru bernama `unduhan/` di lokasi file website ini, taruh berkasnya di
   dalamnya, misal `unduhan/form-laporan-harian.pdf` atau `unduhan/absensi-tukang.xlsx`.
2. Di `unduh.html`, cari blok item yang sesuai, lalu:
   - Ganti `<span class="doc-btn" title="Berkas menyusul">Unduh</span>`
     menjadi `<a class="doc-btn is-ready" href="unduhan/nama-file.pdf" download>Unduh</a>`
     (sesuaikan nama file-nya).
   - Ganti `<span class="badge badge-pending">Segera Tersedia</span>`
     menjadi `<span class="badge badge-ready">Tersedia</span>`.
3. Ulangi untuk tiap item yang sudah siap. Boleh tambah kotak baru (copy-paste satu blok
   `.doc-card`) kalau ada bahan lain yang mau ditambahkan.

## 4. Menyambungkan form (Kontak & Pesan Order)

Form di `kontak.html` dan form permintaan penawaran di `pesan-order.html` saat ini
**belum terhubung ke mana pun** (cuma tampilan). Cara tercepat menyambungkannya tanpa
bikin server sendiri: pakai layanan gratis **Formspree** (formspree.io):

1. Daftar gratis di formspree.io, buat form baru, kamu akan dapat sebuah URL seperti
   `https://formspree.io/f/xxxxxxx`. Boleh pakai form Formspree yang sama untuk kedua
   halaman, atau buat dua form terpisah supaya lebih mudah dibedakan saat masuk ke email.
2. Di `kontak.html` **dan** `pesan-order.html`, cari baris:
   ```html
   <form class="contact-form" onsubmit="alert('Form ini masih contoh tampilan...'); return false;">
   ```
   Ganti jadi:
   ```html
   <form class="contact-form" action="https://formspree.io/f/xxxxxxx" method="POST">
   ```
   (hapus juga atribut `onsubmit` di atas).
3. Selesai — pesan yang dikirim lewat form akan masuk ke email kamu.

Alternatif lebih sederhana: ganti tombol kirim jadi tautan langsung ke WhatsApp,
misal `<a href="https://wa.me/6285273612221" class="btn btn-primary">Chat via WhatsApp</a>`
(nomor WA CV. Pattimura Utama sudah dipakai di halaman Kontak juga).

## 5. Mengedit konten halaman "Seputar Dunia Konstruksi"

Halaman `dunia-konstruksi.html` berisi konten edukasi statis (tahapan proyek, glosarium
istilah, gambaran perizinan, tips memilih kontraktor) yang sudah disusun sebagai draf awal.
Untuk mengubah teksnya, cukup edit langsung isi tag `<h3>`/`<p>`/`<dd>` di file tersebut —
tidak ada sistem blog atau database, murni HTML seperti halaman lain.

## 6. Mengganti logo

Logo saat ini berupa inisial "PU" dalam kotak (dibuat dari CSS, bukan gambar). Kalau mau
pakai logo gambar sendiri, cari blok ini di tiap file `.html` (bagian header):
```html
<div class="brand-mark"><span>PU</span></div>
```
Ganti jadi:
```html
<img src="logo.png" style="width:40px;height:40px;object-fit:contain;" />
```
(taruh file `logo.png` di folder yang sama dulu).

## 7. Deploy ke internet

Website ini sudah live di **pattimurautama.com** lewat Vercel. Untuk update, cukup unggah
ulang file yang sudah diedit ke tempat kode website (repo GitHub yang terhubung ke Vercel,
atau lewat cara upload yang biasa dipakai) — Vercel akan otomatis build ulang.

Kalau butuh mulai dari nol di layanan lain, cara termudah **Netlify Drop**:
1. Buka **app.netlify.com/drop** di browser.
2. **Drag & drop** seluruh folder ini ke halaman tersebut (atau upload lewat tombol pilih file).
3. Selesai dalam hitungan detik — langsung dapat alamat gratis seperti
   `https://nama-acak.netlify.app`.

## 8. Catatan desain — ilustrasi "aktivitas proyek" &amp; slot foto asli

Karena sesi ini tidak bisa mengambil foto asli dari internet maupun membuat gambar AI,
visual "orang, bangunan, alat berat" di website dibuat sebagai **ilustrasi vektor
orisinal** (SVG + CSS, bukan foto), dengan dua lapisan:

- **Ilustrasi utama berwarna** (`.hero-illustration`, terlihat di halaman **Beranda**
  dan **Tentang**) — adegan penuh warna: pekerja bertopi &amp; rompi keselamatan oranye,
  alat berat (ekskavator), tower crane, dan gedung dalam tahap pembangunan.
- **Latar ambient** (`.site-scene`, tampil lebih halus di semua 8 halaman) — versi lebih
  ringan dari elemen yang sama (pekerja, crane, scaffolding, ekskavator, gedung),
  dengan aksen warna oranye pada rompi &amp; badan alat berat.

Kalau nanti sudah ada **foto proyek/tim asli** beresolusi tinggi, ini cara memasangnya:

1. **Slot foto siap pakai** — halaman `portofolio.html` (6 kotak) dan bagian "Momen di
   Lapangan" di `index.html` (3 kotak) sudah dirancang sebagai slot foto (ikon kamera +
   label), tinggal diganti. Taruh file foto di folder baru `foto/`, lalu di tiap kotak
   cari blok:
   ```html
   <div class="port-media ph-stack" ...>...</div>
   ```
   Ganti jadi (contoh):
   ```html
   <div class="port-media" style="background:none;">
     <img src="foto/nama-file.jpg" style="width:100%;height:100%;object-fit:cover;" />
   </div>
   ```
2. **Mengganti ilustrasi hero dengan foto** — kalau suatu saat ingin memakai foto asli
   sebagai gambar hero (bukan ilustrasi), di `index.html`/`tentang.html` cari
   `<div class="hero-illustration">...</div>` dan ganti isinya dengan
   `<img src="foto/hero.jpg" style="width:100%;height:100%;object-fit:cover;" />`.

---

Kalau ada bagian yang bingung saat mengisi atau deploy, kirim pesan/screenshot-nya —
akan dibantu langkah demi langkah.
