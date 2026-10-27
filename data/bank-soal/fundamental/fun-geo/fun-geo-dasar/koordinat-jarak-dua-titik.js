/**
 * Bank Soal TKA: Bab Fundamental (Prasyarat) - Geometri Analitik Bidang
 * Bab Kecil: Garis dan Koordinat (fun-geo-dasar)
 * Sub-Bab: Koordinat & Jarak Dua Titik (fun-geo-dasar-koordinat)
 * Slug: koordinat-jarak-dua-titik
 * Indikator: Jarak antara dua titik pada bidang Kartesius dan penentuan titik tengah.
 * 
 * Total Butir Soal: 11 (Mudah: 6, Sedang: 5, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fun-geo-dasar-koordinat";
  const subTopicSlug = "koordinat-jarak-dua-titik";
  const questions = [
  {
    "id": "fun-geo-dasar-koordinat-001",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-geo",
    "subChapterId": "fun-geo-dasar",
    "subTopicId": "fun-geo-dasar-koordinat",
    "category": "Jarak Antara Dua Titik pada Bidang Kartesius",
    "difficulty": "mudah",
    "statement": "Jarak antara titik $A(1, 2)$ dan titik $B(4, 6)$ pada bidang koordinat Kartesius adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$3$",
      "$4$",
      "$5$",
      "$\\sqrt{15}$",
      "$7$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Rumus jarak antara dua titik $A(x_1, y_1)$ dan $B(x_2, y_2)$ diturunkan dari teorema Pythagoras: $d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$.",
      "steps": "1. Tentukan komponen selisih absis dan ordinat:\n$$\\Delta x = x_2 - x_1 = 4 - 1 = 3$$\n$$\\Delta y = y_2 - y_1 = 6 - 2 = 4$$\n2. Hitung jarak menggunakan rumus Pythagoras:\n$$d = \\sqrt{(\\Delta x)^2 + (\\Delta y)^2} = \\sqrt{3^2 + 4^2}$$\n3. Selesaikan operasi akar kuadrat:\n$$d = \\sqrt{9 + 16} = \\sqrt{25} = 5$$\n4. Jadi, jarak antara titik $A$ dan $B$ adalah $5$ satuan (pilihan C).",
      "pitfalls": "Menjumlahkan langsung nilai selisih $3 + 4 = 7$ tanpa melakukan pengkuadratan dan penarikan akar."
    },
    "subTopicSlug": "koordinat-jarak-dua-titik",
    "bab": "Geometri Analitik Bidang",
    "subBab": "Koordinat & Jarak Dua Titik",
    "subTopic": "Koordinat & Jarak Dua Titik",
    "chapterTitle": "Geometri Analitik Bidang",
    "difficultyLabel": "Mudah",
    "hint": "Gunakan hubungan matematis dasar: $d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$."
  },
  {
    "id": "fun-geo-dasar-koordinat-002",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-geo",
    "subChapterId": "fun-geo-dasar",
    "subTopicId": "fun-geo-dasar-koordinat",
    "category": "Menentukan Koordinat Titik Tengah",
    "difficulty": "mudah",
    "statement": "Koordinat titik tengah dari ruas garis yang menghubungkan titik $P(2, -4)$ dan titik $Q(8, 2)$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$(5, -1)$",
      "$(5, 1)$",
      "$(3, -1)$",
      "$(6, -2)$",
      "$(10, -2)$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Titik tengah $M$ dari dua titik $(x_1, y_1)$ dan $(x_2, y_2)$ adalah rata-rata aritmetika dari koordinatnya: $M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)$.",
      "steps": "1. Hitung absis titik tengah:\n$$x_M = \\frac{x_1 + x_2}{2} = \\frac{2 + 8}{2} = \\frac{10}{2} = 5$$\n2. Hitung ordinat titik tengah:\n$$y_M = \\frac{y_1 + y_2}{2} = \\frac{-4 + 2}{2} = \\frac{-2}{2} = -1$$\n3. Gabungkan koordinat titik tengah:\n$$M = (5, -1)$$\n4. Jadi, koordinat titik tengahnya adalah $(5, -1)$ (pilihan A).",
      "pitfalls": "Melakukan pengurangan absis/ordinat alih-alih penjumlahan saat menghitung titik tengah."
    },
    "subTopicSlug": "koordinat-jarak-dua-titik",
    "bab": "Geometri Analitik Bidang",
    "subBab": "Koordinat & Jarak Dua Titik",
    "subTopic": "Koordinat & Jarak Dua Titik",
    "chapterTitle": "Geometri Analitik Bidang",
    "difficultyLabel": "Mudah",
    "hint": "Titik tengah $M$ dari dua titik $(x_1, y_1)$ dan $(x_2, y_2)$ adalah rata-rata aritmetika dari koordinatnya: $M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)$. **Tips:** Melakukan pengurangan absis/ordinat alih-alih penjumlahan saat menghitung titik tengah."
  },
  {
    "id": "fun-geo-dasar-koordinat-003",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-geo",
    "subChapterId": "fun-geo-dasar",
    "subTopicId": "fun-geo-dasar-koordinat",
    "category": "Jarak Titik ke Pusat Koordinat",
    "difficulty": "mudah",
    "statement": "Jarak titik $P(-3, 4)$ ke titik pusat koordinat $O(0, 0)$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1$",
      "$3$",
      "$4$",
      "$5$",
      "$7$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Jarak suatu titik $(x, y)$ terhadap titik asal $(0, 0)$ dihitung dengan rumus $d = \\sqrt{x^2 + y^2}$.",
      "steps": "1. Masukkan koordinat titik $P(-3, 4)$ ke dalam rumus jarak ke titik asal:\n$$d = \\sqrt{(-3)^2 + 4^2}$$\n2. Kuadratkan masing-masing bilangan:\n$$(-3)^2 = 9$$\n$$4^2 = 16$$\n3. Hitung jumlahan dan akar kuadratnya:\n$$d = \\sqrt{9 + 16} = \\sqrt{25} = 5$$\n4. Jadi, jarak titik $P$ ke titik pusat adalah $5$ satuan (pilihan D).",
      "pitfalls": "Lupa bahwa kuadrat bilangan negatif bernilai positif $((-3)^2 = +9)$, bukan $-9$."
    },
    "subTopicSlug": "koordinat-jarak-dua-titik",
    "bab": "Geometri Analitik Bidang",
    "subBab": "Koordinat & Jarak Dua Titik",
    "subTopic": "Koordinat & Jarak Dua Titik",
    "chapterTitle": "Geometri Analitik Bidang",
    "difficultyLabel": "Mudah",
    "hint": "Jarak suatu titik $(x, y)$ terhadap titik asal $(0, 0)$ dihitung dengan rumus $d = \\sqrt{x^2 + y^2}$. **Tips:** Lupa bahwa kuadrat bilangan negatif bernilai positif $((-3)^2 = +9)$, bukan $-9$."
  },
  {
    "id": "fun-geo-dasar-koordinat-004",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-geo",
    "subChapterId": "fun-geo-dasar",
    "subTopicId": "fun-geo-dasar-koordinat",
    "category": "Menentukan Titik Ujung dari Titik Tengah",
    "difficulty": "mudah",
    "statement": "Titik tengah dari ruas garis $AB$ adalah $M(3, 5)$. Jika koordinat titik $A$ adalah $(1, 2)$, maka koordinat titik $B$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$(2, 3)$",
      "$(4, 7)$",
      "$(5, 8)$",
      "$(5, 7)$",
      "$(7, 12)$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Gunakan hubungan titik tengah: $x_B = 2x_M - x_A$ dan $y_B = 2y_M - y_A$.",
      "steps": "1. Tentukan absis titik $B$:\n$$\\frac{1 + x_B}{2} = 3 \\implies 1 + x_B = 6 \\implies x_B = 5$$\n2. Tentukan ordinat titik $B$:\n$$\\frac{2 + y_B}{2} = 5 \\implies 2 + y_B = 10 \\implies y_B = 8$$\n3. Satukan koordinat titik $B$:\n$$B = (5, 8)$$\n4. Jadi, koordinat titik $B$ adalah $(5, 8)$ (pilihan C).",
      "pitfalls": "Membagi dua selisih koordinat $M$ dan $A$ sehingga malah menghasilkan titik tengah antara $M$ dan $A$."
    },
    "subTopicSlug": "koordinat-jarak-dua-titik",
    "bab": "Geometri Analitik Bidang",
    "subBab": "Koordinat & Jarak Dua Titik",
    "subTopic": "Koordinat & Jarak Dua Titik",
    "chapterTitle": "Geometri Analitik Bidang",
    "difficultyLabel": "Mudah",
    "hint": "Gunakan hubungan titik tengah: $x_B = 2x_M - x_A$ dan $y_B = 2y_M - y_A$. **Tips:** Membagi dua selisih koordinat $M$ dan $A$ sehingga malah menghasilkan titik tengah antara $M$ dan $A$."
  },
  {
    "id": "fun-geo-dasar-koordinat-005",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-geo",
    "subChapterId": "fun-geo-dasar",
    "subTopicId": "fun-geo-dasar-koordinat",
    "category": "Jarak Dua Titik dengan Koordinat Negatif",
    "difficulty": "mudah",
    "statement": "Jarak antara dua titik $K(-2, 1)$ dan $L(6, 7)$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$8$",
      "$10$",
      "$\\sqrt{52}$",
      "$12$",
      "$14$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Perhatikan tanda negatif saat menghitung selisih koordinat: $\\Delta x = x_2 - x_1 = 6 - (-2) = 8$.",
      "steps": "1. Hitung selisih absis:\n$$\\Delta x = 6 - (-2) = 6 + 2 = 8$$\n2. Hitung selisih ordinat:\n$$\\Delta y = 7 - 1 = 6$$\n3. Hitung jarak dengan teorema Pythagoras:\n$$d = \\sqrt{8^2 + 6^2} = \\sqrt{64 + 36} = \\sqrt{100} = 10$$\n4. Jadi, jarak antara titik $K$ dan $L$ adalah $10$ satuan (pilihan B).",
      "pitfalls": "Salah menghitung selisih absis menjadi $6 - 2 = 4$ karena melupakan tanda negatif pada titik koordinat awal."
    },
    "subTopicSlug": "koordinat-jarak-dua-titik",
    "bab": "Geometri Analitik Bidang",
    "subBab": "Koordinat & Jarak Dua Titik",
    "subTopic": "Koordinat & Jarak Dua Titik",
    "chapterTitle": "Geometri Analitik Bidang",
    "difficultyLabel": "Mudah",
    "hint": "Perhatikan tanda negatif saat menghitung selisih koordinat: $\\Delta x = x_2 - x_1 = 6 - (-2) = 8$."
  },
  {
    "id": "fun-geo-dasar-koordinat-006",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-geo",
    "subChapterId": "fun-geo-dasar",
    "subTopicId": "fun-geo-dasar-koordinat",
    "category": "Menentukan Nilai Parameter dari Jarak Dua Titik",
    "difficulty": "sedang",
    "statement": "Diketahui jarak antara titik $A(2, p)$ dan titik $B(6, 1)$ adalah $5$ satuan panjang. Jika $p$ bernilai positif ($p > 0$), maka nilai dari $p$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2$",
      "$3$",
      "$4$",
      "$5$",
      "$6$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Gunakan rumus kuadrat jarak dua titik $d^2 = (x_2 - x_1)^2 + (y_2 - y_1)^2$ untuk membentuk persamaan kuadrat variabel $p$.",
      "steps": "1. Substitusikan data titik dan jarak ke rumus kuadrat jarak:\n$$d^2 = (6 - 2)^2 + (1 - p)^2$$\n$$5^2 = 4^2 + (1 - p)^2$$\n$$25 = 16 + (1 - p)^2$$\n2. Kurangkan kedua ruas dengan 16:\n$$(1 - p)^2 = 25 - 16 = 9$$\n3. Tarik akar kuadrat pada kedua ruas:\n$$1 - p = 3 \\implies p = -2$$\n$$1 - p = -3 \\implies p = 4$$\n4. Karena disyaratkan $p > 0$, maka nilai yang memenuhi adalah $p = 4$.\n5. Jadi, nilai $p$ adalah $4$ (pilihan C).",
      "pitfalls": "Memilih nilai negatif $p = -2$ tanpa memperhatikan batasan $p > 0$ yang diberikan pada soal."
    },
    "subTopicSlug": "koordinat-jarak-dua-titik",
    "bab": "Geometri Analitik Bidang",
    "subBab": "Koordinat & Jarak Dua Titik",
    "subTopic": "Koordinat & Jarak Dua Titik",
    "chapterTitle": "Geometri Analitik Bidang",
    "difficultyLabel": "Sedang",
    "hint": "Gunakan rumus kuadrat jarak dua titik $d^2 = (x_2 - x_1)^2 + (y_2 - y_1)^2$ untuk membentuk persamaan kuadrat variabel $p$. **Tips:** Memilih nilai negatif $p = -2$ tanpa memperhatikan batasan $p > 0$ yang diberikan pada soal."
  },
  {
    "id": "fun-geo-dasar-koordinat-007",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-geo",
    "subChapterId": "fun-geo-dasar",
    "subTopicId": "fun-geo-dasar-koordinat",
    "category": "Tempat Kedudukan Titik Berjarak Sama",
    "difficulty": "sedang",
    "statement": "Titik $P(x, y)$ memiliki jarak yang sama terhadap titik $A(1, 2)$ dan titik $B(3, 4)$. Persamaan garis tempat kedudukan titik $P$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$x + y - 5 = 0$",
      "$x - y + 1 = 0$",
      "$x + y - 6 = 0$",
      "$2x + y - 7 = 0$",
      "$x + 2y - 5 = 0$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Kondisi jarak sama $PA = PB \\iff PA^2 = PB^2$ menghasilkan persamaan garis bagi tegak lurus (garis sumbu) dari ruas garis $AB$.",
      "steps": "1. Tuliskan kesamaan kuadrat jarak $PA^2 = PB^2$:\n$$(x - 1)^2 + (y - 2)^2 = (x - 3)^2 + (y - 4)^2$$\n2. Jabarkan kedua bentuk kuadrat:\n$$x^2 - 2x + 1 + y^2 - 4y + 4 = x^2 - 6x + 9 + y^2 - 8y + 16$$\n$$x^2 + y^2 - 2x - 4y + 5 = x^2 + y^2 - 6x - 8y + 25$$\n3. Hilangkan suku $x^2 + y^2$ dan pindahkan seluruh suku ke ruas kiri:\n$$(-2x + 6x) + (-4y + 8y) + (5 - 25) = 0$$\n$$4x + 4y - 20 = 0$$\n4. Bagi seluruh persamaan dengan 4:\n$$x + y - 5 = 0$$\n5. Jadi, persamaan garisnya adalah $x + y - 5 = 0$ (pilihan A).",
      "pitfalls": "Lupa menjabarkan suku tengah bentuk kuadrat binomial sehingga suku berderajat satu hilang."
    },
    "subTopicSlug": "koordinat-jarak-dua-titik",
    "bab": "Geometri Analitik Bidang",
    "subBab": "Koordinat & Jarak Dua Titik",
    "subTopic": "Koordinat & Jarak Dua Titik",
    "chapterTitle": "Geometri Analitik Bidang",
    "difficultyLabel": "Sedang",
    "hint": "Kondisi jarak sama $PA = PB \\iff PA^2 = PB^2$ menghasilkan persamaan garis bagi tegak lurus (garis sumbu) dari ruas garis $AB$. **Tips:** Lupa menjabarkan suku tengah bentuk kuadrat binomial sehingga suku berderajat satu hilang."
  },
  {
    "id": "fun-geo-dasar-koordinat-008",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-geo",
    "subChapterId": "fun-geo-dasar",
    "subTopicId": "fun-geo-dasar-koordinat",
    "category": "Pembagian Ruas Garis dengan Perbandingan Tertentu",
    "difficulty": "sedang",
    "statement": "Titik $C$ terletak pada ruas garis $AB$ sedemikian sehingga $AC : CB = 2 : 1$. Jika koordinat titik $A(1, 2)$ dan $B(7, 8)$, maka koordinat titik $C$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$(3, 4)$",
      "$(4, 5)$",
      "$(5, 6)$",
      "$(6, 7)$",
      "$(5, 7)$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Koordinat titik pembagi berbobot $m : n$ dirumuskan sebagai $x_C = \\frac{m \\cdot x_B + n \\cdot x_A}{m + n}$ dan $y_C = \\frac{m \\cdot y_B + n \\cdot y_A}{m + n}$.",
      "steps": "1. Terapkan rumus pembagian ruas garis dengan $m = 2$ dan $n = 1$:\n$$x_C = \\frac{2(x_B) + 1(x_A)}{2 + 1} = \\frac{2(7) + 1(1)}{3} = \\frac{14 + 1}{3} = \\frac{15}{3} = 5$$\n2. Hitung ordinat titik $C$:\n$$y_C = \\frac{2(y_B) + 1(y_A)}{2 + 1} = \\frac{2(8) + 1(2)}{3} = \\frac{16 + 2}{3} = \\frac{18}{3} = 6$$\n3. Gabungkan koordinat titik $C$:\n$$C = (5, 6)$$\n4. Jadi, koordinat titik $C$ adalah $(5, 6)$ (pilihan C).",
      "pitfalls": "Tertukar bobot perbandingan dengan mengalikan $m$ ke titik $A$ dan $n$ ke titik $B$ sehingga menghasilkan $(3, 4)$."
    },
    "subTopicSlug": "koordinat-jarak-dua-titik",
    "bab": "Geometri Analitik Bidang",
    "subBab": "Koordinat & Jarak Dua Titik",
    "subTopic": "Koordinat & Jarak Dua Titik",
    "chapterTitle": "Geometri Analitik Bidang",
    "difficultyLabel": "Sedang",
    "hint": "Koordinat titik pembagi berbobot $m : n$ dirumuskan sebagai $x_C = \\frac{m \\cdot x_B + n \\cdot x_A}{m + n}$ dan $y_C = \\frac{m \\cdot y_B + n \\cdot y_A}{m + n}$. **Tips:** Tertukar bobot perbandingan dengan mengalikan $m$ ke titik $A$ dan $n$ ke titik $B$ sehingga menghasilkan $(3, 4)$."
  },
  {
    "id": "fun-geo-dasar-koordinat-009",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-geo",
    "subChapterId": "fun-geo-dasar",
    "subTopicId": "fun-geo-dasar-koordinat",
    "category": "Keliling Bangun Datar dari Titik Sudut Koordinat",
    "difficulty": "sedang",
    "statement": "Sebuah segitiga memiliki titik-titik sudut di $A(0, 0)$, $B(6, 0)$, dan $C(3, 4)$. Keliling segitiga $ABC$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$12\\text{ satuan}$",
      "$14\\text{ satuan}$",
      "$16\\text{ satuan}$",
      "$18\\text{ satuan}$",
      "$20\\text{ satuan}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Keliling segitiga adalah jumlahan panjang ketiga sisinya: $K = AB + BC + CA$.",
      "steps": "1. Panjang sisi $AB$ (sepanjang sumbu-$X$):\n$$AB = |6 - 0| = 6$$\n2. Panjang sisi $AC$:\n$$AC = \\sqrt{(3 - 0)^2 + (4 - 0)^2} = \\sqrt{3^2 + 4^2} = 5$$\n3. Panjang sisi $BC$:\n$$BC = \\sqrt{(3 - 6)^2 + (4 - 0)^2} = \\sqrt{(-3)^2 + 4^2} = \\sqrt{9 + 16} = 5$$\n4. Hitung keliling segitiga:\n$$K = AB + BC + AC = 6 + 5 + 5 = 16$$\n5. Jadi, keliling segitiga $ABC$ adalah $16\\text{ satuan}$ (pilihan C).",
      "pitfalls": "Menghitung luas $(\\frac{1}{2} \\times 6 \\times 4 = 12)$ alih-alih keliling segitiga."
    },
    "subTopicSlug": "koordinat-jarak-dua-titik",
    "bab": "Geometri Analitik Bidang",
    "subBab": "Koordinat & Jarak Dua Titik",
    "subTopic": "Koordinat & Jarak Dua Titik",
    "chapterTitle": "Geometri Analitik Bidang",
    "difficultyLabel": "Sedang",
    "hint": "Keliling segitiga adalah jumlahan panjang ketiga sisinya: $K = AB + BC + CA$."
  },
  {
    "id": "fun-geo-dasar-koordinat-010",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-geo",
    "subChapterId": "fun-geo-dasar",
    "subTopicId": "fun-geo-dasar-koordinat",
    "category": "Menentukan Titik Berat Segitiga Koordinat",
    "difficulty": "sedang",
    "statement": "Koordinat titik berat segitiga dengan titik-titik sudut $P(2, 4)$, $Q(6, -2)$, dan $R(4, 7)$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$(3, 3)$",
      "$(4, 3)$",
      "$(4, 4)$",
      "$(5, 3)$",
      "$(6, 4)$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Titik berat (centroid) segitiga dengan titik-titik sudut $(x_1, y_1)$, $(x_2, y_2)$, dan $(x_3, y_3)$ dirumuskan sebagai $G = \\left(\\frac{x_1 + x_2 + x_3}{3}, \\frac{y_1 + y_2 + y_3}{3}\\right)$.",
      "steps": "1. Hitung rata-rata absis ketiga titik sudut:\n$$x_G = \\frac{2 + 6 + 4}{3} = \\frac{12}{3} = 4$$\n2. Hitung rata-rata ordinat ketiga titik sudut:\n$$y_G = \\frac{4 + (-2) + 7}{3} = \\frac{9}{3} = 3$$\n3. Gabungkan koordinat titik berat:\n$$G = (4, 3)$$\n4. Jadi, koordinat titik berat segitiga tersebut adalah $(4, 3)$ (pilihan B).",
      "pitfalls": "Membagi jumlah koordinat dengan 2 (seperti rumus titik tengah) bukannya membagi dengan 3."
    },
    "subTopicSlug": "koordinat-jarak-dua-titik",
    "bab": "Geometri Analitik Bidang",
    "subBab": "Koordinat & Jarak Dua Titik",
    "subTopic": "Koordinat & Jarak Dua Titik",
    "chapterTitle": "Geometri Analitik Bidang",
    "difficultyLabel": "Sedang",
    "hint": "Titik berat (centroid) segitiga dengan titik-titik sudut $(x_1, y_1)$, $(x_2, y_2)$, dan $(x_3, y_3)$ dirumuskan sebagai $G = \\left(\\frac{x_1 + x_2 + x_3}{3}, \\frac{y_1 + y_2 + y_3}{3}\\right)$. **Tips:** Membagi jumlah koordinat dengan 2 (seperti rumus titik tengah) bukannya membagi dengan 3."
  },
  {
    "id": "sup-mtk-fun-03",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-geo",
    "subTopicId": "fun-geo-dasar-koordinat",
    "category": "Jarak Antartitik Koordinat Kartesius",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Jarak Euclidean antara titik koordinat $A(-2, 3)$ dan titik $B(4, -5)$ pada bidang Kartesius adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$10$",
      "$12$",
      "$8$",
      "$\\sqrt{74}$",
      "$14$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Rumus Jarak Dua Titik Bidang Kartesius:</strong><br>$d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$.</div>",
      "steps": "<ol><li>$\\Delta x = 4 - (-2) = 6$.</li><li>$\\Delta y = -5 - 3 = -8$.</li><li>$d = \\sqrt{6^2 + (-8)^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Salah dalam operasi tanda negatif: $4 - (-2) \\neq 2$.</div>"
    },
    "bab": "Geometri Analitik Bidang",
    "subBab": "Koordinat & Jarak Dua Titik",
    "subTopic": "Koordinat & Jarak Dua Titik",
    "chapterTitle": "Geometri Analitik Bidang",
    "subChapterId": "fun-geo-dasar",
    "subTopicSlug": "koordinat-jarak-dua-titik",
    "hint": "Gunakan hubungan matematis dasar: $d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$. **Tips:** Salah dalam operasi tanda negatif: $4 - (-2) \\neq 2$."
  }
];

  // Self-register to browser global namespace
  if (typeof window !== "undefined") {
    window.TKA_BANK_SOAL = window.TKA_BANK_SOAL || {};
    window.TKA_BANK_SOAL[subTopicId] = questions;
    window.TKA_BANK_SOAL[subTopicSlug] = questions;
  }

  // CommonJS Node.js export
  if (typeof module !== "undefined" && module.exports) {
    module.exports = questions;
  }
})();
