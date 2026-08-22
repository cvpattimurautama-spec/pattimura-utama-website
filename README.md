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

Alamat kantor, telepon/WA, email (gmail dan email bisnis), dan jam operasional
(Senin–Sabtu, 08.00–17.00 WIB) sudah diisi dengan data asli CV. Pattimura Utama di
footer semua halaman dan di halaman Kontak. Yang masih perlu dilengkapi:

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

Catatan: `unduh.html` ("Pusat Unduh") sekarang isinya kategori lain — form/formulir
proyek dan Standar Nasional Indonesia (SNI) seputar dunia sipil & konstruksi (lihat
bagian berikut).

## 3a. Struktur Perusahaan (halaman Tentang)

Di bawah kartu "Pimpinan Perusahaan", `tentang.html` sekarang juga menampilkan bagan
**Struktur Perusahaan** 4 tingkat:

1. **Direktur** — Parlin Hasibuan (kartu besar, sesuai Akta Pendirian No. 20, 07 Des 2018) —
   sudah pakai foto asli (`img/team/parlin-hasibuan.jpg`), juga dipasang di kartu
   "Pimpinan Perusahaan" di atasnya
2. **Project Manager** — Barry Franjaya (kartu besar, foto asli
   `img/team/barry-franjaya.jpg`)
3. **Quality Control (QC)** — Raja Ilham Hasibuan (kartu besar, foto asli
   `img/team/raja-ilham-hasibuan.jpg`)
4. Tim lapangan (kartu kecil, 4 kolom di desktop):
   Supervisor / Pelaksana Lapangan — Mulyawan; Senior Engineering — Sabar Sikumbang;
   Site Engineer — Romli; Driver — Bastian; Operator — Danaka; Logistik — Basri;
   Administrasi Proyek — M. Ridwansyah.

Semua 9 posisi (Direktur, Project Manager, QC, dan 6 tim lapangan) sudah pakai foto
asli, disimpan di folder `img/team/`: `parlin-hasibuan.jpg`, `barry-franjaya.jpg`,
`raja-ilham-hasibuan.jpg`, `mulyawan.jpg`, `sabar-sikumbang.jpg`, `romli.jpg`,
`bastian.jpg`, `basri.jpg`, `m-ridwansyah.jpg`, `danaka.jpg` — semuanya di-crop
otomatis jadi persegi/bulat fokus ke wajah.

Cari blok `<div class="org-chart">` di `tentang.html` untuk mengubah nama/jabatan,
foto, atau menambah/menghapus anggota — kartu besar (Direktur/PM/QC) pakai
`<div class="org-card">` (dalam `.row-1`), kartu tim kecil pakai
`<div class="org-card org-card-sm">` (dalam `.row-3`, styling ada di `style.css`,
cari `STRUKTUR PERUSAHAAN / ORG CHART`).

Sama seperti kartu legalitas di atas, bagian ini sengaja **tidak** menampilkan NIK/KTP
atau data pribadi lain — hanya nama dan jabatan, demi menjaga privasi.

## 3b. Mengisi berkas di Pusat Unduh (form / SNI)

Halaman `unduh.html` sekarang punya 2 bagian (kategori "Contoh Aplikasi" sudah
dihapus karena belum ada berkas asli untuk itu):

- **Form & Formulir Proyek** — 15 dari 16 formulir administrasi proyek sudah tersedia
  untuk dibaca online maupun diunduh (Form Laporan Harian, BAP Progress Subkon, Bon
  Pengambilan Material, CV Mandor, Daftar/Monitoring Shop Drawing & Material, Form
  Persetujuan Drawing & Material, Kartu Stok, Ijin Pelaksanaan Pekerjaan, Form K3, dan
  Form Monitoring Benda Uji Beton). Hanya "Form Checklist Serah Terima" yang masih
  menunggu berkas. Berkas-berkas ini awalnya diunggah pengguna dari template
  perusahaan lain (ada kop surat/logo & kode dokumen internal perusahaan tersebut) —
  sebelum dipasang, logo dan nama perusahaan lain itu sudah dihapus dari tiap file
  (lihat catatan hak cipta di bawah) sehingga jadi template polos.
- **Standar & Pedoman Teknis (SNI)** — 5 dokumen SNI resmi sudah tersedia untuk dibaca
  online (buka di tab baru) maupun diunduh, filenya ada di folder `unduhan/`: SNI
  0225:2000 (instalasi listrik), SNI 1972:2008 (uji slump beton), SNI 1973:2008 (berat
  isi & kadar udara beton), SNI 2052:2002 (baja tulangan beton), dan Tata Cara
  Perencanaan Struktur Baja untuk Bangunan Gedung.

