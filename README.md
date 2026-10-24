# LAPORAN PRAKTIKUM 5
## JAVASCRIPT DASAR

## A. Deskripsi Praktikum

Praktikum 5 membahas dasar-dasar JavaScript untuk membuat halaman web menjadi interaktif. Pada praktikum ini dilakukan latihan penggunaan output, input, operator aritmetika, percabangan, switch, pengecekan bilangan genap dan ganjil, perubahan warna latar, serta perhitungan total harga menu.

Selain latihan dasar, praktikum ini juga mencakup Mini Project Kalkulator Nilai Mahasiswa dan eksperimen mandiri untuk melatih pemahaman penggunaan JavaScript.

## B. Tujuan Praktikum

1. Memahami dasar penggunaan JavaScript pada halaman web.
2. Menampilkan output menggunakan JavaScript.
3. Menggunakan prompt dan alert untuk berinteraksi dengan pengguna.
4. Memahami operator aritmetika dan percabangan.
5. Menggunakan switch untuk memproses pilihan.
6. Membuat halaman web yang interaktif.
7. Melakukan validasi input pengguna.
8. Menerapkan JavaScript dalam mini project.

## C. Alat dan Bahan

- Laptop atau komputer
- Visual Studio Code
- Google Chrome atau web browser lainnya
- HTML
- JavaScript

## D. Struktur Folder

```text
Lab5Web/
├── index.html
├── script.js
├── README.md
└── image/
    ├── Latihan1.png
    ├── Latihan2.png
    ├── Latihan3.png
    ├── Latihan4.png
    ├── Latihan5.png
    ├── Latihan6.png
    ├── Latihan7.png
    ├── Latihan8.png
    ├── MiniProject.png
    ├── Eksperimen1.png
    ├── Eksperimen7.png
    ├── Eksperimen8.png
    ├── Eksperimen9.png
    ├── Eksperimen10.png
    └── Eksperimen11.png
```

## E. Langkah-Langkah Praktikum

1. Membuat folder praktikum dengan nama `Lab5Web`.
2. Membuat file `index.html` sebagai halaman utama.
3. Membuat file `script.js` untuk menuliskan kode JavaScript.
4. Menghubungkan file JavaScript ke HTML.
5. Menjalankan halaman HTML melalui browser.
6. Mengerjakan Latihan 1 sampai Latihan 8.
7. Membuat Mini Project Kalkulator Nilai Mahasiswa.
8. Mengerjakan eksperimen mandiri sesuai modul.
9. Menguji fungsi JavaScript melalui browser dan Console.
10. Mengambil screenshot hasil latihan dan eksperimen.
11. Menyimpan screenshot ke folder `image`.
12. Mengunggah file praktikum ke repository GitHub.

## F. Hasil Praktikum

### 1. Latihan 1 — Menampilkan Output

Latihan ini menggunakan JavaScript untuk menampilkan tulisan Hello World pada halaman web dan Console browser.

![Latihan 1](image/Latihan1.png)

### 2. Latihan 2 — Alert dan Prompt

Latihan ini menggunakan `prompt()` untuk meminta nama pengguna dan `alert()` untuk menampilkan pesan sapaan.

![Latihan 2](image/Latihan2.png)
![Latihan 2](image/Latihan2.1.png)
![Latihan 2](image/Latihan2.2.png)


### 3. Latihan 3 — Operator Aritmetika

Latihan ini melakukan operasi penjumlahan, pengurangan, perkalian, pembagian, dan modulus menggunakan dua bilangan yang dimasukkan pengguna.

![Latihan 3](image/Latihan3.png)

### 4. Latihan 4 — Percabangan If-Else

Latihan ini menggunakan percabangan `if-else` untuk menentukan apakah mahasiswa lulus atau belum lulus berdasarkan nilai yang dimasukkan.

![Latihan 4](image/Latihan4.png)
![Latihan 4](image/Latihan4.1.png)
![Latihan 4](image/Latihan4.2.png)
![Latihan 4](image/Latihan4.3.png)
![Latihan 4](image/Latihan4.4.png)

### 5. Latihan 5 — Switch

Latihan ini menggunakan `switch` untuk memproses pilihan angka 1 sampai 5 dan menampilkan pesan sesuai pilihan pengguna.

![Latihan 5](image/Latihan5.png)
![Latihan 5](image/Latihan5.1.png)
![Latihan 5](image/Latihan5.2.png)
![Latihan 5](image/Latihan5.3.png)
![Latihan 5](image/Latihan5.4.png)
![Latihan 5](image/Latihan5.5.png)

### 6. Latihan 6 — Bilangan Genap dan Ganjil

Latihan ini memeriksa bilangan bulat yang dimasukkan pengguna dan menampilkan apakah bilangan tersebut genap atau ganjil.

