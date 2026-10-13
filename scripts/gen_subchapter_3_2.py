import json

sub_3_2 = {
    "sub_chapter_id": "3.2",
    "module_id": "MOD-3",
    "module_name": "Geometri & Pengukuran",
    "title": "Kesebangunan & Kekongruenan",
    "teori_definisi": r"""
### 1. Definisi Formal Kekongruenan ($\cong$)
Dua bangun datar dikatakan **kongruen** ($\cong$) jika keduanya memiliki bentuk dan ukuran yang **sama persis**. Secara geometri, satu bangun dapat dipetakan tepat menutupi bangun lainnya melalui kombinasi transformasi isometri (translasi, rotasi, refleksi).
**Syarat Kongruensi Dua Segitiga:**
1. **s-s-s (Sisi - Sisi - Sisi):** Ketiga pasang sisi yang bersesuaian sama panjang.
2. **s-sd-s (Sisi - Sudut - Sisi):** Dua pasang sisi yang bersesuaian sama panjang dan sudut apit keduanya sama besar.
3. **sd-s-sd (Sudut - Sisi - Sudut):** Dua pasang sudut yang bersesuaian sama besar dan sisi di antara kedua sudut tersebut sama panjang.
4. **sd-sd-s (Sudut - Sudut - Sisi):** Dua sudut bersesuaian sama besar dan satu sisi di hadapan salah satu sudut sama panjang.
5. **Hipotenusa - Sisi (Khusus Segitiga Siku-Siku):** Panjang sisi miring dan satu sisi siku-sikunya sama panjang.

### 2. Definisi Formal Kesebangunan ($\sim$)
Dua bangun datar dikatakan **sebangun** ($\sim$) jika keduanya memiliki bentuk yang sama, meskipun ukurannya berbeda.
**Dua Poligon Sebangun Memenuhi Dua Syarat Mutlak:**
1. Sudut-sudut yang bersesuaian sama besar:
   $$\angle A = \angle A', \quad \angle B = \angle B', \quad \angle C = \angle C', \quad \dots$$
2. Sisi-sisi yang bersesuaian memiliki rasio perbandingan yang konstan (faktor skala $k$):
   $$\frac{A'B'}{AB} = \frac{B'C'}{BC} = \frac{C'D'}{CD} = k$$
""",
    "rumus_katex": r"""
### Formulasi Kesebangunan & Teorema Thales
1. **Teorema Pembagi Sisi Segitiga (Teorema Garis Sejajar Thales):**
   Pada $\triangle ABC$, jika dibuat ruas garis $DE \parallel BC$ dengan $D \in AB$ dan $E \in AC$:
   $$\frac{AD}{AB} = \frac{AE}{AC} = \frac{DE}{BC}$$
   $$\frac{AD}{DB} = \frac{AE}{EC}$$

2. **Perbandingan Sisi pada Trapesium Terpotong Garis Sejajar:**
   Jika pada trapesium $ABCD$ dengan $AB \parallel EF \parallel DC$:
   $$EF = \frac{(AE \times DC) + (ED \times AB)}{AE + ED}$$

3. **Perbandingan Luas & Volume Bangun Sebangun:**
   Jika dua bangun memiliki rasio perbandingan panjang linear $k = \frac{s_1}{s_2}$:
   - Rasio Keliling: $\frac{K_1}{K_2} = k$
   - Rasio Luas: $\frac{L_1}{L_2} = k^2$
   - Rasio Volume: $\frac{V_1}{V_2} = k^3$
""",
    "karakteristik_batasan": r"""
### Karakteristik & Batasan Kasus
1. **Kongruen Pasti Sebangun, Sebangun Belum Tentu Kongruen:**
   Kekongruenan adalah kasus khusus dari kesebangunan dengan faktor skala perbandingan $k = 1$.
2. **Kesesuaian Urutan Titik Sudut:**
   Saat menuliskan hubungan kesebangunan $\triangle ABC \sim \triangle DEF$, urutan huruf **harus menyatakan pasangan titik sudut yang bersesuaian**. Jika urutan salah, perbandingan sisi aljabar yang diturunkan akan berakibat fatal keliru.
""",
    "contoh_kontekstual": r"""
### Contoh Kasus Riil & Kontekstual
**Kasus 1: Perancangan Sekat Rak Buku Penyangga Segitiga (Tipe Soal No. 15)**
Pada sekat rak buku gantung berbentuk trapesium dengan penyangga segitiga yang sebangun, diketahui panjang sisi horizontal rak berturut-turut adalah 40 cm dan 60 cm. Jika tinggi total sekat penyangga adalah 75 cm, maka jarak antar sekat rak bagian atas adalah ....

*Penyelesaian Langkah Demi Langkah:*
1. Modelkan geometri kesebangunan segitiga atas dan segitiga total:
   Dua segitiga memiliki sudut-sudut bersesuaian yang sama karena garis penyangga horizontal saling sejajar.
2. Tentukan rasio perbandingan sisi horizontal terhadap total:
   Rasio panjang sisi sekat $= \frac{a_1}{a_1 + a_2} = \frac{40}{40 + 60} = \frac{40}{100} = \frac{2}{5}$.
3. Hitung tinggi sekat atas ($t_1$) dari tinggi total ($75\text{ cm}$):
   $$t_1 = 75 \times \frac{2}{5} = 30\text{ cm}$$
Jadi, jarak antar sekat rak atas adalah **30 cm** (Sesuai Kunci D Soal No. 15).
""",
    "trik_cepat": r"""
### Trik Analisis Cepat (Fast Analysis Tricks)
1. **Trik Silang Trapesium:**
   Untuk mencari panjang garis tengah $EF$ pada trapesium yang sejajar dengan sisi atas $a$ dan sisi bawah $b$ yang membagi kaki dengan rasio $m : n$:
   $$EF = \frac{m \cdot b + n \cdot a}{m + n}$$
   (Ingat: kalikan bersilang, rasio atas dikali sisi bawah, rasio bawah dikali sisi atas!).
2. **Trik Rasio Kuadrat Luas:**
   Jika sebuah peta/denah memiliki skala panjang $1 : 200$, maka kebutuhan keramik/luas tanah bertambah dengan faktor kuadrat $1 : 200^2 = 1 : 40.000$.
"""
}

with open("data/modules/subchapter_3_2.json", "w", encoding="utf-8") as f:
    json.dump(sub_3_2, f, ensure_ascii=False, indent=2)

print("Generated subchapter_3_2.json successfully.")
