import json

sub_1_2 = {
    "sub_chapter_id": "1.2",
    "module_id": "MOD-1",
    "module_name": "Bilangan",
    "title": "Bentuk Akar & Logaritma Dasar",
    "teori_definisi": r"""
### 1. Definisi Formal Bentuk Akar
Bentuk akar adalah akar dari suatu bilangan real positif yang hasilnya berupa **bilangan irasional** (tidak dapat dinyatakan dalam pecahan biasa $\frac{a}{b}$).
Jika $a \ge 0$ dan $n$ adalah bilangan bulat positif genap, maka $\sqrt[n]{a} = b$ berarti $b \ge 0$ dan $b^n = a$.
Jika $n$ adalah bilangan ganjil, maka $\sqrt[n]{a} = b$ berarti $b^n = a$ untuk sembarang $a \in \mathbb{R}$.

Contoh:
- $\sqrt{2}, \sqrt{3}, \sqrt{5}$ merupakan **bentuk akar** karena menghasilkan desimal tak hingga dan tak berulang.
- $\sqrt{4} = 2, \sqrt{9} = 3, \sqrt[3]{27} = 3$ **bukan bentuk akar** karena hasilnya merupakan bilangan rasional.

### 2. Konsep Merasionalkan Penyebut
Pecahan yang memiliki penyebut berbentuk akar bukanlah bentuk standar/sederhana dalam aljabar. Merasionalkan penyebut adalah proses mengalikan pembilang dan penyebut dengan faktor perasional (bentuk sekawan / *conjugate*) agar penyebut berubah menjadi bilangan rasional:
1. **Akar Tunggal:** Faktor pengali untuk $\frac{a}{\sqrt{b}}$ adalah $\frac{\sqrt{b}}{\sqrt{b}}$.
2. **Sekawan Binomial:** Berdasarkan identitas selisih dua kuadrat $(x - y)(x + y) = x^2 - y^2$:
   - Sekawan dari $(\sqrt{a} + \sqrt{b})$ adalah $(\sqrt{a} - \sqrt{b})$.
   - Sekawan dari $(\sqrt{a} - \sqrt{b})$ adalah $(\sqrt{a} + \sqrt{b})$.
""",
    "rumus_katex": r"""
### Daftar Rumus Lengkap Bentuk Akar
Untuk $a, b \ge 0$:

1. **Sifat Dasar Penyederhanaan:**
   $$\sqrt{a \times b} = \sqrt{a} \times \sqrt{b}$$
   $$\sqrt{\frac{a}{b}} = \frac{\sqrt{a}}{\sqrt{b}}, \quad b > 0$$

2. **Operasi Penjumlahan & Pengurangan (Suku Sejenis):**
   $$p\sqrt{a} + q\sqrt{a} = (p + q)\sqrt{a}$$
   $$p\sqrt{a} - q\sqrt{a} = (p - q)\sqrt{a}$$

3. **Operasi Perkalian Aljabar:**
   $$(p\sqrt{a}) \times (q\sqrt{b}) = (p \times q)\sqrt{a \times b}$$
   $$(\sqrt{a} + \sqrt{b})(\sqrt{a} - \sqrt{b}) = a - b$$
   $$(\sqrt{a} + \sqrt{b})^2 = (a + b) + 2\sqrt{ab}$$
   $$(\sqrt{a} - \sqrt{b})^2 = (a + b) - 2\sqrt{ab}$$

4. **Merasionalkan Penyebut Pecahan:**
   - Bentuk I:
     $$\frac{c}{\sqrt{a}} = \frac{c}{\sqrt{a}} \times \frac{\sqrt{a}}{\sqrt{a}} = \frac{c\sqrt{a}}{a}$$
   - Bentuk II:
     $$\frac{c}{\sqrt{a} + \sqrt{b}} = \frac{c}{\sqrt{a} + \sqrt{b}} \times \frac{\sqrt{a} - \sqrt{b}}{\sqrt{a} - \sqrt{b}} = \frac{c(\sqrt{a} - \sqrt{b})}{a - b}$$
   - Bentuk III:
     $$\frac{c}{a + \sqrt{b}} = \frac{c(a - \sqrt{b})}{a^2 - b}$$

5. **Akar Kuadrat Ganda (Menarik Akar di dalam Akar):**
   $$\sqrt{(a + b) \pm 2\sqrt{ab}} = \sqrt{a} \pm \sqrt{b}, \quad \text{dengan } a > b > 0$$
""",
    "karakteristik_batasan": r"""
### Karakteristik & Batasan Kasus
1. **Syarat Nilai di Bawah Tanda Akar (Radicand):**
   Untuk akar kuadrat $\sqrt{f(x)}$, nilai di bawah tanda akar wajib memenuhi syarat numerus/radikand:
   $$f(x) \ge 0$$
   Jika $f(x) < 0$, hasilnya berada di luar semesta bilangan real ($\mathbb{R}$).
2. **Aturan Penjumlahan Bentuk Akar:**
   Bentuk akar hanya dapat dijumlahkan atau dikurangkan jika **indeks akar dan radikand sama** (akar sejenis).
   $$\sqrt{2} + \sqrt{3} \neq \sqrt{5} \quad (\text{SALAH BESAR!})$$
3. **Identitas Nilai Mutlak:**
   $$\sqrt{a^2} = |a| = \begin{cases} a, & \text{jika } a \ge 0 \\ -a, & \text{jika } a < 0 \end{cases}$$
""",
    "contoh_kontekstual": r"""
### Contoh Kasus Riil & Kontekstual
**Kasus 1: Hambatan Gelombang Listrik dan Rasionalkan Impedansi**
Dalam perancangan sirkuit transmisi gelombang mikro, nilai impedansi dinormalisasi $Z$ dihitung sebagai:
$$Z = \frac{12}{\sqrt{7} - \sqrt{3}}$$
Rasionalkan bentuk impedansi tersebut!

*Penyelesaian Langkah Demi Langkah:*
1. Tentukan faktor sekawan dari penyebut $(\sqrt{7} - \sqrt{3})$, yaitu $(\sqrt{7} + \sqrt{3})$.
2. Kalikan pembilang dan penyebut dengan sekawan:
   $$Z = \frac{12}{\sqrt{7} - \sqrt{3}} \times \frac{\sqrt{7} + \sqrt{3}}{\sqrt{7} + \sqrt{3}}$$
3. Hitung penyebut menggunakan selisih dua kuadrat:
   $$(\sqrt{7} - \sqrt{3})(\sqrt{7} + \sqrt{3}) = (\sqrt{7})^2 - (\sqrt{3})^2 = 7 - 3 = 4$$
4. Sederhanakan pecahan:
   $$Z = \frac{12(\sqrt{7} + \sqrt{3})}{4} = 3(\sqrt{7} + \sqrt{3}) = 3\sqrt{7} + 3\sqrt{3}$$
""",
    "trik_cepat": r"""
### Trik Analisis Cepat (Fast Analysis Tricks)
1. **Trik Sekawan Cepat (One-Line Conjugate):**
   Untuk pecahan berbentuk $\frac{c}{\sqrt{a} \pm \sqrt{b}}$, hasil akhirnya selalu:
   $$\frac{c \times (\text{lawan tanda})}{\text{selisih angka } (a - b)}$$
   Contoh: $\frac{6}{\sqrt{5} - \sqrt{2}} = \frac{6(\sqrt{5} + \sqrt{2})}{5 - 2} = \frac{6(\sqrt{5} + \sqrt{2})}{3} = 2(\sqrt{5} + \sqrt{2})$.
2. **Trik Akar Kuadrat Ganda:**
   Cari dua angka yang dijumlahkan $= p$ dan dikalikan $= q$ untuk $\sqrt{p \pm 2\sqrt{q}}$.
   Contoh: $\sqrt{8 + 2\sqrt{15}}$ $\rightarrow$ cari dua angka dijumlahkan 8, dikalikan 15 yaitu 5 dan 3.
   Hasil langsung: $\sqrt{5} + \sqrt{3}$.
"""
}

with open("data/modules/subchapter_1_2.json", "w", encoding="utf-8") as f:
    json.dump(sub_1_2, f, ensure_ascii=False, indent=2)

print("Generated subchapter_1_2.json successfully.")
