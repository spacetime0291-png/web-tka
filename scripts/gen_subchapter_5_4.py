import json

sub_5_4 = {
    "sub_chapter_id": "5.4",
    "module_id": "MOD-5",
    "module_name": "Data & Peluang",
    "title": "Peluang Tunggal & Majemuk",
    "teori_definisi": r"""
### 1. Definisi Formal Peluang Kejadian Tunggal
- **Percobaan Acak:** Tindakan atau proses yang menghasilkan luaran (*outcome*) yang tidak dapat dipastikan sebelumnya secara mutlak, namun seluruh kemungkinan luarannya dapat didaftar.
- **Ruang Sampel ($S$):** Himpunan seluruh kemungkinan hasil dari suatu percobaan acak. Banyaknya anggota ruang sampel dinotasikan $n(S)$.
- **Kejadian ($A$):** Suatu himpunan bagian (*subset*) dari ruang sampel ($A \subseteq S$).
- **Peluang Klasik Kejadian $A$:**
  $$P(A) = \frac{n(A)}{n(S)}$$
  Dengan batasan nilai aksiomatis: $0 \le P(A) \le 1$.
  - Jika $P(A) = 0$, peristiwa disebut **kemustahilan** (impossible event).
  - Jika $P(A) = 1$, peristiwa disebut **kepastian** (certain event).

### 2. Frekuensi Harapan & Peluang Komplemen
- **Frekuensi Harapan ($F_h$):** Banyaknya kemunculan kejadian $A$ yang diharapkan terjadi dalam $N$ kali percobaan berulang:
  $$F_h(A) = N \times P(A)$$
- **Peluang Komplemen ($A'$ atau $A^c$):** Peluang tidak terjadinya peristiwa $A$:
  $$P(A') = 1 - P(A) \iff P(A) + P(A') = 1$$

### 3. Peluang Kejadian Majemuk
1. **Kejadian Saling Lepas (Mutually Exclusive):** Dua kejadian $A$ dan $B$ tidak mungkin terjadi secara bersamaan ($A \cap B = \emptyset$):
   $$P(A \cup B) = P(A) + P(B)$$
2. **Kejadian Tidak Saling Lepas:** Dua kejadian dapat terjadi bersamaan ($A \cap B \neq \emptyset$):
   $$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$
3. **Kejadian Saling Bebas (Independent Events):** Terjadinya peristiwa $A$ sama sekali tidak memengaruhi peluang terjadinya peristiwa $B$:
   $$P(A \cap B) = P(A) \times P(B)$$
4. **Kejadian Bersyarat (Conditional Probability / Tanpa Pengembalian):** Peluang terjadinya peristiwa $B$ dengan syarat peristiwa $A$ telah terjadi sebelumnya:
   $$P(B|A) = \frac{P(A \cap B)}{P(A)} \iff P(A \cap B) = P(A) \times P(B|A)$$
""",
    "rumus_katex": r"""
### Formulasi Lengkap Peluang
1. **Peluang Pengambilan Bertahap Tanpa Pengembalian:**
   $$P(A_1 \cap A_2) = \frac{n(A_1)}{N} \times \frac{n(A_2)}{N - 1}$$

2. **Peluang Minimal Satu Peristiwa Terjadi (Aturan Komplemen):**
   Jika kejadian $A$ dan $B$ saling bebas:
   $$P(\text{minimal 1}) = 1 - P(A' \cap B') = 1 - [P(A') \times P(B')]$$

3. **Frekuensi Harapan Percobaan:**
   $$F_h(A) = N \times P(A)$$

4. **Peluang Teoretis Pelemparan Dua Dadu ($n(S) = 36$):**
   Jumlah mata dadu:
   - Jumlah 7: 6 cara $\implies P = \frac{6}{36} = \frac{1}{6}$
   - Kembar: 6 cara $\implies P = \frac{6}{36} = \frac{1}{6}$
   - Jumlah prima (2, 3, 5, 7, 11): 15 cara $\implies P = \frac{15}{36} = \frac{5}{12}$
""",
    "karakteristik_batasan": r"""
### Karakteristik & Batasan Kasus
1. **Pengembalian (With Replacement) vs Tanpa Pengembalian (Without Replacement):**
   - Dengan pengembalian: Ruang sampel tetap konstan ($N$), kejadian saling bebas.
   - Tanpa pengembalian: Ruang sampel berkurang ($N - 1$), peluang tahapan berikutnya adalah peluang bersyarat.
2. **Kupon Kosong yang Dimasukkan Kembali (Kasus Khusus Soal No. 33):**
   Perhatikan narasi kontekstual secara teliti! Jika kupon zonk/kosong dimasukkan kembali ke dalam wadah, maka kupon tersebut tidak mengurangi total ruang sampel, sedangkan hadiah yang sudah diambil permanen akan mengurangi total kupon di wadah.
""",
    "contoh_kontekstual": r"""
### Contoh Kasus Riil & Kontekstual
**Kasus 1: Pengambilan Bola Tanpa Pengembalian (Tipe Soal No. 1)**
Kotak berisi 4 bola merah, 3 bola putih, dan 5 bola hijau (total 12 bola). Diambil 2 bola satu per satu tanpa pengembalian. Berapakah peluang bola pertama merah dan bola kedua hijau?
*Penyelesaian Langkah Demi Langkah:*
1. Peluang bola pertama merah:
   $$P(M) = \frac{4}{12} = \frac{1}{3}$$
2. Peluang bola kedua hijau (sisa bola berkurang menjadi 11):
   $$P(H|M) = \frac{5}{11}$$
3. Peluang gabungan:
   $$P(M \cap H) = \frac{4}{12} \times \frac{5}{11} = \frac{20}{132} = \frac{5}{33}$$
(Sesuai Kunci C Soal No. 1).

**Kasus 2: Pelemparan Dua Dadu & Frekuensi Harapan (Tipe Soal No. 2)**
Dua dadu dilempar 180 kali.
- Peluang jumlah 7: $\frac{6}{36} = \frac{1}{6}$ (Pernyataan 1 BENAR).
- Frekuensi harapan mata dadu kembar ($P = \frac{6}{36} = \frac{1}{6}$):
  $$F_h = 180 \times \frac{1}{6} = 30\text{ kali}$$
  (Pernyataan 4 BENAR).
(Sesuai Kunci Pernyataan 1 dan 4 Soal No. 2).

**Kasus 3: Kupon Doorprize Pameran Wisata (Tipe Soal No. 33)**
Disediakan 40 kupon doorprize. Diketahui 1 tiket KL, 1 tiket Bangkok, dan 2 voucher hotel bintang 4 sudah terambil (total 4 hadiah permanen terambil). Seseorang yang gagal mengambil voucher kosong memasukkan kuponnya kembali.
Anto mengambil kupon berikutnya. Berapakah peluang Anto mendapat tiket KL?
- Sisa tiket KL $= 5 - 1 = 4$ tiket.
- Sisa total kupon di wadah $= 40 - 4 = 36$ kupon.
- Peluang $= \frac{4}{36}$ (Sesuai Kunci B Soal No. 33).

**Kasus 4: Peluang Seleksi Audisi Band (Tipe Soal No. 28)**
Peluang vokalis A terpilih $0{,}6$, gitaris B terpilih $0{,}5$. Peluang minimal satu terpilih:
$$P = 1 - [(1 - 0{,}6) \times (1 - 0{,}5)] = 1 - [0{,}4 \times 0{,}5] = 1 - 0{,}20 = 0{,}80$$
(Sesuai Kunci C Soal No. 28).
""",
    "trik_cepat": r"""
### Trik Analisis Cepat (Fast Analysis Tricks)
1. **Trik Piramida Jumlah Dua Dadu (Magic Triangle of Sum):**
   Banyaknya pasangan jumlah dua dadu membentuk pola segitiga simetris:
   - Jumlah: 2, 3, 4, 5, 6, **7**, 8, 9, 10, 11, 12
   - Banyak cara: 1, 2, 3, 4, 5, **6**, 5, 4, 3, 2, 1
   Puncak selalu di jumlah 7 dengan 6 cara!
2. **Trik Komplemen 'Minimal Satu':**
   Setiap kali menemukan frasa *"peluang paling sedikit / minimal satu"*, jangan hitung kasus per kasus! Gunakan trik komplemen:
   $$P(\ge 1) = 1 - P(\text{tidak ada sama sekali})$$
"""
}

with open("data/modules/subchapter_5_4.json", "w", encoding="utf-8") as f:
    json.dump(sub_5_4, f, ensure_ascii=False, indent=2)

print("Generated subchapter_5_4.json successfully.")
