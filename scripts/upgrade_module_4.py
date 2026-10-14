import json
import os

os.makedirs("data/modules", exist_ok=True)

# 4.1 Perbandingan Trigonometri Dasar
sub_4_1 = {
    "sub_chapter_id": "4.1",
    "module_id": "MOD-4",
    "module_name": "Trigonometri",
    "short_title": "Perbandingan Trigonometri Dasar",
    "title": "Perbandingan Trigonometri Segitiga Siku-Siku",
    "sub_topics": [
        "Nomenklatur Segitiga Siku-Siku: Sisi Depan (de), Samping (sa), Miring (mi)",
        "Definisi Rasio Trigonometri Utama: sin θ, cos θ, dan tan θ",
        "Definisi Rasio Resiprokal (Kebalikan): csc θ, sec θ, dan cot θ",
        "Identitas Pokok Trigonometri (sin^2 θ + cos^2 θ = 1, tan^2 θ + 1 = sec^2 θ)",
        "Menentukan Nilai Rasio Trigonometri Lain Jika Diketahui Satu Nilai Rasio"
    ],
    "teori_definisi": r"""
### 1. Nomenklatur Sisi pada Segitiga Siku-Siku
Relatif terhadap sudut lancip $\theta$:
- **Sisi Depan ($de$ / $y$):** Sisi yang berhadapan langsung dengan sudut $\theta$.
- **Sisi Samping ($sa$ / $x$):** Sisi yang mengapit sudut $\theta$ bersama sisi miring.
- **Sisi Miring / Hipotenusa ($mi$ / $r$):** Sisi terpanjang di hadapan sudut siku-siku ($r = \sqrt{x^2 + y^2}$).

### 2. Definisi 6 Rasio Trigonometri
- **Sinus ($\sin$):** $\sin\theta = \frac{\text{depan}}{\text{miring}} = \frac{de}{mi}$
- **Cosinus ($\cos$):** $\cos\theta = \frac{\text{samping}}{\text{miring}} = \frac{sa}{mi}$
- **Tangen ($\tan$):** $\tan\theta = \frac{\text{depan}}{\text{samping}} = \frac{de}{sa} = \frac{\sin\theta}{\cos\theta}$
- **Cosecan ($\csc$):** $\csc\theta = \frac{1}{\sin\theta} = \frac{mi}{de}$
- **Secan ($\sec$):** $\sec\theta = \frac{1}{\cos\theta} = \frac{mi}{sa}$
- **Cotangen ($\cot$):** $\cot\theta = \frac{1}{\tan\theta} = \frac{sa}{de}$
""",
    "rumus_katex": r"""
### Identitas Dasar & Teorema Pythagoras Trigonometri
1. **Identitas Pokok (Pythagoras):**
   $$\sin^2\theta + \cos^2\theta = 1$$
2. **Identitas Turunan:**
   $$1 + \tan^2\theta = \sec^2\theta \quad (\text{bagi dengan } \cos^2\theta)$$
   $$1 + \cot^2\theta = \csc^2\theta \quad (\text{bagi dengan } \sin^2\theta)$$
""",
    "karakteristik_batasan": r"""
### Batasan Kasus & Ketentuan Khusus
- Nilai sinus dan cosinus sudut lancip selalu berada pada rentang $0 < \sin\theta < 1$ dan $0 < \cos\theta < 1$.
- Tangen tidak terdefinisi pada $\theta = 90^\circ$ (karena $\cos 90^\circ = 0$, pembagian dengan nol).
""",
    "rangkuman": r"""
### 📑 Rangkuman Super Padat (Cheat Sheet)
1. **Jembatan Keledai Populer:**
   - **Demi** ($\sin = \frac{de}{mi}$)
   - **Sami** ($\cos = \frac{sa}{mi}$)
   - **Desa** ($\tan = \frac{de}{sa}$)
2. **Cari Sisi Ketiga:** Selalu gunakan teorema Pythagoras $r = \sqrt{x^2 + y^2}$.
3. **Tripel Pythagoras Paling Sering Muncul:** $(3, 4, 5)$, $(5, 12, 13)$, $(7, 24, 25)$, $(8, 15, 17)$.
""",
    "contoh_kontekstual": r"""
### Contoh Kasus Riil: Kemiringan Tangga Darurat
Sebuah tangga darurat disandarkan ke dinding gedung:
- Panjang tangga $= 10\text{ meter}$ ($mi = 10$).
- Jarak kaki tangga ke dinding $= 6\text{ meter}$ ($sa = 6$).
Tentukan tinggi dinding yang dicapai tangga ($de$) dan nilai $\sin\theta, \cos\theta, \tan\theta$ terhadap tanah!

**Langkah Penyelesaian Terstruktur:**
1. **Hitung Sisi Depan ($de$ / Tinggi Dinding):**
   $$de = \sqrt{mi^2 - sa^2} = \sqrt{10^2 - 6^2} = \sqrt{100 - 36} = \sqrt{64} = \mathbf{8\text{ meter}}$$
2. **Hitung Tiga Rasio Trigonometri:**
   - $\sin\theta = \frac{de}{mi} = \frac{8}{10} = \mathbf{\frac{4}{5} = 0{,}8}$
   - $\cos\theta = \frac{sa}{mi} = \frac{6}{10} = \mathbf{\frac{3}{5} = 0{,}6}$
   - $\tan\theta = \frac{de}{sa} = \frac{8}{6} = \mathbf{\frac{4}{3} \approx 1{,}33}$
""",
    "trik_cepat": r"""
### ⚡ Trik Cepat Analisis
1. **Menghitung Nilai Lain Jika Diketahui Satu Nilai:**
   Jika diketahui $\tan\theta = \frac{5}{12}$:
   Langsung pasang $de = 5, sa = 12 \implies mi = 13$ (tripel 5-12-13).
   Maka otomatis $\sin\theta = \frac{5}{13}$ dan $\cos\theta = \frac{12}{13}$ tanpa perlu rumus aljabar rumit!
""",
    "variasi_soal": [
        {
            "tipe": "Variasi 1: Menentukan Nilai Trigonometri dari Segitiga",
            "soal": "Diketahui segitiga $ABC$ siku-siku di $B$. Jika panjang $AB = 12\text{ cm}$ dan $BC = 5\text{ cm}$, tentukan nilai dari $\\cos A$ dan $\\sin C$!",
            "konsep_kunci": "Perhatikan bahwa sudut $A$ memiliki sisi depan $BC$ dan samping $AB$, sedangkan sudut $C$ memiliki sisi depan $AB$ dan samping $BC$.",
            "solusi": r"""
1. Hitung hipotenusa $AC$:
   $$AC = \sqrt{AB^2 + BC^2} = \sqrt{12^2 + 5^2} = \sqrt{144 + 25} = \sqrt{169} = 13\text{ cm}$$
2. Tinjau terhadap sudut $A$:
   - Sisi samping $= AB = 12$
   - Sisi miring $= AC = 13$
   $$\cos A = \frac{sa}{mi} = \mathbf{\frac{12}{13}}$$
3. Tinjau terhadap sudut $C$:
   - Sisi depan $= AB = 12$
   - Sisi miring $= AC = 13$
   $$\sin C = \frac{de}{mi} = \mathbf{\frac{12}{13}}$$
   *(Catatan: $\cos A = \sin C$ karena $A$ dan $C$ saling berkomplemen).*
"""
        },
        {
            "tipe": "Variasi 2: Operasi Identitas Trigonometri Dasar",
            "soal": "Jika diketahui $\\sin\\theta = \\frac{3}{5}$ dengan $\\theta$ sudut lancip, tentukan nilai dari $\\frac{\\tan\\theta - \\cos\\theta}{\\sec\\theta}$!",
            "konsep_kunci": "Gunakan tripel Pythagoras $(3, 4, 5)$ untuk menentukan semua rasio sebelum mensubstitusikan.",
            "solusi": r"""
1. Dari $\sin\theta = \frac{3}{5} = \frac{de}{mi}$, diperoleh $sa = \sqrt{5^2 - 3^2} = 4$.
2. Nilai rasio lainnya:
   - $\cos\theta = \frac{4}{5}$
   - $\tan\theta = \frac{3}{4}$
   - $\sec\theta = \frac{1}{\cos\theta} = \frac{5}{4}$
3. Evaluasi pembilang:
   $$\tan\theta - \cos\theta = \frac{3}{4} - \frac{4}{5} = \frac{15 - 16}{20} = -\frac{1}{20}$$
4. Bagi dengan $\sec\theta$:
   $$\frac{-\frac{1}{20}}{\frac{5}{4}} = -\frac{1}{20} \times \frac{4}{5} = \mathbf{-\frac{1}{25}}$$
"""
        },
        {
            "tipe": "Variasi 3: Penyederhanaan Ekspresi Identitas",
            "soal": "Buktikan dan sederhanakan bentuk: $(1 - \\cos^2\\theta)(1 + \\cot^2\\theta)$.",
            "konsep_kunci": "Terapkan identitas $\\sin^2\\theta + \\cos^2\\theta = 1$ dan $1 + \\cot^2\\theta = \\csc^2\\theta$.",
            "solusi": r"""
1. Ganti masing-masing kurung dengan identitasnya:
   - $1 - \cos^2\theta = \sin^2\theta$
   - $1 + \cot^2\theta = \csc^2\theta = \frac{1}{\sin^2\theta}$
2. Kalikan kedua bentuk:
   $$\sin^2\theta \times \frac{1}{\sin^2\theta} = \mathbf{1}$$
"""
        }
    ]
}

