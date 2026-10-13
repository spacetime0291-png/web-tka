import json

sub_2_3 = {
    "sub_chapter_id": "2.3",
    "module_id": "MOD-2",
    "module_name": "Aljabar",
    "title": "Fungsi Linear, Kuadrat & Rasional",
    "teori_definisi": r"""
### 1. Konsep Relasi, Fungsi, Domain, Kodomain & Range
Fungsi $f$ dari himpunan $A$ ke himpunan $B$ ($f: A \to B$) adalah aturan pengait yang memasangkan setiap elemen $x \in A$ dengan **tepat satu** elemen $y \in B$.
- **Domain ($D_f$):** Daerah asal alami, yaitu himpunan semua nilai input $x$ yang membuat fungsi bernilai real ($f(x) \in \mathbb{R}$).
- **Kodomain ($K_f$):** Himpunan target tempat nilai-nilai fungsi dipetakan.
- **Range ($R_f$):** Daerah hasil aktual, yaitu himpunan seluruh bayangan/output $\{y \in B \mid y = f(x), x \in D_f\}$.

### 2. Tiga Keluarga Fungsi Utama
1. **Fungsi Linear:** $f(x) = mx + c$. Grafiknya berupa garis lurus dengan gradien/kemiringan $m = \frac{\Delta y}{\Delta x}$.
   - Domain: $D_f = \mathbb{R}$, Range: $R_f = \mathbb{R}$ (untuk $m \neq 0$).
2. **Fungsi Kuadrat:** $f(x) = ax^2 + bx + c$ ($a \neq 0$). Grafiknya berupa parabola simetris.
   - Jika $a > 0$, parabola terbuka ke atas (memiliki titik balik minimum).
   - Jika $a < 0$, parabola terbuka ke bawah (memiliki titik balik maksimum).
   - Sumbu simetri: $x = -\frac{b}{2a}$, Nilai ekstrem: $y = -\frac{D}{4a} = -\frac{b^2 - 4ac}{4a}$.
3. **Fungsi Rasional (Pecahan Aljabar):** $f(x) = \frac{P(x)}{Q(x)}$ dengan $Q(x) \neq 0$.
   - Bentuk pecahan linear: $f(x) = \frac{ax + b}{cx + d}$ ($c \neq 0, ad - bc \neq 0$).
   - Memiliki **Asimtot Tegak** di pembuat nol penyebut: $x = -\frac{d}{c}$.
   - Memiliki **Asimtot Datar** pada limit mendekati tak hingga: $y = \frac{a}{c}$.
   - Domain: $D_f = \{x \in \mathbb{R} \mid x \neq -\frac{d}{c}\}$, Range: $R_f = \{y \in \mathbb{R} \mid y \neq \frac{a}{c}\}$.
""",
    "rumus_katex": r"""
### Formulasi Lengkap Fungsi Kuadrat & Rasional
1. **Karakteristik Diskriminan Parabola ($D = b^2 - 4ac$):**
   - $D > 0$: Memotong sumbu-$X$ di dua titik berlainan real.
   - $D = 0$: Menyinggung sumbu-$X$ di satu titik ($x = -\frac{b}{2a}$).
   - $D < 0$: Tidak memotong maupun menyinggung sumbu-$X$.
   - **Definit Positif:** $a > 0$ dan $D < 0$ $\implies f(x) > 0$ untuk setiap $x \in \mathbb{R}$.
   - **Definit Negatif:** $a < 0$ dan $D < 0$ $\implies f(x) < 0$ untuk setiap $x \in \mathbb{R}$.

2. **Titik Puncak Parabola (Verteks):**
   $$V(x_p, y_p) = \left( -\frac{b}{2a}, \; f\left(-\frac{b}{2a}\right) \right) = \left( -\frac{b}{2a}, \; -\frac{b^2 - 4ac}{4a} \right)$$
   - Jika $a > 0 \implies R_f = [y_p, \infty)$ (rentang nilai $\ge y_p$).
   - Jika $a < 0 \implies R_f = (-\infty, y_p]$ (rentang nilai $\le y_p$).

3. **Asimtot Fungsi Rasional Pecahan Linear:**
   $$f(x) = \frac{ax + b}{cx + d}$$
   $$\text{Asimtot Tegak: } x = -\frac{d}{c}$$
   $$\text{Asimtot Datar: } y = \lim_{x \to \pm\infty} \frac{ax + b}{cx + d} = \frac{a}{c}$$
""",
    "karakteristik_batasan": r"""
### Karakteristik & Batasan Kasus
1. **Syarat Alami Domain:**
   - Bentuk pecahan $\frac{u(x)}{v(x)} \implies v(x) \neq 0$.
   - Bentuk akar genap $\sqrt{u(x)} \implies u(x) \ge 0$.
   - Bentuk akar di penyebut $\frac{1}{\sqrt{u(x)}} \implies u(x) > 0$.
2. **Karakteristik Kuadran Koordinat Kartesius:**
   - Kuadran I: $x > 0, y > 0$
   - Kuadran II: $x < 0, y > 0$
   - Kuadran III: $x < 0, y < 0$
   - Kuadran IV: $x > 0, y < 0$
   *(Perhatikan pengujian apakah grafik melalui kuadran III seperti pada Soal No. 43)*.
""",
    "contoh_kontekstual": r"""
### Contoh Kasus Riil & Kontekstual
**Kasus 1: Analisis Grafik Parabola Lanjut (Tipe Soal No. 43)**
Diberikan fungsi kuadrat:
$$f(x) = 4(x^2 - 8x + 12)$$
Analisis kebenaran pernyataan: (A) grafik terbuka ke atas, (B) grafik memotong garis $y = -18$, (C) grafik tidak melalui kuadran tiga!

*Penyelesaian Langkah Demi Langkah:*
1. Tuliskan dalam bentuk standar:
   $$f(x) = 4x^2 - 32x + 48$$
   Koefisien: $a = 4, b = -32, c = 48$.
2. Uji Pernyataan A:
   Karena $a = 4 > 0$, parabola terbuka ke atas. *(Pernyataan A BENAR)*.
3. Uji Pernyataan B:
   Tentukan nilai minimum fungsi:
   $$x_p = -\frac{b}{2a} = -\frac{-32}{2(4)} = 4$$
   $$y_{\min} = f(4) = 4(4^2 - 8(4) + 12) = 4(16 - 32 + 12) = 4(-4) = -16$$
   Karena nilai terendah kurva adalah $-16$, kurva selalu berada pada atau di atas garis $y = -16$. Kurva tidak pernah mencapai ordinat $y = -18$, sehingga tidak memotong garis $y = -18$. *(Pernyataan B SALAH)*.
4. Uji Pernyataan C:
   Kuadran tiga mensyaratkan $x < 0$ dan $y < 0$.
   Untuk setiap $x < 0$: $x^2 > 0$ dan $-8x > 0$, sehingga $x^2 - 8x + 12 > 12 > 0$.
   Akibatnya untuk setiap $x < 0$, nilai $f(x) > 0$ (berada di kuadran dua). Tidak ada titik dengan $x < 0$ dan $y < 0$.
   Jadi grafik fungsi sama sekali tidak melalui kuadran tiga. *(Pernyataan C BENAR)*.
Hasil Evaluasi: **A. Benar, B. Salah, C. Benar** (Sesuai Kunci Soal No. 43).

**Kasus 2: Ketinggian Peluru Vertikal (Tipe Soal No. 13)**
Tinggi peluru setelah $t$ detik: $h(t) = 40t - 5t^2$.
Tentukan interval waktu peluru berada pada ketinggian minimal 60 meter!
*Penyelesaian:*
$$40t - 5t^2 \ge 60 \implies 5t^2 - 40t + 60 \le 0 \implies t^2 - 8t + 12 \le 0 \implies (t - 2)(t - 6) \le 0$$
Interval: $2 \le t \le 6$ detik. Titik 2 detik, 3 detik, dan 4 detik semuanya memenuhi syarat.
""",
    "trik_cepat": r"""
### Trik Analisis Cepat (Fast Analysis Tricks)
1. **Trik Uji Kuadran Parabola Tanpa Menggambar:**
   Untuk mengetahui apakah kurva $f(x) = ax^2 + bx + c$ menyentuh kuadran III ($x < 0, y < 0$):
   Cukup periksa nilai $c = f(0)$ dan sumbu simetri $x_p$. Jika $a > 0$, $c > 0$, dan $x_p > 0$, maka untuk semua $x \le 0$, fungsi bernilai monoton naik ke arah kiri sehingga $y > 0$ selalu $\implies$ **mustahil masuk kuadran III**!
2. **Trik Nilai Puncak Cepat:**
   Turunkan fungsi sekali untuk mencari absis puncak: $f'(x) = 2ax + b = 0 \implies x_p = -\frac{b}{2a}$, lalu substitusikan kembali ke fungsi awal.
"""
}

with open("data/modules/subchapter_2_3.json", "w", encoding="utf-8") as f:
    json.dump(sub_2_3, f, ensure_ascii=False, indent=2)

print("Generated subchapter_2_3.json successfully.")
