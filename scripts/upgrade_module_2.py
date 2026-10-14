import json
import os

os.makedirs("data/modules", exist_ok=True)

# 2.1 SPLDV & SPLTV (3 Variabel)
sub_2_1 = {
    "sub_chapter_id": "2.1",
    "module_id": "MOD-2",
    "module_name": "Aljabar",
    "short_title": "SPLDV & SPLTV (3 Variabel)",
    "title": "SPLDV & SPLTV (Sistem Persamaan Linear Multi-variabel)",
    "sub_topics": [
        "Bentuk Baku Sistem Persamaan Linear Dua Variabel (SPLDV)",
        "Metode Penyelesaian SPLDV: Substitusi, Eliminasi, Gabungan, dan Determinan",
        "Bentuk Baku Sistem Persamaan Linear Tiga Variabel (SPLTV, Maks. 3 Variabel)",
        "Metode Eliminasi Bertahap SPLTV (Reduksi Ordo 3 ke 2)",
        "Karakteristik Solusi: Solusi Tunggal, Tak Hingga Solusi, dan Tidak Ada Solusi",
        "Pemodelan Masalah Nyata Sistem Pembelian dan Paket Barang"
    ],
    "teori_definisi": r"""
### 1. Bentuk Umum Sistem Persamaan Linear
- **SPLDV (2 Variabel $x, y$):**
  $$\begin{cases} a_1 x + b_1 y = c_1 \\ a_2 x + b_2 y = c_2 \end{cases}$$
- **SPLTV (3 Variabel $x, y, z$):** *(Batasan Kurikulum: Maksimal 3 Variabel)*
  $$\begin{cases} a_1 x + b_1 y + c_1 z = d_1 \\ a_2 x + b_2 y + c_2 z = d_2 \\ a_3 x + b_3 y + c_3 z = d_3 \end{cases}$$

### 2. Prosedur Eliminasi Bertahap SPLTV (Metode Terbaik)
1. **Langkah 1:** Pilih salah satu variabel yang koefisiennya paling sederhana (misal koefisien 1 atau -1) untuk dieliminasi.
2. **Langkah 2:** Pasangkan Persamaan (1) & (2) untuk mengeliminasi variabel tersebut $\to$ Diperoleh Persamaan Baru (4).
3. **Langkah 3:** Pasangkan Persamaan (1) & (3) atau (2) & (3) untuk mengeliminasi variabel yang SAMA $\to$ Diperoleh Persamaan Baru (5).
4. **Langkah 4:** Selesaikan sistem $2 \times 2$ dari Persamaan (4) & (5) untuk mendapatkan nilai 2 variabel.
5. **Langkah 5:** Substitusikan 2 nilai variabel yang diperoleh ke salah satu persamaan awal untuk menemukan variabel ketiga.
""",
    "rumus_katex": r"""
### Metode Penyelesaian & Determinan Cramer
1. **Metode Gabungan (Eliminasi-Substitusi):**
   - Samakan koefisien variabel target dengan perkalian silang konstanta:
     $$\begin{aligned} 2x + 3y &= 12 \quad |\times 2| \implies 4x + 6y = 24 \\ 4x - y &= 10 \quad |\times 1| \implies 4x - y = 10 \end{aligned}$$
   - Kurangkan kedua persamaan untuk mengeliminasi $x$: $7y = 14 \implies y = 2$.
2. **Aturan Determinan Cramer (Alternatif Cepat SPLDV):**
   $$D = \begin{vmatrix} a_1 & b_1 \\ a_2 & b_2 \end{vmatrix} = a_1 b_2 - a_2 b_1$$
   $$D_x = \begin{vmatrix} c_1 & b_1 \\ c_2 & b_2 \end{vmatrix} = c_1 b_2 - c_2 b_1, \quad D_y = \begin{vmatrix} a_1 & c_1 \\ a_2 & c_2 \end{vmatrix} = a_1 c_2 - a_2 c_1$$
   $$x = \frac{D_x}{D}, \quad y = \frac{D_y}{D} \quad (\text{syarat: } D \neq 0)$$
""",
    "karakteristik_batasan": r"""
### Karakteristik Jenis Himpunan Penyelesaian
- **Tepat Satu Solusi (Konsisten & Independen):** $D \neq 0$. Garis-garis berpotongan di tepat 1 titik $(x_0, y_0, z_0)$.
- **Tak Hingga Solusi (Konsisten & Dependen):** $D = 0$ dan $D_x = D_y = D_z = 0$. Garis atau bidang saling berhimpit (kelipatan satu sama lain, misal $x+y=2$ dan $2x+2y=4$).
- **Tidak Memiliki Solusi (Inkonsisten):** $D = 0$, tetapi minimal ada satu $D_i \neq 0$. Garis atau bidang sejajar dan tidak pernah bertemu (misal $x+y=2$ dan $x+y=5 \implies 0 = -3$, kontradiksi).
- **Batasan Silabus:** Batasan jumlah variabel maksimal 3 ($x, y, z$).
""",
    "rangkuman": r"""
### 📑 Rangkuman Super Padat (Cheat Sheet)
1. **Aturan Emas SPLTV:**
   - Reduksi sistem $3 \times 3$ menjadi $2 \times 2$ dengan mengeliminasi variabel yang sama dari dua pasang persamaan berbeda.
2. **Analisis Solusi Cepat:**
   - Jika rasio $\frac{a_1}{a_2} = \frac{b_1}{b_2} \neq \frac{c_1}{c_2} \implies$ **Tidak ada solusi (sejajar)**.
   - Jika rasio $\frac{a_1}{a_2} = \frac{b_1}{b_2} = \frac{c_1}{c_2} \implies$ **Tak hingga banyak solusi (berhimpit)**.
3. **Tips Soal Cerita:**
   - Buat tabel variabel: definisikan $x, y, z$ sebagai harga SATUAN barang, bukan totalnya!
""",
    "contoh_kontekstual": r"""
### Contoh Kasus Riil: Paket Penjualan Alat Tulis
Toko Koperasi menjual 3 paket perlengkapan:
- Paket A: 2 Buku, 1 Pensil, 1 Penghapus = Rp 14.000
- Paket B: 1 Buku, 2 Pensil, 1 Penghapus = Rp 11.000
- Paket C: 3 Buku, 2 Pensil, 1 Penghapus = Rp 19.000
Berapa harga 1 Buku, 1 Pensil, dan 1 Penghapus masing-masing?

**Langkah Penyelesaian Terstruktur:**
1. **Langkah 1: Modelkan Matematis (Definisi $x=\text{Buku}, y=\text{Pensil}, z=\text{Penghapus}$)**
   - (1) $2x + y + z = 14.000$
   - (2) $x + 2y + z = 11.000$
   - (3) $3x + 2y + z = 19.000$
2. **Langkah 2: Eliminasi $z$ (karena koefisien $z$ pada semua persamaan sama dengan 1)**
   - Kurangkan (3) dengan (2):
     $$(3x + 2y + z) - (x + 2y + z) = 19.000 - 11.000 \implies 2x = 8.000 \implies x = 4.000$$
   - Kurangkan (1) dengan (2):
     $$(2x + y + z) - (x + 2y + z) = 14.000 - 11.000 \implies x - y = 3.000$$
3. **Langkah 3: Hitung $y$ dan $z$**
   - Karena $x = 4.000$: $4.000 - y = 3.000 \implies y = 1.000$.
   - Substitusi $x=4.000, y=1.000$ ke persamaan (2):
     $$4.000 + 2(1.000) + z = 11.000 \implies 6.000 + z = 11.000 \implies z = 5.000$$
4. **Hasil Akhir:** Buku = Rp 4.000, Pensil = Rp 1.000, Penghapus = Rp 5.000.
""",
    "trik_cepat": r"""
### ⚡ Trik Cepat Analisis
1. **Trik "Selisih Langsung":**
   Jika menemukan dua persamaan dengan variabel yang koefisiennya hampir identik (seperti Paket B dan Paket C di atas, di mana $2y+z$ sama persis), kurangkan langsung! Anda langsung mendapatkan nilai satu variabel dalam waktu kurang dari 5 detik.
2. **Trik Penjumlahan Simetris:**
   Jika koefisien persamaan bersiklus (misal $x+y=5, y+z=7, x+z=8$), jumlahkan SEMUA persamaan:
   $$2(x+y+z) = 20 \implies x+y+z = 10$$
   Lalu kurangkan dengan masing-masing persamaan untuk mendapatkan $x, y, z$ seketika:
   - $z = 10 - (x+y) = 10 - 5 = 5$
   - $x = 10 - (y+z) = 10 - 7 = 3$
   - $y = 10 - (x+z) = 10 - 8 = 2$
""",
    "variasi_soal": [
        {
            "tipe": "Variasi 1: SPLDV Eliminasi Standar",
            "soal": "Tentukan himpunan penyelesaian dari SPLDV: $\\begin{cases} 3x - 2y = 12 \\\\ 5x + y = 7 \\end{cases}$.",
            "konsep_kunci": "Eliminasi variabel $y$ dengan mengalikan persamaan kedua dengan 2.",
            "solusi": r"""
1. Kalikan persamaan kedua dengan 2:
   $$10x + 2y = 14$$
2. Jumlahkan dengan persamaan pertama:
   $$(3x - 2y) + (10x + 2y) = 12 + 14 \implies 13x = 26 \implies x = 2$$
3. Substitusikan $x = 2$ ke $5x + y = 7$:
   $$5(2) + y = 7 \implies 10 + y = 7 \implies y = -3$$
4. Himpunan penyelesaian: $\mathbf{\{(2, -3)\}}$.
"""
        },
        {
            "tipe": "Variasi 2: SPLTV Eliminasi Bertahap 3 Variabel",
            "soal": "Diberikan SPLTV: $\\begin{cases} x + y + z = 6 \\\\ 2x - y + z = 3 \\\\ x + 2y - z = 2 \\end{cases}$. Tentukan nilai dari $x \\cdot y \\cdot z$.",
            "konsep_kunci": "Eliminasi variabel $y$ dari pasangan (1)&(2) dan pasangan (2)&(3).",
            "solusi": r"""
1. Jumlahkan (1) dan (2) untuk eliminasi $y$:
   $$(x + y + z) + (2x - y + z) = 6 + 3 \implies 3x + 2z = 9 \quad \text{--- (4)}$$
2. Kalikan (2) dengan 2 lalu jumlahkan ke (3) untuk eliminasi $y$:
   $$2(2x - y + z) + (x + 2y - z) = 2(3) + 2 \implies (4x - 2y + 2z) + (x + 2y - z) = 8 \implies 5x + z = 8 \quad \text{--- (5)}$$
3. Selesaikan sistem (4) & (5):
   Dari (5): $z = 8 - 5x$. Substitusi ke (4):
   $$3x + 2(8 - 5x) = 9 \implies 3x + 16 - 10x = 9 \implies -7x = -7 \implies x = 1$$
   Maka $z = 8 - 5(1) = 3$.
4. Cari nilai $y$ dari (1):
   $$1 + y + 3 = 6 \implies y = 2$$
5. Nilai $x \cdot y \cdot z = 1 \cdot 2 \cdot 3 = \mathbf{6}$.
"""
        },
        {
            "tipe": "Variasi 3: Analisis Parameter SPLDV Tidak Memiliki Solusi",
            "soal": "Tentukan nilai konstanta $k$ agar sistem $\\begin{cases} 2x + ky = 8 \\\\ 4x + 6y = 15 \\end{cases}$ tidak memiliki penyelesaian!",
            "konsep_kunci": "Dua garis sejajar (tidak ada solusi) jika rasio koefisien variabel sama, namun rasio konstanta berbeda: $\\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\neq \\frac{c_1}{c_2}$.",
            "solusi": r"""
1. Terapkan syarat kesejajaran:
   $$\frac{2}{4} = \frac{k}{6} \neq \frac{8}{15}$$
2. Selesaikan rasio variabel:
   $$\frac{1}{2} = \frac{k}{6} \implies 2k = 6 \implies k = 3$$
3. Verifikasi rasio konstanta:
   $\frac{1}{2} \neq \frac{8}{15}$ (karena $\frac{1}{2} = 0{,}5$ dan $\frac{8}{15} \approx 0{,}533$, syarat terpenuhi).
4. Jadi, nilai $k$ adalah $\mathbf{3}$.
"""
        }
    ]
}

