import json

sub_4_3 = {
    "sub_chapter_id": "4.3",
    "module_id": "MOD-4",
    "module_name": "Trigonometri",
    "title": "Aplikasi Nyata Tinggi / Elevasi & Depresi",
    "teori_definisi": r"""
### 1. Definisi Sudut Elevasi & Sudut Depresi
Dalam aplikasi pengukuran geodesi, arsitektur, dan navigasi:
- **Garis Pandang Horizontal:** Garis lurus mendatar yang sejajar dengan permukaan tanah yang ditarik tepat setinggi mata pengamat.
- **Sudut Elevasi ($\theta_e$):** Sudut yang terbentuk antara garis pandang horizontal dengan garis bidik pengamat ketika melihat objek yang posisinya **lebih tinggi** (melihat ke atas).
- **Sudut Depresi ($\theta_d$):** Sudut yang terbentuk antara garis pandang horizontal dengan garis bidik pengamat ketika melihat objek yang posisinya **lebih rendah** (melihat ke bawah, misalnya dari atas mercusuar atau tebing).
- Hubungan geometris: Berdasarkan sifat sudut berseberangan dalam pada garis horizontal sejajar, **besar sudut depresi dari puncak objek ke pengamat sama persis dengan besar sudut elevasi dari pengamat ke puncak objek**.

### 2. Pengukuran Menggunakan Klinometer
Klinometer adalah alat sederhana untuk mengukur sudut kemiringan (elevasi/depresi). Dengan mengombinasikan sudut $\theta$, jarak horizontal pengamat ke kaki objek ($x$), dan tinggi mata pengamat dari tanah ($t_0$), tinggi total objek ($H$) dapat ditentukan tanpa perlu memanjat objek tersebut.
""",
    "rumus_katex": r"""
### Formulasi Pengukuran Tinggi & Jarak
1. **Model Pengamatan Satu Titik:**
   Tinggi bagian atas objek dari garis mata pengamat ($h$):
   $$\tan\theta = \frac{h}{x} \implies h = x \cdot \tan\theta$$
   Tinggi total objek dari permukaan tanah ($H$):
   $$H = h + t_0 = (x \cdot \tan\theta) + t_0$$
   Di mana $x$ adalah jarak mendatar ke objek dan $t_0$ adalah tinggi mata pengamat.

2. **Model Pengamatan Dua Titik (Objek Tidak Dapat Didekati Langsung):**
   Pengamat membidik puncak objek dari titik $A$ dengan sudut elevasi $\alpha$, lalu bergerak mundur sejauh jarak $d$ ke titik $B$ dengan sudut elevasi $\beta$ ($\beta < \alpha$):
   $$h = \frac{d \cdot \tan\alpha \cdot \tan\beta}{\tan\alpha - \tan\beta} = \frac{d}{\cot\beta - \cot\alpha}$$
   Tinggi total objek: $H = h + t_0$.

3. **Jarak Pandang Langsung (Jarak Garis Bidik):**
   $$s = \frac{x}{\cos\theta} = \frac{h}{\sin\theta}$$
""",
    "karakteristik_batasan": r"""
### Karakteristik & Batasan Kasus
1. **Kewajiban Menambahkan Tinggi Pengamat ($t_0$):**
   Salah satu kesalahan paling sering dalam soal kontekstual adalah lupa menjumlahkan tinggi mata pengamat $t_0$ ke hasil perhitungan segitiga $h$. Tinggi segitiga $h$ hanyalah tinggi di atas level mata pengamat!
2. **Kondisi Tanah Datar (Flat Ground Assumption):**
   Rumus standar mengasumsikan permukaan tanah antara kaki pengamat dan kaki objek adalah bidang datar horizontal. Jika tanah miring, perlu dilakukan koreksi sudut kemiringan lereng.
""",
    "contoh_kontekstual": r"""
### Contoh Kasus Riil & Kontekstual
**Kasus 1: Mengukur Ketinggian Menara Pemancar Telekomunikasi**
Seorang teknisi jaringan berdiri sejauh 40 meter dari dasar menara pemancar BTS. Menggunakan klinometer, teknisi melihat puncak menara dengan sudut elevasi $60^\circ$. Jika tinggi mata teknisi dari tanah adalah $160\text{ cm} = 1{,}6\text{ meter}$, hitunglah tinggi menara tersebut!

*Penyelesaian Langkah Demi Langkah:*
1. Identifikasi variabel:
   - Jarak horizontal: $x = 40\text{ meter}$
   - Sudut elevasi: $\theta = 60^\circ$
   - Tinggi mata pengamat: $t_0 = 1{,}6\text{ meter}$
2. Hitung tinggi $h$ dari level mata pengamat menggunakan Tangen:
   $$\tan 60^\circ = \frac{h}{x} \implies h = 40 \times \tan 60^\circ = 40\sqrt{3}\text{ meter}$$
3. Hitung tinggi total menara dari tanah ($H$):
   $$H = h + t_0 = (40\sqrt{3} + 1{,}6)\text{ meter}$$
   Jika diestimasi dengan $\sqrt{3} \approx 1{,}732$:
   $$H \approx 40(1{,}732) + 1{,}6 = 69{,}28 + 1{,}6 = 70{,}88\text{ meter}$$
""",
    "trik_cepat": r"""
### Trik Analisis Cepat (Fast Analysis Tricks)
1. **Trik Sudut $45^\circ$ (Satu Banding Satu):**
   Jika sudut elevasi adalah $45^\circ$, maka $\tan 45^\circ = 1$, yang berarti $h = x$! Tinggi objek di atas mata pengamat **sama persis dengan jarak langkah kaki pengamat ke objek** ($H = x + t_0$).
2. **Trik Sudut $30^\circ$ dan $60^\circ$:**
   - Untuk sudut $30^\circ$: $h = \frac{x}{\sqrt{3}} = \frac{x}{3}\sqrt{3}$.
   - Untuk sudut $60^\circ$: $h = x\sqrt{3}$.
"""
}

with open("data/modules/subchapter_4_3.json", "w", encoding="utf-8") as f:
    json.dump(sub_4_3, f, ensure_ascii=False, indent=2)

print("Generated subchapter_4_3.json successfully.")
