import json
import os

os.makedirs("data/modules", exist_ok=True)

# 1.1 Bilangan Real & Eksponen
sub_1_1 = {
    "sub_chapter_id": "1.1",
    "module_id": "MOD-1",
    "module_name": "Bilangan",
    "short_title": "Eksponen & Pangkat",
    "title": "Bilangan Real & Eksponen",
    "sub_topics": [
        "Klasifikasi Bilangan Real (Asli, Cacah, Bulat, Rasional, Irasional)",
        "Sifat Dasar Perkalian & Pembagian Eksponen Basis Sama",
        "Pangkat Bertingkat dan Distribusi Perkalian/Pembagian",
        "Definisi Pangkat Nol (a^0 = 1) dan Pangkat Negatif (a^-n = 1/a^n)",
        "Pangkat Rasional (Pecahan) dan Konversi Bentuk Akar",
        "Batasan Kasus Basis Negatif pada Pangkat Genap vs Ganjil"
    ],
    "teori_definisi": r"""
### 1. Klasifikasi Sistem Bilangan Real ($\mathbb{R}$)
Setiap bilangan real berada pada garis bilangan kontinu dengan hierarki:
- **Bilangan Asli ($\mathbb{N}$):** $\{1, 2, 3, 4, \dots\}$
- **Bilangan Cacah ($\mathbb{W}$):** $\{0, 1, 2, 3, \dots\}$
- **Bilangan Bulat ($\mathbb{Z}$):** $\{\dots, -2, -1, 0, 1, 2, \dots\}$
- **Bilangan Rasional ($\mathbb{Q}$):** Bentuk $\frac{a}{b}$ ($a, b \in \mathbb{Z}, b \neq 0$), desimal berulang atau terputus (contoh: $\frac{3}{4} = 0{,}75$, $\frac{1}{3} = 0{,}333\dots$).
- **Bilangan Irasional ($\mathbb{I}$):** Tidak dapat dijadikan $\frac{a}{b}$, desimal tak hingga tak berpola (contoh: $\sqrt{2}, \sqrt{3}, \pi, e$).

### 2. Konsep Eksponen & Notasi Ilmiah
Perkalian berulang sebanyak $n$ kali untuk basis $a \in \mathbb{R}$ dan pangkat $n \in \mathbb{N}$:
$$a^n = \underbrace{a \times a \times \dots \times a}_{n \text{ faktor}}$$

**3 Kaidah Khusus yang Wajib Dipahami:**
1. **Pangkat Nol ($a^0$):**
   $$a^0 = 1 \quad (\text{syarat: } a \neq 0)$$
   *Contoh:* $5^0 = 1$, $(-12)^0 = 1$, tetapi $0^0$ tidak terdefinisi.
2. **Pangkat Bulat Negatif ($a^{-n}$):**
   $$a^{-n} = \frac{1}{a^n} \quad \text{dan} \quad \frac{1}{a^{-n}} = a^n \quad (a \neq 0)$$
   *Contoh:* $2^{-3} = \frac{1}{2^3} = \frac{1}{8}$; $\frac{1}{3^{-2}} = 3^2 = 9$.
3. **Pangkat Pecahan / Rasional ($a^{\frac{m}{n}}$):**
   $$a^{\frac{m}{n}} = \sqrt[n]{a^m} = (\sqrt[n]{a})^m \quad (a > 0, n \ge 2)$$
   *Contoh:* $8^{\frac{2}{3}} = (\sqrt[3]{8})^2 = 2^2 = 4$.
""",
    "rumus_katex": r"""
### Tabel Rumus & Sifat Aljabar Eksponen
Untuk $a, b > 0$ dan $m, n \in \mathbb{R}$:

| No | Nama Sifat | Formula KaTeX | Contoh Langsung |
|---|---|---|---|
| 1 | Perkalian Basis Sama | $a^m \cdot a^n = a^{m+n}$ | $2^3 \cdot 2^4 = 2^{3+4} = 2^7 = 128$ |
| 2 | Pembagian Basis Sama | $\frac{a^m}{a^n} = a^{m-n}$ | $\frac{5^6}{5^2} = 5^{6-2} = 5^4 = 625$ |
| 3 | Pangkat Dipangkatkan | $(a^m)^n = a^{m \cdot n}$ | $(3^2)^3 = 3^{2 \cdot 3} = 3^6 = 729$ |
| 4 | Distribusi Perkalian | $(a \cdot b)^n = a^n \cdot b^n$ | $(2 \cdot x)^4 = 16x^4$ |
| 5 | Distribusi Pembagian | $\left(\frac{a}{b}\right)^n = \frac{a^n}{b^n}$ | $\left(\frac{2}{3}\right)^3 = \frac{8}{27}$ |
| 6 | Invers Pangkat Negatif | $a^{-n} = \frac{1}{a^n}$ | $\left(\frac{3}{4}\right)^{-2} = \left(\frac{4}{3}\right)^2 = \frac{16}{9}$ |
| 7 | Pangkat Pecahan | $a^{\frac{m}{n}} = \sqrt[n]{a^m}$ | $27^{\frac{4}{3}} = (\sqrt[3]{27})^4 = 3^4 = 81$ |
""",
    "karakteristik_batasan": r"""
### Batasan Kasus & Jebakan Sering Muncul
- **Tanda Kurung vs Tanpa Kurung:**
  - $(-2)^4 = (-2)(-2)(-2)(-2) = +16$ (pangkat genap pada bilangan negatif dalam kurung $\to$ positif).
  - $-2^4 = -(2^4) = -16$ (tanda minus di luar pangkat!).
- **Basis Negatif pada Pangkat Pecahan:**
  - $(-8)^{\frac{1}{3}} = \sqrt[3]{-8} = -2$ $\to$ Terdefinisi di $\mathbb{R}$ karena indeks ganjil (3).
  - $(-4)^{\frac{1}{2}} = \sqrt{-4} = 2i$ $\to$ Tidak terdefinisi di $\mathbb{R}$ (bilangan imajiner). Batasan silabus mewajibkan basis positif $a > 0$ untuk pangkat pecahan umum.
- **Pembagian oleh Nol:**
  - $0^{-k} = \frac{1}{0^k} = \frac{1}{0}$ $\to$ Tidak terdefinisi.
""",
    "rangkuman": r"""
### 📑 Rangkuman Super Padat (Cheat Sheet)
1. **Kaidah Operasi:**
   - Kali basis sama $\to$ Pangkat dijumlahkan: $a^m \cdot a^n = a^{m+n}$
   - Bagi basis sama $\to$ Pangkat dikurangkan: $\frac{a^m}{a^n} = a^{m-n}$
   - Bertingkat $\to$ Pangkat dikalikan: $(a^m)^n = a^{mn}$
2. **Kaidah Pindah Posisi:**
   - Pangkat negatif pindah tempat (atas $\leftrightarrow$ bawah) tandanya berbalik: $\frac{x^{-a}}{y^{-b}} = \frac{y^b}{x^a}$.
3. **Pangkat Pecahan:**
   - Pembilang adalah pangkat dalam, penyebut adalah indeks akar: $x^{\frac{\text{dalam}}{\text{luar}}} = \sqrt[\text{luar}]{x^\text{dalam}}$.
4. **Kunci Sukses:**
   - Ubah semua bilangan komposit menjadi faktor prima terkecil terlebih dahulu (misal: $8 \to 2^3$, $9 \to 3^2$, $16 \to 2^4$, $27 \to 3^3$).
""",
    "contoh_kontekstual": r"""
### Contoh Kasus Riil: Penyederhanaan Bandwidth Jaringan
Sebuah transmisi data komputasi awan memiliki rasio efisiensi:
$$E = \left( \frac{x^3 y^{-2} z^4}{x^{-1} y^4 z^2} \right)^2$$
Sederhanakan hingga semua pangkat bernilai positif!

**Langkah Penyelesaian Terstruktur:**
1. **Langkah 1: Sederhanakan variabel sejenis di dalam kurung**
   - Suku $x$: $\frac{x^3}{x^{-1}} = x^{3 - (-1)} = x^{3+1} = x^4$
   - Suku $y$: $\frac{y^{-2}}{y^4} = y^{-2 - 4} = y^{-6} = \frac{1}{y^6}$
   - Suku $z$: $\frac{z^4}{z^2} = z^{4 - 2} = z^2$
   - Diperoleh bentuk dalam kurung: $\left( \frac{x^4 z^2}{y^6} \right)$
2. **Langkah 2: Kalikan dengan pangkat luar (kuadrat)**
   $$E = \left( \frac{x^4 z^2}{y^6} \right)^2 = \frac{(x^4)^2 \cdot (z^2)^2}{(y^6)^2} = \frac{x^{4 \cdot 2} \cdot z^{2 \cdot 2}}{y^{6 \cdot 2}} = \frac{x^8 z^4}{y^{12}}$$
""",
    "trik_cepat": r"""
### ⚡ Trik Cepat Analisis
1. **Aturan "Pangkat Terbesar Menarik Pangkat Terkecil":**
   Pada $\frac{y^{-2}}{y^4}$, bandingkan $-2$ dan $4$. Karena $4 > -2$, turunkan $y^{-2}$ ke bawah: $y^{4 - (-2)} = y^6$ di penyebut. Tidak perlu menulis negatif lalu membalik dua kali!
2. **Faktorisasi Prima Instan:**
   Jika ada operasi angka besar seperti $\frac{24^3 \cdot 9^2}{18^4}$, pecah ke bentuk $2^a \cdot 3^b$:
   - $24 = 2^3 \cdot 3 \implies 24^3 = 2^9 \cdot 3^3$
   - $9 = 3^2 \implies 9^2 = 3^4$
   - $18 = 2 \cdot 3^2 \implies 18^4 = 2^4 \cdot 3^8$
   Hasil: $\frac{2^9 \cdot 3^7}{2^4 \cdot 3^8} = \frac{2^{9-4}}{3^{8-7}} = \frac{2^5}{3^1} = \frac{32}{3}$.
""",
    "variasi_soal": [
        {
            "tipe": "Variasi 1: Operasi Aljabar Pangkat Campuran",
            "soal": "Bentuk sederhana dari $\\frac{(a^2 b^{-3} c)^3}{a^{-1} b^2 c^{-2}}$ adalah...",
            "konsep_kunci": "Distribusi pangkat luar terlebih dahulu, kemudian eliminasi variabel sejenis dengan aturan selisih pangkat.",
            "solusi": r"""
1. Jabarkan pembilang: $(a^2 b^{-3} c)^3 = a^{2 \cdot 3} b^{-3 \cdot 3} c^{1 \cdot 3} = a^6 b^{-9} c^3$.
2. Bagi dengan penyebut:
   - Suku $a$: $\frac{a^6}{a^{-1}} = a^{6 - (-1)} = a^7$
   - Suku $b$: $\frac{b^{-9}}{b^2} = b^{-9 - 2} = b^{-11} = \frac{1}{b^{11}}$
   - Suku $c$: $\frac{c^3}{c^{-2}} = c^{3 - (-2)} = c^5$
3. Gabungkan hasil akhir: $\mathbf{\frac{a^7 c^5}{b^{11}}}$.
"""
        },
        {
            "tipe": "Variasi 2: Evaluasi Numerik Pangkat Pecahan",
            "soal": "Nilai dari $\\frac{27^{\\frac{2}{3}} + 16^{\\frac{3}{4}}}{8^{\\frac{4}{3}} - 4^{\\frac{1}{2}}}$ adalah...",
            "konsep_kunci": "Konversikan setiap basis ke bilangan prima terkecil: $27=3^3$, $16=2^4$, $8=2^3$, $4=2^2$.",
            "solusi": r"""
1. Hitung masing-masing suku:
   - $27^{\frac{2}{3}} = (3^3)^{\frac{2}{3}} = 3^{3 \cdot \frac{2}{3}} = 3^2 = 9$
   - $16^{\frac{3}{4}} = (2^4)^{\frac{3}{4}} = 2^{4 \cdot \frac{3}{4}} = 2^3 = 8$
   - $8^{\frac{4}{3}} = (2^3)^{\frac{4}{3}} = 2^{3 \cdot \frac{4}{3}} = 2^4 = 16$
   - $4^{\frac{1}{2}} = (2^2)^{\frac{1}{2}} = 2^1 = 2$
2. Substitusikan ke pecahan:
   $$\frac{9 + 8}{16 - 2} = \frac{17}{14}$$
"""
        },
        {
            "tipe": "Variasi 3: Persamaan Eksponen Sederhana",
            "soal": "Tentukan nilai $x$ yang memenuhi persamaan: $4^{x+1} = \\left(\\frac{1}{8}\\right)^{x-2}$.",
            "konsep_kunci": "Samakan kedua basis menjadi basis prima $2$, lalu samakan nilai eksponennya ($a^{f(x)} = a^{g(x)} \\implies f(x) = g(x)$).",
            "solusi": r"""
1. Ubah basis 4 dan $\frac{1}{8}$ ke basis 2:
   - $4 = 2^2 \implies 4^{x+1} = (2^2)^{x+1} = 2^{2x+2}$
   - $\frac{1}{8} = 2^{-3} \implies \left(\frac{1}{8}\right)^{x-2} = (2^{-3})^{x-2} = 2^{-3x+6}$
2. Samakan pangkat karena basis sudah sama (2):
   $$2x + 2 = -3x + 6$$
   $$2x + 3x = 6 - 2$$
   $$5x = 4 \implies x = \frac{4}{5}$$
"""
        }
    ]
}

