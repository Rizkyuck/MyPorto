# Panduan Lengkap: Hosting Gratis & Pasang Domain .my.id

Website portofolio ini dirancang murni berbasis **Static Web (HTML5 + Tailwind CSS + Lucide Icons)** yang sangat ringan, cepat, dan **bisa dihosting 100% GRATIS seumur hidup** tanpa perlu beli paket web hosting bulanan yang mahal!

Anda hanya perlu keluar biaya untuk **beli domain** (misal `.my.id` sekitar Rp 10.000 - Rp 15.000 per TAHUN).

---

## 🖥️ 1. Cara Cek / Buka Website Ini Sekarang di Laptop

Cukup buka File Explorer, masuk ke folder:
```
C:\Users\advan\.gemini\antigravity\scratch\portfolio-rizky
```
Lalu **double-click** file `index.html`. Website akan langsung terbuka di browser (Chrome / Edge) Anda dengan tampilan responsif, animasi, dan foto asli Anda.

---

## 🌐 2. Pilihan Domain & Harga

| Ekstensi Domain | Perkiraan Harga / Tahun | Karakteristik & Rekomendasi |
| :--- | :--- | :--- |
| **`.my.id`** | **Rp 10.000 - Rp 15.000** | **Sangat Direkomendasikan!** Khusus personal branding warga Indonesia. Syarat hanya KTP/Identitas. Sangat murah untuk mahasiswa. Contoh: `rizkykurniawan.my.id`. |
| **`.com`** | Rp 130.000 - Rp 160.000 | Ekstensi paling populer di dunia, cocok jika ada budget lebih. Contoh: `rizkykurniawan.com`. |
| **`.id`** | Rp 200.000 - Rp 250.000 | Domain resmi Indonesia level teratas, terkesan sangat prestisius. |
| **`.tech` / `.site`** | Rp 20.000 - Rp 50.000 (Tahun ke-1) | Sering ada promo di tahun pertama, tahun berikutnya biasanya naik ke harga normal. |

> **Rekomendasi Terbaik:** Beli domain **`.my.id`** di registrar Indonesia seperti:
> - **DomaiNesia** (domainesia.com)
> - **Niagahoster** (niagahoster.co.id)
> - **IDCloudHost** (idcloudhost.com)

---

## 🚀 3. Cara Deploy Gratis ke Vercel (Paling Mudah, 2 Menit Jadi)

Platform hosting modern terbaik saat ini adalah **Vercel** (gratis untuk personal, include SSL HTTPS, CDN global super kencang).

### Cara A: Tanpa Koding (Drag and Drop via Vercel Dashboard)
1. Buka [vercel.com](https://vercel.com) lalu daftar/login menggunakan akun GitHub atau Email Anda.
2. Di dashboard Vercel, buka menu **Deploy a Project**.
3. Jika menggunakan Vercel CLI di terminal:
   ```bash
   npm i -g vercel
   cd C:\Users\advan\.gemini\antigravity\scratch\portfolio-rizky
   vercel
   ```
4. Website Anda langsung online dan mendapatkan link gratis seperti `portfolio-rizky.vercel.app`!

### Cara B: Via GitHub (Sangat Disukai HRD / Rekruter)
1. Buka [github.com](https://github.com), buat repository baru bernama `portfolio` (set Public).
2. Upload semua file dari folder `portfolio-rizky` (`index.html` dan folder `assets`) ke repository tersebut.
3. Buka [vercel.com](https://vercel.com) $\rightarrow$ klik **Add New Project** $\rightarrow$ pilih repository GitHub `portfolio`.
4. Klik tombol **Deploy**. Setiap kali Anda ubah file di GitHub, website di internet akan otomatis update sendiri (*CI/CD*)!

---

## 🔗 4. Cara Menyambungkan Domain `.my.id` ke Vercel

Setelah membeli domain (misal `rizkykurniawan.my.id`), sambungkan ke Vercel dengan langkah mudah ini:

1. Di dashboard **Vercel**:
   - Buka project Anda $\rightarrow$ **Settings** $\rightarrow$ **Domains**.
   - Ketik nama domain Anda: `rizkykurniawan.my.id`, lalu klik **Add**.
   - Vercel akan menampilkan petunjuk DNS Record:
     - **Type:** `A` | **Name:** `@` | **Value:** `76.76.21.21`
     - **Type:** `CNAME` | **Name:** `www` | **Value:** `cname.vercel-dns.com`

2. Di dashboard **Tempat Anda Beli Domain** (DomaiNesia / Niagahoster):
   - Masuk ke menu **DNS Management** domain Anda.
   - Tambahkan 2 record di atas:
     * Record 1: Type `A`, Host `@`, Destination `76.76.21.21`
     * Record 2: Type `CNAME`, Host `www`, Destination `cname.vercel-dns.com`
   - Klik **Simpan**.

3. Tunggu masa propagasi DNS (biasanya 5 menit sampai 1 jam). 
4. Domain `rizkykurniawan.my.id` Anda sudah aktif, dilengkapi gembok hijau HTTPS/SSL gratis dari Vercel!
