import json
import os

os.makedirs("data/modules", exist_ok=True)

# 3.1 Sudut & Garis Sejajar
sub_3_1 = {
    "sub_chapter_id": "3.1",
    "module_id": "MOD-3",
    "module_name": "Geometri & Pengukuran",
    "short_title": "Sudut & Garis Sejajar",
    "title": "Garis, Sudut & Hubungan Sejajar",
    "sub_topics": [
        "Klasifikasi Sudut: Lancip, Siku-siku, Tumpul, Lurus, dan Refleks",
        "Hubungan Dua Sudut: Berpelurus (180°), Berpenyiku (90°), Bertolak Belakang",
        "Garis Sejajar Dipotong Garis Transversal (Sudut Sehadap, Berseberangan)",
        "Sudut Dalam Sepihak dan Luar Sepihak (Jumlah 180°)",
        "Jumlah Sudut Dalam Segitiga (180°) dan Poligon Segi-n ((n-2) * 180°)"
    ],
    "teori_definisi": r"""
### 1. Klasifikasi Sudut Berdasarkan Besarannya
- **Sudut Lancip:** $0^\circ < \theta < 90^\circ$
- **Sudut Siku-Siku:** $\theta = 90^\circ$
- **Sudut Tumpul:** $90^\circ < \theta < 180^\circ$
- **Sudut Lurus:** $\theta = 180^\circ$
- **Sudut Refleks:** $180^\circ < \theta < 360^\circ$

### 2. Hubungan Dua Sudut Penting
- **Berpenyiku (Komplemen):** Jumlah kedua sudut $= 90^\circ \implies \alpha + \beta = 90^\circ$.
- **Berpelurus (Suplemen):** Jumlah kedua sudut $= 180^\circ \implies \alpha + \beta = 180^\circ$.
- **Bertolak Belakang:** Besarnya **sama** ($\alpha = \beta$).

### 3. Garis-Garis Sejajar Dipotong Transversal
Bila dua garis sejajar dipotong oleh garis transversal, berlaku:
1. **Sudut Sehadap (Corresponding):** Besarnya SAMA ($\angle A_1 = \angle B_1$).
2. **Sudut Dalam Berseberangan (Alternate Interior):** Besarnya SAMA ($\angle A_3 = \angle B_1$).
3. **Sudut Luar Berseberangan (Alternate Exterior):** Besarnya SAMA ($\angle A_1 = \angle B_3$).
4. **Sudut Dalam Sepihak (Consecutive Interior):** Berjumlah $180^\circ$ ($\angle A_3 + \angle B_2 = 180^\circ$).
5. **Sudut Luar Sepihak (Consecutive Exterior):** Berjumlah $180^\circ$ ($\angle A_2 + \angle B_3 = 180^\circ$).
""",
    "rumus_katex": r"""
### Formula Sudut Poligon Segi-$n$
1. **Jumlah Sudut Dalam Segitiga:** $\alpha + \beta + \gamma = 180^\circ$
2. **Jumlah Sudut Dalam Poligon Beraturan Segi-$n$:**
   $$S_n = (n - 2) \times 180^\circ$$
3. **Besar Setiap Sudut Dalam Segi-$n$ Beraturan:**
   $$\theta = \frac{(n - 2) \times 180^\circ}{n}$$
""",
    "karakteristik_batasan": r"""
### Batasan Kasus & Ketentuan Khusus
- Garis sejajar tidak akan pernah berpotongan, sehingga gradiennya selalu sama ($m_1 = m_2$).
- Sifat sehadap dan berseberangan HANYA berlaku jika dua garis yang dipotong transversal **benar-benar sejajar**.
""",
    "rangkuman": r"""
### 📑 Rangkuman Super Padat (Cheat Sheet)
1. **Aturan Sama Besar vs Jumlah $180^\circ$:**
   - Bentuk huruf $Z$ (berseberangan) & bentuk huruf $F$ (sehadap) $\to$ **Besar Sudut SAMA**.
   - Bentuk huruf $C$ / $U$ (dalam sepihak) $\to$ **Jumlahnya $180^\circ$**.
2. **Berpelurus:** Garis lurus selalu $180^\circ$.
3. **Segitiga:** Total 3 sudut dalam selalu $180^\circ$.
""",
    "contoh_kontekstual": r"""
### Contoh Kasus Riil: Desain Kuda-Kuda Atap Rumah
Dua balok atap sejajar dipotong oleh tiang penopang diagonal. Jika sudut dalam berseberangan bernilai $(3x + 15)^\circ$ dan $(5x - 25)^\circ$, tentukan nilai $x$ dan besar sudut tersebut!

**Langkah Penyelesaian Terstruktur:**
1. **Kaidah:** Sudut dalam berseberangan pada garis sejajar bernilai SAMA BESAR.
2. **Buat Persamaan:**
   $$3x + 15 = 5x - 25$$
3. **Selesaikan Nilai $x$:**
   $$15 + 25 = 5x - 3x \implies 40 = 2x \implies \mathbf{x = 20^\circ}$$
4. **Besar Sudut:**
   $$\theta = 3(20) + 15 = 60 + 15 = \mathbf{75^\circ}$$
""",
    "trik_cepat": r"""
### ⚡ Trik Cepat Analisis
1. **Trik "Garis Bantu Sejajar":**
   Pada soal sudut zig-zag (seperti bentuk panah / huruf W), buat satu garis bantu sejajar tepat di titik lekukan. Sudut di lekukan langsung terbagi menjadi dua bagian yang masing-masing berseberangan dengan sudut atas dan bawah!
""",
    "variasi_soal": [
        {
            "tipe": "Variasi 1: Sudut Berpelurus & Aljabar",
            "soal": "Dua sudut saling berpelurus. Besar sudut pertama adalah $(4x + 10)^\circ$ dan sudut kedua $(2x + 20)^\circ$. Tentukan besar sudut kedua!",
            "konsep_kunci": "Jumlah dua sudut yang saling berpelurus adalah $180^\\circ$.",
            "solusi": r"""
1. Buat persamaan suplemen:
   $$(4x + 10) + (2x + 20) = 180 \implies 6x + 30 = 180 \implies 6x = 150 \implies x = 25$$
2. Hitung besar sudut kedua:
   $$\theta_2 = 2(25) + 20 = 50 + 20 = \mathbf{70^\circ}$$
"""
        },
        {
            "tipe": "Variasi 2: Sudut Dalam Sepihak Garis Sejajar",
            "soal": "Dua garis sejajar dipotong sebuah transversal. Jika sepasang sudut dalam sepihak adalah $(5x - 10)^\circ$ dan $(3x + 30)^\circ$, tentukan nilai $x$!",
            "konsep_kunci": "Jumlah sudut dalam sepihak adalah $180^\\circ$.",
            "solusi": r"""
1. Terapkan hubungan dalam sepihak:
   $$(5x - 10) + (3x + 30) = 180 \implies 8x + 20 = 180 \implies 8x = 160 \implies \mathbf{x = 20^\circ}$$
"""
        },
        {
            "tipe": "Variasi 3: Sudut Segi-n Beraturan",
            "soal": "Tentukan besar setiap sudut dalam dari bangun segi-8 beraturan (oktagon)!",
            "konsep_kunci": "Gunakan formula $\\theta = \\frac{(n-2) \\times 180^\\circ}{n}$ dengan $n=8$.",
            "solusi": r"""
1. Masukkan $n=8$:
   $$\theta = \frac{(8 - 2) \times 180^\circ}{8} = \frac{6 \times 180^\circ}{8} = \frac{1080^\circ}{8} = \mathbf{135^\circ}$$
"""
        }
    ]
}

