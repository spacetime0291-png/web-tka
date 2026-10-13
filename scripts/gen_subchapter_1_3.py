import json

sub_1_3 = {
    "sub_chapter_id": "1.3",
    "module_id": "MOD-1",
    "module_name": "Bilangan",
    "title": "Operasi Bilangan & Sifat Hitung",
    "teori_definisi": r"""
### 1. Definisi Operasi Aritmetika & Urutan Hitung (Order of Operations)
Operasi bilangan meliputi empat operasi biner fundamental: penjumlahan ($+$), pengurangan ($-$), perkalian ($\times$), dan pembagian ($\div$).
Dalam menyelesaikan operasi campuran gabungan, wajib dipatuhi hierarki preseden baku secara universal yang dikenal dengan akronim **PEMDAS** atau **KABATAKU**:
1. **P (Parentheses / Tanda Kurung):** Hitung seluruh ekspresi yang berada di dalam tanda kurung terlebih dahulu: $(\dots)$, $[\dots]$, $\{\dots\}$.
2. **E (Exponents / Eksponen & Akar):** Operasi pangkat dan bentuk akar dikerjakan berikutnya.
3. **MD (Multiplication & Division / Perkalian & Pembagian - KABA):** Memiliki tingkat hierarki yang setara, dikerjakan berurutan dari **kiri ke kanan**.
4. **AS (Addition & Subtraction / Penjumlahan & Pengurangan - TAKU):** Memiliki tingkat hierarki yang setara, dikerjakan berurutan dari **kiri ke kanan**.

### 2. Sifat-Sifat Fundamental Operasi Hitung
Untuk setiap $a, b, c \in \mathbb{R}$:
1. **Sifat Komutatif (Pertukaran):**
   - Penjumlahan: $a + b = b + a$
   - Perkalian: $a \times b = b \times a$
   *(Catatan: Pengurangan dan pembagian TIDAK bersifat komutatif: $a - b \neq b - a$, $a \div b \neq b \div a$)*.
2. **Sifat Asosiatif (Pengelompokan):**
   - Penjumlahan: $(a + b) + c = a + (b + c)$
   - Perkalian: $(a \times b) \times c = a \times (b \times c)$
3. **Sifat Distributif (Penyebaran):**
   - Perkalian terhadap penjumlahan: $a \times (b + c) = (a \times b) + (a \times c)$
   - Perkalian terhadap pengurangan: $a \times (b - c) = (a \times b) - (a \times c)$
4. **Elemen Identitas & Invers:**
   - Identitas penjumlahan: $a + 0 = a$; Invers penjumlahan (lawan): $a + (-a) = 0$
   - Identitas perkalian: $a \times 1 = a$; Invers perkalian (kebalikan): $a \times \frac{1}{a} = 1$ ($a \neq 0$).
""",
    "rumus_katex": r"""
### Daftar Rumus & Operasi Pecahan
Untuk bilangan pecahan $\frac{a}{b}, \frac{c}{d} \in \mathbb{Q}$ ($b, d \neq 0$):

1. **Penjumlahan & Pengurangan Pecahan:**
   $$\frac{a}{b} \pm \frac{c}{d} = \frac{ad \pm bc}{bd}$$
   *(Atau dengan menyamakan penyebut menggunakan KPK dari $b$ dan $d$)*.

2. **Perkalian Pecahan:**
   $$\frac{a}{b} \times \frac{c}{d} = \frac{a \times c}{b \times d}$$

3. **Pembagian Pecahan (Invers Pengali):**
   $$\frac{a}{b} \div \frac{c}{d} = \frac{a}{b} \times \frac{d}{c} = \frac{ad}{bc}, \quad c \neq 0$$

4. **Operasi Distributif Faktorisasi Aljabar:**
   $$(p \times a) + (p \times b) = p \times (a + b)$$
   $$(p \times a) - (p \times b) = p \times (a - b)$$
""",
    "karakteristik_batasan": r"""
### Karakteristik & Batasan Kasus
1. **Kesalahan Fatal Tanda Kurung dan Perkalian Negatif:**
   $$-a \times (-b) = +(ab)$$
   $$-a \times b = -(ab)$$
   $$a - (-b) = a + b$$
2. **Pembagian dengan Nol:**
   Untuk sembarang $a \in \mathbb{R}$, $\frac{a}{0}$ adalah **tidak terdefinisi** (undefined), sedangkan $\frac{0}{0}$ adalah **bentuk tak tentu** (indeterminate).
3. **Prioritas Operasi Penjumlahan vs Perkalian:**
   Pada ekspresi $\frac{1}{4} + \frac{7}{4} \times \frac{8}{21}$, operasi perkalian $\frac{7}{4} \times \frac{8}{21}$ **wajib** diselesaikan lebih dahulu sebelum dijumlahkan dengan $\frac{1}{4}$. Menjumlahkan $\frac{1}{4} + \frac{7}{4} = \frac{8}{4} = 2$ terlebih dahulu adalah **kesalahan konsep total**!
""",
    "contoh_kontekstual": r"""
### Contoh Kasus Riil & Kontekstual
**Kasus 1: Evaluasi Efisiensi Distribusi Barang Gudang (Tipe Soal No. 9)**
Seorang manajer logistik menghitung saldo kontribusi biaya pengiriman dari dua vendor dengan faktor pengali tetap:
$$S = (-15) \times 24 + (-15) \times 76 - (-350)$$
Hitung hasil akhir saldo tersebut!

*Penyelesaian Langkah Demi Langkah:*
1. Manfaatkan sifat distributif untuk perkalian dengan faktor bersama $(-15)$:
   $$(-15) \times 24 + (-15) \times 76 = (-15) \times (24 + 76)$$
2. Jumlahkan angka di dalam kurung:
   $$24 + 76 = 100$$
   $$(-15) \times 100 = -1.500$$
3. Selesaikan operasi pengurangan dengan bilangan negatif:
   $$-1.500 - (-350) = -1.500 + 350 = -1.150$$
Hasil akhir: $\mathbf{-1.150}$ (Sesuai Kunci C Soal No. 9).

**Kasus 2: Komposisi Campuran Bahan Baku Pangan (Tipe Soal No. 35)**
Dalam pembuatan formula adonan kue, perbandingan takaran bahan dinyatakan dalam ekspresi pecahan:
$$A = \frac{1}{4} + \frac{7}{4} \times \frac{8}{21}$$
Tentukan nilai pecahan paling sederhana dari adonan $A$!

*Penyelesaian Langkah Demi Langkah:*
1. Selesaikan perkalian pecahan terlebih dahulu (sederhanakan faktor pembagi silang):
   $$\frac{7}{4} \times \frac{8}{21} = \frac{7 \div 7}{4 \div 4} \times \frac{8 \div 4}{21 \div 7} = \frac{1}{1} \times \frac{2}{3} = \frac{2}{3}$$
2. Jumlahkan dengan pecahan awal menggunakan KPK(4, 3) = 12:
   $$A = \frac{1}{4} + \frac{2}{3} = \frac{3}{12} + \frac{8}{12} = \frac{11}{12}$$
Hasil akhir: $\mathbf{\frac{11}{12}}$ (Sesuai Kunci C Soal No. 35).
""",
    "trik_cepat": r"""
### Trik Analisis Cepat (Fast Analysis Tricks)
1. **Trik Pengelompokan Distributif:**
   Jika melihat suku-suku perkalian yang memiliki satu bilangan yang sama, jangan kalikan satu per satu! Segera faktorkan bilangan tersebut keluar:
   $$A \cdot B + A \cdot C = A(B + C)$$
   Trik ini menghemat 70% waktu komputasi manual.
2. **Trik Coret Silang Pecahan:**
   Sebelum mengalikan pembilang dengan pembilang dan penyebut dengan penyebut, selalu bagi habis faktor persekutuan terbesar antara pembilang mana saja dengan penyebut mana saja terlebih dahulu.
"""
}

with open("data/modules/subchapter_1_3.json", "w", encoding="utf-8") as f:
    json.dump(sub_1_3, f, ensure_ascii=False, indent=2)

print("Generated subchapter_1_3.json successfully.")