# 2.2 SPtLDV & Program Linear (DHP)
sub_2_2 = {
    "sub_chapter_id": "2.2",
    "module_id": "MOD-2",
    "module_name": "Aljabar",
    "short_title": "SPtLDV & Program Linear (DHP)",
    "title": "SPtLDV & Program Linear (DHP & Nilai Optimum)",
    "sub_topics": [
        "Bentuk Pertidaksamaan Linear Dua Variabel dan Garis Pembatas",
        "Penentuan Daerah Himpunan Penyelesaian (DHP) dengan Uji Titik Selidik (0,0)",
        "Sistem Pertidaksamaan Gabungan dengan Kendala Non-Negatif (x >= 0, y >= 0)",
        "Penentuan Titik-Titik Pojok (Corner Points) Poligon DHP",
        "Fungsi Sasaran / Objektif Z = ax + by",
        "Optimasi Nilai Maksimum dan Minimum Menggunakan Uji Titik Pojok",
        "Pemodelan Masalah Produksi dan Alokasi Sumber Daya Industri"
    ],
    "teori_definisi": r"""
### 1. Pertidaksamaan Linear Dua Variabel & Daerah Bersih
- Garis pembatas: $ax + by = c$. 
  - Jika tanda $\le$ atau $\ge$, garis digambar **tegas (solid)**.
  - Jika tanda $<$ atau $>$, garis digambar **putus-putus (dashed)**.
- **Uji Titik Selidik $(0,0)$:**
  Substitusikan $x=0, y=0$ ke pertidaksamaan. Jika pernyataan bernilai BENAR, maka daerah yang memuat $(0,0)$ adalah DHP. Jika SALAH, DHP adalah daerah di seberang garis.

### 2. Prosedur Optimasi Program Linear (Metode Titik Pojok)
1. **Langkah 1:** Susun model matematika (fungsi kendala dan fungsi objektif $Z = ax + by$).
2. **Langkah 2:** Gambar garis batas setiap kendala pada bidang koordinat kartesius dan tentukan arsiran DHP yang memenuhi SEMUA kendala (termasuk $x \ge 0, y \ge 0$).
3. **Langkah 3:** Tentukan koordinat semua **titik pojok (verteks)** poligon DHP dengan eliminasi titik potong antargaris.
4. **Langkah 4:** Substitusikan masing-masing koordinat titik pojok $(x_i, y_i)$ ke dalam fungsi sasaran $Z = ax_i + by_i$.
5. **Langkah 5:** Nilai terbesar adalah **maksimum**, nilai terkecil adalah **minimum**.
""",
    "rumus_katex": r"""
### Formulasi Matematis Program Linear
1. **Fungsi Objektif (Fungsi Sasaran):**
   $$Z = f(x, y) = c_1 x + c_2 y$$
2. **Sistem Kendala (Constraints):**
   $$\begin{cases} a_1 x + b_1 y \le k_1 \\ a_2 x + b_2 y \le k_2 \\ x \ge 0, \quad y \ge 0 \end{cases}$$
3. **Persamaan Garis Melalui Titik Potong Sumbu:**
   Garis yang memotong sumbu $Y$ di $(0, a)$ dan sumbu $X$ di $(b, 0)$:
   $$ax + by = a \cdot b$$
   *Contoh:* Memotong sumbu $Y$ di 6 dan sumbu $X$ di 4 $\implies 6x + 4y = 24 \implies 3x + 2y = 12$.
""",
    "karakteristik_batasan": r"""
### Batasan Kasus & Ketentuan Khusus
- **Kendala Non-Negatif:** Syarat $x \ge 0, y \ge 0$ membatasi DHP hanya berada pada **Kuadran I**.
- **Daerah Terbuka vs Tertutup:** Jika DHP merupakan poligon tertutup (bounded), nilai maksimum dan minimum dijamin ada di titik pojok. Jika DHP terbuka (unbounded), nilai maksimum bisa bernilai tak hingga ($\infty$).
- **Garis Sejajar Fungsi Objektif:** Jika fungsi sasaran memiliki kemiringan yang sama persis dengan salah satu garis batas, maka nilai optimum terjadi di **sepanjang segmen garis tersebut** (solusi optimum jamak).
""",
    "rangkuman": r"""
### 📑 Rangkuman Super Padat (Cheat Sheet)
1. **Trik Garis Potong Sumbu:**
   - Garis $ax + by = ab$ $\to$ potong sumbu $Y$ di $a$, potong sumbu $X$ di $b$.
2. **Uji Titik Pojok Selalu Cepat:**
   - Cukup cari titik potong garis-garis pembatas poligon, lalu buat tabel evaluasi fungsi sasaran $Z = c_1 x + c_2 y$.
3. **Model Kata Kunci Soal Cerita:**
   - "Maksimal / paling banyak / tidak lebih dari" $\implies \le$.
   - "Minimal / paling sedikit / sekurang-kurangnya" $\implies \ge$.
""",
    "contoh_kontekstual": r"""
### Contoh Kasus Riil: Optimasi Keuntungan Penjualan Kue
Seorang pembuat kue membuat dua jenis kue:
- Kue Bolu ($x$): butuh $200\text{ g}$ terigu dan $50\text{ g}$ mentega, laba Rp 4.000.
- Kue Tart ($y$): butuh $100\text{ g}$ terigu dan $100\text{ g}$ mentega, laba Rp 5.000.
Persediaan terigu $1.000\text{ g}$ dan mentega $600\text{ g}$. Tentukan keuntungan maksimum!

**Langkah Penyelesaian Terstruktur:**
1. **Model Matematika:**
   - Terigu: $200x + 100y \le 1000 \implies 2x + y \le 10$
   - Mentega: $50x + 100y \le 600 \implies x + 2y \le 12$
   - Kendala fisik: $x \ge 0, y \ge 0$
   - Fungsi Objektif: $Z = 4.000x + 5.000y$
2. **Titik-Titik Pojok DHP:**
   - Titik $O(0, 0) \implies Z = 0$
   - Titik $A$ (potong sumbu $X$ garis terigu): $y=0 \implies 2x = 10 \implies x = 5 \to (5, 0)$
   - Titik $B$ (potong sumbu $Y$ garis mentega): $x=0 \implies 2y = 12 \implies y = 6 \to (0, 6)$
   - Titik $C$ (perpotongan kedua garis):
     $$\begin{cases} 2x + y = 10 \\ x + 2y = 12 \end{cases} \implies 2(12 - 2y) + y = 10 \implies 24 - 3y = 10 \implies 3y = 14 \dots$$
     (Alternatif eliminasi: kalikan persamaan pertama dengan 2 $\implies 4x + 2y = 20$. Kurangkan dengan $x + 2y = 12 \implies 3x = 8 \implies x = \frac{8}{3}, y = \frac{14}{3}$).
3. **Evaluasi Titik Pojok:**
   - $(5, 0) \implies Z = 4.000(5) + 0 = 20.000$
   - $(0, 6) \implies Z = 0 + 5.000(6) = 30.000$
   - $\left(\frac{8}{3}, \frac{14}{3}\right) \implies Z = 4.000\left(\frac{8}{3}\right) + 5.000\left(\frac{14}{3}\right) = \frac{32.000 + 70.000}{3} = \frac{102.000}{3} = 34.000$
4. **Laba Maksimum:** **Rp 34.000** (tercapai di titik $C$).
""",
    "trik_cepat": r"""
### ⚡ Trik Cepat Analisis
1. **Trik Gradien Garis Selidik:**
   Bandingkan gradien garis sasaran $m_Z = -\frac{c_1}{c_2}$ dengan gradien garis-garis kendala $m_1 = -\frac{a_1}{b_1}$ dan $m_2 = -\frac{a_2}{b_2}$.
   Jika $m_1 < m_Z < m_2$, nilai optimum PASTI terletak pada titik potong kedua garis kendala tersebut tanpa perlu menguji titik lainnya!
""",
    "variasi_soal": [
        {
            "tipe": "Variasi 1: Menentukan Pertidaksamaan dari Grafik DHP",
            "soal": "Sebuah garis memotong sumbu $Y$ di titik $(0, 6)$ dan sumbu $X$ di titik $(8, 0)$. Jika daerah yang diarsir memuat titik $(0, 0)$, tentukan pertidaksamaannya!",
            "konsep_kunci": "Persamaan garis $ax + by = ab$, lalu uji titik $(0,0)$ untuk menentukan tanda ketaksamaan.",
            "solusi": r"""
1. Gunakan rumus perpotongan sumbu:
   $$6x + 8y = 6 \times 8 \implies 6x + 8y = 48$$
2. Sederhanakan dengan membagi 2:
   $$3x + 4y = 24$$
3. Uji titik $(0,0)$:
   $3(0) + 4(0) = 0$. Karena $0 \le 24$, dan daerah memuat $(0,0)$, tandanya adalah $\le$.
4. Jadi, pertidaksamaannya adalah: $\mathbf{3x + 4y \le 24}$.
"""
        },
        {
            "tipe": "Variasi 2: Optimasi Fungsi Objektif pada Poligon Tertutup",
            "soal": "Tentukan nilai maksimum fungsi $Z = 3x + 5y$ yang dibatasi oleh titik-titik pojok $(0, 0)$, $(4, 0)$, $(3, 3)$, dan $(0, 4)$!",
            "konsep_kunci": "Substitusikan setiap titik pojok ke fungsi objektif $Z$.",
            "solusi": r"""
1. Hitung nilai $Z$ untuk setiap titik pojok:
   - Titik $(0, 0): Z = 3(0) + 5(0) = 0$
   - Titik $(4, 0): Z = 3(4) + 5(0) = 12$
   - Titik $(3, 3): Z = 3(3) + 5(3) = 9 + 15 = 24$
   - Titik $(0, 4): Z = 3(0) + 5(4) = 20$
2. Nilai terbesar adalah 24.
3. Jadi, nilai maksimum adalah $\mathbf{24}$ pada titik $(3, 3)$.
"""
        },
        {
            "tipe": "Variasi 3: Pemodelan Soal Cerita Pengangkutan",
            "soal": "Sebuah distributor menyewa dua jenis truk: Truk A (kapasitas 4 ton, biaya Rp 600.000) dan Truk B (kapasitas 3 ton, biaya Rp 500.000). Distributor harus mengangkut minimal 120 ton barang dengan total truk tidak lebih dari 35 unit. Susun model matematikanya!",
            "konsep_kunci": "Misalkan $x = \\text{banyak Truk A}$ dan $y = \\text{banyak Truk B}$.",
            "solusi": r"""
1. Kendala kapasitas angkut: $4x + 3y \ge 120$
2. Kendala jumlah armada: $x + y \le 35$
3. Kendala kuadran I: $x \ge 0, y \ge 0$
4. Fungsi biaya minimum: $\mathbf{Z = 600.000x + 500.000y}$.
"""
        }
    ]
}