# 3.2 Kesebangunan & Kekongruenan
sub_3_2 = {
    "sub_chapter_id": "3.2",
    "module_id": "MOD-3",
    "module_name": "Geometri & Pengukuran",
    "short_title": "Kesebangunan & Kekongruenan",
    "title": "Kesebangunan & Kekongruenan Segitiga/Poligon",
    "sub_topics": [
        "Kekongruenan Bangun Datar dan Postulat Segitiga Kongruen (S-S-S, S-Sd-S, Sd-S-Sd)",
        "Kesebangunan Poligon dan Perbandingan Sisi-Sisi yang Bersesuaian",
        "Kesebangunan Segitiga Siku-Siku Terpotong Garis Tinggi (Rumus Air Mancur)",
        "Teorema Thales pada Garis Sejajar Pemotong Sisi Segitiga",
        "Rasio Perbandingan Luas (k^2) dan Volume (k^3) Bangun Sebangun",
        "Aplikasi Penaksiran Ketinggian Objek Menggunakan Panjang Bayangan"
    ],
    "teori_definisi": r"""
### 1. Kekongruenan ($\cong$)
Dua bangun datar kongruen jika memiliki **bentuk dan ukuran yang sama persis**:
- Sudut-sudut bersesuaian sama besar.
- Sisi-sisi bersesuaian sama panjang.
- Postulat Segitiga Kongruen: **S-S-S** (Sisi-Sisi-Sisi), **S-Sd-S** (Sisi-Sudut-Sisi), **Sd-S-Sd** (Sudut-Sisi-Sudut).

### 2. Kesebangunan ($\sim$)
Dua bangun datar sebangun jika memiliki **bentuk sama**, tetapi ukurannya dapat berbeda secara proporsional:
1. Sudut-sudut bersesuaian **sama besar**.
2. Sisi-sisi bersesuaian memiliki **perbandingan yang senilai**:
   $$\frac{a_1}{a_2} = \frac{b_1}{b_2} = \frac{c_1}{c_2} = k \quad (\text{faktor skala})$$
""",
    "rumus_katex": r"""
### Rumus Kunci Kesebangunan
1. **Rumus Segitiga Siku-Siku Terpotong Garis Tinggi (Rumus Air Mancur):**
   Pada $\triangle ABC$ siku-siku di $A$ dengan garis tinggi $AD \perp BC$:
   $$AB^2 = BD \times BC$$
   $$AC^2 = CD \times BC$$
   $$AD^2 = BD \times CD$$
2. **Rasio Luas & Volume Sebangun dengan Faktor Skala $k$:**
   $$\frac{\text{Keliling}_1}{\text{Keliling}_2} = k, \quad \frac{\text{Luas}_1}{\text{Luas}_2} = k^2, \quad \frac{\text{Volume}_1}{\text{Volume}_2} = k^3$$
""",
    "karakteristik_batasan": r"""
### Batasan Kasus & Ketentuan Khusus
- Kongruen PASTI sebangun, tetapi sebangun BELUM TENTU kongruen.
- Jika faktor skala sisi adalah $k$, maka rasio luas adalah $k^2$ (bukan $k$).
""",
    "rangkuman": r"""
### 📑 Rangkuman Super Padat (Cheat Sheet)
1. **Rumus Air Mancur:**
   - Kiri kuadrat = Kiri bawah $\times$ Bawah total: $AB^2 = BD \times BC$.
   - Kanan kuadrat = Kanan bawah $\times$ Bawah total: $AC^2 = CD \times BC$.
   - Tengah kuadrat = Kiri bawah $\times$ Kanan bawah: $AD^2 = BD \times CD$.
2. **Rasio Dimensi:**
   - Panjang $\propto k$, Luas $\propto k^2$, Volume $\propto k^3$.
""",
    "contoh_kontekstual": r"""
### Contoh Kasus Riil: Menaksir Ketinggian Menara dengan Bayangan
Seorang siswa setinggi $160\text{ cm}$ berdiri di samping menara pada siang hari.
Panjang bayangan siswa adalah $2\text{ m}$ ($200\text{ cm}$), sedangkan panjang bayangan menara adalah $15\text{ m}$ ($1500\text{ cm}$).
Berapa tinggi menara sebenarnya?

**Langkah Penyelesaian Terstruktur:**
1. **Kaidah:** Sinar matahari membentuk sudut yang sama $\implies$ Segitiga terbentuk adalah sebangun ($\sim$).
2. **Perbandingan Senilai:**
   $$\frac{\text{Tinggi Menara}}{\text{Tinggi Siswa}} = \frac{\text{Bayangan Menara}}{\text{Bayangan Siswa}}$$
3. **Masukkan Angka:**
   $$\frac{H}{160} = \frac{1500}{200} \implies \frac{H}{160} = 7{,}5 \implies H = 160 \times 7{,}5 = 1200\text{ cm} = \mathbf{12\text{ meter}}$$
""",
    "trik_cepat": r"""
### ⚡ Trik Cepat Analisis
1. **Trik Rasio Cepat Bayangan:**
   Bagi bayangan menara dengan bayangan siswa: $\frac{15}{2} = 7{,}5$. Berarti menara $7{,}5$ kali lebih besar dari siswa! Langsung: $1{,}6\text{ m} \times 7{,}5 = \mathbf{12\text{ m}}$.
""",
    "variasi_soal": [
        {
            "tipe": "Variasi 1: Rumus Air Mancur Garis Tinggi",
            "soal": "Pada segitiga $ABC$ siku-siku di $A$, ditarik garis tinggi $AD$ ke sisi $BC$. Jika $BD = 4\text{ cm}$ dan $CD = 9\text{ cm}$, tentukan panjang $AD$ dan $AB$!",
            "konsep_kunci": "Terapkan $AD^2 = BD \\times CD$ dan $AB^2 = BD \\times BC$.",
            "solusi": r"""
1. Panjang $AD$:
   $$AD^2 = BD \times CD = 4 \times 9 = 36 \implies AD = \sqrt{36} = \mathbf{6\text{ cm}}$$
2. Panjang $BC$:
   $$BC = BD + CD = 4 + 9 = 13\text{ cm}$$
3. Panjang $AB$:
   $$AB^2 = BD \times BC = 4 \times 13 = 52 \implies AB = \sqrt{52} = \mathbf{2\sqrt{13}\text{ cm}}$$
"""
        },
        {
            "tipe": "Variasi 2: Kesebangunan Trapesium Bertingkat",
            "soal": "Sebuah foto berukuran $30\text{ cm} \times 40\text{ cm}$ ditempel pada selembar karton sebangun. Di sebelah kiri, kanan, dan atas foto tersisa karton selebar $3\text{ cm}$. Tentukan sisa karton di bagian bawah foto!",
            "konsep_kunci": "Gunakan perbandingan kesebangunan antara foto dan karton: $\\frac{\\text{Lebar Foto}}{\\text{Lebar Karton}} = \\frac{\\text{Tinggi Foto}}{\\text{Tinggi Karton}}$.",
            "solusi": r"""
1. Dimensi foto: $L_f = 30$, $T_f = 40$.
2. Dimensi karton:
   - Lebar karton: $L_k = 30 + 3 + 3 = 36\text{ cm}$.
   - Misalkan sisa bawah $= x$, maka tinggi karton: $T_k = 40 + 3 + x = 43 + x$.
3. Perbandingan kesebangunan:
   $$\frac{30}{36} = \frac{40}{43 + x} \implies \frac{5}{6} = \frac{40}{43 + x}$$
4. Selesaikan perkalian silang:
   $$5(43 + x) = 6 \times 40 \implies 215 + 5x = 240 \implies 5x = 25 \implies \mathbf{x = 5\text{ cm}}$$
"""
        },
        {
            "tipe": "Variasi 3: Perubahan Luas pada Bangun Sebangun",
            "soal": "Dua segitiga sebangun memiliki perbandingan sisi $2 : 5$. Jika luas segitiga yang lebih kecil adalah $24\text{ cm}^2$, tentukan luas segitiga yang lebih besar!",
            "konsep_kunci": "Rasio luas bangun sebangun adalah kuadrat dari rasio sisinya: $\\frac{L_1}{L_2} = \\left(\\frac{s_1}{s_2}\\right)^2$.",
            "solusi": r"""
1. Rasio luas:
   $$\frac{L_1}{L_2} = \left(\frac{2}{5}\right)^2 = \frac{4}{25}$$
2. Substitusikan $L_1 = 24$:
   $$\frac{24}{L_2} = \frac{4}{25} \implies L_2 = \frac{24 \times 25}{4} = 6 \times 25 = \mathbf{150\text{ cm}^2}$$
"""
        }
    ]
}

