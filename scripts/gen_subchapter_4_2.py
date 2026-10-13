import json

sub_4_2 = {
    "sub_chapter_id": "4.2",
    "module_id": "MOD-4",
    "module_name": "Trigonometri",
    "title": "Sudut Istimewa & Kuadran II Sudut Tumpul",
    "teori_definisi": r"""
### 1. Nilai Eksak Sudut Istimewa Kuadran I
Sudut-sudut istimewa ($0^\circ, 30^\circ, 45^\circ, 60^\circ, 90^\circ$) diturunkan langsung dari sifat geometris segitiga sama sisi (dibagi dua) dan segitiga siku-siku sama kaki.
Tabel Nilai Eksak:
| Sudut ($\alpha$) | $0^\circ$ | $30^\circ$ | $45^\circ$ | $60^\circ$ | $90^\circ$ |
| :---: | :---: | :---: | :---: | :---: | :---: |
| $\sin\alpha$ | $0$ | $\frac{1}{2}$ | $\frac{1}{2}\sqrt{2}$ | $\frac{1}{2}\sqrt{3}$ | $1$ |
| $\cos\alpha$ | $1$ | $\frac{1}{2}\sqrt{3}$ | $\frac{1}{2}\sqrt{2}$ | $\frac{1}{2}$ | $0$ |
| $\tan\alpha$ | $0$ | $\frac{1}{3}\sqrt{3}$ | $1$ | $\sqrt{3}$ | $\text{Tak Terdefinisi}$ |

### 2. Pembagian Kuadran & Aturan Tanda (ASTC)
Lingkaran satuan dibagi atas empat kuadran berdasarkan besar sudut putar:
- **Kuadran I ($0^\circ \le \alpha \le 90^\circ$):** **Semua (All)** fungsi bertanda **positif** ($+$, $+$, $+$).
- **Kuadran II ($90^\circ < \alpha \le 180^\circ$ - Sudut Tumpul):** **Hanya Sinus** (dan Kosekan) yang bertanda **positif ($+$)**. Kosinus dan Tangen bertanda **negatif ($-$)**.
- **Kuadran III ($180^\circ < \alpha \le 270^\circ$):** **Hanya Tangen** (dan Kotangen) yang bertanda **positif ($+$)**.
- **Kuadran IV ($270^\circ < \alpha \le 360^\circ$):** **Hanya Kosinus** (dan Sekan) yang bertanda **positif ($+$)**.
Jembatan memori: **A-S-T-C** (*All - Sin - Tan - Cos* atau *Semua - Sindikat - Tangan - Kosong*).

### 3. Rumus Sudut Berelasi Kuadran II (Sudut Tumpul)
Untuk sembarang sudut tumpul $\theta \in (90^\circ, 180^\circ]$, sudut tersebut dinyatakan dalam bentuk relasi $(180^\circ - \alpha)$ dengan $\alpha$ merupakan sudut lancip acuan:
$$\sin(180^\circ - \alpha) = +\sin\alpha$$
$$\cos(180^\circ - \alpha) = -\cos\alpha$$
$$\tan(180^\circ - \alpha) = -\tan\alpha$$
""",
    "rumus_katex": r"""
### Tabel Lengkap Nilai Sudut Tumpul Kuadran II
Untuk sudut-sudut tumpul istimewa:

1. **Sudut $120^\circ = 180^\circ - 60^\circ$:**
   $$\sin 120^\circ = +\sin 60^\circ = \frac{1}{2}\sqrt{3}$$
   $$\cos 120^\circ = -\cos 60^\circ = -\frac{1}{2}$$
   $$\tan 120^\circ = -\tan 60^\circ = -\sqrt{3}$$

2. **Sudut $135^\circ = 180^\circ - 45^\circ$:**
   $$\sin 135^\circ = +\sin 45^\circ = \frac{1}{2}\sqrt{2}$$
   $$\cos 135^\circ = -\cos 45^\circ = -\frac{1}{2}\sqrt{2}$$
   $$\tan 135^\circ = -\tan 45^\circ = -1$$

3. **Sudut $150^\circ = 180^\circ - 30^\circ$:**
   $$\sin 150^\circ = +\sin 30^\circ = \frac{1}{2}$$
   $$\cos 150^\circ = -\cos 30^\circ = -\frac{1}{2}\sqrt{3}$$
   $$\tan 150^\circ = -\tan 30^\circ = -\frac{1}{3}\sqrt{3}$$

4. **Sudut $180^\circ$:**
   $$\sin 180^\circ = 0, \quad \cos 180^\circ = -1, \quad \tan 180^\circ = 0$$
""",
    "karakteristik_batasan": r"""
### Karakteristik & Batasan Kasus
1. **Pilihan Acuan Sumbu Horisontal vs Vertikal:**
   - Menggunakan acuan **sumbu-$X$ ($180^\circ \pm \alpha$)**: Nama fungsi **TETAP** ($\sin \to \sin$, $\cos \to \cos$, $\tan \to \tan$). Sangat disarankan untuk mencegah kekeliruan!
   - Menggunakan acuan **sumbu-$Y$ ($90^\circ \pm \alpha$)**: Nama fungsi **BERUBAH** ($\sin \leftrightarrow \cos$, $\tan \leftrightarrow \cot$).
2. **Karakteristik Tanda Negatif Sudut Tumpul:**
   Nilai kosinus dari sudut tumpul pada segitiga sembarang selalu **negatif**. Ini adalah dasar aturan kosinus dalam menghitung sisi segitiga dengan sudut tumpul ($a^2 = b^2 + c^2 - 2bc\cos A$, di mana suku $-2bc\cos A$ akan berubah menjadi bertanda positif $+2bc|\cos A|$).
""",
    "contoh_kontekstual": r"""
### Contoh Kasus Riil & Kontekstual
**Kasus 1: Evaluasi Ekspresi Trigonometri Sudut Tumpul (Tipe Soal No. 19)**
Hitunglah nilai eksak dari operasi trigonometri campuran berikut:
$$E = \sin 150^\circ + \cos 120^\circ - \tan 135^\circ$$

*Penyelesaian Langkah Demi Langkah:*
1. Uraikan setiap suku berdasarkan relasi sudut kuadran II:
   - Suku pertama: $\sin 150^\circ = \sin(180^\circ - 30^\circ) = +\sin 30^\circ = \frac{1}{2}$
   - Suku kedua: $\cos 120^\circ = \cos(180^\circ - 60^\circ) = -\cos 60^\circ = -\frac{1}{2}$
   - Suku ketiga: $\tan 135^\circ = \tan(180^\circ - 45^\circ) = -\tan 45^\circ = -1$
2. Substitusikan ke dalam ekspresi aljabar:
   $$E = \left(\frac{1}{2}\right) + \left(-\frac{1}{2}\right) - (-1)$$
3. Hitung hasil aritmetika:
   $$E = \left(\frac{1}{2} - \frac{1}{2}\right) + 1 = 0 + 1 = 1$$
Hasil akhir: $\mathbf{1}$ (Sesuai Kunci D Soal No. 19).
""",
    "trik_cepat": r"""
### Trik Analisis Cepat (Fast Analysis Tricks)
1. **Trik Pola Jari Tangan Sinus Sudut Istimewa:**
   Gunakan rumus tunggal:
   $$\sin\theta = \frac{1}{2}\sqrt{n}$$
   dengan $n = 0, 1, 2, 3, 4$ berturut-turut untuk $0^\circ, 30^\circ, 45^\circ, 60^\circ, 90^\circ$.
   Untuk kosinus, cukup balik urutannya: $n = 4, 3, 2, 1, 0$.
2. **Trik Dua Langkah Sudut Tumpul:**
   Langkah 1: Tentukan selisih sudut terhadap $180^\circ$ (misal $150^\circ \to$ selisih $30^\circ$).
   Langkah 2: Pasang tanda kuadran II: Sinus bertanda $+$, Kosinus dan Tangen bertanda $-$.
"""
}

with open("data/modules/subchapter_4_2.json", "w", encoding="utf-8") as f:
    json.dump(sub_4_2, f, ensure_ascii=False, indent=2)

print("Generated subchapter_4_2.json successfully.")
