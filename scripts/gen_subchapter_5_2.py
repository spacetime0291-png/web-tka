import json

sub_5_2 = {
    "sub_chapter_id": "5.2",
    "module_id": "MOD-5",
    "module_name": "Data & Peluang",
    "title": "Ukuran Pemusatan & Penyebaran Data Tunggal/Kelompok",
    "teori_definisi": r"""
### 1. Ukuran Pemusatan Data (Measures of Central Tendency)
Ukuran pemusatan adalah nilai tunggal yang mewakili kecenderungan memusatnya sekumpulan data statistik.
1. **Mean (Rata-rata Hitung - $\bar{x}$):**
   Jumlah seluruh nilai data dibagi dengan banyaknya data.
   - **Rata-rata Gabungan:** Menggabungkan dua atau lebih kelompok data dengan ukuran sampel $n_1, n_2, \dots$ dan rata-rata $\bar{x}_1, \bar{x}_2, \dots$.
2. **Median ($Me = Q_2$):**
   Nilai tengah dari sekumpulan data setelah diurutkan dari yang terkecil hingga terbesar. Membagi data menjadi dua bagian sama banyak ($50\%$ di bawah dan $50\%$ di atas). Kebal terhadap nilai ekstrem (*outlier*).
3. **Modus ($Mo$):**
   Nilai atau kelas interval yang memiliki frekuensi kemunculan paling tinggi.

### 2. Ukuran Letak Data (Measures of Position)
1. **Kuartil ($Q_1, Q_2, Q_3$):** Tiga nilai yang membagi data terurut menjadi 4 bagian sama banyak:
   - $Q_1$ (Kuartil Bawah / 25% data pertama)
   - $Q_2$ (Kuartil Tengah / Median / 50% data)
   - $Q_3$ (Kuartil Atas / 75% data)
2. **Desil ($D_1 \dots D_9$):** Membagi data terurut menjadi 10 bagian sama besar.
3. **Persentil ($P_1 \dots P_{99}$):** Membagi data terurut menjadi 100 bagian sama besar.

### 3. Ukuran Penyebaran Data (Measures of Dispersion)
Mengukur seberapa jauh nilai-nilai data tersebar atau menyimpang dari rata-ratanya:
1. **Jangkauan (Range - $J$):** Selisih nilai maksimum dan nilai minimum ($J = x_{\max} - x_{\min}$).
2. **Jangkauan Antarkuartil (Hamparan - $H$):** $H = Q_3 - Q_1$.
3. **Simpangan Kuartil (Rentang Semiantarkuartil - $Q_d$):** $Q_d = \frac{1}{2} (Q_3 - Q_1)$.
4. **Simpangan Rata-Rata ($SR$):** Rata-rata dari nilai mutlak selisih setiap data terhadap rata-ratanya.
5. **Ragam / Varians ($S^2$) & Simpangan Baku ($S$):** Rata-rata kuadrat selisih data terhadap mean, dan akar kuadratnya.
""",
    "rumus_katex": r"""
### Formulasi Lengkap Data Tunggal & Kelompok
1. **Mean (Rata-Rata):**
   - Data Tunggal:
     $$\bar{x} = \frac{\sum_{i=1}^n x_i}{n}$$
   - Rata-Rata Gabungan:
     $$\bar{x}_{\text{gab}} = \frac{n_1 \bar{x}_1 + n_2 \bar{x}_2}{n_1 + n_2}$$
   - Data Berkelompok:
     $$\bar{x} = \frac{\sum_{i=1}^k f_i x_i}{\sum_{i=1}^k f_i} = \bar{x}_s + \left( \frac{\sum f_i d_i}{\sum f_i} \right) \times p$$

2. **Median Data Kelompok:**
   $$Me = T_b + \left( \frac{\frac{1}{2}N - F_k}{f_m} \right) \times p$$
   Di mana $T_b$ adalah tepi bawah kelas median, $N = \Sigma f$, $F_k$ adalah frekuensi kumulatif sebelum kelas median, $f_m$ adalah frekuensi kelas median, dan $p$ adalah panjang interval kelas.

3. **Modus Data Kelompok:**
   $$Mo = T_b + \left( \frac{d_1}{d_1 + d_2} \right) \times p$$
   Di mana $d_1 = f_{mo} - f_{mo-1}$ (selisih frekuensi kelas modus dengan kelas sebelumnya), dan $d_2 = f_{mo} - f_{mo+1}$ (selisih frekuensi kelas modus dengan kelas sesudahnya).

4. **Kuartil ke-$i$ Data Kelompok ($i = 1, 2, 3$):**
   $$Q_i = T_b + \left( \frac{\frac{i}{4}N - F_k}{f_{Q_i}} \right) \times p$$

5. **Ukuran Penyebaran (Data Tunggal):**
   $$SR = \frac{\sum |x_i - \bar{x}|}{n}$$
   $$\text{Varians: } S^2 = \frac{\sum (x_i - \bar{x})^2}{n}$$
   $$\text{Simpangan Baku: } S = \sqrt{\frac{\sum (x_i - \bar{x})^2}{n}}$$
""",
    "karakteristik_batasan": r"""
### Karakteristik & Batasan Kasus
1. **Sifat Aljabar Rata-Rata, Median, dan Simpangan:**
   Jika setiap nilai data $x_i$ diubah menjadi $y_i = a x_i + b$:
   - Ukuran Pemusatan & Letak (Mean, Median, Modus, Kuartil) **berubah linier**:
     $$\bar{y} = a\bar{x} + b, \quad Me_y = a Me_x + b$$
   - Ukuran Penyebaran (Jangkauan, $H, Q_d, SR, S$) **hanya terpengaruh oleh faktor kali $|a|$**, sama sekali **tidak terpengaruh oleh penambahan konstanta $b$**:
     $$J_y = |a| J_x, \quad S_y = |a| S_x$$
2. **Karakteristik Skala Maksimum Nilai Ujian (Kasus Soal No. 42):**
   Jika rentang nilai memiliki batas skala atas tertentu (misal skala 0 sampai 100), maka nilai terendah suatu subset data dibatasi oleh kondisi ekstrem ketika data lainnya mencapai batas maksimum 100.
""",
    "contoh_kontekstual": r"""
### Contoh Kasus Riil & Kontekstual
**Kasus 1: Modus Berat Badan Peserta CPNS (Tipe Soal No. 24)**
Tabel frekuensi berat badan 40 peserta:
- $50-54$ (4), $55-59$ (8), $60-64$ (14), $65-69$ (10), $70-74$ (4).
Hitung modus data tersebut!
*Penyelesaian Langkah Demi Langkah:*
1. Kelas modus adalah kelas dengan frekuensi terbanyak: $60 - 64$ ($f = 14$).
2. Identifikasi parameter:
   - Tepi bawah: $T_b = 60 - 0{,}5 = 59{,}5$
   - Selisih frekuensi kelas sebelum: $d_1 = 14 - 8 = 6$
   - Selisih frekuensi kelas sesudah: $d_2 = 14 - 10 = 4$
   - Panjang kelas: $p = 64 - 60 + 1 = 5$
3. Hitung Modus:
   $$Mo = 59{,}5 + \left( \frac{6}{6 + 4} \right) \times 5 = 59{,}5 + 3 = 62{,}5\text{ kg}$$
(Sesuai Kunci C Soal No. 24).

**Kasus 2: Rata-Rata Gabungan Nilai Ulangan 3 Murid Susulan (Tipe Soal No. 42)**
Rata-rata nilai 17 murid adalah 83. Masuk 3 murid susulan sehingga rata-rata 20 murid menjadi 82.
1. Total nilai 20 murid: $20 \times 82 = 1.640$.
2. Total nilai 17 murid awal: $17 \times 83 = 1.411$.
3. Jumlah nilai 3 murid susulan: $1.640 - 1.411 = 229$ (Pernyataan 1 BENAR).
4. Rata-rata 3 murid susulan: $\bar{x} = \frac{229}{3} \approx 76{,}33 > 70$ (Pernyataan 2 BENAR).
5. Nilai terendah: jika 2 murid meraih nilai 100, nilai terendah $= 229 - 200 = 29 \implies$ tidak kurang dari 29 (Pernyataan 3 BENAR).
6. Nilai tertinggi: karena rata-rata $76{,}33$, nilai tertinggi pasti $\ge 77 > 76$ (Pernyataan 4 BENAR).
(Sesuai Kunci Pernyataan 1, 2, 3, dan 4 Soal No. 42).
""",
    "trik_cepat": r"""
### Trik Analisis Cepat (Fast Analysis Tricks)
1. **Trik Cepat Modus Data Kelompok:**
   Perhatikan rasio $\frac{d_1}{d_1 + d_2}$: jika $d_1 = d_2$, maka modus tepat berada di tengah interval kelas ($T_b + 0{,}5p$). Jika $d_1 > d_2$, modus bergeser condong mendekati tepi atas.
2. **Trik Rata-Rata Gabungan Seimbang (Metode Tuas/Timbangan):**
   $$n_1 (\bar{x}_1 - \bar{x}_{\text{gab}}) = n_2 (\bar{x}_{\text{gab}} - \bar{x}_2)$$
   Perbandingan selisih rata-rata berbanding terbalik dengan perbandingan jumlah frekuensi sampel:
   $$\frac{n_1}{n_2} = \frac{\bar{x}_{\text{gab}} - \bar{x}_2}{\bar{x}_1 - \bar{x}_{\text{gab}}}$$
"""
}

with open("data/modules/subchapter_5_2.json", "w", encoding="utf-8") as f:
    json.dump(sub_5_2, f, ensure_ascii=False, indent=2)

print("Generated subchapter_5_2.json successfully.")