# 3.3 Dimensi Tiga (Jarak Ruang Kubus)
sub_3_3 = {
    "sub_chapter_id": "3.3",
    "module_id": "MOD-3",
    "module_name": "Geometri & Pengukuran",
    "short_title": "Dimensi Tiga (Jarak Ruang Kubus)",
    "title": "Dimensi Tiga (Kubus, Titik, Garis, Bidang)",
    "sub_topics": [
        "Elemen Ruang Kubus ABCD.EFGH: Rusuk, Diagonal Bidang (s√2), Diagonal Ruang (s√3)",
        "Jarak Titik ke Titik dalam Kubus Menggunakan Teorema Pythagoras 3D",
        "Jarak Titik ke Garis dengan Proyeksi Tegak Lurus dan Perbandingan Luas Segitiga",
        "Jarak Titik ke Bidang Datar Melalui Garis Proyeksi Normal",
        "Sudut Antara Garis dengan Bidang dan Sudut Antara Dua Bidang",
        "Trik Proyeksi Diagonal Ruang Terhadap Bidang Diagonal / Titik Tengah Rusuk"
    ],
    "teori_definisi": r"""
### 1. Karakteristik Geometri Kubus $ABCD.EFGH$ (Rusuk $s$)
- **Diagonal Sisi/Bidang:** $d_s = s\sqrt{2}$ (contoh: $AC, BD, EG, FH$).
- **Diagonal Ruang:** $d_r = s\sqrt{3}$ (contoh: $AG, BH, CE, DF$).
- **Bidang Diagonal:** Berbentuk persegi panjang dengan luas $L = s \cdot s\sqrt{2} = s^2\sqrt{2}$ (contoh: $BDHF, ACGE$).

### 2. Konsep Jarak dalam Dimensi Tiga
- **Jarak Titik ke Titik:** Panjang ruas garis lurus terpendek yang menghubungkan kedua titik.
- **Jarak Titik ke Garis:** Panjang ruas garis yang ditarik dari titik tegak lurus ($\perp$) ke garis sasaran. Sering dihitung menggunakan **perbandingan luas segitiga**:
  $$\text{Luas } \triangle = \frac{1}{2} a \cdot t_1 = \frac{1}{2} b \cdot t_2$$
- **Jarak Titik ke Bidang:** Panjang garis proyeksi tegak lurus dari titik tersebut ke bidang target.
""",
    "rumus_katex": r"""
### Rumus Sakti Dimensi Tiga pada Kubus Rusuk $s$
1. **Jarak Titik Sudut ke Diagonal Ruang Seberang (misal titik $C$ ke garis $AG$):**
   $$d = \frac{s\sqrt{6}}{3}$$
2. **Jarak Titik Sudut ke Bidang Diagonal di Depannya (misal titik $E$ ke bidang $AFH$):**
   $$d = \frac{1}{3} \times \text{Diagonal Ruang} = \frac{1}{3} s\sqrt{3} = \frac{s\sqrt{3}}{3}$$
3. **Jarak Titik Sudut ke Bidang Diagonal Seberang (misal titik $C$ ke bidang $AFH$):**
   $$d = \frac{2}{3} \times \text{Diagonal Ruang} = \frac{2}{3} s\sqrt{3}$$
""",
    "karakteristik_batasan": r"""
### Batasan Kasus & Ketentuan Khusus
- Proyeksi tegak lurus titik ke garis tidak selalu jatuh di titik tengah garis, kecuali jika segitiga pembantunya adalah segitiga sama kaki atau sama sisi.
- Selalu gunakan segitiga bidang datar yang memuat titik dan garis tersebut untuk memvisualisasikan masalah.
""",
    "rangkuman": r"""
### 📑 Rangkuman Super Padat (Cheat Sheet)
1. **Hafalan Rusuk Kubus $s$:**
   - Diagonal Bidang $= s\sqrt{2}$
   - Diagonal Ruang $= s\sqrt{3}$
2. **Jarak ke Diagonal Ruang:** $\frac{s\sqrt{6}}{3}$.
3. **Aturan Pembagian Diagonal Ruang oleh Bidang $AFH$ dan $BDG$:**
   - Diagonal ruang $EC$ terbagi tepat menjadi 3 bagian sama besar ($\frac{1}{3}s\sqrt{3}$ masing-masing) oleh bidang $AFH$ dan $BDG$.
""",
    "contoh_kontekstual": r"""
### Contoh Kasus Riil: Jarak Titik ke Garis pada Kubus
Diketahui kubus $ABCD.EFGH$ dengan panjang rusuk $6\text{ cm}$. Tentukan jarak titik $C$ ke diagonal ruang $AG$!

**Langkah Penyelesaian Terstruktur:**
1. **Bentuk Segitiga Pembantu:**
   Tinjau $\triangle ACG$:
   - $AC$ adalah diagonal sisi alas: $AC = 6\sqrt{2}\text{ cm}$.
   - $CG$ adalah rusuk tegak: $CG = 6\text{ cm}$.
   - $AG$ adalah diagonal ruang: $AG = 6\sqrt{3}\text{ cm}$.
   - Karena $CG \perp AC$, maka $\triangle ACG$ siku-siku di $C$.
2. **Gunakan Perbandingan Luas Segitiga:**
   $$\text{Luas } \triangle ACG = \frac{1}{2} \cdot AC \cdot CG = \frac{1}{2} \cdot AG \cdot d$$
3. **Hitung Jarak $d$:**
   $$d = \frac{AC \cdot CG}{AG} = \frac{6\sqrt{2} \times 6}{6\sqrt{3}} = \frac{6\sqrt{2}}{\sqrt{3}} \times \frac{\sqrt{3}}{\sqrt{3}} = \frac{6\sqrt{6}}{3} = \mathbf{2\sqrt{6}\text{ cm}}$$
""",
    "trik_cepat": r"""
### ⚡ Trik Cepat Analisis
1. **Rumus Instan Titik ke Diagonal Ruang:**
   $$d = \frac{s\sqrt{6}}{3}$$
   Untuk rusuk $s=6$: langsung $d = \frac{6\sqrt{6}}{3} = 2\sqrt{6}\text{ cm}$ (selesai dalam 2 detik tanpa perlu gambar segitiga!).
""",
    "variasi_soal": [
        {
            "tipe": "Variasi 1: Jarak Titik ke Garis Rusuk Tengah",
            "soal": "Pada kubus $ABCD.EFGH$ dengan rusuk $8\text{ cm}$, titik $P$ adalah titik tengah rusuk $CG$. Tentukan jarak titik $P$ ke titik $A$!",
            "konsep_kunci": "Gunakan teorema Pythagoras 3D pada segitiga siku-siku $ACP$ dengan $AC$ diagonal sisi.",
            "solusi": r"""
1. Panjang $AC$ (diagonal sisi):
   $$AC = 8\sqrt{2}\text{ cm}$$
2. Panjang $CP$:
   $$CP = \frac{1}{2} \times 8 = 4\text{ cm}$$
3. Jarak $AP$ (siku-siku di $C$):
   $$AP = \sqrt{AC^2 + CP^2} = \sqrt{(8\sqrt{2})^2 + 4^2} = \sqrt{128 + 16} = \sqrt{144} = \mathbf{12\text{ cm}}$$
"""
        },
        {
            "tipe": "Variasi 2: Jarak Titik ke Bidang Segitiga Diagonal",
            "soal": "Diketahui kubus $ABCD.EFGH$ dengan rusuk $12\text{ cm}$. Tentukan jarak titik $E$ ke bidang $AFH$!",
            "konsep_kunci": "Terapkan aturan sepertiga diagonal ruang: $d = \\frac{1}{3} s\\sqrt{3}$.",
            "solusi": r"""
1. Jarak dari titik sudut ke bidang diagonal di hadapannya adalah $\frac{1}{3}$ panjang diagonal ruang:
   $$d = \frac{1}{3} \times (12\sqrt{3}) = \mathbf{4\sqrt{3}\text{ cm}}$$
"""
        },
        {
            "tipe": "Variasi 3: Jarak Antara Dua Titik Tengah",
            "soal": "Pada kubus $ABCD.EFGH$ dengan rusuk $10\text{ cm}$, titik $M$ di tengah $AB$ dan titik $N$ di tengah $GH$. Tentukan panjang ruas garis $MN$!",
            "konsep_kunci": "Proyeksikan titik ke bidang dasar lalu gunakan teorema Pythagoras 3D.",
            "solusi": r"""
1. Vektor perpindahan dari $M$ ke $N$:
   - Sumbu $X$ (sepanjang $AB$): $\Delta x = 0$ (keduanya di posisi tengah).
   - Sumbu $Y$ (sepanjang $BC$): $\Delta y = 10\text{ cm}$ (dari depan ke belakang).
   - Sumbu $Z$ (sepanjang $AE$): $\Delta z = 10\text{ cm}$ (dari alas ke atap).
2. Hitung jarak $MN$:
   $$MN = \sqrt{(\Delta x)^2 + (\Delta y)^2 + (\Delta z)^2} = \sqrt{0^2 + 10^2 + 10^2} = \sqrt{200} = \mathbf{10\sqrt{2}\text{ cm}}$$
"""
        }
    ]
}

