import json

sub_2_6 = {
    "sub_chapter_id": "2.6",
    "module_id": "MOD-2",
    "module_name": "Aljabar",
    "title": "Barisan & Deret Geometri & Aplikasi Finansial/Biologi",
    "teori_definisi": r"""
### 1. Definisi Formal Barisan & Deret Geometri
- **Barisan Geometri:** Barisan bilangan di mana perbandingan (rasio) antara suku yang berurutan selalu konstan.
  $$U_1, U_2, U_3, \dots, U_n$$
  $$r = \frac{U_2}{U_1} = \frac{U_3}{U_2} = \dots = \frac{U_n}{U_{n-1}}$$
- **Deret Geometri:** Jumlah suku-suku barisan geometri hingga suku ke-$n$ ($S_n$).
- **Deret Geometri Tak Hingga Konvergen:** Deret geometri dengan suku tak hingga yang memiliki nilai limit jumlah berhingga, tercapai jika dan hanya jika rasio memenuhi:
  $$|r| < 1 \iff -1 < r < 1$$
  Jika $|r| \ge 1$, deret disebut **divergen** (jumlahnya menuju $\pm\infty$).

### 2. Aplikasi Finansial & Pemodelan Eksponensial
1. **Bunga Tunggal (Simple Interest):**
   Bunga yang dihitung hanya berdasarkan modal awal (pokok) sepanjang seluruh periode investasi/pinjaman.
   $$M_n = M_0(1 + n \cdot i)$$
   Di mana $M_0$ adalah modal awal, $i$ adalah suku bunga per periode, dan $n$ adalah banyak periode.
2. **Bunga Majemuk (Compound Interest):**
   Bunga berbunga, di mana bunga yang diperoleh pada setiap periode ditambahkan ke modal pokok untuk menjadi dasar perhitungan bunga periode berikutnya.
   $$M_n = M_0(1 + i)^n$$
3. **Pertumbuhan Eksponensial (Growth):**
   Pemodelan peningkatan kuantitas secara proporsional terhadap nilai sebelumnya (misal: populasi penduduk, perkembangbiakan sel bakteri, peningkatan virus).
   $$N_t = N_0(1 + r)^t \quad \text{atau} \quad N_t = N_0 \cdot 2^{\frac{t}{T}}$$
4. **Peluruhan Eksponensial (Decay / Depresiasi):**
   Pemodelan penurunan kuantitas atau penyusutan nilai aset secara bertahap (misal: penyusutan nilai jual mesin kendaraan, peluruhan zat radioaktif).
   $$M_n = M_0(1 - p)^n \quad \text{atau} \quad N_t = N_0 \left(\frac{1}{2}\right)^{\frac{t}{T_{1/2}}}$$
""",
    "rumus_katex": r"""
### Formulasi Lengkap Geometri & Finansial
1. **Suku ke-$n$ Barisan Geometri:**
   $$U_n = a \cdot r^{n-1}$$
   Di mana $a = U_1$ adalah suku pertama dan $r$ adalah rasio.

2. **Jumlah $n$ Suku Pertama Deret Geometri:**
   $$S_n = \frac{a(r^n - 1)}{r - 1}, \quad \text{untuk } r > 1$$
   $$S_n = \frac{a(1 - r^n)}{1 - r}, \quad \text{untuk } r < 1 \text{ dan } r \neq 1$$

3. **Deret Geometri Tak Hingga Konvergen:**
   $$S_\infty = \frac{a}{1 - r}, \quad \text{syarat } -1 < r < 1$$

4. **Lintasan Total Pantulan Bola Jatuh:**
   Jika bola dijatuhkan dari ketinggian awal $h$ dan memantul vertikal dengan rasio tinggi $r = \frac{p}{q}$ ($p < q$):
   $$S_{\text{total}} = h + 2 \left( \frac{h \cdot \frac{p}{q}}{1 - \frac{p}{q}} \right) = h \left( \frac{q + p}{q - p} \right)$$

5. **Bunga Tunggal vs Bunga Majemuk:**
   $$\text{Bunga Tunggal: } B = M_0 \cdot i \cdot n \implies M_n = M_0(1 + n \cdot i)$$
   $$\text{Bunga Majemuk: } M_n = M_0(1 + i)^n$$
   $$\text{Peluruhan/Penyusutan Nilai: } M_n = M_0(1 - p)^n$$
""",
    "karakteristik_batasan": r"""
### Karakteristik & Batasan Kasus
1. **Perbandingan Pertumbuhan Linear vs Geometri:**
   - Pertumbuhan linear (aritmetika) memiliki laju pertambahan absolut konstan ($+b$).
   - Pertumbuhan eksponensial (geometri) memiliki laju pertambahan persentase konstan ($\times r$). Dalam jangka panjang, pertumbuhan geometri selalu melesat jauh melampaui pertumbuhan aritmetika.
2. **Kondisi Konvergensi Tak Hingga:**
   Deret tak hingga **hanya memiliki jumlah terbatas** jika $|r| < 1$. Jika $r = 1$ atau $r = -1$ atau $|r| > 1$, deret tidak konvergen.
3. **Penyusutan Fisik vs Akuntansi:**
   Pada peluruhan $M_n = M_0(1 - p)^n$, nilai $p$ harus berada pada selang $0 < p < 1$. Nilai aset selalu positif asimtotik mendekati nol, tidak pernah bernilai negatif.
""",
    "contoh_kontekstual": r"""
### Contoh Kasus Riil & Kontekstual
**Kasus 1: Penyusutan Mesin Roti Bobin Bakery (Tipe Soal No. 6)**
Sebuah mesin pembuat roti dibeli seharga Rp20.000.000,00. Setiap tahun nilai jual mesin menyusut secara eksponensial sebesar 10% dari harga tahun sebelumnya. Berapakah perkiraan harga jual mesin setelah 3 tahun?

*Penyelesaian Langkah Demi Langkah:*
1. Identifikasi parameter peluruhan geometri:
   $M_0 = 20.000.000$, persentase penyusutan $p = 10\% = 0{,}10$, periode $n = 3$ tahun.
2. Gunakan formula peluruhan:
   $$M_3 = M_0(1 - p)^3 = 20.000.000 \times (1 - 0{,}10)^3 = 20.000.000 \times (0{,}9)^3$$
3. Hitung pemangkatan:
   $$(0{,}9)^3 = 0{,}729$$
   $$M_3 = 20.000.000 \times 0{,}729 = 14.580.000$$
Nilai jual mesin setelah 3 tahun adalah **Rp14.580.000,00** (Sesuai Kunci E Soal No. 6).

**Kasus 2: Pantulan Bola Memantul Tak Hingga (Tipe Soal No. 12)**
Sebuah bola dijatuhkan dari ketinggian 12 meter dan memantul setinggi $\frac{2}{3}$ dari tinggi sebelumnya secara terus menerus hingga berhenti. Berapakah total panjang lintasan bola?
*Penyelesaian dengan Trik Cepat:*
Tinggi awal $h = 12$ meter, rasio pantul $r = \frac{p}{q} = \frac{2}{3} \implies p = 2, q = 3$.
$$S_{\text{total}} = h \times \frac{q + p}{q - p} = 12 \times \frac{3 + 2}{3 - 2} = 12 \times \frac{5}{1} = 60\text{ meter}$$
(Sesuai Kunci C Soal No. 12).

**Kasus 3: Beban Titik Gelagar Jembatan (Tipe Soal No. 21, 25, 30)**
Beban pada tumpuan gelagar jembatan ke-$n$ membentuk barisan geometri dengan $U_2 = 4\text{ ton}$ dan $U_5 = 32\text{ ton}$.
- Rasio: $\frac{U_5}{U_2} = \frac{a r^4}{a r} = r^3 = \frac{32}{4} = 8 \implies r = 2$.
- Suku pertama: $a = \frac{U_2}{r} = \frac{4}{2} = 2\text{ ton}$.
- Beban tumpuan ke-8: $U_8 = a r^7 = 2 \times 2^7 = 2 \times 128 = 256\text{ ton}$ (Sesuai Kunci E Soal No. 21).
""",
    "trik_cepat": r"""
### Trik Analisis Cepat (Fast Analysis Tricks)
1. **Trik Super Cepat Lintasan Bola Memantul:**
   $$S = h \times \frac{\text{Penyebut} + \text{Pembilang}}{\text{Penyebut} - \text{Pembilang}}$$
   Hanya butuh 3 detik tanpa perlu menjumlahkan deret naik dan turun secara terpisah!
2. **Aturan 72 (Rule of 72) Bunga Majemuk:**
   Untuk mengestimasi waktu yang dibutuhkan agar nilai investasi berganda dua kali lipat ($2 \times M_0$) dengan bunga majemuk $i\%$ per tahun:
   $$t \approx \frac{72}{i\%}$$
   Contoh: Dengan suku bunga $8\%$ per tahun, modal akan menjadi 2 kali lipat dalam waktu $\frac{72}{8} = 9$ tahun.
"""
}

with open("data/modules/subchapter_2_6.json", "w", encoding="utf-8") as f:
    json.dump(sub_2_6, f, ensure_ascii=False, indent=2)

print("Generated subchapter_2_6.json successfully.")
