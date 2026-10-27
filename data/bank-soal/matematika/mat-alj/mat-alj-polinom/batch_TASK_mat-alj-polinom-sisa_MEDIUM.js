/**
 * Batch Task: TASK_mat-alj-polinom-sisa_MEDIUM
 * SubTopic: Teorema Sisa (mat-alj-polinom-sisa)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "mat-alj-polinom-sisa-006",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-polinom",
    subTopicId: "mat-alj-polinom-sisa",
    category: "Sisa Pembagian oleh Faktor Kuadrat Terurai",
    difficulty: "sedang",
    statement: "Suatu suku banyak $f(x)$ jika dibagi $(x - 3)$ bersisa 8, dan jika dibagi $(x + 2)$ bersisa -7. Jika $f(x)$ dibagi oleh $(x^2 - x - 6)$, maka sisa pembagian yang dihasilkan adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$3x - 1$",
      "$3x + 1$",
      "$-3x + 1$",
      "$x + 5$",
      "$3x - 5$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Jika suku banyak dibagi oleh pembagi kuadrat yang dapat difaktorkan $(x - x_1)(x - x_2)$, sisa pembagiannya berbentuk linear $S(x) = ax + b$ dengan nilai $S(x_1) = f(x_1)$ dan $S(x_2) = f(x_2)$.",
      steps: "1. Faktorkan pembagi: $x^2 - x - 6 = (x - 3)(x + 2)$.<br>2. Terapkan Teorema Sisa:\n- $f(3) = 8 \\implies 3a + b = 8$\n- $f(-2) = -7 \\implies -2a + b = -7$<br>3. Kurangkan kedua persamaan:\n$$(3a + b) - (-2a + b) = 8 - (-7) \\implies 5a = 15 \\implies a = 3$$<br>4. Substitusikan $a = 3$ ke persamaan pertama: $3(3) + b = 8 \\implies b = 8 - 9 = -1$.<br>5. Diperoleh bentuk sisa: $S(x) = 3x - 1$ (pilihan A).",
      pitfalls: "Kesalahan tanda aljabar saat mengurangkan $8 - (-7) = 15$, bukan $8 - 7 = 1$."
    }
  },
  {
    id: "mat-alj-polinom-sisa-007",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-polinom",
    subTopicId: "mat-alj-polinom-sisa",
    category: "Teorema Sisa pada Operasi Aljabar Polinomial",
    difficulty: "sedang",
    statement: "Diketahui suku banyak $P(x)$ dan $Q(x)$. Jika $P(x)$ dibagi $(x - 2)$ bersisa 5 dan $Q(x)$ dibagi $(x - 2)$ bersisa -3, maka sisa pembagian dari suku banyak $R(x) = [P(x)]^2 - 2[Q(x)] + 4$ oleh $(x - 2)$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "23",
      "27",
      "31",
      "35",
      "39"
    ],
    correctIndex: 3,
    solution: {
      concept: "Menurut Teorema Sisa, sisa pembagian fungsi polinomial komposit $R(x)$ oleh $(x - c)$ sama dengan nilai $R(c)$, yang dapat dihitung langsung dari nilai $P(c)$ dan $Q(c)$.",
      steps: "1. Tentukan nilai dasar dari Teorema Sisa: $P(2) = 5$ dan $Q(2) = -3$.<br>2. Hitung nilai sisa pembagian $R(2)$:<br>$$R(2) = [P(2)]^2 - 2[Q(2)] + 4$$<br>3. Substitusikan nilai yang diketahui:<br>$$R(2) = (5)^2 - 2(-3) + 4 = 25 + 6 + 4 = 35$$<br>4. Jadi sisa pembagian $R(x)$ oleh $(x - 2)$ bernilai 35 (pilihan D).",
      pitfalls: "Salah tanda pada perkalian $-2(-3) = +6$ menjadi $-6$ sehingga menghasilkan 23."
    }
  },
  {
    id: "mat-alj-polinom-sisa-008",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-polinom",
    subTopicId: "mat-alj-polinom-sisa",
    category: "Teorema Sisa Polinomial Derajat Tinggi",
    difficulty: "sedang",
    statement: "Suku banyak $P(x) = x^{2024} - ax^{2023} + b$ jika dibagi oleh $(x^2 - 1)$ menghasilkan sisa pembagian $(3x + 2)$. Nilai dari $a + b$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "-4",
      "-2",
      "0",
      "2",
      "4"
    ],
    correctIndex: 1,
    solution: {
      concept: "Untuk pembagi $(x^2 - 1) = (x - 1)(x + 1)$ dan sisa $S(x)$, berlaku hubungan Teorema Sisa: $P(1) = S(1)$ dan $P(-1) = S(-1)$.",
      steps: "1. Evaluasi pada $x = -1$:\n- $P(-1) = (-1)^{2024} - a(-1)^{2023} + b = 1 - a(-1) + b = 1 + a + b$\n- $S(-1) = 3(-1) + 2 = -3 + 2 = -1$<br>2. Samakan nilai $P(-1) = S(-1)$:\n$$1 + a + b = -1 \\implies a + b = -2$$<br>3. (Verifikasi pada $x = 1$: $P(1) = 1 - a + b$ dan $S(1) = 5 \\implies -a + b = 4$. Dari kedua persamaan diperoleh $a = -3$ dan $b = 1$, sehingga $a + b = -3 + 1 = -2$).<br>4. Jadi nilai $a + b$ adalah $-2$ (pilihan B).",
      pitfalls: "Keliru mengevaluasi pangkat ganjil $(-1)^{2023} = -1$ dan pangkat genap $(-1)^{2024} = 1$."
    }
  },
  {
    id: "mat-alj-polinom-sisa-009",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-polinom",
    subTopicId: "mat-alj-polinom-sisa",
    category: "Teorema Sisa Polinomial Komposisi Argumen",
    difficulty: "sedang",
    statement: "Jika suku banyak $P(x)$ dibagi $(x - 5)$ menghasilkan sisa pembagian 12, maka sisa pembagian dari suku banyak $F(x) = P(2x + 1)$ oleh $(x - 2)$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "4",
      "6",
      "10",
      "12",
      "24"
    ],
    correctIndex: 3,
    solution: {
      concept: "Berdasarkan Teorema Sisa, sisa pembagian $F(x)$ oleh $(x - c)$ adalah $F(c)$. Untuk fungsi komposisi $F(x) = P(g(x))$, nilainya adalah $P(g(c))$.",
      steps: "1. Tentukan pembuat nol pembagi dari $F(x)$: $x - 2 = 0 \\implies x = 2$.<br>2. Sisa pembagian adalah nilai $F(2)$:<br>$$F(2) = P(2(2) + 1) = P(4 + 1) = P(5)$$<br>3. Dari informasi soal, $P(x)$ dibagi $(x - 5)$ bersisa 12, sehingga menurut Teorema Sisa: $P(5) = 12$.<br>4. Maka diperoleh $F(2) = 12$.<br>5. Jadi sisa pembagian $F(x)$ oleh $(x - 2)$ bernilai 12 (pilihan D).",
      pitfalls: "Membagi sisa dengan 2 atau mengalikan dengan 2 karena ada koefisien $2x$ di dalam argumen fungsi."
    }
  },
  {
    id: "mat-alj-polinom-sisa-010",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-polinom",
    subTopicId: "mat-alj-polinom-sisa",
    category: "Sisa Pembagian oleh Pembagi Derajat Tiga",
    difficulty: "sedang",
    statement: "Suatu suku banyak $P(x)$ jika dibagi oleh $(x^2 - 1)$ bersisa $(2x + 3)$, dan jika dibagi oleh $(x - 2)$ bersisa 13. Sisa pembagian suku banyak $P(x)$ oleh $(x^2 - 1)(x - 2)$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$2x^2 + 2x + 1$",
      "$2x^2 + 2x - 1$",
      "$x^2 + 2x + 3$",
      "$2x^2 - 2x + 5$",
      "$3x^2 + 2x + 1$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Pembagian oleh pembagi berderajat 3 menghasilkan sisa berderajat maksimum 2. Dengan memisalkan sisa $S(x) = A(x^2 - 1) + (2x + 3)$, syarat sisa pada $(x^2 - 1)$ otomatis terpenuhi.",
      steps: "1. Misalkan sisa pembagian: $S(x) = A(x^2 - 1) + (2x + 3)$.<br>2. Diketahui $P(x)$ dibagi $(x - 2)$ bersisa 13, sehingga $S(2) = 13$.<br>3. Substitusikan $x = 2$ ke dalam permisalan sisa:<br>$$S(2) = A(2^2 - 1) + (2(2) + 3) = 13$$<br>$$A(4 - 1) + (4 + 3) = 13 \\implies 3A + 7 = 13 \\implies 3A = 6 \\implies A = 2$$<br>4. Jabarkan bentuk sisa $S(x)$:<br>$$S(x) = 2(x^2 - 1) + (2x + 3) = 2x^2 - 2 + 2x + 3 = 2x^2 + 2x + 1$$<br>5. Jadi sisa pembagian adalah $2x^2 + 2x + 1$ (pilihan A).",
      pitfalls: "Menggunakan pemisalan standar $ax^2 + bx + c$ yang membutuhkan eliminasi 3 variabel yang panjang dan rawan salah hitung."
    }
  }
];
