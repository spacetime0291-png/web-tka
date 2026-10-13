import json

sub_3_5 = {
    "sub_chapter_id": "3.5",
    "module_id": "MOD-3",
    "module_name": "Geometri & Pengukuran",
    "title": "Volume & Luas Permukaan Sisi Datar/Lengkung & Jaring-jaring",
    "teori_definisi": r"""
### 1. Definisi Jaring-Jaring Bangun Ruang
Jaring-jaring bangun ruang adalah bentangan terpadu dua dimensi dari seluruh bidang sisi pembatas suatu bangun ruang yang jika dilipat mengikuti garis rusuknya akan membentuk bangun ruang tiga dimensi secara tepat tanpa tumpang tindih (*overlap*).
1. **Jaring-jaring Kubus:** Terdiri atas 6 persegi kongruen (memiliki 11 pola dasar pembentuk).
2. **Jaring-jaring Balok & Kotak Lipat:** Terdiri atas 3 pasang persegi panjang kongruen, atau lembaran datar yang dipotong pojok-pojoknya untuk dilipat menjadi kotak tanpa tutup.
3. **Jaring-jaring Prisma Segitiga:** Terdiri atas 2 segitiga kongruen (alas dan tutup) serta 3 persegi panjang bidang tegak.
4. **Jaring-jaring Tabung (Silinder):** Terdiri atas 2 lingkaran (alas dan tutup) serta 1 persegi panjang sebagai selimut tabung dengan panjang sama dengan keliling lingkaran ($2\pi r$) dan lebar sama dengan tinggi tabung ($t$).
5. **Jaring-jaring Kerucut:** Terdiri atas 1 lingkaran alas dan 1 juring lingkaran sebagai selimut kerucut dengan jari-jari berupa garis pelukis ($s = \sqrt{r^2 + t^2}$).

### 2. Klasifikasi Bangun Ruang Sisi Datar & Sisi Lengkung
- **Sisi Datar:** Seluruh bidang pembatasnya berupa poligon datar (kubus, balok, prisma tegak, limas).
  - Prinsip Prisma Umum: Volume merupakan perkalian luas alas dengan tinggi ($V = L_{\text{alas}} \times t$).
  - Prinsip Limas Umum: Volume adalah sepertiga luas alas dikali tinggi ($V = \frac{1}{3} L_{\text{alas}} \times t$).
- **Sisi Lengkung:** Memiliki bidang lengkung sebagai selimut (tabung, kerucut, bola).
  - Tabung: Prisma dengan alas lingkaran.
  - Kerucut: Limas dengan alas lingkaran.
  - Bola: Bangun ruang yang seluruh titik permukaannya berjarak sama ($R$) ke titik pusat.
""",
    "rumus_katex": r"""
### Daftar Rumus Lengkap Luas Permukaan & Volume
1. **Kubus (Rusuk $s$):**
   $$L_p = 6s^2, \quad V = s^3$$

2. **Balok (Ukuran $p \times l \times t$):**
   $$L_p = 2(pl + pt + lt), \quad V = p \times l \times t$$

3. **Prisma Tegak:**
   $$L_p = 2 \times L_{\text{alas}} + (K_{\text{alas}} \times t_{\text{prisma}})$$
   $$V = L_{\text{alas}} \times t_{\text{prisma}}$$

4. **Limas:**
   $$L_p = L_{\text{alas}} + \Sigma L_{\text{sisi tegak}}$$
   $$V = \frac{1}{3} \times L_{\text{alas}} \times t_{\text{limas}}$$

5. **Tabung (Silinder):**
   $$L_{\text{selimut}} = 2\pi r t$$
   $$L_p = 2\pi r (r + t)$$
   $$V = \pi r^2 t$$

6. **Kerucut:**
   $$s = \sqrt{r^2 + t^2} \quad (\text{garis pelukis})$$
   $$L_{\text{selimut}} = \pi r s, \quad L_p = \pi r (r + s)$$
   $$V = \frac{1}{3} \pi r^2 t$$

7. **Bola:**
   $$L_p = 4\pi R^2, \quad V = \frac{4}{3}\pi R^3$$

8. **Potongan Juring Silinder (Sudut Pusat $\theta$):**
   $$V_{\text{juring}} = \frac{\theta}{360^\circ} \times \pi r^2 t$$
""",
    "karakteristik_batasan": r"""
### Karakteristik & Batasan Kasus
1. **Konsistensi Satuan Ukuran:**
   Sebelum menghitung volume atau luas permukaan gabungan, seluruh besaran panjang, lebar, tinggi, dan jari-jari **wajib diseragamkan satuannya** (misal: konversi $\text{m}$ ke $\text{cm}$, atau liter ke $\text{dm}^3$).
   $$1\text{ liter} = 1\text{ dm}^3 = 1.000\text{ cm}^3 = 10^{-3}\text{ m}^3$$
2. **Kaidah Wadah Terbuka:**
   Jika kotak atau tabung tidak memiliki tutup, maka komponen luas tutup harus dikurangkan dari rumus luas permukaan total:
   $$L_{\text{kotak tanpa tutup}} = pl + 2(pt + lt)$$
   $$L_{\text{tabung tanpa tutup}} = \pi r^2 + 2\pi r t$$
""",
    "contoh_kontekstual": r"""
### Contoh Kasus Riil & Kontekstual
**Kasus 1: Jaring-Jaring Kotak Lipat Karton (Tipe Soal No. 14)**
Sebuah karton dengan pola jaring-jaring kotak lipat tanpa tutup memiliki luas alas persegi sebesar $s^2 = 144\text{ cm}^2$ dengan panjang sisi alas $s = 12\text{ cm}$.

**Kasus 2: Volume Sambungan Dua Pipa Silinder (Tipe Soal No. 16)**
Dua pipa silinder disambungkan: pipa pertama berjarak jari $r_1 = 7\text{ cm}$ dan panjang $t_1 = 20\text{ cm}$; pipa kedua berjari-jari $r_2 = 14\text{ cm}$ dan panjang $t_2 = 10\text{ cm}$. Total volume air maksimum yang dapat ditampung adalah:
- Volume Pipa 1:
  $$V_1 = \pi r_1^2 t_1 = \frac{22}{7} \times 7^2 \times 20 = 22 \times 7 \times 20 = 3.080\text{ cm}^3$$
- Volume Pipa 2:
  $$V_2 = \pi r_2^2 t_2 = \frac{22}{7} \times 14^2 \times 10 = \frac{22}{7} \times 196 \times 10 = 22 \times 28 \times 10 = 6.160\text{ cm}^3$$
- Total Volume:
  $$V_{\text{total}} = 3.080 + 6.160 = 9.240\text{ cm}^3$$
(Sesuai Kunci C Soal No. 16).

**Kasus 3: Luas Permukaan Kemasan Suvenir Prisma Segitiga (Tipe Soal No. 18)**
Kemasan suvenir berbentuk prisma segitiga siku-siku dengan alas $6\text{ cm}$ dan $8\text{ cm}$ (sisi miring $= \sqrt{6^2 + 8^2} = 10\text{ cm}$), tinggi prisma $15\text{ cm}$.
- Luas Alas $= \frac{1}{2} \times 6 \times 8 = 24\text{ cm}^2$
- Keliling Alas $= 6 + 8 + 10 = 24\text{ cm}$
- Luas Permukaan:
  $$L_p = 2(24) + (24 \times 15) = 48 + 360 = 408\text{ cm}^2$$
(Sesuai Kunci C Soal No. 18).

**Kasus 4: Volume Potongan Juring Keju Silinder (Tipe Soal No. 29)**
Keju silinder diameter 20 cm ($r = 10\text{ cm}$) dan tinggi 6 cm dipotong juring sudut $60^\circ$:
$$V = \frac{60^\circ}{360^\circ} \times (\pi r^2 t) = \frac{1}{6} \times (3{,}14 \times 100 \times 6) = 314\text{ cm}^3$$
(Sesuai Kunci A Soal No. 29).
""",
    "trik_cepat": r"""
### Trik Analisis Cepat (Fast Analysis Tricks)
1. **Trik Tripel Pythagoras pada Luas Prisma Siku-Siku:**
   Jika sisi siku-siku alas segitiga diketahui $(a, b)$, langsung hitung sisi miring menggunakan tripel Pythagoras $(3, 4, 5)$, $(5, 12, 13)$, atau $(6, 8, 10)$ tanpa mengakar kuadratkan secara manual.
2. **Trik Kelipatan $\pi$ Pecahan $\frac{22}{7}$ vs $3{,}14$:**
   Jika $r$ kelipatan 7, selalu gunakan $\frac{22}{7}$ karena suku 7 langsung mencoret penyebut. Jika $r$ kelipatan 10 (seperti 10, 20), gunakan $3{,}14$ karena angka desimal langsung bergeser ke bilangan bulat.
"""
}

with open("data/modules/subchapter_3_5.json", "w", encoding="utf-8") as f:
    json.dump(sub_3_5, f, ensure_ascii=False, indent=2)

print("Generated subchapter_3_5.json successfully.")
