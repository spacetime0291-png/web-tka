import json

sub_2_5 = {
    "sub_chapter_id": "2.5",
    "module_id": "MOD-2",
    "module_name": "Aljabar",
    "title": "Barisan & Deret Aritmetika",
    "teori_definisi": r"""
### 1. Definisi Barisan & Deret Aritmetika
- **Barisan Aritmetika:** Barisan bilangan real di mana selisih antara dua suku yang berurutan selalu tetap (konstan). Selisih tetap ini disebut **beda ($b$)**.
  $$U_1, U_2, U_3, \dots, U_n$$
  $$b = U_2 - U_1 = U_3 - U_2 = \dots = U_n - U_{n-1}$$
  Jika $b > 0$, barisan disebut **barisan naik** (monoton bertambah).
  Jika $b < 0$, barisan disebut **barisan turun** (monoton berkurang).
- **Deret Aritmetika:** Jumlah beruntun dari suku-suku barisan aritmetika:
  $$S_n = U_1 + U_2 + U_3 + \dots + U_n = \sum_{k=1}^n U_k$$

### 2. Suku Tengah & Sisipan Barisan Aritmetika
- **Suku Tengah ($U_t$):** Pada barisan aritmetika dengan banyak suku ganjil ($n = 2k - 1$), terdapat suku tengah tepat di posisi $t = \frac{n+1}{2}$:
  $$U_t = \frac{U_1 + U_n}{2} = \frac{a + U_n}{2}$$
- **Sisipan Bilangan:** Jika di antara dua bilangan $x$ dan $y$ disisipkan $k$ buah bilangan sehingga membentuk barisan aritmetika baru, maka beda barisan baru ($b'$) adalah:
  $$b' = \frac{y - x}{k + 1}$$
""",
    "rumus_katex": r"""
### Daftar Rumus Lengkap Aritmetika
1. **Suku ke-$n$ ($U_n$):**
   $$U_n = a + (n - 1)b$$
   Di mana $a = U_1$ (suku pertama), $b$ (beda), dan $n$ (nomor urut suku, $n \in \mathbb{N}$).

2. **Jumlah $n$ Suku Pertama ($S_n$):**
   $$S_n = \frac{n}{2} (a + U_n)$$
   $$S_n = \frac{n}{2} [2a + (n - 1)b]$$

3. **Hubungan Fundamental Antara $S_n$ dan $U_n$:**
   $$U_n = S_n - S_{n-1}, \quad \text{untuk } n \ge 2$$
   $$U_1 = S_1$$

4. **Karakteristik Jumlah Kuadratik:**
   $S_n$ selalu merupakan fungsi kuadrat terhadap $n$ tanpa konstanta bebas:
   $$S_n = A n^2 + B n \implies b = 2A, \quad a = A + B$$
""",
    "karakteristik_batasan": r"""
### Karakteristik & Batasan Kasus
1. **Beda Konstan Linear:**
   Laju perubahan suku adalah konstan linear (analog dengan fungsi linear $f(x) = bx + c$).
2. **Indeks Suku Bulat Positif:**
   Nomor urut suku $n$ wajib bilangan asli ($n \in \{1, 2, 3, \dots\}$). Jika dalam pemodelan diperoleh $n$ pecahan atau negatif, nilai tersebut tidak memiliki interpretasi fisik pada urutan barisan.
3. **Penyisipan Suku:**
   Banyak suku baru setelah disisipkan $k$ bilangan pada setiap interval dari barisan awal yang memiliki $n$ suku adalah:
   $$n' = n + (n - 1)k$$
""",
    "contoh_kontekstual": r"""
### Contoh Kasus Riil & Kontekstual
**Kasus 1: Evaluasi Laba Usaha Kafe (Tipe Soal No. 17)**
Manajer sebuah kafe mencatat pertumbuhan laba bersih bulanan yang membentuk barisan aritmetika. Pada bulan ke-3 laba tercatat Rp14.000.000,00 dan pada bulan ke-7 tercatat Rp26.000.000,00.
Tentukan kebenaran dari: (A) beda laba Rp3.500.000,00, (B) laba bulan pertama Rp6.000.000,00, (C) akumulasi laba 10 bulan Rp215.000.000,00!

*Penyelesaian Langkah Demi Langkah:*
1. Susun sistem persamaan suku ke-$n$:
   $$U_3 = a + 2b = 14.000.000$$
   $$U_7 = a + 6b = 26.000.000$$
2. Eliminasi suku pertama $a$:
   $$(a + 6b) - (a + 2b) = 26.000.000 - 14.000.000 \implies 4b = 12.000.000 \implies b = 3.000.000$$
   *(Pernyataan A: penambahan laba 3,5 juta $\implies$ SALAH, yang benar 3,0 juta)*.
3. Hitung laba bulan pertama ($a$):
   $$a = 14.000.000 - 2(3.000.000) = 8.000.000$$
   *(Pernyataan B: laba bulan pertama 6 juta $\implies$ SALAH, yang benar 8,0 juta)*.
4. Hitung akumulasi laba 10 bulan ($S_{10}$):
   $$S_{10} = \frac{10}{2} [2(8.000.000) + (10 - 1)(3.000.000)] = 5 \times [16.000.000 + 27.000.000] = 5 \times 43.000.000 = 215.000.000$$
   *(Pernyataan C: total laba 215 juta $\implies$ BENAR)*.
Hasil Kategori: **Salah - Salah - Benar** (Sesuai Kunci Soal No. 17).
""",
    "trik_cepat": r"""
### Trik Analisis Cepat (Fast Analysis Tricks)
1. **Trik Selisih Suku Lompat (Direct Difference):**
   Untuk sembarang suku ke-$m$ dan ke-$n$:
   $$U_m - U_n = (m - n)b \implies b = \frac{U_m - U_n}{m - n}$$
   Contoh: $b = \frac{U_7 - U_3}{7 - 3} = \frac{26.000.000 - 14.000.000}{4} = \frac{12.000.000}{4} = 3.000.000$ dalam satu tarikan nafas!
2. **Trik Deret Kuadratik Cepat:**
   Jika diketahui $S_n = 3n^2 + 5n$, maka langsung:
   - Beda: $b = 2 \times 3 = 6$
   - Suku pertama: $a = S_1 = 3(1)^2 + 5(1) = 8$
   - Suku ke-$n$: $U_n = 6n + (8 - 6) = 6n + 2$
"""
}

with open("data/modules/subchapter_2_5.json", "w", encoding="utf-8") as f:
    json.dump(sub_2_5, f, ensure_ascii=False, indent=2)

print("Generated subchapter_2_5.json successfully.")