# 3.4 Keliling & Luas Bangun Datar
sub_3_4 = {
    "sub_chapter_id": "3.4",
    "module_id": "MOD-3",
    "module_name": "Geometri & Pengukuran",
    "short_title": "Keliling & Luas Bangun Datar",
    "title": "Keliling & Luas Bangun Datar",
    "sub_topics": [
        "Keliling & Luas Segitiga (Alas-Tinggi, Rumus Heron, dan Rumus Sinus)",
        "Segiempat Beraturan: Persegi, Persegi Panjang, dan Jajar Genjang",
        "Segiempat Khusus: Belah Ketupat, Layang-Layang, dan Trapesium",
        "Lingkaran: Keliling (2πr), Luas (πr^2), Panjang Busur, dan Luas Juring",
        "Analisis Luas Daerah Arsiran (Shaded Area) dari Gabungan Bangun Datar"
    ],
    "teori_definisi": r"""
### 1. Segitiga
- **Alas & Tinggi:** $L = \frac{1}{2} a \cdot t$
- **Rumus Heron (Diketahui Ketiga Sisi $a, b, c$):**
  $$L = \sqrt{s(s - a)(s - b)(s - c)}, \quad s = \frac{a + b + c}{2}$$
- **Trigonometri (Diketahui Dua Sisi & Sudut Apit $\theta$):**
  $$L = \frac{1}{2} a b \sin \theta$$

### 2. Segiempat
- **Persegi:** $K = 4s, \quad L = s^2$
- **Persegi Panjang:** $K = 2(p + l), \quad L = p \times l$
- **Jajar Genjang:** $L = a \times t$
- **Belah Ketupat & Layang-Layang:** $L = \frac{1}{2} d_1 d_2$
- **Trapesium:** $L = \frac{1}{2}(a + b) \times t$

### 3. Lingkaran
- **Keliling & Luas:** $K = 2\pi r = \pi d, \quad L = \pi r^2$
- **Panjang Busur:** $s = \frac{\theta}{360^\circ} \times 2\pi r$
- **Luas Juring:** $L_j = \frac{\theta}{360^\circ} \times \pi r^2$
- **Luas Tembereng:** $L_t = L_{\text{juring}} - L_{\triangle}$
""",
    "rumus_katex": r"""
### Tabel Formula Luas Bangun Datar Lengkap
| Bangun Datar | Formula Luas ($L$) | Parameter Kunci |
|---|---|---|
| Segitiga Heron | $\sqrt{s(s-a)(s-b)(s-c)}$ | $s = \frac{a+b+c}{2}$ |
| Segitiga Sinus | $\frac{1}{2}ab \sin C$ | Dua sisi $a, b$ dan sudut apit $C$ |
| Belah Ketupat | $\frac{1}{2} d_1 d_2$ | Diagonal 1 dan Diagonal 2 |
| Trapesium | $\frac{a+b}{2} \cdot t$ | Sisi sejajar $a, b$ dan tinggi $t$ |
| Juring Lingkaran | $\frac{\alpha}{360^\circ} \pi r^2$ | Sudut pusat $\alpha$ dan jari-jari $r$ |
""",
    "karakteristik_batasan": r"""
### Batasan Kasus & Ketentuan Khusus
- Nilai $\pi$: Gunakan $\frac{22}{7}$ jika jari-jari kelipatan 7, dan $3{,}14$ jika bukan kelipatan 7.
- Sudut juring wajib dalam satuan derajat ($^\circ$) jika membagi 360, atau radian jika menggunakan formula $L = \frac{1}{2} r^2 \theta$.
""",
    "rangkuman": r"""
### 📑 Rangkuman Super Padat (Cheat Sheet)
1. **Segitiga 3 Sisi:** Selalu gunakan rumus Heron ($s = \text{setengah keliling}$).
2. **Belah Ketupat / Layang-Layang:** Luas selalu $\frac{1}{2} \times d_1 \times d_2$.
3. **Daerah Arsiran:** Luas Bangun Luar dikurangi Luas Bangun Dalam yang tidak diarsir.
""",
    "contoh_kontekstual": r"""
### Contoh Kasus Riil: Desain Taman Berbentuk Juring Lingkaran
Sebuah taman perumahan dibuat berbentuk juring lingkaran dengan sudut pusat $60^\circ$ dan jari-jari $14\text{ meter}$. 
Tentukan luas taman dan keliling pagar yang mengelilingi taman tersebut!

**Langkah Penyelesaian Terstruktur:**
1. **Luas Taman (Luas Juring):**
   $$L = \frac{60^\circ}{360^\circ} \times \pi r^2 = \frac{1}{6} \times \frac{22}{7} \times 14 \times 14 = \frac{1}{6} \times 22 \times 2 \times 14 = \frac{616}{6} = \mathbf{102{,}67\text{ m}^2}$$
2. **Keliling Pagar Taman:**
   Pagar mengelilingi 2 jari-jari dan 1 busur lingkaran:
   - Panjang busur: $b = \frac{60^\circ}{360^\circ} \times 2\pi r = \frac{1}{6} \times 2 \times \frac{22}{7} \times 14 = \frac{1}{6} \times 88 = 14{,}67\text{ m}$
   - Keliling total pagar: $K = 2r + b = 2(14) + 14{,}67 = 28 + 14{,}67 = \mathbf{42{,}67\text{ meter}}$
""",
    "trik_cepat": r"""
### ⚡ Trik Cepat Analisis
1. **Trik Luas Daun Lingkaran (Tembereng Ganda Persegi):**
   Pada persegi sisi $s$ dengan dua juring seperempat lingkaran yang berpotongan membentuk pola daun, luas arsirannya adalah:
   $$L_{\text{daun}} = \frac{4}{7} s^2$$
   *Contoh:* Persegi sisi $14\text{ cm} \implies L = \frac{4}{7} \times 14^2 = \frac{4}{7} \times 196 = \mathbf{112\text{ cm}^2}$ (cepat tanpa rumus berbelit-belit!).
""",
    "variasi_soal": [
        {
            "tipe": "Variasi 1: Rumus Heron Segitiga Sembarang",
            "soal": "Tentukan luas segitiga yang panjang sisi-sisinya adalah $7\text{ cm}$, $8\text{ cm}$, dan $9\text{ cm}$!",
            "konsep_kunci": "Hitung semi-perimeter $s = \\frac{7+8+9}{2} = 12$, lalu gunakan rumus Heron.",
            "solusi": r"""
1. Hitung $s$:
   $$s = \frac{7 + 8 + 9}{2} = 12\text{ cm}$$
2. Terapkan rumus Heron:
   $$L = \sqrt{12(12 - 7)(12 - 8)(12 - 9)} = \sqrt{12 \times 5 \times 4 \times 3}$$
   $$L = \sqrt{12 \times 60} = \sqrt{720} = \sqrt{144 \times 5} = \mathbf{12\sqrt{5}\text{ cm}^2}$$
"""
        },
        {
            "tipe": "Variasi 2: Luas Trapesium Sama Kaki",
            "soal": "Sebuah trapesium sama kaki memiliki panjang sisi sejajar $10\text{ cm}$ dan $22\text{ cm}$, serta panjang kaki $10\text{ cm}$. Tentukan luas trapesium tersebut!",
            "konsep_kunci": "Tentukan tinggi trapesium dengan teorema Pythagoras pada segitiga kaki.",
            "solusi": r"""
1. Panjang alas segitiga kaki di kiri/kanan:
   $$x = \frac{22 - 10}{2} = 6\text{ cm}$$
2. Hitung tinggi trapesium ($t$):
   $$t = \sqrt{10^2 - 6^2} = \sqrt{100 - 36} = \sqrt{64} = 8\text{ cm}$$
3. Hitung luas trapesium:
   $$L = \frac{10 + 22}{2} \times 8 = 16 \times 8 = \mathbf{128\text{ cm}^2}$$
"""
        },
        {
            "tipe": "Variasi 3: Daerah Arsiran Lingkaran dalam Persegi",
            "soal": "Sebuah lingkaran tepat berada di dalam sebuah persegi yang memiliki sisi $20\text{ cm}$. Tentukan luas daerah di dalam persegi tetapi di luar lingkaran (gunakan $\\pi = 3{,}14$)!",
            "konsep_kunci": "Luas arsiran $= L_{\\text{persegi}} - L_{\\text{lingkaran}}$ dengan diameter lingkaran $= \\text{sisi persegi} = 20\\text{ cm}$.",
            "solusi": r"""
1. Luas persegi:
   $$L_p = 20 \times 20 = 400\text{ cm}^2$$
2. Luas lingkaran ($r = 10\text{ cm}$):
   $$L_l = 3{,}14 \times 10^2 = 314\text{ cm}^2$$
3. Luas daerah sisa:
   $$L = 400 - 314 = \mathbf{86\text{ cm}^2}$$
"""
        }
    ]
}

