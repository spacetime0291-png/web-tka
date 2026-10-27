/**
 * Batch Task: TASK_mat-lim-fungsi-trigono_EASY
 * SubTopic: Limit: Limit Fungsi Trigonometri (mat-lim-fungsi-trigono)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "mat-lim-fungsi-trigono-001",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-lim",
    subChapterId: "mat-lim-fungsi",
    subTopicId: "mat-lim-fungsi-trigono",
    category: "Rumus Dasar Limit Trigonometri Sinus",
    difficulty: "mudah",
    statement: "Nilai dari $\\lim_{x \\to 0} \\frac{\\sin 6x}{2x}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1$",
      "$2$",
      "$3$",
      "$4$",
      "$6$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Berdasarkan teorema limit trigonometri dasar, untuk setiap konstanta real $a$ dan $b$ dengan $b \\ne 0$, berlaku $\\lim_{x \\to 0} \\frac{\\sin ax}{bx} = \\frac{a}{b}$.",
      steps: "1. Identifikasi koefisien pembilang dan penyebut: $a = 6$ dan $b = 2$.\n2. Terapkan rumus dasar limit trigonometri:\n$$\\lim_{x \\to 0} \\frac{\\sin 6x}{2x} = \\frac{6}{2} = 3$$\n3. Jadi, nilai limit tersebut adalah $3$ (pilihan C).",
      pitfalls: "Mencoba mencoret nilai $x$ secara langsung dari dalam argumen sinus $\\sin(6x)$ tanpa menggunakan sifat limit trigonometri."
    }
  },
  {
    id: "mat-lim-fungsi-trigono-002",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-lim",
    subChapterId: "mat-lim-fungsi",
    subTopicId: "mat-lim-fungsi-trigono",
    category: "Rumus Dasar Limit Tangen dan Sinus",
    difficulty: "mudah",
    statement: "Nilai dari $\\lim_{x \\to 0} \\frac{\\tan 4x}{\\sin 8x}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{1}{4}$",
      "$\\frac{1}{2}$",
      "$1$",
      "$2$",
      "$4$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Untuk $x \\to 0$, perbandingan fungsi tangen dan sinus memenuhi $\\lim_{x \\to 0} \\frac{\\tan ax}{\\sin bx} = \\frac{a}{b}$.",
      steps: "1. Tuliskan bentuk pecahan limit sebagai perkalian dua limit dasar:\n$$\\lim_{x \\to 0} \\left(\\frac{\\tan 4x}{4x} \\times \\frac{8x}{\\sin 8x} \\times \\frac{4x}{8x}\\right)$$\n2. Evaluasi masing-masing komponen:\n$$= 1 \\times 1 \\times \\frac{4}{8} = \\frac{1}{2}$$\n3. Jadi, nilai limit tersebut adalah $\\frac{1}{2}$ (pilihan B).",
      pitfalls: "Membalik rasio koefisien menjadi $\\frac{8}{4} = 2$."
    }
  },
  {
    id: "mat-lim-fungsi-trigono-003",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-lim",
    subChapterId: "mat-lim-fungsi",
    subTopicId: "mat-lim-fungsi-trigono",
    category: "Limit Substitusi Langsung Trigonometri",
    difficulty: "mudah",
    statement: "Nilai dari $\\lim_{x \\to \\frac{\\pi}{4}} \\frac{\\sin x + \\cos x}{\\tan x}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{1}{2}$",
      "$1$",
      "$\\sqrt{2}$",
      "$2$",
      "$2\\sqrt{2}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Jika penyebut dari suatu fungsi rasional trigonometri tidak bernilai nol pada titik limit yang dituju, nilai limit dapat dihitung secara langsung menggunakan substitusi nilai variabel.",
      steps: "1. Substitusikan $x = \\frac{\\pi}{4}$ ($45^\\circ$):\n$$\\sin \\frac{\\pi}{4} = \\frac{1}{2}\\sqrt{2}$$\n$$\\cos \\frac{\\pi}{4} = \\frac{1}{2}\\sqrt{2}$$\n$$\\tan \\frac{\\pi}{4} = 1$$\n2. Hitung nilai pecahan limit:\n$$\\frac{\\frac{1}{2}\\sqrt{2} + \\frac{1}{2}\\sqrt{2}}{1} = \\frac{\\sqrt{2}}{1} = \\sqrt{2}$$\n3. Jadi, nilai limit tersebut adalah $\\sqrt{2}$ (pilihan C).",
      pitfalls: "Salah mengingat nilai trigonometri istimewa pada sudut $\\frac{\\pi}{4}$ atau menduga bahwa limit bernilai tak tentu $\\frac{0}{0}$."
    }
  },
  {
    id: "mat-lim-fungsi-trigono-004",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-lim",
    subChapterId: "mat-lim-fungsi",
    subTopicId: "mat-lim-fungsi-trigono",
    category: "Limit Trigonometri Bentuk 1 - cos ax",
    difficulty: "mudah",
    statement: "Nilai dari $\\lim_{x \\to 0} \\frac{1 - \\cos 2x}{x^2}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$0$",
      "$1$",
      "$2$",
      "$4$",
      "Tidak terdefinisi"
    ],
    correctIndex: 2,
    solution: {
      concept: "Gunakan identitas trigonometri sudut rangkap: $\\cos 2x = 1 - 2\\sin^2 x \\iff 1 - \\cos 2x = 2\\sin^2 x$.",
      steps: "1. Ubah bentuk pembilang menggunakan identitas sudut rangkap:\n$$1 - \\cos 2x = 2\\sin^2 x$$\n2. Masukkan ke dalam limit:\n$$\\lim_{x \\to 0} \\frac{2\\sin^2 x}{x^2} = 2 \\times \\left(\\lim_{x \\to 0} \\frac{\\sin x}{x}\\right)^2$$\n3. Karena $\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$, maka:\n$$= 2 \\times (1)^2 = 2$$\n4. Jadi, nilai limitnya adalah $2$ (pilihan C).",
      pitfalls: "Lupa faktor 2 di depan $\\sin^2 x$ sehingga mengira hasilnya adalah $1$."
    }
  },
  {
    id: "mat-lim-fungsi-trigono-005",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-lim",
    subChapterId: "mat-lim-fungsi",
    subTopicId: "mat-lim-fungsi-trigono",
    category: "Perkalian Suku Aljabar dan Trigonometri",
    difficulty: "mudah",
    statement: "Nilai dari $\\lim_{x \\to 0} \\frac{x \\tan 3x}{\\sin^2 2x}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{1}{4}$",
      "$\\frac{1}{2}$",
      "$\\frac{3}{4}$",
      "$\\frac{3}{2}$",
      "$3$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Uraikan penyebut kuadrat $\\sin^2 2x = (\\sin 2x)(\\sin 2x)$ dan pasangkan masing-masing dengan suku pembilang.",
      steps: "1. Uraikan bentuk pecahan limit:\n$$\\lim_{x \\to 0} \\left(\\frac{x}{\\sin 2x} \\times \\frac{\\tan 3x}{\\sin 2x}\\right)$$\n2. Terapkan sifat limit trigonometri:\n$$\\lim_{x \\to 0} \\frac{x}{\\sin 2x} = \\frac{1}{2}$$\n$$\\lim_{x \\to 0} \\frac{\\tan 3x}{\\sin 2x} = \\frac{3}{2}$$\n3. Kalikan kedua hasil limit:\n$$= \\frac{1}{2} \\times \\frac{3}{2} = \\frac{3}{4}$$\n4. Jadi, nilai limit tersebut adalah $\\frac{3}{4}$ (pilihan C).",
      pitfalls: "Tidak mengkuadratkan koefisien penyebut $\\sin^2 2x$ sehingga membaginya hanya dengan $2$ bukan $2 \\times 2 = 4$."
    }
  }
];