# 2.3 Fungsi Linear, Kuadrat & Rasional
sub_2_3 = {
    "sub_chapter_id": "2.3",
    "module_id": "MOD-2",
    "module_name": "Aljabar",
    "short_title": "Fungsi Linear, Kuadrat & Rasional",
    "title": "Fungsi Linear, Kuadrat & Rasional",
    "sub_topics": [
        "Konsep Relasi, Fungsi, Notasi, Domain Alami (Df), Kodomain, dan Range (Rf)",
        "Fungsi Linear f(x) = mx + c: Kemiringan (Gradien) dan Grafik Garis",
        "Fungsi Kuadrat f(x) = ax^2 + bx + c: Sumbu Simetri, Titik Puncak, dan Parabola",
        "Analisis Diskriminan D = b^2 - 4ac terhadap Titik Potong Sumbu X",
        "Fungsi Rasional f(x) = P(x)/Q(x): Syarat Penyebut Q(x) != 0 dan Asimtot",
        "Aplikasi Titik Ekstrem Parabola pada Masalah Ketinggian dan Penjualan"
    ],
    "teori_definisi": r"""
### 1. Domain Alami Fungsi ($\mathcal{D}_f$)
Domain alami adalah himpunan semua nilai input $x \in \mathbb{R}$ agar fungsi bernilai real:
1. **Fungsi Pecahan / Rasional $f(x) = \frac{P(x)}{Q(x)}$:** Syarat mutlak penyebut tidak boleh nol: $Q(x) \neq 0$.
2. **Fungsi Irasional (Bentuk Akar) $f(x) = \sqrt{g(x)}$:** Syarat radikan non-negatif: $g(x) \ge 0$.
3. **Fungsi Rasional Berakar $f(x) = \frac{1}{\sqrt{g(x)}}$:** Syarat: $g(x) > 0$.

### 2. Fungsi Kuadrat & Titik Puncak Parabola
Bentuk umum: $f(x) = ax^2 + bx + c$ ($a \neq 0$).
- **Arah Membuka:** Jika $a > 0$ membuka ke atas (memiliki nilai minimum), jika $a < 0$ membuka ke bawah (memiliki nilai maksimum).
- **Sumbu Simetri:** $x_p = -\frac{b}{2a}$
- **Nilai Optimum (Ekstrem):** $y_p = -\frac{D}{4a} = f(x_p)$, dengan diskriminan $D = b^2 - 4ac$.
- **Koordinat Titik Puncak (Puncak/Balik):**
  $$(x_p, y_p) = \left( -\frac{b}{2a}, -\frac{b^2 - 4ac}{4a} \right)$$
""",
    "rumus_katex": r"""
### Hubungan Diskriminan ($D$) & Asimtot Fungsi Rasional
1. **Tinjauan Diskriminan ($D = b^2 - 4ac$):**
   - $D > 0 \implies$ Grafik memotong sumbu $X$ di 2 titik berbeda ($x_1 \neq x_2$).
   - $D = 0 \implies$ Grafik menyinggung sumbu $X$ di 1 titik ($x_1 = x_2 = -\frac{b}{2a}$).
   - $D < 0 \implies$ Grafik tidak memotong maupun menyinggung sumbu $X$ (definit positif jika $a>0$, definit negatif jika $a<0$).
2. **Asimtot Fungsi Rasional Homografik $f(x) = \frac{ax + b}{cx + d}$:**
   - **Asimtot Tegak (Vertical Asymptote):** Pembuat nol penyebut $\implies cx + d = 0 \implies x = -\frac{d}{c}$.
   - **Asimtot Datar (Horizontal Asymptote):** Limit menuju tak hingga $\implies y = \frac{a}{c}$.
""",
    "karakteristik_batasan": r"""
### Batasan Kasus & Ketentuan Mutlak
- **Fungsi Rasional:** Nilai variabel $x$ yang menyebabkan penyebut $=0$ BUKAN anggota domain dan pada grafik membentuk asimtot tegak (garis yang didekati grafik tetapi tidak pernah disentuh).
- **Titik Belok / Puncak:** Jika dalam soal cerita ditanyakan "kapan mencapai maksimum", yang dicari adalah waktu $t = x_p = -\frac{b}{2a}$. Jika ditanyakan "berapa tinggi maksimum", yang dicari adalah nilai fungsi $h_{\text{max}} = y_p = -\frac{D}{4a}$.
""",
    "rangkuman": r"""
### 📑 Rangkuman Super Padat (Cheat Sheet)
1. **Syarat Domain Cepat:**
   - Ada pecahan $\to$ penyebut $\ne 0$.
   - Ada akar $\to$ dalam akar $\ge 0$.
2. **Fungsi Kuadrat:**
   - $x_{\text{puncak}} = -\frac{b}{2a}$ (selalu hafal rumus ini, $y_{\text{puncak}}$ tinggal substitusi balik nilai $x$ tersebut ke fungsi!).
3. **Asimtot Rasional $\frac{ax+b}{cx+d}$:**
   - Tegak: $x = -\frac{d}{c}$
   - Datar: $y = \frac{a}{c}$
""",
    "contoh_kontekstual": r"""
### Contoh Kasus Riil: Ketinggian Peluru Vertikal
Sebuah proyektil ditembakkan ke udara dengan fungsi ketinggian $h(t) = -5t^2 + 40t + 2$ (dalam meter, $t$ dalam detik).
Tentukan:
a) Waktu saat proyektil mencapai titik tertinggi.
b) Tinggi maksimum yang dicapai proyektil.

**Langkah Penyelesaian Terstruktur:**
1. **Identifikasi Koefisien:** $a = -5, b = 40, c = 2$.
2. **Waktu Mencapai Puncak ($t_p$):**
   $$t_p = -\frac{b}{2a} = -\frac{40}{2(-5)} = -\frac{40}{-10} = \mathbf{4\text{ detik}}$$
3. **Tinggi Maksimum ($h_{\text{max}}$):**
   Substitusi $t = 4$ ke fungsi $h(t)$:
   $$h(4) = -5(4)^2 + 40(4) + 2 = -5(16) + 160 + 2 = -80 + 160 + 2 = \mathbf{82\text{ meter}}$$
""",
    "trik_cepat": r"""
### ⚡ Trik Cepat Analisis
1. **Trik Asimtot Instan:**
   Untuk fungsi $f(x) = \frac{3x - 5}{2x + 8}$, langsung lihat perbandingan koefisien:
   - Asimtot datar: $y = \frac{3}{2}$
   - Asimtot tegak: $2x + 8 = 0 \implies x = -4$.
   (Selesai dalam 2 detik tanpa perlu turunan atau limit!).
""",
    "variasi_soal": [
        {
            "tipe": "Variasi 1: Domain Alami Fungsi Pecahan Berakar",
            "soal": "Tentukan daerah asal alami (domain) dari fungsi: $f(x) = \\frac{\\sqrt{2x - 6}}{x - 5}$.",
            "konsep_kunci": "Irisan dari dua syarat: radikan dalam akar harus $\\ge 0$ dan penyebut pecahan harus $\\neq 0$.",
            "solusi": r"""
1. Syarat bentuk akar di pembilang:
   $$2x - 6 \ge 0 \implies 2x \ge 6 \implies x \ge 3$$
2. Syarat penyebut pecahan:
   $$x - 5 \neq 0 \implies x \neq 5$$
3. Irisan kedua syarat:
   $$\mathcal{D}_f = \{x \in \mathbb{R} \mid x \ge 3 \text{ dan } x \neq 5\}$$
"""
        },
        {
            "tipe": "Variasi 2: Membentuk Persamaan Kuadrat dari Titik Puncak",
            "soal": "Tentukan fungsi kuadrat yang memiliki titik puncak $(2, -1)$ dan melalui titik $(0, 3)$!",
            "konsep_kunci": "Gunakan bentuk kanonik puncak: $y = a(x - x_p)^2 + y_p$.",
            "solusi": r"""
1. Masukkan koordinat puncak $(x_p, y_p) = (2, -1)$:
   $$y = a(x - 2)^2 - 1$$
2. Substitusikan titik $(0, 3)$ untuk mencari nilai $a$:
   $$3 = a(0 - 2)^2 - 1 \implies 3 = 4a - 1 \implies 4a = 4 \implies a = 1$$
3. Tulis dan jabarkan fungsinya:
   $$y = 1(x - 2)^2 - 1 = (x^2 - 4x + 4) - 1 = \mathbf{x^2 - 4x + 3}$$
"""
        },
        {
            "tipe": "Variasi 3: Asimtot Fungsi Rasional",
            "soal": "Tentukan persamaan asimtot tegak dan asimtot datar dari fungsi $g(x) = \\frac{4x - 7}{2x + 6}$!",
            "konsep_kunci": "Asimtot tegak didapat dari penyebut $=0$, asimtot datar dari rasio koefisien $x$.",
            "solusi": r"""
1. Asimtot tegak:
   $$2x + 6 = 0 \implies 2x = -6 \implies \mathbf{x = -3}$$
2. Asimtot datar:
   $$y = \frac{4}{2} \implies \mathbf{y = 2}$$
"""
        }
    ]
}