Bagian "Bacaan Rekomendasi" yang sebelumnya berisi ~11 judul buku pihak lain (AutoCAD,
SAP2000, desain rumah & interior, dll) sudah **dihapus** — buku-buku itu terbitan
komersial/akademik berhak cipta (beberapa bahkan terkonfirmasi berasal dari situs
pembajakan), jadi tidak layak ditampilkan sama sekali di website, baik sebagai unduhan
maupun sekadar daftar. Kalau nanti ada bahan bacaan pengganti yang memang boleh
dibagikan bebas (tulisan sendiri, atau dokumen resmi pemerintah lain seperti SNI), bisa
ditambahkan dengan pola yang sama seperti dokumen SNI di atas.

Untuk menambah berkas baru di kategori Form Proyek, atau dokumen baru di kategori SNI,
setelah siap (atau untuk menghidupkan kembali kategori Contoh Aplikasi kalau nanti ada
berkasnya):

1. Taruh berkasnya di folder `unduhan/` (folder ini sudah ada, berisi 5 PDF SNI di atas).
2. Di `unduh.html`, cari blok item yang sesuai, lalu:
   - Ganti `<span class="doc-btn" title="Berkas menyusul">Unduh</span>`
     menjadi `<a class="doc-btn is-ready" href="unduhan/nama-file.pdf" target="_blank" rel="noopener">Baca / Unduh</a>`
     (sesuaikan nama file-nya).
   - Ganti `<span class="badge badge-pending">Segera Tersedia</span>`
     menjadi `<span class="badge badge-ready">Tersedia</span>`.
3. Boleh tambah kotak baru (copy-paste satu blok `.doc-card`) kalau ada bahan lain yang
   mau ditambahkan.

**Catatan hak cipta:** hanya unggah berkas yang memang boleh dibagikan bebas — dokumen
resmi pemerintah (seperti SNI) umumnya aman, tapi buku/e-book terbitan penerbit atau
hasil scan pihak lain jangan diunggah ke website ini sama sekali (risiko pelanggaran
hak cipta), baik sebagai unduhan maupun sekadar disebut namanya di halaman. Untuk
template formulir kerja yang berasal dari file perusahaan lain, logo dan nama
perusahaan tersebut wajib dihapus dulu (jadikan template polos) sebelum dipasang —
jangan pasang apa adanya kalau masih ada kop surat/nama perusahaan lain di dalamnya.
Satu file dari upload sebelumnya ("Laporan Mingguan Bulan 1.xls") sengaja **tidak**
dipakai sama sekali karena isinya laporan RAB proyek asli milik perusahaan lain
lengkap dengan nama pejabat dan NIP — bukan template kosong, jadi tidak layak
dipublikasikan dalam bentuk apa pun.

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

## 9. Google — supaya website terindeks

File `robots.txt` dan `sitemap.xml` sudah disiapkan di folder ini (mengizinkan semua
mesin pencari, dan mendaftar ke-8 halaman). Tiap halaman juga sudah punya meta
description, canonical URL, tag Open Graph, dan data terstruktur (`schema.org`
`GeneralContractor`) di `index.html` &amp; `kontak.html` agar Google lebih mudah
memahami identitas bisnisnya.

Submit sitemap ke Google **harus dilakukan lewat akun Google Search Console milik
Anda sendiri** — ini butuh login Google, jadi tidak bisa saya lakukan dari sini. Langkahnya:

1. **Deploy dulu** perubahan ini ke pattimurautama.com (lihat bagian 7), lalu pastikan
   `https://www.pattimurautama.com/sitemap.xml` dan `.../robots.txt` bisa dibuka di
   browser tanpa error.
2. Buka **search.google.com/search-console**, login dengan akun Google Anda.
3. Kalau properti `pattimurautama.com` belum ada: klik **Add Property** → pilih tipe
   **URL prefix** → masukkan `https://www.pattimurautama.com` → verifikasi kepemilikan
   (cara termudah lewat Vercel: pilih metode **HTML tag**, tempel meta tag yang
   diberikan Google ke bagian `<head>` tiap halaman, atau cukup di `index.html`, lalu
   deploy ulang dan klik Verify).
4. Setelah properti terverifikasi, buka menu **Sitemaps** di sidebar kiri → masukkan
   `sitemap.xml` di kolom → klik **Submit**.
5. (Opsional, biar lebih cepat terindeks) buka menu **URL Inspection**, tempel
   `https://www.pattimurautama.com/`, klik **Request Indexing** — ulangi untuk
   halaman-halaman penting lain seperti `/pesan-order.html` dan `/layanan.html`.

Indexing oleh Google biasanya makan waktu beberapa hari sampai beberapa minggu setelah
submit, bukan instan.

---

Kalau ada bagian yang bingung saat mengisi atau deploy, kirim pesan/screenshot-nya —
akan dibantu langkah demi langkah.
