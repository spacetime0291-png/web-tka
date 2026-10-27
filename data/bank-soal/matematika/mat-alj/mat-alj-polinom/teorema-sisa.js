/**
 * Bank Soal TKA: Matematika Lanjut (TKA) - Aljabar
 * Bab Kecil: Polinomial (mat-alj-polinom)
 * Sub-Bab: Teorema Sisa (mat-alj-polinom-sisa)
 * Slug: teorema-sisa
 * Indikator: Sisa pembagian suku banyak P(x) oleh (x - k) bernilai P(k).
 * 
 * Total Butir Soal: 12 (Mudah: 6, Sedang: 6, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "mat-alj-polinom-sisa";
  const subTopicSlug = "teorema-sisa";
  const questions = [
  {
    "id": "mat-alj-polinom-sisa-001",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-polinom",
    "subTopicId": "mat-alj-polinom-sisa",
    "category": "Pernyataan Teorema Sisa Linear",
    "difficulty": "mudah",
    "statement": "Berdasarkan Teorema Sisa, jika suatu suku banyak $P(x)$ dibagi oleh pembagi linear $(x - k)$, maka nilai sisa pembagiannya sama dengan ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$P(k)$",
      "$P(-k)$",
      "$-P(k)$",
      "$\\frac{P(k)}{k}$",
      "$0$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Teorema Sisa menyatakan bahwa sisa pembagian suku banyak $P(x)$ oleh pembagi linear berbentuk $(x - k)$ adalah nilai fungsi polinomial tersebut saat dievaluasi pada pembuat nol pembagi, yaitu $S = P(k)$.",
      "steps": "1. Bentuk identitas pembagian: $P(x) = (x - k) H(x) + S$.<br>2. Masukkan pembuat nol pembagi, yaitu $x = k$:<br>$$P(k) = (k - k) H(k) + S = 0 \\cdot H(k) + S = S$$<br>3. Jadi sisa pembagian $S$ sama dengan $P(k)$ (pilihan A).",
      "pitfalls": "Sering salah memilih $P(-k)$ karena tertukar tanda negatif pada $(x - k)$."
    },
    "subTopicSlug": "teorema-sisa",
    "bab": "Aljabar",
    "subBab": "Teorema Sisa",
    "subTopic": "Teorema Sisa",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-alj-polinom-sisa-002",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-polinom",
    "subTopicId": "mat-alj-polinom-sisa",
    "category": "Perhitungan Sisa Pembagian Pembagi Linear Negatif",
    "difficulty": "mudah",
    "statement": "Sisa pembagian suku banyak $P(x) = 3x^3 - 2x^2 + 4x - 5$ oleh $(x + 1)$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "-14",
      "-10",
      "-6",
      "0",
      "4"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Untuk pembagi $(x + 1)$, pembuat nol adalah $x + 1 = 0 \\implies x = -1$. Sisa pembagiannya bernilai $S = P(-1)$.",
      "steps": "1. Tentukan pembuat nol: $x = -1$.<br>2. Substitusikan $x = -1$ ke dalam $P(x)$:<br>$$S = P(-1) = 3(-1)^3 - 2(-1)^2 + 4(-1) - 5$$<br>3. Hitung masing-masing suku:<br>$$S = 3(-1) - 2(1) - 4 - 5 = -3 - 2 - 4 - 5 = -14$$<br>4. Jadi sisa pembagian adalah $-14$ (pilihan A).",
      "pitfalls": "Salah menghitung pangkat ganjil bilangan negatif: $(-1)^3 = -1$, bukan $+1$."
    },
    "subTopicSlug": "teorema-sisa",
    "bab": "Aljabar",
    "subBab": "Teorema Sisa",
    "subTopic": "Teorema Sisa",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-alj-polinom-sisa-003",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-polinom",
    "subTopicId": "mat-alj-polinom-sisa",
    "category": "Teorema Sisa Pembagi Pecahan (ax - b)",
    "difficulty": "mudah",
    "statement": "Sisa pembagian suku banyak $P(x) = 4x^3 + 2x^2 - 6x + 7$ oleh $(2x - 1)$ adalah ....",
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
      "concept": "Pembagian polinomial oleh pembagi $(ax - b)$ memiliki sisa yang sama dengan nilai suku banyak pada pembuat nolnya: $S = P\\left(\\frac{b}{a}\\right)$.",
      "steps": "1. Pembuat nol dari pembagi $2x - 1 = 0 \\implies x = \\frac{1}{2}$.<br>2. Evaluasi $P\\left(\\frac{1}{2}\\right)$:<br>$$S = 4\\left(\\frac{1}{2}\\right)^3 + 2\\left(\\frac{1}{2}\\right)^2 - 6\\left(\\frac{1}{2}\\right) + 7$$<br>3. Hitung nilai perpangkatan pecahan:<br>$$S = 4\\left(\\frac{1}{8}\\right) + 2\\left(\\frac{1}{4}\\right) - 3 + 7 = \\frac{1}{2} + \\frac{1}{2} - 3 + 7$$<br>4. Lakukan operasi penjumlahan:<br>$$S = 1 - 3 + 7 = 5$$<br>5. Jadi sisa pembagiannya adalah 5 (pilihan C).",
      "pitfalls": "Lupa memangkatkan penyebut pecahan, misalnya menghitung $\\left(\\frac{1}{2}\\right)^3$ menjadi $\\frac{1}{6}$ alih-alih $\\frac{1}{8}$."
    },
    "subTopicSlug": "teorema-sisa",
    "bab": "Aljabar",
    "subBab": "Teorema Sisa",
    "subTopic": "Teorema Sisa",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-alj-polinom-sisa-004",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-polinom",
    "subTopicId": "mat-alj-polinom-sisa",
    "category": "Penentuan Koefisien Berdasarkan Teorema Sisa",
    "difficulty": "mudah",
    "statement": "Suku banyak $P(x) = x^3 - 5x^2 + mx - 8$ dibagi oleh $(x - 3)$ menghasilkan sisa pembagian bernilai 4. Nilai dari konstanta $m$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "6",
      "8",
      "10",
      "12",
      "14"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Berdasarkan Teorema Sisa, jika sisa pembagian oleh $(x - 3)$ adalah 4, maka berlaku kesamaan nilai fungsi $P(3) = 4$.",
      "steps": "1. Terapkan Teorema Sisa: $P(3) = 4$.<br>2. Substitusikan $x = 3$ ke dalam rumus fungsi:<br>$$P(3) = (3)^3 - 5(3)^2 + m(3) - 8 = 4$$<br>3. Sederhanakan bentuk aritmetika:<br>$$27 - 5(9) + 3m - 8 = 4 \\implies 27 - 45 + 3m - 8 = 4$$<br>$$3m - 26 = 4 \\implies 3m = 30 \\implies m = 10$$<br>4. Jadi nilai konstanta $m$ adalah 10 (pilihan C).",
      "pitfalls": "Salah hitung pada $27 - 45 - 8 = -26$ atau salah memindahkan ruas."
    },
    "subTopicSlug": "teorema-sisa",
    "bab": "Aljabar",
    "subBab": "Teorema Sisa",
    "subTopic": "Teorema Sisa",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-alj-polinom-sisa-005",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-polinom",
    "subTopicId": "mat-alj-polinom-sisa",
    "category": "Sisa Pembagian oleh Faktor Kuadrat Terurai",
    "difficulty": "mudah",
    "statement": "Suatu suku banyak $P(x)$ bersisa 3 jika dibagi $(x - 1)$ dan bersisa 7 jika dibagi $(x - 3)$. Jika suku banyak $P(x)$ tersebut dibagi oleh $(x^2 - 4x + 3)$, maka sisa pembagian yang diperoleh adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2x + 1$",
      "$2x - 1$",
      "$x + 2$",
      "$4x - 1$",
      "$2x + 5$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Pembagian oleh pembagi berderajat 2 menghasilkan sisa berderajat maksimum 1 ($S(x) = ax + b$). Nilai $a$ dan $b$ ditentukan dari nilai $P(x)$ pada pembuat nol faktor-faktor pembaginya.",
      "steps": "1. Faktorkan pembagi: $x^2 - 4x + 3 = (x - 1)(x - 3)$.<br>2. Misalkan sisa pembagian: $S(x) = ax + b$.<br>3. Dari Teorema Sisa:\n- $P(1) = 3 \\implies a(1) + b = 3 \\implies a + b = 3$\n- $P(3) = 7 \\implies a(3) + b = 7 \\implies 3a + b = 7$<br>4. Kurangkan kedua persamaan:\n$$(3a + b) - (a + b) = 7 - 3 \\implies 2a = 4 \\implies a = 2$$<br>5. Substitusikan $a = 2$ ke $a + b = 3$ menghasilkan $b = 3 - 2 = 1$.<br>6. Diperoleh rumus sisa pembagian: $S(x) = 2x + 1$ (pilihan A).",
      "pitfalls": "Tertukar memasukkan pasangan nilai: $P(1) = 7$ dan $P(3) = 3$."
    },
    "subTopicSlug": "teorema-sisa",
    "bab": "Aljabar",
    "subBab": "Teorema Sisa",
    "subTopic": "Teorema Sisa",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-alj-polinom-sisa-006",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-polinom",
    "subTopicId": "mat-alj-polinom-sisa",
    "category": "Sisa Pembagian oleh Faktor Kuadrat Terurai",
    "difficulty": "sedang",
    "statement": "Suatu suku banyak $f(x)$ jika dibagi $(x - 3)$ bersisa 8, dan jika dibagi $(x + 2)$ bersisa -7. Jika $f(x)$ dibagi oleh $(x^2 - x - 6)$, maka sisa pembagian yang dihasilkan adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$3x - 1$",
      "$3x + 1$",
      "$-3x + 1$",
      "$x + 5$",
      "$3x - 5$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Jika suku banyak dibagi oleh pembagi kuadrat yang dapat difaktorkan $(x - x_1)(x - x_2)$, sisa pembagiannya berbentuk linear $S(x) = ax + b$ dengan nilai $S(x_1) = f(x_1)$ dan $S(x_2) = f(x_2)$.",
      "steps": "1. Faktorkan pembagi: $x^2 - x - 6 = (x - 3)(x + 2)$.<br>2. Terapkan Teorema Sisa:\n- $f(3) = 8 \\implies 3a + b = 8$\n- $f(-2) = -7 \\implies -2a + b = -7$<br>3. Kurangkan kedua persamaan:\n$$(3a + b) - (-2a + b) = 8 - (-7) \\implies 5a = 15 \\implies a = 3$$<br>4. Substitusikan $a = 3$ ke persamaan pertama: $3(3) + b = 8 \\implies b = 8 - 9 = -1$.<br>5. Diperoleh bentuk sisa: $S(x) = 3x - 1$ (pilihan A).",
      "pitfalls": "Kesalahan tanda aljabar saat mengurangkan $8 - (-7) = 15$, bukan $8 - 7 = 1$."
    },
    "subTopicSlug": "teorema-sisa",
    "bab": "Aljabar",
    "subBab": "Teorema Sisa",
    "subTopic": "Teorema Sisa",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "mat-alj-polinom-sisa-007",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-polinom",
    "subTopicId": "mat-alj-polinom-sisa",
    "category": "Teorema Sisa pada Operasi Aljabar Polinomial",
    "difficulty": "sedang",
    "statement": "Diketahui suku banyak $P(x)$ dan $Q(x)$. Jika $P(x)$ dibagi $(x - 2)$ bersisa 5 dan $Q(x)$ dibagi $(x - 2)$ bersisa -3, maka sisa pembagian dari suku banyak $R(x) = [P(x)]^2 - 2[Q(x)] + 4$ oleh $(x - 2)$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "23",
      "27",
      "31",
      "35",
      "39"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Menurut Teorema Sisa, sisa pembagian fungsi polinomial komposit $R(x)$ oleh $(x - c)$ sama dengan nilai $R(c)$, yang dapat dihitung langsung dari nilai $P(c)$ dan $Q(c)$.",
      "steps": "1. Tentukan nilai dasar dari Teorema Sisa: $P(2) = 5$ dan $Q(2) = -3$.<br>2. Hitung nilai sisa pembagian $R(2)$:<br>$$R(2) = [P(2)]^2 - 2[Q(2)] + 4$$<br>3. Substitusikan nilai yang diketahui:<br>$$R(2) = (5)^2 - 2(-3) + 4 = 25 + 6 + 4 = 35$$<br>4. Jadi sisa pembagian $R(x)$ oleh $(x - 2)$ bernilai 35 (pilihan D).",
      "pitfalls": "Salah tanda pada perkalian $-2(-3) = +6$ menjadi $-6$ sehingga menghasilkan 23."
    },
    "subTopicSlug": "teorema-sisa",
    "bab": "Aljabar",
    "subBab": "Teorema Sisa",
    "subTopic": "Teorema Sisa",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "mat-alj-polinom-sisa-008",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-polinom",
    "subTopicId": "mat-alj-polinom-sisa",
    "category": "Teorema Sisa Polinomial Derajat Tinggi",
    "difficulty": "sedang",
    "statement": "Suku banyak $P(x) = x^{2024} - ax^{2023} + b$ jika dibagi oleh $(x^2 - 1)$ menghasilkan sisa pembagian $(3x + 2)$. Nilai dari $a + b$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "-4",
      "-2",
      "0",
      "2",
      "4"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Untuk pembagi $(x^2 - 1) = (x - 1)(x + 1)$ dan sisa $S(x)$, berlaku hubungan Teorema Sisa: $P(1) = S(1)$ dan $P(-1) = S(-1)$.",
      "steps": "1. Evaluasi pada $x = -1$:\n- $P(-1) = (-1)^{2024} - a(-1)^{2023} + b = 1 - a(-1) + b = 1 + a + b$\n- $S(-1) = 3(-1) + 2 = -3 + 2 = -1$<br>2. Samakan nilai $P(-1) = S(-1)$:\n$$1 + a + b = -1 \\implies a + b = -2$$<br>3. (Verifikasi pada $x = 1$: $P(1) = 1 - a + b$ dan $S(1) = 5 \\implies -a + b = 4$. Dari kedua persamaan diperoleh $a = -3$ dan $b = 1$, sehingga $a + b = -3 + 1 = -2$).<br>4. Jadi nilai $a + b$ adalah $-2$ (pilihan B).",
      "pitfalls": "Keliru mengevaluasi pangkat ganjil $(-1)^{2023} = -1$ dan pangkat genap $(-1)^{2024} = 1$."
    },
    "subTopicSlug": "teorema-sisa",
    "bab": "Aljabar",
    "subBab": "Teorema Sisa",
    "subTopic": "Teorema Sisa",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "mat-alj-polinom-sisa-009",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-polinom",
    "subTopicId": "mat-alj-polinom-sisa",
    "category": "Teorema Sisa Polinomial Komposisi Argumen",
    "difficulty": "sedang",
    "statement": "Jika suku banyak $P(x)$ dibagi $(x - 5)$ menghasilkan sisa pembagian 12, maka sisa pembagian dari suku banyak $F(x) = P(2x + 1)$ oleh $(x - 2)$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "4",
      "6",
      "10",
      "12",
      "24"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Berdasarkan Teorema Sisa, sisa pembagian $F(x)$ oleh $(x - c)$ adalah $F(c)$. Untuk fungsi komposisi $F(x) = P(g(x))$, nilainya adalah $P(g(c))$.",
      "steps": "1. Tentukan pembuat nol pembagi dari $F(x)$: $x - 2 = 0 \\implies x = 2$.<br>2. Sisa pembagian adalah nilai $F(2)$:<br>$$F(2) = P(2(2) + 1) = P(4 + 1) = P(5)$$<br>3. Dari informasi soal, $P(x)$ dibagi $(x - 5)$ bersisa 12, sehingga menurut Teorema Sisa: $P(5) = 12$.<br>4. Maka diperoleh $F(2) = 12$.<br>5. Jadi sisa pembagian $F(x)$ oleh $(x - 2)$ bernilai 12 (pilihan D).",
      "pitfalls": "Membagi sisa dengan 2 atau mengalikan dengan 2 karena ada koefisien $2x$ di dalam argumen fungsi."
    },
    "subTopicSlug": "teorema-sisa",
    "bab": "Aljabar",
    "subBab": "Teorema Sisa",
    "subTopic": "Teorema Sisa",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "mat-alj-polinom-sisa-010",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-polinom",
    "subTopicId": "mat-alj-polinom-sisa",
    "category": "Sisa Pembagian oleh Pembagi Derajat Tiga",
    "difficulty": "sedang",
    "statement": "Suatu suku banyak $P(x)$ jika dibagi oleh $(x^2 - 1)$ bersisa $(2x + 3)$, dan jika dibagi oleh $(x - 2)$ bersisa 13. Sisa pembagian suku banyak $P(x)$ oleh $(x^2 - 1)(x - 2)$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2x^2 + 2x + 1$",
      "$2x^2 + 2x - 1$",
      "$x^2 + 2x + 3$",
      "$2x^2 - 2x + 5$",
      "$3x^2 + 2x + 1$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Pembagian oleh pembagi berderajat 3 menghasilkan sisa berderajat maksimum 2. Dengan memisalkan sisa $S(x) = A(x^2 - 1) + (2x + 3)$, syarat sisa pada $(x^2 - 1)$ otomatis terpenuhi.",
      "steps": "1. Misalkan sisa pembagian: $S(x) = A(x^2 - 1) + (2x + 3)$.<br>2. Diketahui $P(x)$ dibagi $(x - 2)$ bersisa 13, sehingga $S(2) = 13$.<br>3. Substitusikan $x = 2$ ke dalam permisalan sisa:<br>$$S(2) = A(2^2 - 1) + (2(2) + 3) = 13$$<br>$$A(4 - 1) + (4 + 3) = 13 \\implies 3A + 7 = 13 \\implies 3A = 6 \\implies A = 2$$<br>4. Jabarkan bentuk sisa $S(x)$:<br>$$S(x) = 2(x^2 - 1) + (2x + 3) = 2x^2 - 2 + 2x + 3 = 2x^2 + 2x + 1$$<br>5. Jadi sisa pembagian adalah $2x^2 + 2x + 1$ (pilihan A).",
      "pitfalls": "Menggunakan pemisalan standar $ax^2 + bx + c$ yang membutuhkan eliminasi 3 variabel yang panjang dan rawan salah hitung."
    },
    "subTopicSlug": "teorema-sisa",
    "bab": "Aljabar",
    "subBab": "Teorema Sisa",
    "subTopic": "Teorema Sisa",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "mudah-mtk-09",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subTopicId": "mat-alj-polinom-sisa",
    "category": "Polinomial - Teorema Sisa Pembagian",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sisa pembagian suku banyak $P(x) = 2x^3 - 5x^2 + 4x - 6$ oleh pembagi linear $(x - 2)$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-4$",
      "$-2$",
      "$0$",
      "$2$",
      "$4$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Teorema Sisa Suku Banyak:</strong><br>\n          Jika polinomial $P(x)$ dibagi oleh $(x - c)$, maka sisa pembagiannya adalah $S = P(c)$.\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Pembuat nol pembagi: $x - 2 = 0 \\implies x = 2$.</li>\n          <li>Substitusi $x = 2$ ke dalam $P(x)$:\n            $$S = P(2) = 2(2^3) - 5(2^2) + 4(2) - 6$$\n            $$S = 2(8) - 5(4) + 8 - 6 = 16 - 20 + 8 - 6 = -2$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Sering keliru tanda substitusi menjadi $P(-2)$. Pembagi $(x - c)$ menghasilkan nilai evaluasi $x = +c$.\n        </div>\n      "
    },
    "bab": "Aljabar",
    "subBab": "Teorema Sisa",
    "subTopic": "Teorema Sisa",
    "chapterTitle": "Aljabar",
    "subChapterId": "mat-alj-polinom",
    "subTopicSlug": "teorema-sisa"
  },
  {
    "id": "sedang-mtk-03",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subTopicId": "mat-alj-polinom-sisa",
    "category": "Teorema Sisa Polinomial",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Suatu suku banyak $P(x)$ jika dibagi oleh $(x - 2)$ bersisa $11$, dan jika dibagi oleh $(x + 1)$ bersisa $-1$. Sisa pembagian suku banyak $P(x)$ jika dibagi oleh $(x^2 - x - 2)$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$4x + 3$",
      "$3x + 5$",
      "$4x - 3$",
      "$2x + 7$",
      "$5x + 1$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Teorema Sisa Polinomial Berderajat 2:</strong><br>\n          Jika pembagi berderajat 2 yaitu $D(x) = (x - x_1)(x - x_2)$, maka sisa pembagian adalah linear: $S(x) = ax + b$.<br>\n          Berdasarkan Teorema Sisa:<br>\n          $$P(x_1) = S(x_1) = a x_1 + b$$\n          $$P(x_2) = S(x_2) = a x_2 + b$$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Faktorkan pembagi: $x^2 - x - 2 = (x - 2)(x + 1)$.</li>\n          <li>Berdasarkan informasi soal:\n            $$P(2) = 11 \\implies 2a + b = 11$$\n            $$P(-1) = -1 \\implies -a + b = -1$$\n          </li>\n          <li>Eliminasi kedua persamaan (kurangkan):\n            $$(2a + b) - (-a + b) = 11 - (-1)$$\n            $$3a = 12 \\implies a = 4$$\n          </li>\n          <li>Substitusi $a = 4$ ke persamaan kedua:\n            $$-4 + b = -1 \\implies b = 3$$\n          </li>\n          <li>Maka sisa pembagian $S(x) = 4x + 3$.</li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Perhatikan tanda negatif saat substitusi $P(-1)$: $-a + b = -1$. Kesalahan tanda $a + b = -1$ sering membuat nilai $a$ dan $b$ keliru.\n        </div>\n      "
    },
    "bab": "Aljabar",
    "subBab": "Teorema Sisa",
    "subTopic": "Teorema Sisa",
    "chapterTitle": "Aljabar",
    "subChapterId": "mat-alj-polinom",
    "subTopicSlug": "teorema-sisa"
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