# 2.4 Komposisi & Invers Fungsi
sub_2_4 = {
    "sub_chapter_id": "2.4",
    "module_id": "MOD-2",
    "module_name": "Aljabar",
    "short_title": "Komposisi & Invers Fungsi",
    "title": "Komposisi & Invers Fungsi",
    "sub_topics": [
        "Aljabar Fungsi: Penjumlahan, Pengurangan, Perkalian, dan Pembagian",
        "Definisi Komposisi Fungsi (f o g)(x) = f(g(x)) dan Syarat Keberadaannya",
        "Sifat Asosiatif dan Non-Komutatif pada Komposisi Fungsi",
        "Menentukan Fungsi Komponen Pembentuk Komposisi",
        "Definisi Fungsi Invers f^-1(x) dan Syarat Fungsi Bijektif",
        "Rumus Cepat Invers Fungsi Linear dan Pecahan Linear",
        "Sifat Invers Komposisi (f o g)^-1(x) = (g^-1 o f^-1)(x)"
    ],
    "teori_definisi": r"""
### 1. Komposisi Fungsi
Penggabungan operasi dua fungsi secara berurutan.
$$(f \circ g)(x) = f(g(x)) \quad \text{artinya: masukkan output } g(x) \text{ ke dalam input fungsi } f$$
$$(g \circ f)(x) = g(f(x)) \quad \text{artinya: masukkan output } f(x) \text{ ke dalam input fungsi } g$$
- **Sifat-Sifat Komposisi:**
  1. **Tidak Komutatif:** $(f \circ g)(x) \neq (g \circ f)(x)$ secara umum.
  2. **Asosiatif:** $(f \circ (g \circ h))(x) = ((f \circ g) \circ h)(x)$.
  3. **Elemen Identitas:** $(f \circ I)(x) = (I \circ f)(x) = f(x)$, dengan $I(x) = x$.

### 2. Fungsi Invers ($f^{-1}$)
Balikan dari fungsi asal. Jika $f(x) = y$, maka $f^{-1}(y) = x$.
- **Syarat Mutlak Invers Ada:** Fungsi $f$ harus merupakan **fungsi bijektif** (korespondensi satu-satu dan pada).
- **Sifat Invers Komposisi:**
  $$(f \circ g)^{-1}(x) = (g^{-1} \circ f^{-1})(x) \quad \text{(urutan fungsi berbalik!)}$$
""",
    "rumus_katex": r"""
### Tabel Rumus Cepat Invers Fungsi
| Tipe Fungsi Asal $f(x)$ | Rumus Cepat Invers $f^{-1}(x)$ | Contoh Langsung |
|---|---|---|
| Linear: $f(x) = ax + b$ | $f^{-1}(x) = \frac{x - b}{a}$ | $f(x) = 3x - 5 \implies f^{-1}(x) = \frac{x + 5}{3}$ |
| Pecahan: $f(x) = \frac{ax + b}{cx + d}$ | $f^{-1}(x) = \frac{-dx + b}{cx - a}$ | $f(x) = \frac{2x + 1}{3x - 4} \implies f^{-1}(x) = \frac{4x + 1}{3x - 2}$ |
| Kuadrat Positif: $f(x) = ax^2 + c$ ($x \ge 0$) | $f^{-1}(x) = \sqrt{\frac{x - c}{a}}$ | $f(x) = 2x^2 + 8 \implies f^{-1}(x) = \sqrt{\frac{x - 8}{2}}$ |
""",
    "karakteristik_batasan": r"""
### Batasan Kasus & Ketentuan Khusus
- **Rumus Cepat Pecahan Linear:** 
  Pada $f(x) = \frac{ax + b}{cx + d}$, posisi yang **bertukar tempat dan berganti tanda** hanyalah **$a$ dan $d$** (koefisien kiri-atas dan konstanta kanan-bawah). Nilai $b$ dan $c$ TETAP pada posisinya!
- **Syarat Domain Invers Pecahan:** 
  Untuk $f^{-1}(x) = \frac{-dx + b}{cx - a}$, nilai $x \neq \frac{a}{c}$.
""",
    "rangkuman": r"""
### 📑 Rangkuman Super Padat (Cheat Sheet)
1. **$(f \circ g)(x)$:** Mulai dari belakang $\to$ kerjakan $g(x)$ dulu, baru substitusi ke $f$.
2. **Rumus Sakti Invers Pecahan:**
   $$\frac{a x + b}{c x + d} \xrightarrow{\text{invers}} \frac{-d x + b}{c x - a}$$
   *(Tukar posisi $a$ dan $d$, lalu kalikan keduanya dengan $-1$).*
3. **Invers dari Komposisi:**
   $$(f \circ g)^{-1} = g^{-1} \circ f^{-1}$$
""",
    "contoh_kontekstual": r"""
### Contoh Kasus Riil: Konversi Kurs Valuta Asing Bertingkat
Seorang turis menukar mata uang Rupiah (IDR) ke Ringgit Malaysia (MYR) dengan fungsi $g(x) = \frac{x}{3.500}$.
Kemudian di Malaysia, turis menukar Ringgit ke Baht Thailand (THB) dengan fungsi $f(y) = 8y - 10$.
Tentukan fungsi komposisi konversi langsung dari Rupiah ke Baht, serta inversnya!

**Langkah Penyelesaian Terstruktur:**
1. **Fungsi Komposisi Langsung $(f \circ g)(x)$:**
   $$(f \circ g)(x) = f(g(x)) = 8\left(\frac{x}{3.500}\right) - 10 = \frac{8x}{3.500} - 10 = \mathbf{\frac{2x}{875} - 10}$$
2. **Mencari Invers Komposisi $(f \circ g)^{-1}(z)$ (Menghitung kembali ke Rupiah):**
   Misalkan $z = \frac{2x}{875} - 10$:
   $$z + 10 = \frac{2x}{875} \implies 2x = 875(z + 10) \implies x = \mathbf{\frac{875(z + 10)}{2}}$$
""",
    "trik_cepat": r"""
### ⚡ Trik Cepat Analisis
1. **Mencari Nilai Angka Komposisi Instan:**
   Jika ditanya $(f \circ g)(3)$, JANGAN cari fungsi $(f \circ g)(x)$ aljabar terlebih dahulu! 
   Langsung hitung angka: cari $g(3)$, lalu hasil angkanya masukkan ke $f$.
   *Contoh:* Jika $g(x) = x^2 - 1$ dan $f(x) = 2x + 5$:
   $g(3) = 3^2 - 1 = 8 \implies f(8) = 2(8) + 5 = 21$. Cepat dan anti-salah!
""",
    "variasi_soal": [
        {
            "tipe": "Variasi 1: Evaluasi Komposisi Fungsi Numerik",
            "soal": "Diketahui $f(x) = 2x + 3$ dan $g(x) = x^2 - 4x + 1$. Tentukan nilai dari $(g \\circ f)(-1)$!",
            "konsep_kunci": "Hitung $f(-1)$ terlebih dahulu, lalu masukkan hasilnya ke fungsi $g$.",
            "solusi": r"""
1. Evaluasi fungsi dalam:
   $$f(-1) = 2(-1) + 3 = -2 + 3 = 1$$
2. Masukkan hasil ke fungsi luar:
   $$(g \circ f)(-1) = g(f(-1)) = g(1)$$
   $$g(1) = 1^2 - 4(1) + 1 = 1 - 4 + 1 = \mathbf{-2}$$
"""
        },
        {
            "tipe": "Variasi 2: Menentukan Fungsi Komponen Dalam",
            "soal": "Diketahui $(f \\circ g)(x) = 4x^2 + 12x + 5$ dan $f(x) = 2x - 1$. Tentukan rumus fungsi $g(x)$!",
            "konsep_kunci": "Tulis definisi $(f \\circ g)(x) = f(g(x))$, lalu buat persamaan dalam variabel $g(x)$.",
            "solusi": r"""
1. Terapkan rumus $f$:
   $$f(g(x)) = 2 \cdot g(x) - 1$$
2. Samakan dengan ekspresi yang diketahui:
   $$2 \cdot g(x) - 1 = 4x^2 + 12x + 5$$
3. Selesaikan untuk $g(x)$:
   $$2 \cdot g(x) = 4x^2 + 12x + 6 \implies g(x) = \mathbf{2x^2 + 6x + 3}$$
"""
        },
        {
            "tipe": "Variasi 3: Invers Pecahan Linear Cepat",
            "soal": "Jika $f(x) = \\frac{3x - 2}{5x + 4}$ dengan $x \\neq -\\frac{4}{5}$, tentukan $f^{-1}(x)$!",
            "konsep_kunci": "Gunakan rumus cepat invers pecahan linear dengan menukar dan membalik tanda koefisien $a=3$ dan $d=4$.",
            "solusi": r"""
1. Identifikasi parameter: $a = 3, b = -2, c = 5, d = 4$.
2. Tukar posisi $a$ dan $d$ serta balik tandanya:
   $$f^{-1}(x) = \frac{-dx + b}{cx - a} = \mathbf{\frac{-4x - 2}{5x - 3}} \quad \left(x \neq \frac{3}{5}\right)$$
   *(Boleh juga ditulis $\frac{4x + 2}{3 - 5x}$).*
"""
        }
    ]
}

