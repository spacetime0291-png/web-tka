/**
 * Batch Task: TASK_mat-alj-polinom-faktor_MEDIUM
 * SubTopic: Teorema Faktor & Akar Polinomial (mat-alj-polinom-faktor)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "mat-alj-polinom-faktor-006",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-polinom",
    subTopicId: "mat-alj-polinom-faktor",
    category: "Polinomial dengan Dua Faktor Linear",
    difficulty: "sedang",
    statement: "Suku banyak $P(x) = 2x^3 - 5x^2 - px + q$ memiliki faktor linear $(x - 1)$ dan $(x - 2)$. Nilai dari $p + q$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "-1",
      "0",
      "1",
      "2",
      "3"
    ],
    correctIndex: 2,
    solution: {
      concept: "Berdasarkan Teorema Faktor, jika $(x - c_1)$ dan $(x - c_2)$ adalah faktor-faktor dari $P(x)$, maka berlaku $P(c_1) = 0$ dan $P(c_2) = 0$.",
      steps: "1. Substitusikan $x = 1$:\n$$P(1) = 2(1)^3 - 5(1)^2 - p(1) + q = 0 \\implies 2 - 5 - p + q = 0 \\implies -p + q = 3$$<br>2. Substitusikan $x = 2$:\n$$P(2) = 2(2)^3 - 5(2)^2 - p(2) + q = 0 \\implies 16 - 20 - 2p + q = 0 \\implies -2p + q = 4$$<br>3. Kurangkan kedua persamaan:\n$$(-p + q) - (-2p + q) = 3 - 4 \\implies p = -1$$<br>4. Substitusikan $p = -1$ ke $-p + q = 3$:\n$$-(-1) + q = 3 \\implies 1 + q = 3 \\implies q = 2$$<br>5. Hitung nilai $p + q$:\n$$p + q = -1 + 2 = 1$$<br>6. Jadi nilai $p + q$ adalah 1 (pilihan C).",
      pitfalls: "Kesalahan tanda saat mengurangkan $-(-2p) = +2p$ atau keliru memindahkan ruas."
    }
  },
  {
    id: "mat-alj-polinom-faktor-007",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-polinom",
    subTopicId: "mat-alj-polinom-faktor",
    category: "Hubungan Teorema Vieta dan Akar Diketahui",
    difficulty: "sedang",
    statement: "Persamaan suku banyak $x^3 - 4x^2 + kx - 12 = 0$ memiliki akar-akar $x_1, x_2,$ dan $x_3$. Jika diketahui salah satu akarnya adalah $x_1 = 3$, maka nilai dari $(x_1 x_2 + x_2 x_3 + x_1 x_3)$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "5",
      "6",
      "7",
      "8",
      "9"
    ],
    correctIndex: 2,
    solution: {
      concept: "Akar persamaan suku banyak memenuhi $P(x_1) = 0$. Berdasarkan Teorema Vieta untuk kubik $ax^3 + bx^2 + cx + d = 0$, jumlah hasil kali sepasang akar adalah $\\frac{c}{a}$.",
      steps: "1. Karena $x = 3$ adalah akar persamaan, substitusikan ke dalam persamaan:\n$$(3)^3 - 4(3)^2 + k(3) - 12 = 0 \\implies 27 - 36 + 3k - 12 = 0$$\n$$3k - 21 = 0 \\implies 3k = 21 \\implies k = 7$$<br>2. Tinjau Teorema Vieta untuk jumlah hasil kali sepasang akar:\n$$x_1 x_2 + x_2 x_3 + x_1 x_3 = \\frac{c}{a}$$\nDi sini $c = k = 7$ dan $a = 1$.<br>3. Maka nilainya adalah $\\frac{7}{1} = 7$.<br>4. Jadi nilai yang dicari adalah 7 (pilihan C).",
      pitfalls: "Mencoba mencari akar-akar $x_2$ dan $x_3$ secara terpisah padahal dapat langsung dijawab melalui rumus Vieta $\\frac{c}{a}$."
    }
  },
  {
    id: "mat-alj-polinom-faktor-008",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-polinom",
    subTopicId: "mat-alj-polinom-faktor",
    category: "Jumlah Kuadrat Akar-Akar Polinomial",
    difficulty: "sedang",
    statement: "Akar-akar dari persamaan kubik $x^3 - 5x^2 + 7x - 2 = 0$ adalah $\\alpha, \\beta,$ dan $\\gamma$. Nilai dari $\\alpha^2 + \\beta^2 + \\gamma^2$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "9",
      "11",
      "13",
      "15",
      "18"
    ],
    correctIndex: 1,
    solution: {
      concept: "Gunakan identitas aljabar tiga variabel:\n$$\\alpha^2 + \\beta^2 + \\gamma^2 = (\\alpha + \\beta + \\gamma)^2 - 2(\\alpha\\beta + \\beta\\gamma + \\alpha\\gamma)$$",
      steps: "1. Dari persamaan $x^3 - 5x^2 + 7x - 2 = 0$, tentukan nilai Vieta:\n- $\\alpha + \\beta + \\gamma = -\\frac{-5}{1} = 5$\n- $\\alpha\\beta + \\beta\\gamma + \\alpha\\gamma = \\frac{7}{1} = 7$<br>2. Masukkan ke identitas jumlah kuadrat:\n$$\\alpha^2 + \\beta^2 + \\gamma^2 = (5)^2 - 2(7)$$<br>3. Selesaikan perhitungan:\n$$\\alpha^2 + \\beta^2 + \\gamma^2 = 25 - 14 = 11$$<br>4. Jadi nilai jumlah kuadrat akar-akar adalah 11 (pilihan B).",
      pitfalls: "Lupa mengurangkan dengan suku silang $2(\\alpha\\beta + \\beta\\gamma + \\alpha\\gamma)$, atau salah mengira $(\\alpha+\\beta+\\gamma)^2 = \\alpha^2+\\beta^2+\\gamma^2$."
    }
  },
  {
    id: "mat-alj-polinom-faktor-009",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-polinom",
    subTopicId: "mat-alj-polinom-faktor",
    category: "Akar-Akar Membentuk Barisan Aritmetika",
    difficulty: "sedang",
    statement: "Akar-akar dari persamaan kubik $x^3 - 6x^2 + px - 6 = 0$ membentuk suatu barisan aritmetika. Nilai dari konstanta $p$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "9",
      "10",
      "11",
      "12",
      "13"
    ],
    correctIndex: 2,
    solution: {
      concept: "Tiga bilangan yang membentuk barisan aritmetika dapat dimisalkan sebagai $(a - b), a, (a + b)$. Jumlah ketiga akar sama dengan $3a = -\\frac{\\text{koef } x^2}{\\text{koef } x^3}$.",
      steps: "1. Misalkan ketiga akar adalah $(a - b), a, (a + b)$.<br>2. Terapkan Teorema Vieta untuk penjumlahan akar:\n$$(a - b) + a + (a + b) = 3a = -\\frac{-6}{1} = 6 \\implies a = 2$$<br>3. Karena $a = 2$ adalah salah satu akar persamaan, substitusikan $x = 2$ ke dalam persamaan polinomial:\n$$(2)^3 - 6(2)^2 + p(2) - 6 = 0$$<br>4. Hitung nilai aljabar:\n$$8 - 24 + 2p - 6 = 0 \\implies 2p - 22 = 0 \\implies 2p = 22 \\implies p = 11$$<br>5. Jadi nilai konstanta $p$ adalah 11 (pilihan C).",
      pitfalls: "Salah memisalkan suku tengah barisan aritmetika sehingga penyelesaian menjadi sangat rumit."
    }
  },
  {
    id: "mat-alj-polinom-faktor-010",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-polinom",
    subTopicId: "mat-alj-polinom-faktor",
    category: "Penjumlahan Kebalikan Akar-Akar Polinomial",
    difficulty: "sedang",
    statement: "Persamaan suku banyak $2x^3 - 4x^2 + 5x - 3 = 0$ memiliki akar-akar $x_1, x_2,$ dan $x_3$. Nilai dari $\\frac{1}{x_1} + \\frac{1}{x_2} + \\frac{1}{x_3}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$-\\frac{5}{3}$",
      "$-\\frac{4}{3}$",
      "$\\frac{4}{3}$",
      "$\\frac{5}{3}$",
      "$\\frac{5}{2}$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Penjumlahan kebalikan akar-akar polinomial dapat disamakan penyebutnya:\n$$\\frac{1}{x_1} + \\frac{1}{x_2} + \\frac{1}{x_3} = \\frac{x_1 x_2 + x_2 x_3 + x_1 x_3}{x_1 x_2 x_3} = \\frac{c / a}{-d / a} = -\\frac{c}{d}$$",
      steps: "1. Identifikasi koefisien persamaan: $a = 2, b = -4, c = 5, d = -3$.<br>2. Hitung jumlah hasil kali sepasang akar:\n$$x_1 x_2 + x_2 x_3 + x_1 x_3 = \\frac{c}{a} = \\frac{5}{2}$$<br>3. Hitung hasil kali ketiga akar:\n$$x_1 x_2 x_3 = -\\frac{d}{a} = -\\frac{-3}{2} = \\frac{3}{2}$$<br>4. Bentuk perbandingannya:\n$$\\frac{1}{x_1} + \\frac{1}{x_2} + \\frac{1}{x_3} = \\frac{\\frac{5}{2}}{\\frac{3}{2}} = \\frac{5}{3}$$<br>5. Jadi nilai penjumlahan kebalikan akar-akarnya adalah $\\frac{5}{3}$ (pilihan D).",
      pitfalls: "Lupa tanda minus pada $-\\frac{d}{a}$ yang membatalkan tanda negatif dari $d = -3$."
    }
  }
];
