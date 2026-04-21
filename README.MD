# Playwright Automation Framework - Sauce Demo

## Description

**Automation Playwright**, repository ini berisi kumpulan script pengujian end-to-end (E2E) otomatis yang dibangun menggunakan [Playwright](https://playwright.dev/). Framework ini dirancang dengan pola **Page Object Model (POM)** untuk memastikan kode pengujian yang modular, mudah dipelihara, dan dapat digunakan kembali.

---

## 🧪 Cakupan Fitur yang Diuji (Test Scope)

### Login Suites (`saucedemo_login.spec.js`)
- **Test Login Positive Flow**: Memastikan pengguna dapat login dengan kredensial yang valid.
- **Test Login Negative Flow - Incorrect Username or Password**: Verifikasi pesan kesalahan saat memasukkan kredensial salah.
- **Test Login Negative Flow – Mandatory Field Username**: Validasi pesan error ketika username dikosongkan.
- **Test Login Negative Flow – Mandatory Field Password**: Validasi pesan error ketika password dikosongkan.

### E2E Test Suite Sauce Demo (`saucedemo_pom.spec.js`)
- **Should complete a purchase successfully**: Alur penuh mulai dari login, memilih produk, mengisi informasi pengiriman, hingga menyelesaikan transaksi.
- **Should verify cart badge updates**: Memastikan indikator jumlah item di keranjang belanja diperbarui dengan benar saat produk ditambahkan.

---

## 🚀 How to Setup

Ikuti langkah-langkah berikut untuk menyiapkan lingkungan pengujian lokal Anda:

1.  **Clone Repository**
    ```bash
    git clone https://github.com/fawziridwan/playwright-web-assesment.git
    cd playwright-web
    ```

2.  **Install Dependencies**
    Pastikan Anda telah menginstal [Node.js](https://nodejs.org/). Kemudian jalankan:
    ```bash
    npm install
    ```

3.  **Install Playwright Browsers**
    Instal browser yang diperlukan oleh Playwright (Chromium, Firefox, Webkit):
    ```bash
    npx playwright install
    ```

---

## 🛠️ How to Run

Anda dapat menjalankan pengujian menggunakan berbagai perintah yang tersedia di `package.json`:

| Tujuan | Perintah |
| :--- | :--- |
| Jalankan semua pengujian | `npm test` |
| Jalankan pengujian Login saja | `npm run test-login` |
| Buka Playwright UI Mode | `npm run test:ui` |
| Jalankan dalam Mode Debug | `npm run test:debug` |
| Tampilkan Laporan (HTML Report) | `npm run test:report` |

---

## 📁 Struktur Proyek

- `pages/`: Berisi kelas-kelas Page Object (LoginPage, InventoryPage, dll).
- `tests/`: Berisi file spesifikasi pengujian (`.spec.js`).
- `utils/`: Fungsi pembantu atau utilitas (jika ada).
- `playwright.config.js`: Konfigurasi global Playwright.

---

**Happy Testing!** 🎭