# 4.2 Sudut Istimewa & Sudut Tumpul (Kuadran II)
sub_4_2 = {
    "sub_chapter_id": "4.2",
    "module_id": "MOD-4",
    "module_name": "Trigonometri",
    "short_title": "Sudut Istimewa & Sudut Tumpul (Kuadran II)",
    "title": "Sudut Istimewa & Kuadran II (Sudut Tumpul)",
    "sub_topics": [
        "Tabel Nilai Eksak Sudut Istimewa Kuadran I (0°, 30°, 45°, 60°, 90°)",
        "Sistem Empat Kuadran Kartesius dan Aturan Tanda Positif/Negatif Trigonometri",
        "Karakteristik Sudut Tumpul Kuadran II (Rentang 90° < α < 180°)",
        "Rumus Relasi Sudut Kuadran II: sin(180°-α)=+sin α, cos(180°-α)=-cos α, tan(180°-α)=-tan α",
        "Penentuan Nilai Trigonometri Sudut Khas Kuadran II (120°, 135°, 150°, 180°)",
        "Analisis Koordinat Kartesius Titik pada Kuadran II (x < 0, y > 0)"
    ],
    "teori_definisi": r"""
### 1. Nilai Eksak Sudut Istimewa Kuadran I
Sudut istimewa terbentuk dari segitiga sama sisi (sudut $30^\circ, 60^\circ$) dan segitiga siku-siku sama kaki (sudut $45^\circ$).

### 2. Aturan Tanda Empat Kuadran (ASTC)
Berdasarkan tanda absis ($x$) dan ordinat ($y$):
- **Kuadran I ($0^\circ < \theta < 90^\circ$):** $x > 0, y > 0 \implies$ **SEMUA positif** ($\sin, \cos, \tan > 0$).
- **Kuadran II ($90^\circ < \theta < 180^\circ$ / Sudut Tumpul):** $x < 0, y > 0 \implies$ **HANYA SINUS (dan cosecan) yang POSITIF**; $\cos$ dan $\tan$ bernilai **NEGATIF**.
- **Kuadran III ($180^\circ < \theta < 270^\circ$):** $x < 0, y < 0 \implies$ **HANYA TANGEN (dan cotangen) yang POSITIF**.
- **Kuadran IV ($270^\circ < \theta < 360^\circ$):** $x > 0, y < 0 \implies$ **HANYA COSINUS (dan secan) yang POSITIF**.
*(Hafalan populer: **"Semua-Sudah-Tahu-Caranya"**).*

### 3. Rumus Relasi Sudut Tumpul Kuadran II
Untuk sudut tumpul $\theta \in (90^\circ, 180^\circ)$, nyatakan $\theta = 180^\circ - \alpha$ dengan $\alpha$ lancip:
$$\sin(180^\circ - \alpha) = +\sin\alpha$$
$$\cos(180^\circ - \alpha) = -\cos\alpha$$
$$\tan(180^\circ - \alpha) = -\tan\alpha$$
""",
    "rumus_katex": r"""
### Tabel Nilai Sudut Istimewa & Sudut Tumpul Kuadran II
| Sudut ($\theta$) | Relasi Kuadran II | $\sin\theta$ | $\cos\theta$ | $\tan\theta$ |
|---|---|---|---|---|
| $0^\circ$ | - | $0$ | $1$ | $0$ |
| $30^\circ$ | - | $\frac{1}{2}$ | $\frac{1}{2}\sqrt{3}$ | $\frac{1}{3}\sqrt{3}$ |
| $45^\circ$ | - | $\frac{1}{2}\sqrt{2}$ | $\frac{1}{2}\sqrt{2}$ | $1$ |
| $60^\circ$ | - | $\frac{1}{2}\sqrt{3}$ | $\frac{1}{2}$ | $\sqrt{3}$ |
| $90^\circ$ | - | $1$ | $0$ | $\text{Tak Terdefinisi}$ |
| **$120^\circ$ (Tumpul)** | $180^\circ - 60^\circ$ | $+\frac{1}{2}\sqrt{3}$ | $-\frac{1}{2}$ | $-\sqrt{3}$ |
| **$135^\circ$ (Tumpul)** | $180^\circ - 45^\circ$ | $+\frac{1}{2}\sqrt{2}$ | $-\frac{1}{2}\sqrt{2}$ | $-1$ |
| **$150^\circ$ (Tumpul)** | $180^\circ - 30^\circ$ | $+\frac{1}{2}$ | $-\frac{1}{2}\sqrt{3}$ | $-\frac{1}{3}\sqrt{3}$ |
| **$180^\circ$ (Lurus)** | $180^\circ - 0^\circ$ | $0$ | $-1$ | $0$ |
""",
    "karakteristik_batasan": r"""
### Batasan Kasus & Ketentuan Khusus (Mandatori Matriks Silabus)
- **Batasan Sudut Tumpul:** Sudut tumpul $\alpha$ berada di Kuadran II ($90^\circ < \alpha < 180^\circ$).
- **Nilai Negatif Mutlak:** Dalam soal yang menyebutkan "$\alpha$ adalah sudut tumpul", nilai **$\cos\alpha$ dan $\tan\alpha$ PASTI NEGATIF**. Jangan lupa memberi tanda minus $(-)$ pada hasil akhir!
""",
    "rangkuman": r"""
### 📑 Rangkuman Super Padat (Cheat Sheet)
1. **Kuadran II:**
   - $\sin \to$ Positif (+)
   - $\cos \to$ Negatif (-)
   - $\tan \to$ Negatif (-)
2. **Cara Hitung Sudut Tumpul:**
   - Cari selisih ke $180^\circ$. Misal $150^\circ \to 180 - 150 = 30^\circ$.
   - Pasang nilai trigonometri sudut $30^\circ$, lalu beri tanda sesuai kuadran II:
     $\sin 150^\circ = +\sin 30^\circ = \frac{1}{2}$; $\cos 150^\circ = -\cos 30^\circ = -\frac{1}{2}\sqrt{3}$.
""",
    "contoh_kontekstual": r"""
### Contoh Kasus Riil: Vektor Gaya pada Sudut Tumpul
Sebuah derek menarik beban dengan gaya $F = 200\text{ N}$ membentuk sudut tumpul $\theta = 120^\circ$ terhadap sumbu $X$ positif.
Tentukan komponen gaya horizontal ($F_x = F \cos\theta$) dan gaya vertikal ($F_y = F \sin\theta$)!

**Langkah Penyelesaian Terstruktur:**
1. **Hitung Komponen Horizontal ($F_x$):**
   $$F_x = 200 \cos 120^\circ = 200 \cos(180^\circ - 60^\circ) = 200(-\cos 60^\circ)$$
   $$F_x = 200\left(-\frac{1}{2}\right) = \mathbf{-100\text{ N}} \quad (\text{arah ke kiri / sumbu } X \text{ negatif})$$
2. **Hitung Komponen Vertikal ($F_y$):**
   $$F_y = 200 \sin 120^\circ = 200 \sin(180^\circ - 60^\circ) = 200(+\sin 60^\circ)$$
   $$F_y = 200\left(\frac{1}{2}\sqrt{3}\right) = \mathbf{100\sqrt{3}\text{ N}} \quad (\text{arah ke atas / sumbu } Y \text{ positif})$$
""",
    "trik_cepat": r"""
### ⚡ Trik Cepat Analisis
1. **Trik "Selisih $180^\circ$":**
   Untuk sudut apa pun di Kuadran II, tutup mata dan kurangkan dari 180:
   - $120^\circ \implies 180 - 120 = 60^\circ$
   - $135^\circ \implies 180 - 135 = 45^\circ$
   - $150^\circ \implies 180 - 150 = 30^\circ$
   Lalu pasang aturan tanda: $\sin(+)$, $\cos(-)$, $\tan(-)$.
""",
    "variasi_soal": [
        {
            "tipe": "Variasi 1: Evaluasi Ekspresi Sudut Istimewa Campuran",
            "soal": "Hitung nilai dari: $\\sin 150^\\circ + \\cos 120^\\circ - \\tan 135^\\circ$.",
            "konsep_kunci": "Ubah semua sudut kuadran II ke sudut relasi $(180^\\circ - \\alpha)$ dengan memperhatikan tanda kuadran II.",
            "solusi": r"""
1. Hitung tiap nilai:
   - $\sin 150^\circ = \sin(180^\circ - 30^\circ) = +\sin 30^\circ = \frac{1}{2}$
   - $\cos 120^\circ = \cos(180^\circ - 60^\circ) = -\cos 60^\circ = -\frac{1}{2}$
   - $\tan 135^\circ = \tan(180^\circ - 45^\circ) = -\tan 45^\circ = -1$
2. Masukkan ke ekspresi:
   $$\frac{1}{2} + \left(-\frac{1}{2}\right) - (-1) = 0 + 1 = \mathbf{1}$$
"""
        },
        {
            "tipe": "Variasi 2: Sudut Tumpul Diketahui Salah Satu Nilai Rasio",
            "soal": "Diketahui $\\sin\\alpha = \\frac{5}{13}$ dan $\\alpha$ adalah sudut tumpul. Tentukan nilai dari $\\cos\\alpha$ dan $\\tan\\alpha$!",
            "konsep_kunci": "Karena $\\alpha$ sudut tumpul ($90^\\circ < \\alpha < 180^\\circ$), maka $\\cos\\alpha$ dan $\\tan\\alpha$ harus bernilai negatif.",
            "solusi": r"""
1. Dari $\sin\alpha = \frac{5}{13} = \frac{de}{mi}$, hitung sisi samping ($sa$):
   $$sa = \sqrt{13^2 - 5^2} = \sqrt{169 - 25} = \sqrt{144} = 12$$
2. Pasang tanda Kuadran II:
   $$\cos\alpha = -\frac{sa}{mi} = \mathbf{-\frac{12}{13}}$$
   $$\tan\alpha = -\frac{de}{sa} = \mathbf{-\frac{5}{12}}$$
"""
        },
        {
            "tipe": "Variasi 3: Koordinat Kartesius Titik Kuadran II",
            "soal": "Titik $P(-3, 3\\sqrt{3})$ terletak pada bidang kartesius. Tentukan besar sudut $\\theta$ yang dibentuk oleh garis $OP$ dengan sumbu $X$ positif!",
            "konsep_kunci": "Hitung $\\tan\\theta = \\frac{y}{x}$, perhatikan koordinat $(-3, 3\\sqrt{3})$ berada di Kuadran II.",
            "solusi": r"""
1. Hitung tangen sudut:
   $$\tan\theta = \frac{y}{x} = \frac{3\sqrt{3}}{-3} = -\sqrt{3}$$
2. Karena $x < 0$ dan $y > 0$, titik berada di Kuadran II.
3. Sudut lancip acuan dengan tangen $\sqrt{3}$ adalah $60^\circ$:
   $$\theta = 180^\circ - 60^\circ = \mathbf{120^\circ}$$
"""
        }
    ]
}

