import json
import os

os.makedirs("data/modules", exist_ok=True)

# 5.1 Visualisasi Data & Diagram
sub_5_1 = {
    "sub_chapter_id": "5.1",
    "module_id": "MOD-5",
    "module_name": "Data & Peluang",
    "short_title": "Visualisasi Data & Diagram",
    "title": "Visualisasi Data (Diagram Batang, Garis, Lingkaran, Ogive, Histogram)",
    "sub_topics": [
        "Klasifikasi Tipe Data: Diskrit, Kontinu, Kuantitatif, dan Kualitatif",
        "Diagram Batang (Tunggal & Majemuk) serta Interpretasi Nilai Frekuensi",
        "Diagram Garis untuk Visualisasi Tren Waktu (Time Series)",
        "Diagram Lingkaran: Konversi Frekuensi ke Sudut Derajat dan Persentase",
        "Histogram & Poligon Frekuensi: Batas Kelas, Tepi Kelas, dan Titik Tengah",
        "Kurva Ogive Positif (Frekuensi Kumulatif Kurang Dari) dan Ogive Negatif"
    ],
    "teori_definisi": r"""
### 1. Klasifikasi Tipe Data Statistik
- **Data Kualitatif:** Berupa kategori atau sifat bukan angka (misal: jenis pekerjaan, tingkat kepuasan).
- **Data Kuantitatif:** Berupa angka numerik:
  - **Diskrit:** Diperoleh dari hasil mencacah/menghitung (bilangan bulat, contoh: jumlah anak, jumlah mobil).
  - **Kontinu:** Diperoleh dari hasil mengukur (dapat berupa desimal/pecahan, contoh: tinggi badan, berat, suhu).

### 2. Bentuk Penyajian Data Visual
1. **Diagram Batang:** Menyajikan perbandingan data kategorik menggunakan balok vertikal/horizontal yang terpisah oleh spasi.
2. **Diagram Garis:** Menampilkan fluktuasi atau tren data berkala sepanjang waktu (time series).
3. **Diagram Lingkaran (Pie Chart):** Menampilkan proporsi bagian terhadap keseluruhan:
   $$\text{Besar Sudut} = \frac{f_i}{\sum f} \times 360^\circ, \quad \text{Persentase} = \frac{f_i}{\sum f} \times 100\%$$
4. **Histogram & Poligon Frekuensi:**
   - Batang-batang histogram saling berhimpitan tanpa celah.
   - Sumbu horizontal menggunakan **tepi kelas** ($Tb = Bb - 0{,}5$ dan $Ta = Ba + 0{,}5$).
   - Poligon menghubungkan titik-titik tengah bagian atas setiap batang histogram.
5. **Kurva Ogive:**
   - **Ogive Positif:** Menggunakan frekuensi kumulatif **kurang dari** (grafik selalu naik/monoton meningkat).
   - **Ogive Negatif:** Menggunakan frekuensi kumulatif **lebih dari** (grafik selalu turun/monoton menurun).
""",
    "rumus_katex": r"""
### Formula Penyajian Data Kelompok
1. **Tepi Kelas (Class Boundaries):**
   $$Tb = Bb - 0{,}5 \quad (\text{tepi bawah}), \quad Ta = Ba + 0{,}5 \quad (\text{tepi atas})$$
2. **Panjang Kelas ($p$):**
   $$p = Ta - Tb = (Ba - Bb) + 1$$
3. **Titik Tengah Kelas ($x_i$):**
   $$x_i = \frac{Bb + Ba}{2} = \frac{Tb + Ta}{2}$$
""",
    "karakteristik_batasan": r"""
### Batasan Kasus & Ketentuan Khusus
- Diagram batang batangannya **berjarak/terpisah**, sedangkan histogram batangnya **saling menempel** pada garis batas tepi kelas.
- Total sudut pada diagram lingkaran harus tepat $360^\circ$, dan total persentase harus tepat $100\%$.
""",
    "rangkuman": r"""
### 📑 Rangkuman Super Padat (Cheat Sheet)
1. **Konversi Pie Chart:**
   $$\text{Sudut} = \frac{\text{Bagian}}{\text{Total}} \times 360^\circ, \quad \% = \frac{\text{Bagian}}{\text{Total}} \times 100\%$$
2. **Histogram:**
   - Sumbu $X$ = Tepi Kelas (kurang 0,5 untuk tepi bawah).
   - Titik tengah $x_i$ = rata-rata batas bawah dan batas atas.
3. **Ogive Positif:** Naik $\to$ frekuensi kumulatif "kurang dari".
""",
    "contoh_kontekstual": r"""
### Contoh Kasus Riil: Alokasi Anggaran Keuangan Perusahaan
Sebuah startup memiliki total dana operasional Rp 500.000.000. 
Diagram lingkaran menunjukkan sudut sektor:
- Riset & Pengembangan: $108^\circ$
- Pemasaran: $144^\circ$
- Gaji & Operasional: Sisa sektor
Berapa alokasi dana untuk Gaji & Operasional?

**Langkah Penyelesaian Terstruktur:**
1. **Hitung Sudut Sektor Gaji & Operasional:**
   $$\theta = 360^\circ - (108^\circ + 144^\circ) = 360^\circ - 252^\circ = \mathbf{108^\circ}$$
2. **Hitung Nominal Dana:**
   $$\text{Dana} = \frac{108^\circ}{360^\circ} \times \text{Rp } 500.000.000 = \frac{3}{10} \times \text{Rp } 500.000.000 = \mathbf{\text{Rp } 150.000.000}$$
""",
    "trik_cepat": r"""
### ⚡ Trik Cepat Analisis
1. **Sederhanakan Pecahan Sudut:**
   Sudut-sudut lingkaran khas:
   - $36^\circ = \frac{1}{10} = 10\%$
   - $72^\circ = \frac{1}{5} = 20\%$
   - $90^\circ = \frac{1}{4} = 25\%$
   - $108^\circ = \frac{3}{10} = 30\%$
   - $144^\circ = \frac{2}{5} = 40\%$
   - $180^\circ = \frac{1}{2} = 50\%$
""",
    "variasi_soal": [
        {
            "tipe": "Variasi 1: Menentukan Frekuensi dari Diagram Lingkaran",
            "soal": "Sebuah kelas memiliki 40 siswa. Diagram lingkaran ekstrakurikuler menunjukkan sektor Musik sebesar $90^\circ$, Robotik $54^\circ$, Olahraga $144^\circ$, dan sisanya Seni Rupa. Tentukan banyak siswa yang memilih Seni Rupa!",
            "konsep_kunci": "Cari besar sudut sektor Seni Rupa ($360^\\circ - \\sum \\theta$), lalu kalikan dengan total siswa.",
            "solusi": r"""
1. Hitung sudut sektor Seni Rupa:
   $$\theta = 360^\circ - (90^\circ + 54^\circ + 144^\circ) = 360^\circ - 288^\circ = 72^\circ$$
2. Hitung banyak siswa:
   $$N = \frac{72^\circ}{360^\circ} \times 40 = \frac{1}{5} \times 40 = \mathbf{8\text{ siswa}}$$
"""
        },
        {
            "tipe": "Variasi 2: Menentukan Titik Tengah dan Tepi Histogram",
            "soal": "Diberikan kelas interval $45 - 53$. Tentukan tepi bawah, tepi atas, titik tengah, dan panjang kelasnya!",
            "konsep_kunci": "Gunakan aturan batas tepi dan rata-rata batas kelas.",
            "solusi": r"""
1. Tepi bawah: $Tb = 45 - 0{,}5 = \mathbf{44{,}5}$
2. Tepi atas: $Ta = 53 + 0{,}5 = \mathbf{53{,}5}$
3. Titik tengah: $x_i = \frac{45 + 53}{2} = \frac{98}{2} = \mathbf{49}$
4. Panjang kelas: $p = 53{,}5 - 44{,}5 = \mathbf{9}$
"""
        },
        {
            "tipe": "Variasi 3: Membaca Frekuensi Kumulatif dari Kurva Ogive",
            "soal": "Sebuah ogive positif menunjukkan bahwa frekuensi kumulatif pada tepi atas $69{,}5$ adalah 28, dan pada tepi atas $79{,}5$ adalah 42. Tentukan frekuensi mutlak dari kelas interval $70 - 79$!",
            "konsep_kunci": "Frekuensi mutlak kelas interval adalah selisih frekuensi kumulatif kelas tersebut dengan kelas sebelumnya: $f = F_k(79{,}5) - F_k(69{,}5)$.",
            "solusi": r"""
1. Hitung selisih:
   $$f = 42 - 28 = \mathbf{14}$$
"""
        }
    ]
}

