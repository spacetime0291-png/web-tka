import json

sub_3_6 = {
    "sub_chapter_id": "3.6",
    "module_id": "MOD-3",
    "module_name": "Geometri & Pengukuran",
    "title": "Transformasi Geometri Titik & Dilatasi",
    "teori_definisi": r"""
### 1. Definisi Formal Transformasi Geometri
Transformasi geometri adalah pemetaan satu-satu (*bijeksi*) dari himpunan titik-titik pada bidang Kartesius $\mathbb{R}^2$ ke himpunan titik-titik pada bidang yang sama.
Empat transformasi dasar:
1. **Translasi (Pergeseran):** Memindahkan semua titik sejauh jarak dan arah tertentu yang dinyatakan oleh vektor translasi $T = \begin{pmatrix} a \\ b \end{pmatrix}$. Merupakan transformasi isometri (tidak mengubah bentuk dan ukuran).
2. **Refleksi (Pencerminan):** Memetakan setiap titik terhadap garis cermin sedemikian sehingga garis cermin merupakan garis bagi tegak lurus dari ruas garis yang menghubungkan titik asal dengan bayangannya.
3. **Rotasi (Perputaran):** Memutar setiap titik sebesar sudut orientasi $\theta$ terhadap suatu titik pusat tertentu. Arah berlawanan jarum jam bernilai positif ($+\theta$), sedangkan searah jarum jam bernilai negatif ($-\theta$).
4. **Dilatasi (Perbesaran/Pengecilan Skala):** Transformasi non-isometri yang mengubah ukuran suatu objek dengan faktor skala $k$ terhadap titik pusat dilatasi tertentu, tanpa mengubah proporsi bentuk geometrisnya.

### 2. Konsep Dilatasi Skala Proporsional
Jika titik $P(x, y)$ didilatasi terhadap titik pusat $O(0, 0)$ dengan faktor skala $k$, maka koordinat bayangannya adalah:
$$P'(x', y') = (kx, ky)$$
- Jika $|k| > 1$: Objek mengalami **perbesaran (magnification)**.
- Jika $0 < |k| < 1$: Objek mengalami **pengecilan (reduction)**.
- Jika $k > 0$: Bayangan terletak sepihak dengan objek terhadap pusat dilatasi.
- Jika $k < 0$: Bayangan terletak berseberangan dengan objek dan terbalik.
""",
    "rumus_katex": r"""
### Formulasi Lengkap Transformasi Geometri
1. **Translasi:**
   $$\begin{pmatrix} x' \\ y' \end{pmatrix} = \begin{pmatrix} x \\ y \end{pmatrix} + \begin{pmatrix} a \\ b \end{pmatrix} = \begin{pmatrix} x + a \\ y + b \end{pmatrix}$$

2. **Refleksi (Pencerminan Titik):**
   - Terhadap Sumbu-$X$: $(x, -y)$
   - Terhadap Sumbu-$Y$: $(-x, y)$
   - Terhadap Garis $y = x$: $(y, x)$
   - Terhadap Garis $y = -x$: $(-y, -x)$
   - Terhadap Garis $x = h$: $(2h - x, y)$
   - Terhadap Garis $y = k$: $(x, 2k - y)$
   - Terhadap Titik Pusat $(0, 0)$: $(-x, -y)$

3. **Rotasi Terhadap Pusat $O(0, 0)$ Sudut $\theta$:**
   $$\begin{pmatrix} x' \\ y' \end{pmatrix} = \begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix}$$

4. **Dilatasi Terhadap Pusat $O(0, 0)$ dengan Faktor Skala $k$:**
   $$\begin{pmatrix} x' \\ y' \end{pmatrix} = \begin{pmatrix} k & 0 \\ 0 & k \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} kx \\ ky \end{pmatrix}$$
   $$\text{Ukuran Bayangan} = k \times \text{Ukuran Objek Asli}$$
   $$\text{Luas Bayangan} = k^2 \times \text{Luas Asli}$$
""",
    "karakteristik_batasan": r"""
### Karakteristik & Batasan Kasus
1. **Pelestarian Proporsi (Similarity Invariance):**
   Dilatasi mempertahankan perbandingan ukuran (rasio panjang terhadap lebar tetap konstan $1 : 1$, $16 : 9$, dsb.). Sudut-sudut bangun tidak mengalami perubahan.
2. **Keterbatasan Layar Proyektor (Screen Clipping):**
   Agar seluruh bayangan hasil proyeksi tertampil utuh di layar tanpa terpotong (*no clipping*), dimensi bayangan wajib lebih kecil atau sama dengan dimensi fisik layar:
   $$\text{Lebar Bayangan} \le \text{Lebar Layar} \quad \text{dan} \quad \text{Tinggi Bayangan} \le \text{Tinggi Layar}$$
""",
    "contoh_kontekstual": r"""
### Contoh Kasus Riil & Kontekstual
**Kasus 1: Tampilan Gambar Desain Gedung pada Layar Proyektor (Tipe Soal No. 45)**
Pak Andi mempresentasikan desain gedung berukuran $60\text{ cm} \times 60\text{ cm}$ menggunakan proyektor ke layar berukuran $2{,}4\text{ m} \times 1{,}8\text{ m}$ (orientasi horizontal).
Proyektor diletakkan dengan jarak $3\text{ meter}$ dari layar dengan rumus faktor skala pembesaran:
$$k = 0{,}6 \\times \\text{jarak (m)}$$
Analisis pernyataan:
A. Perbandingan ukuran tampilan desain di layar adalah $1 : 1$.
B. Ukuran panjang dan lebar tampilan desain pada layar lebih dari 1 meter.
C. Terdapat bagian gambar asli desain yang terpotong dalam tampilan pada layar.

*Penyelesaian Langkah Demi Langkah:*
1. Hitung faktor skala dilatasi:
   $$k = 0{,}6 \times 3 = 1{,}8$$
2. Hitung dimensi tampilan di layar:
   $$\text{Panjang} = 60\text{ cm} \times 1{,}8 = 108\text{ cm} = 1{,}08\text{ meter}$$
   $$\text{Lebar} = 60\text{ cm} \times 1{,}8 = 108\text{ cm} = 1{,}08\text{ meter}$$
3. Evaluasi Pernyataan:
   - Pernyataan A: Rasio panjang dan lebar di layar adalah $108 : 108 = 1 : 1$. *(BENAR)*.
   - Pernyataan B: Ukuran $1{,}08\text{ m} > 1\text{ meter}$. *(BENAR)*.
   - Pernyataan C: Dimensi layar adalah lebar $2{,}4\text{ m}$ dan tinggi $1{,}8\text{ m}$.
     Karena $1{,}08\text{ m} \le 2{,}4\text{ m}$ dan $1{,}08\text{ m} \le 1{,}8\text{ m}$, tampilan muat seluruhnya di layar tanpa ada bagian yang terpotong. *(SALAH)*.
Kunci: **A. Benar, B. Benar, C. Salah** (Sesuai Kunci Soal No. 45).
""",
    "trik_cepat": r"""
### Trik Analisis Cepat (Fast Analysis Tricks)
1. **Trik Pemangkatan Luas Dilatasi:**
   Jika panjang sisi diperbesar $k$ kali, luas bangun selalu diperbesar $k^2$ kali lipat.
   Contoh: Skala $k = 1{,}8 \implies$ Luas di layar $= 1{,}8^2 = 3{,}24$ kali luas gambar asli.
2. **Trik Rotasi $90^\circ, 180^\circ, 270^\circ$:**
   - Rotasi $+90^\circ$ (lawan arah jarum jam): $(x, y) \to (-y, x)$
   - Rotasi $180^\circ$: $(x, y) \to (-x, -y)$
   - Rotasi $+270^\circ$ (atau $-90^\circ$): $(x, y) \to (y, -x)$
"""
}

with open("data/modules/subchapter_3_6.json", "w", encoding="utf-8") as f:
    json.dump(sub_3_6, f, ensure_ascii=False, indent=2)

print("Generated subchapter_3_6.json successfully.")
