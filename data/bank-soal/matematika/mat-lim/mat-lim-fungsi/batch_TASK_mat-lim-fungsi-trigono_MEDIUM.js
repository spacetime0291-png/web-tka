/**
 * Batch Task: TASK_mat-lim-fungsi-trigono_MEDIUM
 * SubTopic: Limit: Limit Fungsi Trigonometri (mat-lim-fungsi-trigono)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "mat-lim-fungsi-trigono-006",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-lim",
    subChapterId: "mat-lim-fungsi",
    subTopicId: "mat-lim-fungsi-trigono",
    category: "Limit Trigonometri Bentuk cos ax - cos bx",
    difficulty: "sedang",
    statement: "Nilai dari $\\lim_{x \\to 0} \\frac{\\cos 4x - \\cos 2x}{x^2}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$-12$",
      "$-6$",
      "$-3$",
      "$3$",
      "$6$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Gunakan rumus selisih dua fungsi cosinus: $\\cos A - \\cos B = -2\\sin\\left(\\frac{A + B}{2}\\right)\\sin\\left(\\frac{A - B}{2}\\right)$.",
      steps: "1. Uraikan pembilang $\\cos 4x - \\cos 2x$:\n$$\\cos 4x - \\cos 2x = -2\\sin\\left(\\frac{4x + 2x}{2}\\right)\\sin\\left(\\frac{4x - 2x}{2}\\right) = -2\\sin 3x \\sin x$$\n2. Masukkan ke dalam bentuk limit:\n$$\\lim_{x \\to 0} \\frac{-2\\sin 3x \\sin x}{x^2} = -2 \\left(\\lim_{x \\to 0} \\frac{\\sin 3x}{x}\\right) \\left(\\lim_{x \\to 0} \\frac{\\sin x}{x}\\right)$$\n3. Terapkan nilai limit trigonometri dasar:\n$$= -2 \\times 3 \\times 1 = -6$$\n4. Jadi, nilai limit tersebut adalah $-6$ (pilihan B).",
      pitfalls: "Lupa tanda minus di depan rumus selisih cosinus ($-2\\sin...\\sin...$) sehingga menghasilkan jawaban positif $+6$."
    }
  },
  {
    id: "mat-lim-fungsi-trigono-007",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-lim",
    subChapterId: "mat-lim-fungsi",
    subTopicId: "mat-lim-fungsi-trigono",
    category: "Limit Trigonometri Menuju Titik Bukan Nol",
    difficulty: "sedang",
    statement: "Nilai dari $\\lim_{x \\to 2} \\frac{\\sin(x - 2)}{x^2 - 4}$ adalah ....",
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
    correctIndex: 1,
    solution: {
      concept: "Lakukan substitusi variabel $u = x - 2$. Ketika $x \\to 2$, maka $u \\to 0$. Faktorkan penyebut $x^2 - 4 = (x - 2)(x + 2)$ untuk memanfaatkan limit standar $\\lim_{u \\to 0} \\frac{\\sin u}{u} = 1$.",
      steps: "1. Faktorkan penyebut:\n$$x^2 - 4 = (x - 2)(x + 2)$$\n2. Tuliskan pecahan limit:\n$$\\lim_{x \\to 2} \\left(\\frac{\\sin(x - 2)}{x - 2} \\times \\frac{1}{x + 2}\\right)$$\n3. Misalkan $u = x - 2$, di mana $u \\to 0$ saat $x \\to 2$:\n$$\\left(\\lim_{u \\to 0} \\frac{\\sin u}{u}\\right) \\times \\left(\\lim_{x \\to 2} \\frac{1}{x + 2}\\right)$$\n4. Evaluasi masing-masing suku:\n$$= 1 \\times \\frac{1}{2 + 2} = \\frac{1}{4}$$\n5. Jadi, nilai limit tersebut adalah $\\frac{1}{4}$ (pilihan B).",
      pitfalls: "Hanya menghitung bagian trigonometrinya menjadi 1 tanpa mengevaluasi faktor aljabar $(x + 2)$ di penyebut."
    }
  },
  {
    id: "mat-lim-fungsi-trigono-008",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-lim",
    subChapterId: "mat-lim-fungsi",
    subTopicId: "mat-lim-fungsi-trigono",
    category: "Limit Trigonometri Bentuk 1 - cos 4x / x tan 2x",
    difficulty: "sedang",
    statement: "Nilai dari $\\lim_{x \\to 0} \\frac{1 - \\cos 4x}{x \\tan 2x}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1$",
      "$2$",
      "$4$",
      "$6$",
      "$8$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Gunakan identitas sudut ganda: $1 - \\cos 4x = 2\\sin^2 2x$. Selanjutnya pasangkan faktor-faktor sinus pada pembilang dengan variabel aljabar dan tangen pada penyebut.",
      steps: "1. Ubah pembilang $1 - \\cos 4x = 2\\sin^2 2x$:\n$$\\lim_{x \\to 0} \\frac{2\\sin^2 2x}{x \\tan 2x}$$\n2. Uraikan menjadi perkalian dua limit:\n$$= 2 \\left(\\lim_{x \\to 0} \\frac{\\sin 2x}{x}\\right) \\left(\\lim_{x \\to 0} \\frac{\\sin 2x}{\\tan 2x}\\right)$$\n3. Hitung masing-masing nilai limit:\n$$\\lim_{x \\to 0} \\frac{\\sin 2x}{x} = 2$$\n$$\\lim_{x \\to 0} \\frac{\\sin 2x}{\\tan 2x} = \\frac{2}{2} = 1$$\n4. Kalikan seluruh hasil:\n$$= 2 \\times 2 \\times 1 = 4$$\n5. Jadi, nilai limit tersebut adalah $4$ (pilihan C).",
      pitfalls: "Lupa mengalikan dengan angka 2 di depan rumus identitas sudut rangkap atau salah menghitung $\\lim_{x \\to 0} \\frac{\\sin 2x}{\\tan 2x}$."
    }
  },
  {
    id: "mat-lim-fungsi-trigono-009",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-lim",
    subChapterId: "mat-lim-fungsi",
    subTopicId: "mat-lim-fungsi-trigono",
    category: "Limit Trigonometri Menuju Tak Hingga",
    difficulty: "sedang",
    statement: "Nilai dari $\\lim_{x \\to \\infty} x \\sin\\left(\\frac{3}{x}\\right) \\cos\\left(\\frac{2}{x}\\right)$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$0$",
      "$\\frac{3}{2}$",
      "$2$",
      "$3$",
      "$6$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Gunakan substitusi variabel $y = \\frac{1}{x}$. Saat $x \\to \\infty$, maka $y \\to 0$. Ekspresi $x$ dapat ditulis sebagai $\\frac{1}{y}$, sehingga bentuk limit berubah menjadi limit trigonometri di sekitar nol.",
      steps: "1. Misalkan $y = \\frac{1}{x}$, sehingga $x = \\frac{1}{y}$. Saat $x \\to \\infty$, maka $y \\to 0$.\n2. Substitusikan ke dalam bentuk limit:\n$$\\lim_{y \\to 0} \\frac{1}{y} \\sin(3y) \\cos(2y) = \\lim_{y \\to 0} \\left(\\frac{\\sin 3y}{y} \\times \\cos 2y\\right)$$\n3. Evaluasi masing-masing limit:\n$$\\lim_{y \\to 0} \\frac{\\sin 3y}{y} = 3$$\n$$\\lim_{y \\to 0} \\cos 2y = \\cos 0 = 1$$\n4. Kalikan kedua hasil limit:\n$$= 3 \\times 1 = 3$$\n5. Jadi, nilai limit tersebut adalah $3$ (pilihan D).",
      pitfalls: "Menganggap bahwa $\\cos\\left(\\frac{2}{x}\\right)$ menuju $0$ saat $x \\to \\infty$, padahal $\\cos(0) = 1$."
    }
  },
  {
    id: "mat-lim-fungsi-trigono-010",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-lim",
    subChapterId: "mat-lim-fungsi",
    subTopicId: "mat-lim-fungsi-trigono",
    category: "Menentukan Parameter Limit Trigonometri",
    difficulty: "sedang",
    statement: "Jika diketahui $\\lim_{x \\to 0} \\frac{a x \\sin x}{1 - \\cos 2x} = 3$, maka nilai dari konstanta $a$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$3$",
      "$4$",
      "$6$",
      "$8$",
      "$12$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Gunakan identitas $1 - \\cos 2x = 2\\sin^2 x$ untuk menyederhanakan penyebut, kemudian gunakan teorema limit trigonometri untuk menyelesaikan nilai konstanta $a$.",
      steps: "1. Ubah penyebut menggunakan identitas sudut rangkap:\n$$1 - \\cos 2x = 2\\sin^2 x$$\n2. Tuliskan limit:\n$$\\lim_{x \\to 0} \\frac{a x \\sin x}{2\\sin^2 x} = \\lim_{x \\to 0} \\frac{a x \\sin x}{2(\\sin x)(\\sin x)}$$\n3. Sederhanakan faktor $\\sin x$:\n$$= \\lim_{x \\to 0} \\frac{a x}{2\\sin x} = \\frac{a}{2} \\lim_{x \\to 0} \\frac{x}{\\sin x} = \\frac{a}{2} \\times 1 = \\frac{a}{2}$$\n4. Samakan dengan nilai limit yang diketahui:\n$$\\frac{a}{2} = 3 \\implies a = 6$$\n5. Jadi, nilai konstanta $a$ adalah $6$ (pilihan C).",
      pitfalls: "Lupa angka 2 di penyebut saat mengubah $1 - \\cos 2x$, sehingga mengira $a = 3$."
    }
  }
];