# 5.2 Statistika: Pemusatan & Penyebaran
sub_5_2 = {
    "sub_chapter_id": "5.2",
    "module_id": "MOD-5",
    "module_name": "Data & Peluang",
    "short_title": "Statistika: Pemusatan & Penyebaran",
    "title": "Ukuran Pemusatan & Penyebaran (Data Tunggal & Kelompok)",
    "sub_topics": [
        "Ukuran Pemusatan Data Tunggal: Rata-Rata (Mean), Median, dan Modus",
        "Rata-Rata Hitung Data Kelompok (Metode Titik Tengah & Rataan Sementara)",
        "Median Data Kelompok Menggunakan Tepi Bawah dan Frekuensi Kumulatif",
        "Modus Data Kelompok Menggunakan Selisih Frekuensi Kelas Modus",
        "Ukuran Letak: Kuartil Bawah (Q1), Kuartil Atas (Q3), dan Jangkauan Interkuartil",
        "Ukuran Penyebaran: Simpangan Rata-Rata, Varians (Ragam), dan Simpangan Baku",
        "Pengaruh Operasi Aljabar Data terhadap Nilai Rata-Rata dan Simpangan Baku"
    ],
    "teori_definisi": r"""
### 1. Ukuran Pemusatan Data Kelompok (Mandatori Silabus)
1. **Rata-Rata (Mean / $\bar{x}$):**
   $$\bar{x} = \frac{\sum f_i x_i}{\sum f_i} \quad \text{atau dengan Rataan Sementara: } \bar{x} = \bar{x}_s + \left(\frac{\sum f_i d_i}{\sum f_i}\right)$$
2. **Median ($Me$ / $Q_2$):**
   $$Me = Tb + \left( \frac{\frac{1}{2}N - f_k}{f_m} \right) \cdot p$$
   - $Tb$: Tepi bawah kelas median (kelas yang memuat data ke-$\frac{1}{2}N$).
   - $N = \sum f_i$: Total frekuensi.
   - $f_k$: Frekuensi kumulatif SEBELUM kelas median.
   - $f_m$: Frekuensi mutlak kelas median.
   - $p$: Panjang kelas.
3. **Modus ($Mo$):**
   $$Mo = Tb + \left( \frac{d_1}{d_1 + d_2} \right) \cdot p$$
   - $Tb$: Tepi bawah kelas modus (kelas dengan frekuensi tertinggi).
   - $d_1 = f_{\text{modus}} - f_{\text{sebelum}}$
   - $d_2 = f_{\text{modus}} - f_{\text{sesudah}}$

### 2. Ukuran Penyebaran Data
- **Jangkauan (Range):** $R = x_{\text{max}} - x_{\text{min}}$
- **Jangkauan Interkuartil ($QR$):** $QR = Q_3 - Q_1$
- **Simpangan Kuartil ($Q_d$):** $Q_d = \frac{1}{2}(Q_3 - Q_1)$
- **Simpangan Rata-Rata ($SR$):** $SR = \frac{\sum |x_i - \bar{x}|}{n}$
- **Ragam / Varians ($S^2$):** $S^2 = \frac{\sum (x_i - \bar{x})^2}{n}$
- **Simpangan Baku / Standar Deviasi ($S$):** $S = \sqrt{S^2}$
""",
    "rumus_katex": r"""
### Efek Transformasi Aljabar Data terhadap Statistik
Jika setiap datum $x_i$ diubah menjadi $y_i = a x_i + b$:

| Besaran Statistik | Simbol Semula | Nilai Baru Setelah $y = ax + b$ |
|---|---|---|
| Rata-Rata (Mean) | $\bar{x}$ | $\bar{y} = a \bar{x} + b$ |
| Median & Modus | $Me, Mo$ | $a Me + b, \quad a Mo + b$ |
| Kuartil ($Q_1, Q_2, Q_3$) | $Q_i$ | $a Q_i + b$ |
| Jangkauan (Range) | $R$ | $R_{\text{baru}} = \|a\| \times R$ |
| Jangkauan Interkuartil | $QR$ | $QR_{\text{baru}} = \|a\| \times QR$ |
| Simpangan Baku | $S$ | $S_{\text{baru}} = \|a\| \times S$ |
| Ragam (Varians) | $S^2$ | $S^2_{\text{baru}} = a^2 \times S^2$ |
*(Catatan: Ukuran penyebaran HANYA dipengaruhi oleh perkalian $a$, TIDAK terpengaruh oleh penambahan/pengurangan $b$!).*
""",
    "karakteristik_batasan": r"""
### Batasan Kasus & Ketentuan Khusus
- Nilai $f_k$ pada rumus median adalah frekuensi kumulatif **SEBELUM** kelas median, bukan kelas median itu sendiri.
- Nilai $d_1$ dan $d_2$ pada modus selalu bernilai positif ($\ge 0$).
- Pada transformasi data, penambahan/pengurangan konstanta $b$ tidak merenggangkan atau merapatkan data, sehingga simpangan baku dan ragam sama sekali tidak berubah.
""",
    "rangkuman": r"""
### 📑 Rangkuman Super Padat (Cheat Sheet)
1. **Median Data Kelompok:**
   $$Me = Tb + \left(\frac{\frac{N}{2} - f_k}{f_m}\right) p$$
2. **Modus Data Kelompok:**
   $$Mo = Tb + \left(\frac{d_1}{d_1 + d_2}\right) p$$
3. **Transformasi $ax + b$:**
   - Pemusatan (Mean, Me, Mo) $\to$ **Ikut Kali dan Ikut Tambah**.
   - Penyebaran (Simpangan, Ragam, Range) $\to$ **HANYA Ikut Kali**, cuekin tanda tambah/kurang!
""",
    "contoh_kontekstual": r"""
### Contoh Kasus Riil: Menghitung Modus Nilai Tes Seleksi
Data hasil tes seleksi calon pegawai terdistribusi sebagai berikut:
- Kelas $50 - 59$: frekuensi 5
- Kelas $60 - 69$: frekuensi 8
- Kelas $70 - 79$: frekuensi 15  $\leftarrow$ (Kelas Modus, $f$ terbesar)
- Kelas $80 - 89$: frekuensi 9
- Kelas $90 - 99$: frekuensi 3
Hitung modus data tersebut!

**Langkah Penyelesaian Terstruktur:**
1. **Identifikasi Kelas Modus:** Kelas $70 - 79$ dengan frekuensi 15.
2. **Tentukan Parameter:**
   - Tepi bawah: $Tb = 70 - 0{,}5 = 69{,}5$
   - $d_1 = 15 - 8 = 7$ (selisih ke kelas sebelum)
   - $d_2 = 15 - 9 = 6$ (selisih ke kelas sesudah)
   - Panjang kelas: $p = 79{,}5 - 69{,}5 = 10$
3. **Terapkan Rumus Modus:**
   $$Mo = Tb + \left( \frac{d_1}{d_1 + d_2} \right) \cdot p = 69{,}5 + \left( \frac{7}{7 + 6} \right) \cdot 10$$
   $$Mo = 69{,}5 + \left( \frac{7}{13} \right) \times 10 = 69{,}5 + \frac{70}{13} = 69{,}5 + 5{,}38 = \mathbf{74{,}88}$$
""",
    "trik_cepat": r"""
### ⚡ Trik Cepat Analisis
1. **Trik "Rataan Sementara ($x_s$)":**
   Pilih $x_s$ pada titik tengah kelas dengan frekuensi terbesar, beri kode $u_i = 0$. Kelas di atasnya bernilai $-1, -2$, kelas di bawahnya bernilai $+1, +2$.
   $$\bar{x} = x_s + \left(\frac{\sum f_i u_i}{N}\right) \cdot p$$
   Menghemat waktu hitung hingga 80% karena perkalian angka menjadi sangat kecil!
""",
    "variasi_soal": [
        {
            "tipe": "Variasi 1: Median Data Kelompok",
            "soal": "Tabel distribusi frekuensi memiliki total $N = 40$. Kelas median terletak pada interval $60 - 69$ dengan frekuensi 12, $Tb = 59{,}5$, $f_k = 14$, dan panjang kelas $p = 10$. Tentukan mediannya!",
            "konsep_kunci": "Gunakan formula $Me = Tb + \\left(\\frac{\\frac{N}{2} - f_k}{f_m}\\right) \\cdot p$.",
            "solusi": r"""
1. Letak median $= \frac{40}{2} = 20$.
2. Masukkan parameter ke rumus:
   $$Me = 59{,}5 + \left( \frac{20 - 14}{12} \right) \times 10 = 59{,}5 + \left( \frac{6}{12} \right) \times 10 = 59{,}5 + (0{,}5 \times 10) = 59{,}5 + 5 = \mathbf{64{,}5}$$
"""
        },
        {
            "tipe": "Variasi 2: Efek Perubahan Data terhadap Ukuran Statistik",
            "soal": "Suatu data memiliki rata-rata $\\bar{x} = 60$ dan simpangan baku $S = 8$. Jika setiap nilai data dikalikan 2 lalu dikurangi 15, tentukan nilai rata-rata baru dan simpangan baku baru!",
            "konsep_kunci": "Rata-rata terpengaruh perkalian dan pengurangan: $\\bar{x}' = a\\bar{x} + b$. Simpangan baku HANYA terpengaruh perkalian: $S' = |a|S$.",
            "solusi": r"""
1. Rata-rata baru:
   $$\bar{x}_{\text{baru}} = 2(60) - 15 = 120 - 15 = \mathbf{105}$$
2. Simpangan baku baru:
   $$S_{\text{baru}} = |2| \times 8 = \mathbf{16}$$
"""
        },
        {
            "tipe": "Variasi 3: Simpangan Kuartil Data Tunggal",
            "soal": "Diberikan data terurut: $4, 5, 5, 6, 7, 8, 8, 9, 10, 11, 12$. Tentukan simpangan kuartil ($Q_d$) dari data tersebut!",
            "konsep_kunci": "Banyaknya data $n = 11$. Tentukan $Q_1$, $Q_3$, lalu hitung $Q_d = \\frac{1}{2}(Q_3 - Q_1)$.",
            "solusi": r"""
1. Median ($Q_2$): data ke-6 yaitu 8.
2. Kuartil Bawah ($Q_1$): median dari paruh bawah $\{4, 5, 5, 6, 7\} \implies Q_1 = 5$.
3. Kuartil Atas ($Q_3$): median dari paruh atas $\{8, 9, 10, 11, 12\} \implies Q_3 = 10$.
4. Simpangan Kuartil:
   $$Q_d = \frac{1}{2}(Q_3 - Q_1) = \frac{1}{2}(10 - 5) = \frac{5}{2} = \mathbf{2{,}5}$$
"""
        }
    ]
}