# 1.2 Bentuk Akar & Rasionalisasi
sub_1_2 = {
    "sub_chapter_id": "1.2",
    "module_id": "MOD-1",
    "module_name": "Bilangan",
    "short_title": "Bentuk Akar & Rasionalisasi",
    "title": "Bentuk Akar & Logaritma Dasar",
    "sub_topics": [
        "Definisi & Syarat Eksistensi Bentuk Akar (Radikan Non-Negatif)",
        "Penyederhanaan Bentuk Akar dan Penarikan Faktor Kuadrat",
        "Operasi Aljabar Akar (Penjumlahan, Pengurangan, Perkalian, Pembagian)",
        "Merasionalkan Penyebut Bentuk Akar Tunggal (a / sqrt(b))",
        "Merasionalkan Penyebut Sekawan Binomial (Selisih Kuadrat)",
        "Bentuk Khusus Penarikan Akar Ganda sqrt((a+b) +/- 2 sqrt(ab))"
    ],
    "teori_definisi": r"""
### 1. Definisi Bentuk Akar
Bentuk akar adalah akar dari bilangan rasional yang hasilnya merupakan bilangan irasional.
- Bentuk $\sqrt{a} = b \iff b^2 = a$ dengan $a \ge 0$ dan $b \ge 0$.
- **Bukan Bentuk Akar:** $\sqrt{16} = 4$, $\sqrt{0{,}25} = 0{,}5$ (karena hasilnya bilangan rasional).
- **Merupakan Bentuk Akar:** $\sqrt{2}, \sqrt{3}, \sqrt{5}, \sqrt{18} = 3\sqrt{2}$ (hasilnya irasional).

### 2. Operasi Aljabar Bentuk Akar
- **Penjumlahan & Pengurangan (Harus Suku Sejenis):**
  $$p\sqrt{a} + q\sqrt{a} = (p + q)\sqrt{a}$$
  $$p\sqrt{a} - q\sqrt{a} = (p - q)\sqrt{a}$$
- **Perkalian & Pembagian:**
  $$\sqrt{a} \cdot \sqrt{b} = \sqrt{a \cdot b}$$
  $$\frac{\sqrt{a}}{\sqrt{b}} = \sqrt{\frac{a}{b}} \quad (b > 0)$$
  $$(p\sqrt{a}) \cdot (q\sqrt{b}) = (p \cdot q)\sqrt{a \cdot b}$$

### 3. Merasionalkan Penyebut Pecahan
Tujuan: Mengubah penyebut irasional menjadi bilangan rasional dengan mengalikan pembilang dan penyebut dengan bentuk sekawannya.
1. **Penyebut Akar Tunggal ($\frac{a}{\sqrt{b}}$):**
   $$\frac{a}{\sqrt{b}} \times \frac{\sqrt{b}}{\sqrt{b}} = \frac{a\sqrt{b}}{b}$$
2. **Penyebut Dua Suku / Sekawan Binomial:**
   Gunakan sifat selisih kuadrat: $(x - y)(x + y) = x^2 - y^2$.
   - $\frac{c}{a + \sqrt{b}} \times \frac{a - \sqrt{b}}{a - \sqrt{b}} = \frac{c(a - \sqrt{b})}{a^2 - b}$
   - $\frac{c}{\sqrt{a} - \sqrt{b}} \times \frac{\sqrt{a} + \sqrt{b}}{\sqrt{a} + \sqrt{b}} = \frac{c(\sqrt{a} + \sqrt{b})}{a - b}$
""",
    "rumus_katex": r"""
### Tabel Rumus Rasionalisasi & Identitas Akar
| Tipe Bentuk Pecahan | Bentuk Sekawan Pengali | Hasil Setelah Dirasionalkan |
|---|---|---|
| $\frac{a}{\sqrt{b}}$ | $\frac{\sqrt{b}}{\sqrt{b}}$ | $\frac{a}{b}\sqrt{b}$ |
| $\frac{c}{a + \sqrt{b}}$ | $\frac{a - \sqrt{b}}{a - \sqrt{b}}$ | $\frac{c(a - \sqrt{b})}{a^2 - b}$ |
| $\frac{c}{a - \sqrt{b}}$ | $\frac{a + \sqrt{b}}{a + \sqrt{b}}$ | $\frac{c(a + \sqrt{b})}{a^2 - b}$ |
| $\frac{c}{\sqrt{a} + \sqrt{b}}$ | $\frac{\sqrt{a} - \sqrt{b}}{\sqrt{a} - \sqrt{b}}$ | $\frac{c(\sqrt{a} - \sqrt{b})}{a - b}$ |
| $\frac{c}{\sqrt{a} - \sqrt{b}}$ | $\frac{\sqrt{a} + \sqrt{b}}{\sqrt{a} + \sqrt{b}}$ | $\frac{c(\sqrt{a} + \sqrt{b})}{a - b}$ |
| **Akar Ganda:** $\sqrt{(a+b) \pm 2\sqrt{ab}}$ | - | $\sqrt{a} \pm \sqrt{b} \quad (a > b)$ |
""",
    "karakteristik_batasan": r"""
### Batasan Kasus & Ketentuan Mutlak
- **Syarat Radikan:** Di bawah tanda akar indeks genap ($\sqrt[2]{\dots}$), nilai radikan **wajib non-negatif ($\ge 0$)**. Jika $< 0$, bilangan menjadi imajiner.
- **Nilai Akar Selalu Positif (Akar Utama/Principal Root):** $\sqrt{x^2} = |x|$. Contoh: $\sqrt{(-5)^2} = \sqrt{25} = +5$ (bukan $-5$).
- **Syarat Selisih Kuadrat pada Sekawan:** Pastikan tanda tengah berbalik (+ menjadi -, dan sebaliknya) agar suku silang saling menghilangkan: $(\sqrt{a}+\sqrt{b})(\sqrt{a}-\sqrt{b}) = a - b$.
""",
    "rangkuman": r"""
### 📑 Rangkuman Super Padat (Cheat Sheet)
1. **Sederhanakan Dulu:** Cari faktor kuadrat terbesar ($4, 9, 16, 25, 36, 49, \dots$). Misal $\sqrt{72} = \sqrt{36 \times 2} = 6\sqrt{2}$.
2. **Kaidah Sekawan:**
   - Sekawan dari $a + \sqrt{b}$ adalah $a - \sqrt{b}$.
   - Perkalian pasangan sekawan selalu menghasilkan bilangan rasional: $(a+\sqrt{b})(a-\sqrt{b}) = a^2 - b$.
3. **Penyebut Tidak Boleh Irasional:**
   - Selalu rasionalkan bentuk pecahan sebelum menyimpulkan jawaban akhir.
4. **Kaidah Akar Ganda:**
   - Bentuk $\sqrt{p \pm 2\sqrt{q}}$: cari dua bilangan $a$ dan $b$ dengan $a+b=p$ dan $a \cdot b=q$, maka hasilnya $\sqrt{a} \pm \sqrt{b}$ (dengan $a > b$).
""",
    "contoh_kontekstual": r"""
### Contoh Kasus Riil: Menghitung Hambatan Listrik Paralel
Dua komponen mikroprosesor memiliki impedansi $Z_1 = 3 + \sqrt{5}\ \Omega$ dan $Z_2 = 3 - \sqrt{5}\ \Omega$. 
Tentukan nilai rasional dari $\frac{8}{3 - \sqrt{5}}$!

**Langkah Penyelesaian Terstruktur:**
1. **Langkah 1: Identifikasi sekawan penyebut**
   Penyebut adalah $3 - \sqrt{5}$, maka sekawannya adalah $3 + \sqrt{5}$.
2. **Langkah 2: Kalikan pembilang dan penyebut**
   $$\frac{8}{3 - \sqrt{5}} \times \frac{3 + \sqrt{5}}{3 + \sqrt{5}} = \frac{8(3 + \sqrt{5})}{3^2 - (\sqrt{5})^2}$$
3. **Langkah 3: Hitung penyebut**
   $$3^2 - 5 = 9 - 5 = 4$$
4. **Langkah 4: Sederhanakan pecahan**
   $$\frac{8(3 + \sqrt{5})}{4} = 2(3 + \sqrt{5}) = 6 + 2\sqrt{5}\ \Omega$$
""",
    "trik_cepat": r"""
### ⚡ Trik Cepat Analisis
1. **Rumus Langsung Sekawan:**
   Untuk bentuk $\frac{k}{\sqrt{a} - \sqrt{b}}$, jika selisih $a - b = 1$ (misal $\sqrt{3}-\sqrt{2}$ atau $\sqrt{5}-2$ di mana $5-4=1$), hasilnya langsung:
   $$\frac{k}{\sqrt{a} - \sqrt{b}} = k(\sqrt{a} + \sqrt{b})$$
   *Contoh:* $\frac{5}{\sqrt{5} - 2} = 5(\sqrt{5} + 2) = 5\sqrt{5} + 10$ (langsung selesai tanpa coret-coret panjang!).
2. **Pengurangan Akar Ganda Instan:**
   Untuk $\sqrt{8 + 2\sqrt{15}}$, cari dua angka: jumlah $=8$, kali $=15$. Angkanya $5$ dan $3$. Hasil langsung: $\sqrt{5} + \sqrt{3}$.
""",
    "variasi_soal": [
        {
            "tipe": "Variasi 1: Penyederhanaan & Operasi Aljabar Akar",
            "soal": "Tentukan bentuk sederhana dari: $2\sqrt{75} + 3\sqrt{48} - \sqrt{108}$.",
            "konsep_kunci": "Faktorkan setiap radikan ke bentuk bilangan kuadrat $\\times$ bilangan prima (faktor kuadrat: 25, 16, 36).",
            "solusi": r"""
1. Tarik faktor kuadrat dari masing-masing akar:
   - $\sqrt{75} = \sqrt{25 \times 3} = 5\sqrt{3} \implies 2\sqrt{75} = 2(5\sqrt{3}) = 10\sqrt{3}$
   - $\sqrt{48} = \sqrt{16 \times 3} = 4\sqrt{3} \implies 3\sqrt{48} = 3(4\sqrt{3}) = 12\sqrt{3}$
   - $\sqrt{108} = \sqrt{36 \times 3} = 6\sqrt{3}$
2. Jumlahkan suku sejenis ($\sqrt{3}$):
   $$10\sqrt{3} + 12\sqrt{3} - 6\sqrt{3} = (10 + 12 - 6)\sqrt{3} = \mathbf{16\sqrt{3}}$$
"""
        },
        {
            "tipe": "Variasi 2: Rasionalisasi Sekawan Binomial Dua Akar",
            "soal": "Rasionalkan penyebut dari: $\\frac{\\sqrt{3} - \\sqrt{2}}{\\sqrt{3} + \\sqrt{2}}$.",
            "konsep_kunci": "Kalikan dengan sekawan penyebut yaitu $(\\sqrt{3} - \\sqrt{2})$ dan gunakan penjabaran $(a-b)^2 = a^2 - 2ab + b^2$.",
            "solusi": r"""
1. Kalikan sekawan:
   $$\frac{\sqrt{3} - \sqrt{2}}{\sqrt{3} + \\sqrt{2}} \times \frac{\sqrt{3} - \sqrt{2}}{\sqrt{3} - \sqrt{2}} = \frac{(\sqrt{3} - \sqrt{2})^2}{(\sqrt{3})^2 - (\sqrt{2})^2}$$
2. Hitung pembilang dan penyebut:
   - Pembilang: $(\sqrt{3})^2 - 2(\sqrt{3})(\sqrt{2}) + (\sqrt{2})^2 = 3 - 2\sqrt{6} + 2 = 5 - 2\sqrt{6}$
   - Penyebut: $3 - 2 = 1$
3. Hasil akhir: $\mathbf{5 - 2\sqrt{6}}$.
"""
        },
        {
            "tipe": "Variasi 3: Penarikan Akar Ganda Kuadrat",
            "soal": "Sederhanakan bentuk akar bertingkat: $\\sqrt{11 - 2\sqrt{30}}$.",
            "konsep_kunci": "Identifikasi dua bilangan $a$ dan $b$ ($a > b$) sehingga $a + b = 11$ dan $a \\cdot b = 30$.",
            "solusi": r"""
1. Pasangan faktor dari 30 yang jika dijumlahkan bernilai 11 adalah 6 dan 5 ($6 \times 5 = 30$ dan $6 + 5 = 11$).
2. Karena tanda penghubung adalah negatif ($-$), maka:
   $$\sqrt{11 - 2\sqrt{30}} = \sqrt{(6 + 5) - 2\sqrt{6 \times 5}} = \mathbf{\sqrt{6} - \sqrt{5}}$$
"""
        }
    ]
}

