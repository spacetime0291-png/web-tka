/**
 * Bank Soal TKA: Matematika Lanjut (TKA) - Aljabar
 * Bab Kecil: Polinomial (mat-alj-polinom)
 * Sub-Bab: Operasi Aljabar Polinomial (mat-alj-polinom-operasi)
 * Slug: operasi-aljabar-polinomial
 * Indikator: Derajat polinomial, penjumlahan, pengurangan, perkalian, dan kesamaan suku banyak.
 * 
 * Total Butir Soal: 10 (Mudah: 5, Sedang: 5, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "mat-alj-polinom-operasi";
  const subTopicSlug = "operasi-aljabar-polinomial";
  const questions = [
  {
    "id": "mat-alj-polinom-operasi-001",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-polinom",
    "subTopicId": "mat-alj-polinom-operasi",
    "category": "Derajat dan Koefisien Utama Polinomial",
    "difficulty": "mudah",
    "statement": "Diberikan polinomial $P(x) = (3x^2 - 2)(2x^3 + 5x - 1)$. Derajat dari polinomial $P(x)$ serta koefisien utama dari suku dengan derajat tertinggi tersebut berturut-turut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Derajat 5 dan koefisien 6",
      "Derajat 6 dan koefisien 6",
      "Derajat 5 dan koefisien 5",
      "Derajat 6 dan koefisien 5",
      "Derajat 5 dan koefisien 10"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Derajat hasil perkalian dua polinomial $P(x)$ dan $Q(x)$ adalah jumlah dari derajat masing-masing polinomial faktor: $\\deg(P \\cdot Q) = \\deg(P) + \\deg(Q)$. Koefisien utama adalah hasil kali koefisien dari suku-suku berderajat tertinggi kedua faktor.",
      "steps": "1. Identifikasi faktor pertama $(3x^2 - 2)$: suku tertinggi adalah $3x^2$ dengan derajat 2 dan koefisien 3.<br>2. Identifikasi faktor kedua $(2x^3 + 5x - 1)$: suku tertinggi adalah $2x^3$ dengan derajat 3 dan koefisien 2.<br>3. Hitung derajat polinomial hasil kali: $\\deg(P) = 2 + 3 = 5$.<br>4. Hitung koefisien utama: $(3) \\times (2) = 6$.<br>5. Jadi polinomial memiliki derajat 5 dan koefisien utama 6 (pilihan A).",
      "pitfalls": "Mengalikan pangkat alih-alih menjumlahkannya ($2 \\times 3 = 6$) sehingga mengira berderajat 6."
    },
    "subTopicSlug": "operasi-aljabar-polinomial",
    "bab": "Aljabar",
    "subBab": "Operasi Aljabar Polinomial",
    "subTopic": "Operasi Aljabar Polinomial",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah",
    "hint": "Derajat hasil perkalian dua polinomial $P(x)$ dan $Q(x)$ adalah jumlah dari derajat masing-masing polinomial faktor: $\\deg(P \\cdot Q) = \\deg(P) + \\deg(Q)$. Koefisien utama adalah hasil kali koefisien dari suku-suku berderajat tertinggi kedua faktor."
  },
  {
    "id": "mat-alj-polinom-operasi-002",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-polinom",
    "subTopicId": "mat-alj-polinom-operasi",
    "category": "Pengurangan dan Perkalian Skalar Polinomial",
    "difficulty": "mudah",
    "statement": "Diketahui polinomial $P(x) = 4x^3 - 2x^2 + 5x - 7$ dan $Q(x) = 2x^3 + 3x^2 - x + 4$. Bentuk sederhana dari $P(x) - 2Q(x)$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-8x^2 + 7x - 15$",
      "$-8x^2 + 3x - 15$",
      "$8x^3 - 8x^2 + 7x - 15$",
      "$-8x^2 + 7x + 1$",
      "$-4x^2 + 7x - 15$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Operasi aljabar suku banyak dilakukan dengan mengelompokkan suku-suku yang memiliki variabel dengan pangkat sama (suku sejenis) setelah menerapkan sifat distributif perkalian tanda dan skalar.",
      "steps": "1. Tuliskan operasi: $P(x) - 2Q(x) = (4x^3 - 2x^2 + 5x - 7) - 2(2x^3 + 3x^2 - x + 4)$.<br>2. Kalikan skalar $-2$ ke setiap suku di dalam $Q(x)$:<br>$$P(x) - 2Q(x) = 4x^3 - 2x^2 + 5x - 7 - 4x^3 - 6x^2 + 2x - 8$$<br>3. Gabungkan suku-suku sejenis:<br>- Suku $x^3$: $(4 - 4)x^3 = 0x^3$<br>- Suku $x^2$: $(-2 - 6)x^2 = -8x^2$<br>- Suku $x$: $(5 + 2)x = 7x$<br>- Konstanta: $-7 - 8 = -15$<br>4. Diperoleh bentuk akhir: $-8x^2 + 7x - 15$ (pilihan A).",
      "pitfalls": "Lupa mengubah tanda pada suku $-x$ saat dikalikan dengan $-2$, sehingga menghasilkan $-2(-x) = -2x$ padahal seharusnya $+2x$."
    },
    "subTopicSlug": "operasi-aljabar-polinomial",
    "bab": "Aljabar",
    "subBab": "Operasi Aljabar Polinomial",
    "subTopic": "Operasi Aljabar Polinomial",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah",
    "hint": "Operasi aljabar suku banyak dilakukan dengan mengelompokkan suku-suku yang memiliki variabel dengan pangkat sama (suku sejenis) setelah menerapkan sifat distributif perkalian tanda dan skalar. **Tips:** Lupa mengubah tanda pada suku $-x$ saat dikalikan dengan $-2$, sehingga menghasilkan $-2(-x) = -2x$ padahal seharusnya $+2x$."
  },
  {
    "id": "mat-alj-polinom-operasi-003",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-polinom",
    "subTopicId": "mat-alj-polinom-operasi",
    "category": "Evaluasi Nilai Suku Banyak",
    "difficulty": "mudah",
    "statement": "Nilai numerik dari suku banyak $F(x) = 2x^4 - 3x^3 + x^2 - 5x + 6$ untuk $x = 2$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "4",
      "6",
      "8",
      "10",
      "12"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Nilai suku banyak $F(x)$ untuk $x = k$ diperoleh dengan mensubstitusikan nilai $k$ secara langsung ke setiap variabel $x$ pada suku banyak tersebut.",
      "steps": "1. Substitusikan nilai $x = 2$ ke dalam $F(x)$:<br>$$F(2) = 2(2)^4 - 3(2)^3 + (2)^2 - 5(2) + 6$$<br>2. Hitung nilai perpangkatan:<br>$$2^4 = 16, \\quad 2^3 = 8, \\quad 2^2 = 4$$<br>3. Kalikan dengan koefisien masing-masing suku:<br>$$F(2) = 2(16) - 3(8) + 4 - 10 + 6 = 32 - 24 + 4 - 10 + 6$$<br>4. Selesaikan penjumlahan dan pengurangan:<br>$$F(2) = 8 + 4 - 10 + 6 = 8$$<br>5. Jadi nilai suku banyak $F(2)$ adalah 8 (pilihan C).",
      "pitfalls": "Kesalahan urutan operasi hitung antara perpangkatan dan perkalian koefisien, seperti menghitung $2(2)^4$ menjadi $(2 \\times 2)^4 = 256$."
    },
    "subTopicSlug": "operasi-aljabar-polinomial",
    "bab": "Aljabar",
    "subBab": "Operasi Aljabar Polinomial",
    "subTopic": "Operasi Aljabar Polinomial",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah",
    "hint": "Nilai suku banyak $F(x)$ untuk $x = k$ diperoleh dengan mensubstitusikan nilai $k$ secara langsung ke setiap variabel $x$ pada suku banyak tersebut."
  },
  {
    "id": "mat-alj-polinom-operasi-004",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-polinom",
    "subTopicId": "mat-alj-polinom-operasi",
    "category": "Kesamaan Suku Banyak Pecahan Parsial",
    "difficulty": "mudah",
    "statement": "Diketahui kesamaan aljabar pecahan rasional:\n$$\\frac{5x - 2}{(x - 2)(x + 1)} \\equiv \\frac{A}{x - 2} + \\frac{B}{x + 1}$$\nNilai dari penjumlahan konstanta $A + B$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "3",
      "4",
      "5",
      "6",
      "7"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Dua bentuk pecahan aljabar dikatakan identik jika pembilangnya bernilai sama untuk semua nilai variabel $x$. Dengan menyamakan penyebut ruas kanan, kesamaan pembilang dapat langsung dianalisis.",
      "steps": "1. Samakan penyebut pada ruas kanan:\n$$\\frac{A(x + 1) + B(x - 2)}{(x - 2)(x + 1)} = \\frac{5x - 2}{(x - 2)(x + 1)}$$\n2. Samakan bagian pembilang kedua ruas:\n$$5x - 2 \\equiv A(x + 1) + B(x - 2) = (A + B)x + (A - 2B)$$\n3. Berdasarkan prinsip kesamaan polinomial, koefisien variabel $x$ pada ruas kiri harus sama dengan koefisien variabel $x$ pada ruas kanan:\n$$A + B = 5$$\n4. Jadi nilai dari $A + B$ langsung diperoleh bernilai 5 (pilihan C).",
      "pitfalls": "Menghabiskan waktu menghitung nilai $A$ dan $B$ secara terpisah padahal soal langsung menanyakan jumlah koefisien $(A + B)$."
    },
    "subTopicSlug": "operasi-aljabar-polinomial",
    "bab": "Aljabar",
    "subBab": "Operasi Aljabar Polinomial",
    "subTopic": "Operasi Aljabar Polinomial",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah",
    "hint": "Dua bentuk pecahan aljabar dikatakan identik jika pembilangnya bernilai sama untuk semua nilai variabel $x$. Dengan menyamakan penyebut ruas kanan, kesamaan pembilang dapat langsung dianalisis. **Tips:** Menghabiskan waktu menghitung nilai $A$ dan $B$ secara terpisah padahal soal langsung menanyakan jumlah koefisien $(A + B)$."
  },
  {
    "id": "mat-alj-polinom-operasi-005",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-polinom",
    "subTopicId": "mat-alj-polinom-operasi",
    "category": "Koefisien Suku Hasil Perkalian Polinomial",
    "difficulty": "mudah",
    "statement": "Koefisien dari suku $x^3$ pada hasil ekspansi perkalian polinomial $(2x^2 - x + 3)(x^2 + 4x - 5)$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "5",
      "6",
      "7",
      "8",
      "9"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Koefisien dari suku berpangkat tertentu (misalnya $x^3$) pada perkalian dua polinomial dapat diperoleh cukup dengan menjumlahkan hasil kali suku-suku yang jumlah pangkatnya sama dengan 3, tanpa perlu menjabarkan seluruh suku.",
      "steps": "1. Tinjau pasangan suku yang menghasilkan variabel $x^3$:\n- Dari faktor pertama suku $x^2$ ($2x^2$) dikali suku $x$ dari faktor kedua ($4x$): $(2x^2)(4x) = 8x^3$\n- Dari faktor pertama suku $x$ ($-x$) dikali suku $x^2$ dari faktor kedua ($x^2$): $(-x)(x^2) = -x^3$\n- Suku konstanta tidak dapat berpasangan menghasilkan $x^3$ karena faktor lainnya berderajat maksimum 2.\n2. Jumlahkan suku-suku sejenis tersebut:\n$$8x^3 - x^3 = 7x^3$$\n3. Jadi koefisien dari suku $x^3$ adalah 7 (pilihan C).",
      "pitfalls": "Lupa menyertakan tanda minus pada koefisien suku $(-x)$ sehingga salah menghitung $8 + 1 = 9$."
    },
    "subTopicSlug": "operasi-aljabar-polinomial",
    "bab": "Aljabar",
    "subBab": "Operasi Aljabar Polinomial",
    "subTopic": "Operasi Aljabar Polinomial",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah",
    "hint": "Koefisien dari suku berpangkat tertentu (misalnya $x^3$) pada perkalian dua polinomial dapat diperoleh cukup dengan menjumlahkan hasil kali suku-suku yang jumlah pangkatnya sama dengan 3, tanpa perlu menjabarkan seluruh suku."
  },
  {
    "id": "mat-alj-polinom-operasi-006",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-polinom",
    "subTopicId": "mat-alj-polinom-operasi",
    "category": "Kesamaan Suku Banyak Derajat Tiga",
    "difficulty": "sedang",
    "statement": "Diketahui kesamaan suku banyak:\n$$x^3 - 2x^2 + 5x - 4 \\equiv (x - 1)(ax^2 + bx + c) + d$$\nNilai dari penjumlahan konstanta $a + b + c + d$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "2",
      "3",
      "4",
      "5",
      "6"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Dua suku banyak bernilai identik ($equiv$) jika dan hanya jika koefisien suku-suku yang bersesuaian pada kedua ruas bernilai sama untuk setiap derajat variabel $x$.",
      "steps": "1. Jabarkan ruas kanan:\n$$(x - 1)(ax^2 + bx + c) + d = ax^3 + (b - a)x^2 + (c - b)x + (d - c)$$\n2. Samakan koefisien dengan ruas kiri ($x^3 - 2x^2 + 5x - 4$):\n- Koefisien $x^3$: $a = 1$\n- Koefisien $x^2$: $b - a = -2 \\implies b - 1 = -2 \\implies b = -1$\n- Koefisien $x$: $c - b = 5 \\implies c - (-1) = 5 \\implies c = 4$\n- Konstanta: $d - c = -4 \\implies d - 4 = -4 \\implies d = 0$\n3. Hitung nilai yang ditanyakan:\n$$a + b + c + d = 1 + (-1) + 4 + 0 = 4$$\n4. Jadi nilai $a + b + c + d$ adalah 4 (pilihan C).",
      "pitfalls": "Salah tanda pada saat menyamakan koefisien $c - (-1) = c + 1$ atau salah memindahkan ruas."
    },
    "subTopicSlug": "operasi-aljabar-polinomial",
    "bab": "Aljabar",
    "subBab": "Operasi Aljabar Polinomial",
    "subTopic": "Operasi Aljabar Polinomial",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang",
    "hint": "Dua suku banyak bernilai identik ($equiv$) jika dan hanya jika koefisien suku-suku yang bersesuaian pada kedua ruas bernilai sama untuk setiap derajat variabel $x$. **Tips:** Salah tanda pada saat menyamakan koefisien $c - (-1) = c + 1$ atau salah memindahkan ruas."
  },
  {
    "id": "mat-alj-polinom-operasi-007",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-polinom",
    "subTopicId": "mat-alj-polinom-operasi",
    "category": "Jumlah Seluruh Koefisien Polinomial",
    "difficulty": "sedang",
    "statement": "Jumlah seluruh koefisien dari hasil ekspansi suku banyak $P(x) = (2x^2 - 3x + 2)^{2024} - (x^3 - x + 1)^{2025}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "-1",
      "0",
      "1",
      "2",
      "2024"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Jumlah seluruh koefisien dari suatu polinomial $P(x)$ dapat ditentukan secara langsung dengan mengevaluasi nilai fungsi polinomial tersebut pada $x = 1$, yaitu menghitung $P(1)$.",
      "steps": "1. Terapkan prinsip dasar: $\\sum \\text{koefisien} = P(1)$.\n2. Substitusikan $x = 1$ ke dalam bentuk polinomial:\n$$P(1) = \\left(2(1)^2 - 3(1) + 2\\right)^{2024} - \\left(1^3 - 1 + 1\\right)^{2025}$$\n3. Sederhanakan nilai di dalam tanda kurung:\n- Bagian pertama: $(2 - 3 + 2)^{2024} = (1)^{2024} = 1$\n- Bagian kedua: $(1 - 1 + 1)^{2025} = (1)^{2025} = 1$\n4. Hitung hasil pengurangannya:\n$$P(1) = 1 - 1 = 0$$\n5. Jadi jumlah seluruh koefisien polinomial tersebut adalah 0 (pilihan B).",
      "pitfalls": "Mencoba menjabarkan ekspansi binomial berpangkat 2024 yang mustahil dilakukan secara manual."
    },
    "subTopicSlug": "operasi-aljabar-polinomial",
    "bab": "Aljabar",
    "subBab": "Operasi Aljabar Polinomial",
    "subTopic": "Operasi Aljabar Polinomial",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang",
    "hint": "Jumlah seluruh koefisien dari suatu polinomial $P(x)$ dapat ditentukan secara langsung dengan mengevaluasi nilai fungsi polinomial tersebut pada $x = 1$, yaitu menghitung $P(1)$. **Tips:** Mencoba menjabarkan ekspansi binomial berpangkat 2024 yang mustahil dilakukan secara manual."
  },
  {
    "id": "mat-alj-polinom-operasi-008",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-polinom",
    "subTopicId": "mat-alj-polinom-operasi",
    "category": "Ekspansi Binomial dan Kesamaan Koefisien",
    "difficulty": "sedang",
    "statement": "Diketahui hasil ekspansi polinomial memenuhi kesamaan:\n$$(1 + ax)(1 - 2x)^4 \\equiv 1 - 5x + bx^2 + \\dots$$\nNilai dari $a$ dan $b$ berturut-turut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$a = 3$ dan $b = 0$",
      "$a = 3$ dan $b = 6$",
      "$a = -3$ dan $b = 48$",
      "$a = 2$ dan $b = 8$",
      "$a = 4$ dan $b = -8$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Gunakan teorema binomial Newton $(1 + y)^n = 1 + n y + \\frac{n(n-1)}{2} y^2 + \\dots$ untuk mengekspansi $(1 - 2x)^4$, kemudian kalikan dengan faktor linear $(1 + ax)$.",
      "steps": "1. Jabarkan $(1 - 2x)^4$ hingga suku berderajat 2:\n$$(1 - 2x)^4 = 1 + 4(-2x) + \\frac{4 \\times 3}{2}(-2x)^2 = 1 - 8x + 24x^2$$\n2. Kalikan dengan $(1 + ax)$:\n$$(1 + ax)(1 - 8x + 24x^2) = 1 - 8x + 24x^2 + ax - 8ax^2 + \\dots = 1 + (a - 8)x + (24 - 8a)x^2 + \\dots$$\n3. Samakan dengan koefisien ruas kanan ($1 - 5x + bx^2$):\n- Koefisien $x$: $a - 8 = -5 \\implies a = 3$\n- Koefisien $x^2$: $b = 24 - 8a = 24 - 8(3) = 24 - 24 = 0$\n4. Jadi diperoleh nilai $a = 3$ dan $b = 0$ (pilihan A).",
      "pitfalls": "Lupa mengalikan kuadrat pada suku $-2x$ (yaitu $(-2)^2 = 4$) sehingga koefisien binomial menjadi keliru."
    },
    "subTopicSlug": "operasi-aljabar-polinomial",
    "bab": "Aljabar",
    "subBab": "Operasi Aljabar Polinomial",
    "subTopic": "Operasi Aljabar Polinomial",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang",
    "hint": "Gunakan teorema binomial Newton $(1 + y)^n = 1 + n y + \\frac{n(n-1)}{2} y^2 + \\dots$ untuk mengekspansi $(1 - 2x)^4$, kemudian kalikan dengan faktor linear $(1 + ax)$."
  },
  {
    "id": "mat-alj-polinom-operasi-009",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-polinom",
    "subTopicId": "mat-alj-polinom-operasi",
    "category": "Penentuan Polinomial dari Titik Sampel",
    "difficulty": "sedang",
    "statement": "Sebuah polinomial kuadrat $f(x) = ax^2 + bx + c$ memenuhi nilai $f(1) = 2$, $f(2) = 5$, dan $f(3) = 10$. Nilai dari $f(5)$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "20",
      "24",
      "25",
      "26",
      "28"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Polinomial berderajat 2 ditentukan secara tunggal oleh 3 titik berbeda. Pola nilai fungsi atau metode beda hingga (*finite differences*) dapat digunakan untuk mengidentifikasi rumus eksplisit $f(x)$.",
      "steps": "1. Amati pola nilai $f(x)$:\n- $f(1) = 2 = 1^2 + 1$\n- $f(2) = 5 = 2^2 + 1$\n- $f(3) = 10 = 3^2 + 1$\n2. Tinjau polinomial $g(x) = f(x) - (x^2 + 1)$. Karena $f(x)$ berderajat paling tinggi 2 dan bernilai sama dengan $x^2 + 1$ di 3 titik berbeda ($x = 1, 2, 3$), maka menurut Teorema Fundamental Aljabar, $g(x) equiv 0$.\n3. Dengan demikian rumus fungsi secara eksak adalah $f(x) = x^2 + 1$.\n4. Hitung nilai $f(5)$:\n$$f(5) = 5^2 + 1 = 25 + 1 = 26$$\n5. Jadi nilai dari $f(5)$ adalah 26 (pilihan D).",
      "pitfalls": "Menghitung secara eliminasi manual 3 variabel yang rawan salah hitung tanda aljabar."
    },
    "subTopicSlug": "operasi-aljabar-polinomial",
    "bab": "Aljabar",
    "subBab": "Operasi Aljabar Polinomial",
    "subTopic": "Operasi Aljabar Polinomial",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang",
    "hint": "Polinomial berderajat 2 ditentukan secara tunggal oleh 3 titik berbeda. Pola nilai fungsi atau metode beda hingga (*finite differences*) dapat digunakan untuk mengidentifikasi rumus eksplisit $f(x)$. **Tips:** Menghitung secara eliminasi manual 3 variabel yang rawan salah hitung tanda aljabar."
  },
  {
    "id": "mat-alj-polinom-operasi-010",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-polinom",
    "subTopicId": "mat-alj-polinom-operasi",
    "category": "Pecahan Parsial dengan Penyebut Kuadrat Tak Teruraikan",
    "difficulty": "sedang",
    "statement": "Diketahui kesamaan pecahan aljabar polinomial:\n$$\\frac{4x^2 - 3x + 5}{(x - 1)(x^2 + 2)} \\equiv \\frac{A}{x - 1} + \\frac{Bx + C}{x^2 + 2}$$\nNilai dari penjumlahan konstanta $A + B + C$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Dekomposisi pecahan parsial dengan faktor kuadrat definit $x^2 + 2$ memiliki pembilang berbentuk linear $(Bx + C)$. Kesamaan pembilang diselesaikan dengan substitusi nilai strategis atau menyamakan koefisien.",
      "steps": "1. Samakan penyebut kedua ruas sehingga pembilangnya identik:\n$$4x^2 - 3x + 5 \\equiv A(x^2 + 2) + (Bx + C)(x - 1)$$\n2. Substitusikan $x = 1$ untuk mengeliminasi suku $(Bx + C)$:\n$$4(1)^2 - 3(1) + 5 = A(1^2 + 2) + 0 \\implies 6 = 3A \\implies A = 2$$\n3. Samakan koefisien suku $x^2$ pada kedua ruas:\n$$4 = A + B \\implies 4 = 2 + B \\implies B = 2$$\n4. Samakan suku konstanta dengan mensubstitusikan $x = 0$:\n$$5 = A(2) + C(-1) \\implies 5 = 2(2) - C \\implies 5 = 4 - C \\implies C = -1$$\n5. Hitung nilai penjumlahan $A + B + C$:\n$$A + B + C = 2 + 2 + (-1) = 3$$\n6. Jadi nilai $A + B + C$ adalah 3 (pilihan C).",
      "pitfalls": "Lupa bahwa konstanta pada suku kedua adalah $-C$ saat $x = 0$ karena dikalikan dengan $(x - 1)$."
    },
    "subTopicSlug": "operasi-aljabar-polinomial",
    "bab": "Aljabar",
    "subBab": "Operasi Aljabar Polinomial",
    "subTopic": "Operasi Aljabar Polinomial",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang",
    "hint": "Dekomposisi pecahan parsial dengan faktor kuadrat definit $x^2 + 2$ memiliki pembilang berbentuk linear $(Bx + C)$. Kesamaan pembilang diselesaikan dengan substitusi nilai strategis atau menyamakan koefisien."
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
