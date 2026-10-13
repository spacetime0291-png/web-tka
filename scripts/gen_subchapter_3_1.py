import json

sub_3_1 = {
    "sub_chapter_id": "3.1",
    "module_id": "MOD-3",
    "module_name": "Geometri & Pengukuran",
    "title": "Sudut, Garis & Bidang",
    "teori_definisi": r"""
### 1. Hubungan Antar Sudut
Dua sudut dapat memiliki keterkaitan geometris khusus:
1. **Sudut Berpenyiku (Komplemen):** Dua sudut yang jumlah besarnya sama dengan $90^\circ$.
   $$\alpha + \beta = 90^\circ \implies \beta = 90^\circ - \alpha$$
2. **Sudut Berpelurus (Suplemen):** Dua sudut yang bersebelahan pada satu garis lurus sehingga jumlah besarnya sama dengan $180^\circ$.
   $$\alpha + \beta = 180^\circ \implies \beta = 180^\circ - \alpha$$
3. **Sudut Bertolak Belakang:** Dua sudut yang terbentuk dari perpotongan dua garis lurus dan saling membelakangi. Besarnya **selalu sama besar**:
   $$\angle 1 = \angle 3 \quad \text{dan} \quad \angle 2 = \angle 4$$

### 2. Sudut pada Dua Garis Sejajar yang Dipotong Transversal
Jika dua garis sejajar $k \parallel l$ dipotong oleh sebuah garis transversal $m$, terbentuk 8 sudut dengan hubungan baku:
1. **Sudut Sehadap (Corresponding Angles):** Menghadap arah yang sama $\implies$ **sama besar** ($\angle 1 = \angle 5, \angle 2 = \angle 6$).
2. **Sudut Berseberangan Dalam (Alternate Interior):** Berada di antara dua garis sejajar dan berseberangan sisi transversal $\implies$ **sama besar** ($\angle 3 = \angle 5, \angle 4 = \angle 6$).
3. **Sudut Berseberangan Luar (Alternate Exterior):** Berada di luar dua garis sejajar dan berseberangan sisi transversal $\implies$ **sama besar** ($\angle 1 = \angle 7, \angle 2 = \angle 8$).
4. **Sudut Sepihak Dalam (Consecutive Interior):** Berada di antara dua garis sejajar dan di sisi yang sama dari transversal $\implies$ **berjumlah $180^\circ$** ($\angle 3 + \\angle 6 = 180^\circ, \angle 4 + \angle 5 = 180^\circ$).
5. **Sudut Sepihak Luar (Consecutive Exterior):** Berada di luar dan di sisi yang sama $\implies$ **berjumlah $180^\circ$** ($\angle 1 + \angle 8 = 180^\circ, \angle 2 + \angle 7 = 180^\circ$).

### 3. Kedudukan Titik, Garis, dan Bidang dalam Ruang
1. **Kedudukan Dua Garis:**
   - **Sejajar ($k \parallel l$):** Terletak pada satu bidang dan tidak pernah berpotongan.
   - **Berpotongan ($k \cap l = \{P\}$):** Terletak pada satu bidang dan bertemu di tepat satu titik.
   - **Berimpit:** Setiap titik pada satu garis terletak pada garis lainnya.
   - **Bersilangan (Skew):** Tidak terletak pada satu bidang datar yang sama, tidak sejajar, dan tidak pernah berpotongan (contoh rusuk kubus: $AD$ dan $CG$).
2. **Garis dan Bidang:**
   - Garis terletak pada bidang (seluruh titik garis berada pada bidang).
   - Garis sejajar bidang (tidak memiliki titik persekutuan).
   - Garis menembus/memotong bidang (memiliki tepat 1 titik tembus).
""",
    "rumus_katex": r"""
### Formulasi Sudut & Garis Sejajar
1. **Identitas Sudut Berelasi:**
   $$\angle A + \angle B = 90^\circ \quad (\text{Komplementer})$$
   $$\angle A + \angle B = 180^\circ \quad (\text{Suplementer})$$

2. **Aturan Sudut Transversal Dua Garis Sejajar ($k \parallel l$):**
   $$\angle \text{Sehadap}: \angle A = \angle B$$
   $$\angle \text{Berseberangan}: \angle A = \angle B$$
   $$\angle \text{Sepihak}: \angle A + \angle B = 180^\circ$$

3. **Jumlah Sudut Interior Poligon:**
   Jumlah sudut dalam poligon cembung dengan $n$ sisi:
   $$\Sigma \theta = (n - 2) \times 180^\circ$$
   - Segitiga ($n = 3$): $180^\circ$
   - Segiempat/Trapesium ($n = 4$): $360^\circ$
""",
    "karakteristik_batasan": r"""
### Karakteristik & Batasan Kasus
1. **Garis Bersilangan vs Berpotongan:**
   Dua garis yang tidak sejajar belum tentu berpotongan jika berada di ruang tiga dimensi ($\mathbb{R}^3$). Garis bersilangan tidak berada dalam satu bidang datar!
2. **Karakteristik Trapesium Sama Kaki:**
   Pada trapesium sama kaki $ABCD$ dengan $AD = BC$ dan $AB \parallel DC$:
   - Sudut alas sama besar: $\angle DAB = \angle CBA$.
   - Sudut atas sama besar: $\angle ADC = \angle BCD$.
   - Sudut alas dan sudut atas sepihak saling berpelurus: $\angle DAB + \angle ADC = 180^\circ$.
""",
    "contoh_kontekstual": r"""
### Contoh Kasus Riil & Kontekstual
**Kasus 1: Besar Sudut pada Trapesium Sama Kaki (Tipe Soal No. 39)**
Pada trapesium $ABCD$, diketahui $AD = BC$, $AB \parallel DC$, $AB > DC$, $\angle BAD = 70^\circ$, dan $\angle ABD = 30^\circ$.
Tentukan kebenaran dari pernyataan berikut:
A. $\angle BCD = 110^\circ$
B. $\angle CBD = 40^\circ$
C. $\angle BDC = 40^\circ$

*Penyelesaian Langkah Demi Langkah:*
1. Sifat trapesium sama kaki ($AD = BC$):
   Sudut-sudut pada alas yang sama besarnya sama:
   $$\angle ABC = \angle BAD = 70^\circ$$
2. Hitung $\angle BCD$ (sudut sepihak dalam garis sejajar $AB \parallel DC$):
   $$\angle ABC + \angle BCD = 180^\circ \implies \angle BCD = 180^\circ - 70^\circ = 110^\circ$$
   *(Pernyataan A: $\angle BCD = 110^\circ \implies$ BENAR)*.
3. Hitung $\angle CBD$:
   Diketahui garis diagonal $BD$ membagi sudut $\angle ABC$ menjadi $\angle ABD = 30^\circ$ dan $\angle CBD$.
   $$\angle CBD = \angle ABC - \angle ABD = 70^\circ - 30^\circ = 40^\circ$$
   *(Pernyataan B: $\angle CBD = 40^\circ \implies$ BENAR)*.
4. Hitung $\angle BDC$ (sudut berseberangan dalam dengan $\angle ABD$ terhadap transversal $BD$):
   Karena $AB \parallel DC$, sudut $\angle BDC$ berseberangan dalam dengan $\angle ABD$:
   $$\angle BDC = \angle ABD = 30^\circ \neq 40^\circ$$
   *(Pernyataan C: $\angle BDC = 40^\circ \implies$ SALAH)*.
Hasil Kategori: **A. Benar, B. Benar, C. Salah** (Sesuai Kunci Soal No. 39).
""",
    "trik_cepat": r"""
### Trik Analisis Cepat (Fast Analysis Tricks)
1. **Trik Huruf 'Z' untuk Sudut Berseberangan:**
   Bayangkan bentuk huruf 'Z' yang dibentuk oleh garis sejajar dan garis potong. Sudut pada kedua lekukan dalam huruf 'Z' selalu **sama besar** ($\angle \text{dalam Z} = \angle \text{dalam Z}$).
2. **Trik Huruf 'C' / 'U' untuk Sudut Sepihak:**
   Bayangkan bentuk huruf 'C' yang terbentuk antara dua garis sejajar. Dua sudut di dalam lengkungan huruf 'C' selalu **berjumlah $180^\circ$**!
"""
}

with open("data/modules/subchapter_3_1.json", "w", encoding="utf-8") as f:
    json.dump(sub_3_1, f, ensure_ascii=False, indent=2)

print("Generated subchapter_3_1.json successfully.")
