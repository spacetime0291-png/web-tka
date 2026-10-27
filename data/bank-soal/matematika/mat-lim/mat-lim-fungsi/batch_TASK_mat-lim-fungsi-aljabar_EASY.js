/**
 * Batch Task: TASK_mat-lim-fungsi-aljabar_EASY
 * SubTopic: Limit: Limit Fungsi Aljabar (mat-lim-fungsi-aljabar)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "mat-lim-fungsi-aljabar-001",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-lim",
    subChapterId: "mat-lim-fungsi",
    subTopicId: "mat-lim-fungsi-aljabar",
    category: "Limit Substitusi Langsung",
    difficulty: "mudah",
    statement: "Nilai dari $\\lim_{x \\to 2} (3x^2 - 5x + 7)$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$5$",
      "$7$",
      "$9$",
      "$11$",
      "$13$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Fungsi polinomial kontinu pada seluruh domain bilangan real, sehingga nilai limit untuk $x \\to c$ diperoleh melalui substitusi langsung nilai $c$ ke dalam fungsi: $\\lim_{x \\to c} P(x) = P(c)$.",
      steps: "1. Substitusikan nilai $x = 2$ ke dalam ekspresi fungsi:\n$$3(2)^2 - 5(2) + 7$$\n2. Hitung masing-masing suku:\n$$= 3(4) - 10 + 7$$\n$$= 12 - 10 + 7 = 9$$\n3. Jadi, nilai limit tersebut adalah $9$ (pilihan C).",
      pitfalls: "Melakukan kesalahan hitung urutan operasi aljabar, seperti mengalikan $3 \\times 2$ baru dikuadratkan."
    }
  },
  {
    id: "mat-lim-fungsi-aljabar-002",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-lim",
    subChapterId: "mat-lim-fungsi",
    subTopicId: "mat-lim-fungsi-aljabar",
    category: "Limit Pemfaktoran Selisih Kuadrat",
    difficulty: "mudah",
    statement: "Nilai dari $\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$0$",
      "$3$",
      "$6$",
      "$9$",
      "$\\infty$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Substitusi langsung menghasilkan bentuk tak tentu $\\frac{0}{0}$. Faktorkan pembilang menggunakan rumus selisih dua kuadrat $a^2 - b^2 = (a - b)(a + b)$ untuk mengeliminasi pembuat nol $(x - 3)$.",
      steps: "1. Evaluasi bentuk limit: substitusi $x = 3$ menghasilkan $\\frac{3^2 - 9}{3 - 3} = \\frac{0}{0}$ (bentuk tak tentu).\n2. Faktorkan pembilang:\n$$x^2 - 9 = (x - 3)(x + 3)$$\n3. Tulis ulang limit dan sederhanakan faktor $(x - 3)$:\n$$\\lim_{x \\to 3} \\frac{(x - 3)(x + 3)}{x - 3} = \\lim_{x \\to 3} (x + 3)$$\n4. Substitusikan $x = 3$:\n$$3 + 3 = 6$$\n5. Jadi, nilai limit adalah $6$ (pilihan C).",
      pitfalls: "Menyimpulkan bahwa hasil limit adalah $0$ atau tak hingga ($\\infty$) saat mendapati bentuk $\\frac{0}{0}$ tanpa melakukan pemfaktoran."
    }
  },
  {
    id: "mat-lim-fungsi-aljabar-003",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-lim",
    subChapterId: "mat-lim-fungsi",
    subTopicId: "mat-lim-fungsi-aljabar",
    category: "Limit Pemfaktoran Persamaan Kuadrat",
    difficulty: "mudah",
    statement: "Nilai dari $\\lim_{x \\to 4} \\frac{x^2 - 5x + 4}{x - 4}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1$",
      "$3$",
      "$4$",
      "$5$",
      "$7$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Bentuk tak tentu $\\frac{0}{0}$ pada limit fungsi rasional diselesaikan dengan memfaktorkan bentuk kuadrat pembilang $x^2 - 5x + 4$ menjadi perkalian faktor-faktor linearnya.",
      steps: "1. Uji substitusi langsung $x = 4$:\n$$\\frac{4^2 - 5(4) + 4}{4 - 4} = \\frac{16 - 20 + 4}{0} = \\frac{0}{0}$$\n2. Faktorkan pembilang $x^2 - 5x + 4 = (x - 4)(x - 1)$.\n3. Sederhanakan bentuk pecahan limit:\n$$\\lim_{x \\to 4} \\frac{(x - 4)(x - 1)}{x - 4} = \\lim_{x \\to 4} (x - 1)$$\n4. Substitusikan $x = 4$:\n$$4 - 1 = 3$$\n5. Jadi, nilai limit tersebut adalah $3$ (pilihan B).",
      pitfalls: "Salah memfaktorkan persamaan kuadrat, misalnya menjadi $(x - 4)(x + 1)$ yang akan menghasilkan nilai limit $5$."
    }
  },
  {
    id: "mat-lim-fungsi-aljabar-004",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-lim",
    subChapterId: "mat-lim-fungsi",
    subTopicId: "mat-lim-fungsi-aljabar",
    category: "Limit dengan Mengalikan Sekawan Akar",
    difficulty: "mudah",
    statement: "Nilai dari $\\lim_{x \\to 1} \\frac{\\sqrt{x} - 1}{x - 1}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$0$",
      "$\\frac{1}{4}$",
      "$\\frac{1}{2}$",
      "$1$",
      "$2$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Bentuk tak tentu $\\frac{0}{0}$ yang memuat akar kuadrat dapat diselesaikan dengan memfaktorkan penyebut sebagai selisih kuadrat $x - 1 = (\\sqrt{x} - 1)(\\sqrt{x} + 1)$ atau mengalikan pembilang dan penyebut dengan bentuk sekawan $(\\sqrt{x} + 1)$.",
      steps: "1. Substitusi $x = 1$ menghasilkan bentuk tak tentu $\\frac{\\sqrt{1} - 1}{1 - 1} = \\frac{0}{0}$.\n2. Uraikan penyebut menjadi bentuk selisih kuadrat:\n$$x - 1 = (\\sqrt{x} - 1)(\\sqrt{x} + 1)$$\n3. Tuliskan limit setelah faktor $(\\sqrt{x} - 1)$ disederhanakan:\n$$\\lim_{x \\to 1} \\frac{\\sqrt{x} - 1}{(\\sqrt{x} - 1)(\\sqrt{x} + 1)} = \\lim_{x \\to 1} \\frac{1}{\\sqrt{x} + 1}$$\n4. Substitusikan $x = 1$:\n$$\\frac{1}{\\sqrt{1} + 1} = \\frac{1}{1 + 1} = \\frac{1}{2}$$\n5. Jadi, nilai limit tersebut adalah $\\frac{1}{2}$ (pilihan C).",
      pitfalls: "Lupa bahwa $\\sqrt{x} - 1$ saling membagi dengan faktor di penyebut dan meninggalkan angka $1$ di bagian pembilang (bukan $0$)."
    }
  },
  {
    id: "mat-lim-fungsi-aljabar-005",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-lim",
    subChapterId: "mat-lim-fungsi",
    subTopicId: "mat-lim-fungsi-aljabar",
    category: "Limit Menuju Tak Hingga Fungsi Rasional",
    difficulty: "mudah",
    statement: "Nilai dari $\\lim_{x \\to \\infty} \\frac{6x^2 - 4x + 1}{2x^2 + 5x - 3}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$0$",
      "$1$",
      "$2$",
      "$3$",
      "$\\infty$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Untuk limit menuju tak hingga fungsi rasional $\\frac{P(x)}{Q(x)}$ di mana derajat tertinggi pembilang sama dengan derajat tertinggi penyebut ($n = m$), nilai limitnya sama dengan perbandingan koefisien pangkat tertingginya: $\\frac{a_n}{b_m}$.",
      steps: "1. Perhatikan bahwa pangkat tertinggi pembilang dan penyebut adalah $x^2$.\n2. Bagi pembilang dan penyebut dengan $x^2$:\n$$\\lim_{x \\to \\infty} \\frac{\\frac{6x^2}{x^2} - \\frac{4x}{x^2} + \\frac{1}{x^2}}{\\frac{2x^2}{x^2} + \\frac{5x}{x^2} - \\frac{3}{x^2}} = \\lim_{x \\to \\infty} \\frac{6 - \\frac{4}{x} + \\frac{1}{x^2}}{2 + \\frac{5}{x} - \\frac{3}{x^2}}$$\n3. Karena $\\lim_{x \\to \\infty} \\frac{c}{x^k} = 0$ untuk $k > 0$, maka:\n$$= \\frac{6 - 0 + 0}{2 + 0 - 0} = \\frac{6}{2} = 3$$\n4. Jadi, nilai limit tersebut adalah $3$ (pilihan D).",
      pitfalls: "Menghitung seluruh suku polinomial alih-alih berfokus pada koefisien derajat tertinggi."
    }
  }
];
