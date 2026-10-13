import json

sub_3_4 = {
    "sub_chapter_id": "3.4",
    "module_id": "MOD-3",
    "module_name": "Geometri & Pengukuran",
    "title": "Keliling & Luas Bangun Datar",
    "teori_definisi": r"""
### 1. Definisi Keliling & Luas Bangun Datar
- **Keliling ($K$):** Total panjang seluruh segmen garis tepi/batas luar yang mengelilingi suatu bangun datar tertutup dua dimensi.
- **Luas ($L$):** Besaran ukuran area interior yang dilingkupi oleh batas bangun datar tersebut, dinyatakan dalam satuan kuadrat ($\text{m}^2, \text{cm}^2$).

### 2. Klasifikasi Poligon & Bangun Datar
1. **Segitiga:** Dibatasi 3 sisi, luas $L = \frac{1}{2} \times a \times t$ atau menggunakan Rumus Heron: $L = \sqrt{s(s-a)(s-b)(s-c)}$ dengan semi-perimeter $s = \frac{a+b+c}{2}$.
2. **Segiempat:**
   - **Persegi:** $K = 4s$, $L = s^2$.
   - **Persegi Panjang:** $K = 2(p + l)$, $L = p \times l$.
   - **Jajar Genjang:** $K = 2(a + b)$, $L = a \times t$.
   - **Belah Ketupat & Layang-layang:** $L = \frac{1}{2} \times d_1 \times d_2$.
   - **Trapesium (Sama Kaki & Siku-siku):** Dibatasi dua sisi sejajar $a$ dan $b$. $L = \frac{1}{2}(a + b) \times t$.
3. **Lingkaran:** Dibatasi kurva tertutup dengan jarak konstan $r$ dari titik pusat.
   - Keliling: $K = 2\pi r = \pi d$.
   - Luas: $L = \pi r^2 = \frac{1}{4} \pi d^2$.
   - Panjang Busur: $b = \frac{\theta}{360^\circ} \times 2\pi r$.
   - Luas Juring: $L_j = \frac{\theta}{360^\circ} \times \pi r^2$.
   - Luas Tembereng: $L_t = L_{\text{juring}} - L_{\triangle}$.

### 3. Konsep Kecukupan Data (Data Sufficiency) pada Geometri
Dalam soal bernalar tinggi (seperti format UTBK/SNBT), kita diminta mengevaluasi apakah informasi tambahan yang diberikan dalam pernyataan (1) dan/atau (2) cukup secara logis untuk menjawab pertanyaan secara unik dan definitif (apakah "Ya" secara pasti atau "Tidak" secara pasti).
""",
    "rumus_katex": r"""
### Daftar Formulasi Keliling & Luas
1. **Luas Trapesium:**
   $$L = \frac{a + b}{2} \times t$$
   $$\text{Keliling } K = a + b + s_1 + s_2$$

2. **Luas Daerah Sisa Bangun Komposit:**
   $$L_{\text{sisa}} = L_{\text{luar}} - L_{\text{lubang}}$$
   Contoh: Persegi berlubang lingkaran di tengah:
   $$L_{\text{sisa}} = s^2 - \pi r^2$$

3. **Total Kebutuhan Material Konstruksi Multi-Unit:**
   $$L_{\text{total}} = N_{\text{unit}} \times L_{\text{per-unit}}$$
""",
    "karakteristik_batasan": r"""
### Karakteristik & Batasan Kasus
1. **Trapesium Siku-Siku:**
   Memiliki dua sudut siku-siku berturut-turut. Salah satu sisi tegak bertindak sekaligus sebagai tinggi trapesium ($t = AB$). Sisi miring $CD$ dapat dihitung melalui Teorema Pythagoras:
   $$CD = \sqrt{t^2 + (BC - AD)^2}$$
2. **Kecukupan Data (Data Sufficiency Rules):**
   - Jawaban "Pasti Tidak" sama validnya dengan jawaban "Pasti Ya" dalam menyimpulkan bahwa data **CUKUP**.
   - Data dikatakan **TIDAK CUKUP** jika nilai keliling bisa lebih dari 25 ATAU kurang dari 25 tergantung parameter yang belum ditentukan.
""",
    "contoh_kontekstual": r"""
### Contoh Kasus Riil & Kontekstual
**Kasus 1: Pelat Logam Berlubang Lingkaran (Tipe Soal No. 23)**
Sebuah pelat logam berbentuk persegi dengan sisi 28 cm dilubangi di tengahnya dengan lubang berbentuk lingkaran dengan diameter 14 cm. Berapakah sisa luas permukaan pelat logam tersebut? (gunakan $\pi = \frac{22}{7}$).
*Penyelesaian Langkah Demi Langkah:*
1. Hitung luas persegi utuh:
   $$L_{\text{persegi}} = s^2 = 28^2 = 784\text{ cm}^2$$
2. Hitung luas lingkaran lubang ($r = \frac{14}{2} = 7\text{ cm}$):
   $$L_{\text{lingkaran}} = \pi r^2 = \frac{22}{7} \times 7^2 = 22 \times 7 = 154\text{ cm}^2$$
3. Hitung luas sisa pelat:
   $$L_{\text{sisa}} = 784 - 154 = 630\text{ cm}^2$$
Hasil: **630 cm²** (Sesuai Kunci D Soal No. 23).

**Kasus 2: Kebutuhan Kaca Jendela Perumahan 20 Rumah (Tipe Soal No. 38)**
Pengembang merencanakan pembangunan 20 rumah komplek di mana tiap rumah menggunakan 1 jendela kaca berukuran luas 11 m². Total kebutuhan kaca adalah:
$$L_{\text{total}} = 20 \times 11\text{ m}^2 = 220\text{ m}^2$$
(Sesuai Kunci C Soal No. 38).

**Kasus 3: Data Sufficiency Keliling Trapesium (Tipe Soal No. 40)**
Pada trapesium siku-siku $ABCD$ dengan $AB = 3$ dan $AD \le BC$. Apakah keliling $> 25$?
- Informasi (1): Luas $= 24 \implies AD + BC = 16$. Keliling bervariasi antara $22$ dan $35{,}28$ (Bisa $\le 25$ atau $> 25$) $\implies$ Tidak cukup!
- Informasi (2): $BC = 10, CD = 5$. Tinggi $AB = 3 \implies \Delta x = \sqrt{5^2 - 3^2} = 4 \implies AD = 10 - 4 = 6$.
  Keliling $= 3 + 10 + 5 + 6 = 24$.
  Apakah keliling $> 25$? Jawabannya pasti: **TIDAK**.
  Maka Pernyataan (2) SAJA cukup!
(Sesuai Kunci B Soal No. 40).
""",
    "trik_cepat": r"""
### Trik Analisis Cepat (Fast Analysis Tricks)
1. **Trik Tripel Pythagoras pada Trapesium Siku-Siku:**
   Selisih sisi sejajar ($\Delta x$), tinggi trapesium ($t$), dan sisi miring ($s_m$) selalu membentuk tripel Pythagoras:
   $$\Delta x^2 + t^2 = s_m^2$$
   Jika $t = 3$ dan $s_m = 5$, maka langsung selisih alas $\Delta x = 4$ tanpa perlu kalkulasi panjang!
2. **Trik Luas Persegi Dikurangi Lingkaran Maksimal:**
   Untuk lingkaran yang menyinggung sisi persegi berukuran $s$:
   $$L_{\text{sisa}} \approx \frac{3}{14} s^2 \quad (\text{atau } 0{,}215 s^2)$$
"""
}

with open("data/modules/subchapter_3_4.json", "w", encoding="utf-8") as f:
    json.dump(sub_3_4, f, ensure_ascii=False, indent=2)

print("Generated subchapter_3_4.json successfully.")