# 1.3 Operasi Bilangan & Sifat Hitung
sub_1_3 = {
    "sub_chapter_id": "1.3",
    "module_id": "MOD-1",
    "module_name": "Bilangan",
    "short_title": "Sifat Operasi Hitung",
    "title": "Operasi Bilangan & Sifat Hitung",
    "sub_topics": [
        "Hierarki Operasi Hitung Campuran (PEMDAS / KABATAKU)",
        "Sifat-Sifat Hitung: Komutatif, Asosiatif, dan Distributif",
        "Operasi Hitung Pecahan, Desimal, dan Persentase",
        "Estimasi dan Pembulatan Numerik Terarah",
        "Aplikasi Kontekstual Konsumsi Energi, Daya Listrik, dan Biaya"
    ],
    "teori_definisi": r"""
### 1. Hierarki Preseden Operasi (PEMDAS / KABATAKU)
Dalam operasi aritmetika campuran, urutan eksekusi mutlak adalah:
1. **Tanda Kurung (Parentheses):** Selesaikan operasi di dalam tanda kurung terdalam terlebih dahulu.
2. **Eksponen & Akar (Exponents/Roots):** Hitung perpangkatan dan bentuk akar.
3. **Perkalian & Pembagian (Multiplication & Division):** Memiliki tingkat setara, hitung berurutan dari **kiri ke kanan**.
4. **Penjumlahan & Pengurangan (Addition & Subtraction):** Memiliki tingkat setara, hitung berurutan dari **kiri ke kanan**.

### 2. Tiga Sifat Pokok Operasi Hitung
- **Sifat Komutatif (Pertukaran):** Berlaku pada penjumlahan dan perkalian:
  $$a + b = b + a \quad \text{dan} \quad a \cdot b = b \cdot a$$
  *(Tidak berlaku untuk pengurangan dan pembagian).*
- **Sifat Asosiatif (Pengelompokan):**
  $$(a + b) + c = a + (b + c) \quad \text{dan} \quad (a \cdot b) \cdot c = a \cdot (b \cdot c)$$
- **Sifat Distributif (Penyebaran):** Perkalian terhadap penjumlahan/pengurangan:
  $$a \cdot (b + c) = (a \cdot b) + (a \cdot c)$$
  $$a \cdot (b - c) = (a \cdot b) - (a \cdot c)$$
""",
    "rumus_katex": r"""
### Formula Penting Operasi & Pemodelan Kontekstual
1. **Operasi Pecahan Campuran:**
   $$\frac{a}{b} \pm \frac{c}{d} = \frac{ad \pm bc}{bd}, \quad \frac{a}{b} \times \frac{c}{d} = \frac{ac}{bd}, \quad \frac{a}{b} \div \frac{c}{d} = \frac{a}{b} \times \frac{d}{c}$$
2. **Konversi Persentase & Desimal:**
   $$p\% = \frac{p}{100} = 0{,}01 \times p$$
3. **Model Konsumsi Energi Listrik Riil (Soal No. 1):**
   $$E_{\text{total}} = \sum (P_i \times t_i)$$
   $$\text{Biaya Bulanan} = \left(\frac{E_{\text{harian}} \text{ (Wh)} \times 30}{1000}\right) \text{ kWh} \times \text{Tarif per kWh}$$
   Di mana $P_i$ adalah daya perangkat (Watt) dan $t_i$ adalah durasi pemakaian (Jam).
""",
    "karakteristik_batasan": r"""
### Batasan Kasus & Kesalahan Umum
- **Jebakan Operasi Kiri-ke-Kanan:**
  Operasi $12 \div 3 \times 2$: Banyak yang salah menghitung $3 \times 2 = 6$ lalu $12 \div 6 = 2$ (SALAH!). 
  Urutan benar dari kiri: $(12 \div 3) \times 2 = 4 \times 2 = 8$.
- **Perkalian Tanda Minus:**
  - $(-a) \times (-b) = +ab$
  - $(-a) \times b = -ab$
  - $-a - b = -(a + b)$
""",
    "rangkuman": r"""
### 📑 Rangkuman Super Padat (Cheat Sheet)
1. **KABATAKU:** Kurung $\to$ Bagi/Kali (kiri ke kanan) $\to$ Tambah/Kurang (kiri ke kanan).
2. **Trik Distributif Mempercepat Hitungan:**
   - Gunakan faktor persekutuan untuk menghindari hitungan besar: $27 \times 48 + 27 \times 52 = 27 \times (48 + 52) = 27 \times 100 = 2700$.
3. **Konversi Energi Listrik:**
   - $1 \text{ kWh} = 1000 \text{ Wh}$. Selalu bagi 1000 sebelum mengalikan dengan tarif listrik!
""",
    "contoh_kontekstual": r"""
### Contoh Kasus Riil: Audit Biaya Listrik Rumah Tangga
Sebuah rumah menggunakan perangkat listrik setiap hari:
- 4 Lampu LED masing-masing $15\text{ W}$, menyala $10\text{ jam/hari}$.
- 1 Kulkas $100\text{ W}$, menyala $24\text{ jam/hari}$.
- 1 TV $80\text{ W}$, menyala $5\text{ jam/hari}$.
Jika tarif listrik Rp 1.500 per kWh, hitung rekening listrik dalam 30 hari!

**Langkah Penyelesaian Terstruktur:**
1. **Langkah 1: Hitung total energi harian (Watt-hour / Wh)**
   - Lampu: $4 \times 15\text{ W} \times 10\text{ jam} = 600\text{ Wh}$
   - Kulkas: $1 \times 100\text{ W} \times 24\text{ jam} = 2400\text{ Wh}$
   - TV: $1 \times 80\text{ W} \times 5\text{ jam} = 400\text{ Wh}$
   - Total energi harian: $600 + 2400 + 400 = 3400\text{ Wh}$
2. **Langkah 2: Konversi ke kWh per bulan (30 hari)**
   $$E_{\text{bulan}} = \frac{3400 \times 30}{1000} = \frac{102000}{1000} = 102\text{ kWh}$$
3. **Langkah 3: Hitung total biaya**
   $$\text{Biaya} = 102\text{ kWh} \times \text{Rp } 1.500 = \mathbf{\text{Rp } 153.000}$$
""",
    "trik_cepat": r"""
### ⚡ Trik Cepat Analisis
1. **Faktorisasi Mental Penjumlahan Pecahan:**
   Untuk $\frac{1}{2} + \frac{1}{6} + \frac{1}{12} + \frac{1}{20}$:
   Pecah menjadi deret teleskopik: $\left(1 - \frac{1}{2}\right) + \left(\frac{1}{2} - \frac{1}{3}\right) + \left(\frac{1}{3} - \frac{1}{4}\right) + \left(\frac{1}{4} - \frac{1}{5}\right) = 1 - \frac{1}{5} = \frac{4}{5}$.
2. **Trik Persentase Cepat:**
   $x\%$ dari $y$ sama dengan $y\%$ dari $x$.
   Contoh: Hitung $16\%$ dari $25$ $\to$ ubah jadi $25\%$ dari $16 = \frac{1}{4} \times 16 = 4$ (instan dalam 1 detik!).
""",
    "variasi_soal": [
        {
            "tipe": "Variasi 1: Operasi Hitung Campuran Preseden",
            "soal": "Hitung hasil dari ekspresi berikut: $48 - 18 \div 3 \times 2 + 4 \times (-5)$.",
            "konsep_kunci": "Dahulukan pembagian dan perkalian berurutan dari kiri ke kanan sebelum penjumlahan/pengurangan.",
            "solusi": r"""
1. Selesaikan perkalian/pembagian dari kiri:
   - $18 \div 3 = 6$
   - $6 \times 2 = 12$
   - $4 \times (-5) = -20$
2. Tulis ulang persamaan:
   $$48 - 12 + (-20)$$
3. Hitung dari kiri ke kanan:
   $$48 - 12 = 36$$
   $$36 - 20 = \mathbf{16}$$
"""
        },
        {
            "tipe": "Variasi 2: Operasi Distributif Aljabar Cepat",
            "soal": "Hitung nilai dari: $999 \times 47 + 47$.",
            "konsep_kunci": "Terapkan sifat distributif dengan memandang $47$ sebagai $1 \times 47$.",
            "solusi": r"""
1. Faktorkan bilangan 47 keluar:
   $$999 \times 47 + 1 \times 47 = (999 + 1) \times 47$$
2. Hitung suku dalam kurung:
   $$1000 \times 47 = \mathbf{47.000}$$
"""
        },
        {
            "tipe": "Variasi 3: Aplikasi Nyata Konsumsi Air / Biaya Proporsional",
            "soal": "Sebuah pompa air berkapasitas 25 liter/menit digunakan mengisi bak mandi berukuran $100\text{ cm} \times 80\text{ cm} \times 60\text{ cm}$. Berapa lama waktu yang dibutuhkan hingga bak terisi penuh?",
            "konsep_kunci": "Konversi volume dari $\\text{cm}^3$ ke liter ($1\\text{ liter} = 1000\\text{ cm}^3 = 1\\text{ dm}^3$), lalu bagi dengan debit pompa.",
            "solusi": r"""
1. Hitung volume bak mandi:
   $$V = 100 \times 80 \times 60 = 480.000\text{ cm}^3$$
2. Konversikan ke liter:
   $$V = \frac{480.000}{1000} = 480\text{ liter}$$
3. Hitung waktu pengisian ($t = \frac{V}{Q}$):
   $$t = \frac{480\text{ liter}}{25\text{ liter/menit}} = \mathbf{19{,}2\text{ menit}} \quad (19\text{ menit } 12\text{ detik})$$
"""
        }
    ]
}

# Write files
for sub in [sub_1_1, sub_1_2, sub_1_3]:
    sub_id = sub["sub_chapter_id"].replace(".", "_")
    path = f"data/modules/subchapter_{sub_id}.json"
    with open(path, "w", encoding="utf-8") as f:
        json.dump(sub, f, ensure_ascii=False, indent=2)
    print(f"Generated {path}")

print("Module 1 upgrade complete!")