# 3.5 Bangun Ruang & Jaring-Jaring
sub_3_5 = {
    "sub_chapter_id": "3.5",
    "module_id": "MOD-3",
    "module_name": "Geometri & Pengukuran",
    "short_title": "Bangun Ruang & Jaring-Jaring",
    "title": "Bangun Ruang Sisi Datar & Lengkung, Jaring-Jaring",
    "sub_topics": [
        "Bangun Ruang Sisi Datar: Kubus, Balok, Prisma, dan Limas (Volume & Luas)",
        "Bangun Ruang Sisi Lengkung: Tabung, Kerucut, dan Bola (Volume & Luas)",
        "Identifikasi Pola Jaring-Jaring Kubus (Pola 1-4-1, 2-3-1, 2-2-2, 3-3)",
        "Analisis Posisi Sisi-Sisi yang Saling Berhadapan pada Jaring-Jaring Kubus",
        "Jaring-Jaring Balok, Tabung, dan Kerucut (Hubungan Selimut dan Garis Pelukis)",
        "Perhitungan Bangun Ruang Terpotong / Gabungan (Tenda, Corong, Tangki)"
    ],
    "teori_definisi": r"""
### 1. Bangun Ruang Sisi Datar
- **Kubus:** $V = s^3, \quad L = 6s^2$
- **Balok:** $V = p \cdot l \cdot t, \quad L = 2(pl + pt + lt)$
- **Prisma:** $V = L_{\text{alas}} \times t, \quad L = 2 L_{\text{alas}} + (K_{\text{alas}} \times t)$
- **Limas:** $V = \frac{1}{3} L_{\text{alas}} \times t, \quad L = L_{\text{alas}} + \sum L_{\triangle \text{tegak}}$

### 2. Bangun Ruang Sisi Lengkung
- **Tabung:** $V = \pi r^2 t, \quad L = 2\pi r(r + t), \quad L_{\text{selimut}} = 2\pi r t$
- **Kerucut:** $V = \frac{1}{3} \pi r^2 t, \quad L = \pi r(r + s), \quad s = \sqrt{r^2 + t^2} \text{ (garis pelukis)}$
- **Bola:** $V = \frac{4}{3} \pi r^3, \quad L = 4\pi r^2$

### 3. Analisis Jaring-Jaring Kubus (11 Pola Resmi)
Ada 11 ragam jaring-jaring kubus terbagi dalam 4 kelompok:
1. **Pola 1-4-1 (6 varian):** 4 persegi sebaris di tengah, 1 di atas, 1 di bawah.
2. **Pola 2-3-1 (3 varian):** 3 persegi sebaris di tengah, 2 di atas, 1 di bawah.
3. **Pola 2-2-2 (1 varian):** Tangga berundak 3 baris masing-masing 2 persegi.
4. **Pola 3-3 (1 varian):** Tangga 2 baris masing-masing 3 persegi.
- **Kaidah Sisi Berhadapan:** Dua sisi kubus yang saling berhadapan **TIDAK PERNAH bersentuhan langsung** (selalu berselang 1 kotak pada garis lurus jaring-jaring).
""",
    "rumus_katex": r"""
### Tabel Formula Luas Permukaan & Volume
| Bangun Ruang | Volume ($V$) | Luas Permukaan ($L$) | Luas Selimut Saja |
|---|---|---|---|
| Tabung | $\pi r^2 t$ | $2\pi r(r + t)$ | $2\pi r t$ |
| Kerucut | $\frac{1}{3}\pi r^2 t$ | $\pi r(r + s)$ | $\pi r s$ ($s=\sqrt{r^2+t^2}$) |
| Bola | $\frac{4}{3}\pi r^3$ | $4\pi r^2$ | - |
| Setengah Bola Padat | $\frac{2}{3}\pi r^3$ | $3\pi r^2$ | $2\pi r^2$ |
""",
    "karakteristik_batasan": r"""
### Batasan Kasus & Ketentuan Khusus
- Perhatikan istilah **"tanpa tutup"**:
  - Tabung tanpa tutup: $L = \pi r^2 + 2\pi r t$.
  - Kerucut tanpa tutup = Luas selimut kerucut: $L = \pi r s$.
- Setengah bola **padat/pejal**: Luas permukaannya adalah luas kubah ditambah luas penampang alas lingkaran $\implies 2\pi r^2 + \pi r^2 = 3\pi r^2$.
""",
    "rangkuman": r"""
### 📑 Rangkuman Super Padat (Cheat Sheet)
1. **Prinsip Volume Limas/Kerucut:** Selalu $\frac{1}{3} \times$ Volume prisma/tabung alasnya.
2. **Jaring-Jaring Kubus:** Dua sisi berhadapan selalu berjarak 1 persegi di antara keduanya.
3. **Kerucut:** Ingat tripel Pythagoras untuk $(r, t, s)$.
""",
    "contoh_kontekstual": r"""
### Contoh Kasus Riil: Pembuatan Tenda Kerucut
Sebuah tenda pesta berbentuk kerucut memiliki diameter alas $12\text{ meter}$ ($r = 6\text{ m}$) dan tinggi $8\text{ meter}$.
Berapa meter persegi kain terpal yang dibutuhkan untuk membuat selimut tenda tersebut?

**Langkah Penyelesaian Terstruktur:**
1. **Tentukan Garis Pelukis ($s$):**
   $$s = \sqrt{r^2 + t^2} = \sqrt{6^2 + 8^2} = \sqrt{36 + 64} = \sqrt{100} = 10\text{ meter}$$
2. **Hitung Luas Selimut Kerucut:**
   $$L_{\text{selimut}} = \pi \cdot r \cdot s = 3{,}14 \times 6 \times 10 = 3{,}14 \times 60 = \mathbf{188{,}4\text{ m}^2}$$
""",
    "trik_cepat": r"""
### ⚡ Trik Cepat Analisis
1. **Tripel Pythagoras pada Kerucut:**
   Kombinasi $(r, t, s)$ selalu membentuk segitiga siku-siku. Gunakan tripel terkenal:
   - $(3, 4, 5) \to (6, 8, 10) \to (9, 12, 15)$
   - $(5, 12, 13)$
   - $(7, 24, 25)$
   - $(8, 15, 17)$
""",
    "variasi_soal": [
        {
            "tipe": "Variasi 1: Analisis Sisi Berhadapan Jaring-Jaring Kubus",
            "soal": "Pada jaring-jaring kubus dengan pola 1-4-1 di mana persegi diberi nomor 1 sampai 6 secara horizontal di baris tengah (nomor 2, 3, 4, 5), nomor 1 di atas nomor 3, dan nomor 6 di bawah nomor 4. Jika nomor 3 adalah alas kubus, nomor berapakah yang menjadi tutup kubus?",
            "konsep_kunci": "Dua sisi berhadapan berselang satu kotak pada jaring-jaring horizontal, atau berpasangan atas-bawah.",
            "solusi": r"""
1. Pada baris tengah horizontal (2, 3, 4, 5):
   - Sisi 2 berhadapan dengan sisi 4 (berselang sisi 3).
   - Sisi 3 berhadapan dengan sisi 5 (berselang sisi 4).
2. Sisi atas (1) dan sisi bawah (6):
   - Karena sisi 3 adalah alas, maka tutup kubus adalah sisi yang berhadapan dengan sisi 3.
   - Sisi yang berhadapan dengan nomor 3 adalah **nomor 5**.
"""
        },
        {
            "tipe": "Variasi 2: Volume Gabungan Tabung dan Kerucut",
            "soal": "Sebuah wadah silinder memiliki diameter $14\text{ cm}$ dan tinggi $20\text{ cm}$ ditumpuk dengan kerucut yang memiliki diameter sama dan tinggi $9\text{ cm}$. Tentukan volume total wadah!",
            "konsep_kunci": "Volume total $= V_{\\text{tabung}} + V_{\\text{kerucut}}$ dengan $r = 7\\text{ cm}$.",
            "solusi": r"""
1. Volume tabung:
   $$V_1 = \pi r^2 t_1 = \frac{22}{7} \times 7^2 \times 20 = 22 \times 7 \times 20 = 3.080\text{ cm}^3$$
2. Volume kerucut:
   $$V_2 = \frac{1}{3} \pi r^2 t_2 = \frac{1}{3} \times \frac{22}{7} \times 7^2 \times 9 = \frac{1}{3} \times 154 \times 9 = 154 \times 3 = 462\text{ cm}^3$$
3. Volume total:
   $$V_{\text{total}} = 3.080 + 462 = \mathbf{3.542\text{ cm}^3}$$
"""
        },
        {
            "tipe": "Variasi 3: Perubahan Volume Akibat Skala Jari-Jari",
            "soal": "Jari-jari sebuah bola diperbesar menjadi 3 kali semula. Berapa kali lipat volume bola baru dibandingkan volume bola mula-mula?",
            "konsep_kunci": "Volume bola berbanding lurus dengan pangkat tiga jari-jarinya ($V \\propto r^3$).",
            "solusi": r"""
1. Rasio jari-jari: $k = 3$.
2. Rasio volume:
   $$\frac{V_{\text{baru}}}{V_{\text{lama}}} = k^3 = 3^3 = \mathbf{27\text{ kali lipat}}$$
"""
        }
    ]
}

