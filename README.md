# 🚀 Huawei Modem Manager Extension

Ekstensi Chrome untuk menampilkan panel manajer canggih di atas halaman admin modem Huawei Anda. Dapatkan data sinyal teknis (RSRP, SINR, Cell ID) secara *real-time* dan akses fitur tersembunyi seperti *band locking*, *restart*, dan lainnya, langsung dari ikon browser Anda.

Ini adalah versi "ekstensi" yang lebih praktis dari skrip *bookmarklet* populer, sehingga Anda tidak perlu lagi melakukan *copy-paste* ke console.

## 📸 Tampilan

<img width="1920" height="1050" alt="image" src="https://github.com/user-attachments/assets/32c918db-8027-4eef-b33c-c634c1feed48" />


## ✨ Fitur Utama

* **Data Sinyal Real-Time:** Pantau parameter sinyal 4G (RSRP, RSRQ, SINR) dan 5G (nrRSRP, dll.) secara langsung.
* **Informasi Jaringan:** Tampilkan Cell ID, eNBID, Frekuensi, dan Bandwidth.
* **Kontrol Band (Band Lock):** Pilih dan kunci band 4G (FDD/TDD) atau 3G tertentu.
* **Kontrol Mode Jaringan:** Paksa ke mode 4G, 3G, atau 5G (termasuk NSA/SA).
* **Kontrol Perangkat:** Akses cepat untuk **Restart**, **ShutDown**, atau **Reset Pabrik** modem.
* **Info Perangkat:** Menampilkan model, versi software, dan status antena.
* **Aktivasi Sekali Klik:** Cukup klik ikon ekstensi untuk memunculkan/menyembunyikan panel.

---

## ⚙️ Instalasi (Wajib Dibaca)

Ekstensi ini tidak dipublikasikan di Chrome Web Store. Anda harus memuatnya secara manual menggunakan "Developer Mode".

1.  **Unduh Repositori Ini:**
    * Klik tombol hijau **"< > Code"** di halaman GitHub ini.
    * Pilih **"Download ZIP"**.
    * Ekstrak file ZIP tersebut ke sebuah folder permanen di komputer Anda (misalnya, di `C:\Alat\huawei-manager`).

2.  **Buka Halaman Ekstensi Chrome:**
    * Buka browser Chrome Anda.
    * Ketik `chrome://extensions` di bilah alamat dan tekan **Enter**.

3.  **Aktifkan Mode Pengembang:**
    * Di pojok kanan atas halaman, aktifkan tombol **"Developer mode" (Mode pengembang)**.

    

4.  **Muat Ekstensi:**
    * Sebuah tombol baru akan muncul. Klik **"Load unpacked" (Muat yang belum dibuka)**.
    * Arahkan dan **pilih folder** tempat Anda mengekstrak file tadi (folder yang berisi file `manifest.json`).

5.  **Selesai!** Ekstensi "Huawei Modem Manager" akan muncul di daftar Anda.

---

## ▶️ Cara Penggunaan

1.  (Sangat disarankan) Klik ikon "Ekstensi" (seperti potongan puzzle) di bilah alat Chrome Anda dan **Pin** "Huawei Modem Manager" agar selalu terlihat.
2.  Buka tab baru dan **login ke halaman admin modem Huawei** Anda seperti biasa (contoh: `http://192.168.8.1`).
3.  Setelah Anda berada di halaman *dashboard* modem...
4.  **Klik ikon ekstensi Huawei Modem Manager** yang sudah Anda pin tadi.
5.  Panel manajer akan segera muncul di bagian atas halaman Anda.

---

## ⚠️ Peringatan Penting & Kustomisasi

### 1. Alamat IP Modem Anda

Ekstensi ini diatur untuk bekerja pada alamat `http://192.168.8.1`.

**Jika modem Anda menggunakan alamat IP yang berbeda** (misalnya, `http://192.168.1.1` atau `http://192.168.100.1`):

1.  Buka folder ekstensi yang sudah Anda ekstrak.
2.  Buka file `manifest.json` dengan Notepad atau editor teks.
3.  Cari baris `"host_permissions"`:
    ```json
    "host_permissions": [
      "[http://192.168.8.1/](http://192.168.8.1/)*"
    ],
    ```
4.  Ubah alamat IP tersebut agar sesuai dengan modem Anda.
5.  Buka juga file `background.js` dan ubah alamat IP di baris ini:
    ```javascript
    if (tab.url.startsWith("[http://192.168.8.1/](http://192.168.8.1/)")) {
    ```
6.  Simpan kedua file tersebut.
7.  Kembali ke halaman `chrome://extensions`, cari ekstensi ini, dan klik tombol **"Muat Ulang" (Reload)**.

### 2. Risiko Penggunaan

Skrip ini memberi Anda akses ke fitur canggih. Fitur seperti **"Restore Default Settings" (Reset Pabrik)** atau **"ShutDown"** dapat membuat modem Anda tidak terjangkau atau menghapus semua konfigurasi (WiFi, APN, dll.).
