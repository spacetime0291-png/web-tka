import json

sub_4_1 = {
    "sub_chapter_id": "4.1",
    "module_id": "MOD-4",
    "module_name": "Trigonometri",
    "title": "Perbandingan Sisi Segitiga Siku-Siku",
    "teori_definisi": r"""
### 1. Definisi Enam Perbandingan Trigonometri
Pada segitiga siku-siku dengan salah satu sudut lancip $\alpha$ ($0^\circ < \alpha < 90^\circ$), sisi-sisi segitiga dinamai berdasarkan posisinya relatif terhadap sudut $\alpha$:
- **Sisi Depan ($de$ / opposite):** Sisi yang berhadapan langsung di depan sudut $\alpha$.
- **Sisi Samping ($sa$ / adjacent):** Sisi siku-siku yang mengapit sudut $\alpha$ selain sisi miring.
- **Sisi Miring ($mi$ / hypotenuse):** Sisi terpanjang di hadapan sudut siku-siku $90^\circ$.

Enam fungsi trigonometri didefinisikan sebagai perbandingan rasio panjang sisi-sisi tersebut:
1. **Sinus ($\sin\alpha$):** Perbandingan sisi depan terhadap sisi miring ($\frac{\text{depan}}{\text{miring}}$ atau disingkat **SIN-DE-MI**).
2. **Kosinus ($\cos\alpha$):** Perbandingan sisi samping terhadap sisi miring ($\frac{\text{samping}}{\text{miring}}$ atau disingkat **KOS-SA-MI**).
3. **Tangen ($\tan\alpha$):** Perbandingan sisi depan terhadap sisi samping ($\frac{\text{depan}}{\text{samping}}$ atau disingkat **TAN-DE-SA**).
4. **Kosekan ($\csc\alpha$):** Kebalikan (invers perkalian) dari sinus ($\frac{\text{miring}}{\text{depan}}$).
5. **Sekan ($\sec\alpha$):** Kebalikan dari kosinus ($\frac{\text{miring}}{\text{samping}}$).
6. **Kotangen ($\cot\alpha$):** Kebalikan dari tangen ($\frac{\text{samping}}{\text{depan}}$).
""",
    "rumus_katex": r"""
### Formulasi Rasio Trigonometri & Identitas Pythagoras
1. **Enam Rasio Utama:**
   $$\sin\alpha = \frac{de}{mi}, \quad \cos\alpha = \frac{sa}{mi}, \quad \tan\alpha = \frac{de}{sa} = \frac{\sin\alpha}{\cos\alpha}$$
   $$\csc\alpha = \frac{1}{\sin\alpha} = \frac{mi}{de}, \quad \sec\alpha = \frac{1}{\cos\alpha} = \frac{mi}{sa}, \quad \cot\alpha = \frac{1}{\tan\alpha} = \frac{sa}{de}$$

2. **Teorema Pythagoras Penghubung Sisi:**
   $$de^2 + sa^2 = mi^2$$
   Dibagi dengan $mi^2$ menghasilkan **Identitas Pythagoras Pokok**:
   $$\sin^2\alpha + \cos^2\alpha = 1$$
   $$1 + \tan^2\alpha = \sec^2\alpha$$
   $$1 + \cot^2\alpha = \csc^2\alpha$$
""",
    "karakteristik_batasan": r"""
### Karakteristik & Batasan Kasus
1. **Batas Nilai Sinus & Kosinus pada Segitiga Siku-Siku:**
   Karena sisi miring ($mi$) selalu merupakan sisi terpanjang dalam segitiga siku-siku ($mi > de$ dan $mi > sa$), maka:
   $$0 < \sin\alpha < 1 \quad \text{dan} \quad 0 < \cos\alpha < 1$$
   Nilai tangen $\tan\alpha$ dapat bernilai sembarang bilangan real positif ($0 < \tan\alpha < \infty$).
2. **Ketergantungan Orientasi Sudut:**
   Sisi depan dan sisi samping bertukar peran jika sudut acuan berpindah ke sudut lancip lainnya ($\beta = 90^\circ - \alpha$):
   $$\sin(90^\circ - \alpha) = \cos\alpha, \quad \cos(90^\circ - \alpha) = \sin\alpha$$
""",
    "contoh_kontekstual": r"""
### Contoh Kasus Riil & Kontekstual
**Kasus 1: Tangga Disandarkan pada Dinding Vertikal (Tipe Soal No. 41)**
Suatu tangga dengan panjang 6 meter disandarkan pada dinding vertikal. Sudut yang dibentuk tangga dengan permukaan lantai adalah $60^\circ$.
Berapakah tinggi dinding yang disentuh oleh ujung atas tangga?

*Penyelesaian Langkah Demi Langkah:*
1. Identifikasi Elemen Segitiga Siku-Siku:
   - Panjang tangga merupakan sisi miring segitiga: $mi = 6\text{ meter}$.
   - Sudut terhadap lantai: $\alpha = 60^\circ$.
   - Tinggi dinding ($h$) merupakan sisi depan terhadap sudut $60^\circ$: $de = h$.
2. Gunakan perbandingan Sinus (**SIN-DE-MI**):
   $$\sin 60^\circ = \frac{de}{mi} = \frac{h}{6}$$
3. Hitung nilai tinggi dinding $h$:
   $$h = 6 \times \sin 60^\circ = 6 \times \frac{\sqrt{3}}{2} = 3\sqrt{3}\text{ meter}$$
Jadi, tinggi dinding yang disentuh ujung atas tangga adalah $\mathbf{3\sqrt{3}\text{ meter}}$ (Sesuai Kunci C Soal No. 41).
""",
    "trik_cepat": r"""
### Trik Analisis Cepat (Fast Analysis Tricks)
1. **Jembatan Keledai 'DEMI-SAMI-DESA':**
   - Sinus = **DE/MI**
   - Kosinus = **SA/MI**
   - Tangen = **DE/SA**
2. **Trik Tripel Pythagoras untuk Mencari Rasio Lain:**
   Jika diketahui salah satu nilai perbandingan (misal $\sin\alpha = \frac{3}{5}$), langsung bentuk segitiga dengan sisi depan $= 3$, miring $= 5$. Berdasarkan tripel Pythagoras $3-4-5$, sisi samping langsung $= 4$. Maka seketika diperoleh $\cos\alpha = \frac{4}{5}$ dan $\tan\alpha = \frac{3}{4}$ tanpa kalkulasi identitas yang rumit!
"""
}

with open("data/modules/subchapter_4_1.json", "w", encoding="utf-8") as f:
    json.dump(sub_4_1, f, ensure_ascii=False, indent=2)

print("Generated subchapter_4_1.json successfully.")
