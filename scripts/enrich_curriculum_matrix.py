import json

with open("data/curriculum_matrix.json", "r", encoding="utf-8") as f:
    matrix = json.load(f)

enrichment = {
    "1.1": {
        "short_title": "Eksponen & Pangkat",
        "sub_topics": [
            "Klasifikasi Bilangan Real (Asli, Cacah, Bulat, Rasional, Irasional)",
            "Sifat Dasar Perkalian & Pembagian Eksponen Basis Sama",
            "Pangkat Bertingkat dan Distribusi Perkalian/Pembagian",
            "Definisi Pangkat Nol (a^0 = 1) dan Pangkat Negatif (a^-n = 1/a^n)",
            "Pangkat Rasional (Pecahan) dan Konversi Bentuk Akar",
            "Batasan Kasus Basis Negatif pada Pangkat Genap vs Ganjil"
        ]
    },
    "1.2": {
        "short_title": "Bentuk Akar & Rasionalisasi",
        "sub_topics": [
            "Definisi & Syarat Eksistensi Bentuk Akar (Radikan Non-Negatif)",
            "Penyederhanaan Bentuk Akar dan Penarikan Faktor Kuadrat",
            "Operasi Aljabar Akar (Penjumlahan, Pengurangan, Perkalian, Pembagian)",
            "Merasionalkan Penyebut Bentuk Akar Tunggal (a / sqrt(b))",
            "Merasionalkan Penyebut Sekawan Binomial (Selisih Kuadrat)",
            "Bentuk Khusus Penarikan Akar Ganda sqrt((a+b) +/- 2 sqrt(ab))"
        ]
    },
    "1.3": {
        "short_title": "Sifat Operasi Hitung",
        "sub_topics": [
            "Hierarki Operasi Hitung Campuran (PEMDAS / KABATAKU)",
            "Sifat-Sifat Hitung: Komutatif, Asosiatif, dan Distributif",
            "Operasi Hitung Pecahan, Desimal, dan Persentase",
            "Estimasi dan Pembulatan Numerik Terarah",
            "Aplikasi Kontekstual Konsumsi Energi, Daya Listrik, dan Biaya"
        ]
    },
    "2.1": {
        "short_title": "SPLDV & SPLTV (3 Variabel)",
        "sub_topics": [
            "Bentuk Baku Sistem Persamaan Linear Dua Variabel (SPLDV)",
            "Metode Penyelesaian SPLDV: Substitusi, Eliminasi, Gabungan, dan Grafik",
            "Bentuk Baku Sistem Persamaan Linear Tiga Variabel (SPLTV, Maks. 3 Variabel)",
            "Metode Eliminasi Bertahap SPLTV (Reduksi Ordo 3 ke 2)",
            "Karakteristik Solusi: Solusi Tunggal, Tak Hingga Solusi, dan Tidak Ada Solusi",
            "Pemodelan Masalah Nyata Sistem Pembelian dan Paket Barang"
        ]
    },
    "2.2": {
        "short_title": "SPtLDV & Program Linear (DHP)",
        "sub_topics": [
            "Bentuk Pertidaksamaan Linear Dua Variabel dan Garis Pembatas",
            "Penentuan Daerah Himpunan Penyelesaian (DHP) dengan Uji Titik Selidik (0,0)",
            "Sistem Pertidaksamaan Gabungan dengan Kendala Non-Negatif (x >= 0, y >= 0)",
            "Penentuan Titik-Titik Pojok (Corner Points) Poligon DHP",
            "Fungsi Sasaran / Objektif Z = ax + by",
            "Optimasi Nilai Maksimum dan Minimum Menggunakan Uji Titik Pojok",
            "Pemodelan Masalah Produksi dan Alokasi Sumber Daya Industri"
        ]
    },
    "2.3": {
        "short_title": "Fungsi Linear, Kuadrat & Rasional",
        "sub_topics": [
            "Konsep Relasi, Fungsi, Notasi, Domain Alami (Df), Kodomain, dan Range (Rf)",
            "Fungsi Linear f(x) = mx + c: Kemiringan (Gradien) dan Grafik Garis",
            "Fungsi Kuadrat f(x) = ax^2 + bx + c: Sumbu Simetri, Titik Puncak, dan Parabola",
            "Analisis Diskriminan D = b^2 - 4ac terhadap Titik Potong Sumbu X",
            "Fungsi Rasional f(x) = P(x)/Q(x): Syarat Penyebut Q(x) != 0 dan Asimtot",
            "Aplikasi Titik Ekstrem Parabola pada Masalah Ketinggian dan Penjualan"
        ]
    },
    "2.4": {
        "short_title": "Komposisi & Invers Fungsi",
        "sub_topics": [
            "Aljabar Fungsi: Penjumlahan, Pengurangan, Perkalian, dan Pembagian",
            "Definisi Komposisi Fungsi (f o g)(x) = f(g(x)) dan Syarat Keberadaannya",
            "Sifat Asosiatif dan Non-Komutatif pada Komposisi Fungsi",
            "Menentukan Fungsi Komponen Pembentuk Komposisi",
            "Definisi Fungsi Invers f^-1(x) dan Syarat Fungsi Bijektif",
            "Rumus Cepat Invers Fungsi Linear dan Pecahan Linear",
            "Sifat Invers Komposisi (f o g)^-1(x) = (g^-1 o f^-1)(x)"
        ]
    },
    "2.5": {
        "short_title": "Barisan & Deret Aritmetika",
        "sub_topics": [
            "Pola Barisan Aritmetika dan Beda Konstan (b = Un - Un-1)",
            "Rumus Suku ke-n Barisan Aritmetika (Un = a + (n-1)b)",
            "Suku Tengah Barisan Aritmetika (Ut = (a + Un) / 2)",
            "Sisipan Bilangan pada Barisan Aritmetika (b' = b / (k+1))",
            "Jumlah n Suku Pertama Deret Aritmetika (Sn = n/2 (2a + (n-1)b))",
            "Hubungan Antara Deret dan Suku ke-n (Un = Sn - Sn-1)",
            "Pemodelan Masalah Tabungan Bertingkat dan Kapasitas Kursi Stadion"
        ]
    },
    "2.6": {
        "short_title": "Geometri, Finansial & Bunga",
        "sub_topics": [
            "Pola Barisan Geometri dan Rasio Konstan (r = Un / Un-1)",
            "Rumus Suku ke-n Barisan Geometri (Un = a * r^(n-1))",
            "Jumlah n Suku Pertama Deret Geometri Berhingga (Sn)",
            "Deret Geometri Tak Hingga Konvergen (|r| < 1, S_inf = a / (1-r))",
            "Aplikasi Finansial: Perhitungan Bunga Tunggal vs Bunga Majemuk",
            "Pertumbuhan Eksponensial (Bakteri/Populasi) dan Peluruhan (Radioaktif)",
            "Pemodelan Panjang Lintasan Total Pantulan Bola Memantul"
        ]
    },
    "3.1": {
        "short_title": "Sudut & Garis Sejajar",
        "sub_topics": [
            "Klasifikasi Sudut: Lancip, Siku-siku, Tumpul, Lurus, dan Refleks",
            "Hubungan Dua Sudut: Berpelurus (180°), Berpenyiku (90°), Bertolak Belakang",
            "Garis Sejajar Dipotong Garis Transversal (Sudut Sehadap, Berseberangan)",
            "Sudut Dalam Sepihak dan Luar Sepihak (Jumlah 180°)",
            "Jumlah Sudut Dalam Segitiga (180°) dan Poligon Segi-n ((n-2) * 180°)"
        ]
    },
    "3.2": {
        "short_title": "Kesebangunan & Kekongruenan",
        "sub_topics": [
            "Kekongruenan Bangun Datar dan Postulat Segitiga Kongruen (S-S-S, S-Sd-S, Sd-S-Sd)",
            "Kesebangunan Poligon dan Perbandingan Sisi-Sisi yang Bersesuaian",
            "Kesebangunan Segitiga Siku-Siku Terpotong Garis Tinggi (Rumus Air Mancur)",
            "Teorema Thales pada Garis Sejajar Pemotong Sisi Segitiga",
            "Rasio Perbandingan Luas (k^2) dan Volume (k^3) Bangun Sebangun",
            "Aplikasi Penaksiran Ketinggian Objek Menggunakan Panjang Bayangan"
        ]
    },
    "3.3": {
        "short_title": "Dimensi Tiga (Jarak Ruang Kubus)",
        "sub_topics": [
            "Elemen Ruang Kubus ABCD.EFGH: Rusuk, Diagonal Bidang (s√2), Diagonal Ruang (s√3)",
            "Jarak Titik ke Titik dalam Kubus Menggunakan Teorema Pythagoras 3D",
            "Jarak Titik ke Garis dengan Proyeksi Tegak Lurus dan Perbandingan Luas Segitiga",
            "Jarak Titik ke Bidang Datar Melalui Garis Proyeksi Normal",
            "Sudut Antara Garis dengan Bidang dan Sudut Antara Dua Bidang",
            "Trik Proyeksi Diagonal Ruang Terhadap Bidang Diagonal / Titik Tengah Rusuk"
        ]
    },
    "3.4": {
        "short_title": "Keliling & Luas Bangun Datar",
        "sub_topics": [
            "Keliling & Luas Segitiga (Alas-Tinggi, Rumus Heron, dan Rumus Sinus)",
            "Segiempat Beraturan: Persegi, Persegi Panjang, dan Jajar Genjang",
            "Segiempat Khusus: Belah Ketupat, Layang-Layang, dan Trapesium",
            "Lingkaran: Keliling (2πr), Luas (πr^2), Panjang Busur, dan Luas Juring",
            "Analisis Luas Daerah Arsiran (Shaded Area) dari Gabungan Bangun Datar"
        ]
    },
    "3.5": {
        "short_title": "Bangun Ruang & Jaring-Jaring",
        "sub_topics": [
            "Bangun Ruang Sisi Datar: Kubus, Balok, Prisma, dan Limas (Volume & Luas)",
            "Bangun Ruang Sisi Lengkung: Tabung, Kerucut, dan Bola (Volume & Luas)",
            "Identifikasi Pola Jaring-Jaring Kubus (Pola 1-4-1, 2-3-1, 2-2-2, 3-3)",
            "Analisis Posisi Sisi-Sisi yang Saling Berhadapan pada Jaring-Jaring Kubus",
            "Jaring-Jaring Balok, Tabung, dan Kerucut (Hubungan Selimut dan Garis Pelukis)",
            "Perhitungan Bangun Ruang Terpotong / Gabungan (Tenda, Corong, Tangki)"
        ]
    },
    "3.6": {
        "short_title": "Transformasi Geometri (Dilatasi)",
        "sub_topics": [
            "Translasi (Pergeseran) Titik dan Bangun pada Bidang Koordinat",
            "Refleksi (Pencerminan) terhadap Sumbu X, Sumbu Y, Garis y=x, dan Garis y=-x",
            "Rotasi (Perputaran) terhadap Titik Pusat (0,0) Sebesar Sudut θ",
            "Dilatasi Titik terhadap Pusat (0,0) dengan Faktor Skala k: P'(kx, ky)",
            "Dilatasi Titik terhadap Pusat Sembarang (a,b) dengan Faktor Skala k",
            "Pengaruh Transformasi Dilatasi terhadap Perubahan Luas Bangun (|k|^2 * L)"
        ]
    },
    "4.1": {
        "short_title": "Perbandingan Trigonometri Dasar",
        "sub_topics": [
            "Nomenklatur Segitiga Siku-Siku: Sisi Depan (de), Samping (sa), Miring (mi)",
            "Definisi Rasio Trigonometri Utama: sin θ, cos θ, dan tan θ",
            "Definisi Rasio Resiprokal (Kebalikan): csc θ, sec θ, dan cot θ",
            "Identitas Pokok Trigonometri (sin^2 θ + cos^2 θ = 1, tan^2 θ + 1 = sec^2 θ)",
            "Menentukan Nilai Rasio Trigonometri Lain Jika Diketahui Satu Nilai Rasio"
        ]
    },
    "4.2": {
        "short_title": "Sudut Istimewa & Sudut Tumpul (Kuadran II)",
        "sub_topics": [
            "Tabel Nilai Eksak Sudut Istimewa Kuadran I (0°, 30°, 45°, 60°, 90°)",
            "Sistem Empat Kuadran Kartesius dan Aturan Tanda Positif/Negatif Trigonometri",
            "Karakteristik Sudut Tumpul Kuadran II (Rentang 90° < α < 180°)",
            "Rumus Relasi Sudut Kuadran II: sin(180°-α)=+sin α, cos(180°-α)=-cos α, tan(180°-α)=-tan α",
            "Penentuan Nilai Trigonometri Sudut Khas Kuadran II (120°, 135°, 150°, 180°)",
            "Analisis Koordinat Kartesius Titik pada Kuadran II (x < 0, y > 0)"
        ]
    },
    "4.3": {
        "short_title": "Aplikasi Klinometer & Sudut Elevasi",
        "sub_topics": [
            "Prinsip Kerja dan Pengukuran Menggunakan Alat Klinometer",
            "Definisi Sudut Elevasi (Sudut Penglihatan ke Atas Garis Horizontal)",
            "Definisi Sudut Depresi (Sudut Penglihatan ke Bawah Garis Horizontal)",
            "Pemodelan Segitiga Siku-Siku dan Perbandingan Tangen: tan α = h / d",
            "Perhitungan Ketinggian Objek Nyata: H = Tinggi Mata + d * tan α",
            "Pemecahan Masalah Dua Titik Pengamatan Sudut Bertahap"
        ]
    },
    "5.1": {
        "short_title": "Visualisasi Data & Diagram",
        "sub_topics": [
            "Klasifikasi Tipe Data: Diskrit, Kontinu, Kuantitatif, dan Kualitatif",
            "Diagram Batang (Tunggal & Majemuk) serta Interpretasi Nilai Frekuensi",
            "Diagram Garis untuk Visualisasi Tren Waktu (Time Series)",
            "Diagram Lingkaran: Konversi Frekuensi ke Sudut Derajat dan Persentase",
            "Histogram & Poligon Frekuensi: Batas Kelas, Tepi Kelas, dan Titik Tengah",
            "Kurva Ogive Positif (Frekuensi Kumulatif Kurang Dari) dan Ogive Negatif"
        ]
    },
    "5.2": {
        "short_title": "Statistika: Pemusatan & Penyebaran",
        "sub_topics": [
            "Ukuran Pemusatan Data Tunggal: Rata-Rata (Mean), Median, dan Modus",
            "Rata-Rata Hitung Data Kelompok (Metode Titik Tengah & Rataan Sementara)",
            "Median Data Kelompok Menggunakan Tepi Bawah dan Frekuensi Kumulatif",
            "Modus Data Kelompok Menggunakan Selisih Frekuensi Kelas Modus",
            "Ukuran Letak: Kuartil Bawah (Q1), Kuartil Atas (Q3), dan Jangkauan Interkuartil",
            "Ukuran Penyebaran: Simpangan Rata-Rata, Varians (Ragam), dan Simpangan Baku",
            "Pengaruh Operasi Aljabar Data terhadap Nilai Rata-Rata dan Simpangan Baku"
        ]
    },
    "5.3": {
        "short_title": "Aturan Perkalian & Pencacahan",
        "sub_topics": [
            "Aturan Penjumlahan untuk Kejadian Saling Lepas (Pilihan Atau)",
            "Kaidah Perkalian (Fundamental Counting Principle / Aturan Dan)",
            "Metode Pengisian Tempat (Filling Slots) dengan Batasan Syarat Khusus",
            "Definisi dan Operasi Notasi Faktorial (n!) serta Konvensi 0! = 1",
            "Permutasi Unsur Berbeda, Permutasi Unsur Sama, dan Permutasi Siklis",
            "Kombinasi Pemilihan Tanpa Memperhatikan Urutan C(n, r)",
            "Strategi Analisis Membedakan Masalah Permutasi vs Kombinasi"
        ]
    },
    "5.4": {
        "short_title": "Peluang Kejadian Tunggal & Majemuk",
        "sub_topics": [
            "Konsep Ruang Sampel S, Titik Sampel, dan Kejadian Acak",
            "Peluang Teoretis Kejadian Tunggal P(A) = n(A) / n(S) dan Batasan Nilai [0, 1]",
            "Peluang Komplemen Kejadian P(A') = 1 - P(A)",
            "Frekuensi Harapan Fh(A) = n * P(A) pada Percobaan Berulang",
            "Peluang Kejadian Majemuk Saling Lepas: P(A U B) = P(A) + P(B)",
            "Peluang Kejadian Tidak Saling Lepas: P(A U B) = P(A) + P(B) - P(A n B)",
            "Peluang Kejadian Saling Bebas: P(A n B) = P(A) * P(B)",
            "Peluang Kejadian Bersyarat P(A|B) pada Kasus Tanpa Pengembalian"
        ]
    }
}

for mod in matrix["modules"]:
    for sc in mod["sub_chapters"]:
        sub_id = sc["sub_chapter_id"]
        if sub_id in enrichment:
            sc["short_title"] = enrichment[sub_id]["short_title"]
            sc["sub_topics"] = enrichment[sub_id]["sub_topics"]

with open("data/curriculum_matrix.json", "w", encoding="utf-8") as f:
    json.dump(matrix, f, ensure_ascii=False, indent=2)

print("curriculum_matrix.json successfully enriched with short_title and sub_topics!")
