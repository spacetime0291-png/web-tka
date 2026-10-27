/**
 * Batch Task: TASK_mat-alj-polinom-sisa_EASY
 * SubTopic: Teorema Sisa (mat-alj-polinom-sisa)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "mat-alj-polinom-sisa-001",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-polinom",
    subTopicId: "mat-alj-polinom-sisa",
    category: "Pernyataan Teorema Sisa Linear",
    difficulty: "mudah",
    statement: "Berdasarkan Teorema Sisa, jika suatu suku banyak $P(x)$ dibagi oleh pembagi linear $(x - k)$, maka nilai sisa pembagiannya sama dengan ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$P(k)$",
      "$P(-k)$",
      "$-P(k)$",
      "$\\frac{P(k)}{k}$",
      "$0$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Teorema Sisa menyatakan bahwa sisa pembagian suku banyak $P(x)$ oleh pembagi linear berbentuk $(x - k)$ adalah nilai fungsi polinomial tersebut saat dievaluasi pada pembuat nol pembagi, yaitu $S = P(k)$.",
      steps: "1. Bentuk identitas pembagian: $P(x) = (x - k) H(x) + S$.<br>2. Masukkan pembuat nol pembagi, yaitu $x = k$:<br>$$P(k) = (k - k) H(k) + S = 0 \\cdot H(k) + S = S$$<br>3. Jadi sisa pembagian $S$ sama dengan $P(k)$ (pilihan A).",
      pitfalls: "Sering salah memilih $P(-k)$ karena tertukar tanda negatif pada $(x - k)$."
    }
  },
  {
    id: "mat-alj-polinom-sisa-002",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-polinom",
    subTopicId: "mat-alj-polinom-sisa",
    category: "Perhitungan Sisa Pembagian Pembagi Linear Negatif",
    difficulty: "mudah",
    statement: "Sisa pembagian suku banyak $P(x) = 3x^3 - 2x^2 + 4x - 5$ oleh $(x + 1)$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "-14",
      "-10",
      "-6",
      "0",
      "4"
    ],
    correctIndex: 0,
    solution: {
      concept: "Untuk pembagi $(x + 1)$, pembuat nol adalah $x + 1 = 0 \\implies x = -1$. Sisa pembagiannya bernilai $S = P(-1)$.",
      steps: "1. Tentukan pembuat nol: $x = -1$.<br>2. Substitusikan $x = -1$ ke dalam $P(x)$:<br>$$S = P(-1) = 3(-1)^3 - 2(-1)^2 + 4(-1) - 5$$<br>3. Hitung masing-masing suku:<br>$$S = 3(-1) - 2(1) - 4 - 5 = -3 - 2 - 4 - 5 = -14$$<br>4. Jadi sisa pembagian adalah $-14$ (pilihan A).",
      pitfalls: "Salah menghitung pangkat ganjil bilangan negatif: $(-1)^3 = -1$, bukan $+1$."
    }
  },
  {
    id: "mat-alj-polinom-sisa-003",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-polinom",
    subTopicId: "mat-alj-polinom-sisa",
    category: "Teorema Sisa Pembagi Pecahan (ax - b)",
    difficulty: "mudah",
    statement: "Sisa pembagian suku banyak $P(x) = 4x^3 + 2x^2 - 6x + 7$ oleh $(2x - 1)$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "3",
      "4",
      "5",
      "6",
      "7"
    ],
    correctIndex: 2,
    solution: {
      concept: "Pembagian polinomial oleh pembagi $(ax - b)$ memiliki sisa yang sama dengan nilai suku banyak pada pembuat nolnya: $S = P\\left(\\frac{b}{a}\\right)$.",
      steps: "1. Pembuat nol dari pembagi $2x - 1 = 0 \\implies x = \\frac{1}{2}$.<br>2. Evaluasi $P\\left(\\frac{1}{2}\\right)$:<br>$$S = 4\\left(\\frac{1}{2}\\right)^3 + 2\\left(\\frac{1}{2}\\right)^2 - 6\\left(\\frac{1}{2}\\right) + 7$$<br>3. Hitung nilai perpangkatan pecahan:<br>$$S = 4\\left(\\frac{1}{8}\\right) + 2\\left(\\frac{1}{4}\\right) - 3 + 7 = \\frac{1}{2} + \\frac{1}{2} - 3 + 7$$<br>4. Lakukan operasi penjumlahan:<br>$$S = 1 - 3 + 7 = 5$$<br>5. Jadi sisa pembagiannya adalah 5 (pilihan C).",
      pitfalls: "Lupa memangkatkan penyebut pecahan, misalnya menghitung $\\left(\\frac{1}{2}\\right)^3$ menjadi $\\frac{1}{6}$ alih-alih $\\frac{1}{8}$."
    }
  },
  {
    id: "mat-alj-polinom-sisa-004",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-polinom",
    subTopicId: "mat-alj-polinom-sisa",
    category: "Penentuan Koefisien Berdasarkan Teorema Sisa",
    difficulty: "mudah",
    statement: "Suku banyak $P(x) = x^3 - 5x^2 + mx - 8$ dibagi oleh $(x - 3)$ menghasilkan sisa pembagian bernilai 4. Nilai dari konstanta $m$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "6",
      "8",
      "10",
      "12",
      "14"
    ],
    correctIndex: 2,
    solution: {
      concept: "Berdasarkan Teorema Sisa, jika sisa pembagian oleh $(x - 3)$ adalah 4, maka berlaku kesamaan nilai fungsi $P(3) = 4$.",
      steps: "1. Terapkan Teorema Sisa: $P(3) = 4$.<br>2. Substitusikan $x = 3$ ke dalam rumus fungsi:<br>$$P(3) = (3)^3 - 5(3)^2 + m(3) - 8 = 4$$<br>3. Sederhanakan bentuk aritmetika:<br>$$27 - 5(9) + 3m - 8 = 4 \\implies 27 - 45 + 3m - 8 = 4$$<br>$$3m - 26 = 4 \\implies 3m = 30 \\implies m = 10$$<br>4. Jadi nilai konstanta $m$ adalah 10 (pilihan C).",
      pitfalls: "Salah hitung pada $27 - 45 - 8 = -26$ atau salah memindahkan ruas."
    }
  },
  {
    id: "mat-alj-polinom-sisa-005",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-polinom",
    subTopicId: "mat-alj-polinom-sisa",
    category: "Sisa Pembagian oleh Faktor Kuadrat Terurai",
    difficulty: "mudah",
    statement: "Suatu suku banyak $P(x)$ bersisa 3 jika dibagi $(x - 1)$ dan bersisa 7 jika dibagi $(x - 3)$. Jika suku banyak $P(x)$ tersebut dibagi oleh $(x^2 - 4x + 3)$, maka sisa pembagian yang diperoleh adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$2x + 1$",
      "$2x - 1$",
      "$x + 2$",
      "$4x - 1$",
      "$2x + 5$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Pembagian oleh pembagi berderajat 2 menghasilkan sisa berderajat maksimum 1 ($S(x) = ax + b$). Nilai $a$ dan $b$ ditentukan dari nilai $P(x)$ pada pembuat nol faktor-faktor pembaginya.",
      steps: "1. Faktorkan pembagi: $x^2 - 4x + 3 = (x - 1)(x - 3)$.<br>2. Misalkan sisa pembagian: $S(x) = ax + b$.<br>3. Dari Teorema Sisa:\n- $P(1) = 3 \\implies a(1) + b = 3 \\implies a + b = 3$\n- $P(3) = 7 \\implies a(3) + b = 7 \\implies 3a + b = 7$<br>4. Kurangkan kedua persamaan:\n$$(3a + b) - (a + b) = 7 - 3 \\implies 2a = 4 \\implies a = 2$$<br>5. Substitusikan $a = 2$ ke $a + b = 3$ menghasilkan $b = 3 - 2 = 1$.<br>6. Diperoleh rumus sisa pembagian: $S(x) = 2x + 1$ (pilihan A).",
      pitfalls: "Tertukar memasukkan pasangan nilai: $P(1) = 7$ dan $P(3) = 3$."
    }
  }
];
