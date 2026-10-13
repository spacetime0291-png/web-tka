import json

sub_2_2 = {
    "sub_chapter_id": "2.2",
    "module_id": "MOD-2",
    "module_name": "Aljabar",
    "title": "SPtLDV & Program Linear",
    "teori_definisi": r"""
### 1. Definisi Pertidaksamaan Linear Dua Variabel (PtLDV) & Sistemnya (SPtLDV)
Pertidaksamaan Linear Dua Variabel (PtLDV) adalah kalimat terbuka matematika yang memuat dua variabel berderajat satu dan dihubungkan oleh tanda ketidaksamaan ($\le, <, \ge, >$).
Bentuk umum:
$$ax + by \le c, \quad ax + by \ge c, \quad ax + by < c, \quad ax + by > c$$
Kumpulan dari dua atau lebih PtLDV membentuk **Sistem Pertidaksamaan Linear Dua Variabel (SPtLDV)**.

### 2. Daerah Himpunan Penyelesaian (DHP)
DHP adalah irisan (himpunan titik $(x, y)$ pada bidang Kartesius) yang secara simultan memenuhi seluruh pertidaksamaan dalam sistem.
Langkah melukis DHP:
1. Gambar garis batas $ax + by = c$ dengan menentukan titik potong sumbu-$X$ ($(x_0, 0)$ saat $y = 0$) dan titik potong sumbu-$Y$ ($(0, y_0)$ saat $x = 0$).
2. Jika tanda pertidaksamaan $\le$ atau $\ge$, gunakan garis tegas (artinya titik pada garis termasuk penyelesaian). Jika tanda $<$ atau $>$, gunakan garis putus-putus.
3. Lakukan uji titik (biasanya titik selidik $(0, 0)$ jika garis tidak melalui titik asal). Jika benar, arsir daerah yang memuat $(0, 0)$; jika salah, arsir daerah sebaliknya.
4. Tentukan DHP bersih sebagai irisan seluruh daerah yang memenuhi.

### 3. Program Linear & Optimasi Fungsi Objektif
Program linear adalah metode matematis untuk mengoptimalkan (memaksimalkan keuntungan atau meminimalkan biaya) suatu fungsi sasaran/objektif:
$$Z = f(x, y) = ax + by$$
yang tunduk pada sejumlah kendala teknis (sumber daya, waktu, modal, kapasitas) serta kendala non-negatif:
$$x \ge 0, \quad y \ge 0$$
""",
    "rumus_katex": r"""
### Metode Uji Titik Pojok & Garis Selidik
1. **Teorema Titik Ekstrem (Fundamental Theorem of Linear Programming):**
   Jika Daerah Himpunan Penyelesaian (DHP) berbentuk poligon cembung tertutup dan terbatas (*bounded*), maka nilai optimum (maksimum atau minimum) dari fungsi objektif:
   $$Z = f(x, y) = ax + by$$
   **pasti tercapai pada salah satu titik pojok (verteks/titik sudut)** poligon DHP tersebut.

2. **Metode Garis Selidik:**
   Garis selidik dibentuk dari fungsi objektif:
   $$ax + by = k$$
   - Geser garis $ax + by = k$ sejajar ke arah kanan/atas untuk mencari **nilai maksimum** (titik pojok terakhir yang disentuh garis sebelum meninggalkan DHP).
   - Geser garis ke arah kiri/bawah untuk mencari **nilai minimum** (titik pojok pertama yang disentuh garis).
   - Gradien garis selidik adalah $m = -\frac{a}{b}$.

3. **Titik Potong Dua Garis Kendala:**
   Dihitung dengan menyelesaikan SPLDV eliminasi-substitusi antara dua garis batas:
   $$\begin{cases} a_1 x + b_1 y = c_1 \\ a_2 x + b_2 y = c_2 \end{cases}$$
""",
    "karakteristik_batasan": r"""
### Karakteristik & Batasan Kasus
1. **Kendala Non-Negatif Wajib:**
   Dalam masalah kontekstual nyata (jumlah kue, banyak barang, unit produksi), nilai variabel kuantitas tidak mungkin negatif. Sehingga kendala:
   $$x \ge 0 \quad \text{dan} \quad y \ge 0$$
   adalah **syarat mutlak** yang membatasi DHP hanya berada di Kuadran I.
2. **DHP Terbuka (Unbounded) vs Tertutup (Bounded):**
   - Jika DHP tertutup (dikelilingi garis pembatas), fungsi objektif memiliki nilai maksimum dan minimum sekaligus.
   - Jika DHP terbuka ke arah tak hingga (umum pada masalah minimasi biaya), nilai maksimum bisa tidak terhingga ($\infty$).
3. **Solusi Optimum Ganda (Multiple Optima):**
   Jika gradien fungsi objektif sama dengan gradien salah satu garis kendala ($-\frac{a}{b} = -\frac{a_k}{b_k}$), maka setiap titik di sepanjang segmen garis kendala tersebut merupakan titik optimum.
""",
    "contoh_kontekstual": r"""
### Contoh Kasus Riil & Kontekstual
**Kasus 1: Optimasi Keuntungan Produksi Toko Kue Mirna (Tipe Soal No. 37)**
Mirna memproduksi kue bolu ($x$) dan brownies ($y$) dengan modal Rp8.000.000,00. Biaya pembuatan bolu Rp15.000,00/kotak (laba 40% = Rp6.000,00), brownies Rp20.000,00/kotak (laba 35% = Rp7.000,00). Kapasitas produksi harian maksimal 500 kotak.
Tentukan jumlah produksi bolu dan brownies agar diperoleh keuntungan maksimum!

*Penyelesaian Langkah Demi Langkah:*
1. Susun Model Matematika:
   - Fungsi Objektif: Maksimumkan $Z = 6.000x + 7.000y$
   - Kendala Modal: $15.000x + 20.000y \le 8.000.000 \iff 3x + 4y \le 1.600$
   - Kendala Kapasitas: $x + y \le 500 \iff 3x + 3y \le 1.500$
   - Kendala Non-Negatif: $x \ge 0, y \ge 0$
2. Tentukan Titik Potong Dua Garis Kendala:
   $$(3x + 4y) - (3x + 3y) = 1.600 - 1.500 \implies y = 100$$
   $$x = 500 - 100 = 400$$
   Titik potong adalah $(400, 100)$.
3. Uji Seluruh Titik Pojok DHP:
   - Titik $O(0, 0) \implies Z = 0$
   - Titik potong sumbu-$X$: $(500, 0)$ (karena $3(500) = 1.500 \le 1.600$) $\implies Z = 6.000(500) = 3.000.000$
   - Titik potong sumbu-$Y$: $(0, 400)$ (dari $4y \le 1.600 \implies y \le 400 \le 500$) $\implies Z = 7.000(400) = 2.800.000$
   - Titik potong $(400, 100) \implies Z = 6.000(400) + 7.000(100) = 2.400.000 + 700.000 = 3.100.000$
4. Kesimpulan:
   Keuntungan maksimum adalah **Rp3.100.000,00** dengan memproduksi **400 kotak kue bolu** dan **100 kotak kue brownies** (Sesuai Kunci Soal No. 37).
""",
    "trik_cepat": r"""
### Trik Analisis Cepat (Fast Analysis Tricks)
1. **Trik Rasio Laba per Modal (Capital Efficiency Ratio):**
   Bandingkan rasio keuntungan terhadap modal:
   - Bolu: $\frac{6.000}{15.000} = 40\%$
   - Brownies: $\frac{7.000}{20.000} = 35\%$
   Karena persentase keuntungan bolu lebih tinggi (40% vs 35%), prioritas alokasi modal adalah memaksimalkan kue bolu sebanyak mungkin hingga dibatasi oleh kapasitas produksi fisik total.
2. **Trik Cepat Menentukan Titik Pojok Optimum:**
   Bandingkan gradien garis selidik $m_z = -\frac{a}{b}$ dengan gradien garis-garis kendala. Titik optimum selalu berada di perpotongan kendala yang mengapit gradien garis selidik.
"""
}

with open("data/modules/subchapter_2_2.json", "w", encoding="utf-8") as f:
    json.dump(sub_2_2, f, ensure_ascii=False, indent=2)

print("Generated subchapter_2_2.json successfully.")
