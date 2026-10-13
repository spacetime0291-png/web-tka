import json

sub_2_1 = {
    "sub_chapter_id": "2.1",
    "module_id": "MOD-2",
    "module_name": "Aljabar",
    "title": "SPLDV & SPLTV",
    "teori_definisi": r"""
### 1. Definisi Formal SPLDV & SPLTV
Sistem Persamaan Linear adalah kumpulan dua atau lebih persamaan linear yang memuat variabel-variabel yang sama dan saling terkait untuk diselesaikan secara simultan.

1. **Sistem Persamaan Linear Dua Variabel (SPLDV):**
   Bentuk umum SPLDV dengan variabel $x$ dan $y$:
   $$\begin{cases} a_1 x + b_1 y = c_1 \\ a_2 x + b_2 y = c_2 \end{cases}$$
   Di mana $a_1, b_1, c_1, a_2, b_2, c_2 \in \mathbb{R}$ dan $a_1^2 + b_1^2 \neq 0$, $a_2^2 + b_2^2 \neq 0$.

2. **Sistem Persamaan Linear Tiga Variabel (SPLTV):**
   Sesuai batasan matriks asesmen kurikulum, banyak variabel maksimal yang digunakan adalah **tiga variabel** ($x, y, z$):
   $$\begin{cases} a_1 x + b_1 y + c_1 z = d_1 \\ a_2 x + b_2 y + c_2 z = d_2 \\ a_3 x + b_3 y + c_3 z = d_3 \end{cases}$$
   Di mana koefisien dan konstanta adalah bilangan real.

### 2. Metode Penyelesaian
1. **Metode Substitusi:** Menyatakan satu variabel dalam variabel lainnya, kemudian menggantikannya ke persamaan lain.
2. **Metode Eliminasi:** Menghilangkan salah satu variabel dengan menyamakan koefisiennya melalui operasi perkalian skalar dan penjumlahan/pengurangan.
3. **Metode Campuran (Eliminasi-Substitusi):** Mengeliminasi variabel terlebih dahulu untuk mereduksi sistem, kemudian mensubstitusikan nilai yang diperoleh (metode paling efisien dan umum digunakan).
4. **Metode Determinan (Aturan Cramer):**
   $$x = \frac{D_x}{D}, \quad y = \frac{D_y}{D}, \quad z = \frac{D_z}{D}$$
   Dengan $D \neq 0$ adalah determinan matriks koefisien utama.
""",
    "rumus_katex": r"""
### Formulasi Matematika & Aturan Cramer
1. **Determinan Matriks Koefisien SPLDV ($2 \times 2$):**
   $$D = \begin{vmatrix} a_1 & b_1 \\ a_2 & b_2 \end{vmatrix} = a_1 b_2 - a_2 b_1$$
   $$D_x = \begin{vmatrix} c_1 & b_1 \\ c_2 & b_2 \end{vmatrix} = c_1 b_2 - c_2 b_1, \quad D_y = \begin{vmatrix} a_1 & c_1 \\ a_2 & c_2 \end{vmatrix} = a_1 c_2 - a_2 c_1$$
   $$x = \frac{D_x}{D}, \quad y = \frac{D_y}{D} \quad (\text{syarat } D \neq 0)$$

2. **Determinan Matriks Koefisien SPLTV ($3 \times 3$ - Aturan Sarrus):**
   $$D = \begin{vmatrix} a_1 & b_1 & c_1 \\ a_2 & b_2 & c_2 \\ a_3 & b_3 & c_3 \end{vmatrix}$$
   $$D = (a_1 b_2 c_3 + b_1 c_2 a_3 + c_1 a_2 b_3) - (a_3 b_2 c_1 + b_3 c_2 a_1 + c_3 a_2 b_1)$$
""",
    "karakteristik_batasan": r"""
### Karakteristik Jenis Himpunan Penyelesaian & Batasan Matriks
Sesuai standar kurikulum, analisis jenis solusi SPL:
1. **Konsisten & Independen (Tepat Satu Solusi):**
   - Geometris: Dua garis berpotongan di satu titik (SPLDV) atau tiga bidang berpotongan di tepat satu titik (SPLTV).
   - Syarat aljabar: Determinan utama $D \neq 0$. Pada SPLDV: $\frac{a_1}{a_2} \neq \frac{b_1}{b_2}$.
2. **Konsisten & Dependen (Tak Hingga Banyak Solusi):**
   - Geometris: Garis berimpit atau bidang berpotongan sepanjang sebuah garis persekutuan.
   - Syarat aljabar: $D = 0$ dan $D_x = D_y = D_z = 0$. Pada SPLDV: $\frac{a_1}{a_2} = \frac{b_1}{b_2} = \frac{c_1}{c_2}$.
3. **Inkonsisten (Tidak Memiliki Solusi):**
   - Geometris: Garis sejajar tidak berpotongan atau bidang sejajar/membentuk prisma segitiga tanpa titik temu bersama.
   - Syarat aljabar: $D = 0$ tetapi minimal satu di antara $D_x, D_y, D_z \neq 0$. Pada SPLDV: $\frac{a_1}{a_2} = \frac{b_1}{b_2} \neq \frac{c_1}{c_2}$.
4. **Batasan Matriks Kurikulum:**
   Variabel pemodelan dibatasi strictly maksimal 3 variabel ($x, y, z$).
""",
    "contoh_kontekstual": r"""
### Contoh Kasus Riil & Kontekstual
**Kasus 1: Paket Perlengkapan Sekolah 3 Variabel (Tipe Soal No. 22)**
Sebuah koperasi sekolah menyediakan 3 paket alat tulis:
- Paket A: 2 buku, 1 pulpen, 1 penggaris seharga Rp17.000,00
- Paket B: 1 buku, 2 pulpen, 1 penggaris seharga Rp16.000,00
- Paket C: 3 buku, 2 pulpen, 2 penggaris seharga Rp29.000,00
Berapakah harga satuan dari 1 buku tulis?

*Penyelesaian Langkah Demi Langkah:*
1. Modelkan ke dalam SPLTV (misal buku $= x$, pulpen $= y$, penggaris $= z$):
   $$\begin{cases} 2x + y + z = 17.000 & \dots (1) \\ x + 2y + z = 16.000 & \dots (2) \\ 3x + 2y + 2z = 29.000 & \dots (3) \end{cases}$$
2. Eliminasi variabel $z$ dari persamaan (1) dan (2):
   $$(2x + y + z) - (x + 2y + z) = 17.000 - 16.000 \implies x - y = 1.000 \implies y = x - 1.000$$
3. Eliminasi variabel $z$ antara persamaan (1) dan (3):
   Kalikan persamaan (1) dengan 2: $4x + 2y + 2z = 34.000$.
   Kurangkan dengan persamaan (3):
   $$(4x + 2y + 2z) - (3x + 2y + 2z) = 34.000 - 29.000 \implies x = 5.000$$
Jadi, harga satuan 1 buah buku tulis adalah $\mathbf{Rp5.000,00}$ (Sesuai Kunci B Soal No. 22).
""",
    "trik_cepat": r"""
### Trik Analisis Cepat (Fast Analysis Tricks)
1. **Trik Manipulasi Koefisien Simetris:**
   Jika pada SPLTV koefisien variabel saling bertukar atau memiliki kombinasi linier mudah (seperti persamaan (1) dikali 2 langsung menghasilkan koefisien $2y + 2z$ yang identik dengan persamaan (3)), langsung kurangkan persamaan gabungan tersebut tanpa perlu mencari nilai semua variabel satu per satu!
2. **Deteksi Solusi Unik vs Tak Hingga:**
   Cukup periksa perbandingan rasio koefisien. Jika perbandingan koefisien variabel sama persis tetapi konstantanya berbeda, sistem dipastikan **inkonsisten (tidak punya solusi)** tanpa perlu dihitung lebih lanjut.
"""
}

with open("data/modules/subchapter_2_1.json", "w", encoding="utf-8") as f:
    json.dump(sub_2_1, f, ensure_ascii=False, indent=2)

print("Generated subchapter_2_1.json successfully.")
