/**
 * Batch Task: TASK_mat-lim-fungsi-piecewise_EASY
 * SubTopic: Limit: Limit Fungsi Piecewise (mat-lim-fungsi-piecewise)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "mat-lim-fungsi-piecewise-001",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-lim",
    subChapterId: "mat-lim-fungsi",
    subTopicId: "mat-lim-fungsi-piecewise",
    category: "Limit Kiri Fungsi Sepotong",
    difficulty: "mudah",
    statement: "Diberikan fungsi sepotong-sepotong (piecewise) $f(x) = \\begin{cases} 2x + 1, & \\text{untuk } x < 3 \\\\ x^2 - 2, & \\text{untuk } x \\ge 3 \\end{cases}$. Nilai dari $\\lim_{x \\to 3^-} f(x)$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$5$",
      "$7$",
      "$9$",
      "$11$",
      "Tidak ada"
    ],
    correctIndex: 1,
    solution: {
      concept: "Limit kiri $\\lim_{x \\to c^-} f(x)$ adalah nilai pendekatan fungsi ketika variabel $x$ mendekati titik $c$ dari arah kiri ($x < c$). Oleh karena itu, kita menggunakan aturan fungsi yang terdefinisi untuk interval $x < c$.",
      steps: "1. Karena $x \\to 3^-$ menyatakan $x < 3$, gunakan cabang rumus $f(x) = 2x + 1$.\n2. Substitusikan nilai $x = 3$ ke dalam rumus tersebut:\n$$\\lim_{x \\to 3^-} f(x) = 2(3) + 1 = 6 + 1 = 7$$\n3. Jadi, nilai limit kiri tersebut adalah $7$ (pilihan B).",
      pitfalls: "Menggunakan cabang kedua $x^2 - 2$ yang diperuntukkan bagi $x \\ge 3$ (pendekatan dari kanan)."
    }
  },
  {
    id: "mat-lim-fungsi-piecewise-002",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-lim",
    subChapterId: "mat-lim-fungsi",
    subTopicId: "mat-lim-fungsi-piecewise",
    category: "Keberadaan Limit Fungsi Sepotong",
    difficulty: "mudah",
    statement: "Diketahui fungsi $g(x) = \\begin{cases} 4x - 1, & \\text{untuk } x \\le 2 \\\\ x^2 + 3, & \\text{untuk } x > 2 \\end{cases}$. Nilai dari $\\lim_{x \\to 2} g(x)$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$3$",
      "$5$",
      "$7$",
      "$9$",
      "Tidak ada nilai limit"
    ],
    correctIndex: 2,
    solution: {
      concept: "Suatu limit dua sisi $\\lim_{x \\to c} g(x)$ bernilai $L$ jika dan hanya jika limit kiri dan limit kanan keduanya bernilai sama: $\\lim_{x \\to c^-} g(x) = \\lim_{x \\to c^+} g(x) = L$.",
      steps: "1. Hitung limit kiri ($x \\to 2^-$ pada $x \\le 2$):\n$$\\lim_{x \\to 2^-} g(x) = 4(2) - 1 = 8 - 1 = 7$$\n2. Hitung limit kanan ($x \\to 2^+$ pada $x > 2$):\n$$\\lim_{x \\to 2^+} g(x) = 2^2 + 3 = 4 + 3 = 7$$\n3. Karena limit kiri = limit kanan = $7$, maka nilai limit dua sisinya ada dan bernilai $7$.\n4. Jadi, jawabannya adalah $7$ (pilihan C).",
      pitfalls: "Langsung menyatakan limit tidak ada tanpa menguji dan membandingkan kesamaan nilai limit kiri dan kanannya."
    }
  },
  {
    id: "mat-lim-fungsi-piecewise-003",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-lim",
    subChapterId: "mat-lim-fungsi",
    subTopicId: "mat-lim-fungsi-piecewise",
    category: "Limit Kanan Fungsi Nilai Mutlak",
    difficulty: "mudah",
    statement: "Nilai dari $\\lim_{x \\to 4^+} \\frac{|x - 4|}{x - 4}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$-1$",
      "$0$",
      "$1$",
      "$4$",
      "Tidak terdefinisi"
    ],
    correctIndex: 2,
    solution: {
      concept: "Berdasarkan definisi nilai mutlak, $|u| = u$ jika $u \\ge 0$ dan $|u| = -u$ jika $u < 0$. Untuk pendekatan dari kanan $x \\to 4^+$, berlaku $x > 4$, sehingga $(x - 4) > 0$.",
      steps: "1. Perhatikan bahwa ketika $x \\to 4^+$, maka $x > 4$, yang mengakibatkan $x - 4 > 0$.\n2. Berdasarkan definisi nilai mutlak:\n$$|x - 4| = x - 4$$\n3. Sederhanakan bentuk pecahan limit:\n$$\\lim_{x \\to 4^+} \\frac{|x - 4|}{x - 4} = \\lim_{x \\to 4^+} \\frac{x - 4}{x - 4} = \\lim_{x \\to 4^+} 1 = 1$$\n4. Jadi, nilai limit kanan tersebut adalah $1$ (pilihan C).",
      pitfalls: "Mengabaikan arah pendekatan dari kanan dan keliru menyamakan dengan limit dari arah kiri yang bernilai $-1$."
    }
  },
  {
    id: "mat-lim-fungsi-piecewise-004",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-lim",
    subChapterId: "mat-lim-fungsi",
    subTopicId: "mat-lim-fungsi-piecewise",
    category: "Limit Kiri Fungsi Nilai Mutlak",
    difficulty: "mudah",
    statement: "Nilai dari $\\lim_{x \\to 0^-} \\frac{|2x|}{x}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$-2$",
      "$-1$",
      "$0$",
      "$1$",
      "$2$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Ketika variabel $x$ mendekati $0$ dari arah kiri ($x \\to 0^-$), maka nilai $x$ bernilai negatif ($x < 0$). Oleh karena itu, $|2x| = -2x$.",
      steps: "1. Untuk $x < 0$, uraikan bentuk nilai mutlak:\n$$|2x| = -2x$$\n2. Substitusikan ke dalam ekspresi limit:\n$$\\lim_{x \\to 0^-} \\frac{|2x|}{x} = \\lim_{x \\to 0^-} \\frac{-2x}{x}$$\n3. Bagi pembilang dan penyebut dengan $x$ ($x \\ne 0$):\n$$= \\lim_{x \\to 0^-} (-2) = -2$$\n4. Jadi, nilai limit kiri tersebut adalah $-2$ (pilihan A).",
      pitfalls: "Lupa menambahkan tanda minus saat membuka tanda mutlak untuk bilangan bernilai negatif."
    }
  },
  {
    id: "mat-lim-fungsi-piecewise-005",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-lim",
    subChapterId: "mat-lim-fungsi",
    subTopicId: "mat-lim-fungsi-piecewise",
    category: "Limit Kanan Fungsi Tangga Aljabar",
    difficulty: "mudah",
    statement: "Diberikan fungsi $h(x) = \\begin{cases} x + 5, & \\text{untuk } x < 1 \\\\ 3x + 1, & \\text{untuk } x \\ge 1 \\end{cases}$. Nilai dari $\\lim_{x \\to 1^+} h(x)$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$3$",
      "$4$",
      "$5$",
      "$6$",
      "$7$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Limit kanan $\\lim_{x \\to 1^+} h(x)$ ditinjau untuk nilai-nilai $x$ yang lebih besar dari 1 ($x > 1$). Gunakan cabang aturan fungsi yang bersesuaian dengan interval tersebut.",
      steps: "1. Untuk $x \\to 1^+$, berlaku $x > 1$, sehingga fungsi yang digunakan adalah $h(x) = 3x + 1$.\n2. Substitusikan $x = 1$:\n$$\\lim_{x \\to 1^+} h(x) = 3(1) + 1 = 4$$\n3. Jadi, nilai limit kanan tersebut adalah $4$ (pilihan B).",
      pitfalls: "Salah memilih cabang fungsi pertama $x + 5$ yang bernilai $6$ (yang merupakan nilai limit kiri)."
    }
  }
];