# 2.5 Barisan & Deret Aritmetika
sub_2_5 = {
    "sub_chapter_id": "2.5",
    "module_id": "MOD-2",
    "module_name": "Aljabar",
    "short_title": "Barisan & Deret Aritmetika",
    "title": "Barisan & Deret Aritmetika",
    "sub_topics": [
        "Pola Barisan Aritmetika dan Beda Konstan (b = Un - Un-1)",
        "Rumus Suku ke-n Barisan Aritmetika (Un = a + (n-1)b)",
        "Suku Tengah Barisan Aritmetika (Ut = (a + Un) / 2)",
        "Sisipan Bilangan pada Barisan Aritmetika (b' = b / (k+1))",
        "Jumlah n Suku Pertama Deret Aritmetika (Sn = n/2 (2a + (n-1)b))",
        "Hubungan Antara Deret dan Suku ke-n (Un = Sn - Sn-1)",
        "Pemodelan Masalah Tabungan Bertingkat dan Kapasitas Kursi Stadion"
    ],
    "teori_definisi": r"""
### 1. Pola Barisan Aritmetika
Barisan aritmetika adalah barisan bilangan dengan selisih dua suku yang berurutan selalu tetap, disebut **beda ($b$)**:
$$b = U_n - U_{n-1} = U_2 - U_1 = U_3 - U_2 = \dots$$
- Suku pertama dinamakan $a$ ($U_1 = a$).
- Suku ke-$n$:
  $$U_n = a + (n - 1)b$$

### 2. Deret Aritmetika ($S_n$)
Jumlah dari $n$ suku pertama barisan aritmetika:
$$S_n = U_1 + U_2 + \dots + U_n = \frac{n}{2}(a + U_n) = \frac{n}{2}\big(2a + (n - 1)b\big)$$

### 3. Suku Tengah & Sisipan
- **Suku Tengah ($U_t$)** (hanya ada jika banyaknya suku $n$ ganjil):
  $$U_t = \frac{a + U_n}{2}, \quad t = \frac{n + 1}{2}$$
- **Sisipan Bilangan:** Jika di antara dua suku barisan disisipkan $k$ bilangan baru, beda barisan baru ($b'$) adalah:
  $$b' = \frac{b}{k + 1}$$
""",
    "rumus_katex": r"""
### Ringkasan Formula Aritmetika Lengkap
1. **Suku ke-$n$:** $U_n = a + (n - 1)b$
2. **Beda dari Dua Suku Sembarang:** $b = \frac{U_p - U_q}{p - q}$
3. **Jumlah $n$ Suku Pertama:** $S_n = \frac{n}{2}\big(2a + (n - 1)b\big)$
4. **Hubungan $S_n$ dan $U_n$:** $U_n = S_n - S_{n-1}$
""",
    "karakteristik_batasan": r"""
### Batasan Kasus & Ketentuan Khusus
- Nilai beda $b$ dapat bernilai positif (barisan naik) maupun negatif (barisan turun).
- Suku tengah $U_t$ hanya berlaku untuk jumlah suku **ganjil**. Jika $n$ genap, tidak ada suku tengah tunggal.
- Selalu pastikan nilai $n \in \mathbb{N}$ (bilangan asli positif $1, 2, 3, \dots$).
""",
    "rangkuman": r"""
### 📑 Rangkuman Super Padat (Cheat Sheet)
1. **Cari Beda Instan:** $b = \frac{U_p - U_q}{p - q}$. Misal $U_{10} = 32$ dan $U_4 = 14 \implies b = \frac{32 - 14}{10 - 4} = \frac{18}{6} = 3$.
2. **Rumus Jumlah Cepat:**
   $$S_n = n \times U_t = n \times \frac{U_1 + U_n}{2}$$
   *(Jumlah adalah banyaknya suku dikalikan rata-rata suku pertama dan suku terakhir).*
3. **Mencari $U_n$ dari $S_n$:**
   Jika $S_n = An^2 + Bn$, maka beda $b = 2A$ dan $U_1 = A + B$.
""",
    "contoh_kontekstual": r"""
### Contoh Kasus Riil: Penataan Kursi Gedung Teater
Sebuah gedung teater menata barisan kursi penonton:
- Baris terdepan berisi 20 kursi ($U_1 = 20$).
- Setiap baris di belakangnya bertambah 4 kursi ($b = 4$).
- Gedung tersebut memiliki 15 baris kursi ($n = 15$).
Berapa total kapasitas penonton di gedung teater tersebut?

**Langkah Penyelesaian Terstruktur:**
1. **Identifikasi Data:** $a = 20, b = 4, n = 15$.
2. **Gunakan Rumus Jumlah $S_n$:**
   $$S_{15} = \frac{15}{2} \big(2(20) + (15 - 1)4\big)$$
3. **Hitung Suku dalam Kurung:**
   $$2(20) + 14 \times 4 = 40 + 56 = 96$$
4. **Hitung Hasil Akhir:**
   $$S_{15} = \frac{15}{2} \times 96 = 15 \times 48 = \mathbf{720\text{ kursi}}$$
""",
    "trik_cepat": r"""
### ⚡ Trik Cepat Analisis
1. **Trik Pasangan Gauss:**
   Jumlah $1 + 2 + 3 + \dots + n = \frac{n(n+1)}{2}$.
   Untuk menjumlahkan bilangan kelipatan, keluarkan faktornya. Misal kelipatan 3 dari 3 s.d. 99:
   $$3(1 + 2 + \dots + 33) = 3 \times \frac{33 \times 34}{2} = 3 \times 33 \times 17 = 1.683$$.
""",
    "variasi_soal": [
        {
            "tipe": "Variasi 1: Mencari Suku dari Dua Suku Diketahui",
            "soal": "Suatu barisan aritmetika memiliki suku ke-5 bernilai 19 dan suku ke-11 bernilai 43. Tentukan suku ke-25!",
            "konsep_kunci": "Gunakan trik beda instan $b = \\frac{U_{11} - U_5}{11 - 5}$, lalu cari $U_{25} = U_{11} + 14b$.",
            "solusi": r"""
1. Cari beda ($b$):
   $$b = \frac{43 - 19}{11 - 5} = \frac{24}{6} = 4$$
2. Cari $U_{25}$ langsung dari $U_{11}$:
   $$U_{25} = U_{11} + (25 - 11)b = 43 + 14(4) = 43 + 56 = \mathbf{99}$$
"""
        },
        {
            "tipe": "Variasi 2: Jumlah Bilangan Kelipatan Tertentu",
            "soal": "Tentukan jumlah semua bilangan bulat antara 100 dan 300 yang habis dibagi 5!",
            "konsep_kunci": "Tentukan suku pertama ($a=105$), suku terakhir ($U_n=295$), beda ($b=5$), lalu cari $n$ dan $S_n$.",
            "solusi": r"""
1. Barisan: $105, 110, 115, \dots, 295$.
2. Cari $n$:
   $$U_n = a + (n - 1)b \implies 295 = 105 + (n - 1)5 \implies 190 = 5(n - 1) \implies n - 1 = 38 \implies n = 39$$
3. Hitung jumlah $S_{39}$:
   $$S_{39} = \frac{39}{2}(105 + 295) = \frac{39}{2}(400) = 39 \times 200 = \mathbf{7.800}$$
"""
        },
        {
            "tipe": "Variasi 3: Menentukan $U_n$ dari Rumus Jumlah $S_n$",
            "soal": "Jumlah $n$ suku pertama suatu deret aritmetika dinyatakan oleh $S_n = 3n^2 - 2n$. Tentukan suku ke-10 deret tersebut!",
            "konsep_kunci": "Gunakan hubungan $U_{10} = S_{10} - S_9$.",
            "solusi": r"""
1. Hitung $S_{10}$:
   $$S_{10} = 3(10)^2 - 2(10) = 300 - 20 = 280$$
2. Hitung $S_9$:
   $$S_9 = 3(9)^2 - 2(9) = 3(81) - 18 = 243 - 18 = 225$$
3. Hitung $U_{10}$:
   $$U_{10} = 280 - 225 = \mathbf{55}$$
"""
        }
    ]
}

