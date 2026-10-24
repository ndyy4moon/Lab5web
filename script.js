function latihan1() {
  document.getElementById("pesan").textContent = "Hello World";
  console.log("Hello World");
}

function latihan2() {
  const namaPengguna = prompt("Masukkan nama Anda:", "");

  if (namaPengguna && namaPengguna.trim() !== "") {
    alert("Halo, " + namaPengguna + "!");
    document.getElementById("pesan").textContent =
      "Selamat datang, " + namaPengguna + ".";
  } else {
    alert("Nama belum diisi.");
  }
}

// Latihan 3 dan Eksperimen Mandiri 1
function latihan3() {
  const inputA = prompt("Masukkan nilai pertama:");
  if (inputA === null || inputA.trim() === "") return;

  const inputB = prompt("Masukkan nilai kedua:");
  if (inputB === null || inputB.trim() === "") return;

  const a = Number(inputA);
  const b = Number(inputB);

  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    alert("Masukkan angka yang valid.");
    return;
  }

  console.log("Penjumlahan:", a + b);
  console.log("Pengurangan:", a - b);
  console.log("Perkalian:", a * b);
  console.log("Pembagian:", b !== 0 ? a / b : "Tidak dapat dibagi nol");
  console.log("Modulus:", a % b);
}

// Latihan 4
function latihan4() {
  const inputNilai = prompt("Masukkan nilai mahasiswa:");

  if (inputNilai === null || inputNilai.trim() === "") return;

  const nilai = Number(inputNilai);

  if (!Number.isFinite(nilai)) {
    alert("Masukkan nilai yang valid.");
  } else if (nilai >= 60) {
    alert("Lulus");
  } else {
    alert("Belum lulus");
  }
}

// Latihan 5
function latihan5() {
  const pilihan = prompt("Masukkan pilihan 1 sampai 5:");

  switch (pilihan) {
    case "1":
      alert("Pilihan satu");
      break;
    case "2":
      alert("Pilihan dua");
      break;
    case "3":
      alert("Pilihan tiga");
      break;
    case "4":
      alert("Pilihan empat");
      break;
    case "5":
      alert("Pilihan lima");
      break;
    default:
      alert("Pilihan tidak tersedia");
  }
}

// Latihan 6
function cekBilangan() {
  const input = document.getElementById("bilangan").value;
  const angka = Number(input);
  const hasil = document.getElementById("hasilBilangan");

  if (input.trim() === "" || !Number.isInteger(angka)) {
    hasil.textContent = "Masukkan bilangan bulat yang valid.";
  } else if (angka % 2 === 0) {
    hasil.textContent = "Bilangan genap";
  } else {
    hasil.textContent = "Bilangan ganjil";
  }
}

// Latihan 7 dan Eksperimen Mandiri 11
function ubahWarnaLatar(warna) {
  document.body.style.backgroundColor = warna;
}

// Latihan 8 dan Eksperimen Mandiri 10
const daftarMenu = document.querySelectorAll(".menu");

daftarMenu.forEach((item) => {
  item.addEventListener("change", hitungTotal);
});

function hitungTotal() {
  let total = 0;

  daftarMenu.forEach((item) => {
    if (item.checked) {
      total += Number(item.value);
    }
  });

  document.getElementById("total").textContent =
    total.toLocaleString("id-ID");
}

// Mini Project — Kalkulator Nilai Mahasiswa
function hitungNilaiAkhir(tugas, uts, uas) {
  return tugas * 0.30 + uts * 0.30 + uas * 0.40;
}

function tentukanPredikat(nilai) {
  if (nilai >= 85) return "A";
  if (nilai >= 75) return "B";
  if (nilai >= 60) return "C";
  if (nilai >= 50) return "D";
  return "E";
}

function hitungNilai() {
  const tugasInput = document.getElementById("nilaiTugas").value;
  const utsInput = document.getElementById("nilaiUTS").value;
  const uasInput = document.getElementById("nilaiUAS").value;
  const hasil = document.getElementById("hasilNilai");

  if (
    tugasInput.trim() === "" ||
    utsInput.trim() === "" ||
    uasInput.trim() === ""
  ) {
    hasil.textContent = "Semua nilai harus diisi.";
    return;
  }

  const tugas = Number(tugasInput);
  const uts = Number(utsInput);
  const uas = Number(uasInput);

  if (
    ![tugas, uts, uas].every(
      (nilai) => Number.isFinite(nilai) && nilai >= 0 && nilai <= 100
    )
  ) {
    hasil.textContent = "Nilai harus berada antara 0 sampai 100.";
    return;
  }

  const akhir = hitungNilaiAkhir(tugas, uts, uas);
  const predikat = tentukanPredikat(akhir);
  const status = akhir >= 60 ? "Lulus" : "Belum lulus";

  hasil.textContent =
    "Nilai Akhir: " + akhir.toFixed(2) +
    " | Predikat: " + predikat +
    " | Status: " + status;
}

// Eksperimen Mandiri 9 — Validasi Form
function validasiForm() {
  const nama = document.getElementById("nama").value;
  const hasil = document.getElementById("hasilValidasi");

  if (nama.trim() === "") {
    hasil.textContent = "Nama tidak boleh kosong.";
  } else {
    hasil.textContent = "Form berhasil dikirim. Halo, " + nama + "!";
  }
}

// Eksperimen Mandiri 8 — Cek bilangan genap
function cekGenap(angka) {
  return angka % 2 === 0;
}

console.log("Cek genap 4:", cekGenap(4));
console.log("Cek genap 7:", cekGenap(7));

// Eksperimen Mandiri 7 — Perkalian 7
for (let i = 1; i <= 10; i++) {
  console.log("7 x " + i + " = " + (7 * i));
}

// Eksperimen Mandiri 11 — Sembunyikan dan tampilkan teks
function sembunyikanTeks() {
  document.getElementById("teksSembunyi").style.display = "none";
}

function tampilkanTeks() {
  document.getElementById("teksSembunyi").style.display = "block";
}
