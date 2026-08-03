# Website Pattimura Utama

Website profil perusahaan, 5 halaman: Beranda, Tentang, Layanan, Portofolio, Kontak.
**Website statis murni** — HTML/CSS/JS biasa, tidak perlu Node.js, tidak perlu `npm install`,
tidak perlu proses "build" apa pun. Tinggal upload filenya, langsung jalan.

## Struktur file
```
index.html        ← Beranda
tentang.html
layanan.html
portofolio.html
kontak.html
style.css          ← semua styling (satu file, dipakai bersama semua halaman)
script.js          ← untuk menu mobile (hamburger)
```

## 1. Yang WAJIB diisi sebelum publikasi

Cari teks berkurung siku `[ ... ]` di file-file berikut, ganti dengan data asli:

- **Semua file `.html`** (bagian footer, paling bawah tiap halaman):
  - `[Isi alamat kantor Anda]`
  - `[Isi nomor telepon/WA]`
  - `[Isi alamat email]`
- **`kontak.html`** juga punya bagian yang sama di tengah halaman (bagian "Kontak").
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

## 3. Menyambungkan form kontak (opsional tapi disarankan)

Form di `kontak.html` saat ini **belum terhubung ke mana pun** (cuma tampilan). Cara
tercepat menyambungkannya tanpa bikin server sendiri: pakai layanan gratis
**Formspree** (formspree.io):

1. Daftar gratis di formspree.io, buat form baru, kamu akan dapat sebuah URL seperti
   `https://formspree.io/f/xxxxxxx`.
2. Di `kontak.html`, cari baris:
   ```html
   <form class="contact-form" onsubmit="alert('Form ini masih contoh tampilan...'); return false;">
   ```
   Ganti jadi:
   ```html
   <form class="contact-form" action="https://formspree.io/f/xxxxxxx" method="POST">
   ```
   (hapus juga atribut `onsubmit` di atas).
3. Selesai — pesan yang dikirim lewat form akan masuk ke email kamu.

Alternatif lebih sederhana: ganti tombol "Kirim Pesan" jadi tautan langsung ke WhatsApp,
misal `<a href="https://wa.me/62812xxxxxxx" class="btn btn-primary">Chat via WhatsApp</a>`.

## 4. Mengganti logo

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

## 5. Deploy ke internet (gratis)

Website ini **lebih mudah** di-deploy dibanding aplikasi Absensi Tukang, karena tidak
butuh environment variable atau proses build sama sekali.

### Cara termudah — Netlify Drop
1. Buka **app.netlify.com/drop** di browser.
2. **Drag & drop** seluruh folder ini ke halaman tersebut (atau upload lewat tombol pilih file).
3. Selesai dalam hitungan detik — langsung dapat alamat gratis seperti
   `https://nama-acak.netlify.app`.
4. Bisa ganti nama subdomain-nya lewat "Site settings" → "Change site name".

### Alternatif — GitHub + Vercel (sama seperti panduan aplikasi Absensi Tukang)
1. Upload semua file ini ke repository GitHub baru (boleh public, tidak ada data rahasia
   di sini — beda dengan proyek aplikasi Absensi Tukang).
2. Import repo itu di vercel.com. **Tidak perlu isi Environment Variables** apa pun.
3. Deploy.

## 6. Menghubungkan domain sendiri (.com dll)

Sama seperti panduan sebelumnya untuk aplikasi Absensi Tukang: beli domain (Niagahoster,
Rumahweb, dll), lalu di Netlify/Vercel buka menu Domains, tambahkan domain kamu, ikuti
instruksi pengaturan DNS yang diberikan.

---

Kalau ada bagian yang bingung saat mengisi atau deploy, kirim pesan/screenshot-nya —
akan dibantu langkah demi langkah.
