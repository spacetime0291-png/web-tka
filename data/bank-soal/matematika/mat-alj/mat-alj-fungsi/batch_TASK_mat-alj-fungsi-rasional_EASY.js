/**
 * Batch Task: TASK_mat-alj-fungsi-rasional_EASY
 * SubTopic: Fungsi Rasional (mat-alj-fungsi-rasional)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "mat-alj-fungsi-rasional-001",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-fungsi",
    subTopicId: "mat-alj-fungsi-rasional",
    category: "Asimtot Tegak Fungsi Rasional",
    difficulty: "mudah",
    statement: "Persamaan asimtot tegak dari grafik fungsi rasional $f(x) = \\frac{3x + 2}{x - 4}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$x = 4$",
      "$x = -4$",
      "$y = 3$",
      "$x = -2$",
      "$y = 4$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Asimtot tegak dari fungsi rasional tereduksi $f(x) = \\frac{g(x)}{h(x)}$ adalah garis vertikal $x = c$ yang diperoleh dari pembuat nol penyebut, yaitu $h(c) = 0$.",
      steps: "1. Ambil bagian penyebut dari fungsi: $x - 4$.<br>2. Cari pembuat nol penyebut:<br>$$x - 4 = 0 \\implies x = 4$$<br>3. Karena pembilang saat $x = 4$ bernilai $3(4) + 2 = 14 \\neq 0$, maka garis $x = 4$ adalah asimtot tegak.<br>4. Jadi persamaan asimtot tegak adalah $x = 4$ (pilihan A).",
      pitfalls: "Tertukar dengan asimtot datar ($y = 3$) atau salah tanda menjadi $x = -4$."
    }
  },
  {
    id: "mat-alj-fungsi-rasional-002",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-fungsi",
    subTopicId: "mat-alj-fungsi-rasional",
    category: "Asimtot Datar Fungsi Rasional Derajat Sama",
    difficulty: "mudah",
    statement: "Persamaan asimtot datar dari grafik fungsi rasional $f(x) = \\frac{5x - 7}{2x + 6}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$y = \\frac{5}{2}$",
      "$x = -3$",
      "$y = -\\frac{7}{6}$",
      "$y = 0$",
      "$x = \\frac{5}{2}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Asimtot datar dari fungsi rasional $f(x) = \\frac{ax + b}{cx + d}$ dengan derajat pembilang dan penyebut sama diperoleh dari nilai limit menuju tak hingga: $y = \\lim_{x \\to \\pm\\infty} f(x) = \\frac{a}{c}$.",
      steps: "1. Tinjau koefisien dari suku derajat tertinggi (derajat 1):\n- Koefisien $x$ pada pembilang: $a = 5$\n- Koefisien $x$ pada penyebut: $c = 2$<br>2. Hitung asimtot datar:\n$$y = \\frac{a}{c} = \\frac{5}{2}$$<br>3. Jadi persamaan asimtot datarnya adalah garis horizontal $y = \\frac{5}{2}$ (pilihan A).",
      pitfalls: "Tertukar antara variabel garis horizontal ($y$) dengan garis vertikal ($x = \\frac{5}{2}$)."
    }
  },
  {
    id: "mat-alj-fungsi-rasional-003",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-fungsi",
    subTopicId: "mat-alj-fungsi-rasional",
    category: "Asimtot Datar Derajat Pembilang Lebih Kecil",
    difficulty: "mudah",
    statement: "Persamaan asimtot datar dari kurva fungsi rasional $f(x) = \\frac{4}{x^2 + 1}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$y = 0$",
      "$y = 4$",
      "$x = 0$",
      "$y = 1$",
      "Tidak memiliki asimtot datar"
    ],
    correctIndex: 0,
    solution: {
      concept: "Jika derajat pembilang lebih kecil daripada derajat penyebut pada fungsi rasional, maka nilai limit fungsi saat $x \\to \\pm\\infty$ adalah 0, sehingga garis $y = 0$ (sumbu-$X$) merupakan asimtot datarnya.",
      steps: "1. Derajat pembilang $= 0$ (konstanta 4). Derajat penyebut $= 2$ ($x^2 + 1$).<br>2. Hitung nilai limit fungsi untuk $x$ menuju tak hingga:\n$$\\lim_{x \\to \\infty} \\frac{4}{x^2 + 1} = 0$$<br>3. Maka garis $y = 0$ adalah asimtot datar dari kurva tersebut.<br>4. Jadi persamaan asimtot datar adalah $y = 0$ (pilihan A).",
      pitfalls: "Mengira asimtot datarnya adalah konstanta pembilang $y = 4$."
    }
  },
  {
    id: "mat-alj-fungsi-rasional-004",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-fungsi",
    subTopicId: "mat-alj-fungsi-rasional",
    category: "Titik Potong Fungsi Rasional dengan Sumbu-X",
    difficulty: "mudah",
    statement: "Titik potong grafik fungsi pecahan aljabar $f(x) = \\frac{2x - 6}{x + 5}$ dengan sumbu-$X$ terletak pada koordinat ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$(3, 0)$",
      "$(-3, 0)$",
      "$(0, 3)$",
      "$(-5, 0)$",
      "$\\left(0, -\\frac{6}{5}\\right)$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Grafik fungsi memotong sumbu-$X$ jika nilai $f(x) = 0$. Untuk fungsi pecahan $\\frac{g(x)}{h(x)} = 0$, syaratnya adalah pembilang bernilai nol ($g(x) = 0$) dengan penyebut tidak nol ($h(x) \\neq 0$).",
      steps: "1. Samakan nilai fungsi dengan nol:<br>$$\\frac{2x - 6}{x + 5} = 0$$<br>2. Selesaikan pembilang sama dengan nol:<br>$$2x - 6 = 0 \\implies 2x = 6 \\implies x = 3$$<br>3. Periksa penyebut saat $x = 3$: $3 + 5 = 8 \\neq 0$ (terpenuhi).<br>4. Diperoleh titik potong dengan sumbu-$X$ adalah $(3, 0)$ (pilihan A).",
      pitfalls: "Menyamakan penyebut dengan nol ($x = -5$) yang justru merupakan asimtot tegak dan bukan titik potong grafik."
    }
  },
  {
    id: "mat-alj-fungsi-rasional-005",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-fungsi",
    subTopicId: "mat-alj-fungsi-rasional",
    category: "Titik Potong Fungsi Rasional dengan Sumbu-Y",
    difficulty: "mudah",
    statement: "Titik potong grafik fungsi rasional $f(x) = \\frac{4x - 12}{3x + 2}$ dengan sumbu-$Y$ berada pada koordinat ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$(0, -6)$",
      "$(0, 6)$",
      "$(3, 0)$",
      "$(-6, 0)$",
      "$\\left(0, -\\frac{2}{3}\\right)$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Titik potong grafik fungsi dengan sumbu-$Y$ diperoleh dengan mensubstitusikan nilai absis $x = 0$ ke dalam rumus fungsi.",
      steps: "1. Substitusikan $x = 0$ ke dalam fungsi $f(x)$:<br>$$f(0) = \\frac{4(0) - 12}{3(0) + 2} = \\frac{-12}{2} = -6$$<br>2. Maka koordinat titik potongnya adalah $(0, -6)$.<br>3. Jadi titik potong dengan sumbu-$Y$ adalah $(0, -6)$ (pilihan A).",
      pitfalls: "Salah tanda pada pembagian $\\frac{-12}{2} = -6$ menjadi $+6$."
    }
  }
];
