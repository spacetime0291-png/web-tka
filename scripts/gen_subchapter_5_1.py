import json

sub_5_1 = {
    "sub_chapter_id": "5.1",
    "module_id": "MOD-5",
    "module_name": "Data & Peluang",
    "title": "Visualisasi Data Diagram & Grafik",
    "teori_definisi": r"""
### 1. Definisi & Tujuan Visualisasi Data
Visualisasi data adalah representasi grafis dari kumpulan data numerik dan kategori untuk mempermudah interpretasi, perbandingan, pendeteksian tren/pola, serta pengambilan keputusan strategis.
Bentuk-bentuk visualisasi standar:
1. **Diagram Batang (Bar Chart):** Menggunakan batang vertikal atau horizontal dengan lebar sama dan tinggi proporsional terhadap frekuensi kategori. Sangat efektif untuk membandingkan kuantitas antar kategori diskrit (misal: penjualan pakaian per bulan, proporsi pengunjung).
2. **Diagram Garis (Line Chart):** Menghubungkan titik-titik data koordinat waktu menggunakan segmen garis lurus. Digunakan secara utama untuk menampilkan data berkala (*time-series*) guna membaca **tren kenaikan, penurunan, atau fluktuasi** (misal: laba bulanan toko bunga).
3. **Diagram Lingkaran (Pie Chart):** Membagi sebuah lingkaran menjadi beberapa juring proporsional terhadap total keseluruhan ($100\%$ atau $360^\circ$). Digunakan untuk menampilkan komposisi pangsa pasar atau proporsi bagian dari keseluruhan.
4. **Tabel Distribusi Frekuensi:** Menyajikan pengelompokan data ke dalam interval-interval kelas berurutan beserta banyaknya frekuensi pengamatan pada tiap kelas.
5. **Histogram & Poligon Frekuensi:**
   - Histogram: Grafik batang rapat tanpa celah di mana sumbu mendatar menyatakan tepi kelas ($T_b$ dan $T_a$) dan sumbu tegak menyatakan frekuensi.
   - Poligon Frekuensi: Garis yang menghubungkan titik-titik tengah bagian atas setiap batang histogram.
6. **Ogive (Kurva Frekuensi Kumulatif):**
   - **Ogive Positif:** Kurva frekuensi kumulatif "kurang dari" yang monoton naik.
   - **Ogive Negatif:** Kurva frekuensi kumulatif "lebih dari" yang monoton turun.
""",
    "rumus_katex": r"""
### Formulasi Konversi & Interpretasi Data Visual
1. **Konversi Diagram Lingkaran:**
   $$\text{Besar Sudut Juring: } \theta_i = \frac{f_i}{\Sigma f} \times 360^\circ$$
   $$\text{Persentase Juring: } P_i = \frac{f_i}{\Sigma f} \times 100\%$$

2. **Laju Perubahan Persentase (Kenaikan / Penurunan):**
   $$\Delta \% = \frac{X_{\text{baru}} - X_{\text{lama}}}{X_{\text{lama}}} \times 100\%$$
   - Jika $\Delta \% > 0$: Persentase Kenaikan (Growth).
   - Jika $\Delta \% < 0$: Persentase Penurunan (Decline).

3. **Tepi Kelas & Titik Tengah Histogram:**
   $$\text{Tepi Bawah: } T_b = \text{Batas Bawah} - 0{,}5$$
   $$\text{Tepi Atas: } T_a = \text{Batas Atas} + 0{,}5$$
   $$\text{Titik Tengah: } x_i = \frac{\text{Batas Bawah} + \text{Batas Atas}}{2}$$
   $$\text{Panjang Interval: } p = T_a - T_b$$
""",
    "karakteristik_batasan": r"""
### Karakteristik & Batasan Kasus
1. **Perbedaan Penurunan Absolut vs Penurunan Relatif (Persentase):**
   Penurunan nilai absolut terbesar $(\Delta X)$ belum tentu menghasilkan persentase penurunan terbesar $(\Delta \%)$, karena persentase dihitung relatif terhadap basis nilai bulan sebelumnya:
   - Dari 1.000 ke 800 $\to$ turun 200 unit ($20\%$).
   - Dari 100 ke 50 $\to$ turun hanya 50 unit, tetapi persentase penurunan mencapai **$50\%$**!
2. **Kesesuaian Tipe Diagram:**
   - Data kontinu berkala $\to$ Diagram garis.
   - Data kategori perbandingan $\to$ Diagram batang.
   - Komposisi bagian dari total $\to$ Diagram lingkaran.
""",
    "contoh_kontekstual": r"""
### Contoh Kasus Riil & Kontekstual
**Kasus 1: Evaluasi Tren Penurunan Keuntungan Toko Bunga Amel (Tipe Soal No. 36)**
Amel mencatat data keuntungan toko bunga dari bulan Januari hingga Juli 2025. Dari pembacaan diagram garis tren keuntungan bulanan, pada bulan Juni grafik memperlihatkan kemiringan penurunan tercuram dengan delta keuntungan negatif paling ekstrem dibandingkan bulan lainnya.
Maka penurunan paling signifikan terjadi pada bulan **Juni** (Sesuai Kunci E Soal No. 36).

**Kasus 2: Analisis Persentase Penurunan Butik Pakaian (Tipe Soal No. 20)**
Data penjualan pakaian:
- Januari: 120 unit, Februari: 150 unit, Maret: 90 unit, April: 100 unit, Mei: 85 unit.
Persentase penurunan antar bulan berurutan:
- Dari Februari ke Maret: turun dari 150 ke 90 $\implies \Delta = \frac{150 - 90}{150} = \frac{60}{150} = 40\%$.
- Dari April ke Mei: turun dari 100 ke 85 $\implies \Delta = \frac{100 - 85}{100} = 15\%$.
Penurunan terbesar terjadi pada periode **Februari ke Maret** sebesar $40\%$ (Sesuai Kunci E Soal No. 20).

**Kasus 3: Potensi Target Pasar Biro Perjalanan (Tipe Soal No. 31)**
Evaluasi tabel preferensi wisatawan biro perjalanan:
- Australia: 80% Budaya, 20% Pantai
- China: 40% Belanja, 60% Kuliner
- Malaysia: 90% Perawatan Tubuh, 10% Budaya
- Jepang: 70% Kuliner, 30% Belanja
Analisis proporsi membuktikan target belanja Jepang (30%) lebih kecil dari China (40%), dan pasar perawatan tubuh Malaysia (90%) sangat besar (Sesuai Kunci Salah-Benar-Benar Soal No. 31).
""",
    "trik_cepat": r"""
### Trik Analisis Cepat (Fast Analysis Tricks)
1. **Trik Kemiringan Sudut Curam Diagram Garis:**
   Untuk menemukan laju penurunan paling cepat pada diagram garis tanpa menghitung seluruh angka satu per satu: cari ruas garis yang memiliki sudut kemiringan ke bawah paling curam / vertikal (*steepest downward slope*).
2. **Trik Cepat Estimasi Diagram Lingkaran:**
   - Sudut $90^\circ = \frac{1}{4} = 25\%$
   - Sudut $180^\circ = \frac{1}{2} = 50\%$
   - Sudut $60^\circ = \frac{1}{6} \approx 16{,}7\%$
   - Sudut $120^\circ = \frac{1}{3} \approx 33{,}3\%$
"""
}

with open("data/modules/subchapter_5_1.json", "w", encoding="utf-8") as f:
    json.dump(sub_5_1, f, ensure_ascii=False, indent=2)

print("Generated subchapter_5_1.json successfully.")