![Latihan 6](image/Latihan6.png)
![Latihan 6](image/Latihan6.1.png)
![Latihan 6](image/Latihan6.2.png)
![Latihan 6](image/Latihan6.3.png)

### 7. Latihan 7 — Mengubah Warna Latar

Latihan ini menggunakan tombol untuk mengubah warna latar halaman web menjadi warna yang dipilih.

![Latihan 7](image/Latihan7.png)
![Latihan 7](image/Latihan7.1.png)
![Latihan 7](image/Latihan7.2.png)

### 8. Latihan 8 — Menghitung Total Menu

Latihan ini menggunakan checkbox untuk memilih menu makanan dan menghitung total harga dari menu yang dipilih secara otomatis.

![Latihan 8](image/Latihan8.png)

## G. Mini Project — Kalkulator Nilai Mahasiswa

Mini project ini digunakan untuk menghitung nilai akhir mahasiswa berdasarkan nilai tugas, UTS, dan UAS.

Bobot penilaian:

- Tugas: 30%
- UTS: 30%
- UAS: 40%

Rumus perhitungan:

`Nilai Akhir = (Tugas × 0.30) + (UTS × 0.30) + (UAS × 0.40)`

Predikat nilai:

| Nilai Akhir | Predikat |
|---|---|
| 85–100 | A |
| 75–84,99 | B |
| 60–74,99 | C |
| 50–59,99 | D |
| Di bawah 50 | E |

Program melakukan validasi agar semua nilai diisi dan berada pada rentang 0 sampai 100. Hasil perhitungan menampilkan nilai akhir, predikat, dan status kelulusan.

![Latihan 9](image/Latihan9.png)
![Latihan 9](image/Latihan9.1.png)
![Latihan 9](image/Latihan9.2.png)
![Latihan 9](image/Latihan9.3.png)

## H. Eksperimen Mandiri

### 1. Eksperimen 1 — Modifikasi Operator Aritmetika

Eksperimen ini memodifikasi Latihan 3 agar pengguna dapat memasukkan dua bilangan melalui `prompt()`. Input kemudian diubah menjadi angka untuk melakukan operasi aritmetika.

![Eksperimen 1](image/Eksperimen1.png)

### 2. Eksperimen 7 — Tabel Perkalian 7

Eksperimen ini menggunakan perulangan untuk menampilkan tabel perkalian 7 dari 1 sampai 10 pada Console browser.

![Eksperimen 7](image/Eksperimen7.png)

### 3. Eksperimen 8 — Fungsi Cek Bilangan Genap

Eksperimen ini membuat fungsi `cekGenap(angka)` yang mengembalikan `true` jika bilangan genap dan `false` jika bilangan ganjil.

![Eksperimen 8](image/Eksperimen8.png)

### 4. Eksperimen 9 — Validasi Form

Eksperimen ini memastikan kolom nama tidak boleh kosong. Jika kolom belum diisi, program menampilkan pesan bahwa nama harus diisi.

![Eksperimen 9](image/Eksperimen9.png)
![Eksperimen 9](image/Eksperimen9.1.png)

### 5. Eksperimen 10 — Menambahkan Pilihan Menu

Eksperimen ini menambahkan pilihan menu beserta harga pada Latihan 8. Total harga berubah sesuai menu yang dipilih pengguna.

![Eksperimen 10](image/Eksperimen10.png)

### 6. Eksperimen 11 — Menyembunyikan dan Menampilkan Elemen

Eksperimen ini menggunakan tombol untuk menyembunyikan dan menampilkan kembali elemen teks pada halaman web.

![Eksperimen 11](image/Eksperimen11.png)
![Eksperimen 11](image/Eksperimen11.1.png)

## I. Cara Menjalankan Program

1. Buka folder `Lab5Web` menggunakan Visual Studio Code.
2. Pastikan file `index.html` dan `script.js` berada dalam folder yang sama.
3. Buka file `index.html` melalui browser.
4. Klik tombol latihan untuk menjalankan fungsi yang tersedia.
5. Untuk melihat output Console, tekan `F12` lalu pilih tab Console.
6. Uji setiap latihan untuk memastikan program berjalan dengan baik.

## J. Kesimpulan

Berdasarkan praktikum yang telah dilakukan, JavaScript dapat digunakan untuk membuat halaman web menjadi interaktif. Praktikum ini membantu memahami penggunaan output, input, operator aritmetika, percabangan, switch, perulangan, fungsi, validasi form, dan manipulasi elemen HTML.

Melalui Mini Project Kalkulator Nilai Mahasiswa, JavaScript juga dapat digunakan untuk mengolah nilai, menghitung nilai akhir, menentukan predikat, dan menampilkan status kelulusan secara otomatis.