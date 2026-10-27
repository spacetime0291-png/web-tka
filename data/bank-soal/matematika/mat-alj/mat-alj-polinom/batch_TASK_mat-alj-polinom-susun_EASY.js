/**
 * Batch Task: TASK_mat-alj-polinom-susun_EASY
 * SubTopic: Pembagian Bersusun (mat-alj-polinom-susun)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "mat-alj-polinom-susun-001",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-polinom",
    subTopicId: "mat-alj-polinom-susun",
    category: "Pembagian Bersusun Polinomial Kuadrat",
    difficulty: "mudah",
    statement: "Hasil bagi dan sisa pembagian dari suku banyak $P(x) = 2x^2 + 7x + 5$ oleh $(x + 2)$ dengan metode pembagian bersusun adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Hasil bagi $2x + 3$ dan sisa $-1$",
      "Hasil bagi $2x + 3$ dan sisa $1$",
      "Hasil bagi $2x - 3$ dan sisa $-1$",
      "Hasil bagi $2x + 5$ dan sisa $0$",
      "Hasil bagi $2x + 1$ dan sisa $3$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Algoritma pembagian polinomial menyatakan bahwa $P(x) = (x - c) H(x) + S$, dengan $H(x)$ adalah hasil bagi dan $S$ adalah konstanta sisa pembagian.",
      steps: "1. Bagi suku pertama $2x^2$ dengan $x$, diperoleh suku pertama hasil bagi: $2x$.<br>2. Kalikan $2x$ dengan pembagi $(x + 2)$: $2x(x + 2) = 2x^2 + 4x$.<br>3. Kurangkan: $(2x^2 + 7x + 5) - (2x^2 + 4x) = 3x + 5$.<br>4. Bagi suku $3x$ dengan $x$, diperoleh suku kedua hasil bagi: $+3$.<br>5. Kalikan $3(x + 2) = 3x + 6$.<br>6. Kurangkan: $(3x + 5) - (3x + 6) = -1$.<br>7. Jadi hasil baginya adalah $2x + 3$ dan sisanya adalah $-1$ (pilihan A).",
      pitfalls: "Salah tanda pada saat melakukan pengurangan tahap akhir: $5 - 6 = -1$, bukan $5 - 6 = 1$."
    }
  },
  {
    id: "mat-alj-polinom-susun-002",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-polinom",
    subTopicId: "mat-alj-polinom-susun",
    category: "Derajat Maksimum Sisa Pembagian",
    difficulty: "mudah",
    statement: "Jika sebuah suku banyak berderajat 4 dibagi oleh suku banyak berderajat 2 melalui pembagian bersusun panjang, maka derajat maksimum dari sisa pembagiannya adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "0",
      "1",
      "2",
      "3",
      "4"
    ],
    correctIndex: 1,
    solution: {
      concept: "Pada pembagian polinomial, proses pembagian berhenti ketika derajat polinomial sisa pembagian strictly lebih kecil dari derajat polinomial pembagi: $\\deg(S(x)) < \\deg(Q(x))$. Derajat maksimum sisa adalah $\\deg(Q(x)) - 1$.",
      steps: "1. Tinjau derajat pembagi: $\\deg(Q(x)) = 2$.<br>2. Syarat sisa pembagian: $\\deg(S(x)) < 2$.<br>3. Nilai bilangan bulat non-negatif terbesar yang kurang dari 2 adalah 1.<br>4. Jadi sisa pembagian berderajat maksimum 1 (berbentuk linear $Ax + B$).<br>5. Pilihan yang tepat adalah 1 (pilihan B).",
      pitfalls: "Mengira derajat sisa sama dengan selisih derajat terbagi dan pembagi ($4 - 2 = 2$) yang sebenarnya merupakan derajat hasil bagi."
    }
  },
  {
    id: "mat-alj-polinom-susun-003",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-polinom",
    subTopicId: "mat-alj-polinom-susun",
    category: "Pembagian Polinomial Kubik Bersusun",
    difficulty: "mudah",
    statement: "Hasil bagi dari pembagian suku banyak $x^3 - 3x^2 + 4x - 5$ oleh $(x - 1)$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$x^2 - 2x + 2$",
      "$x^2 - 4x + 2$",
      "$x^2 - 2x - 3$",
      "$x^2 + 2x + 2$",
      "$x^2 - 3x + 1$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Pembagian bersusun panjang polinomial derajat 3 oleh bentuk linear menghasilkan hasil bagi berderajat 2 ($3 - 1 = 2$).",
      steps: "1. Bagi $x^3$ dengan $x$ menghasilkan $x^2$. Kalikan: $x^2(x - 1) = x^3 - x^2$.<br>2. Kurangkan: $(x^3 - 3x^2) - (x^3 - x^2) = -2x^2$. Turunkan $+4x$.<br>3. Bagi $-2x^2$ dengan $x$ menghasilkan $-2x$. Kalikan: $-2x(x - 1) = -2x^2 + 2x$.<br>4. Kurangkan: $(-2x^2 + 4x) - (-2x^2 + 2x) = 2x$. Turunkan $-5$.<br>5. Bagi $2x$ dengan $x$ menghasilkan $+2$. Kalikan: $2(x - 1) = 2x - 2$.<br>6. Kurangkan: $(2x - 5) - (2x - 2) = -3$ (sisa).<br>7. Jadi hasil baginya adalah $x^2 - 2x + 2$ (pilihan A).",
      pitfalls: "Kesalahan tanda saat mengurangkan $-3x^2 - (-x^2) = -2x^2$ menjadi $-4x^2$."
    }
  },
  {
    id: "mat-alj-polinom-susun-004",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-polinom",
    subTopicId: "mat-alj-polinom-susun",
    category: "Pembagian Bersusun Habis Dibagi",
    difficulty: "mudah",
    statement: "Sisa pembagian dari polinomial $P(x) = x^3 + 2x^2 - 5x - 6$ oleh $(x - 2)$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "-6",
      "-2",
      "0",
      "2",
      "6"
    ],
    correctIndex: 2,
    solution: {
      concept: "Sisa pembagian polinomial $P(x)$ oleh pembagi $(x - c)$ sama dengan nilai fungsi pada pembuat nol pembagi, yaitu $P(c)$. Jika $P(c) = 0$, maka polinomial habis dibagi tanpa sisa.",
      steps: "1. Tentukan pembuat nol dari pembagi $(x - 2)$: $x = 2$.<br>2. Evaluasi nilai $P(2)$:<br>$$P(2) = (2)^3 + 2(2)^2 - 5(2) - 6$$<br>3. Hitung nilai perpangkatan dan perkalian:<br>$$P(2) = 8 + 2(4) - 10 - 6 = 8 + 8 - 10 - 6$$<br>4. Sederhanakan penjumlahan aljabar:<br>$$P(2) = 16 - 16 = 0$$<br>5. Jadi sisa pembagiannya adalah 0 (pilihan C).",
      pitfalls: "Salah memasukkan nilai $x = -2$ alih-alih pembuat nol $x = 2$."
    }
  },
  {
    id: "mat-alj-polinom-susun-005",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-polinom",
    subTopicId: "mat-alj-polinom-susun",
    category: "Pembagian Bersusun oleh Bentuk (ax - b)",
    difficulty: "mudah",
    statement: "Suku banyak $P(x) = 4x^3 - 6x^2 + 8x - 1$ dibagi oleh $(2x - 1)$. Hasil bagi dari pembagian tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$2x^2 - 2x + 3$",
      "$4x^2 - 4x + 6$",
      "$2x^2 - 4x + 3$",
      "$2x^2 + 2x - 3$",
      "$4x^2 - 2x + 1$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Pada pembagian bersusun dengan pembagi berkoefisien $a > 1$, setiap langkah pembagian suku berderajat tertinggi dibagi dengan suku $ax$.",
      steps: "1. Bagi suku pertama $4x^3$ dengan $2x$, diperoleh $2x^2$.<br>2. Kalikan $2x^2(2x - 1) = 4x^3 - 2x^2$.<br>3. Kurangkan: $(4x^3 - 6x^2) - (4x^3 - 2x^2) = -4x^2$. Turunkan $+8x$.<br>4. Bagi $-4x^2$ dengan $2x$, diperoleh $-2x$.<br>5. Kalikan $-2x(2x - 1) = -4x^2 + 2x$.<br>6. Kurangkan: $(-4x^2 + 8x) - (-4x^2 + 2x) = 6x$. Turunkan $-1$.<br>7. Bagi $6x$ dengan $2x$, diperoleh $+3$. Kalikan: $3(2x - 1) = 6x - 3$.<br>8. Kurangkan: $(6x - 1) - (6x - 3) = 2$ (sisa).<br>9. Jadi hasil baginya adalah $2x^2 - 2x + 3$ (pilihan A).",
      pitfalls: "Lupa membagi koefisien dengan 2 sehingga menghasilkan $4x^2 - 4x + 6$."
    }
  }
];