# 4.3 Aplikasi Klinometer & Sudut Elevasi
sub_4_3 = {
    "sub_chapter_id": "4.3",
    "module_id": "MOD-4",
    "module_name": "Trigonometri",
    "short_title": "Aplikasi Klinometer & Sudut Elevasi",
    "title": "Aplikasi Trigonometri Nyata (Klinometer & Elevasi)",
    "sub_topics": [
        "Prinsip Kerja dan Pengukuran Menggunakan Alat Klinometer",
        "Definisi Sudut Elevasi (Sudut Penglihatan ke Atas Garis Horizontal)",
        "Definisi Sudut Depresi (Sudut Penglihatan ke Bawah Garis Horizontal)",
        "Pemodelan Segitiga Siku-Siku dan Perbandingan Tangen: tan α = h / d",
        "Perhitungan Ketinggian Objek Nyata: H = Tinggi Mata + d * tan α",
        "Pemecahan Masalah Dua Titik Pengamatan Sudut Bertahap"
    ],
    "teori_definisi": r"""
### 1. Klinometer & Sudut Pengamatan
- **Klinometer:** Alat sederhana untuk mengukur sudut kemiringan (inklinasi) antara garis pandang dan bidang horizontal.
- **Sudut Elevasi ($\alpha$):** Sudut yang terbentuk antara garis horizontal pengamat dan arah pandang **ke atas** (melihat puncak gedung, pohon, atau tiang).
- **Sudut Depresi ($\beta$):** Sudut yang terbentuk antara garis horizontal pengamat dan arah pandang **ke bawah** (melihat kapal dari atas mercusuar).

### 2. Formula Penentuan Tinggi Objek Nyata
Jika seorang pengamat dengan tinggi mata $h_{\text{pengamat}}$ berdiri pada jarak horizontal $d$ dari sebuah objek dan memandang puncaknya dengan sudut elevasi $\alpha$:
$$\tan\alpha = \frac{\Delta h}{d} \implies \Delta h = d \cdot \tan\alpha$$
Tinggi total objek ($H$) adalah:
$$H = h_{\text{pengamat}} + \Delta h = h_{\text{pengamat}} + (d \cdot \tan\alpha)$$
""",
    "rumus_katex": r"""
### Model Matematika Dua Titik Pengamatan Bertahap
Jika pengamat bergerak mendekati objek dari titik 1 ke titik 2 sejauh $x$:
- Di titik 1 (jarak $d_1$), sudut elevasi $\alpha$.
- Di titik 2 (jarak $d_2 = d_1 - x$), sudut elevasi $\beta$ ($\beta > \alpha$).
$$\Delta h = \frac{x}{\cot\alpha - \cot\beta} = \frac{x \tan\alpha \tan\beta}{\tan\beta - \tan\alpha}$$
$$H = h_{\text{pengamat}} + \Delta h$$
""",
    "karakteristik_batasan": r"""
### Batasan Kasus & Ketentuan Khusus
- **Kesalahan Paling Sering:** Lupa menjumlahkan dengan **tinggi pengamat** ($h_{\text{pengamat}}$). Perhitungan $d \tan\alpha$ HANYA menghasilkan selisih tinggi dari mata ke puncak!
- Permukaan tanah diasumsikan datar horizontal sempurna kecuali jika dinyatakan miring secara khusus.
""",
    "rangkuman": r"""
### 📑 Rangkuman Super Padat (Cheat Sheet)
1. **Rumus Wajib:**
   $$\text{Tinggi Total} = \text{Tinggi Pengamat} + (\text{Jarak Horizontal} \times \tan\alpha)$$
2. **Ingat Nilai Tangen Sudut Khas:**
   - $\tan 30^\circ = \frac{1}{3}\sqrt{3} \approx 0{,}577$
   - $\tan 45^\circ = 1$ (pada sudut $45^\circ$, tinggi $\Delta h$ = jarak $d$!)
   - $\tan 60^\circ = \sqrt{3} \approx 1{,}732$
""",
    "contoh_kontekstual": r"""
### Contoh Kasus Riil: Mengukur Ketinggian Tiang Bendera
Seorang siswa dengan tinggi badan hingga mata $150\text{ cm}$ ($1{,}5\text{ m}$) berdiri sejauh $12\text{ meter}$ dari tiang bendera.
Dengan menggunakan klinometer, ia melihat puncak tiang bendera dengan sudut elevasi $45^\circ$.
Berapa tinggi total tiang bendera tersebut?

**Langkah Penyelesaian Terstruktur:**
1. **Identifikasi Data:** $h_{\text{mata}} = 1{,}5\text{ m}, d = 12\text{ m}, \alpha = 45^\circ$.
2. **Hitung Ketinggian dari Garis Mata ($\Delta h$):**
   $$\Delta h = d \cdot \tan 45^\circ = 12 \times 1 = 12\text{ meter}$$
3. **Hitung Tinggi Total Tiang ($H$):**
   $$H = h_{\text{mata}} + \Delta h = 1{,}5 + 12 = \mathbf{13{,}5\text{ meter}}$$
""",
    "trik_cepat": r"""
### ⚡ Trik Cepat Analisis
1. **Trik Sudut $45^\circ$:**
   Jika sudut elevasi $= 45^\circ$, maka $\Delta h$ SELALU SAMA dengan jarak pengamat ke objek!
   Tinggi objek langsung: $\text{Jarak} + \text{Tinggi pengamat}$. Selesai dalam 1 detik!
""",
    "variasi_soal": [
        {
            "tipe": "Variasi 1: Sudut Elevasi 60 Derajat",
            "soal": "Seorang pengamat setinggi $1{,}6\text{ m}$ berada sejauh $10\text{ m}$ dari sebuah pohon. Ia memandang puncak pohon dengan sudut elevasi $60^\circ$. Tentukan tinggi pohon (gunakan $\\sqrt{3} \\approx 1{,}73$)!",
            "konsep_kunci": "Terapkan $H = h_{\\text{mata}} + d \\tan 60^\\circ$.",
            "solusi": r"""
1. Nilai $\tan 60^\circ = \sqrt{3} \approx 1{,}73$.
2. Hitung $\Delta h$:
   $$\Delta h = 10 \times 1{,}73 = 17{,}3\text{ meter}$$
3. Hitung tinggi total pohon:
   $$H = 1{,}6 + 17{,}3 = \mathbf{18{,}9\text{ meter}}$$
"""
        },
        {
            "tipe": "Variasi 2: Sudut Depresi dari Atas Tebing",
            "soal": "Dari puncak mercusuar setinggi $60\text{ meter}$ di atas permukaan laut, seorang penjaga melihat sebuah perahu layar dengan sudut depresi $30^\circ$. Tentukan jarak horizontal perahu dari dasar mercusuar!",
            "konsep_kunci": "Sudut depresi dari puncak sama dengan sudut elevasi dari perahu (sudut dalam berseberangan): $\\tan 30^\\circ = \\frac{H}{d}$.",
            "solusi": r"""
1. Hubungan perbandingan:
   $$\tan 30^\circ = \frac{H}{d} \implies \frac{1}{\sqrt{3}} = \frac{60}{d}$$
2. Kalikan silang:
   $$d = 60\sqrt{3}\text{ meter} \approx 60 \times 1{,}732 = \mathbf{103{,}92\text{ meter}}$$
"""
        },
        {
            "tipe": "Variasi 3: Dua Pengamatan Bertahap",
            "soal": "Seorang anak mengamati puncak gedung dengan sudut elevasi $30^\circ$. Setelah ia berjalan mendekati gedung sejauh $50\text{ meter}$, sudut elevasinya menjadi $60^\circ$. Tentukan tinggi gedung dari garis mata anak!",
            "konsep_kunci": "Gunakan perbandingan trigonometri dari dua segitiga atau formula $\\Delta h = \\frac{x}{\\cot 30^\\circ - \\cot 60^\\circ}$.",
            "solusi": r"""
1. Hubungan di titik kedua (jarak $d$):
   $$\tan 60^\circ = \frac{h}{d} \implies h = d\sqrt{3} \implies d = \frac{h}{\sqrt{3}}$$
2. Hubungan di titik pertama (jarak $d + 50$):
   $$\tan 30^\circ = \frac{h}{d + 50} \implies \frac{1}{\sqrt{3}} = \frac{h}{\frac{h}{\sqrt{3}} + 50}$$
3. Sederhanakan:
   $$\frac{h}{\sqrt{3}} + 50 = h\sqrt{3} \implies 50 = h\sqrt{3} - \frac{h}{\sqrt{3}} = \frac{3h - h}{\sqrt{3}} = \frac{2h}{\sqrt{3}}$$
4. Selesaikan untuk $h$:
   $$2h = 50\sqrt{3} \implies h = \mathbf{25\sqrt{3}\text{ meter}} \approx 43{,}3\text{ meter}$$
"""
        }
    ]
}

# Write files
for sub in [sub_4_1, sub_4_2, sub_4_3]:
    sub_id = sub["sub_chapter_id"].replace(".", "_")
    path = f"data/modules/subchapter_{sub_id}.json"
    with open(path, "w", encoding="utf-8") as f:
        json.dump(sub, f, ensure_ascii=False, indent=2)
    print(f"Generated {path}")

print("Module 4 upgrade complete!")
