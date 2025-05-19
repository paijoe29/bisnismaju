

## Teknologi yang Digunakan

*   **React**: Library JavaScript untuk membangun antarmuka pengguna.
*   **Vite**: Alat build frontend generasi berikutnya yang sangat cepat.
*   **TypeScript**: Superset JavaScript yang menambahkan pengetikan statis.
*   **Tailwind CSS**: Framework CSS utility-first untuk desain yang cepat.
*   **shadcn/ui**: Kumpulan komponen UI yang dapat digunakan kembali, dibangun dengan Radix UI dan Tailwind CSS.
*   **React Router**: Untuk routing sisi klien.
*   **Lucide React**: Pustaka ikon yang indah dan konsisten.

## Struktur Proyek

*   `public/`: Aset statis.
*   `src/`: Kode sumber aplikasi.
    *   `components/`: Komponen React yang dapat digunakan kembali.
        *   `ui/`: Komponen UI dari shadcn/ui.
        *   File komponen kustom lainnya (misalnya, `HeroSection.tsx`, `Navbar.tsx`, dll.).
    *   `hooks/`: Custom React hooks.
    *   `lib/`: Fungsi utilitas (misalnya, `utils.ts` untuk `cn`).
    *   `pages/`: Komponen halaman (misalnya, `Index.tsx`, `NotFound.tsx`).
    *   `App.tsx`: Komponen root aplikasi, mengatur routing.
    *   `main.tsx`: Titik masuk aplikasi.
    *   `globals.css`: Gaya global dan konfigurasi Tailwind.
*   `index.html`: File HTML utama.
*   `package.json`: Daftar dependensi dan skrip proyek.
*   `vite.config.ts`: Konfigurasi Vite.
*   `tailwind.config.ts`: Konfigurasi Tailwind CSS.
*   `postcss.config.js`: Konfigurasi PostCSS.
*   `tsconfig.json`: Konfigurasi TypeScript.

## Memulai

Pastikan Anda memiliki [Node.js](https://nodejs.org/) (versi 18 atau lebih baru direkomendasikan) dan npm (atau yarn) terinstal di sistem Anda.

1.  **Clone Repositori (Jika sudah di GitHub)**
    ```bash
    git clone [URL_REPOSITORI_ANDA]
    cd [NAMA_DIREKTORI_PROYEK]
    ```

2.  **Instal Dependensi**
    Gunakan npm untuk menginstal semua paket yang dibutuhkan:
    ```bash
    npm install
    ```
    Atau jika Anda menggunakan yarn:
    ```bash
    yarn install
    ```

3.  **Jalankan Server Pengembangan**
    Untuk memulai server pengembangan Vite (biasanya berjalan di `http://localhost:8080`):
    ```bash
    npm run dev
    ```
    Atau dengan yarn:
    ```bash
    yarn dev
    ```
    Aplikasi akan otomatis terbuka di browser Anda dan akan memuat ulang saat Anda membuat perubahan pada kode.

4.  **Build untuk Produksi**
    Untuk membuat build produksi yang dioptimalkan dari aplikasi Anda (output akan ada di direktori `dist/`):
    ```bash
    npm run build
    ```
    Atau dengan yarn:
    ```bash
    yarn build
    ```

5.  **Pratinjau Build Produksi**
    Untuk melihat build produksi secara lokal:
    ```bash
    npm run preview
    ```
    Atau dengan yarn:
    ```bash
    yarn preview
    ```

## Fitur Utama Landing Page

*   **Navbar Responsif**: Navigasi yang mudah diakses di berbagai ukuran layar.
*   **Hero Section**: Bagian pembuka yang menarik dengan ajakan bertindak.
*   **Problem/Pain Points Section**: Mengidentifikasi masalah yang dihadapi target audiens.
*   **Solution Section**: Menjelaskan bagaimana produk/layanan mengatasi masalah tersebut.
*   **Key Features Section**: Menyoroti fitur-fitur utama.
*   **Use Cases Section**: Menunjukkan berbagai skenario penggunaan.
*   **Pricing Section**: Menampilkan pilihan paket harga.
*   **FAQ Section**: Menjawab pertanyaan umum.
*   **Secondary CTA Section**: Ajakan bertindak tambahan.
*   **Newsletter Signup Section**: Formulir untuk berlangganan newsletter.
*   **Footer**: Informasi kontak dan tautan tambahan.
