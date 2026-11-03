# 🎁 Website Ulang Tahun Pacar (Aesthetic & Minimalist) ✨

Website interaktif spesial ulang tahun yang dirancang dengan gaya **minimalis, estetik, hangat, dan lucu**. Dibuat khusus agar pacar kamu merasa sangat dihargai dan bahagia di hari ulang tahunnya.

---

## 🌟 Fitur-Fitur Menarik di Dalam Web:
1. **Layar Pembuka Penuh Kejutan (Surprise Gate):**
   - Pop-up estetik dengan tombol *"Buka Kejutan 🎁"*.
   - Seketika memicu ledakan konfeti (*confetti cannon*) dan memulai pemutaran lagu kenangan berdua secara otomatis tanpa terblokir proteksi autoplay browser.
2. **Pemutar Musik Mengambang (Floating Music Player):**
   - Desain piringan hitam (*vinyl disc*) yang berputar saat musik diputar.
   - Bisa di-pause atau di-play kapan saja.
3. **Penghitung Waktu Bersama (Live Relationship Counter):**
   - Menghitung hari, jam, menit, dan detik sejak tanggal jadian / pertama kali kenal secara real-time.
4. **Kue Ulang Tahun Virtual & Tiup Lilin (Interactive Cake):**
   - Lilin dengan efek nyala api berkedip (*flickering flame*).
   - Tombol *"Tiup Lilin 🎂"* yang mematikan api, memunculkan efek kepulan asap, badai konfeti, dan doa harapan.
5. **Galeri Foto Polaroid Scrapbook:**
   - Foto bergaya polaroid dengan efek selotip washi tape, kemiringan artistik, dan bayangan lembut.
   - Bisa diklik untuk melihat foto dalam ukuran besar.
6. **Surat Cinta Kertas Klasik (Love Letter):**
   - Format surat bergaris dengan segel hati (*wax seal*) dan font tulisan tangan romantis.
7. **Amplop Interaktif: "Open When..." 💌:**
   - Amplop digital yang bisa dibuka saat pacar lagi kangen, lelah, bad mood, atau pas hari ultahnya.
8. **Alasan Kenapa Aku Sayang Kamu (Reasons Why I Love You):**
   - Kartu-kartu kecil bernomor berisi kata-kata manis.
9. **Tombol Peluk Virtual (Interactive Hugs):**
   - Pacar bisa menekan tombol hati untuk mengirim peluk virtual dengan animasi hati beterbangan.

---

## 📂 Struktur File:
```
birthday-gift/
├── index.html        # Kerangka utama tampilan website
├── style.css         # Styling estetik, font, dan efek animasi
├── config.js         # 🔥 TEMPAT KAMU EDIT SEMUA KONTEN (NAMA, FOTO, PESAN, LAGU)
├── script.js         # Logika interaktif, musik, tiup lilin, konfeti
├── README.md         # Petunjuk penggunaan & deployment
└── assets/           # Folder untuk menyimpan foto pribadi & file lagu MP3
```

---

## ✏️ Cara Mengedit Konten (Sangat Mudah!)
Kamu **hanya perlu membuka file `config.js`** menggunakan teks editor (Notepad, VS Code, atau editor pilihanmu).

1. **Ganti Nama Panggilan & Tanggal:**
   ```javascript
   girlfriendName: "Nama Pacar Kamu",
   birthdayDate: "2026-11-04",
   anniversaryDate: "2023-11-04", // Tanggal jadian/kenal
   ```

2. **Ganti Lagu Favorit:**
   - Simpan file MP3 lagu kalian di dalam folder `assets/` (misal: `assets/lagu-kita.mp3`).
   - Ubah di `config.js`:
     ```javascript
     music: {
       title: "Judul Lagu - Penyanyi",
       src: "assets/lagu-kita.mp3",
     }
     ```

3. **Ganti Foto Galeri:**
   - Masukkan foto-foto pacar atau foto berdua ke folder `assets/` (misal: `assets/foto1.jpg`, `assets/foto2.jpg`).
   - Ubah daftar foto di `config.js`:
     ```javascript
     photos: [
       {
         url: "assets/foto1.jpg",
         caption: "Waktu kencan pertama kita ☕",
         date: "Januari 2024"
       },
       ...
     ]
     ```

4. **Edit Surat & Pesan Amplop:**
   - Cari bagian `letter` dan `openWhenCards` di `config.js`, lalu tuliskan isi hatimu secara bebas!

---

## 🚀 Cara Melihat Web di Laptop Sendiri:
- Cukup **klik dua kali file `index.html`** untuk membukanya di browser (Chrome, Edge, dsb.).
- Atau bisa jalankan local server dengan perintah:
  ```bash
  python -m http.server 3000
  ```
  Lalu buka `http://localhost:3000` di browsermu.

---

## 🌐 Cara Online-kan Agar Bisa Dibuka Pacar di HP (100% Gratis & Cepat):

### Cara Termudah (Netlify Drop - Tanpa Perlu Koding):
1. Buka situs [https://app.netlify.com/drop](https://app.netlify.com/drop) di browsermu.
2. Buat akun gratis atau login (pakai Google/GitHub).
3. **Tarik (Drag & Drop) seluruh folder `birthday-gift`** ini ke kotak upload di Netlify Drop.
4. Dalam 5 detik, Netlify akan memberikan link website yang aktif (misal: `https://surprise-aura.netlify.app`).
5. Kamu bisa ubah nama link domainnya di menu **Site settings > Change site name** agar lebih estetik dan personal!
6. Kirim link tersebut ke pacar kamu tepat jam 00:00 malam nanti! 🎉

