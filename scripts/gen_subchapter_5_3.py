import json

sub_5_3 = {
    "sub_chapter_id": "5.3",
    "module_id": "MOD-5",
    "module_name": "Data & Peluang",
    "title": "Aturan Perkalian & Pencacahan",
    "teori_definisi": r"""
### 1. Kaidah Dasar Pencacahan (Fundamental Counting Principles)
Kaidah pencacahan adalah cabang matematika kombinatorika yang digunakan untuk menghitung banyaknya kemungkinan hasil, susunan, atau cara terjadinya suatu peristiwa tanpa harus mendaftarkan anggota ruang sampelnya satu per satu.

1. **Aturan Penjumlahan (Kaidah Alternatif / 'ATAU'):**
   Jika suatu peristiwa dapat terjadi dalam $n_1$ cara pada kasus pertama, ATAU $n_2$ cara pada kasus kedua, dan kedua kasus tersebut **saling lepas (tidak dapat terjadi bersamaan)**, maka total banyak cara peristiwa tersebut terjadi adalah:
   $$N = n_1 + n_2 + \dots + n_k$$

2. **Aturan Perkalian (Aturan Pengisian Tempat / Filling Slots / 'DAN'):**
   Jika suatu prosedur terdiri atas serangkaian tahapan berurutan, di mana tahap ke-1 dapat dilakukan dalam $n_1$ cara, tahap ke-2 dapat dilakukan dalam $n_2$ cara setelah tahap 1 selesai, dan seterusnya hingga tahap ke-$k$, maka total banyak cara keseluruhan proses terjadi secara simultan adalah:
   $$N = n_1 \times n_2 \times \dots \times n_k$$

### 2. Notasi Faktorial
Untuk bilangan bulat non-negatif $n \in \{0, 1, 2, 3, \dots\}$, faktorial didefinisikan sebagai hasil kali seluruh bilangan asli dari 1 sampai $n$:
$$n! = n \times (n - 1) \times (n - 2) \times \dots \times 3 \times 2 \times 1$$
**Definisi Khusus:**
$$0! = 1 \quad \text{dan} \quad 1! = 1$$

### 3. Permutasi vs Kombinasi (Perbedaan Esensial)
- **Permutasi:** Penyusunan sebagian atau seluruh objek **DENGAN MEMPERHATIKAN URUTAN**.
  Urutan $AB \neq BA$. Contoh konteks: susunan jabatan ketua-sekretaris-bendahara, kode akses/PIN sandi, nomor plat kendaraan, nomor antrean, juara 1-2-3.
- **Kombinasi:** Pemilihan kelompok objek **TANPA MEMPERHATIKAN URUTAN**.
  Urutan $AB = BA$. Contoh konteks: memilih anggota delegasi/panitia, memilih bola dari dalam kantong, jabat tangan antar peserta, memilih kombinasi warna baju.
""",
    "rumus_katex": r"""
### Daftar Formulasi Lengkap Pencacahan
1. **Permutasi $r$ Objek dari $n$ Objek Berbeda ($r \le n$):**
   $$P(n, r) = \frac{n!}{(n - r)!} = \underbrace{n \times (n - 1) \times \dots \times (n - r + 1)}_{r \text{ faktor}}$$
   Jika $r = n$ (menyusun seluruh objek):
   $$P(n, n) = n!$$

2. **Permutasi dengan Beberapa Unsur Sama:**
   Jika dari $n$ objek terdapat $k_1$ unsur jenis 1 yang sama, $k_2$ unsur jenis 2 yang sama, $\dots$, $k_m$ unsur jenis $m$ yang sama:
   $$P = \frac{n!}{k_1! \times k_2! \times \dots \times k_m!}$$

3. **Permutasi Siklis (Susunan Melingkar):**
   Banyak cara menyusun $n$ objek berbeda pada sebuah lingkaran tertutup:
   $$P_{\text{siklis}} = (n - 1)!$$

4. **Kombinasi $r$ Objek dari $n$ Objek Berbeda ($r \le n$):**
   $$C(n, r) = \binom{n}{r} = \frac{n!}{r! \times (n - r)!}$$
   Sifat simetri kombinasi:
   $$C(n, r) = C(n, n - r)$$
""",
    "karakteristik_batasan": r"""
### Karakteristik & Batasan Kasus
1. **Syarat 'Tidak Boleh Berulang' (Without Repetition):**
   Jika kode akses atau angka disyaratkan tidak boleh ada karakter berulang, maka setiap slot berikutnya memiliki pilihan yang berkurang 1:
   - Slot 1: $n$ pilihan
   - Slot 2: $n - 1$ pilihan
   - Slot 3: $n - 2$ pilihan, dst.
2. **Karakter Alfanumerik:**
   - Alfabet bahasa Indonesia/Inggris terdiri atas **26 huruf** ($A$ sampai $Z$).
   - Digit desimal terdiri atas **10 angka** ($0, 1, 2, 3, 4, 5, 6, 7, 8, 9$).
""",
    "contoh_kontekstual": r"""
### Contoh Kasus Riil & Kontekstual
**Kasus 1: Kode Akses Unik Kupon Bazar (Tipe Soal No. 46)**
Luki bertugas membuat kupon bazar dengan kode akses unik 5 karakter dengan format berselang-seling:
$$\mathbf{A \, X \, B \, Y \, C}$$
Di mana $A, B, C$ menyatakan huruf alfabet dan $X, Y$ menyatakan angka. Syarat pembuatan kode: **tidak boleh ada huruf maupun angka yang diulang**.
Berapakah total banyak kode akses berbeda yang dapat dibuat?

*Penyelesaian Langkah Demi Langkah:*
1. Analisis posisi huruf ($A, B, C$):
   - Terdapat 3 slot huruf yang harus diisi dari 26 huruf alfabet tanpa pengulangan:
   - Slot 1 ($A$): 26 pilihan
   - Slot 3 ($B$): 25 pilihan
   - Slot 5 ($C$): 24 pilihan
   $$N_{\text{huruf}} = 26 \times 25 \times 24 = 15.600$$
2. Analisis posisi angka ($X, Y$):
   - Terdapat 2 slot angka yang harus diisi dari 10 digit (0 sampai 9) tanpa pengulangan:
   - Slot 2 ($X$): 10 pilihan
   - Slot 4 ($Y$): 9 pilihan
   $$N_{\text{angka}} = 10 \times 9 = 90$$
3. Terapkan Aturan Perkalian Keseluruhan:
   $$N_{\text{total}} = N_{\text{huruf}} \times N_{\text{angka}} = 15.600 \times 90 = 1.404.000$$
Total kode akses unik yang dapat dibuat adalah $\mathbf{1.404.000}$ (Sesuai Kunci C Soal No. 46).

**Kasus 2: Penataan Etalase Buah (Tipe Soal No. 10)**
Memilih 3 keranjang dari 5 keranjang pajangan berbeda untuk meletakkan 3 buah berbeda:
$$P(5, 3) = \frac{5!}{(5 - 3)!} = 5 \times 4 \times 3 = 60\text{ cara}$$
Memilih 2 buah dari 3 jenis buah tanpa memperhatikan urutan:
$$C(3, 2) = \frac{3!}{2! \times 1!} = 3\text{ cara}$$
""",
    "trik_cepat": r"""
### Trik Analisis Cepat (Fast Analysis Tricks)
1. **Trik Kotak Pengisian (Slot Diagramming):**
   Gambarkan kotak sejumlah slot yang diminta, lalu tuliskan langsung banyak pilihan yang tersedia di setiap kotak, kemudian kalikan seluruh isi kotak:
   $$[\,26\,] \times [\,10\,] \times [\,25\,] \times [\,9\,] \times [\,24\,] = 1.404.000$$
2. **Trik Kombinasi Cepat:**
   Untuk menghitung $C(n, r)$, tuliskan perkalian mundur sebanyak $r$ faktor di pembilang, lalu bagi dengan $r!$:
   $$C(10, 3) = \frac{10 \times 9 \times 8}{3 \times 2 \times 1} = 10 \times 3 \times 4 = 120$$
"""
}

with open("data/modules/subchapter_5_3.json", "w", encoding="utf-8") as f:
    json.dump(sub_5_3, f, ensure_ascii=False, indent=2)

print("Generated subchapter_5_3.json successfully.")
