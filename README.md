# 📟 Retro Terminal Portfolio

![Project Status](https://img.shields.io/badge/status-active-success)
![License](https://img.shields.io/badge/license-MIT-blue)
![Tech](https://img.shields.io/badge/stack-HTML%20%7C%20CSS%20%7C%20JS-yellow)

Sebuah website portofolio interaktif yang meniru tampilan antarmuka Command Line Interface (CLI) jadul dengan efek CRT monitor. Dibuat murni menggunakan Vanilla HTML, CSS, dan JavaScript.

Website ini dirancang agar ringan, cepat, dan memiliki fitur kustomisasi tema (Hacker, Catppuccin, Dracula, dll) secara real-time.

## ✨ Fitur Utama

* **💻 Interactive CLI:** Ketik perintah seperti `about`, `skills`, atau `projects` untuk melihat konten.
* **🎨 Multi-Theme System:** 5 Pilihan tema bawaan:
    * Hacker Green (Default)
    * Catppuccin Mocha (Pastel)
    * Dracula (Dark/Vampire)
    * Gruvbox (Retro Earthy)
    * Synthwave (Neon 80s)
* **⚙️ Settings Panel:** Menu pengaturan untuk mengaktifkan/menonaktifkan notifikasi sistem.
* **📺 CRT Effects:** Efek garis scanline dan flicker layar tabung yang realistis.
* **⚡ Typing Animation:** Efek mengetik otomatis pada output terminal.
* **💾 Local Storage:** Menyimpan preferensi tema dan pengaturan pengguna secara otomatis di browser.

## 🛠️ Persyaratan Sistem (Dependencies)

Proyek ini adalah *Static Web Site*, namun untuk pengalaman pengembangan lokal yang terbaik dan simulasi server production, kita menggunakan:

* **[Laragon](https://laragon.org/)** (WAMP/Universally Portable Environment)
    * Digunakan untuk menjalankan server **Apache** atau **Nginx**.
    * Fitur **Pretty URL** (misal: `http://portfolio.test`).

## 🚀 Instalasi & Menjalankan (Via Laragon)

Ikuti langkah-langkah berikut untuk menjalankan proyek ini menggunakan Laragon:

### 1. Persiapkan Laragon
Pastikan Laragon sudah terinstall dan berjalan di komputer Anda.
1. Buka aplikasi **Laragon**.
2. Klik tombol **Start All** untuk menjalankan web server (Apache/Nginx).

### 2. Penempatan File
Pindahkan folder proyek ini ke dalam direktori `www` milik Laragon.

* Lokasi default biasanya ada di: `C:\laragon\www\`
* Buat folder baru, misalnya bernama `portfolio`.
* Masukkan file `index.html`, `style.css`, dan `script.js` ke dalam folder tersebut.

Struktur folder akan terlihat seperti ini:
```text
C:\laragon\www\portfolio\
├── index.html
├── style.css
├── script.js
└── README.md