# 5.3 Aturan Perkalian & Pencacahan
sub_5_3 = {
    "sub_chapter_id": "5.3",
    "module_id": "MOD-5",
    "module_name": "Data & Peluang",
    "short_title": "Aturan Perkalian & Pencacahan",
    "title": "Aturan Pencacahan & Kaidah Perkalian",
    "sub_topics": [
        "Aturan Penjumlahan untuk Kejadian Saling Lepas (Pilihan Atau)",
        "Kaidah Perkalian (Fundamental Counting Principle / Aturan Dan)",
        "Metode Pengisian Tempat (Filling Slots) dengan Batasan Syarat Khusus",
        "Definisi dan Operasi Notasi Faktorial (n!) serta Konvensi 0! = 1",
        "Permutasi Unsur Berbeda, Permutasi Unsur Sama, dan Permutasi Siklis",
        "Kombinasi Pemilihan Tanpa Memperhatikan Urutan C(n, r)",
        "Strategi Analisis Membedakan Masalah Permutasi vs Kombinasi"
    ],
    "teori_definisi": r"""
### 1. Kaidah Dasar Pencacahan
- **Aturan Penjumlahan ("ATAU"):** Jika kegiatan 1 dapat dilakukan dengan $n_1$ cara dan kegiatan 2 dengan $n_2$ cara di mana keduanya saling lepas (tidak dapat terjadi bersamaan), maka total cara:
  $$\text{Total} = n_1 + n_2$$
- **Aturan Perkalian ("DAN" / Prinsip Pengisian Tempat / Filling Slots):** Jika suatu prosedur tersusun atas serangkaian langkah berurutan berurutan:
  $$\text{Total Cara} = n_1 \times n_2 \times n_3 \times \dots \times n_k$$

### 2. Notasi Faktorial ($n!$)
Perkalian bilangan bulat positif berurutan turun:
$$n! = n \times (n - 1) \times (n - 2) \times \dots \times 1, \quad 0! = 1 \text{ (definisi)}$$

### 3. Permutasi vs Kombinasi
- **Permutasi (Urutan Sangat Diperhatikan: $AB \neq BA$):**
  - Permutasi $r$ unsur dari $n$ unsur: $P(n, r) = \frac{n!}{(n - r)!}$
  - Permutasi dengan unsur sama: $P = \frac{n!}{k_1! \cdot k_2! \dots}$
  - Permutasi Siklis (melingkar): $P_{\text{siklis}} = (n - 1)!$
- **Kombinasi (Urutan Tidak Diperhatikan: $AB = BA$):**
  - Pemilihan kelompok, tim, delegasi, jabat tangan:
    $$C(n, r) = \binom{n}{r} = \frac{n!}{r!(n - r)!}$$
""",
    "rumus_katex": r"""
### Tabel Komparasi Permutasi vs Kombinasi
| Kriteria Pembanding | Permutasi ($P$) | Kombinasi ($C$) |
|---|---|---|
| Peran Urutan | **Sangat Memperhatikan Urutan** ($AB \neq BA$) | **Urutan Diabaikan** ($AB = BA$) |
| Rumus Utama | $P(n, r) = \frac{n!}{(n - r)!}$ | $C(n, r) = \frac{n!}{r!(n - r)!}$ |
| Hubungan Keduanya | $P(n, r) = r! \times C(n, r)$ | $C(n, r) = \frac{P(n, r)}{r!}$ |
| Contoh Kasus | Ketua-Wakil-Sekretaris, nomor plat, ranking, susunan kata | Memilih tim basket, delegasi lomba, mengambil kelereng sekaligus |
""",
    "karakteristik_batasan": r"""
### Batasan Kasus & Ketentuan Khusus
- Nilai $r \le n$. Jika $r > n$, nilainya nol.
- Pada soal penyusunan angka (filling slots), dahulukan mengisi kotak yang memiliki **syarat khusus** terlebih dahulu (misal: kotak satuan jika disyaratkan bilangan genap/ganjil, atau kotak ratusan jika disyaratkan $< 400$).
""",
    "rangkuman": r"""
### 📑 Rangkuman Super Padat (Cheat Sheet)
1. **Ada Jabatan/Urutan?** $\to$ **Permutasi** ($P(n,r)$).
2. **Hanya Memilih/Acak?** $\to$ **Kombinasi** ($C(n,r)$).
3. **Melingkar:** Selalu $(n - 1)!$.
4. **Jabat Tangan:** $C(n, 2) = \frac{n(n - 1)}{2}$.
""",
    "contoh_kontekstual": r"""
### Contoh Kasus Riil: Penyusunan Kode PIN ATM Khusus
Dari angka $\{1, 2, 3, 4, 5, 6, 7\}$ akan disusun PIN 4 angka berbeda yang bernilai **ganjil**. 
Berapa banyak kombinasi PIN yang dapat dibuat?

**Langkah Penyelesaian Terstruktur:**
1. **Buat 4 Kotak (Ribuan, Ratusan, Puluhan, Satuan):** `[_] [_] [_] [_]`
2. **Isi Kotak dengan Syarat Khusus Terlebih Dahulu (Kotak Satuan):**
   Agar ganjil, angka terakhir harus dari himpunan $\{1, 3, 5, 7\} \implies \mathbf{4\text{ pilihan}}$.
3. **Isi Kotak Lainnya (Angka Tidak Boleh Berulang):**
   - Total angka tersedia: 7 angka.
   - Kotak Satuan sudah memakai 1 angka $\implies$ tersisa 6 angka.
   - Kotak Ribuan: $6$ pilihan.
   - Kotak Ratusan: $5$ pilihan.
   - Kotak Puluhan: $4$ pilihan.
4. **Kalikan Semua Pilihan Sesuai Aturan Perkalian:**
   $$\text{Total PIN} = 6 \times 5 \times 4 \times 4 = \mathbf{480\text{ kombinasi}}$$
""",
    "trik_cepat": r"""
### ⚡ Trik Cepat Analisis
1. **Trik Hitung Cepat Kombinasi:**
   $$C(n, 2) = \frac{n(n - 1)}{2}, \quad C(n, 3) = \frac{n(n - 1)(n - 2)}{6}$$
   *Contoh:* $C(10, 2) = \frac{10 \times 9}{2} = 45$. Selesai dalam 1 detik!
2. **Sifat Simetris Kombinasi:** $C(n, r) = C(n, n - r)$.
   Contoh: $C(20, 18) = C(20, 2) = \frac{20 \times 19}{2} = 190$.
""",
    "variasi_soal": [
        {
            "tipe": "Variasi 1: Penyusunan Pengurus Organisasi (Permutasi)",
            "soal": "Dari 8 kandidat pengurus OSIS, akan dipilih seorang Ketua, seorang Sekretaris, dan seorang Bendahara. Berapa banyak susunan pengurus yang mungkin terbentuk?",
            "konsep_kunci": "Terdapat jabatan yang berbeda sehingga urutan diperhatikan (Permutasi $P(8, 3)$).",
            "solusi": r"""
1. Gunakan formula permutasi:
   $$P(8, 3) = \frac{8!}{(8 - 3)!} = \frac{8!}{5!} = 8 \times 7 \times 6 = \mathbf{336\text{ susunan}}$$
"""
        },
        {
            "tipe": "Variasi 2: Pemilihan Delegasi Campuran (Kombinasi)",
            "soal": "Dari sebuah kelompok yang terdiri atas 5 siswa laki-laki dan 4 siswa perempuan, akan dibentuk delegasi olimpiade yang beranggotakan 3 orang dengan syarat minimal terdapat 2 siswa laki-laki. Berapa banyak cara membentuk delegasi tersebut?",
            "konsep_kunci": "Pisahkan menjadi dua kasus saling lepas: Kasus 1 (2L dan 1P) dan Kasus 2 (3L dan 0P), lalu jumlahkan.",
            "solusi": r"""
1. Kasus 1: Terpilih 2 laki-laki dan 1 perempuan:
   $$C(5, 2) \times C(4, 1) = \frac{5 \times 4}{2} \times 4 = 10 \times 4 = 40\text{ cara}$$
2. Kasus 2: Terpilih 3 laki-laki dan 0 perempuan:
   $$C(5, 3) \times C(4, 0) = \frac{5 \times 4 \times 3}{6} \times 1 = 10 \times 1 = 10\text{ cara}$$
3. Jumlahkan kedua kasus (aturan penjumlahan):
   $$\text{Total} = 40 + 10 = \mathbf{50\text{ cara}}$$
"""
        },
        {
            "tipe": "Variasi 3: Permutasi Unsur Sama (Kata)",
            "soal": "Berapa banyak kata berbeda yang dapat dibentuk dari susunan huruf-huruf pembentuk kata: \"MATEMATIKA\"?",
            "konsep_kunci": "Gunakan formula permutasi dengan unsur yang sama: $P = \\frac{n!}{k_1! k_2! \\dots}$.",
            "solusi": r"""
1. Identifikasi unsur:
   - Total huruf ($n$): 10
   - Huruf M: 2
   - Huruf A: 3
   - Huruf T: 2
   - Huruf E, I, K: masing-masing 1
2. Hitung permutasi:
   $$P = \frac{10!}{2! \times 3! \times 2!} = \frac{10 \times 9 \times 8 \times 7 \times 6 \times 5 \times 4 \times 3!}{2 \times 1 \times 3! \times 2 \times 1} = \frac{10 \times 9 \times 8 \times 7 \times 6 \times 5 \times 4}{4}$$
   $$P = 10 \times 9 \times 8 \times 7 \times 6 \times 5 = \mathbf{151.200\text{ susunan}}$$
"""
        }
    ]
}

