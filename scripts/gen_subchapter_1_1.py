import json

sub_1_1 = {
    "sub_chapter_id": "1.1",
    "module_id": "MOD-1",
    "module_name": "Bilangan",
    "title": "Bilangan Real & Eksponen",
    "teori_definisi": r"""
### 1. Sistem Bilangan Real ($\mathbb{R}$)
Sistem bilangan real adalah himpunan semua bilangan yang dapat dinyatakan dalam garis bilangan kontinu. Bilangan real terdiri atas:
1. **Bilangan Asli ($\mathbb{N}$):** Bilangan bulat positif $\{1, 2, 3, 4, \dots\}$.
2. **Bilangan Cacah ($\mathbb{W}$):** Bilangan asli ditambah nol $\{0, 1, 2, 3, \dots\}$.
3. **Bilangan Bulat ($\mathbb{Z}$):** Mencakup bilangan negatif, nol, dan positif $\{\dots, -2, -1, 0, 1, 2, \dots\}$.
4. **Bilangan Rasional ($\mathbb{Q}$):** Bilangan yang dapat dinyatakan dalam bentuk $\frac{a}{b}$ dengan $a, b \in \mathbb{Z}$ dan $b \neq 0$. Memiliki representasi desimal berakhir (terminating) atau desimal berulang teratur.
5. **Bilangan Irasional ($\mathbb{I}$):** Bilangan yang tidak dapat dinyatakan dalam bentuk pecahan $\frac{a}{b}$, memiliki representasi desimal tak hingga dan tak berulang (contoh: $\sqrt{2}, \sqrt{3}, \pi, e$).

### 2. Konsep Dasar Eksponen (Pangkat Bulat & Rasional)
Eksponen merupakan bentuk perkalian berulang dari suatu bilangan pokok (basis). Jika $a \in \mathbb{R}$ dan $n \in \mathbb{N}$:
$$a^n = a \times a \times \dots \times a \quad (n \text{ faktor})$$
Di mana $a$ disebut **basis** (bilangan pokok) dan $n$ disebut **eksponen** (pangkat).
- **Pangkat Nol:** Untuk setiap $a \neq 0$, didefinisikan $a^0 = 1$. (Catatan: $0^0$ tidak terdefinisi/bentuk tak tentu).
- **Pangkat Negatif:** Untuk setiap $a \neq 0$ dan $n \in \mathbb{N}$, $a^{-n} = \frac{1}{a^n}$.
- **Pangkat Pecahan (Rasional):** Untuk $a > 0$, $m \in \mathbb{Z}$, dan $n \in \mathbb{N}$ dengan $n \ge 2$:
  $$a^{\frac{m}{n}} = \sqrt[n]{a^m} = (\sqrt[n]{a})^m$$
""",
    "rumus_katex": r"""
### Daftar Rumus Lengkap Eksponen
Untuk $a, b \in \mathbb{R}$ ($a, b > 0$) serta $m, n \in \mathbb{R}$:

1. **Perkalian Basis Sama:**
   $$a^m \times a^n = a^{m+n}$$
2. **Pembagian Basis Sama:**
   $$\frac{a^m}{a^n} = a^{m-n}$$
3. **Pangkat dari Perkalian:**
   $$(a \times b)^n = a^n \times b^n$$
4. **Pangkat dari Pembagian:**
   $$\left(\frac{a}{b}\right)^n = \frac{a^n}{b^n}, \quad b \neq 0$$
5. **Pangkat Bertingkat (Power of a Power):**
   $$(a^m)^n = a^{m \times n}$$
6. **Definisi Pangkat Nol:**
   $$a^0 = 1, \quad a \neq 0$$
7. **Pangkat Negatif (Invers Perkalian):**
   $$a^{-n} = \frac{1}{a^n} \quad \text{dan} \quad \frac{1}{a^{-n}} = a^n$$
8. **Konversi Pangkat Rasional ke Bentuk Akar:**
   $$a^{\frac{m}{n}} = \sqrt[n]{a^m} = \left(\sqrt[n]{a}\right)^m$$
""",
    "karakteristik_batasan": r"""
### Karakteristik & Batasan Kasus
1. **Basis Negatif pada Pangkat Pecahan:**
   Bentuk $(-8)^{\frac{1}{3}} = \sqrt[3]{-8} = -2$ terdefinisi di $\mathbb{R}$ karena indeks akar ganjil. Namun, bentuk $(-4)^{\frac{1}{2}} = \sqrt{-4}$ menghasilkan bilangan imajiner ($2i$), bukan bilangan real. Oleh karena itu, dalam cakupan Matematika Wajib SMA (bilangan real), basis untuk eksponen rasional umum diwajibkan bernilai **positif ($a > 0$)**.
2. **Prioritas Tanda Kurung vs Tanda Minus:**
   Perhatikan perbedaan mendasar:
   $$-3^4 = -(3^4) = -81 \quad \text{berbeda dengan} \quad (-3)^4 = 81$$
3. **Limitasi Bentuk $0^0$ dan $0^{-n}$:**
   - $0^0$ tidak terdefinisi.
   - $0^{-n} = \frac{1}{0^n} = \frac{1}{0}$ tidak terdefinisi (pembagian dengan nol).
""",
    "contoh_kontekstual": r"""
### Contoh Kasus Riil & Kontekstual
**Kasus 1: Penyederhanaan Data Sensor Komputasi**
Sebuah sistem cloud processing mengukur efisiensi kompresi data dengan ekspresi aljabar:
$$E = \left( \frac{x^3 y^{-2} z^4}{x^{-1} y^4 z^2} \right)^2$$
Sederhanakan ekspresi tersebut sehingga semua pangkat bernilai positif!

*Penyelesaian Langkah Demi Langkah:*
1. Sederhanakan suku di dalam kurung menggunakan sifat $\frac{a^m}{a^n} = a^{m-n}$:
   $$\frac{x^3}{x^{-1}} = x^{3 - (-1)} = x^4$$
   $$\frac{y^{-2}}{y^4} = y^{-2 - 4} = y^{-6} = \frac{1}{y^6}$$
   $$\frac{z^4}{z^2} = z^{4 - 2} = z^2$$
   Sehingga bentuk dalam kurung menjadi: $\frac{x^4 z^2}{y^6}$.
2. Pangkatkan seluruh pecahan dengan 2:
   $$E = \left( \frac{x^4 z^2}{y^6} \right)^2 = \frac{(x^4)^2 \cdot (z^2)^2}{(y^6)^2} = \frac{x^{4 \times 2} \cdot z^{2 \times 2}}{y^{6 \times 2}} = \frac{x^8 z^4}{y^{12}}$$
Hasil akhir: $\mathbf{\frac{x^8 z^4}{y^{12}}}$ (Sesuai dengan tipe Soal No. 11 Bank Soal).
""",
    "trik_cepat": r"""
### Trik Analisis Cepat (Fast Analysis Tricks)
1. **Aturan Tukar Tempat Pangkat Negatif:**
   Suku dengan pangkat negatif di pembilang dapat langsung dipindahkan ke penyebut dengan mengubah tandanya menjadi positif, dan sebaliknya:
   $$\frac{a^{-m}}{b^{-n}} = \frac{b^n}{a^m}$$
2. **Metode Eliminasi Eksponen Bersama:**
   Jika menemukan pecahan berpangkat luar, sederhanakan basis yang sama di dalam kurung terlebih dahulu sebelum mengalikan dengan pangkat luar untuk mencegah angka membesar tidak terkontrol.
"""
}

with open("data/modules/subchapter_1_1.json", "w", encoding="utf-8") as f:
    json.dump(sub_1_1, f, ensure_ascii=False, indent=2)

print("Generated subchapter_1_1.json successfully.")