# 3.6 Transformasi Geometri (Dilatasi)
sub_3_6 = {
    "sub_chapter_id": "3.6",
    "module_id": "MOD-3",
    "module_name": "Geometri & Pengukuran",
    "short_title": "Transformasi Geometri (Dilatasi)",
    "title": "Transformasi Geometri (Transformasi Titik, Garis & Dilatasi)",
    "sub_topics": [
        "Translasi (Pergeseran) Titik dan Bangun pada Bidang Koordinat",
        "Refleksi (Pencerminan) terhadap Sumbu X, Sumbu Y, Garis y=x, dan Garis y=-x",
        "Rotasi (Perputaran) terhadap Titik Pusat (0,0) Sebesar Sudut θ",
        "Dilatasi Titik terhadap Pusat (0,0) dengan Faktor Skala k: P'(kx, ky)",
        "Dilatasi Titik terhadap Pusat Sembarang (a,b) dengan Faktor Skala k",
        "Pengaruh Transformasi Dilatasi terhadap Perubahan Luas Bangun (|k|^2 * L)"
    ],
    "teori_definisi": r"""
### 1. Empat Jenis Transformasi Geometri
1. **Translasi (Pergeseran) $T(a, b)$:**
   $$(x', y') = (x + a, y + b)$$
2. **Refleksi (Pencerminan):**
   - Terhadap sumbu $X$: $(x, -y)$
   - Terhadap sumbu $Y$: $(-x, y)$
   - Terhadap garis $y = x$: $(y, x)$
   - Terhadap garis $y = -x$: $(-y, -x)$
   - Terhadap garis $x = h$: $(2h - x, y)$
   - Terhadap garis $y = k$: $(x, 2k - y)$
3. **Rotasi $[O, \theta]$:**
   $$\begin{pmatrix} x' \\ y' \end{pmatrix} = \begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix}$$
4. **Dilatasi (Perkalian Skala $[P, k]$):**
   - **Pusat $O(0, 0)$:** $(x', y') = (kx, ky)$
   - **Pusat Sembarang $P(a, b)$:**
     $$x' = k(x - a) + a, \quad y' = k(y - b) + b$$
""",
    "rumus_katex": r"""
### Matriks Transformasi & Perubahan Luas
1. **Matriks Dilatasi $[O, k]$:**
   $$\begin{pmatrix} x' \\ y' \end{pmatrix} = \begin{pmatrix} k & 0 \\ 0 & k \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix}$$
2. **Perubahan Luas Bangun Datar Akibat Dilatasi:**
   $$L' = |k|^2 \times L$$
   *(Jika dilatasi dengan $k = -2$, luas bayangan menjadi $|-2|^2 \times L = 4L$).*
""",
    "karakteristik_batasan": r"""
### Batasan Kasus & Ketentuan Khusus
- Nilai faktor skala $k$:
  - Jika $k > 1$: bangun diperbesar dan searah.
  - Jika $0 < k < 1$: bangun diperkecil dan searah.
  - Jika $k < 0$: bangun diperbesar/diperkecil dan **terbalik arah** (berlawanan terhadap pusat dilatasi).
- Dilatasi mengubah ukuran bangun, sedangkan translasi, refleksi, dan rotasi mempertahankan ukuran (isometri).
""",
    "rangkuman": r"""
### 📑 Rangkuman Super Padat (Cheat Sheet)
1. **Dilatasi Pusat $(0,0)$:** Tinggal kalikan koordinat dengan $k \implies (kx, ky)$.
2. **Dilatasi Pusat $(a,b)$:** Tarik ke pusat $\to$ kali skala $\to$ kembalikan ke pusat:
   $$x' = a + k(x - a), \quad y' = b + k(y - b)$$
3. **Luas Bayangan:** Selalu dikalikan $k^2$.
""",
    "contoh_kontekstual": r"""
### Contoh Kasus Riil: Skalasi Blueprint Arsitektur
Sebuah denah ruang kantor dengan titik sudut $A(3, 2)$ dan $B(7, 5)$ diperbesar dengan faktor skala $k = 3$ dan pusat dilatasi di titik kontrol $P(1, 1)$. Tentukan koordinat baru titik $A'$!

**Langkah Penyelesaian Terstruktur:**
1. **Gunakan Formula Dilatasi Pusat $(a, b) = (1, 1)$:**
   $$x' = a + k(x - a) = 1 + 3(3 - 1) = 1 + 3(2) = 1 + 6 = \mathbf{7}$$
   $$y' = b + k(y - b) = 1 + 3(2 - 1) = 1 + 3(1) = 1 + 3 = \mathbf{4}$$
2. **Hasil Akhir Koordinat $A'$:** **$(7, 4)$**.
""",
    "trik_cepat": r"""
### ⚡ Trik Cepat Analisis
1. **Trik Vektor Dilatasi:**
   Pandang sebagai vektor $\vec{PA} = A - P = (3-1, 2-1) = (2, 1)$.
   Kalikan dengan $k = 3 \implies 3 \times (2, 1) = (6, 3)$.
   Lalu jumlahkan kembali dengan pusat $P(1, 1) \implies (1+6, 1+3) = \mathbf{(7, 4)}$. Sangat cepat dan tidak rentan tertukar tanda kurung!
""",
    "variasi_soal": [
        {
            "tipe": "Variasi 1: Dilatasi Titik Pusat (0,0)",
            "soal": "Tentukan bayangan titik $Q(-4, 6)$ oleh dilatasi $[O, -\\frac{1}{2}]$!",
            "konsep_kunci": "Kalikan langsung absis dan ordinat dengan faktor skala $k = -\\frac{1}{2}$.",
            "solusi": r"""
1. Hitung koordinat bayangan:
   $$x' = -\frac{1}{2} \times (-4) = 2$$
   $$y' = -\frac{1}{2} \times 6 = -3$$
2. Jadi, bayangan titik $Q'$ adalah $\mathbf{(2, -3)}$.
"""
        },
        {
            "tipe": "Variasi 2: Dilatasi Garis Lurus",
            "soal": "Tentukan persamaan bayangan garis $2x - 3y + 6 = 0$ oleh dilatasi $[O, 2]$!",
            "konsep_kunci": "Substitusi $x = \\frac{x'}{k} = \\frac{x'}{2}$ dan $y = \\frac{y'}{k} = \\frac{y'}{2}$ ke persamaan garis awal.",
            "solusi": r"""
1. Hubungan koordinat awal dan bayangan:
   $$x' = 2x \implies x = \frac{x'}{2}$$
   $$y' = 2y \implies y = \frac{y'}{2}$$
2. Substitusi ke persamaan garis:
   $$2\left(\frac{x'}{2}\right) - 3\left(\frac{y'}{2}\right) + 6 = 0 \implies x' - \frac{3}{2}y' + 6 = 0$$
3. Kalikan seluruh persamaan dengan 2:
   $$\mathbf{2x - 3y + 12 = 0}$$
"""
        },
        {
            "tipe": "Variasi 3: Perubahan Luas Segitiga Akibat Dilatasi",
            "soal": "Sebuah segitiga memiliki luas $15\text{ cm}^2$. Tentukan luas segitiga setelah didilatasikan oleh $[P, -4]$!",
            "konsep_kunci": "Luas bayangan adalah $L' = |k|^2 \\times L$.",
            "solusi": r"""
1. Tentukan faktor pengali luas:
   $$|k|^2 = |-4|^2 = 16$$
2. Hitung luas bayangan:
   $$L' = 16 \times 15 = \mathbf{240\text{ cm}^2}$$
"""
        }
    ]
}

# Write files
for sub in [sub_3_1, sub_3_2, sub_3_3, sub_3_4, sub_3_5, sub_3_6]:
    sub_id = sub["sub_chapter_id"].replace(".", "_")
    path = f"data/modules/subchapter_{sub_id}.json"
    with open(path, "w", encoding="utf-8") as f:
        json.dump(sub, f, ensure_ascii=False, indent=2)
    print(f"Generated {path}")

print("Module 3 upgrade complete!")
