import json

sub_2_4 = {
    "sub_chapter_id": "2.4",
    "module_id": "MOD-2",
    "module_name": "Aljabar",
    "title": "Komposisi & Invers Fungsi",
    "teori_definisi": r"""
### 1. Definisi Formal Komposisi Fungsi
Jika $f: A \to B$ dan $g: B \to C$ adalah dua fungsi, maka **komposisi fungsi** $g \circ f$ (dibaca: $g$ bundaran $f$) adalah fungsi yang memetakan elemen dari himpunan $A$ langsung ke himpunan $C$, didefinisikan sebagai:
$$(g \circ f)(x) = g(f(x)), \quad \forall x \in A$$
**Syarat Keberadaan Komposisi:**
Fungsi komposisi $(g \circ f)$ terdefinisi jika dan hanya jika irisan antara daerah hasil $f$ dengan daerah asal $g$ bukan merupakan himpunan kosong:
$$R_f \cap D_g \neq \emptyset$$

### 2. Sifat-Sifat Komposisi Fungsi
1. **Tidak Komutatif:** Secara umum, $(f \circ g)(x) \neq (g \circ f)(x)$.
2. **Asosiatif:** $(f \circ (g \circ h))(x) = ((f \circ g) \circ h)(x)$.
3. **Elemen Identitas:** Jika $I(x) = x$, maka $(f \circ I)(x) = (I \circ f)(x) = f(x)$.

### 3. Definisi Formal Fungsi Invers
Jika fungsi $f: A \to B$ merupakan **fungsi bijektif** (yaitu injektif/satu-satu sekaligus surjektif/pada), maka terdapat fungsi invers $f^{-1}: B \to A$ sedemikian sehingga:
$$f(x) = y \iff f^{-1}(y) = x$$
Hubungan identitas invers:
$$(f \circ f^{-1})(x) = x \quad \text{dan} \quad (f^{-1} \circ f)(x) = x$$
Sifat invers fungsi komposisi (aturan pembalikan urutan):
$$(f \circ g)^{-1}(x) = (g^{-1} \circ f^{-1})(x)$$
$$(g \circ f)^{-1}(x) = (f^{-1} \circ g^{-1})(x)$$
""",
    "rumus_katex": r"""
### Rumus Lengkap Invers Fungsi Aljabar
1. **Invers Fungsi Linear:**
   $$f(x) = ax + b \implies f^{-1}(x) = \frac{x - b}{a}, \quad a \neq 0$$

2. **Invers Fungsi Pecahan Rasional Linear (Trik Pertukaran Diagonal):**
   $$f(x) = \frac{ax + b}{cx + d}, \quad x \neq -\frac{d}{c}$$
   $$f^{-1}(x) = \frac{-dx + b}{cx - a}, \quad x \neq \frac{a}{c}$$

3. **Invers Fungsi Kuadrat (dengan pembatasan domain):**
   $$f(x) = a(x - x_p)^2 + y_p \implies f^{-1}(x) = x_p \pm \sqrt{\frac{x - y_p}{a}}$$
   *(Tanda $+$ atau $-$ dipilih berdasarkan domain awal yang dibatasi)*.

4. **Menentukan Fungsi Parsial dari Komposisi:**
   - Jika diketahui $(f \circ g)(x)$ dan $g(x)$, maka $f(x)$ dicari dengan pemisalan $u = g(x) \implies x = g^{-1}(u)$.
   - Jika diketahui $(f \circ g)(x)$ dan $f(x)$, gunakan substitusi langsung ke bentuk aljabar $f$.
""",
    "karakteristik_batasan": r"""
### Karakteristik & Batasan Kasus
1. **Syarat Bijektif untuk Memiliki Invers:**
   Fungsi kuadrat $f(x) = x^2$ pada seluruh domain $\mathbb{R}$ **tidak memiliki fungsi invers** karena bukan fungsi satu-satu (misal $f(-2) = f(2) = 4$). Agar memiliki invers, domainnya harus dibatasi, misalnya $D_f = [0, \infty)$ sehingga $f^{-1}(x) = \sqrt{x}$.
2. **Karakteristik Grafis Simetri Garis $y = x$:**
   Grafik dari $y = f^{-1}(x)$ merupakan hasil pencerminan (refleksi) grafik $y = f(x)$ terhadap garis lurus $y = x$.
3. **Peringatan Notasi Invers vs Pangkat Minus Satu:**
   $$f^{-1}(x) \neq \frac{1}{f(x)} \quad (\text{Fungsi Invers } \neq \text{ Invers Perkalian/Resiprokal})$$
""",
    "contoh_kontekstual": r"""
### Contoh Kasus Riil & Kontekstual
**Kasus 1: Perhitungan Pemakaian Listrik Apartemen (Tipe Soal No. 44)**
Tagihan listrik bulanan apartemen dihitung dengan fungsi linear biaya:
$$f(x) = 1.350x + 25.000$$
Di mana $f(x)$ adalah total tagihan (dalam rupiah) dan $x$ adalah jumlah pemakaian energi listrik (dalam kWh).
Andi menerima tagihan sebesar Rp160.000,00 dan menyadari bahwa penggunaan bulan ini lebih besar daripada penggunaan biasanya ($x_{\text{bulan ini}} > x_{\text{biasa}}$).
Berapa kWh penggunaan listrik yang mungkin pada kondisi biasanya?

*Penyelesaian Langkah Demi Langkah:*
1. Susun fungsi invers untuk menentukan pemakaian listrik dari besaran tagihan:
   $$y = 1.350x + 25.000 \implies 1.350x = y - 25.000 \implies x = f^{-1}(y) = \frac{y - 25.000}{1.350}$$
2. Substitusi nilai tagihan bulan ini $y = 160.000$:
   $$x_{\text{bulan ini}} = \frac{160.000 - 25.000}{1.350} = \frac{135.000}{1.350} = 100\text{ kWh}$$
3. Evaluasi Kondisi Penggunaan Biasanya:
   Karena penggunaan bulan ini (100 kWh) lebih besar dari biasanya, maka pemakaian biasanya harus memenuhi:
   $$x_{\text{biasa}} < 100\text{ kWh}$$
   Dari opsi yang tersedia (85 kWh, 90 kWh, 100 kWh, 120 kWh, 137 kWh), nilai yang memenuhi adalah **85 kWh** dan **90 kWh** (Sesuai Kunci A dan B Soal No. 44).

**Kasus 2: Komposisi Fungsi Aljabar Polinomial (Tipe Soal No. 7)**
Diketahui $f(x) = 2x - 3$ dan $g(x) = x^2 + 2x - 1$.
$$(g \circ f)(x) = g(2x - 3) = (2x - 3)^2 + 2(2x - 3) - 1 = (4x^2 - 12x + 9) + (4x - 6) - 1 = 4x^2 - 8x + 2$$
""",
    "trik_cepat": r"""
### Trik Analisis Cepat (Fast Analysis Tricks)
1. **Trik Tukar Diagonal Invers Pecahan Linear:**
   Untuk fungsi $f(x) = \frac{ax + b}{cx + d}$:
   Tukar posisi elemen diagonal utama ($a$ dan $d$) sambil mengubah kedua tandanya menjadi lawan tanda:
   $$a \leftrightarrow -d \implies f^{-1}(x) = \frac{-dx + b}{cx - a}$$
   Konstanta $b$ dan $c$ posisinya tetap sama persis!
2. **Trik Pembalikan Persamaan Aljabar Kontekstual:**
   Jika sebuah soal menanyakan variabel asal ($x$) saat nilai fungsi ($y$) diketahui, jangan buang waktu menurunkan invers secara simbolis jika angkanya konkrit; cukup langsung selesaikan persamaan aljabar linear $y = ax + b$ untuk mencari $x$.
"""
}

with open("data/modules/subchapter_2_4.json", "w", encoding="utf-8") as f:
    json.dump(sub_2_4, f, ensure_ascii=False, indent=2)

print("Generated subchapter_2_4.json successfully.")
