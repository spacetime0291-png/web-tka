/**
 * Batch Task: TASK_mat-lim-fungsi-takhingga_EASY
 * SubTopic: Limit: Limit Menuju Tak Hingga (mat-lim-fungsi-takhingga)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "mat-lim-fungsi-takhingga-001",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-lim",
    subChapterId: "mat-lim-fungsi",
    subTopicId: "mat-lim-fungsi-takhingga",
    category: "Limit Polinomial Menuju Tak Hingga",
    difficulty: "mudah",
    statement: "Nilai dari $\\lim_{x \\to \\infty} (4x^3 - 7x^2 + 2x - 9)$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$-\\infty$",
      "$-9$",
      "$0$",
      "$4$",
      "$\\infty$"
    ],
    correctIndex: 4,
    solution: {
      concept: "Pada fungsi polinomial saat $x \\to \\infty$, perilaku asimtotik seluruh fungsi didominasi sepenuhnya oleh suku dengan derajat tertinggi ($a_n x^n$).",
      steps: "1. Faktorkan suku berpangkat tertinggi $x^3$:\n$$4x^3 - 7x^2 + 2x - 9 = x^3 \\left(4 - \\frac{7}{x} + \\frac{2}{x^2} - \\frac{9}{x^3}\\right)$$\n2. Evaluasi limit saat $x \\to \\infty$:\n$$\\lim_{x \\to \\infty} x^3 \\left(4 - 0 + 0 - 0\\right) = \\infty \\times 4 = \\infty$$\n3. Jadi, nilai limit tersebut adalah $\\infty$ (pilihan E).",
      pitfalls: "Hanya melihat konstanta suku terakhir $-9$ atau hanya mengambil koefisien suku pertama $4$ tanpa menyadari bahwa nilai fungsi terus membesar tanpa batas."
    }
  },
  {
    id: "mat-lim-fungsi-takhingga-002",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-lim",
    subChapterId: "mat-lim-fungsi",
    subTopicId: "mat-lim-fungsi-takhingga",
    category: "Limit Rasional Derajat Pembilang Lebih Kecil",
    difficulty: "mudah",
    statement: "Nilai dari $\\lim_{x \\to \\infty} \\frac{5x + 3}{2x^2 - 4x + 7}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$0$",
      "$\\frac{5}{2}$",
      "$2$",
      "$5$",
      "$\\infty$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Jika derajat polinomial pembilang ($n = 1$) lebih kecil daripada derajat polinomial penyebut ($m = 2$), maka nilai limit menuju tak hingga bernilai $0$ karena penyebut tumbuh jauh lebih cepat dibandingkan pembilang.",
      steps: "1. Bagilah pembilang dan penyebut dengan $x^2$ (pangkat tertinggi penyebut):\n$$\\lim_{x \\to \\infty} \\frac{\\frac{5x}{x^2} + \\frac{3}{x^2}}{\\frac{2x^2}{x^2} - \\frac{4x}{x^2} + \\frac{7}{x^2}} = \\lim_{x \\to \\infty} \\frac{\\frac{5}{x} + \\frac{3}{x^2}}{2 - \\frac{4}{x} + \\frac{7}{x^2}}$$\n2. Masukkan nilai limit saat $x \\to \\infty$:\n$$= \\frac{0 + 0}{2 - 0 + 0} = \\frac{0}{2} = 0$$\n3. Jadi, nilai limitnya adalah $0$ (pilihan A).",
      pitfalls: "Mengambil rasio koefisien $\\frac{5}{2}$ tanpa memperhatikan bahwa pangkat dari kedua variabel berbeda ($x$ berbanding $x^2$)."
    }
  },
  {
    id: "mat-lim-fungsi-takhingga-003",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-lim",
    subChapterId: "mat-lim-fungsi",
    subTopicId: "mat-lim-fungsi-takhingga",
    category: "Limit Rasional dengan Derajat Sama",
    difficulty: "mudah",
    statement: "Nilai dari $\\lim_{x \\to \\infty} \\frac{(2x + 1)(3x - 2)}{x^2 + 5x + 1}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1$",
      "$2$",
      "$3$",
      "$5$",
      "$6$"
    ],
    correctIndex: 4,
    solution: {
      concept: "Ketika derajat tertinggi pembilang sama dengan penyebut ($n = m = 2$), nilai limit menuju tak hingga adalah perbandingan koefisien suku berpangkat tertinggi dari pembilang dan penyebut.",
      steps: "1. Jabarkan perkalian pada pembilang:\n$$(2x + 1)(3x - 2) = 6x^2 - 4x + 3x - 2 = 6x^2 - x - 2$$\n2. Tuliskan bentuk limit pecahan rasionalnya:\n$$\\lim_{x \\to \\infty} \\frac{6x^2 - x - 2}{x^2 + 5x + 1}$$\n3. Karena derajat pembilang dan penyebut sama-sama 2, perbandingan koefisien pangkat tertingginya adalah:\n$$\\frac{6}{1} = 6$$\n4. Jadi, nilai limit tersebut adalah $6$ (pilihan E).",
      pitfalls: "Hanya mengalikan konstanta $1 \\times (-2) = -2$ atau lupa mengalikan koefisien $2 \\times 3 = 6$."
    }
  },
  {
    id: "mat-lim-fungsi-takhingga-004",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-lim",
    subChapterId: "mat-lim-fungsi",
    subTopicId: "mat-lim-fungsi-takhingga",
    category: "Limit Selisih Dua Bentuk Akar Linear Sederhana",
    difficulty: "mudah",
    statement: "Nilai dari $\\lim_{x \\to \\infty} (\\sqrt{x + 4} - \\sqrt{x})$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$0$",
      "$1$",
      "$2$",
      "$4$",
      "$\\infty$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Bentuk tak tentu $\\infty - \\infty$ yang memuat bentuk akar diubah menjadi bentuk pecahan dengan mengalikan bentuk sekawannya, yaitu $(\\sqrt{x + 4} + \\sqrt{x})$.",
      steps: "1. Kalikan dengan bentuk sekawan dibagi bentuk sekawan:\n$$\\lim_{x \\to \\infty} \\frac{(\\sqrt{x + 4} - \\sqrt{x})(\\sqrt{x + 4} + \\sqrt{x})}{\\sqrt{x + 4} + \\sqrt{x}}$$\n2. Sederhanakan pembilang:\n$$(\\sqrt{x + 4})^2 - (\\sqrt{x})^2 = (x + 4) - x = 4$$\n3. Tuliskan limit pecahan:\n$$\\lim_{x \\to \\infty} \\frac{4}{\\sqrt{x + 4} + \\sqrt{x}}$$\n4. Saat $x \\to \\infty$, penyebut membesar menuju $\\infty$ sedangkan pembilang tetap bernilai 4:\n$$\\frac{4}{\\infty} = 0$$\n5. Jadi, nilai limit tersebut adalah $0$ (pilihan A).",
      pitfalls: "Menyimpulkan $\\sqrt{x+4} - \\sqrt{x} = \\sqrt{4} = 2$, yang merupakan kesalahan umum manipulasi bentuk akar aljabar."
    }
  },
  {
    id: "mat-lim-fungsi-takhingga-005",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-lim",
    subChapterId: "mat-lim-fungsi",
    subTopicId: "mat-lim-fungsi-takhingga",
    category: "Limit Rasional dengan Bentuk Akar pada Penyebut",
    difficulty: "mudah",
    statement: "Nilai dari $\\lim_{x \\to \\infty} \\frac{3x}{\\sqrt{4x^2 + 5}}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$0$",
      "$\\frac{3}{4}$",
      "$1$",
      "$\\frac{3}{2}$",
      "$\\infty$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Untuk $x > 0$ saat $x \\to \\infty$, suku $x$ dapat dimasukkan ke dalam bentuk akar sebagai $\\sqrt{x^2}$. Bagi pembilang dan penyebut dengan $x$ untuk mencari nilai asimtotik fungsi.",
      steps: "1. Bagi pembilang dengan $x$ dan penyebut dengan $\\sqrt{x^2}$:\n$$\\lim_{x \\to \\infty} \\frac{\\frac{3x}{x}}{\\sqrt{\\frac{4x^2}{x^2} + \\frac{5}{x^2}}} = \\lim_{x \\to \\infty} \\frac{3}{\\sqrt{4 + \\frac{5}{x^2}}}$$\n2. Substitusikan $x \\to \\infty$ di mana $\\frac{5}{x^2} \\to 0$:\n$$= \\frac{3}{\\sqrt{4 + 0}} = \\frac{3}{\\sqrt{4}} = \\frac{3}{2}$$\n3. Jadi, nilai limit tersebut adalah $\\frac{3}{2}$ (pilihan D).",
      pitfalls: "Lupa menarik akar dari koefisien 4 di penyebut sehingga menghasilkan $\\frac{3}{4}$."
    }
  }
];