# 5.4 Peluang Kejadian Tunggal & Majemuk
sub_5_4 = {
    "sub_chapter_id": "5.4",
    "module_id": "MOD-5",
    "module_name": "Data & Peluang",
    "short_title": "Peluang Kejadian Tunggal & Majemuk",
    "title": "Peluang Kejadian Tunggal & Majemuk",
    "sub_topics": [
        "Konsep Ruang Sampel S, Titik Sampel, dan Kejadian Acak",
        "Peluang Teoretis Kejadian Tunggal P(A) = n(A) / n(S) dan Batasan Nilai [0, 1]",
        "Peluang Komplemen Kejadian P(A') = 1 - P(A)",
        "Frekuensi Harapan Fh(A) = n * P(A) pada Percobaan Berulang",
        "Peluang Kejadian Majemuk Saling Lepas: P(A U B) = P(A) + P(B)",
        "Peluang Kejadian Tidak Saling Lepas: P(A U B) = P(A) + P(B) - P(A n B)",
        "Peluang Kejadian Saling Bebas: P(A n B) = P(A) * P(B)",
        "Peluang Kejadian Bersyarat P(A|B) pada Kasus Tanpa Pengembalian"
    ],
    "teori_definisi": r"""
### 1. Peluang Teoretis Kejadian Tunggal
Peluang terjadinya peristiwa $A$ dalam ruang sampel $S$:
$$P(A) = \frac{n(A)}{n(S)}$$
- **Aksioma Peluang:** $0 \le P(A) \le 1$
  - $P(A) = 0$: Kemustahilan mutlak.
  - $P(A) = 1$: Kepastian mutlak.
- **Peluang Komplemen ($A'$):**
  $$P(A') = 1 - P(A)$$
- **Frekuensi Harapan ($F_h$):**
  $$F_h(A) = N \times P(A) \quad (N = \text{banyak percobaan})$$

### 2. Peluang Kejadian Majemuk
1. **Kejadian Saling Lepas ($A \cap B = \emptyset$):** Kedua kejadian TIDAK BISA terjadi bersamaan:
   $$P(A \cup B) = P(A) + P(B)$$
2. **Kejadian Tidak Saling Lepas:** Kedua kejadian DAPAT terjadi bersamaan:
   $$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$
3. **Kejadian Saling Bebas (Independent):** Terjadinya kejadian $A$ tidak mempengaruhi peluang terjadinya $B$:
   $$P(A \cap B) = P(A) \times P(B)$$
4. **Kejadian Bersyarat (Dependent / Tanpa Pengembalian):** Terjadinya $A$ dipengaruhi oleh kejadian $B$:
   $$P(A \mid B) = \frac{P(A \cap B)}{P(B)} \implies P(A \cap B) = P(B) \times P(A \mid B)$$
""",
    "rumus_katex": r"""
### Ringkasan Operasi Peluang Majemuk
| Jenis Hubungan Dua Kejadian | Kata Kunci | Formula KaTeX |
|---|---|---|
| Komplemen | "Bukan $A$", "Paling sedikit satu" | $P(A') = 1 - P(A)$ |
| Saling Lepas | "Kejadian $A$ **atau** $B$" (tidak beririsan) | $P(A \cup B) = P(A) + P(B)$ |
| Tidak Saling Lepas | "Kejadian $A$ **atau** $B$" (memiliki irisan) | $P(A \cup B) = P(A) + P(B) - P(A \cap B)$ |
| Saling Bebas | "Kejadian $A$ **dan** $B$" (dadu & koin, pengambilan dg pengembalian) | $P(A \cap B) = P(A) \times P(B)$ |
| Pengambilan Tanpa Pengembalian | "Diambil berturut-turut tanpa dikembalikan" | $P(A \cap B) = \frac{n(A)}{N} \times \frac{n(B)}{N - 1}$ |
""",
    "karakteristik_batasan": r"""
### Batasan Kasus & Ketentuan Khusus
- Nilai peluang TIDAK BOLEH lebih dari 1 atau bertanda negatif.
- Pada pengambilan bola/kartu **"tanpa pengembalian"**, jumlah total bola di penyebut berkurang 1 pada setiap tahap pengambilan berikutnya.
- Pada soal dengan frasa **"minimal 1" (sekurang-kurangnya satu)**, SELALU gunakan metode komplemen $1 - P(\text{tidak ada yang memenuhi})$ untuk menghemat waktu.
""",
    "rangkuman": r"""
### 📑 Rangkuman Super Padat (Cheat Sheet)
1. **Kunci Kata Hubung:**
   - "ATAU" $\to$ Tambah ($+$).
   - "DAN" $\to$ Kali ($\times$).
2. **Irisan:** Jangan lupa kurangkan $P(A \cap B)$ jika ada elemen yang memenuhi kedua kriteria sekaligus (misal kartu As ATAU kartu Hati).
3. **Trik "Minimal Satu":** $P(\text{minimal 1}) = 1 - P(\text{tidak satupun})$.
""",
    "contoh_kontekstual": r"""
### Contoh Kasus Riil: Quality Control Produksi Mikrochip
Dalam sebuah kotak terdapat 10 mikrochip: 7 chip berfungsi baik dan 3 chip rusak. 
Diambil 2 chip secara acak satu per satu **tanpa pengembalian**. 
Berapa peluang terambil kedua chip dalam kondisi baik?

**Langkah Penyelesaian Terstruktur:**
1. **Pengambilan Pertama:**
   Peluang chip pertama baik: $P(B_1) = \frac{7}{10}$.
2. **Pengambilan Kedua (Tanpa Pengembalian):**
   Tersisa 6 chip baik dari total 9 chip di dalam kotak:
   $$P(B_2 \mid B_1) = \frac{6}{9} = \frac{2}{3}$$
3. **Hitung Peluang Gabungan (Kejadian Bersyarat):**
   $$P(B_1 \cap B_2) = \frac{7}{10} \times \frac{2}{3} = \frac{14}{30} = \mathbf{\frac{7}{15} \approx 0{,}467}$$
""",
    "trik_cepat": r"""
### ⚡ Trik Cepat Analisis
1. **Trik 2 Dadu:**
   Total ruang sampel $n(S) = 36$.
   Distribusi jumlah mata dadu membentuk pola segitiga simetris:
   - Jumlah 2: 1 cara
   - Jumlah 3: 2 cara
   - Jumlah 4: 3 cara
   - Jumlah 5: 4 cara
   - Jumlah 6: 5 cara
   - **Jumlah 7: 6 cara (puncak)**
   - Jumlah 8: 5 cara
   - Jumlah 9: 4 cara
   - Jumlah 10: 3 cara
   - Jumlah 11: 2 cara
   - Jumlah 12: 1 cara
   Langsung sebut tanpa perlu membuat tabel $6 \times 6$!
""",
    "variasi_soal": [
        {
            "tipe": "Variasi 1: Pelemparan Dua Dadu (Jumlah Tertentu)",
            "soal": "Dua buah dadu dilempar bersamaan sebanyak satu kali. Tentukan peluang munculnya jumlah mata dadu sama dengan 7 atau 10!",
            "konsep_kunci": "Kejadian saling lepas, hitung masing-masing titik sampel lalu jumlahkan.",
            "solusi": r"""
1. Total ruang sampel dua dadu: $n(S) = 6 \times 6 = 36$.
2. Jumlah 7: $(1,6), (2,5), (3,4), (4,3), (5,2), (6,1) \implies 6$ titik sampel.
3. Jumlah 10: $(4,6), (5,5), (6,4) \implies 3$ titik sampel.
4. Karena saling lepas:
   $$P = \frac{6 + 3}{36} = \frac{9}{36} = \mathbf{\frac{1}{4}}$$
"""
        },
        {
            "tipe": "Variasi 2: Peluang Kejadian Tidak Saling Lepas (Kartu Bridge)",
            "soal": "Dari satu set kartu bridge lengkap (52 kartu), diambil satu kartu secara acak. Tentukan peluang terambilnya kartu As atau kartu berwarna merah!",
            "konsep_kunci": "Kejadian tidak saling lepas karena ada kartu As yang berwarna merah (As Hati dan As Wajik).",
            "solusi": r"""
1. Total kartu: $n(S) = 52$.
2. Jumlah kartu As: $n(A) = 4 \implies P(A) = \frac{4}{52}$.
3. Jumlah kartu merah: $n(M) = 26 \implies P(M) = \frac{26}{52}$.
4. Irisan kartu As merah: $n(A \cap M) = 2 \implies P(A \cap M) = \frac{2}{52}$.
5. Peluang gabungan:
   $$P(A \cup M) = \frac{4}{52} + \frac{26}{52} - \frac{2}{52} = \frac{28}{52} = \mathbf{\frac{7}{13}}$$
"""
        },
        {
            "tipe": "Variasi 3: Pengambilan Bola Tanpa Pengembalian dengan Kombinasi",
            "soal": "Dalam sebuah kantong terdapat 6 bola merah dan 4 bola putih. Diambil 3 bola sekaligus secara acak. Tentukan peluang terambilnya 2 bola merah dan 1 bola putih!",
            "konsep_kunci": "Gunakan aturan kombinasi untuk menghitung $n(A)$ dan $n(S)$.",
            "solusi": r"""
1. Hitung ruang sampel $n(S)$ (mengambil 3 bola dari 10 bola):
   $$n(S) = C(10, 3) = \frac{10 \times 9 \times 8}{3 \times 2 \times 1} = 120$$
2. Hitung titik sampel kejadian $n(A)$ (2 merah dari 6 merah DAN 1 putih dari 4 putih):
   $$n(A) = C(6, 2) \times C(4, 1) = \left(\frac{6 \times 5}{2}\right) \times 4 = 15 \times 4 = 60$$
3. Hitung peluang:
   $$P = \frac{n(A)}{n(S)} = \frac{60}{120} = \mathbf{\frac{1}{2}}$$
"""
        }
    ]
}

# Write files
for sub in [sub_5_1, sub_5_2, sub_5_3, sub_5_4]:
    sub_id = sub["sub_chapter_id"].replace(".", "_")
    path = f"data/modules/subchapter_{sub_id}.json"
    with open(path, "w", encoding="utf-8") as f:
        json.dump(sub, f, ensure_ascii=False, indent=2)
    print(f"Generated {path}")

print("Module 5 upgrade complete!")
