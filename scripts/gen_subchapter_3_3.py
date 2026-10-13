import json

sub_3_3 = {
    "sub_chapter_id": "3.3",
    "module_id": "MOD-3",
    "module_name": "Geometri & Pengukuran",
    "title": "Dimensi Tiga / Kubus",
    "teori_definisi": r"""
### 1. Unsur-Unsur Geometri Dimensi Tiga pada Kubus $ABCD.EFGH$
Kubus dengan rusuk $s$ memiliki unsur-unsur pembangun:
1. **8 Titik Sudut:** $A, B, C, D, E, F, G, H$.
2. **12 Rusuk Sama Panjang:** Terdiri atas 3 kelompok arah orthogonal (4 rusuk panjang, 4 lebar, 4 tinggi).
3. **6 Bidang Sisi Berbentuk Persegi Kongruen:** Alas $ABCD$, atas $EFGH$, depan $ABFE$, belakang $DCGH$, kiri $ADHE$, kanan $BCGF$.
4. **12 Diagonal Bidang/Sisi:** Memiliki panjang $d_b = s\sqrt{2}$ (contoh: $AC, BD, AF, BE, BG, CF, \dots$).
5. **4 Diagonal Ruang:** Garis yang menghubungkan dua titik sudut yang saling berhadapan melintasi interior ruang: $AG, BH, CE, DF$. Memiliki panjang $d_r = s\sqrt{3}$.
6. **6 Bidang Diagonal:** Bidang persegi panjang di dalam kubus yang dibatasi dua rusuk dan dua diagonal bidang: $ABGH, CDEF, ADGF, BCHE, ACGE, BDHF$. Memiliki luas $L_{bd} = s^2\sqrt{2}$.

### 2. Kedudukan Garis dan Bidang pada Kubus
- **Sejajar:** $AB \parallel CD \parallel EF \parallel GH$. Begitu pula $BC \parallel AD$ dan $AD \parallel EH \implies BC \parallel EH$.
- **Berpotongan:** $AB$ dan $BC$ berpotongan tegak lurus di titik $B$.
- **Bersilangan (Skew):** Tidak sebidang dan tidak berpotongan.
  - $AD$ dan $FG$ saling bersilangan tegak lurus ($AD \perp FG$) karena $AD \parallel BC$ dan $BC \perp FG$.
  - $EF$ dan $CG$ saling bersilangan, tidak berpotongan.

### 3. Konsep Jarak dalam Ruang Tiga Dimensi
Jarak antara dua objek geometri (titik-titik, titik-garis, titik-bidang) didefinisikan sebagai **panjang ruas garis terpendek** yang menghubungkan keduanya, yang diperoleh melalui **proyeksi tegak lurus (ortogonal)**.
""",
    "rumus_katex": r"""
### Formulasi Lengkap Dimensi Tiga (Kubus Rusuk $s$)
1. **Panjang Diagonal:**
   $$\text{Diagonal Bidang: } d_b = s\sqrt{2}$$
   $$\text{Diagonal Ruang: } d_r = s\sqrt{3}$$

2. **Jarak Titik ke Titik:**
   Menggunakan Teorema Pythagoras dalam ruang 3D:
   $$d = \sqrt{(\Delta x)^2 + (\Delta y)^2 + (\Delta z)^2}$$

3. **Jarak Titik ke Garis:**
   Dihitung dengan membentuk segitiga antara titik dan garis, lalu menggunakan rumus luas segitiga:
   $$d(P, g) = \frac{2 \times \text{Luas}(\triangle PAB)}{AB}$$

4. **Jarak Titik Sudut ke Bidang Diagonal:**
   - Jarak titik $C$ ke bidang diagonal $BDHF$:
     Proyeksi titik $C$ ke bidang $BDHF$ jatuh tepat pada garis potong alas, yaitu diagonal $BD$ di titik pusat alas $O$.
     $$d(C, BDHF) = CO = \frac{1}{2} AC = \frac{1}{2} s\sqrt{2}$$
   - Jarak titik sudut ke bidang diagonal segitiga penampang ($AFH$ atau $BDE$):
     Garis diagonal ruang $CE$ dipotong menjadi 3 bagian sama panjang oleh bidang $AFH$ dan $BDE$:
     $$d(C, BDE) = \frac{1}{3} CE = \frac{1}{3} s\sqrt{3}$$
     $$d(E, BDE) = \frac{2}{3} CE = \frac{2}{3} s\sqrt{3}$$
""",
    "karakteristik_batasan": r"""
### Karakteristik & Batasan Kasus
1. **Pentingnya Garis Proyeksi Ortogonal:**
   Menentukan jarak titik ke bidang tidak boleh menarik garis sembarangan ke titik pojok bidang, melainkan **wajib tegak lurus** terhadap dua garis berpotongan yang terletak pada bidang tersebut.
2. **Karakteristik Garis Bersilangan:**
   Dua garis pada kubus dapat saling tegak lurus meskipun tidak pernah bertemu/berpotongan fisik (bersilangan tegak lurus).
""",
    "contoh_kontekstual": r"""
### Contoh Kasus Riil & Kontekstual
**Kasus 1: Hubungan Rusuk pada Kubus ABCD.EFGH (Tipe Soal No. 34)**
Diberikan kubus $ABCD.EFGH$. Tentukan Benar atau Salah:
A. $AD$ tegak lurus $FG$
B. $BC$ sejajar $EH$
C. $EF$ memotong $CG$

*Penyelesaian Langkah Demi Langkah:*
1. Pernyataan A: Rusuk $AD$ sejajar rusuk $BC$. Rusuk $BC$ tegak lurus terhadap bidang kanan $BCGF$ di mana $FG$ berada. Maka $AD$ tegak lurus bersilangan dengan $FG$. *(BENAR)*.
2. Pernyataan B: $BC$ sejajar $AD$ dan $AD$ sejajar $EH$. Berdasarkan sifat transitif, $BC \parallel EH$. *(BENAR)*.
3. Pernyataan C: Garis $EF$ berada di bidang atas $EFGH$. Garis $CG$ menembus bidang atas di titik $G$. Karena $EF$ tidak melalui titik $G$, garis $EF$ dan $CG$ bersilangan, tidak berpotongan. *(SALAH)*.
Kunci: **A. Benar, B. Benar, C. Salah** (Sesuai Kunci Soal No. 34).

**Kasus 2: Jarak Titik ke Bidang Diagonal (Tipe Soal No. 27)**
Pada kubus $ABCD.EFGH$ dengan panjang rusuk $6\text{ cm}$, hitung jarak antara titik $C$ ke bidang diagonal $BDHF$!
*Penyelesaian:*
1. Bidang $BDHF$ memuat ruas garis diagonal alas $BD$.
2. Jarak dari titik $C$ pada alas ke bidang $BDHF$ sama dengan jarak $C$ ke garis diagonal alas $BD$.
3. Diagonal persegi $AC \perp BD$ di titik pusat alas $O$.
   $$CO = \frac{1}{2} AC = \frac{1}{2} (s\sqrt{2}) = \frac{1}{2} \times 6\sqrt{2} = 3\sqrt{2}\text{ cm}$$
Jadi jarak titik $C$ ke bidang $BDHF$ adalah $\mathbf{3\sqrt{2}\text{ cm}}$ (Sesuai Kunci C Soal No. 27).
""",
    "trik_cepat": r"""
### Trik Analisis Cepat (Fast Analysis Tricks)
1. **Trik Diagonal Ruang $1/3$ dan $2/3$:**
   Setiap bidang segitiga diagonal seperti $AFH$ atau $BDE$ memotong diagonal ruang dengan rasio perbandingan $1 : 2$. Jarak titik sudut terdekat ke bidang tersebut selalu $\frac{1}{3} s\sqrt{3}$, sedangkan jarak titik terjauh adalah $\frac{2}{3} s\sqrt{3}$.
2. **Trik Jarak ke Bidang Diagonal Utama:**
   Jarak sembarang titik sudut kubus ke bidang diagonal vertikal yang memuat diagonal alas di dekatnya selalu sama dengan **setengah diagonal sisi** = $\frac{1}{2} s\sqrt{2}$.
"""
}

with open("data/modules/subchapter_3_3.json", "w", encoding="utf-8") as f:
    json.dump(sub_3_3, f, ensure_ascii=False, indent=2)

print("Generated subchapter_3_3.json successfully.")