# 2.6 Geometri, Finansial & Bunga
sub_2_6 = {
    "sub_chapter_id": "2.6",
    "module_id": "MOD-2",
    "module_name": "Aljabar",
    "short_title": "Geometri, Finansial & Bunga",
    "title": "Barisan & Deret Geometri (Bunga Majemuk, Pertumbuhan & Peluruhan)",
    "sub_topics": [
        "Pola Barisan Geometri dan Rasio Konstan (r = Un / Un-1)",
        "Rumus Suku ke-n Barisan Geometri (Un = a * r^(n-1))",
        "Jumlah n Suku Pertama Deret Geometri Berhingga (Sn)",
        "Deret Geometri Tak Hingga Konvergen (|r| < 1, S_inf = a / (1-r))",
        "Aplikasi Finansial: Perhitungan Bunga Tunggal vs Bunga Majemuk",
        "Pertumbuhan Eksponensial (Bakteri/Populasi) dan Peluruhan (Radioaktif)",
        "Pemodelan Panjang Lintasan Total Pantulan Bola Memantul"
    ],
    "teori_definisi": r"""
### 1. Pola Barisan & Deret Geometri
Barisan bilangan dengan perbandingan dua suku berurutan selalu konstan, disebut **rasio ($r$)**:
$$r = \frac{U_n}{U_{n-1}} \implies U_n = a \cdot r^{n-1}$$
- **Jumlah $n$ Suku Pertama ($S_n$):**
  $$S_n = \frac{a(1 - r^n)}{1 - r} \quad (\text{untuk } r < 1) \quad \text{atau} \quad S_n = \frac{a(r^n - 1)}{r - 1} \quad (\text{untuk } r > 1)$$

### 2. Deret Geometri Tak Hingga Konvergen
Deret tak hingga memiliki jumlah berhingga (konvergen) jika dan hanya jika **$|r| < 1$** (yaitu $-1 < r < 1$):
$$S_\infty = \frac{a}{1 - r}$$
Jika $|r| \ge 1$, deret disebut divergen dan $S_\infty = \pm \infty$.

### 3. Aplikasi Matematika Finansial & Biologi
1. **Bunga Tunggal:** Bunga dihitung hanya dari modal awal:
   $$M_n = M_0(1 + n \cdot i)$$
2. **Bunga Majemuk:** Bunga berbunga secara eksponensial:
   $$M_n = M_0(1 + i)^n$$
3. **Pertumbuhan Eksponensial:** $N_t = N_0(1 + r)^t$
4. **Peluruhan Radioaktif / Penurunan Harga:** $N_t = N_0(1 - r)^t$
""",
    "rumus_katex": r"""
### Tabel Komparasi Finansial & Lintasan Bola
| Konsep / Aplikasi | Formula KaTeX | Keterangan Variabel |
|---|---|---|
| Bunga Tunggal | $M_n = M_0(1 + n \cdot i)$ | $M_0$: Modal awal, $i$: Suku bunga, $n$: Periode |
| Bunga Majemuk | $M_n = M_0(1 + i)^n$ | Pertumbuhan eksponensial tiap periode |
| Deret Tak Hingga | $S_\infty = \frac{a}{1 - r}$ | Syarat mutlak: $-1 < r < 1$ |
| **Lintasan Pantulan Bola** | $S_{\text{total}} = h_0 \cdot \frac{b + a}{b - a}$ | Dijatuhkan dari tinggi $h_0$ dan memantul $\frac{a}{b}$ kali |
""",
    "karakteristik_batasan": r"""
### Batasan Kasus & Ketentuan Khusus
- **Deret Tak Hingga Konvergen vs Divergen:** Jika $|r| \ge 1$, rumus $S_\infty = \frac{a}{1-r}$ TIDAK BERLAKU.
- **Lintasan Bola:**
  - Jika bola **dijatuhkan**: Bola turun $h_0$, lalu naik-turun seterusnya $\implies S_{\text{total}} = h_0 \cdot \frac{b+a}{b-a}$.
  - Jika bola **dilempar ke atas**: Bola naik dulu lalu turun sejak awal $\implies S_{\text{total}} = 2 \cdot h_0 \cdot \frac{b}{b-a}$.
""",
    "rangkuman": r"""
### 📑 Rangkuman Super Padat (Cheat Sheet)
1. **Bunga Tunggal vs Majemuk:**
   - Tunggal = Linier ($1 + n \cdot i$).
   - Majemuk = Eksponen ($(1 + i)^n$).
2. **Trik Pantulan Bola (Dijatuhkan):**
   - Rasio pantul $\frac{a}{b}$, tinggi awal $h$ $\implies$ Total lintasan $= h \times \frac{b+a}{b-a}$.
3. **Deret Tak Hingga:**
   - Selalu ingat: $S_\infty = \frac{\text{suku pertama}}{1 - \text{rasio}}$.
""",
    "contoh_kontekstual": r"""
### Contoh Kasus Riil: Investasi Bunga Majemuk Bank
Pengusaha mendepositokan modal $M_0 = \text{Rp } 10.000.000$ di bank dengan bunga majemuk $10\%$ per tahun. 
Berapa saldo tabungan setelah 3 tahun?

**Langkah Penyelesaian Terstruktur:**
1. **Identifikasi Parameter:** $M_0 = 10.000.000, i = 0{,}10, n = 3$.
2. **Gunakan Rumus Bunga Majemuk:**
   $$M_3 = 10.000.000 \times (1 + 0{,}10)^3 = 10.000.000 \times (1{,}1)^3$$
3. **Hitung Perpangkatan:**
   $$(1{,}1)^3 = 1{,}331$$
4. **Hitung Saldo Akhir:**
   $$M_3 = 10.000.000 \times 1{,}331 = \mathbf{\text{Rp } 13.310.000}$$
""",
    "trik_cepat": r"""
### ⚡ Trik Cepat Analisis
1. **Rumus 3 Detik Pantulan Bola:**
   Bola dijatuhkan dari $12\text{ m}$ dan memantul $\frac{3}{4}$ kali tinggi sebelumnya.
   Tinggi $h=12, a=3, b=4$.
   Langsung: $S_{\text{total}} = 12 \times \frac{4 + 3}{4 - 3} = 12 \times \frac{7}{1} = \mathbf{84\text{ meter}}$. Selesai!
""",
    "variasi_soal": [
        {
            "tipe": "Variasi 1: Deret Geometri Tak Hingga",
            "soal": "Tentukan jumlah deret geometri tak hingga: $18 + 12 + 8 + \\frac{16}{3} + \\dots$.",
            "konsep_kunci": "Tentukan rasio $r = \\frac{12}{18} = \\frac{2}{3}$, periksa $|r| < 1$, lalu gunakan $S_\\infty = \\frac{a}{1-r}$.",
            "solusi": r"""
1. Identifikasi parameter: $a = 18$, $r = \frac{12}{18} = \frac{2}{3}$.
2. Karena $|r| = \frac{2}{3} < 1$, deret konvergen:
   $$S_\infty = \frac{18}{1 - \frac{2}{3}} = \frac{18}{\frac{1}{3}} = 18 \times 3 = \mathbf{54}$$
"""
        },
        {
            "tipe": "Variasi 2: Total Lintasan Bola Memantul",
            "soal": "Sebuah bola dijatuhkan dari ketinggian 10 meter dan memantul kembali dengan ketinggian $\\frac{4}{5}$ kali tinggi sebelumnya hingga berhenti. Tentukan panjang seluruh lintasan bola!",
            "konsep_kunci": "Gunakan trik lintasan bola jatuh: $S_{\\text{total}} = h_0 \\cdot \\frac{b+a}{b-a}$ dengan $h_0 = 10, a = 4, b = 5$.",
            "solusi": r"""
1. Masukkan nilai ke formula:
   $$S_{\text{total}} = 10 \times \frac{5 + 4}{5 - 4} = 10 \times \frac{9}{1} = \mathbf{90\text{ meter}}$$
"""
        },
        {
            "tipe": "Variasi 3: Pertumbuhan Populasi Eksponensial",
            "soal": "Suatu koloni bakteri membelah diri menjadi 2 setiap 20 menit. Jika mula-mula terdapat 50 bakteri, berapa jumlah bakteri setelah 2 jam?",
            "konsep_kunci": "Konversi waktu ke periode pembelahan $n = \\frac{120\\text{ menit}}{20\\text{ menit}} = 6$, lalu gunakan rumus $N_t = N_0 \\cdot r^n$.",
            "solusi": r"""
1. Hitung jumlah periode pembelahan ($n$):
   $$t = 2\text{ jam} = 120\text{ menit} \implies n = \frac{120}{20} = 6$$
2. Hitung jumlah bakteri:
   $$N_6 = 50 \times 2^6 = 50 \times 64 = \mathbf{3.200\text{ bakteri}}$$
"""
        }
    ]
}

# Write files
for sub in [sub_2_1, sub_2_2, sub_2_3, sub_2_4, sub_2_5, sub_2_6]:
    sub_id = sub["sub_chapter_id"].replace(".", "_")
    path = f"data/modules/subchapter_{sub_id}.json"
    with open(path, "w", encoding="utf-8") as f:
        json.dump(sub, f, ensure_ascii=False, indent=2)
    print(f"Generated {path}")

print("Module 2 upgrade complete!")
